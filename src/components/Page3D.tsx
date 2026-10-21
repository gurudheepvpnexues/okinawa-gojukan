import {
	memo,
	useEffect,
	useRef,
	type ReactNode,
} from "react";
import { motion } from "framer-motion";

/* --------------------------------------------------------------- HOOKS */

export const useInViewReveal = <T extends HTMLElement>(
	options?: IntersectionObserverInit
) => {
	const ref = useRef<T | null>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-inview");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...(options || {}) }
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [options]);

	return ref;
};

export const useTilt3D = <T extends HTMLElement>(max = 9) => {
	const ref = useRef<T | null>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		if (!window.matchMedia("(pointer: fine)").matches) return;

		let raf = 0;
		let targetRX = 0;
		let targetRY = 0;
		let curRX = 0;
		let curRY = 0;

		const loop = () => {
			curRX += (targetRX - curRX) * 0.12;
			curRY += (targetRY - curRY) * 0.12;
			el.style.transform = `perspective(900px) translateY(-8px) rotateX(${curRX.toFixed(3)}deg) rotateY(${curRY.toFixed(3)}deg)`;
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);

		const onMove = (e: MouseEvent) => {
			const rect = el.getBoundingClientRect();
			targetRX = ((e.clientY - rect.top) / rect.height - 0.5) * -max * 2;
			targetRY = ((e.clientX - rect.left) / rect.width - 0.5) * max * 2;
		};
		const onLeave = () => {
			targetRX = 0;
			targetRY = 0;
		};

		el.addEventListener("mousemove", onMove);
		el.addEventListener("mouseleave", onLeave);
		return () => {
			cancelAnimationFrame(raf);
			el.removeEventListener("mousemove", onMove);
			el.removeEventListener("mouseleave", onLeave);
		};
	}, [max]);

	return ref;
};

/* --------------------------------------------------- STAGE */

export interface Crumb {
	label: string;
	to?: string;
}

export const PageStage = memo(
	({
		kicker,
		title,
		subtitle,
		crumbs,
		tall = false,
	}: {
		kicker: string;
		title: string;
		subtitle?: string;
		crumbs?: Crumb[];
		tall?: boolean;
	}) => {
		const stageRef = useRef<HTMLElement | null>(null);
		const titleRef = useRef<HTMLHeadingElement | null>(null);

		useEffect(() => {
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

			let raf = 0;
			let tx = 0;
			let ty = 0;
			let cx = 0;
			let cy = 0;

			const loop = () => {
				cx += (tx - cx) * 0.08;
				cy += (ty - cy) * 0.08;
				if (titleRef.current) {
					titleRef.current.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`;
				}
				raf = requestAnimationFrame(loop);
			};
			raf = requestAnimationFrame(loop);

			const onMove = (e: MouseEvent) => {
				const rect = stageRef.current?.getBoundingClientRect();
				if (!rect) return;
				tx = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
				ty = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
			};

			window.addEventListener("mousemove", onMove, { passive: true });
			return () => {
				cancelAnimationFrame(raf);
				window.removeEventListener("mousemove", onMove);
			};
		}, []);

		const words = title.split(" ");

		return (
			<section
				className={`p3d-stage ${tall ? "p3d-stage--tall" : ""}`}
				ref={stageRef}
			>
				<div className="p3d-tex" aria-hidden="true" />
				<div className="p3d-panels" aria-hidden="true" />
				<div className="p3d-veil" aria-hidden="true" />
				<div className="p3d-grain" aria-hidden="true" />
				<div className="p3d-glow" aria-hidden="true" />
				<StageProps />

				<div className={`p3d-stage-inner ${tall ? "p3d-stage-inner--center" : ""}`}>
					<div className="p3d-stage-copy">
						<span className="p3d-eyebrow">
							<span className="p3d-eyebrow-dot" />
							{kicker}
						</span>
						<h1 className="p3d-title" ref={titleRef}>
							{words.map((w, i) => {
								const up = w.toUpperCase();
								const hot =
									up === "BODY" ||
									up === "CHARACTER" ||
									up === "DOJO" ||
									up === "KARATE-DO" ||
									up === "KARATE" ||
									up === "SCHOOL" ||
									up === "MARTIAL" ||
									up === "WARRIOR" ||
									up === "TRAINING" ||
									up === "GOJUKAN" ||
									up === "OKINAWA" ||
									up === "PROGRAMS" ||
									up === "EVENTS" ||
									up === "GALLERY" ||
									up === "BLOG" ||
									up === "SUPPORT" ||
									up === "HOME" ||
									up === "404" ||
									up === "PRIVACY" ||
									up === "TERMS" ||
									up === "CONTACT" ||
									up === "METHOD" ||
									up === "SYLLABUS" ||
									up === "KATA" ||
									up === "KUMITE" ||
									up === "KOBUDO" ||
									up === "JUJITSU";
								return (
									<span key={`${w}-${i}`} className={`w ${hot ? "r" : ""}`}>
										{w}&nbsp;
									</span>
								);
							})}
						</h1>
						{subtitle && <p className="p3d-sub">{${subtitle}}</p>}
						{crumbs && crumbs.length > 0 && (
							<nav className="p3d-crumbs" aria-label="Breadcrumb">
								{crumbs.map((c, i) => (
									<span key={i} className="p3d-crumbs-item">
										{i > 0 && <span className="p3d-crumbs-sep" aria-hidden="true" />}
										{c.to ? <a href={c.to}>{c.label}</a> : <span>{c.label}</span>}
									</span>
								))}
							</nav>
						)}
					</div>
				</div>
			</section>
		);
	}
);

PageStage.displayName = "PageStage";

/* ----------------------------------------------------------- STAGE PROPS */

const StageProps = memo(() => (
	<div className="p3d-props" aria-hidden="true">
		<div className="p3d-prop p3d-prop--c1">
			<svg viewBox="0 0 64 64">
				<defs>
					<linearGradient id="pg1" x1="0" y1="0" x2="1" y2="1">
						<stop offset="0" stopColor="#ff3a41" />
						<stop offset="1" stopColor="#8f040f" />
					</linearGradient>
				</defs>
				<polygon points="0,16 32,0 64,16 64,48 32,64 0,48" fill="url(#pg1)" />
				<polygon points="0,16 32,32 64,16 64,48 32,64 0,48" fill="#000" opacity="0.3" />
			</svg>
		</div>
		<div className="p3d-prop p3d-prop--c2">
			<svg viewBox="0 0 38 38">
				<rect width="38" height="38" rx="2" fill="#fff" />
				<rect width="38" height="13" fill="#e30613" />
			</svg>
		</div>
		<div className="p3d-prop p3d-prop--c3">
			<svg viewBox="0 0 56 56">
				<polygon points="8,0 48,0 56,28 48,56 8,56 0,28" fill="#e30613" />
				<polygon points="8,0 32,28 48,0 56,28 32,28 0,28" fill="#fff" opacity="0.18" />
			</svg>
		</div>
		<div className="p3d-prop p3d-prop--c4">
			<svg viewBox="0 0 28 28">
				<rect width="28" height="28" fill="#e30613" />
			</svg>
		</div>
		<div className="p3d-prop p3d-prop--c5">
			<svg viewBox="0 0 48 48">
				<rect x="4" y="4" width="40" height="40" rx="4" fill="#fff" />
				<rect x="4" y="4" width="40" height="10" rx="4" fill="#e30613" />
			</svg>
		</div>
		<div className="p3d-prop p3d-prop--c6">
			<svg viewBox="0 0 34 34">
				<polygon points="0,10 17,0 34,10 34,24 17,34 0,24" fill="#e30613" />
			</svg>
		</div>
		<div className="p3d-prop p3d-prop--b1">
			<svg viewBox="0 0 220 120">
				<path d="M6 100 C58 18 152 6 214 54 L202 84 C148 42 74 52 24 112 Z" fill="#111" />
				<path d="M6 100 C58 18 152 6 214 54" stroke="#fff" strokeOpacity="0.24" strokeWidth="3" fill="none" />
			</svg>
		</div>
		<div className="p3d-prop p3d-prop--b2">
			<svg viewBox="0 0 240 140">
				<path d="M10 110 C70 20 160 10 230 64 L216 96 C152 50 86 58 28 122 Z" fill="#fff" opacity="0.92" />
				<path d="M10 110 C70 20 160 10 230 64" stroke="#e30613" strokeWidth="3" fill="none" />
			</svg>
		</div>
		<div className="p3d-prop p3d-prop--n1">
			<svg viewBox="0 0 200 140">
				{[0, 1, 2, 3, 4, 5, 6].map((i) => (
					<circle
						key={i}
						cx={70 + i * 11}
						cy={68 + Math.sin(i * 0.9) * 9}
						r={5.2}
						fill="none"
						stroke="#c9c9c9"
						strokeWidth="2.6"
					/>
				))}
				<rect x="6" y="42" width="64" height="28" rx="14" fill="#d9d9d9" />
				<rect x="132" y="54" width="64" height="28" rx="14" fill="#d9d9d9" />
			</svg>
		</div>
		<div className="p3d-prop p3d-prop--m1">
			<svg viewBox="0 0 120 150">
				<path d="M22 16 C10 28 8 64 18 88 C24 106 38 118 58 118 L82 118 C106 118 116 100 116 76 L116 48 C116 26 100 10 76 10 L52 10 C38 10 28 12 22 16 Z" fill="#e30613" />
				<ellipse cx="28" cy="68" rx="18" ry="36" fill="#0a0a0a" />
				<ellipse cx="28" cy="68" rx="14" ry="28" fill="#1c1c1c" />
				<path d="M62 104 C88 110 106 102 114 88" stroke="#fff" strokeWidth="9" fill="none" strokeLinecap="round" />
			</svg>
		</div>
	</div>
));

StageProps.displayName = "StageProps";

/* ----------------------------------------------------------------- REVEAL */

export const Reveal = memo(
	({ children, className = "" }: { children: ReactNode; className?: string }) => {
		const ref = useInViewReveal<HTMLDivElement>();
		return (
			<div ref={ref} className={`p3d__reveal ${className}`}>
				{children}
			</div>
		);
	}
);

Reveal.displayName = "Reveal";
