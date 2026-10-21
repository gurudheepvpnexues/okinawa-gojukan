import { memo } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Band, Closing, Ledger, Masthead, SecHead } from "../sections/Primitives";
import { BeltLadder, Chapters, Plans, Timetable } from "../sections/Blocks";
import { programEnrol } from "../sections/data";

const ProgramsPage = () => {
	return (
		<>
			<Header />
			<main id="main">

				<Masthead
					index="01"
					kicker="Programmes"
					title="Four tracks, one syllabus"
					lede="Wherever you start, the sequence is the same: kihon, then kata, then kumite, then the grading hall. The tracks below differ only in pace and focus."
					background="assets/img/banner/programs.jpg"
					crumbs={[{ label: "Programs" }]}
				/>

				{/* 02 — Chapters */}
				<section className="sec sec--grid">
					<div className="container">
						<SecHead
							index="02"
							kicker="The tracks"
							title="Choose where you join the line"
							lede="Most beginners start in the foundation track and move up at the next grading. Nobody is asked to skip a stage."
							action={
								<Link to="/program-details" className="arrow-link">
									Syllabus detail <i className="ph ph-arrow-right"></i>
								</Link>
							}
						/>
						<Chapters />
					</div>
				</section>

				{/* 03 — Belt ladder */}
				<section className="sec sec--paper2">
					<div className="container">
						<SecHead
							index="03"
							kicker="The ladder"
							title="Nine belts, and nobody gets one for free"
							lede="Belt gradings are held every quarter. The times below are the honest average for a student who trains two or three times a week."
						/>
						<BeltLadder />
					</div>
				</section>

				{/* 04 — Timetable */}
				<section className="sec">
					<div className="container">
						<SecHead
							index="04"
							kicker="The week"
							title="Nineteen sessions across seven days"
							lede="Morning, evening and weekend options. Little Warriors and the competition squad run on their own hours, listed here."
						/>
						<Timetable />
					</div>
				</section>

				{/* 05 — Band */}
				<Band
					index="05"
					image="assets/img/bg/team.jpg"
					kicker="The grading hall"
					title="Examined, not assessed"
					text="A belt examination is not a pass mark. Four examiners watch every student for an hour, write down what they saw, and then argue about it in the next room. Nobody is graded on a good morning."
					stats={[
						{ value: "4", label: "Examiners per grading" },
						{ value: "60", label: "Minutes per student" },
						{ value: "4", label: "Grading days a year" },
					]}
					action={{ label: "Ask about grading", to: "/support" }}
				/>

				{/* 06 — Membership */}
				<section className="sec sec--paper2">
					<div className="container">
						<SecHead
							index="06"
							kicker="Membership"
							title="Three terms, no long contracts"
							lede="Monthly membership, a free trial before you pay, and a kit included when you join."
						/>
						<Plans />
					</div>
				</section>

				{/* 07 — Enrolment */}
				<section className="sec">
					<div className="container">
						<SecHead
							index="07"
							kicker="Joining"
							title="Three steps from here to the mat"
							lede="It takes less than a week, and none of it costs you anything until you decide it should."
						/>
						<Ledger items={programEnrol} />
					</div>
				</section>

				<Closing
					kicker="First step"
					title="Come for one session and decide afterwards."
					text="Wear something you can move in and bring water. We will find you a class that fits the age and the level."
					primary={{ label: "Book a free trial", to: "/contact" }}
					secondary={{ label: "Ask a question", to: "/support" }}
				/>

			</main>
			<Footer />
		</>
	);
};

export default memo(ProgramsPage);
