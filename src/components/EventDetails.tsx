import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { dojo, homeInstructors } from "../sections/data";

const EventDetails = () => {
	return (
		<section className="sec">
			<div className="container">
				<div className="detail">
					<motion.article
						className="article"
						initial={{ opacity: 0, y: 34 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
					>
						<figure className="article__figure">
							<img
								src="assets/img/events/event-details.jpg"
								alt="Students at a karate championship in the dojo hall"
							/>
							<figcaption>
								Competition day at the Yelahanka dojo hall
							</figcaption>
						</figure>

						<h3>About the event</h3>
						<p>
							Our events bring students together for grading examinations,
							demonstrations and open championships — days filled with effort,
							sportsmanship and celebration. Families, coaches and young athletes
							from across Bangalore take part, competing in kata and kumite
							categories suited to every age and belt level.
						</p>
						<p>
							Spectators are welcome to cheer, capture the moments and celebrate
							every achievement on the mat. Registration closes two weeks before
							each event.
						</p>

						<h3>During this event we cover</h3>
						<ul>
							<li>Event schedule, registration and category details for players</li>
							<li>Rules, judging criteria and safety requirements</li>
							<li>What the competition day looks like for students and parents</li>
							<li>
								How our students prepare for tournaments and belt grading tests
							</li>
						</ul>

						<h3>Who is judging</h3>
						<p>
							Each event is officiated by a visiting panel from outside the
							school, so that the standard applied on the day is the same
							standard students are taught to expect. A chief instructor from
							the dojo oversees the floor.
						</p>
					</motion.article>

					<motion.aside
						className="detail__aside"
						initial={{ opacity: 0, y: 34 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.15 }}
					>
						<h3>Event information</h3>
						<div className="info-row">
							<span className="info-row__ico">
								<i className="fa-solid fa-calendar"></i>
							</span>
							<span>
								<b>Start date</b>
								<span>22 August, 2026</span>
							</span>
						</div>
						<div className="info-row">
							<span className="info-row__ico">
								<i className="fa-regular fa-clock"></i>
							</span>
							<span>
								<b>Start time</b>
								<span>10:00 AM</span>
							</span>
						</div>
						<div className="info-row">
							<span className="info-row__ico">
								<i className="fa-regular fa-calendar"></i>
							</span>
							<span>
								<b>End time</b>
								<span>6:00 PM</span>
							</span>
						</div>
						<div className="info-row">
							<span className="info-row__ico">
								<i className="fa-solid fa-location-dot"></i>
							</span>
							<span>
								<b>Location</b>
								<span>Yelahanka, Bangalore</span>
							</span>
						</div>

						<Link to="/contact" className="btn-solid">
							Register now <i className="ph ph-arrow-right"></i>
						</Link>
					</motion.aside>
				</div>

				{/* Instructors */}
				<div className="mt-5">
					<h3 className="sec-head__title mb-4">Who you will meet</h3>
					<div className="instructors instructors--pair">
						{homeInstructors.slice(0, 2).map((member, index) => (
							<motion.article
								className="instructor"
								key={member.name}
								initial={{ opacity: 0, y: 26 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
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
				</div>

				{/* Contact strip */}
				<div className="mt-5">
					<Link to="/contact" className="arrow-link">
						Ask the dojo about this event on {dojo.phone}
						<i className="ph ph-arrow-right"></i>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default memo(EventDetails);
