import { memo } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ProgramDetails from "../components/ProgramDetails";
import { Closing, Masthead } from "../sections/Primitives";

const ProgramDetailsPage = () => {
	return (
		<>
			<Header />
			<main id="main">
				<Masthead
					index="01"
					kicker="Programme detail"
					title="How a student actually progresses"
					lede="The syllabus behind every belt: what is taught, in what order, and what you are expected to be able to do by the time you are called to the grading floor."
					background="assets/img/banner/program-details.jpg"
					crumbs={[{ label: "Programs" }, { label: "Detail" }]}
				/>
				<ProgramDetails />
				<Closing
					kicker="Start the pathway"
					title="The first stage is free to try."
					text="Attend one full session before you pay anything. We will place you at the right stage of the pathway on the spot."
					primary={{ label: "Book a free trial", to: "/contact" }}
					secondary={{ label: "See the syllabus", to: "/programs" }}
				/>
			</main>
			<Footer />
		</>
	);
};

export default memo(ProgramDetailsPage);
