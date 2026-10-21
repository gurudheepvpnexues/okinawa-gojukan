/**
 * Vector "3D" props for the hero stage.
 *
 * Everything here is drawn with gradients and real CSS 3D transforms so the
 * hero can render the full red / black / white palette without shipping a
 * single bitmap. The fighter is a sculpted, high-contrast silhouette in
 * white gi with red trim and a black belt, lit from the upper left.
 */

import { memo, type CSSProperties } from "react";

/* ------------------------------------------------------------------ FIGHTER */

export const Fighter3D = memo(() => (
	<svg
		className="h3d__svg"
		viewBox="0 0 620 820"
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-label="A karate fighter in a white gi with red trim and a black belt, holding a punching stance"
	>
		<defs>
			<linearGradient
				id="gTorso"
				gradientUnits="userSpaceOnUse"
				x1="236"
				y1="192"
				x2="404"
				y2="330"
			>
				<stop offset="0" stopColor="#ffffff" />
				<stop offset=".32" stopColor="#f0f0f0" />
				<stop offset=".68" stopColor="#c4c4c4" />
				<stop offset="1" stopColor="#7a7a7a" />
			</linearGradient>

			<linearGradient
				id="gLegF"
				gradientUnits="userSpaceOnUse"
				x1="150"
				y1="520"
				x2="304"
				y2="650"
			>
				<stop offset="0" stopColor="#ffffff" />
				<stop offset=".42" stopColor="#e9e9e9" />
				<stop offset="1" stopColor="#828282" />
			</linearGradient>

			<linearGradient
				id="gLegB"
				gradientUnits="userSpaceOnUse"
				x1="318"
				y1="450"
				x2="480"
				y2="650"
			>
				<stop offset="0" stopColor="#dcdcdc" />
				<stop offset=".45" stopColor="#b4b4b4" />
				<stop offset="1" stopColor="#666666" />
			</linearGradient>

			<linearGradient
				id="gArmF"
				gradientUnits="userSpaceOnUse"
				x1="40"
				y1="230"
				x2="272"
				y2="300"
			>
				<stop offset="0" stopColor="#ffffff" />
				<stop offset=".45" stopColor="#ededed" />
				<stop offset="1" stopColor="#8c8c8c" />
			</linearGradient>

			<linearGradient
				id="gArmB"
				gradientUnits="userSpaceOnUse"
				x1="350"
				y1="220"
				x2="470"
				y2="420"
			>
				<stop offset="0" stopColor="#d6d6d6" />
				<stop offset=".5" stopColor="#adadad" />
				<stop offset="1" stopColor="#606060" />
			</linearGradient>

			<linearGradient
				id="gHead"
				gradientUnits="userSpaceOnUse"
				x1="256"
				y1="52"
				x2="368"
				y2="196"
			>
				<stop offset="0" stopColor="#ffffff" />
				<stop offset=".48" stopColor="#dcdcdc" />
				<stop offset="1" stopColor="#757575" />
			</linearGradient>

			<linearGradient id="gRed" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0" stopColor="#ff3c44" />
				<stop offset=".45" stopColor="#E30613" />
				<stop offset="1" stopColor="#8c0310" />
			</linearGradient>

			<linearGradient id="gBelt" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0" stopColor="#3d3d3d" />
				<stop offset=".38" stopColor="#161616" />
				<stop offset="1" stopColor="#000000" />
			</linearGradient>

			<radialGradient id="gFloor" cx=".5" cy=".5" r=".5">
				<stop offset="0" stopColor="#000000" stopOpacity=".72" />
				<stop offset=".6" stopColor="#000000" stopOpacity=".34" />
				<stop offset="1" stopColor="#000000" stopOpacity="0" />
			</radialGradient>
		</defs>

		{/* floor shadow */}
		<ellipse cx="300" cy="782" rx="230" ry="40" fill="url(#gFloor)" />
		<ellipse cx="300" cy="780" rx="150" ry="16" fill="#E30613" opacity=".2" />

		{/* ------------------------------------------------- rear leg */}
		<path
			d="M330 452 L418 584 L462 726"
			stroke="url(#gLegB)"
			strokeWidth="80"
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="none"
		/>
		<path
			d="M462 722 C486 724 508 738 516 752 C522 763 511 774 494 774 L456 772 C441 770 436 758 441 744 C446 732 452 722 462 722 Z"
			fill="url(#gLegB)"
		/>

		{/* ------------------------------------------------- rear arm */}
		<path
			d="M372 234 L446 330 L400 422"
			stroke="url(#gArmB)"
			strokeWidth="54"
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="none"
		/>
		<path
			d="M400 404 C418 406 428 420 424 434 C420 448 404 456 392 450 C380 444 376 430 382 418 C386 409 392 404 400 404 Z"
			fill="url(#gArmB)"
		/>
		{/* red cuff on the chambered arm */}
		<ellipse
			cx="406"
			cy="398"
			rx="9"
			ry="19"
			transform="rotate(14 406 398)"
			fill="url(#gRed)"
		/>

		{/* ------------------------------------------------- front leg */}
		<path
			d="M296 446 L230 578 L178 734"
			stroke="url(#gLegF)"
			strokeWidth="88"
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="none"
		/>
		<path
			d="M178 730 C152 736 126 750 114 762 C105 771 114 782 130 782 L184 780 C197 780 203 767 196 753 C190 741 186 730 178 730 Z"
			fill="url(#gLegF)"
		/>

		{/* ------------------------------------------------- torso (gi) */}
		<path
			d="M248 232 C266 202 288 190 312 190 C338 190 362 202 378 232 C394 276 392 362 382 438 L242 438 C232 362 232 276 248 232 Z"
			fill="url(#gTorso)"
		/>
		{/* gi folds */}
		<path
			d="M262 330 C276 372 280 404 278 438 L252 438 C244 400 246 360 258 328 Z"
			fill="#ffffff"
			opacity=".5"
		/>
		<path
			d="M366 300 C374 346 374 400 370 438 L348 438 C352 396 350 342 342 302 Z"
			fill="#000000"
			opacity=".1"
		/>

		{/* black undershirt visible in the lapel V */}
		<path d="M266 184 L312 338 L358 180 Z" fill="#101010" />
		{/* red piping along both lapel edges */}
		<path d="M266 184 L278 180 L324 336 L312 340 Z" fill="url(#gRed)" />
		<path d="M300 340 L312 336 L358 180 L346 182 Z" fill="url(#gRed)" />
		{/* white lapel band on the near side */}
		<path
			d="M250 182 L266 184 L312 340 L296 344 Z"
			fill="url(#gTorso)"
			opacity=".95"
		/>

		{/* ------------------------------------------------- belt */}
		<path
			d="M236 424 C284 440 344 440 390 424 L388 464 C342 480 282 480 238 464 Z"
			fill="url(#gBelt)"
		/>
		<path
			d="M236 424 C284 440 344 440 390 424 L389 432 C344 448 284 448 237 432 Z"
			fill="#ffffff"
			opacity=".14"
		/>
		{/* knot + hanging tails */}
		<path
			d="M298 428 L334 424 L340 470 L304 476 Z"
			fill="url(#gBelt)"
		/>
		<path
			d="M306 470 C300 516 296 566 300 612 L320 614 C322 566 326 514 330 470 Z"
			fill="url(#gBelt)"
		/>
		<path
			d="M334 468 C348 512 358 556 352 604 L332 604 C334 556 330 508 322 470 Z"
			fill="url(#gBelt)"
		/>
		<path d="M300 606 L320 608 L320 620 L300 618 Z" fill="url(#gRed)" />
		<path d="M332 598 L353 597 L353 609 L332 610 Z" fill="url(#gRed)" />

		{/* ------------------------------------------------- neck + head */}
		<path d="M288 164 L328 164 L334 206 L282 206 Z" fill="url(#gHead)" />
		<path
			d="M268 92 C276 58 302 42 328 46 C356 50 372 72 371 102 C370 120 364 136 354 148 C346 158 342 170 340 180 C338 192 330 198 318 198 L302 198 C288 196 278 186 274 172 C270 160 264 150 262 136 C260 122 262 104 268 92 Z"
			fill="url(#gHead)"
		/>
		{/* hair */}
		<path
			d="M256 106 C252 72 276 40 310 38 C346 36 374 64 376 100 C362 90 342 84 320 84 C294 84 272 92 256 106 Z"
			fill="#0A0A0A"
		/>
		<path
			d="M368 92 C378 100 378 122 372 140 L358 132 C362 116 364 102 362 94 Z"
			fill="#0A0A0A"
		/>
		{/* ear */}
		<ellipse cx="350" cy="138" rx="10" ry="14" fill="#b9b9b9" />
		<ellipse cx="350" cy="138" rx="5" ry="8" fill="#8a8a8a" />
		{/* brow, eye, mouth */}
		<path
			d="M270 118 L302 110"
			stroke="#1b1b1b"
			strokeWidth="6"
			strokeLinecap="round"
		/>
		<path
			d="M274 131 L300 124"
			stroke="#0A0A0A"
			strokeWidth="5"
			strokeLinecap="round"
		/>
		<path
			d="M284 162 L306 159"
			stroke="#2a2a2a"
			strokeWidth="4"
			strokeLinecap="round"
		/>
		{/* jaw shadow */}
		<path
			d="M330 150 C338 162 340 176 336 188 C330 196 318 200 306 198 C320 194 328 176 330 150 Z"
			fill="#000000"
			opacity=".12"
		/>

		{/* ------------------------------------------------- punching arm */}
		<path
			d="M250 224 L142 284 L70 268"
			stroke="url(#gArmF)"
			strokeWidth="56"
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="none"
		/>
		{/* red cuff */}
		<ellipse
			cx="94"
			cy="274"
			rx="9"
			ry="20"
			transform="rotate(-12 94 274)"
			fill="url(#gRed)"
		/>
		{/* forearm + fist */}
		<path
			d="M112 276 L66 264"
			stroke="url(#gArmF)"
			strokeWidth="44"
			strokeLinecap="round"
			fill="none"
		/>
		<path
			d="M62 236 C38 234 20 252 22 272 C24 292 44 306 66 302 C86 298 96 280 90 262 C86 246 76 236 62 236 Z"
			fill="url(#gArmF)"
		/>
		<path
			d="M30 254 C40 250 52 250 60 254"
			stroke="#000000"
			strokeOpacity=".18"
			strokeWidth="4"
			strokeLinecap="round"
			fill="none"
		/>
		<path
			d="M28 270 C40 266 54 266 62 270"
			stroke="#000000"
			strokeOpacity=".14"
			strokeWidth="4"
			strokeLinecap="round"
			fill="none"
		/>
		<path
			d="M30 286 C42 282 54 283 62 287"
			stroke="#000000"
			strokeOpacity=".1"
			strokeWidth="4"
			strokeLinecap="round"
			fill="none"
		/>
	</svg>
));

Fighter3D.displayName = "Fighter3D";

/* -------------------------------------------------------------------- CUBE */

type CubeTone = "red" | "white";

interface Cube3DProps {
	size?: number;
	tone?: CubeTone;
	className?: string;
}

export const Cube3D = memo(
	({ size = 44, tone = "red", className = "" }: Cube3DProps) => (
		<div
			className={`h3d__cube ${className}`}
			style={
				{
					width: size,
					height: size,
					"--s": `${size}px`,
				} as CSSProperties
			}
			aria-hidden="true"
		>
			<span className={`h3d__cube3d h3d__cube3d--${tone}`}>
				<i className="h3d__face h3d__face--f" />
				<i className="h3d__face h3d__face--b" />
				<i className="h3d__face h3d__face--r" />
				<i className="h3d__face h3d__face--l" />
				<i className="h3d__face h3d__face--t" />
				<i className="h3d__face h3d__face--d" />
			</span>
		</div>
	)
);

Cube3D.displayName = "Cube3D";

/* -------------------------------------------------------------------- BELT */

export const Belt3D = memo(
	({ tone = "black" }: { tone?: "black" | "white" }) => (
		<svg
			className="h3d__prop"
			viewBox="0 0 220 120"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<defs>
				<linearGradient id={`gBelt3d-${tone}`} x1="0" y1="0" x2="0.4" y2="1">
					{tone === "black" ? (
						<>
							<stop offset="0" stopColor="#4a4a4a" />
							<stop offset=".4" stopColor="#141414" />
							<stop offset="1" stopColor="#000000" />
						</>
					) : (
						<>
							<stop offset="0" stopColor="#ffffff" />
							<stop offset=".5" stopColor="#dedede" />
							<stop offset="1" stopColor="#8f8f8f" />
						</>
					)}
				</linearGradient>
			</defs>
			<path
				d="M6 100 C58 18 152 6 214 54 L202 84 C148 42 74 52 24 112 Z"
				fill={`url(#gBelt3d-${tone})`}
			/>
			<path
				d="M6 100 C58 18 152 6 214 54"
				stroke="#ffffff"
				strokeOpacity={tone === "black" ? ".22" : ".7"}
				strokeWidth="3"
				fill="none"
			/>
			<path
				d="M24 112 C74 52 148 42 202 84"
				stroke="#000000"
				strokeOpacity={tone === "black" ? ".6" : ".28"}
				strokeWidth="3"
				fill="none"
			/>
		</svg>
	)
);

Belt3D.displayName = "Belt3D";

/* ---------------------------------------------------------------- NUNCHUCK */

export const Nunchuck3D = memo(() => (
	<svg
		className="h3d__prop"
		viewBox="0 0 200 140"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<defs>
			<linearGradient id="gWood" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0" stopColor="#f4f4f4" />
				<stop offset=".45" stopColor="#c2c2c2" />
				<stop offset="1" stopColor="#6b6b6b" />
			</linearGradient>
		</defs>
		{/* chain */}
		{[0, 1, 2, 3, 4, 5, 6].map((i) => (
			<circle
				key={i}
				cx={70 + i * 11}
				cy={68 + Math.sin(i * 0.9) * 9}
				r={5.5}
				fill="none"
				stroke="#bdbdbd"
				strokeWidth="3"
			/>
		))}
		{/* handles */}
		<rect x="4" y="40" width="66" height="30" rx="15" fill="url(#gWood)" />
		<rect x="130" y="52" width="66" height="30" rx="15" fill="url(#gWood)" />
		<rect x="4" y="40" width="66" height="12" rx="6" fill="#ffffff" opacity=".45" />
		<rect x="130" y="52" width="66" height="12" rx="6" fill="#ffffff" opacity=".35" />
		<rect x="60" y="46" width="8" height="18" rx="4" fill="#0A0A0A" opacity=".35" />
		<rect x="186" y="58" width="8" height="18" rx="4" fill="#0A0A0A" opacity=".35" />
	</svg>
));

Nunchuck3D.displayName = "Nunchuck3D";

/* ------------------------------------------------------------- FOCUS MITT */

export const FocusMitt3D = memo(() => (
	<svg
		className="h3d__prop"
		viewBox="0 0 160 180"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<defs>
			<linearGradient id="gMitt" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0" stopColor="#ff4750" />
				<stop offset=".4" stopColor="#E30613" />
				<stop offset="1" stopColor="#7d030e" />
			</linearGradient>
		</defs>
		<path
			d="M30 22 C14 38 12 82 24 114 C32 138 50 154 76 154 L108 154 C138 154 152 132 152 100 L152 62 C152 32 130 12 98 12 L68 12 C50 12 38 16 30 22 Z"
			fill="url(#gMitt)"
		/>
		<path
			d="M30 22 C14 38 12 82 24 114 C32 138 50 154 76 154 L84 154 C64 140 56 118 54 88 C52 56 60 32 78 20 Z"
			fill="#ffffff"
			opacity=".18"
		/>
		<path
			d="M152 62 C152 32 130 12 98 12 L86 12 C112 18 128 36 128 62 L128 100 C128 128 120 142 108 154 C138 154 152 132 152 100 Z"
			fill="#000000"
			opacity=".22"
		/>
		{/* striking face */}
		<ellipse cx="36" cy="88" rx="27" ry="48" fill="#0A0A0A" />
		<ellipse cx="36" cy="88" rx="20" ry="38" fill="#1d1d1d" />
		<ellipse cx="36" cy="88" rx="20" ry="38" fill="#ffffff" opacity=".06" />
		{/* strap */}
		<path
			d="M80 134 C116 142 142 132 152 114"
			stroke="#ffffff"
			strokeWidth="11"
			fill="none"
			strokeLinecap="round"
		/>
	</svg>
));

FocusMitt3D.displayName = "FocusMitt3D";

/* --------------------------------------------------------------- PARTICLES */

export interface ParticleSpec {
	left: number;
	top: number;
	size: number;
	tone: "red" | "white";
	delay: number;
	duration: number;
	opacity?: number;
}

export const Particle = memo(
	({ left, top, size, tone, delay, duration, opacity = 0.8 }: ParticleSpec) => (
		<span
			className={`h3d__particle h3d__particle--${tone}`}
			style={{
				left: `${left}%`,
				top: `${top}%`,
				width: size,
				height: size,
				opacity,
				animationDelay: `${delay}s`,
				animationDuration: `${duration}s`,
			}}
			aria-hidden="true"
		/>
	)
);

Particle.displayName = "Particle";
