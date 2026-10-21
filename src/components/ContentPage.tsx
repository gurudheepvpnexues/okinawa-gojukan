import { memo, useMemo } from "react";
import { motion } from "framer-motion";

export interface ContentSection {
	heading: string;
	body: string[];
	list?: string[];
}

interface ContentPageProps {
	eyebrow?: string;
	title: string;
	subtitle?: string;
	intro?: string;
	sections: ContentSection[];
}

const slug = (value: string) =>
	value
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");

const ContentPage: React.FC<ContentPageProps> = ({
	eyebrow = "Information",
	title,
	subtitle = "",
	intro = "",
	sections,
}) => {
	const index = useMemo(
		() => sections.map((section) => ({ label: section.heading, id: slug(section.heading) })),
		[sections]
	);

	return (
		<section className="sec sec--grid">
			<div className="container">
				<div className="legal">
					<motion.div
						className="article"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.65 }}
					>
						<div className="article__meta">
							<span>{eyebrow}</span>
							<span>{sections.length} sections</span>
							<span>Last reviewed 2026</span>
						</div>

						{intro && <p className="fs-5 fw-semibold">{intro}</p>}
						{subtitle && <p>{subtitle}</p>}

						{sections.map((section) => (
							<section key={section.heading} id={slug(section.heading)}>
								<h3>{section.heading}</h3>
								{section.body.map((paragraph, i) => (
									<p key={i}>{paragraph}</p>
								))}
								{section.list && (
									<ul>
										{section.list.map((item) => (
											<li key={item}>
												<i className="fa-solid fa-check"></i>
												<span>{item}</span>
											</li>
										))}
									</ul>
								)}
							</section>
						))}
					</motion.div>

					<nav className="legal__index" aria-label={title}>
						{index.map((item) => (
							<a key={item.id} href={`#${item.id}`}>
								{item.label}
							</a>
						))}
					</nav>
				</div>
			</div>
		</section>
	);
};

export default memo(ContentPage);
