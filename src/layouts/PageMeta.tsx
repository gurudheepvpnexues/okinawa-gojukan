import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteName = "Okinawa Gojukan Karate-Do Training School";

const meta: Record<string, { title: string; description: string }> = {
	"/": {
		title: `${siteName} | Karate-Do in Yelahanka, Bangalore`,
		description:
			"Okinawan karate-do in Yelahanka, Bangalore, taught to the standards of the Indian defence services. Graded syllabus, competition squad, free trial class.",
	},
	"/about": {
		title: `About the dojo | ${siteName}`,
		description:
			"Founded in 2003 by Indian defence services officers, the dojo has trained three generations of students in Yelahanka, Bangalore.",
	},
	"/programs": {
		title: `Programmes and syllabus | ${siteName}`,
		description:
			"Nine belt levels, three tracks and a full weekly timetable. Little Warriors, graded karate-do, competition squad, kobudo and weapons training.",
	},
	"/events": {
		title: `Events and competitions | ${siteName}`,
		description:
			"Kata and kumite events, inter-club championships, belt gradings and self-defence workshops across the season in Bangalore.",
	},
	"/blog": {
		title: `Journal | ${siteName}`,
		description:
			"Training notes, technique breakdowns and dojo news from Okinawa Gojukan Karate-Do Training School.",
	},
	"/gallery": {
		title: `Gallery | ${siteName}`,
		description:
			"Photographs from training sessions, belt gradings, inter-club championships and the dojo in Yelahanka.",
	},
	"/contact": {
		title: `Contact and location | ${siteName}`,
		description:
			"16/290, 24th Cross, Maruthi Nagar, Yelahanka, Bangalore - 64. Call 8971895922 or 8660600981 to book a free trial class.",
	},
	"/program-details": {
		title: `Graded karate-do programme | ${siteName}`,
		description:
			"The full syllabus, pathway, class schedule and fee structure of the graded karate-do programme at the dojo.",
	},
	"/blog-details": {
		title: `Technique notes | ${siteName}`,
		description:
			"A close look at one training technique, written by the instructors of Okinawa Gojukan Karate-Do Training School.",
	},
	"/event-details": {
		title: `Event details | ${siteName}`,
		description:
			"Dates, venue, divisions, judges and entry rules for the season's karate events hosted by the dojo.",
	},
	"/privacy-policy": {
		title: `Privacy policy | ${siteName}`,
		description:
			"How the dojo collects, uses and protects the information you share with Okinawa Gojukan Karate-Do Training School.",
	},
	"/terms": {
		title: `Terms and conditions | ${siteName}`,
		description:
			"The terms that apply to training at Okinawa Gojukan Karate-Do Training School, Yelahanka, Bangalore.",
	},
	"/support": {
		title: `Support and fees | ${siteName}`,
		description:
			"Membership plans, fee structure, kit requirements, class timings and answers to the questions parents ask most.",
	},
};

const PageMeta = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		const entry = meta[pathname];
		document.title = entry ? entry.title : "Page not found | " + siteName;

		const tag = document.querySelector('meta[name="description"]');
		if (tag && entry) tag.setAttribute("content", entry.description);
	}, [pathname]);

	return null;
};

export default PageMeta;
