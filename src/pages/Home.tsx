import { memo } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Hero3D from "../sections/Hero3D";
import { Band, Closing, Ledger, SecHead, Split } from "../sections/Primitives";
import {
	Instructors,
	Journal,
	Numbers,
	Pillars,
	Timetable,
	Values,
	Voices,
} from "../sections/Blocks";
import {
	eventFeature,
	homeAudience,
	homeDisciplines,
	homeMethod,
	homeVoices,
} from "../sections/data";

const Home = () => {
	return (
		<>
			<Header />
			<main id="main">
				<Hero3D />

				{/* 01 — The dojo */}
				<section className="sec sec--grid">
					<div className="container">
						<SecHead
							index="01"
							kicker="The dojo"
							title={
								<>
									Okinawan karate-do,
									<br />
									taught the hard way
								</>
							}
							lede="We are a small school with a long memory. Every class follows the same discipline the founders learned in the services — start early, work honestly, finish the repetition."
							action={
								<Link to="/about" className="arrow-link">
									Our story <i className="ph ph-arrow-right"></i>
								</Link>
							}
						/>
						<Split
							image="assets/img/programs/1-dojo.jpg"
							alt="Students training on the mat at the Okinawa Gojukan dojo in Yelahanka"
							tag="Yelahanka · since 2003"
							title="A school built on the mat, not the marketing"
							lead="Twenty-three years of teaching the same way: correct technique, corrected early, corrected often."
							body="Okinawa Gojukan Karate-Do was started with nine students and a borrowed hall. The syllabus has grown, the competition record has grown with it, but the rule has not moved — if the technique is not right, the belt is not earned, however long it takes."
							points={[
								"Karate-Do, Kobudo, Jujitsu and weapons in one continuous syllabus",
								"Quarterly belt examinations with an independent visiting examiner",
								"Classes for children from five years old through to active adults",
							]}
							cta={{ label: "Read the full story", to: "/about" }}
						/>
					</div>
				</section>

				{/* 02 — Pillars */}
				<section className="sec sec--paper2">
					<div className="container">
						<SecHead
							index="02"
							kicker="What we build"
							title={
								<>
									Four things a dojo
									<br />
									should actually teach
								</>
							}
							lede="Anyone can throw a punch. These are the four qualities we are really in the business of building, one class at a time."
						/>
						<Pillars />
					</div>
				</section>

				{/* 03 — Method */}
				<section className="sec">
					<div className="container">
						<SecHead
							index="03"
							kicker="The method"
							title="One path, four stages, measured in years"
							lede="Students move through a fixed sequence. Nothing is skipped, and nothing is rushed to a grading date."
						/>
						<Ledger items={homeMethod} />
					</div>
				</section>

				{/* 04 — Disciplines */}
				<section className="sec sec--paper2">
					<div className="container">
						<SecHead
							index="04"
							kicker="Disciplines"
							title="What you can train here"
							lede="Six disciplines running through the week. Every one of them ends with the same bow."
						/>
						<Ledger items={homeDisciplines} />
					</div>
				</section>

				{/* 05 — Week */}
				<section className="sec">
					<div className="container">
						<SecHead
							index="05"
							kicker="The week"
							title="Nineteen sessions, seven days"
							lede="Morning, evening and weekend classes. The timetable below is the one we actually run."
							action={
								<Link to="/contact" className="arrow-link">
									Book a place <i className="ph ph-arrow-right"></i>
								</Link>
							}
						/>
						<Timetable />
					</div>
				</section>

				{/* 06 — Who trains here */}
				<section className="sec sec--paper2">
					<div className="container">
						<SecHead
							index="06"
							kicker="Who trains here"
							title="Not everyone here is a fighter"
							lede="Most people who walk in for the first time are not competition fighters, and nobody is asked to be. Membership starts at ₹1,200 a month and the first session is free."
							action={
								<Link to="/programs" className="arrow-link">
									Membership terms <i className="ph ph-arrow-right"></i>
								</Link>
							}
						/>
						<Values items={homeAudience} />
					</div>
				</section>

				{/* 07 — Instructors */}
				<section className="sec">
					<div className="container">
						<SecHead
							index="07"
							kicker="The line"
							title="Who teaches the class"
							lede="Four instructors, named on the card. Every one of them trained in the Indian defence services, competed at national level, and still teaches the beginner's kata."
						/>
						<Instructors />
					</div>
				</section>

				{/* 08 — Voices */}
				<section className="sec sec--paper2">
					<div className="container">
						<SecHead
							index="08"
							kicker="Voices"
							title="Said by the people on the mat"
							lede="In their own words, unedited — students and parents on the mat."
						/>
						<Voices items={homeVoices} />
					</div>
				</section>

				{/* 09 — Band */}
				<Band
					index="09"
					image="assets/img/bg/voices.jpg"
					kicker="The room"
					title="Two halls, one mat, no mirrors"
					text="Karate is not performed at us and it is not filmed for the feed. The mat is measured in effort, and the only score that matters at the end of the session is the one you set for yourself."
					stats={[
						{ value: "2", label: "Dojo halls" },
						{ value: "7", label: "Days a week" },
						{ value: "0", label: "Excuses accepted" },
					]}
					action={{ label: "Visit the dojo", to: "/contact" }}
				/>

				{/* 10 — Numbers */}
				<Numbers />

				{/* 10 — Journal */}
				<section className="sec sec--paper2">
					<div className="container">
						<SecHead
							index="10"
							kicker="Journal"
							title="Notes from the dojo"
							lede="Technique write-ups, grading advice and the occasional opinion about shoes."
							action={
								<Link to="/blog" className="arrow-link">
									All posts <i className="ph ph-arrow-right"></i>
								</Link>
							}
						/>
						<Journal />
					</div>
				</section>

				{/* 11 — Next up */}
				<section className="sec">
					<div className="container">
						<SecHead
							index="11"
							kicker="Next up"
							title={eventFeature.title}
							lede="The season opens with our own championship. Registration is open to dojo students and to registered clubs from across the country."
							action={
								<Link to="/events" className="arrow-link">
									Full calendar <i className="ph ph-arrow-right"></i>
								</Link>
							}
						/>
						<Split
							image="assets/img/events/1.jpg"
							alt={eventFeature.title}
							tag={eventFeature.date}
							title={eventFeature.venue}
							lead={`${eventFeature.tag} · main event of the season`}
							body="Dojo students are entered by their instructor. Everyone else can register at the contact page, and the first hundred entries receive a commemorative training belt."
							points={[
								"Open to all dojo students and registered clubs",
								"Kata, kumite and team kata divisions",
								"Medals, certificates and a belt for early entries",
							]}
							cta={{ label: "Event details", to: "/event-details" }}
						/>
					</div>
				</section>

				<Closing
					kicker="Start here"
					title="Your first class is free, and it is all you need to try."
					text="Call the dojo, tell us the age of the student, and we will keep a mat ready. No kit required for the trial session."
					primary={{ label: "Book a free trial", to: "/contact" }}
					secondary={{ label: "See the syllabus", to: "/programs" }}
				/>

			</main>
			<Footer />
		</>
	);
};

export default memo(Home);
