import { memo } from "react";
import Header from "../layouts/Header";
import ContentPage from "../components/ContentPage";
import Footer from "../layouts/Footer";
import { Closing, Masthead } from "../sections/Primitives";

const Terms = () => {
	return (
		<>
			<Header />
			<main id="main">
				<Masthead
					index="01"
					kicker="Legal"
					title="Terms & Conditions"
					lede="The simple rules that keep our dojo safe, focused and worth coming back to. Every student and every guardian agrees to them."
					plain
					crumbs={[{ label: "Terms & Conditions" }]}
				/>
				<ContentPage
					eyebrow="Legal"
					title="Terms & Conditions"
					subtitle="Clear expectations for students, guardians and visitors."
					intro="These terms apply to everyone training with or visiting Okinawa Gojukan Karate-Do Training School at our Yelahanka dojo."
					sections={[
						{
							heading: "Training membership",
							body: [
								"Membership begins once your enrolment and the applicable monthly fee are confirmed. Fees are due on the first week of each training month, and the plan you choose can be changed by written request.",
							],
							list: [
								"A free trial class is offered to every new student",
								"Belt examinations are scheduled by the instructor",
								"Monthly plans can be upgraded at any time",
							],
						},
						{
							heading: "Class attendance",
							body: [
								"Please arrive ten minutes before class in full training gear. Consistent attendance matters more than long sessions, and repeated absences may affect belt grading readiness.",
							],
							list: [
								"Inform us in advance if you need to miss a session",
								"Sessions missed are not carried forward",
								"Training gear and uniform must be worn during class",
							],
						},
						{
							heading: "Health and safety",
							body: [
								"Tell your instructor about any injury, medical condition or pregnancy before training. Students train at their own level, and instructors may adjust or stop an exercise at any time.",
							],
							list: [
								"Parental consent for students under 18",
								"Medical clearance for competitive squad training",
								"No training while injured or unwell",
							],
						},
						{
							heading: "Uniform and equipment",
							body: [
								"A white karate gi is required for all classes. Protective gear for kumite, sparring gloves and mouth guards is issued once students enter the competitive squad.",
							],
						},
						{
							heading: "Conduct at the dojo",
							body: [
								"Respect for instructors, training partners and the dojo is expected at all times. Repeated misconduct may lead to suspension of training privileges.",
							],
							list: [
								"Bow to instructors and training partners",
								"No foul language or abusive behaviour",
								"Silence and focus during kata practice",
							],
						},
						{
							heading: "Cancellations and refunds",
							body: [
								"Membership can be cancelled with one month of written notice. Fees already paid cover training already delivered, so they are non-refundable except in medical or dojo closure cases.",
							],
						},
					]}
				/>
				<Closing
					kicker="Agreed and understood"
					title="The only rule that matters is showing up."
					text="Everything else in these terms exists so that the mat stays safe and the training stays worth the trip."
					primary={{ label: "Book a free trial", to: "/contact" }}
					secondary={{ label: "Support", to: "/support" }}
				/>
			</main>
			<Footer />
		</>
	);
};

export default memo(Terms);
