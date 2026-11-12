"""
Builds the geometry behind the 3D branch map on the About page.

Reads
  tools/_india_states.json   real state / union-territory boundaries (geohacker/india)
  tools/_ne_countries.json   Natural Earth country outlines, for the neighbours

Writes
  src/sections/india-geo.ts  Mercator-projected, simplified rings + pin anchors

Everything is normalised to a 0..1 map space (x right, y down) so the canvas
renderer can tilt it into 3D without carrying geographic maths at runtime.
"""

import json, math, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, "..")
TMP = os.environ.get("TEMP", "/tmp") if os.name != "nt" else os.environ["TEMP"]
TMP = os.path.join(TMP, "opencode")
OUT_TS = os.path.join(ROOT, "src", "sections", "india-geo.ts")

STATES = os.path.join(TMP, "india_states.json")
NEIGHBOURS = os.path.join(TMP, "ne_countries.json")

NEIGHBOUR_IDS = {
    "PAK": "Pakistan", "NPL": "Nepal", "BTN": "Bhutan", "BGD": "Bangladesh",
    "LKA": "Sri Lanka", "CHN": "China", "MMR": "Myanmar", "TJK": "Tajikistan",
    "AFG": "Afghanistan", "NPL ": "Nepal",
}

# dojo / branch anchors: id, lon, lat
PINS = [
    ("udhampur", 74.94, 32.99),
    ("durga", 77.21, 28.61),
    ("maharashtra", 75.71, 19.75),
    ("goa", 73.83, 15.50),
    ("andhra", 79.74, 15.91),
    ("bangalore", 77.59, 12.97),
    ("chennai", 80.27, 13.08),
]


# --------------------------------------------------------------- geometry
def rings_of(geom):
    """Every linear ring of a (Multi)Polygon geometry."""
    t = geom["type"]
    if t == "Polygon":
        polys = [geom["coordinates"]]
    elif t == "MultiPolygon":
        polys = geom["coordinates"]
    else:
        return []
    out = []
    for poly in polys:
        for ring in poly:
            if len(ring) >= 3:
                out.append([(float(p[0]), float(p[1])) for p in ring])
    return out


def dp(points, eps):
    """Douglas-Peucker, iterative so long coastlines do not blow the stack."""
    n = len(points)
    if n < 3:
        return points[:]
    keep = [False] * n
    keep[0] = keep[n - 1] = True
    stack = [(0, n - 1)]
    while stack:
        i, j = stack.pop()
        if j <= i + 1:
            continue
        ax, ay = points[i]
        bx, by = points[j]
        dx, dy = bx - ax, by - ay
        den = math.hypot(dx, dy)
        best, bi = -1.0, -1
        for k in range(i + 1, j):
            px, py = points[k]
            if den == 0:
                d = math.hypot(px - ax, py - ay)
            else:
                d = abs(dy * px - dx * py + bx * ay - by * ax) / den
            if d > best:
                best, bi = d, k
        if best > eps:
            keep[bi] = True
            stack.append((i, bi))
            stack.append((bi, j))
    return [p for p, k in zip(points, keep) if k]


def merc(lon, lat):
    """Web-Mercator into degrees."""
    lat = max(min(lat, 85.0), -85.0)
    return lon, math.degrees(math.log(math.tan(math.pi / 4 + math.radians(lat) / 2)))


# ------------------------------------------------------------- load + prep
states = json.load(open(STATES, encoding="utf-8"))
ne = json.load(open(NEIGHBOURS, encoding="utf-8"))

regions = []
for f in states["features"]:
    name = f["properties"].get("NAME_1") or f["properties"].get("NAME_0")
    rs = rings_of(f["geometry"])
    if not rs:
        continue
    simplified = []
    for r in rs:
        s = dp(r, 0.05)
        if len(s) >= 3:
            simplified.append(s)
    if simplified:
        regions.append({"name": name, "rings": simplified})

neighbours = []
for f in ne["features"]:
    p = f["properties"]
    iso = (p.get("ADM0_A3") or p.get("ISO_A3") or "").strip()
    if iso not in NEIGHBOUR_IDS:
        continue
    rs = rings_of(f["geometry"])
    simplified = []
    for r in rs:
        s = dp(r, 0.10)
        if len(s) >= 3:
            simplified.append([merc(lo, la) for lo, la in s])  # mercator now
    if simplified:
        neighbours.append({"name": NEIGHBOUR_IDS[iso], "rings": simplified})

# ------------------------------------------------- project + normalise
# the frame is set by India alone; the neighbours are clipped to it so a distant
# China or Tajikistan cannot stretch the map space
ind_pts = [merc(lo, la) for item in regions for r in item["rings"] for lo, la in r]
ixs = [p[0] for p in ind_pts]
iys = [p[1] for p in ind_pts]
minx, maxx = min(ixs), max(ixs)
miny, maxy = min(iys), max(iys)
padx = (maxx - minx) * 0.06
pady = (maxy - miny) * 0.05
minx -= padx
maxx += padx
miny -= pady
maxy += pady


def clip_ring(ring, xmin, ymin, xmax, ymax):
    """Sutherland-Hodgman clip of a ring to an axis-aligned box."""
    def clip(points, inside, inter):
        if not points:
            return []
        out = []
        prev = points[-1]
        prev_in = inside(prev)
        for cur in points:
            cur_in = inside(cur)
            if cur_in:
                if not prev_in:
                    out.append(inter(prev, cur))
                out.append(cur)
            elif prev_in:
                out.append(inter(prev, cur))
            prev, prev_in = cur, cur_in
        return out

    def cut_x(a, b, keep_greater, limit):
        t = (limit - a[0]) / (b[0] - a[0]) if b[0] != a[0] else 0.0
        return (limit, a[1] + t * (b[1] - a[1]))

    def cut_y(a, b, limit):
        t = (limit - a[1]) / (b[1] - a[1]) if b[1] != a[1] else 0.0
        return (a[0] + t * (b[0] - a[0]), limit)

    pts = list(ring)
    pts = clip(pts, lambda p: p[0] >= xmin, lambda a, b: cut_x(a, b, True, xmin))
    pts = clip(pts, lambda p: p[0] <= xmax, lambda a, b: cut_x(a, b, False, xmax))
    pts = clip(pts, lambda p: p[1] >= ymin, lambda a, b: cut_y(a, b, ymin))
    pts = clip(pts, lambda p: p[1] <= ymax, lambda a, b: cut_y(a, b, ymax))
    return pts


# uniform scale, north at the top: x runs 0..1, y runs 0..h
scale = 1.0 / (maxx - minx)


def norm(lo, la):
    x, y = merc(lo, la)
    return ((x - minx) * scale, (maxy - y) * scale)


MAP_H = (maxy - miny) * scale
print(f"map space: {1:.3f} x {MAP_H:.3f} (Mercator, north up)")

# trim the neighbours to the frame
for item in neighbours:
    kept = []
    for r in item["rings"]:
        c = clip_ring(r, minx, miny, maxx, maxy)
        if len(c) >= 3:
            kept.append(c)
    item["rings"] = kept
neighbours = [i for i in neighbours if i["rings"]]

def region_str(item, mercator=False):
    parts = []
    for r in item["rings"]:
        if mercator:
            pts = [((mx - minx) * scale, (maxy - my) * scale) for mx, my in r]
        else:
            pts = [norm(lo, la) for lo, la in r]
        parts.append("[" + ",".join(f"[{x:.4f},{y:.4f}]" for x, y in pts) + "]")
    return "[" + ",".join(parts) + "]"


pin_lines = []
for pid, lo, la in PINS:
    u, v = norm(lo, la)
    pin_lines.append(f'\t{{ id: "{pid}", x: {u:.4f}, y: {v:.4f} }},')

body = []
body.append("/**")
body.append(" * Geometry for the 3D branch map on the About page.")
body.append(" *")
body.append(" * Real state and union-territory boundaries (geohacker/india) plus the")
body.append(" * surrounding countries (Natural Earth), simplified with Douglas-Peucker")
body.append(" * and projected into Web-Mercator, then normalised to a 0..1 square so the")
body.append(" * canvas renderer can tilt the whole thing into 3D.")
body.append(" *")
body.append(" * Generated by tools/make_india_geo.py - do not edit by hand.")
body.append(" */")
body.append("")
body.append("export type MapRing = number[][];")
body.append("")
body.append("export type MapRegion = {")
body.append("\tname: string;")
body.append("\trings: MapRing[];")
body.append("};")
body.append("")
body.append("export type MapAnchor = {")
body.append("\tid: string;")
body.append("\tx: number;")
body.append("\ty: number;")
body.append("};")
body.append("")
body.append(f"export const indiaRegions: MapRegion[] = [")
for item in regions:
    body.append(f'\t{{ name: "{item["name"]}", rings: {region_str(item)} }},')
body.append("];")
body.append("")
body.append("export const indiaAnchors: MapAnchor[] = [")
body.extend(pin_lines)
body.append("];")
body.append("")
body.append(f"/** height of the map space in the same units as its width */")
body.append(f"export const indiaMapHeight = {MAP_H:.4f};")
body.append("")

with open(OUT_TS, "w", encoding="utf-8") as f:
    f.write("\n".join(body))

pts = sum(len(r) for i in regions for r in i["rings"])
npts = sum(len(r) for i in neighbours for r in i["rings"])
print(f"regions {len(regions)} ({pts} pts), neighbours {len(neighbours)} ({npts} pts)")
print(f"wrote {OUT_TS} ({os.path.getsize(OUT_TS)//1024} KB)")
