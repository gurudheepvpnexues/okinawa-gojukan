import { memo, useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
	aboutFacts,
	aboutTimeline,
	aboutValues,
	blogPosts,
	eventChambers,
	eventLedger,
	galleryItems,
	homeInstructors,
	homeJournal,
	homeMarquee,
	homeNumbers,
	homePillars,
	homeVoices,
	homeWeek,
	beltLadder,
	programChapters,
	contactHours,
	contactInfo,
	dojo,
} from "./data";

const ease = [0.16, 1, 0.3, 1] as const;

/* -------------------------------------------------------------- PILLARS */

export const Pillars = memo(
	({ items = homePillars }: { items?: typeof homePillars }) => (
		<div className="pillars">
			{items.map((pillar, index) => (
				<motion.article
					className="pillar"
					key={pillar.no}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 0.65, delay: index * 0.09, ease }}
				>
					<span className="pillar__num">{pillar.no}</span>
					<span className="pillar__icon">
						<img src={pillar.icon} alt="" aria-hidden="true" />
					</span>
					<h3>{pillar.title}</h3>
					<p>{pillar.text}</p>
				</motion.article>
			))}
		</div>
	)
);

Pillars.displayName = "Pillars";

/* -------------------------------------------------------------- TIMELINE */

export const Timeline = memo(
	({ items = aboutTimeline }: { items?: typeof aboutTimeline }) => (
		<div className="timeline">
			{items.map((entry, index) => (
				<motion.div
					className="timeline__item"
					key={entry.year}
					initial={{ opacity: 0, x: -22 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.6, delay: index * 0.07, ease }}
				>
					<div className="timeline__year">{entry.year}</div>
					<h3>{entry.title}</h3>
					<p>{entry.text}</p>
				</motion.div>
			))}
		</div>
	)
);

Timeline.displayName = "Timeline";

/* ---------------------------------------------------------------- VALUES */

export const Values = memo(
	({ items = aboutValues }: { items?: typeof aboutValues }) => (
		<div className="values">
			{items.map((value, index) => (
				<motion.article
					className="value"
					key={value.no}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.65, delay: index * 0.1, ease }}
				>
					<span className="value__no">{value.no}</span>
					<h3>{value.title}</h3>
					<p>{value.text}</p>
				</motion.article>
			))}
		</div>
	)
);

Values.displayName = "Values";

/* ----------------------------------------------------------- BELT LADDER */

export const BeltLadder = memo(
	({ items = beltLadder }: { items?: typeof beltLadder }) => (
		<div className="ladder">
			{items.map((step, index) => (
				<motion.div
					className="ladder__step"
					key={step.name}
					initial={{ opacity: 0, y: 26 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.55, delay: index * 0.07, ease }}
				>
					<div
						className="ladder__bar"
						style={{ backgroundColor: step.color }}
					></div>
					<div className="ladder__label">{step.name}</div>
					<div className="ladder__yrs">{step.years}</div>
				</motion.div>
			))}
		</div>
	)
);

BeltLadder.displayName = "BeltLadder";

/* ------------------------------------------------------------- TIMETABLE */

export const Timetable = memo(
	({ items = homeWeek }: { items?: typeof homeWeek }) => (
		<>
			<div className="timetable-wrap">
				<table className="timetable">
					<caption>Weekly class schedule · Yelahanka dojo hall</caption>
					<thead>
						<tr>
							<th scope="col">Day</th>
							<th scope="col">Session</th>
							<th scope="col">Time</th>
							<th scope="col">Level</th>
						</tr>
					</thead>
					<tbody>
						{items.map((day) =>
							day.sessions.map((session, sIndex) => (
								<tr key={`${day.day}-${session.time}`}>
									<td>{sIndex === 0 ? day.day : ""}</td>
									<td>{session.name}</td>
									<td>{session.time}</td>
									<td>
										<span className="tag">{session.tag}</span>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>

			<div className="timetable-cards">
				<p className="timetable-cards__cap">
					Weekly class schedule · Yelahanka dojo hall
				</p>
				{items.map((day) => (
					<div className="timetable-card" key={day.day}>
						<h3 className="timetable-card__day">{day.day}</h3>
						<ul className="timetable-card__list">
							{day.sessions.map((session) => (
								<li key={`${day.day}-${session.time}`}>
									<div className="timetable-card__row">
										<b>{session.name}</b>
										<span className="tag">{session.tag}</span>
									</div>
									<span className="timetable-card__time">
										{session.time}
									</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</>
	)
);

Timetable.displayName = "Timetable";

/* -------------------------------------------------------------- CHAPTERS */

export const Chapters = memo(
	({ items = programChapters }: { items?: typeof programChapters }) => (
		<div className="chapters">
			{items.map((chapter, index) => (
				<motion.article
					className="chapter"
					key={chapter.no}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.65, delay: index * 0.09, ease }}
				>
					<span className="chapter__no">{chapter.no}</span>
					<h3>{chapter.title}</h3>
					<p>{chapter.lead}</p>
					<ul className="chapter__points">
						{chapter.points.map((point) => (
							<li key={point}>
								<i className="fa-solid fa-check"></i>
								<span>{point}</span>
							</li>
						))}
					</ul>
				</motion.article>
			))}
		</div>
	)
);

Chapters.displayName = "Chapters";

/* ----------------------------------------------------------------- FACTS */

export const Facts = memo(
	({ items = aboutFacts }: { items?: typeof aboutFacts }) => (
		<div className="facts">
			{items.map((fact) => (
				<div className="facts__row" key={fact.label}>
					<span className="facts__label">{fact.label}</span>
					<span className="facts__value">{fact.value}</span>
				</div>
			))}
		</div>
	)
);

Facts.displayName = "Facts";

/* ---------------------------------------------------------------- PLANS */

interface Plan {
	name: string;
	note: string;
	price: string;
	period: string;
	features: { text: string; off?: boolean }[];
	featured?: boolean;
}

const defaultPlans: Plan[] = [
	{
		name: "Basic",
		note: "Two classes a week, for students starting out.",
		price: "1,200",
		period: "per month",
		features: [
			{ text: "Two karate-do classes each week" },
			{ text: "Kihon and kata syllabus access" },
			{ text: "Dojo kit and belt on joining" },
			{ text: "Competition squad entry", off: true },
			{ text: "Personal grading review", off: true },
		],
	},
	{
		name: "Standard",
		note: "The full graded track, at the pace most students need.",
		price: "1,600",
		period: "per month",
		featured: true,
		features: [
			{ text: "Unlimited karate-do classes" },
			{ text: "Full graded syllabus to black belt" },
			{ text: "Quarterly belt examinations included" },
			{ text: "Little Warriors companion class" },
			{ text: "Personal grading review" },
		],
	},
	{
		name: "Premium",
		note: "Competition preparation and one-to-one correction.",
		price: "2,000",
		period: "per month",
		features: [
			{ text: "Everything in the Standard track" },
			{ text: "Twice-weekly squad sessions" },
			{ text: "Tournament entry and travel support" },
			{ text: "Video technique analysis" },
			{ text: "One-to-one instructor session monthly" },
		],
	},
];

export const Plans = memo(
	({ items = defaultPlans }: { items?: Plan[] }) => (
		<div className="plans">
			{items.map((plan, index) => (
				<motion.article
					className={`plan ${plan.featured ? "plan--feature" : ""}`}
					key={plan.name}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.65, delay: index * 0.1, ease }}
				>
					{plan.featured && <span className="plan__flag">Most chosen</span>}
					<div className="plan__name">{plan.name}</div>
					<p className="plan__note">{plan.note}</p>
					<div className="plan__price">
						<span>&#8377;</span>
						<b>{plan.price}</b>
						<span>{plan.period}</span>
					</div>
					<ul className="plan__features">
						{plan.features.map((feature) => (
							<li key={feature.text} className={feature.off ? "is-off" : ""}>
								<i
									className={
										feature.off
											? "fa-solid fa-minus"
											: "fa-solid fa-check"
									}
								></i>
								<span>{feature.text}</span>
							</li>
						))}
					</ul>
					<Link to="/contact" className="btn-solid">
						Join {plan.name} <i className="ph ph-arrow-right"></i>
					</Link>
				</motion.article>
			))}
		</div>
	)
);

Plans.displayName = "Plans";

/* ---------------------------------------------------------------- VOICES */

export const Voices = memo(
	({ items = homeVoices }: { items?: typeof homeVoices }) => (
		<div className="quotes">
			{items.map((voice, index) => (
				<motion.figure
					className="quote"
					key={voice.name}
					initial={{ opacity: 0, y: 28 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 0.65, delay: index * 0.1, ease }}
				>
					<span className="quote__mark">&ldquo;</span>
					<blockquote className="quote__text">{voice.text}</blockquote>
					<figcaption className="quote__who">
						<img src={voice.img} alt="" aria-hidden="true" loading="lazy" />
						<span>
							<b>{voice.name}</b>
							<span>{voice.role}</span>
						</span>
					</figcaption>
				</motion.figure>
			))}
		</div>
	)
);

Voices.displayName = "Voices";

/* --------------------------------------------------------------- NUMBERS */

export const Numbers = memo(
	({ items = homeNumbers }: { items?: typeof homeNumbers }) => (
		<div className="sec--ink sec sec--grid">
			<div className="container">
				<div className="stats">
					{items.map((stat, index) => (
						<motion.div
							className="stat"
							key={stat.label}
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.4 }}
							transition={{ duration: 0.6, delay: index * 0.08, ease }}
						>
							<div className="stat__value">{stat.value}</div>
							<div className="stat__label">{stat.label}</div>
						</motion.div>
					))}
				</div>

				<div className="marquee" aria-hidden="true">
					<div className="marquee__track">
						{[...homeMarquee, ...homeMarquee].map((word, index) => (
							<span key={index}>
								<b>◆</b> {word}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	)
);

Numbers.displayName = "Numbers";

/* ----------------------------------------------------------- INSTRUCTORS */

export const Instructors = memo(
	({ items = homeInstructors }: { items?: typeof homeInstructors }) => (
		<div className="instructors">
			{items.map((member, index) => (
				<motion.article
					className="instructor"
					key={member.name}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.65, delay: index * 0.09, ease }}
				>
					<div className="instructor__img">
						<span className="instructor__idx">
							{String(index + 1).padStart(2, "0")}
						</span>
						<img src={member.img} alt={member.name} loading="lazy" />
					</div>
					<div className="instructor__cap">
						<h3>{member.name}</h3>
						<p>{member.title}</p>
						<span>{member.role}</span>
					</div>
				</motion.article>
			))}
		</div>
	)
);

Instructors.displayName = "Instructors";

/* --------------------------------------------------------------- JOURNAL */

export const Journal = memo(() => (
	<div className="ledger ledger--journal">
		{homeJournal.map((post) => (
			<Link
				key={post.title}
				to="/blog-details"
				className="ledger__row ledger__row--journal"
			>
				<span className="ledger__num">{post.date}</span>
				<h3>{post.title}</h3>
				<p>{post.desc}</p>
				<span className="ledger__meta">{post.author}</span>
				<i className="ph ph-arrow-up-right"></i>
			</Link>
		))}
	</div>
));

Journal.displayName = "Journal";

/* ---------------------------------------------------------- EVENT LEDGER */

export const EventLedger = memo(
	({ items = eventLedger }: { items?: typeof eventLedger }) => (
		<div className="ledger">
			{items.map((event) => (
				<Link key={event.no} to="/event-details" className="ledger__row">
					<span className="ledger__num">{event.no}</span>
					<h3>{event.title}</h3>
					<p>{event.date}</p>
					<span className="ledger__meta">{event.meta}</span>
					<i className="ph ph-arrow-up-right"></i>
				</Link>
			))}
		</div>
	)
);

EventLedger.displayName = "EventLedger";

/* -------------------------------------------------------------- CHAMBERS */

export const Chambers = memo(
	({ items = eventChambers }: { items?: typeof eventChambers }) => (
		<div className="chambers">
			{items.map((chamber, index) => (
				<motion.figure
					className="chamber"
					key={chamber.name}
					initial={{ opacity: 0, y: 26 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6, delay: index * 0.08, ease }}
				>
					<img src={chamber.img} alt={chamber.name} loading="lazy" />
					<figcaption className="chamber__cap">
						<b>{chamber.name}</b>
						<span>{chamber.note}</span>
					</figcaption>
				</motion.figure>
			))}
		</div>
	)
);

Chambers.displayName = "Chambers";

/* ----------------------------------------------------------------- POSTS */

export const Posts = memo(() => {
	const [page, setPage] = useState(0);
	const sectionRef = useRef<HTMLElement | null>(null);
	const perPage = 3;
	const totalPages = Math.ceil(blogPosts.length / perPage);

	useEffect(() => {
		const offset = sectionRef.current?.offsetTop ?? 0;
		window.scrollTo({ top: Math.max(offset - 90, 0), behavior: "smooth" });
	}, [page]);

	const visible = blogPosts.slice(page * perPage, page * perPage + perPage);

	return (
		<section className="sec sec--tight" ref={sectionRef}>
			<div className="container">
				<div className="journal__grid">
					{visible.map((post, index) => (
						<motion.article
							className="post"
							key={post.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.6, delay: index * 0.1, ease }}
						>
							<Link to="/blog-details" className="post__img">
								<img src={post.img} alt={post.title} loading="lazy" />
							</Link>
							<div className="post__meta">
								<span>{post.date}</span>
								<span>{post.author}</span>
							</div>
							<h3>
								<Link to="/blog-details">{post.title}</Link>
							</h3>
							<p>{post.desc}</p>
							<Link to="/blog-details" className="arrow-link">
								Read <i className="ph ph-arrow-right"></i>
							</Link>
						</motion.article>
					))}
				</div>

				{totalPages > 1 && (
					<nav className="mart-pagination mt-5" aria-label="Blog pagination">
						<button
							type="button"
							aria-label="Previous page"
							disabled={page === 0}
							onClick={() => setPage((p) => Math.max(p - 1, 0))}
						>
							<i className="fa-solid fa-arrow-left"></i>
						</button>
						{Array.from({ length: totalPages }).map((_, i) => (
							<button
								key={i}
								type="button"
								className={i === page ? "current" : ""}
								aria-current={i === page ? "page" : undefined}
								onClick={() => setPage(i)}
							>
								{i + 1}
							</button>
						))}
						<button
							type="button"
							aria-label="Next page"
							disabled={page === totalPages - 1}
							onClick={() =>
								setPage((p) => Math.min(p + 1, totalPages - 1))
							}
						>
							<i className="fa-solid fa-arrow-right"></i>
						</button>
					</nav>
				)}
			</div>
		</section>
	)
});

Posts.displayName = "Posts";

/* ---------------------------------------------------------------- MOSAIC */

export const Mosaic = memo(() => {
	const [active, setActive] = useState<number | null>(null);
	const closeRef = useRef<HTMLButtonElement | null>(null);
	const triggerRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (active === null) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setActive(null);
			if (e.key === "ArrowLeft")
				setActive((i) =>
					i === null ? i : (i - 1 + galleryItems.length) % galleryItems.length
				);
			if (e.key === "ArrowRight")
				setActive((i) => (i === null ? i : (i + 1) % galleryItems.length));
		};
		window.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		closeRef.current?.focus();
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
			triggerRef.current?.focus();
		};
	}, [active]);

	const open = (index: number, trigger: HTMLElement) => {
		triggerRef.current = trigger;
		setActive(index);
	};

	return (
		<>
			<div className="mosaic">
				{galleryItems.map((item, index) => (
					<motion.figure
						key={item.img}
						initial={{ opacity: 0, scale: 0.96 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, amount: 0.15 }}
						transition={{ duration: 0.6, delay: (index % 4) * 0.07, ease }}
						role="button"
						tabIndex={0}
						onClick={(e) => open(index, e.currentTarget)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								open(index, e.currentTarget);
							}
						}}
					>
						<img
							src={item.img}
							alt={item.caption}
							loading="lazy"
							style={item.pos ? { objectPosition: item.pos } : undefined}
						/>
						<figcaption>{item.caption}</figcaption>
					</motion.figure>
				))}
			</div>

			{active !== null && (
				<div
					className="lb"
					onClick={() => setActive(null)}
					role="dialog"
					aria-modal="true"
					aria-label={galleryItems[active].caption}
				>
					<button
						type="button"
						ref={closeRef}
						className="lb__btn lb__close"
						onClick={() => setActive(null)}
						aria-label="Close"
					>
						<i className="fa-solid fa-xmark"></i>
					</button>
					<button
						type="button"
						className="lb__btn lb__prev"
						onClick={(e) => {
							e.stopPropagation();
							setActive(
								(active - 1 + galleryItems.length) % galleryItems.length
							);
						}}
						aria-label="Previous photo"
					>
						<i className="fa-solid fa-chevron-left"></i>
					</button>
					<button
						type="button"
						className="lb__btn lb__next"
						onClick={(e) => {
							e.stopPropagation();
							setActive((active + 1) % galleryItems.length);
						}}
						aria-label="Next photo"
					>
						<i className="fa-solid fa-chevron-right"></i>
					</button>

					<div className="lb__frame" onClick={(e) => e.stopPropagation()}>
						<img
							src={galleryItems[active].img}
							alt={galleryItems[active].caption}
						/>
						<p className="lb__cap">{galleryItems[active].caption}</p>
					</div>
				</div>
			)}
		</>
	)
});

Mosaic.displayName = "Mosaic";

/* --------------------------------------------------------------- INQUIRY */

export const Inquiry = memo(() => {
	const [sent, setSent] = useState(false);
	const [error, setError] = useState("");
	const [waUrl, setWaUrl] = useState("");

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = new FormData(e.currentTarget);
		const name = String(data.get("name") ?? "").trim();
		const phone = String(data.get("phone") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const age = String(data.get("age") ?? "").trim();
		const interest = String(data.get("interest") ?? "").trim();
		const message = String(data.get("message") ?? "").trim();

		if (!name || !phone) {
			setSent(false);
			setError(
				"Please add your name and phone number so the dojo can call you back."
			);
			return;
		}

		const body = [
			"New enquiry from the Okinawa Gojukan website",
			"",
			`Name: ${name}`,
			`Phone: ${phone}`,
			email ? `Email: ${email}` : "",
			age ? `Age of student: ${age}` : "",
			interest ? `Interested in: ${interest}` : "",
			message ? `Message: ${message}` : "",
		]
			.filter(Boolean)
			.join("\n");

		const url = `${dojo.whatsapp}?text=${encodeURIComponent(body)}`;

		const opened = window.open(url, "_blank", "noopener,noreferrer");
		if (!opened) window.location.href = url;

		setError("");
		setWaUrl(url);
		setSent(true);
	};

	return (
		<div className="inquiry">
			<aside className="inquiry__aside">
				<h3>Reach the dojo</h3>

				{contactInfo.map((item) => (
					<div className="info-row" key={item.label}>
						<span className="info-row__ico">
							<i className={item.icon}></i>
						</span>
						<span>
							<b>{item.label}</b>
							{item.href ? (
								<a
									href={item.href}
									target={
										item.href.startsWith("http") ? "_blank" : undefined
									}
									rel={
										item.href.startsWith("http") ? "noreferrer" : undefined
									}
								>
									{item.value}
								</a>
							) : (
								<span>{item.value}</span>
							)}
						</span>
					</div>
				))}

				<div className="mt-4">
					<b className="d-block small text-uppercase fw-bold opacity-50 mb-2">
						Opening hours
					</b>
					{contactHours.map((row) => (
						<div className="info-row" key={row.label}>
							<span>
								<b>{row.label}</b>
								<span>{row.value}</span>
							</span>
						</div>
					))}
				</div>
			</aside>

			<div className="inquiry__form">
				<div className="sec-head mb-4">
					<div className="sec-head__bar">
					<span className="sec-head__index">FORM</span>
					<span className="sec-head__kicker">Enquiry</span>
					</div>
					<h2 className="sec-head__title">Book a free trial class</h2>
				</div>

				<form
					onSubmit={handleSubmit}
					noValidate
				>
					<div className="form-grid">
						<div className="field">
							<label htmlFor="inq-name">Your name</label>
							<input id="inq-name" name="name" type="text" required />
						</div>
						<div className="field">
							<label htmlFor="inq-phone">Phone number</label>
							<input id="inq-phone" name="phone" type="tel" required />
						</div>
						<div className="field">
							<label htmlFor="inq-email">Email address (optional)</label>
							<input id="inq-email" name="email" type="email" />
						</div>
						<div className="field">
							<label htmlFor="inq-age">Age of the student</label>
							<input
								id="inq-age"
								name="age"
								type="number"
								min={4}
								max={70}
								placeholder="e.g. 12"
							/>
						</div>
						<div className="field field--full">
							<label htmlFor="inq-interest">I am interested in</label>
							<select id="inq-interest" name="interest" defaultValue="">
								<option value="" disabled>
									Select a track
								</option>
								<option>Foundation track for beginners</option>
								<option>Graded karate-do syllabus</option>
								<option>Little Warriors (ages 5-11)</option>
								<option>Competition squad</option>
								<option>Kobudo / weapons training</option>
							</select>
						</div>
						<div className="field field--full">
							<label htmlFor="inq-message">Message</label>
							<textarea
								id="inq-message"
								name="message"
								rows={5}
								placeholder="Tell us about the student and what you are looking for."
							></textarea>
						</div>
					</div>

					<button type="submit" className="btn-solid mt-4">
						Send on WhatsApp <i className="ph ph-whatsapp-logo"></i>
					</button>

					{sent && (
						<div className="form-success mt-3">
							<i className="fa-solid fa-circle-check"></i>
							<span>
								WhatsApp is open with your details filled in. Press send
								and it lands in the dojo inbox.
								{waUrl && (
									<a
										className="d-inline-block mt-2"
										href={waUrl}
										target="_blank"
										rel="noreferrer"
									>
										Open WhatsApp again
									</a>
								)}
							</span>
						</div>
					)}

					{error && (
						<p className="form-error mt-3">
							<i className="fa-solid fa-circle-exclamation"></i> {error}
						</p>
					)}

					<p className="form-note">
						Your message goes straight to the dojo WhatsApp inbox and is read by
						an instructor. Prefer to talk? Call {dojo.phone}, or email{" "}
						<a href={`mailto:${dojo.email}`}>{dojo.email}</a>. Trial classes
						are free for every new student.
					</p>
				</form>
			</div>
		</div>
	)
});

Inquiry.displayName = "Inquiry";
