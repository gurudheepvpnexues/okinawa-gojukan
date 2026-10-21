/**
 * Hero stage pieces.
 *
 * The centrepiece is a real photograph of the chief instructor, graded down
 * to the site's red / black / white palette. Around it sit a field of drifting
 * dust particles, drawn with plain CSS.
 */

import { memo } from "react";

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
