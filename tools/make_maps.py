"""
Generates the dotted world map and dotted India map used on the About page.

Output:
  public/assets/img/about/world-map.svg  (1200 x 600, equirectangular)
  public/assets/img/about/india-map.svg  (600 x 600, India + neighbours)

Marker positions are printed as percentages so the React overlay can place
HTML pins exactly on top of the artwork.
"""

import os
import json

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "assets", "img", "about")

DOT = 9          # dot grid spacing (user units)
R = 1.95         # dot radius
LAND = "#ffffff"  # land dots (white, faded by opacity)
LAND_OP = 0.32
FADED = "#ffffff"  # neighbouring-country dots
FADED_OP = 0.14
HOT = "#ff2a1c"   # highlighted country dots (site red, brightened)


def project_world(lon, lat, w=1200, h=600):
    return ((lon + 180.0) / 360.0 * w, (90.0 - lat) / 180.0 * h)


def project_region(lon, lat, lon0, lon1, lat0, lat1, w=600, h=600):
    return ((lon - lon0) / (lon1 - lon0) * w, (lat1 - lat) / (lat1 - lat0) * h)


def to_path(points, proj):
    d = []
    for i, (lon, lat) in enumerate(points):
        x, y = proj(lon, lat)
        d.append(("M" if i == 0 else "L") + f"{x:.1f} {y:.1f}")
    d.append("Z")
    return " ".join(d)


# --------------------------------------------------------------- geography

WORLD = [
    # North America
    [(-168, 65), (-165, 72), (-140, 70), (-125, 70), (-110, 68), (-95, 70), (-85, 73),
     (-75, 70), (-60, 60), (-52, 47), (-66, 44), (-70, 41), (-75, 35), (-81, 25),
     (-84, 30), (-90, 29), (-97, 26), (-105, 22), (-110, 24), (-115, 30), (-124, 40),
     (-125, 48), (-135, 57), (-150, 59), (-165, 54)],
    # Greenland
    [(-45, 60), (-20, 70), (-25, 82), (-55, 83), (-70, 76), (-55, 62)],
    # South America
    [(-77, 8), (-72, 11), (-62, 10), (-52, 5), (-50, 0), (-44, -2), (-35, -6),
     (-38, -13), (-40, -20), (-48, -25), (-53, -34), (-58, -38), (-62, -40), (-65, -45),
     (-70, -54), (-75, -52), (-73, -45), (-73, -37), (-71, -30), (-70, -20), (-75, -14),
     (-79, -7), (-81, 0), (-78, 5)],
    # Africa
    [(-17, 15), (-16, 21), (-10, 27), (-6, 32), (0, 36), (10, 37), (20, 32), (32, 31),
     (35, 24), (38, 17), (43, 12), (51, 12), (48, 5), (41, -2), (40, -10), (35, -20),
     (33, -26), (28, -33), (20, -35), (18, -32), (14, -22), (12, -16), (9, -1), (9, 4),
     (3, 6), (-8, 5), (-13, 9)],
    # Europe
    [(-10, 36), (-9, 43), (-2, 43), (-5, 48), (0, 49), (4, 52), (8, 54), (10, 57),
     (20, 55), (28, 60), (30, 65), (22, 71), (30, 70), (40, 68), (50, 68), (60, 70),
     (68, 66), (60, 60), (60, 50), (48, 45), (40, 45), (30, 45), (28, 41), (20, 40),
     (15, 40), (12, 45), (3, 43), (-2, 36)],
    # Asia
    [(30, 70), (60, 70), (75, 73), (100, 77), (110, 74), (140, 72), (170, 66), (180, 64),
     (160, 60), (150, 58), (143, 50), (135, 45), (130, 42), (127, 38), (122, 31),
     (121, 25), (110, 21), (105, 10), (100, 3), (95, 8), (90, 22), (80, 10), (73, 15),
     (68, 24), (60, 25), (57, 25), (48, 30), (44, 38), (36, 42), (30, 45), (28, 40),
     (35, 45), (45, 50), (55, 55), (60, 60), (70, 68)],
    # Australia
    [(114, -22), (113, -26), (115, -34), (120, -34), (129, -32), (138, -35), (145, -38),
     (150, -37), (153, -28), (146, -19), (142, -11), (130, -12), (125, -14), (118, -20)],
    # Madagascar
    [(43, -12), (50, -15), (49, -25), (44, -25), (43, -18)],
    # Great Britain
    [(-5, 50), (-3, 58), (-5, 58), (-6, 55), (-5, 53), (-3, 51), (0, 51), (1, 52)],
    # Japan
    [(130, 31), (135, 34), (140, 36), (142, 40), (145, 44), (141, 45), (138, 37),
     (133, 34), (130, 33)],
    # Indonesia / Sumatra-Java
    [(95, 5), (104, 2), (106, -6), (114, -8), (110, -8), (100, 0), (95, 5)],
    # New Zealand
    [(166, -46), (174, -41), (178, -37), (172, -40), (167, -44)],
]

INDIA = [
    (74.4, 34.6), (74.0, 35.5), (76.5, 35.4), (78.2, 34.6), (79.4, 33.2), (78.6, 31.0),
    (80.9, 30.3), (82.9, 29.2), (85.0, 28.2), (88.0, 27.9), (89.6, 26.8), (92.0, 26.9),
    (92.6, 27.9), (94.0, 27.5), (95.5, 27.9), (97.2, 28.3), (97.4, 27.2), (96.5, 25.4),
    (97.2, 24.4), (94.6, 23.4), (93.4, 24.1), (92.6, 22.0), (91.5, 22.4), (91.0, 23.6),
    (89.6, 22.0), (88.1, 21.6), (87.0, 21.5), (86.9, 20.7), (85.0, 19.6), (83.2, 18.0),
    (81.2, 16.3), (80.3, 15.8), (80.3, 13.5), (79.9, 10.3), (78.2, 9.1), (77.5, 8.1),
    (76.5, 9.0), (75.8, 11.2), (74.8, 12.9), (73.8, 15.5), (72.9, 18.9), (72.6, 21.0),
    (72.8, 22.6), (70.4, 23.0), (69.0, 22.5), (68.5, 23.8), (67.2, 24.7), (66.9, 25.5),
    (68.4, 26.6), (70.0, 27.8), (71.5, 28.5), (73.0, 30.0), (74.5, 31.4), (74.4, 34.6),
]

NEIGHBOURS = [
    # Pakistan
    [(60.8, 25.0), (66.5, 25.2), (71.0, 28.0), (75.0, 35.0), (73.5, 37.0), (70.5, 33.5),
     (66.0, 30.0), (61.5, 29.0), (60.0, 26.0)],
    # Nepal
    [(80.1, 30.2), (83.0, 29.3), (86.0, 28.1), (88.2, 26.9), (89.2, 27.3), (86.0, 28.6),
     (82.0, 29.6)],
    # Bhutan
    [(89.0, 27.6), (92.0, 27.6), (92.0, 26.7), (89.0, 26.7)],
    # Bangladesh
    [(88.0, 25.2), (90.0, 26.1), (92.2, 25.0), (92.6, 23.6), (90.5, 22.0), (88.2, 22.6),
     (88.0, 24.0)],
    # Sri Lanka
    [(80.0, 9.8), (81.8, 7.6), (81.2, 6.4), (79.9, 6.9), (79.7, 8.5)],
]


# ------------------------------------------------------------------ render

def svg_defs(dot, spacing=DOT, radius=R, strong=False):
    land_op = 0.5 if strong else LAND_OP
    return f"""
  <defs>
    <pattern id="land" width="{spacing}" height="{spacing}" patternUnits="userSpaceOnUse">
      <circle cx="{spacing/2:.2f}" cy="{spacing/2:.2f}" r="{radius}" fill="{LAND}" fill-opacity="{land_op}"/>
    </pattern>
    <pattern id="faded" width="{spacing}" height="{spacing}" patternUnits="userSpaceOnUse">
      <circle cx="{spacing/2:.2f}" cy="{spacing/2:.2f}" r="{radius * 0.85:.2f}" fill="{FADED}" fill-opacity="{FADED_OP}"/>
    </pattern>
    <pattern id="hot" width="{spacing}" height="{spacing}" patternUnits="userSpaceOnUse">
      <circle cx="{spacing/2:.2f}" cy="{spacing/2:.2f}" r="{radius * 1.45:.2f}" fill="{HOT}" fill-opacity="0.16"/>
      <circle cx="{spacing/2:.2f}" cy="{spacing/2:.2f}" r="{radius * 1.1:.2f}" fill="{HOT}"/>
    </pattern>
  </defs>"""


def build_world():
    paths = []
    for poly in WORLD:
        paths.append(f'    <path d="{to_path(poly, project_world)}" fill="url(#land)"/>')
    paths.append(
        f'    <path d="{to_path(INDIA, project_world)}" fill="url(#hot)"/>'
    )
    svg = (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" '
        'preserveAspectRatio="xMidYMid meet" role="img">'
        + svg_defs(DOT)
        + "\n  <g>\n"
        + "\n".join(paths)
        + "\n  </g>\n</svg>\n"
    )
    with open(os.path.join(OUT, "world-map.svg"), "w", encoding="utf-8") as f:
        f.write(svg)
    return svg


def build_india():
    region = (66.0, 98.0, 5.0, 38.0)
    proj = lambda lon, lat: project_region(lon, lat, *region)
    paths = [
        f'    <path d="{to_path(poly, proj)}" fill="url(#faded)"/>' for poly in NEIGHBOURS
    ]
    paths.append(f'    <path d="{to_path(INDIA, proj)}" fill="url(#land)"/>')
    svg = (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" '
        'preserveAspectRatio="xMidYMid meet" role="img">'
        + svg_defs(DOT, strong=True)
        + "\n  <g>\n"
        + "\n".join(paths)
        + "\n  </g>\n</svg>\n"
    )
    with open(os.path.join(OUT, "india-map.svg"), "w", encoding="utf-8") as f:
        f.write(svg)
    return svg


# -------------------------------------------------------------- pin points

INDIA_PINS = [
    # id, label, lon, lat, label side, vertical nudge
    ("bangalore", "Bangalore", 77.59, 12.97, "right", -6),
    ("chennai", "Chennai", 80.27, 13.08, "left", 10),
    ("durga", "Durga · Delhi", 77.21, 28.61, "right", -8),
    ("udhampur", "Udhampur", 74.94, 32.99, "left", -14),
    ("maharashtra", "Maharashtra", 75.71, 19.75, "left", -4),
    ("goa", "Goa", 73.83, 15.50, "left", 16),
    ("andhra", "Andhra Pradesh", 79.74, 15.91, "right", 22),
]

WORLD_PINS = [
    ("kazakhstan", "Kazakhstan", 66.9, 48.0, "right", -6),
    ("uzbekistan", "Uzbekistan", 64.5, 41.5, "left", 14),
    ("serbia", "Serbia", 20.9, 44.0, "left", -10),
    ("india", "India", 78.9, 22.0, "right", 18),
]


def pin_positions(pins, proj, lon0=None, lon1=None, lat0=None, lat1=None):
    out = []
    for pid, label, lon, lat, side, dy in pins:
        x, y = proj(lon, lat)
        out.append(
            {
                "id": pid,
                "label": label,
                "x": round(x, 2),
                "y": round(y, 2),
                "side": side,
                "dy": dy,
            }
        )
    return out


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    build_world()
    build_india()

    india = pin_positions(
        INDIA_PINS, lambda lon, lat: project_region(lon, lat, 66.0, 98.0, 5.0, 38.0)
    )
    world = pin_positions(WORLD_PINS, project_world)

    for name, pins in (("india", india), ("world", world)):
        path = os.path.join(OUT, f"{name}-pins.json")
        with open(path, "w", encoding="utf-8") as f:
            json.dump(pins, f, indent=2)

    print("india pins:")
    for p in india:
        print("  ", p)
    print("world pins:")
    for p in world:
        print("  ", p)
