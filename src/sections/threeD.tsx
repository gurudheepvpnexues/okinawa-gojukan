/**
 * Vector "3D" props for the hero stage.
 *
 * Everything here is drawn with gradients and real CSS 3D transforms so the
 * hero can render the full red / black / white palette without shipping a
 * single bitmap. The centrepiece is a real photograph of the chief instructor,
 * graded down to the same palette; the props around him are pure vectors.
 */

import { memo, type CSSProperties } from "react";

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

/* ----------------------------------------------------------------- MASTER */

/**
 * The chief instructor of the dojo, holding a championship medal.
 * Shipped as a real photograph and pushed into the red / black / white
 * palette with a duotone grade so it sits inside the hero stage.
 */
export const MasterFigure = memo(
	({ className = "" }: { className?: string }) => (
		<figure className={`h3d__master ${className}`}>
			<div className="h3d__master-frame">
				<picture>
					<source srcSet="assets/img/banner/master.webp" type="image/webp" />
					<img
						className="h3d__master-img"
						src="assets/img/banner/master.png"
						alt="The chief instructor of Okinawa Gojukan Karate-Do standing on the mat and holding a championship medal, draped in the Indian tricolour"
						width={1024}
						height={1536}
						loading="eager"
						decoding="async"
					/>
				</picture>
				<span className="h3d__master-grade" aria-hidden="true" />
				<span className="h3d__master-vignette" aria-hidden="true" />
				<span className="h3d__master-sweep" aria-hidden="true" />
			</div>

			<figcaption className="h3d__master-plate">
				<span className="h3d__master-plate-kicker">Chief Instructor</span>
				<span className="h3d__master-plate-name">Ramesh Iyer</span>
			</figcaption>
		</figure>
	)
);

MasterFigure.displayName = "MasterFigure";

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
