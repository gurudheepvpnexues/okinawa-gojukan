import { memo } from "react";
import Header from "../layouts/Header";
import ContentPage from "../components/ContentPage";
import Footer from "../layouts/Footer";
import { Closing, Masthead } from "../sections/Primitives";
import { dojo } from "../sections/data";

const PrivacyPolicy = () => {
	return (
		<>
			<Header />
			<main id="main">
				<Masthead
					index="01"
					kicker="Legal"
					title="Privacy Policy"
					lede="What we collect, why we collect it, and the choices you have. Written plainly, because a policy nobody can read protects nobody."
					plain
					crumbs={[{ label: "Privacy Policy" }]}
				/>
				<ContentPage
					eyebrow="Legal"
					title="Privacy Policy"
					subtitle="We keep your information safe, private and only use it to serve you."
					intro="Okinawa Gojukan Karate-Do Training School respects your privacy. This policy explains what information we collect, why we collect it and the choices you have."
					sections={[
						{
							heading: "Information we collect",
							body: [
								"We only collect information you actively give us, such as your name, phone number, email address and the details you include in an enquiry or registration form.",
							],
							list: [
								"Enquiry and registration form details",
								"Your message when you contact the dojo",
								"Newsletter email address, if you opt in",
							],
						},
						{
							heading: "How we use your information",
							body: [
								"Your details are used to reply to your enquiries, schedule trial classes, share class schedules and belt grading updates, and to send the newsletter you requested.",
							],
							list: [
								"Responding to enquiries and bookings",
								"Class, grading and event notifications",
								"Improving our training programmes",
							],
						},
						{
							heading: "Cookies and tracking",
							body: [
								"Our website uses a small number of cookies to remember basic site preferences and to understand which pages are most useful. We do not use advertising trackers.",
							],
						},
						{
							heading: "Sharing your information",
							body: [
								"We never sell, rent or trade your personal information. Details are shared only with coaches who need them to run your training, and with authorities where the law requires it.",
							],
						},
						{
							heading: "Your rights",
							body: [
								`You can ask us at any time to show, correct or delete the information we hold about you. Write to us at ${dojo.email2} and we will respond as quickly as possible.`,
							],
						},
						{
							heading: "Data security",
							body: [
								"Information is stored securely and access is limited to team members who need it for your training. We regularly review our processes to keep your data safe.",
							],
						},
					]}
				/>
				<Closing
					kicker="Questions"
					title="Ask us anything about your data."
					text="Write to the dojo and we will explain exactly what we hold and why, in plain language."
					primary={{ label: "Contact the dojo", to: "/contact" }}
					secondary={{ label: "Support", to: "/support" }}
				/>
			</main>
			<Footer />
		</>
	);
};

export default memo(PrivacyPolicy);
