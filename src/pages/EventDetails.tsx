import { memo } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import EventDetails from "../components/EventDetails";
import { Closing, Masthead } from "../sections/Primitives";

const EventDetailsPage = () => {
	return (
		<>
			<Header />
			<main id="main">
				<Masthead
					index="01"
					kicker="Event detail"
					title="Spirit of the Dojo — Karate Championship"
					lede="Our flagship annual event: kata and kumite divisions for every belt, judged by visiting examiners from across the country."
					background="assets/img/banner/event-details.jpg"
					crumbs={[{ label: "Events" }, { label: "Detail" }]}
				/>
				<EventDetails />
				<Closing
					kicker="Register"
					title="Entries close two weeks before the day."
					text="Ask the dojo for the entry form, or simply write with the student's name and belt level and we will send it over."
					primary={{ label: "Register an interest", to: "/contact" }}
					secondary={{ label: "Full calendar", to: "/events" }}
				/>
			</main>
			<Footer />
		</>
	);
};

export default memo(EventDetailsPage);
