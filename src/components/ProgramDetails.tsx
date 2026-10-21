import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Ledger } from "../sections/Primitives";
import { dojo } from "../sections/data";

const pathway = [
	{
		no: "01",
		title: "Kihon — Basics",
		text: "Stances, blocks and strikes drilled until the body remembers them without thinking.",
		meta: "Foundation",
	},
	{
		no: "02",
		title: "Kata — Forms",
		text: "Set sequences practised with focus, correct breathing and power that comes from technique, not effort.",
		meta: "Technique",
	},
	{
		no: "03",
		title: "Kumite — Sparring",
		text: "Controlled partner and free practice that builds timing, distance sense and courage.",
		meta: "Application",
	},
	{
		no: "04",
		title: "Belt Grading",
		text: "Clear, structured examinations that mark your progress and open the next stage of training.",
		meta: "Quarterly",
	},
];

const syllabus = [
	{
		no: "01",
		title: "Karate-Do",
		text: "Kihon, kata and kumite taught across nine belt levels, examined every quarter.",
		meta: "All levels",
	},
	{
		no: "02",
		title: "Kobudo",
		text: "Bo staff, sai and tonfa work, graded as a discipline of its own.",
		meta: "Weapons",
	},
	{
		no: "03",
		title: "Jujitsu",
		text: "Grappling, breakfalls and ground escapes built around safe partner practice.",
		meta: "Grappling",
	},
	{
		no: "04",
		title: "Little Warriors",
		text: "A class for five to eleven year olds built on balance, courtesy and simple kata.",
		meta: "Ages 5–11",
	},
];

const ProgramDetails = () => {
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
								src="assets/img/programs/3-bushido.jpg"
								alt="A karate student performing kata during a class at the dojo"
							/>
							<figcaption>
								Every belt starts with the same four stages
							</figcaption>
						</figure>

						<h3>About the programme</h3>
						<p>
							Okinawa Gojukan Karate-Do Training School offers structured
							martial arts programmes in Karate, Jujitsu and Kobudo for
							children, teenagers and adults. Each programme follows a
							progressive syllabus — kihon, kata and kumite — so that
							students advance step by step with clear goals at every belt
							level.
						</p>
						<p>
							Classes are led by instructors with Indian Defence service
							backgrounds (Army, Navy, Airforce and Para and NSG Commandos),
							who combine traditional Okinawan karate-do values with
							disciplined, safety-first coaching. Whether the goal is fitness,
							self-defence, confidence or competition, there is a place on the
							mats in Yelahanka.
						</p>

						<h3>During this programme we cover</h3>
						<ul>
							<li>How to begin traditional karate-do the right way</li>
							<li>Class structure, belt progression and grading requirements</li>
							<li>What training at our Yelahanka dojo is really like</li>
							<li>
								How the programme prepares students for competitions and belt
								examinations
							</li>
						</ul>

						<h3>Your training pathway</h3>
					</motion.article>

					<motion.aside
						className="detail__aside"
						initial={{ opacity: 0, y: 34 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.15 }}
					>
						<h3>Programme facts</h3>
						<div className="info-row">
							<span className="info-row__ico">
								<i className="fa-solid fa-calendar-days"></i>
							</span>
							<span>
								<b>Grading cycle</b>
								<span>Every quarter</span>
							</span>
						</div>
						<div className="info-row">
							<span className="info-row__ico">
								<i className="fa-solid fa-layer-group"></i>
							</span>
							<span>
								<b>Belt levels</b>
								<span>Nine, white to black</span>
							</span>
						</div>
						<div className="info-row">
							<span className="info-row__ico">
								<i className="fa-solid fa-location-dot"></i>
							</span>
							<span>
								<b>Where</b>
								<span>{dojo.address}</span>
							</span>
						</div>
						<div className="info-row">
							<span className="info-row__ico">
								<i className="fa-solid fa-phone"></i>
							</span>
							<span>
								<b>Call the dojo</b>
								<a href={`tel:${dojo.phone}`}>{dojo.phone}</a>
							</span>
						</div>

						<Link to="/contact" className="btn-solid">
							Apply now <i className="ph ph-arrow-right"></i>
						</Link>
					</motion.aside>
				</div>

				{/* Pathway ledger */}
				<div className="mt-5">
					<h3 className="sec-head__title mb-4">The four stages</h3>
					<Ledger items={pathway} />
				</div>

				{/* Programme ledger */}
				<div className="mt-5">
					<h3 className="sec-head__title mb-4">Programmes we run</h3>
					<Ledger items={syllabus} />
				</div>
			</div>
		</section>
	);
};

export default memo(ProgramDetails);
