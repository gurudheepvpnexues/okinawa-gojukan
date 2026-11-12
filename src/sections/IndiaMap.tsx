import { memo, useEffect, useRef } from "react";

import { indiaAnchors, indiaMapHeight, indiaRegions } from "./india-geo";
import { indiaPins } from "./maps";

/* ----------------------------------------------------------- 3D INDIA MAP */

/**
 * A tilted, extruded block map of India, painted on a canvas.
 *
 * Every state is a slab with a visible side wall, the whole plate is pitched
 * away from the viewer under a perspective camera, and the dojo markers stand
 * on the surface. Painting it on a canvas keeps the geometry honest in every
 * browser (no thousands of 3D-transformed DOM nodes for the GPU to composite).
 *
 * The projection works in plate-width units - one unit is the width of the
 * plate - and the plate is auto-fitted to the canvas from its own projected
 * silhouette, so the perspective and the framing are identical at every size.
 */

const TILT = (48 * Math.PI) / 180; // pitch of the plate away from the viewer
const CAMERA = 3.2; // eye distance, in plate widths
const FOCAL = 2.9; // perspective focal length, in plate widths
const DEPTH = 0.075; // slab height, in plate widths
const LIGHT = { x: -0.45, y: -0.89 }; // light from the upper left

type Pt = { x: number; y: number; z: number; s: number };

/** point-in-polygon, ray casting */
const inside = (px: number, py: number, poly: number[][]) => {
	let hit = false;
	for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
		const xi = poly[i][0];
		const yi = poly[i][1];
		const xj = poly[j][0];
		const yj = poly[j][1];
		if (yi > py !== yj > py && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi) hit = !hit;
	}
	return hit;
};

/** bounds of a ring in map space */
const bounds = (poly: number[][]) => {
	let x0 = Infinity;
	let y0 = Infinity;
	let x1 = -Infinity;
	let y1 = -Infinity;
	for (const [x, y] of poly) {
		if (x < x0) x0 = x;
		if (y < y0) y0 = y;
		if (x > x1) x1 = x;
		if (y > y1) y1 = y;
	}
	return [x0, y0, x1, y1];
};

const anchorsById = new Map(indiaAnchors.map((a) => [a.id, a]));

export const IndiaMap3D = memo(() => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const wrapRef = useRef<HTMLDivElement>(null);
	const hoverRef = useRef<string | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const wrap = wrapRef.current;
		const ctx = canvas?.getContext("2d");
		if (!canvas || !wrap || !ctx) return;

		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		let width = 0;
		let height = 0;
		let unit = 0; // on-screen width of the plate, in px
		let ox = 0; // screen origin of the plate
		let oy = 0;

		/* --- the static plate is drawn once into an offscreen canvas --- */
		const plate = document.createElement("canvas");
		const pctx = plate.getContext("2d");

		/* --- the dot field: one grid over the whole plate, assigned to states */
		const regions = indiaRegions.map((r) => ({
			name: r.name,
			rings: r.rings,
			bounds: r.rings.map(bounds),
			dots: [] as { u: number; v: number }[],
		}));

		const buildDotField = () => {
			const step = 0.0125;
			for (const reg of regions) reg.dots.length = 0;
			for (let v = 0; v <= indiaMapHeight; v += step) {
				for (let u = 0; u <= 1; u += step) {
					for (const reg of regions) {
						let hit = false;
						for (let k = 0; k < reg.rings.length; k++) {
							const bb = reg.bounds[k];
							if (u < bb[0] || u > bb[2] || v < bb[1] || v > bb[3]) continue;
							if (inside(u, v, reg.rings[k])) {
								hit = true;
								break;
							}
						}
						if (hit) {
							reg.dots.push({ u, v });
							break;
						}
					}
				}
			}
		};
		buildDotField();

		/* --------------------------------------------------------- projection */
		/** map space -> plate space, in plate widths (1 = the width of India) */
		const raw = (u: number, v: number, h: number): Pt => {
			const X = u - 0.5;
			const Y = (v - 0.5) * indiaMapHeight;
			const px = X;
			const py = Y * Math.cos(TILT) - h * Math.sin(TILT);
			const pz = Y * Math.sin(TILT) + h * Math.cos(TILT);
			const s = FOCAL / (CAMERA - pz);
			return { x: px * s, y: py * s, z: pz, s };
		};

		/** map space -> screen */
		const project = (u: number, v: number, h: number): Pt => {
			const p = raw(u, v, h);
			return { x: ox + p.x * unit, y: oy + p.y * unit, z: p.z, s: p.s };
		};

		const projectRing = (ring: number[][], h: number) =>
			ring.map(([u, v]) => project(u, v, h));

		/* ------------------------------------------------------------ layout */
		const resize = () => {
			const rect = wrap.getBoundingClientRect();
			if (!rect.width) return;
			width = rect.width;
			height = Math.round(Math.min(width * 0.78, 660));

			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.round(width * dpr);
			canvas.height = Math.round(height * dpr);
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			plate.width = canvas.width;
			plate.height = canvas.height;
			pctx?.setTransform(dpr, 0, 0, dpr, 0, 0);

			// auto-fit from the plate's own projected silhouette, so the map fills
			// the canvas instead of being shrunk by the empty corners of the frame
			let minX = Infinity;
			let minY = Infinity;
			let maxX = -Infinity;
			let maxY = -Infinity;
			for (const reg of regions) {
				for (const ring of reg.rings) {
					for (const [u, v] of ring) {
						for (const h of [0, -DEPTH]) {
							const p = raw(u, v, h);
							if (p.x < minX) minX = p.x;
							if (p.x > maxX) maxX = p.x;
							if (p.y < minY) minY = p.y;
							if (p.y > maxY) maxY = p.y;
						}
					}
				}
			}
			unit = Math.min((width * 0.96) / (maxX - minX), (height * 0.94) / (maxY - minY));
			ox = width / 2 - ((minX + maxX) / 2) * unit;
			oy = height / 2 - ((minY + maxY) / 2) * unit;

			drawPlate();
		};

		/* ------------------------------------------------------- the 3D plate */
		const drawPlate = () => {
			if (!pctx) return;
			pctx.clearRect(0, 0, width, height);

			// the states, far to near, so the painter's order is right
			const ordered = regions
				.map((reg) => {
					let z = 0;
					for (const [u, v] of reg.rings[0]) z += raw(u, v, 0).z;
					return { reg, z: z / reg.rings[0].length };
				})
				.sort((a, b) => a.z - b.z);

			for (const { reg } of ordered) {
				for (const ring of reg.rings) {
					const top = projectRing(ring, 0);
					const base = projectRing(ring, -DEPTH);

					// centroid, so the wall normals can point outwards
					let gx = 0;
					let gy = 0;
					for (const p of top) {
						gx += p.x;
						gy += p.y;
					}
					gx /= top.length;
					gy /= top.length;

					// side walls
					for (let i = 0; i < top.length; i++) {
						const j = (i + 1) % top.length;
						const a = top[i];
						const b = top[j];

						let nx = b.y - a.y;
						let ny = -(b.x - a.x);
						const len = Math.hypot(nx, ny) || 1;
						nx /= len;
						ny /= len;
						const mx = (a.x + b.x) / 2 - gx;
						const my = (a.y + b.y) / 2 - gy;
						if (nx * mx + ny * my < 0) {
							nx = -nx;
							ny = -ny;
						}
						const lit = Math.max(0, nx * LIGHT.x + ny * LIGHT.y);

						pctx.beginPath();
						pctx.moveTo(a.x, a.y);
						pctx.lineTo(b.x, b.y);
						pctx.lineTo(base[j].x, base[j].y);
						pctx.lineTo(base[i].x, base[i].y);
						pctx.closePath();
						const tone = 16 + lit * 118;
						pctx.fillStyle = `rgb(${Math.round(tone + 10)},${Math.round(tone + 6)},${Math.round(tone + 18)})`;
						pctx.fill();

						// a bright rim where the wall catches the light
						if (lit > 0.28) {
							pctx.beginPath();
							pctx.moveTo(a.x, a.y);
							pctx.lineTo(b.x, b.y);
							pctx.strokeStyle = `rgba(255,255,255,${(lit - 0.28) * 0.5})`;
							pctx.lineWidth = 1.4;
							pctx.stroke();
						}
					}

					// top face
					pctx.beginPath();
					pctx.moveTo(top[0].x, top[0].y);
					for (const p of top.slice(1)) pctx.lineTo(p.x, p.y);
					pctx.closePath();
					const g = pctx.createLinearGradient(top[0].x, top[0].y, top[top.length - 1].x, top[top.length - 1].y);
					g.addColorStop(0, "rgb(92,88,106)");
					g.addColorStop(1, "rgb(33,32,42)");
					pctx.fillStyle = g;
					pctx.fill();
				}
			}

			// the dot field on the surface
			const dotR = 0.0019 * unit;
			for (const reg of regions) {
				for (const d of reg.dots) {
					const p = project(d.u, d.v, 0);
					const r = dotR * p.s;
					if (r < 0.3) continue;
					pctx.globalAlpha = 0.24 + 0.3 * Math.min(1, (p.z + 0.42) / 0.84);
					pctx.fillStyle = "#fff";
					pctx.beginPath();
					pctx.arc(p.x, p.y, r, 0, Math.PI * 2);
					pctx.fill();
				}
			}
			pctx.globalAlpha = 1;

			// state outlines, so the plate reads as a set of blocks
			pctx.lineWidth = 1;
			pctx.strokeStyle = "rgba(255,255,255,.14)";
			for (const { reg } of ordered) {
				for (const ring of reg.rings) {
					const top = projectRing(ring, 0);
					pctx.beginPath();
					pctx.moveTo(top[0].x, top[0].y);
					for (const p of top.slice(1)) pctx.lineTo(p.x, p.y);
					pctx.closePath();
					pctx.stroke();
				}
			}
		};

		/* --------------------------------------------------------- animation */
		const paint = (now: number) => {
			const t = now / 1000;
			ctx.clearRect(0, 0, width, height);
			ctx.drawImage(plate, 0, 0, width, height);

			// a soft light drifting across the plate
			if (!reduce) {
				const sweep = ((t * 0.11) % 1.6) - 0.3;
				const gx = width * sweep;
				const gl = ctx.createLinearGradient(gx - width * 0.22, 0, gx + width * 0.22, height);
				gl.addColorStop(0, "rgba(255,255,255,0)");
				gl.addColorStop(0.5, "rgba(255,255,255,.055)");
				gl.addColorStop(1, "rgba(255,255,255,0)");
				ctx.fillStyle = gl;
				ctx.fillRect(0, 0, width, height);
			}

			const pulse = reduce ? 1 : 1 + Math.sin(t * 2.1) * 0.16;
			const hovered = hoverRef.current;
			const k = unit / 560;

			for (const pin of indiaPins) {
				const a = anchorsById.get(pin.id);
				if (!a) continue;
				const p = project(a.x, a.y, 0);
				const isHead = !!pin.head;
				const isHover = hovered === pin.id;

				// contact shadow on the plate
				ctx.beginPath();
				ctx.ellipse(p.x, p.y + 2 * k, 9 * k * p.s, 3 * k * p.s, 0, 0, Math.PI * 2);
				ctx.fillStyle = "rgba(0,0,0,.55)";
				ctx.fill();

				// glow
				const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 30 * k * p.s);
				glow.addColorStop(0, isHead ? "rgba(255,59,47,.55)" : "rgba(225,6,0,.36)");
				glow.addColorStop(1, "rgba(225,6,0,0)");
				ctx.fillStyle = glow;
				ctx.beginPath();
				ctx.arc(p.x, p.y, 30 * k * p.s, 0, Math.PI * 2);
				ctx.fill();

				// head of the pin
				const r = (isHead ? 6.6 : 5.2) * k * p.s * (isHead ? pulse : 1) * (isHover ? 1.35 : 1);
				ctx.beginPath();
				ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
				ctx.fillStyle = isHead ? "#ff3b2f" : "#e10600";
				ctx.fill();
				ctx.lineWidth = 1.6;
				ctx.strokeStyle = "#fff";
				ctx.stroke();

				// pulsing ring on the head dojo
				if (isHead) {
					const rr = r + 7 + (pulse - 1) * 20;
					ctx.beginPath();
					ctx.arc(p.x, p.y, rr, 0, Math.PI * 2);
					ctx.strokeStyle = `rgba(255,59,47,${0.5 / pulse})`;
					ctx.lineWidth = 1.4;
					ctx.stroke();
				}

				drawLabel(pin, p, isHead, isHover);
			}
		};

		const drawLabel = (
			pin: (typeof indiaPins)[number],
			p: Pt,
			isHead: boolean,
			isHover: boolean
		) => {
			// on narrow screens the boxes would collide, so the legend beneath the
			// map carries the names instead
			if (width < 560) return;

			const flip = pin.flip && width < 700;
			const side = flip ? (pin.side === "right" ? "left" : "right") : pin.side;
			const showSub = !!pin.sub && width >= 700;

			ctx.font = "800 11px Lato, system-ui, sans-serif";
			const nameW = ctx.measureText(pin.label.toUpperCase()).width;
			let subW = 0;
			if (showSub) {
				ctx.font = "400 9.5px Lato, system-ui, sans-serif";
				subW = ctx.measureText(pin.sub!.toUpperCase()).width;
			}
			const padX = 9;
			const boxW = Math.max(nameW, subW) + padX * 2;
			const boxH = showSub ? 33 : 21;

			let bx = side === "right" ? p.x + 22 : p.x - 22 - boxW;
			let by = p.y - boxH / 2 + pin.dy;
			bx = Math.max(3, Math.min(width - boxW - 3, bx));
			by = Math.max(3, Math.min(height - boxH - 3, by));

			// leader line back to the pin
			const edgeX = side === "right" ? bx : bx + boxW;
			ctx.beginPath();
			ctx.moveTo(edgeX, by + boxH / 2);
			ctx.lineTo(p.x, p.y);
			ctx.strokeStyle = isHover ? "rgba(255,59,47,.75)" : "rgba(225,6,0,.45)";
			ctx.lineWidth = 1;
			ctx.stroke();

			ctx.fillStyle = "rgba(8,8,8,.92)";
			ctx.strokeStyle = isHover
				? "#ff3b2f"
				: isHead
					? "rgba(255,59,47,.8)"
					: "rgba(225,6,0,.55)";
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.roundRect(bx, by, boxW, boxH, 3);
			ctx.fill();
			ctx.stroke();

			ctx.textBaseline = "middle";
			ctx.fillStyle = "#fff";
			ctx.font = "800 11px Lato, system-ui, sans-serif";
			ctx.fillText(pin.label.toUpperCase(), bx + padX, by + (showSub ? 12 : boxH / 2 + 0.5));

			if (showSub) {
				ctx.fillStyle = "rgba(255,255,255,.5)";
				ctx.font = "400 9.5px Lato, system-ui, sans-serif";
				ctx.fillText(pin.sub!.toUpperCase(), bx + padX, by + 24);
			}
		};

		/* --------------------------------------------------------------- loop */
		let raf = 0;
		let running = true;
		const frame = (now: number) => {
			if (!running) return;
			paint(now);
			raf = requestAnimationFrame(frame);
		};

		resize();
		paint(0);
		raf = requestAnimationFrame(frame);

		/* ------------------------------------------------------------ pointer */
		const onMove = (e: PointerEvent) => {
			const rect = canvas.getBoundingClientRect();
			const mx = e.clientX - rect.left;
			const my = e.clientY - rect.top;
			let found: string | null = null;
			let best = 26;
			for (const pin of indiaPins) {
				const a = anchorsById.get(pin.id);
				if (!a) continue;
				const p = project(a.x, a.y, 0);
				const d = Math.hypot(p.x - mx, p.y - my);
				if (d < best) {
					best = d;
					found = pin.id;
				}
			}
			if (found !== hoverRef.current) {
				hoverRef.current = found;
				canvas.style.cursor = found ? "pointer" : "default";
			}
		};
		const onLeave = () => {
			hoverRef.current = null;
			canvas.style.cursor = "default";
		};
		canvas.addEventListener("pointermove", onMove);
		canvas.addEventListener("pointerleave", onLeave);

		const ro = new ResizeObserver(() => {
			resize();
			paint(performance.now());
		});
		ro.observe(wrap);

		return () => {
			running = false;
			cancelAnimationFrame(raf);
			ro.disconnect();
			canvas.removeEventListener("pointermove", onMove);
			canvas.removeEventListener("pointerleave", onLeave);
		};
	}, []);

	return (
		<div className="imap" ref={wrapRef}>
			<canvas
				className="imap__canvas"
				ref={canvasRef}
				role="img"
				aria-label="Three-dimensional map of India showing the seven dojo branches — Bangalore, Chennai, Durga, Udhampur, Maharashtra, Goa and Andhra Pradesh"
			/>
		</div>
	);
});

IndiaMap3D.displayName = "IndiaMap3D";

export default IndiaMap3D;
