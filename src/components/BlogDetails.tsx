import { memo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { articles } from "../sections/articles";

const popularPosts = [
	{
		img: "assets/img/gallery/okinawa-red-belt.jpg",
		title: "Red Belt 10th Dan: awarded in Okinawa",
		date: "09 November, 2026",
		to: "/blog-details?post=tenth-dan-red-belt",
	},
	{
		img: "assets/img/New images/image 2.jpeg",
		title: "Three golds in Bengaluru: inside the XVI WKC",
		date: "02 November, 2026",
		to: "/blog-details?post=world-championship-2026",
	},
	{
		img: "assets/img/New images/image 63.jpeg",
		title: "Bo staff and bronze: kobudo on the world stage",
		date: "24 October, 2026",
		to: "/blog-details?post=kobudo-world-stage",
	},
];

const categories = [
	"Achievements",
	"Training Tips",
	"Techniques & Skills",
	"Fitness & Conditioning",
	"Health & Nutrition",
	"Martial Arts Philosophy",
];

type Comment = {
	name: string;
	avatar: string;
	date: string;
	text: string;
	children?: Comment[];
};

const comments: Comment[] = [
	{
		name: "Ramesh Kumar",
		avatar: "assets/img/blog/avator/1.jpg",
		date: "19 Aug, 2026",
		text: "Wonderful article! My son has been training at the dojo for a year and his confidence has grown so much. Thank you for sharing these tips.",
		children: [
			{
				name: "Priya Sharma",
				avatar: "assets/img/blog/avator/2.jpg",
				date: "20 Aug, 2026",
				text: "Great read. Staying consistent between classes is something I struggle with — these suggestions are really practical and easy to follow.",
				children: [
					{
						name: "Sandeep Rao",
						avatar: "assets/img/blog/avator/3.jpg",
						date: "21 Aug, 2026",
						text: "Very helpful for beginners. I wish I had found this kind of guidance when I first started karate training.",
					},
				],
			},
		],
	},
];

const countComments = (list: Comment[]): number =>
	list.reduce(
		(total, comment) =>
			total + 1 + (comment.children ? countComments(comment.children) : 0),
		0
	);

const CommentItem = memo(({ comment }: { comment: Comment }) => (
	<li className="comment">
		<div className="single-comment">
			<div className="com-img">
				<img src={comment.avatar} alt={comment.name} />
				<h4>{comment.name}</h4>
				<span className="cdate">{comment.date}</span>
			</div>
			<div className="com-content">
				<p>{comment.text}</p>
			</div>
		</div>

		{comment.children && comment.children.length > 0 && (
			<ul className="children">
				{comment.children.map((child, idx) => (
					<CommentItem key={idx} comment={child} />
				))}
			</ul>
		)}
	</li>
));

const BlogDetails = () => {
	const [commentSent, setCommentSent] = useState(false);
	const [params] = useSearchParams();
	const slug = params.get("post") ?? "";
	const article = articles[slug] ?? articles.discipline;

	return (
		<section className="sec">
			<div className="container">
				<div className="detail">
					<div>
						<motion.article
							className="article"
							initial={{ opacity: 0, y: 34 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7 }}
						>
							<figure className="article__figure">
								<img src={article.hero.img} alt={article.hero.alt} />
								<figcaption>{article.hero.caption}</figcaption>
							</figure>

							<div className="article__meta">
								<span>{article.date}</span>
								<span>{article.read}</span>
								<span className="d-flex align-items-center gap-2">
									<img src={article.avatar} alt="" aria-hidden="true" />
									{article.author}
								</span>
								<span>{article.category}</span>
							</div>

							<h3>{article.title}</h3>
							{article.body()}
						</motion.article>

						{/* Comments */}
						<motion.div
							className="comments mt-5"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h3 className="sec-head__title mb-4">
								Comments — {countComments(comments)}
							</h3>
							<ul className="comment-list">
								{comments.map((comment, idx) => (
									<CommentItem key={idx} comment={comment} />
								))}
							</ul>
						</motion.div>

						{/* Comment form */}
						<motion.div
							className="mt-5"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							viewport={{ once: true }}
						>
							<h3 className="sec-head__title mb-4">Leave a comment</h3>
							<form
								onSubmit={(e) => {
									e.preventDefault();
									setCommentSent(true);
								}}
								noValidate
							>
								<div className="form-grid">
									<div className="field">
										<label htmlFor="cmt-name">Your name</label>
										<input id="cmt-name" name="name" type="text" required />
									</div>
									<div className="field">
										<label htmlFor="cmt-email">Your email</label>
										<input id="cmt-email" name="email" type="email" required />
									</div>
									<div className="field field--full">
										<label htmlFor="cmt-message">Message</label>
										<textarea
											id="cmt-message"
											name="message"
											rows={5}
											required
										></textarea>
									</div>
								</div>

								<button type="submit" className="btn-solid mt-4">
									Post comment <i className="ph ph-arrow-right"></i>
								</button>

								{commentSent && (
									<p className="form-success mt-3">
										<i className="fa-solid fa-circle-check"></i> Thank you!
										Your comment has been posted.
									</p>
								)}
							</form>
						</motion.div>
					</div>

					{/* Sidebar */}
					<motion.aside
						className="detail__aside"
						initial={{ opacity: 0, y: 34 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.15 }}
					>
						<h3>Categories</h3>
						<ul className="mb-4">
							{categories.map((cat) => (
								<li
									key={cat}
									style={{
										display: "block",
										padding: "10px 0",
										borderBottom: "1px solid rgba(255,255,255,.16)",
									}}
								>
									<Link to="/blog" style={{ color: "#fff", fontSize: "14px" }}>
										{cat}
									</Link>
								</li>
							))}
						</ul>

						<h3 className="mt-4">Popular posts</h3>
						{popularPosts.map((post) => (
							<Link
								key={post.title}
								to={post.to}
								className="d-flex gap-3 align-items-center py-2"
								style={{
									borderBottom: "1px solid rgba(255,255,255,.16)",
								}}
							>
								<img
									src={post.img}
									alt=""
									aria-hidden="true"
									style={{ width: "68px", height: "68px", objectFit: "cover" }}
									loading="lazy"
								/>
								<span style={{ color: "rgba(255,255,255,.82)", fontSize: "14px" }}>
									{post.title}
									<small
										className="d-block"
										style={{
											color: "rgba(255,255,255,.45)",
											fontSize: "11px",
											letterSpacing: ".12em",
											textTransform: "uppercase",
										}}
									>
										{post.date}
									</small>
								</span>
							</Link>
						))}

						<Link to="/contact" className="btn-solid">
							Ask the dojo <i className="ph ph-arrow-right"></i>
						</Link>
					</motion.aside>
				</div>
			</div>
		</section>
	);
};

export default memo(BlogDetails);
