import {
	memo,
	useEffect,
	useRef,
	useState,
	type CSSProperties,
	type PointerEvent as ReactPointerEvent,
} from "react";
import { Link } from "react-router-dom";
import {
	motion,
	useMotionValue,
	useReducedMotion,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";
import {
	Belt3D,
	Cube3D,
	Fighter3D,
	FocusMitt3D,
	Nunchuck3D,
	Particle,
} from "./threeD";

/* ------------------------------------------------------------------ COPY */

const TITLE_LINES: { t: string; red: boolean }[][] = [
	[
		{ t: "Train the", red: false },
		{ t: "body", red: true },
		{ t: ".", red: false },
	],
	[
		{ t: "build the", red: false },
		{ t: "character", red: true },
		{ t: ".", red: false },
	],
];

const LEDE =
	"Okinawan karate-do taught to the standards of the Indian defence services — Army, Navy, Airforce, Para and NSG Commandos. A graded syllabus, a competition squad, and a dojo that has been training in Bangalore since 2003.";

const FACTS = [
	{ value: 2003, label: "Dojo founded" },
	{ value: 9, label: "Belt levels" },
	{ value: 19, label: "Weekly sessions" },
];

const PARTICLES = [
	{ left: 6, top: 22, size: 6, tone: "red" as const, delay: 0, duration: 9 },
	{ left: 14, top: 68, size: 4, tone: "white" as const, delay: 1.2, duration: 11 },
	{ left: 24, top: 12, size: 3, tone: "white" as const, delay: 2.4, duration: 8 },
	{ left: 33, top: 82, size: 5, tone: "red" as const, delay: 0.6, duration: 10 },
	{ left: 42, top: 34, size: 3, tone: "white" as const, delay: 3.1, duration: 12 },
	{ left: 52, top: 8, size: 4, tone: "red" as const, delay: 1.8, duration: 9.5 },
	{ left: 61, top: 74, size: 5, tone: "white" as const, delay: 2.1, duration: 10.5 },
	{ left: 70, top: 28, size: 3, tone: "red" as const, delay: 4.2, duration: 8.5 },
	{ left: 78, top: 58, size: 6, tone: "red" as const, delay: 0.9, duration: 11.5 },
	{ left: 87, top: 18, size: 4, tone: "white" as const, delay: 1.5, duration: 9.8 },
	{ left: 92, top: 76, size: 3, tone: "white" as const, delay: 3.6, duration: 12.5 },
	{ left: 46, top: 52, size: 3, tone: "red" as const, delay: 5, duration: 10 },
	{ left: 66, top: 90, size: 4, tone: "red" as const, delay: 2.7, duration: 9.2 },
	{ left: 8, top: 46, size: 3, tone: "white" as const, delay: 4.6, duration: 11.2 },
];

/* ------------------------------------------------------------- COUNT UP */

const useCountUp = (target: number, duration = 1.5, delay = 0) => {
	const ref = useRef<HTMLSpanElement | null>(null);
	const [value, setValue] = useState(0);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;

		let frame = 0;
		let started = false;

		const run = () => {
			if (started) return;
			started = true;
			const origin = performance.now() + delay * 1000;

			const tick = (now: number) => {
				const progress = Math.min(
					1,
					Math.max(0, (now - origin) / (duration * 1000))
				);
				const eased = 1 - Math.pow(1 - progress, 3);
				setValue(Math.round(target * eased));
				if (progress < 1) frame = requestAnimationFrame(tick);
			};

			frame = requestAnimationFrame(tick);
		};

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						run();
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.35 }
		);

		observer.observe(node);
		return () => {
			observer.disconnect();
			cancelAnimationFrame(frame);
		};
	}, [target, duration, delay]);

	return { ref, value };
};

const Fact = memo(
	({ value, label, index }: { value: number; label: string; index: number }) => {
		const { ref, value: shown } = useCountUp(value, 1.5, index * 0.16);

		return (
			<div className="h3d__fact">
				<b ref={ref}>{shown}</b>
				<span>{label}</span>
			</div>
		);
	}
);

Fact.displayName = "Fact";

/* ------------------------------------------------------------------ HERO */

const Hero3D = () => {
	const sectionRef = useRef<HTMLElement | null>(null);
	const reduce = useReducedMotion();

	const pointerX = useMotionValue(0);
	const pointerY = useMotionValue(0);
	const softX = useSpring(pointerX, { stiffness: 55, damping: 18, mass: 0.7 });
	const softY = useSpring(pointerY, { stiffness: 55, damping: 18, mass: 0.7 });

	const fighterX = useTransform(softX, [-1, 1], [34, -34]);
	const fighterY = useTransform(softY, [-1, 1], [22, -22]);
	const propX = useTransform(softX, [-1, 1], [-46, 46]);
	const propY = useTransform(softY, [-1, 1], [-30, 30]);
	const copyX = useTransform(softX, [-1, 1], [14, -14]);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});
	const titleScroll = useTransform(scrollYProgress, [0, 1], [0, 90]);
	const stageScroll = useTransform(scrollYProgress, [0, 1], [0, 70]);

	const handlePointer = (event: ReactPointerEvent<HTMLElement>) => {
		if (reduce) return;
		if (event.pointerType === "touch") return;
		const rect = event.currentTarget.getBoundingClientRect();
		pointerX.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
		pointerY.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
	};

	const resetPointer = () => {
		pointerX.set(0);
		pointerY.set(0);
	};

	return (
		<section
			className="h3d"
			ref={sectionRef}
			onPointerMove={handlePointer}
			onPointerLeave={resetPointer}
		>
			{/* dojo interior — wood panels, blurred, under a heavy dark veil */}
			<div className="h3d__tex" aria-hidden="true" />
			<div className="h3d__panels" aria-hidden="true" />
			<div className="h3d__veil" aria-hidden="true" />
			<div className="h3d__scan" aria-hidden="true" />

			<div className="h3d__grid">
				{/* ---------------------------------------------------- copy */}
				<motion.div
					className="h3d__copy"
					style={{ x: copyX }}
				>
					<motion.span
						className="h3d__eyebrow"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.05 }}
					>
						<span className="h3d__eyebrow-dot" />
						Yelahanka · Bangalore · since 2003
					</motion.span>

					<motion.h1
						className="h3d__title"
						style={{ y: titleScroll }}
					>
						{TITLE_LINES.map((line, lineIndex) => (
							<span className="h3d__title-line" key={lineIndex}>
								{line.map((word, wordIndex) => (
									<motion.span
										className={`h3d__word${word.red ? " h3d__word--red" : ""}`}
										key={`${lineIndex}-${word.t}-${wordIndex}`}
										initial={{ opacity: 0, y: 60 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.8,
											delay: 0.1 + (lineIndex * 3 + wordIndex) * 0.1,
											ease: [0.16, 1, 0.3, 1],
										}}
									>
										{word.t}
									</motion.span>
								))}
							</span>
))}
				</motion.h1>

					<motion.p
						className="h3d__lede"
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
					>
						{LEDE}
					</motion.p>

					<motion.div
						className="h3d__cta"
						initial={{ opacity: 0, scale: 0.92 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
					>
						<Link to="/contact" className="h3d__btn h3d__btn--primary">
							Book a free trial
							<i className="ph ph-arrow-right"></i>
						</Link>
						<Link to="/programs" className="h3d__btn h3d__btn--ghost">
							See the syllabus
						</Link>
					</motion.div>

					<motion.div
						className="h3d__facts"
						initial={{ opacity: 0, y: 22 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
					>
						{FACTS.map((fact, index) => (
							<Fact
								key={fact.label}
								value={fact.value}
								label={fact.label}
								index={index}
							/>
						))}
					</motion.div>
				</motion.div>

				{/* --------------------------------------------------- stage */}
				<div className="h3d__stage">
					<div className="h3d__glow" aria-hidden="true" />

					<motion.div
						className="h3d__props"
						style={{ x: propX, y: propY }}
						aria-hidden="true"
					>
						<Cube3D size={54} tone="red" className="h3d__obj--a" />
						<Cube3D size={34} tone="red" className="h3d__obj--b" />
						<Cube3D size={26} tone="white" className="h3d__obj--c" />
						<Cube3D size={46} tone="white" className="h3d__obj--d" />
						<Cube3D size={30} tone="red" className="h3d__obj--e" />
						<Cube3D size={22} tone="white" className="h3d__obj--f" />

						<div className="h3d__obj h3d__obj--belt h3d__obj--g">
							<Belt3D tone="black" />
						</div>
						<div className="h3d__obj h3d__obj--belt h3d__obj--h">
							<Belt3D tone="white" />
						</div>

						<div className="h3d__obj h3d__obj--nun h3d__obj--i">
							<Nunchuck3D />
						</div>
						<div className="h3d__obj h3d__obj--nun h3d__obj--j">
							<Nunchuck3D />
						</div>

						<div className="h3d__obj h3d__obj--mitt h3d__obj--k">
							<FocusMitt3D />
						</div>
						<div className="h3d__obj h3d__obj--mitt h3d__obj--l">
							<FocusMitt3D />
						</div>
					</motion.div>

					<motion.div
						className="h3d__fighter-scroll"
						style={{ y: stageScroll }}
					>
						<motion.div
							className="h3d__fighter-enter"
							initial={{ opacity: 0, x: 110 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
						>
							<motion.div
								className="h3d__fighter"
								style={{ x: fighterX, y: fighterY }}
							>
								<Fighter3D />
							</motion.div>
						</motion.div>
					</motion.div>

					<div className="h3d__dust" aria-hidden="true">
						{PARTICLES.map((particle, index) => (
							<Particle key={index} {...particle} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default memo(Hero3D);
