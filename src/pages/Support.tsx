import { memo } from "react";
import Header from "../layouts/Header";
import ContentPage from "../components/ContentPage";
import Footer from "../layouts/Footer";
import { Closing, Masthead } from "../sections/Primitives";
import { dojo } from "../sections/data";

const Support = () => {
	return (
		<>
			<Header />
			<main id="main">
				<Masthead
					index="01"
					kicker="Help centre"
					title="How can we help?"
					lede="Quick answers about joining, training, fees and grading. If your question is not here, call or write and we will answer the same working day."
					plain
					crumbs={[{ label: "Support" }]}
				/>
				<ContentPage
					eyebrow="Help Centre"
					title="How can we help?"
					subtitle="Quick answers about joining, training and fees."
					intro="If your question is not answered here, call or write to the dojo and we will get back to you the same working day."
					sections={[
						{
							heading: "Joining the dojo",
							body: [
								"You do not need any previous experience. Every student starts with kihon, the basic techniques, and progresses at a pace set by the instructor.",
							],
							list: [
								"Attend one free trial class before you decide",
								"Bring sportswear and indoor shoes for the trial",
								"A white gi is purchased after you join",
							],
						},
						{
							heading: "Class schedule",
							body: [
								"Classes run through the week at our Yelahanka dojo, with separate timings for kids and adults, plus a weekend open training session. The full weekly timetable is published on the programmes page.",
							],
							list: [
								"Weekday evening and weekend morning batches",
								"Little Warriors classes for younger children",
								"Competition squad sessions on request",
							],
						},
						{
							heading: "Belt grading",
							body: [
								"Grading is held every quarter. When you are ready, the instructor will tell you the syllabus to practise and the grading date in advance.",
							],
							list: [
								"Grading syllabus shared at least four weeks prior",
								"Parents are invited to watch the grading",
								"Certificates and belts awarded on grading day",
							],
						},
						{
							heading: "Fees and payment",
							body: [
								"Monthly plans start from the first class of the month. Payment can be made at the dojo counter or by bank transfer, and a receipt is issued on request.",
							],
							list: [
								"Basic, Standard and Premium monthly plans",
								"Sibling and annual discounts on request",
								"No hidden charges for belt grading or sparring gear",
							],
						},
						{
							heading: "Facility and safety",
							body: [
								"The dojo is fully equipped with tatami training mats, a wooden technique area and sanitised changing facilities. Visitors are asked to sign in at the desk.",
							],
							list: [
								"Training mats sanitised after every session",
								"Drinking water available on site",
								"First aid support available during classes",
							],
						},
						{
							heading: "Still need help?",
							body: [
								`Call us on ${dojo.phone} or ${dojo.phone2}, or write to ${dojo.email2} with your question and we will help you plan your first class.`,
							],
						},
					]}
				/>
				<Closing
					kicker="Still unanswered"
					title="Ask a person, not a form."
					text="Ring the dojo between 6 AM and 8 PM. Somebody who teaches here will pick up."
					primary={{ label: "Contact the dojo", to: "/contact" }}
					secondary={{ label: "Read the story", to: "/about" }}
				/>
			</main>
			<Footer />
		</>
	);
};

export default memo(Support);
