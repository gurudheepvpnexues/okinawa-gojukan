import { memo } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Closing, Masthead, SecHead, Split } from "../sections/Primitives";
import { Chambers, EventLedger } from "../sections/Blocks";
import { eventFeature } from "../sections/data";

const EventsPage = () => {
	return (
		<>
			<Header />
			<main id="main">

				<Masthead
					index="01"
					kicker="Calendar"
					title="The season, on the mat"
					lede="Championships, open cups and grading days. Our own championship opens the season, followed by the fixtures the squad travels to."
					background="assets/img/banner/events.jpg"
					crumbs={[{ label: "Events" }]}
				/>

				{/* 02 — Feature */}
				<section className="sec sec--grid">
					<div className="container">
						<SecHead
							index="02"
							kicker="Season opener"
							title={eventFeature.title}
							lede="Kata and kumite divisions for every belt, with a visiting panel from across the country on the judging chair."
							action={
								<Link to="/event-details" className="arrow-link">
									Event details <i className="ph ph-arrow-right"></i>
								</Link>
							}
						/>
						<Split
							image={eventFeature.image}
							alt={eventFeature.title}
							tag={eventFeature.date}
							title={eventFeature.venue}
							lead={eventFeature.tag}
							body="Registration closes two weeks before the event, and the first hundred entries receive a commemorative training belt. Arrive by 9:00 AM for a 10:00 AM start, in your gi and belt if you hold one."
							points={[
								"Kata, kumite and team kata divisions",
								"Open to students of every belt level",
								"Medals, certificates and a belt for early entries",
							]}
							cta={{ label: "Register for this event", to: "/contact" }}
						/>
					</div>
				</section>

				{/* 03 — Calendar */}
				<section className="sec sec--paper2">
					<div className="container">
						<SecHead
							index="03"
							kicker="Full calendar"
							title="Eight dates, August to December"
							lede="Dates are fixed a season in advance. Entries for our own championship close two weeks before the event; for the external tournaments, entries close with the organisers."
						/>
						<EventLedger />
					</div>
				</section>

				{/* 04 — Divisions */}
				<section className="sec">
					<div className="container">
						<SecHead
							index="04"
							kicker="Divisions"
							title="What happens on the day"
							lede="Five divisions run at every championship, judged on the same rules our students are taught."
						/>
						<Chambers />
					</div>
				</section>

				<Closing
					kicker="Compete with us"
					title="The squad travels to eight events a year."
					text="Squad selection happens at the start of each season. If you think you are ready, ask your instructor."
					primary={{ label: "Register an interest", to: "/contact" }}
					secondary={{ label: "See the syllabus", to: "/programs" }}
				/>

			</main>
			<Footer />
		</>
	);
};

export default memo(EventsPage);
