/**
 * Hero stage pieces.
 *
 * The centrepiece is a real photograph of the chief instructor, graded down
 * to the site's red / black / white palette. Around it sit a field of drifting
 * dust particles, drawn with plain CSS.
 */

import { memo, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/* ----------------------------------------------------------------- MASTER */

/**
 * The chief instructor of the dojo receiving his instructor certificate
 * from the IKO grand master in Okinawa. Shipped as a real photograph and
 * pushed into the red / black / white palette so it sits inside the hero stage.
 */
export const MasterFigure = memo(
	({ className = "" }: { className?: string }) => (
		<figure className={`h3d__master ${className}`}>
			<div className="h3d__master-frame">
				<picture>
					<img
						className="h3d__master-img"
						src="assets/img/banner/master.jpeg"
						alt="The chief instructor of Okinawa Gojukan Karate-Do receiving his instructor certificate from the IKO grand master in Okinawa"
						width={1200}
						height={1600}
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

/* -------------------------------------------------------------- HERO REEL */

/**
 * The hero stage shows one photograph at a time and cycles through the set on
 * its own, looping for ever. The chief instructor's portrait stays first, and
 * the newer dojo photographs follow it.
 */
export interface ReelItem {
	src: string;
	alt: string;
	w?: number;
	h?: number;
	/** where the interesting part of the frame sits */
	position?: string;
}

export const HERO_REEL: ReelItem[] = [
	{
		src: "assets/img/banner/master.jpeg",
		alt: "The chief instructor of Okinawa Gojukan Karate-Do receiving his instructor certificate from the IKO grand master in Okinawa",
		w: 1200,
		h: 1600,
		position: "50% 50%",
	},
	{
		src: "assets/img/New images/home1.jpeg",
		alt: "Gojukan Karate-Do wall artwork inside the Yelahanka dojo",
		w: 1086,
		h: 1448,
		position: "50% 45%",
	},
	{
		src: "assets/img/New images/image 15.jpeg",
		alt: "A medalist with the national flag at the World Karate Championship",
		w: 1200,
		h: 1600,
		position: "50% 40%",
	},
	{
		src: "assets/img/New images/image 83.jpeg",
		alt: "A young gold medalist with her diploma and coach in front of the national flag",
		w: 3024,
		h: 4032,
		position: "50% 35%",
	},
	{
		src: "assets/img/New images/image 12.jpeg",
		alt: "Dojo representatives with the championship officials",
		w: 1200,
		h: 1600,
		position: "50% 45%",
	},
];

const REEL_INTERVAL = 5200; // ms per photograph

export const HeroReel = memo(
	({ items = HERO_REEL }: { items?: ReelItem[] }) => {
		const [index, setIndex] = useState(0);
		const reduce = useReducedMotion();

		// auto-advance, looping back to the first frame at the end
		useEffect(() => {
			if (reduce) return;
			if (items.length < 2) return;
			const id = window.setInterval(() => {
				setIndex((current) => (current + 1) % items.length);
			}, REEL_INTERVAL);
			return () => window.clearInterval(id);
		}, [items.length, reduce]);

		return (
			<figure className="h3d__master h3d__reel">
				<div className="h3d__master-frame">
					{items.map((item, position) => (
						<img
							className={`h3d__master-img h3d__reel__slide${
								position === index ? " is-active" : ""
							}`}
							key={item.src}
							src={item.src}
							alt={position === index ? item.alt : ""}
							width={item.w}
							height={item.h}
							style={{ objectPosition: item.position ?? "50% 50%" }}
							loading={position === 0 ? "eager" : "lazy"}
							decoding="async"
							aria-hidden={position === index ? undefined : true}
						/>
					))}
					<span className="h3d__master-grade" aria-hidden="true" />
					<span className="h3d__master-vignette" aria-hidden="true" />
					<span className="h3d__master-sweep" aria-hidden="true" />
				</div>

				<div className="h3d__reel__dots" role="tablist" aria-label="Hero photographs">
					{items.map((item, position) => (
						<button
							type="button"
							role="tab"
							key={item.src}
							className={`h3d__reel__dot${
								position === index ? " is-active" : ""
							}`}
							aria-selected={position === index}
							aria-label={item.alt}
							onClick={() => setIndex(position)}
						/>
					))}
				</div>
			</figure>
		);
	}
);

HeroReel.displayName = "HeroReel";

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
