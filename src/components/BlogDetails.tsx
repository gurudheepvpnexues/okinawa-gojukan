import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const popularPosts = [
	{
		img: "assets/img/blog/2.jpg",
		title: "Why We Practise Kata Before Kumite",
		date: "11 August, 2026",
	},
	{
		img: "assets/img/blog/5.jpg",
		title: "Belt Gradings: How We Prepare Our Students",
		date: "19 July, 2026",
	},
];

const categories = [
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
								<img
									src="assets/img/blog/blog-details.jpg"
									alt="Karate students training conditioning drills in the dojo"
								/>
								<figcaption>Strength work before every technique session</figcaption>
							</figure>

							<div className="article__meta">
								<span>18 August, 2026</span>
								<span>8 min read</span>
								<span className="d-flex align-items-center gap-2">
									<img
										src="assets/img/blog/avator/6.jpg"
										alt=""
										aria-hidden="true"
									/>
									Dojo Admin
								</span>
								<span>Martial Arts Philosophy</span>
							</div>

							<h3>Martial Arts: A Journey of Discipline and Self-Discovery</h3>
							<p>
								Karate teaches far more than kicks and punches. A strong body
								is only the first part of it — the second is a mind that can
								hold a single point of attention through a long, unglamorous
								afternoon. At our dojo every class opens with a bow, a warm-up
								and simple strength work — squats, lunges, push-ups and balance
								drills — that prepares the body for safe, effective training and
								for the hour that follows it.
							</p>
							<p>
								Progress matters more than intensity. Beginners should start
								with two or three short sessions each week, gradually adding
								repetitions as fitness improves. Planks and hip bridges build
								the core power needed for crisp techniques, while stretching
								after every session keeps muscles long and flexible. Good
								nutrition, hydration and proper sleep complete the picture and
								help young athletes recover faster.
							</p>

							<blockquote>
								A black belt is simply a white belt who never stopped showing
								up — steady, patient practice is the real secret to strength.
							</blockquote>

							<p>
								Track your small wins: hold your stance a little longer,
								complete one more set, keep your guard up through the final
								round. Over weeks these efforts add up to visible progress in
								class, on the mat and in everyday life. Train consistently, train
								safely, and let strength grow one session at a time.
							</p>
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
								to="/blog-details"
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
