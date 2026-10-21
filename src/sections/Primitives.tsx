import { memo, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/* ------------------------------------------------------------------ HEAD */

interface SecHeadProps {
	index?: string;
	kicker: string;
	title: ReactNode;
	lede?: ReactNode;
	action?: ReactNode;
	align?: "left" | "split";
}

export const SecHead = memo(
	({ index, kicker, title, lede, action, align = "split" }: SecHeadProps) => (
		<div className="sec-head">
			<div className="sec-head__bar">
				{index && <span className="sec-head__index">{index}</span>}
				<span className="sec-head__kicker">{kicker}</span>
				<span className="spacer" />
				{action}
			</div>

			{align === "split" && lede ? (
				<div className="sec-head__row">
					<h2 className="sec-head__title">{title}</h2>
					<p className="sec-head__lede">{lede}</p>
				</div>
			) : (
				<>
					<h2 className="sec-head__title">{title}</h2>
					{lede && <p className="sec-head__lede mt-3">{lede}</p>}
				</>
			)}
		</div>
	)
);

SecHead.displayName = "SecHead";

/* ----------------------------------------------------------------- SPLIT */

interface SplitProps {
	image: string;
	alt: string;
	tag?: string;
	title: string;
	lead?: string;
	body?: string;
	points?: string[];
	flip?: boolean;
	cta?: { label: string; to: string };
	aspect?: string;
}

export const Split = memo(
	({
		image,
		alt,
		tag,
		title,
		lead,
		body,
		points = [],
		flip = false,
		cta,
	}: SplitProps) => (
		<div className={`split ${flip ? "split--flip" : ""}`}>
			<motion.div
				className="split__media"
				initial={{ opacity: 0, y: 34 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.8, ease }}
			>
				<img src={image} alt={alt} loading="lazy" />
				{tag && <span className="split__tag">{tag}</span>}
			</motion.div>

			<motion.div
				className="split__body"
				initial={{ opacity: 0, y: 34 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.8, delay: 0.12, ease }}
			>
				<h3 className="split__title">{title}</h3>
				{lead && <p className="fs-5 fw-semibold">{lead}</p>}
				{body && <p>{body}</p>}

				{points.length > 0 && (
					<ul className="split__list">
						{points.map((point) => (
							<li key={point}>
								<i className="fa-solid fa-check"></i>
								<span>{point}</span>
							</li>
						))}
					</ul>
				)}

				{cta && (
					<Link to={cta.to} className="arrow-link mt-4">
						{cta.label} <i className="ph ph-arrow-right"></i>
					</Link>
				)}
			</motion.div>
		</div>
	)
);

Split.displayName = "Split";

/* ---------------------------------------------------------------- LEDGER */

export interface LedgerItem {
	no: string;
	title: string;
	text: string;
	meta?: string;
	to?: string;
}

interface LedgerProps {
	items: LedgerItem[];
	to?: string;
}

export const Ledger = memo(({ items, to }: LedgerProps) => (
	<div className="ledger">
		{items.map((item) => {
			const inner = (
				<>
					<span className="ledger__num">{item.no}</span>
					<h3>{item.title}</h3>
					<p>{item.text}</p>
					{item.meta && <span className="ledger__meta">{item.meta}</span>}
					<i className="ph ph-arrow-up-right"></i>
				</>
			);

			return item.to ? (
				<Link key={item.no} to={item.to} className="ledger__row">
					{inner}
				</Link>
			) : (
				<div key={item.no} className="ledger__row">
					{inner}
				</div>
			);
		})}
	</div>
));

Ledger.displayName = "Ledger";

/* ------------------------------------------------------------------ BAND */

interface BandProps {
	index?: string;
	image: string;
	kicker: string;
	title: string;
	text: string;
	stats?: { value: string; label: string }[];
	action?: { label: string; to: string };
}

export const Band = memo(
	({ index, image, kicker, title, text, stats = [], action }: BandProps) => (
		<section className="band">
			<div
				className="band__bg"
				style={{ backgroundImage: `url(${image})` }}
				aria-hidden="true"
			></div>
			<div className="container band__inner">
				<div className="band__body">
					<span className="band__kicker">
						{index ? `${index} — ${kicker}` : kicker}
					</span>
					<h2>{title}</h2>
					<p>{text}</p>
					{action && (
						<Link to={action.to} className="btn-solid mt-4">
							{action.label} <i className="ph ph-arrow-right"></i>
						</Link>
					)}
				</div>

				{stats.length > 0 && (
					<ul className="band__stats">
						{stats.map((stat) => (
							<li key={stat.label}>
								<b>{stat.value}</b>
								<span>{stat.label}</span>
							</li>
						))}
					</ul>
				)}
			</div>
		</section>
	)
);

Band.displayName = "Band";

/* ----------------------------------------------------------- MASTHEAD */

interface MastheadProps {
	index: string;
	kicker: string;
	title: string;
	lede: string;
	background?: string;
	plain?: boolean;
	crumbs?: { label: string; to?: string }[];
}

export const Masthead = memo(
	({
		index,
		kicker,
		title,
		lede,
		background,
		plain = false,
		crumbs = [],
	}: MastheadProps) => (
		<section className={`masthead ${plain ? "masthead--plain" : ""}`}>
			{!plain && background && (
				<div
					className="masthead__bg"
					style={{ backgroundImage: `url(${background})` }}
					aria-hidden="true"
				></div>
			)}

			<div className="container masthead__inner">
				<nav className="masthead__crumbs" aria-label="Breadcrumb">
					<Link to="/">Home</Link>
					<i className="fa-solid fa-chevron-right"></i>
					<span>{crumbs[0]?.label ?? title}</span>
				</nav>

				<div className="masthead__row">
					<div>
						<motion.div
							className="masthead__index"
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							{index} — {kicker}
						</motion.div>
						<motion.h1
							initial={{ opacity: 0, y: 26 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.85, delay: 0.16, ease }}
						>
							{title}
						</motion.h1>
					</div>

					<motion.p
						className="masthead__lede"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.85, delay: 0.3, ease }}
					>
						{lede}
					</motion.p>
				</div>

				<div className="masthead__rule"></div>
			</div>
		</section>
	)
);

Masthead.displayName = "Masthead";/* --------------------------------------------------------------- CLOSING */

interface ClosingProps {
	kicker?: string;
	title: string;
	text: string;
	primary: { label: string; to: string };
	secondary?: { label: string; to: string };
}

export const Closing = memo(
	({ kicker = "Next step", title, text, primary, secondary }: ClosingProps) => (
		<section className="closing">
			<div className="container closing__inner">
				<div>
					<span className="band__kicker">{kicker}</span>
					<h2>{title}</h2>
					<p>{text}</p>
				</div>

				<div className="closing__actions">
					<Link to={primary.to} className="btn-solid">
						{primary.label} <i className="ph ph-arrow-right"></i>
					</Link>
					{secondary && (
						<Link to={secondary.to} className="btn-ghost">
							{secondary.label}
						</Link>
					)}
				</div>
			</div>
		</section>
	)
);

Closing.displayName = "Closing";
