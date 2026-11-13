/**
 * Central content store for the "Dojo Editorial" redesign.
 * Every page draws a different slice of this data so that no two pages
 * repeat the same copy or the same photography.
 */

export const dojo = {
	name: "Okinawa Gojukan Karate-Do",
	address: "16/290, 24th Cross, Maruthi Nagar, Yelahanka, Bangalore - 64",
	phone: "8971895922",
	phone2: "8660600981",
	whatsapp: "https://wa.me/918971895922",
	email: "info@example.com",
	maps: "https://maps.google.com/maps?q=24th%20Cross%2C%20Maruthi%20Nagar%2C%20Yelahanka%2C%20Bangalore-64&t=&z=15&ie=UTF8&iwloc=&output=embed",
};

/* ------------------------------------------------------------------ HOME */

export const homePillars = [
	{
		no: "01",
		icon: "assets/img/features/icon2.svg",
		title: "Focus",
		text: "Hours of repetition teach the mind to hold a single point of attention, on the mat and off it.",
	},
	{
		no: "02",
		icon: "assets/img/features/icon3.svg",
		title: "Resilience",
		text: "A body that is worked hard, and a temperament that knows how to start again after a hard round.",
	},
	{
		no: "03",
		icon: "assets/img/features/icon4.svg",
		title: "Respect",
		text: "Bowing before striking. The Okinawan courtesy that turns a class into a way of living.",
	},
	{
		no: "04",
		icon: "assets/img/features/icon1.svg",
		title: "Readiness",
		text: "Calm, decisive and technically sound when a real situation asks for it, not a graded one.",
	},
];

export const homeMethod = [
	{
		no: "01",
		title: "Kihon — Basic Techniques",
		text: "Stances, blocks, strikes and footwork drilled until they stop being instructions and start being reflex.",
		meta: "Weeks 1–8",
	},
	{
		no: "02",
		title: "Kata — Formalised Forms",
		text: "Okinawan kata practised as whole movements, with breath, timing and power bound into every sequence.",
		meta: "Weeks 9–24",
	},
	{
		no: "03",
		title: "Kumite — Applied Practice",
		text: "Partner work and controlled sparring that reads distance and timing under a moving opponent.",
		meta: "Weeks 25–40",
	},
	{
		no: "04",
		title: "Grading — Tested Progress",
		text: "Quarterly belt examinations that certify technique, attitude and the character a black belt needs.",
		meta: "Every quarter",
	},
];

export const homeDisciplines = [
	{
		no: "01",
		title: "Karate-Do",
		text: "Shotokan-derived kihon and kata taught the Okinawan way, with a graded syllabus and quarterly examinations.",
		meta: "All ages",
	},
	{
		no: "02",
		title: "Kobudo",
		text: "Bo staff, sai and tonfa work that builds balance, timing and the kind of calm that a weapon demands.",
		meta: "Tuesday & Friday",
	},
	{
		no: "03",
		title: "Little Warriors",
		text: "A playful, structured class for children aged 5 to 11 built on balance, courtesy and simple kata.",
		meta: "Ages 5–11",
	},
	{
		no: "04",
		title: "Self-Defence",
		text: "Situational drills for escapes, blocks and awareness, taught with the calm of a defence instructor.",
		meta: "Weekends",
	},
	{
		no: "05",
		title: "Fitness & Conditioning",
		text: "Strength, mobility and cardiovascular work written around the needs of a martial artist, not a gym.",
		meta: "Daily",
	},
	{
		no: "06",
		title: "Competition Squad",
		text: "Travelling squad for students who want graded kumite, judged kata and a national circuit.",
		meta: "By invitation",
	},
];

export const homeWeek = [
	{
		day: "Monday",
		sessions: [
			{ time: "6:00 AM", name: "Kihon & Kata", tag: "Open" },
			{ time: "4:30 PM", name: "Kids Karate", tag: "Ages 5–11" },
			{ time: "6:30 PM", name: "Kumite Squad", tag: "Graded" },
		],
	},
	{
		day: "Tuesday",
		sessions: [
			{ time: "6:00 AM", name: "Kihon & Kata", tag: "Open" },
			{ time: "5:00 PM", name: "Kobudo", tag: "Bo staff" },
			{ time: "7:00 PM", name: "Adult Karate-Do", tag: "Open" },
		],
	},
	{
		day: "Wednesday",
		sessions: [
			{ time: "6:00 AM", name: "Kihon & Kata", tag: "Open" },
			{ time: "4:30 PM", name: "Kids Karate", tag: "Ages 5–11" },
			{ time: "6:30 PM", name: "Self-Defence", tag: "Open" },
		],
	},
	{
		day: "Thursday",
		sessions: [
			{ time: "6:00 AM", name: "Kihon & Kata", tag: "Open" },
			{ time: "5:00 PM", name: "Little Warriors", tag: "Ages 5–11" },
			{ time: "7:00 PM", name: "Kumite Squad", tag: "Graded" },
		],
	},
	{
		day: "Friday",
		sessions: [
			{ time: "6:00 AM", name: "Kihon & Kata", tag: "Open" },
			{ time: "5:00 PM", name: "Kobudo", tag: "Bo staff" },
			{ time: "7:00 PM", name: "Adult Karate-Do", tag: "Open" },
		],
	},
	{
		day: "Saturday",
		sessions: [
			{ time: "7:00 AM", name: "Open Training", tag: "All" },
			{ time: "9:00 AM", name: "Competition Kumite", tag: "Graded" },
		],
	},
	{
		day: "Sunday",
		sessions: [
			{ time: "6:00 AM", name: "Kihon & Kata", tag: "Open" },
			{ time: "9:00 AM", name: "Kata Clinic", tag: "Open" },
		],
	},
];

export const homeNumbers = [
	{ value: "500+", label: "Students trained" },
	{ value: "23+", label: "Years of teaching" },
	{ value: "300+", label: "Grading passes" },
	{ value: "20+", label: "National podiums" },
];

export const homeMarquee = [
	"One strike",
	"呼吸 · breath",
	"Discipline",
	"Okinawa",
	"Second chances",
	"集中 · focus",
	"Respect",
	"Never quit",
	"Karate-do",
	"Humility",
];

export const homePhotos = [
	{ src: "assets/img/New images/image 5.jpeg", alt: "Podium finishers at the WKC World Karate Championship", w: 1600, h: 1200 },
	{ src: "assets/img/New images/image 12.jpeg", alt: "Dojo representatives with the championship officials", w: 1200, h: 1600 },
];

export const homeAchievements = [
	{ src: "assets/img/New images/image 81.jpeg", alt: "Junior champion on the top of the podium with gold and the tricolour at IMGC Uzbekistan", w: 3024, h: 4032 },
	{ src: "assets/img/New images/image 82.jpeg", alt: "Champion on podium number one with the Indian flag at the World Championship", w: 4032, h: 3024 },
];

export const homeVoices = [
	{
		img: "assets/img/testimonials/1.jpg",
		name: "Priya Sharma",
		role: "Student",
		text: "Training here changed the way I study, work and even speak to people. The instructors correct every detail, and they correct it with patience.",
	},
	{
		img: "assets/img/testimonials/2.jpg",
		name: "Ramesh Kumar",
		role: "Parent",
		text: "My daughter joined as a shy seven-year-old. Two years later she leads a class warm-up. I cannot thank the dojo enough for that change.",
	},
];

export const homeAudience = [
	{
		no: "01",
		title: "Children, five to eleven",
		text: "Their own classes, their own games and their own first kata. We keep them apart from the adults and let them lead the warm-up.",
	},
	{
		no: "02",
		title: "Adults and latecomers",
		text: "Most of our students are adults who have never trained before, or who trained once and stopped. Both are welcome from the first session.",
	},
	{
		no: "03",
		title: "The services",
		text: "Army, Navy, Air Force and Para and NSG Commando units train with us. Discipline learned in uniform is taught the same way here.",
	},
];

/* Placeholder names - replace with the real teaching staff before launch. */
export const homeInstructors = [
	{
		img: "assets/img/team/1.jpg",
		name: "Ramesh Iyer",
		title: "Chief Instructor",
		role: "Karate-Do & Kobudo",
	},
	{
		img: "assets/img/team/2.jpg",
		name: "Suresh Nair",
		title: "Head Coach",
		role: "Kumite & Competition Squad",
	},
	{
		img: "assets/img/team/3.jpg",
		name: "Anil Kumar",
		title: "Fitness Instructor",
		role: "Strength & Conditioning",
	},
	{
		img: "assets/img/team/4.jpg",
		name: "Deepa Rao",
		title: "Little Warriors Lead",
		role: "Kids Karate Program",
	},
];

export const homeJournal: {
	img: string;
	slug?: string;
	date: string;
	author: string;
	avatar: string;
	title: string;
	desc: string;
}[] = [
	{
		img: "assets/img/gallery/okinawa-red-belt.jpg",
		slug: "tenth-dan-red-belt",
		date: "09 November, 2026",
		author: "Hanshi Dr. S. C. Durai",
		avatar: "assets/img/blog/avator/5.jpg",
		title: "Red Belt 10th Dan: awarded in Okinawa",
		desc: "Our Chief Instructor returns from Okinawa with the Red Belt 10th Dan in Goju-Ryu, conferred by Grand Master Hanshi Dr. Tetsuhiro Hokama — the first Indian to receive the rank directly from the birthplace of karate.",
	},
	{
		img: "assets/img/blog/2.jpg",
		date: "11 August, 2026",
		author: "Head Coach",
		avatar: "assets/img/blog/avator/2.jpg",
		title: "Why We Practise Kata Before Kumite",
		desc: "Kata is not a performance. It is the map a fighter follows when a round turns faster than thought.",
	},
	{
		img: "assets/img/blog/5.jpg",
		date: "19 July, 2026",
		author: "Chief Instructor",
		avatar: "assets/img/blog/avator/5.jpg",
		title: "Belt Gradings: How We Prepare Our Students",
		desc: "The grading syllabus, the weeks of preparation behind it and the mindset we want every student to carry onto the mat.",
	},
];

/* ----------------------------------------------------------------- ABOUT */

export const aboutStory = {
	image: "assets/img/about/okinawa-kata-gate.jpg",
	imageSrcSet:
		"assets/img/about/okinawa-kata-gate.jpg 1440w, assets/img/about/okinawa-kata-gate-4k.jpg 2880w",
	tag: "Since 2003",
	title: "A dojo built on the Okinawan way of training",
	lead: "Okinawa Gojukan Karate-Do began with nine students, one wooden floor and a single rule: train properly, or do not train at all.",
	body: "Twenty-three years on, that rule still decides how we teach. Every class opens with a bow, every technique is broken down until it can be repeated a thousand times, and every student is graded on character as firmly as on technique.",
	points: [
		"Karate-Do, Kobudo, Jujitsu and weapons taught in one continuous syllabus",
		"Quarterly belt examinations with an independent visiting examiner",
		"Classes for children from five years old through to active adults",
		"International podiums in Kazakhstan, Uzbekistan, Serbia and India",
	],
};

export const aboutTimeline = [
	{
		year: "2003",
		title: "The first mat",
		text: "The school opens in a rented hall in Yelahanka with nine students and a single black belt instructor.",
	},
	{
		year: "2008",
		title: "First grading hall",
		text: "Forty-one students sit the inaugural belt examination. Twenty-eight pass on the day.",
	},
	{
		year: "2012",
		title: "The competition squad",
		text: "A graded kumite and kata squad is formed and travels to its first national tournament in Kochi.",
	},
	{
		year: "2016",
		title: "Kobudo joins the syllabus",
		text: "Bo staff, sai and tonfa are introduced as a graded discipline of their own.",
	},
	{
		year: "2021",
		title: "Little Warriors",
		text: "A dedicated class for children aged five to eleven is designed around play, balance and courtesy.",
	},
	{
		year: "2026",
		title: "Nearly 1,200 students",
		text: "The school passes 1,200 students trained across seven branches, with a competition record of twenty national podiums.",
	},
	{
		year: "2026",
		title: "Beyond the borders",
		text: "International podiums in Kazakhstan, Uzbekistan and Serbia, and a WKC world championship held in India — the first time the school has stood on a world stage at home.",
	},
];

export const aboutValues = [
	{
		no: "01",
		title: "Discipline",
		text: "Arriving on time, training hard and stopping only when the coach says so. The habit matters more than the technique.",
	},
	{
		no: "02",
		title: "Respect",
		text: "The bow, the greeting and the silence. Training partners are treated as equals, and the mat is treated as sacred.",
	},
	{
		no: "03",
		title: "Perseverance",
		text: "Nobody earns a belt in a month. We grade the hours, not the enthusiasm, and the hours always add up.",
	},
	{
		no: "04",
		title: "Compassion",
		text: "Students are taught to protect the person in front of them. A technique that cannot be controlled is not a technique.",
	},
];

export const aboutFacts = [
	{ label: "Founded", value: "2003 · Yelahanka, Bangalore" },
	{ label: "Students trained", value: "Nearly 1,200 across every branch" },
	{ label: "Branches", value: "Seven · across six states" },
	{ label: "International podiums", value: "Kazakhstan · Uzbekistan · Serbia · India" },
	{ label: "Dojo floor", value: "Two halls · 1,400 sq ft" },
	{ label: "Weekly sessions", value: "19 across seven days" },
	{ label: "Belt levels", value: "Nine · white to black" },
	{ label: "Grading cycle", value: "Quarterly" },
	{ label: "Instructors", value: "Four full-time, two visiting" },
];

export const aboutBranches = [
	{
		city: "Bangalore",
		place: "Yelahanka, Karnataka",
		note: "Head dojo · two halls on the original mat · opened 2003",
		head: true,
	},
	{
		city: "Chennai",
		place: "Tamil Nadu",
		note: "Full syllabus, weekly grading and a working competition squad",
	},
	{
		city: "Durga",
		place: "Delhi",
		note: "Karate-do and kobudo taught to the same grading standard",
	},
	{
		city: "Udhampur",
		place: "Jammu & Kashmir",
		note: "Branch dojo with a dedicated Little Warriors class",
	},
	{
		city: "Maharashtra",
		place: "Across the state",
		note: "District-level branches and an annual state grading camp",
	},
	{
		city: "Goa",
		place: "Across the state",
		note: "Seasonal classes and a coastal kata team",
	},
	{
		city: "Andhra Pradesh",
		place: "Across the state",
		note: "District branches, open-air grading camps in summer",
	},
];

export const aboutVoices = [
	{
		img: "assets/img/testimonials/3.jpg",
		name: "Kavya Reddy",
		role: "Software Engineer",
		text: "The instructors bring real defence-force discipline into the room. You feel safe, focused and genuinely well guided.",
	},
	{
		img: "assets/img/testimonials/4.jpg",
		name: "Arjun Menon",
		role: "School Teacher",
		text: "A clean, well-organised dojo with a belt system that makes sense. Progress is visible week after week, not just at grading time.",
	},
	{
		img: "assets/img/testimonials/5.jpg",
		name: "Deepa Iyer",
		role: "Parent",
		text: "My son learned to listen better, train harder and never give up. That growth means everything to us as a family.",
	},
];

/* -------------------------------------------------------------- PROGRAMS */

export const programChapters = [
	{
		no: "01",
		title: "Foundation Track",
		lead: "Kihon, conditioning and the etiquette of the dojo. No belt pressure, no competition, just sound basics.",
		points: ["Weekly kihon and kata class", "Mobility and conditioning work", "Dojo etiquette and safety briefing"],
	},
	{
		no: "02",
		title: "Graded Karate-Do",
		lead: "The full syllabus for students who want to be examined. Belt grading every quarter, kata tested before kumite.",
		points: ["Complete syllabus across eight belts", "Quarterly graded examinations", "Technical correction every session"],
	},
	{
		no: "03",
		title: "Little Warriors",
		lead: "A class built for five to eleven year olds. Short games, simple kata and a great deal of encouragement.",
		points: ["Balance, coordination and listening games", "First three katas taught playfully", "Parent watching area with live viewing"],
	},
	{
		no: "04",
		title: "Competition Squad",
		lead: "For students who want to be tested. Graded kumite, judged kata, and a season on the national circuit.",
		points: ["Weekly squad session plus grading rounds", "Tournament preparation and weight planning", "Traveling to eight national events a year"],
	},
];

export const beltLadder = [
	{ name: "White", kyu: "9th Kyu", years: "0-3 months", color: "#ffffff", img: "assets/img/belts/white" },
	{ name: "Yellow", kyu: "8th Kyu", years: "3-6 months", color: "#f2c200", img: "assets/img/belts/yellow" },
	{ name: "Orange", kyu: "7th Kyu", years: "6-10 months", color: "#ef6c00", img: "assets/img/belts/orange" },
	{ name: "Green", kyu: "6th Kyu", years: "10-14 months", color: "#0e7a3d", img: "assets/img/belts/green" },
	{ name: "Blue", kyu: "5th Kyu", years: "14-20 months", color: "#1d4ed8", img: "assets/img/belts/blue" },
	{ name: "Purple", kyu: "4th Kyu", years: "20-26 months", color: "#6d28d9", img: "assets/img/belts/purple" },
	{ name: "Brown", kyu: "3rd Kyu", years: "26-34 months", color: "#5a3a22", img: "assets/img/belts/brown" },
	{ name: "Black", kyu: "1st Dan", years: "3 years +", color: "#0b0b0b", img: "assets/img/belts/black" },
];

export const programEnrol = [
	{
		no: "01",
		title: "Write to us",
		text: "Send your name, age and the class that suits you. We reply the same working day.",
		meta: "5 minutes",
	},
	{
		no: "02",
		title: "Come for a free trial",
		text: "Train for a full session with no fee and no obligation. Bring a white t-shirt and a belt if you have one.",
		meta: "1 session",
	},
	{
		no: "03",
		title: "Choose your track",
		text: "Sit down with the instructor, pick a track and start the grading cycle. The first belt usually comes within a quarter.",
		meta: "Same week",
	},
];

/* ---------------------------------------------------------------- EVENTS */

export const eventFeature = {
	image: "assets/img/events/feature-championship.jpg",
	tag: "Season opener",
	title: "Spirit of the Dojo — Karate Championship",
	date: "Sat, 22 August 2026 · 10:00 AM",
	venue: "Yelahanka Dojo Hall, Bangalore",
};

export const eventLedger = [
	{ no: "01", title: "Spirit of the Dojo: Karate Championship", date: "Sat, 22 August 2026", meta: "10:00 AM" },
	{ no: "02", title: "Warriors' Way: National Karate Tournament", date: "Sat, 19 September 2026", meta: "11:00 AM" },
	{ no: "03", title: "Kick for Glory: Karate Open Cup", date: "Sun, 04 October 2026", meta: "09:00 AM" },
	{ no: "04", title: "Samurai Spirit: International Karate Challenge", date: "Sat, 17 October 2026", meta: "10:30 AM" },
	{ no: "05", title: "Karate Warriors: Regional Open", date: "Sun, 25 October 2026", meta: "09:00 AM" },
	{ no: "06", title: "The Ultimate Dojo Clash", date: "Sat, 07 November 2026", meta: "10:00 AM" },
	{ no: "07", title: "Karate Power Cup: Fight for Honor", date: "Sun, 22 November 2026", meta: "09:30 AM" },
	{ no: "08", title: "Path of Strength: Karate Masters Event", date: "Sat, 05 December 2026", meta: "11:00 AM" },
];

export const eventChambers = [
	{ img: "assets/img/events/division-kata.jpg", name: "Kata Division", note: "Judged forms" },
	{ img: "assets/img/events/division-kumite.jpg", name: "Kumite Division", note: "Graded rounds" },
	{ img: "assets/img/events/division-team.jpg", name: "Team Kata", note: "Four-member" },
	{ img: "assets/img/events/division-demo.jpg", name: "Skills Demo", note: "Open display" },
	{ img: "assets/img/events/division-awards.jpg", name: "Awards Hall", note: "Prize ceremony" },
];

/* The newest additions to the timetable, shown as the latest entries on the
   events page. Every photograph comes from the New images folder. */
export const eventSessions = [
	{
		img: "assets/img/events/session-kobudo.jpg",
		tag: "New this season",
		title: "Kobudo — Bo Staff Session",
		meta: "Tuesday & Friday · 5:00 PM",
		text: "A new evening session on the traditional weapons. Bo staff and jo are taught from the first step, with free sparring held back until the forms are clean.",
	},
	{
		img: "assets/img/events/session-kids.jpg",
		tag: "New batch",
		title: "Kids Karate — Afternoon Session",
		meta: "Monday, Wednesday & Friday · 4:30 PM",
		text: "A fresh afternoon group for children aged five to eleven. Games first, then the first three kihon drills, with parents watching from the side of the mat.",
	},
	{
		img: "assets/img/events/session-junior.jpg",
		tag: "New grading cycle",
		title: "Junior Kumite Squad — Evening Training",
		meta: "Monday & Thursday · 6:30 PM",
		text: "Graded sparring for students who hold a belt of green or above, working on distance, timing and the three-step entry. Grading happens at the end of the cycle.",
	},
	{
		img: "assets/img/events/session-grading.jpg",
		tag: "Monthly",
		title: "Grading & Belt Ceremony",
		meta: "Last Sunday of the month · 9:00 AM",
		text: "The monthly grading floor. Instructors watch a full kihon set, a kata and a round of kumite before the belt is tied, with family and tea afterwards in the hall.",
	},
];

/* ------------------------------------------------------------------ BLOG */

export const blogPosts: {
	img: string;
	slug?: string;
	date: string;
	author: string;
	avatar: string;
	title: string;
	desc: string;
}[] = [
	{
		img: "assets/img/gallery/okinawa-red-belt.jpg",
		slug: "tenth-dan-red-belt",
		date: "09 November, 2026",
		author: "Hanshi Dr. S. C. Durai",
		avatar: "assets/img/blog/avator/5.jpg",
		title: "Red Belt 10th Dan: awarded in Okinawa",
		desc: "Our Chief Instructor returns from Okinawa with the Red Belt 10th Dan in Goju-Ryu, conferred by Grand Master Hanshi Dr. Tetsuhiro Hokama — the first Indian to receive the rank directly from the birthplace of karate.",
	},
	{
		img: "assets/img/New images/image 2.jpeg",
		slug: "world-championship-2026",
		date: "02 November, 2026",
		author: "Chief Instructor",
		avatar: "assets/img/blog/avator/5.jpg",
		title: "Three golds in Bengaluru: inside the XVI WKC World Championship",
		desc: "A week of kata, kumite and kobudo at the world championship — and the months of preparation that put the squad on the podium.",
	},
	{
		img: "assets/img/New images/image 63.jpeg",
		slug: "kobudo-world-stage",
		date: "24 October, 2026",
		author: "Kobudo Instructor",
		avatar: "assets/img/blog/avator/4.jpg",
		title: "Bo staff and bronze: kobudo on the world stage",
		desc: "The weapons division travelled with the kumite squad this year. What the bo staff team learned from a first world championship.",
	},
	{
		img: "assets/img/blog/1.jpg",
		date: "18 August, 2026",
		author: "Dojo Admin",
		avatar: "assets/img/blog/avator/1.jpg",
		title: "Martial Arts: A Journey of Discipline and Self-Discovery",
		desc: "Karate teaches far more than kicks and punches. Discover how steady training shapes focus, patience and self-belief.",
	},
	{
		img: "assets/img/blog/2.jpg",
		date: "11 August, 2026",
		author: "Head Coach",
		avatar: "assets/img/blog/avator/2.jpg",
		title: "Why We Practise Kata Before Kumite",
		desc: "Kata is not a performance. It is the map a fighter follows when a round turns faster than thought.",
	},
	{
		img: "assets/img/blog/3.jpg",
		date: "04 August, 2026",
		author: "Little Warriors Lead",
		avatar: "assets/img/blog/avator/3.jpg",
		title: "What Children Learn in Their First Karate Class",
		desc: "Balance, courtesy and a short attention span that finally has a purpose. A look inside our kids karate programme.",
	},
	{
		img: "assets/img/blog/4.jpg",
		date: "28 July, 2026",
		author: "Fitness Instructor",
		avatar: "assets/img/blog/avator/4.jpg",
		title: "Keeping the Heart at Home While Training",
		desc: "Simple ways to stay active, flexible and motivated between dojo sessions, so your body and mind stay ready.",
	},
	{
		img: "assets/img/blog/5.jpg",
		date: "19 July, 2026",
		author: "Chief Instructor",
		avatar: "assets/img/blog/avator/5.jpg",
		title: "Belt Gradings: How We Prepare Our Students",
		desc: "The grading syllabus, the weeks of preparation behind it and the mindset we want every student to carry onto the mat.",
	},
	{
		img: "assets/img/blog/6.jpg",
		date: "08 July, 2026",
		author: "Dojo Admin",
		avatar: "assets/img/blog/avator/6.jpg",
		title: "From the First Belt to the Black Belt",
		desc: "From the first belt to the black belt, every student follows a personal path of growth, hard work and quiet confidence.",
	},
];

/* --------------------------------------------------------------- GALLERY */

export type GalleryItem = { img: string; caption: string; pos?: string };

export interface GalleryGroup {
	id: string;
	kicker: string;
	title: string;
	note: string;
	items: GalleryItem[];
}

/*
 * The archive, split by what is actually in the frame: the Okinawa belt and
 * certificate photographs, life on the mat, the podium pictures and the
 * ceremony photographs. Each group becomes its own section on the gallery page.
 */
export const galleryGroups: GalleryGroup[] = [
	{
		id: "okinawa",
		kicker: "The birthplace",
		title: "Okinawa — belts and certificates",
		note: "The red belt, the dan certificates and the calligraphy presented at the hombu dojo in Okinawa.",
		items: [
			{ img: "assets/img/gallery/okinawa-belt-presentation.jpg", caption: "Red belt presented by the senior master in Okinawa", pos: "50% 22%" },
			{ img: "assets/img/gallery/okinawa-red-belt.jpg", caption: "With the senior master after the belt ceremony", pos: "50% 22%" },
			{ img: "assets/img/gallery/okinawa-dan-certificate.jpg", caption: "Japanese dan certificate awarded in Okinawa", pos: "50% 22%" },
			{ img: "assets/img/gallery/okinawa-grading-certificate.jpg", caption: "Grading certificate from the Okinawa hombu dojo", pos: "50% 22%" },
			{ img: "assets/img/gallery/okinawa-calligraphy-frame.jpg", caption: "Calligraphy certificate presented at the hombu dojo", pos: "50% 22%" },
			{ img: "assets/img/gallery/okinawa-calligraphy-scroll.jpg", caption: "Calligraphy scroll presented in Okinawa", pos: "50% 22%" },
		],
	},
	{
		id: "dojo",
		kicker: "Yelahanka",
		title: "On the mat — training and the dojo",
		note: "Evening kihon on the main mat, the belt ladder on the wall and the instructors who run the classes.",
		items: [
			{ img: "assets/img/gallery/training-class.jpg", caption: "Evening kihon class on the main mat" },
			{ img: "assets/img/New images/image 16.jpeg", caption: "Medals, brown belt and the bo staff" },
			{ img: "assets/img/New images/image 32.jpeg", caption: "The belt ladder on the dojo wall" },
			{ img: "assets/img/New images/image 80.jpeg", caption: "The senior instructors lined up in hakama at the dojo" },
			{ img: "assets/img/New images/image 94.jpeg", caption: "School students drilling punches during a karate demonstration class" },
			{ img: "assets/img/about/okinawa-kata-gate-4k.jpg", caption: "Karateka performing kata in front of a traditional red temple" },
		],
	},
	{
		id: "podiums",
		kicker: "Championships",
		title: "Podiums and medals",
		note: "Gold, silver and bronze from the XVI WKC World Championship, the Asian Championships and IMGC Uzbekistan.",
		items: [
			{ img: "assets/img/New images/image 1.jpeg", caption: "Team and officials on the tatami at the WKC championship" },
			{ img: "assets/img/New images/image 2.jpeg", caption: "Double gold in front of the national flag" },
			{ img: "assets/img/New images/image 3.jpeg", caption: "Silver in senior female kumite, XVI WKC World Championship" },
			{ img: "assets/img/New images/image 5.jpeg", caption: "Seniors on the podium — gold, silver and bronze" },
			{ img: "assets/img/New images/image 6.jpeg", caption: "Medalists with their WKC certificates" },
			{ img: "assets/img/New images/image 7.jpeg", caption: "Three golds for the dojo at the XVI WKC" },
			{ img: "assets/img/New images/image 10.jpeg", caption: "A second gold run at the world championship" },
			{ img: "assets/img/New images/image 11.jpeg", caption: "Three golds on the tatami" },
			{ img: "assets/img/New images/image 13.jpeg", caption: "Coaches and the junior team on the competition mat" },
			{ img: "assets/img/New images/image 14.jpeg", caption: "Podium finish for the senior girls' kumite" },
			{ img: "assets/img/New images/image 15.jpeg", caption: "Two medalists and their coach under the flag" },
			{ img: "assets/img/New images/image 18.jpeg", caption: "The women's squad on podium one" },
			{ img: "assets/img/New images/image 19.jpeg", caption: "Gold, silver and bronze across three nations" },
			{ img: "assets/img/New images/image 20.jpeg", caption: "Three medals and the flag beneath the WKC crest" },
			{ img: "assets/img/New images/image 21.jpeg", caption: "Boys' kata podium with medals and certificates" },
			{ img: "assets/img/New images/image 22.jpeg", caption: "Three golds at the XVI WKC, Bengaluru" },
			{ img: "assets/img/New images/image 23.jpeg", caption: "Gold for Kazakhstan, silver and bronze for India" },
			{ img: "assets/img/New images/image 24.jpeg", caption: "Three medals and the tricolour at the WKC crest" },
			{ img: "assets/img/New images/image 25.jpeg", caption: "Champion's walk with the flag and three golds" },
			{ img: "assets/img/New images/image 27.jpeg", caption: "Gold and silver in front of the national flag" },
			{ img: "assets/img/New images/image 28.jpeg", caption: "Kobudo team kneeling at the ready on the tatami" },
			{ img: "assets/img/New images/image 29.jpeg", caption: "Medalists with their World Karate Confederation certificates" },
			{ img: "assets/img/New images/image 33.jpeg", caption: "Three golds held high with the tricolour" },
			{ img: "assets/img/New images/image 34.jpeg", caption: "Junior medalists with certificates and the flag" },
			{ img: "assets/img/New images/image 35.jpeg", caption: "A first gold in front of the national flag" },
			{ img: "assets/img/New images/image 37.jpeg", caption: "The women's team on the podium" },
			{ img: "assets/img/New images/image 38.jpeg", caption: "Gold at the top of the podium, medals all round" },
			{ img: "assets/img/New images/image 39.jpeg", caption: "Kazakhstan gold, India silver and bronze" },
			{ img: "assets/img/New images/image 40.jpeg", caption: "Three medals and the WKC crest" },
			{ img: "assets/img/New images/image 41.jpeg", caption: "Kobudo podium with staff, medals and certificates" },
			{ img: "assets/img/New images/image 42.jpeg", caption: "Two medalists and their coach under the flag" },
			{ img: "assets/img/New images/image 43.jpeg", caption: "Young medalists on the podium at the WKC" },
			{ img: "assets/img/New images/image 44.jpeg", caption: "Five medalists in front of the championship crest" },
			{ img: "assets/img/New images/image 45.jpeg", caption: "Three medals held wide with the tricolour" },
			{ img: "assets/img/New images/image 47.jpeg", caption: "Junior champions with the flag and certificates" },
			{ img: "assets/img/New images/image 48.jpeg", caption: "Kids' podium presentation at the WKC championship" },
			{ img: "assets/img/New images/image 49.jpeg", caption: "Boys' kumite podium with four Indian medalists" },
			{ img: "assets/img/New images/image 50.jpeg", caption: "Victory ceremony on podium one" },
			{ img: "assets/img/New images/image 81.jpeg", caption: "Gold on podium one with the tricolour at IMGC Uzbekistan" },
			{ img: "assets/img/New images/image 82.jpeg", caption: "Champion with the flag at the XV World Championship" },
			{ img: "assets/img/New images/image 83.jpeg", caption: "A young gold medalist, her diploma and her coach" },
			{ img: "assets/img/New images/image 85.jpeg", caption: "Boys' podium with the flag at IMGC-2024 Uzbekistan" },
			{ img: "assets/img/New images/image 86.jpeg", caption: "Medalist with certificate and coach under the flag" },
			{ img: "assets/img/New images/image 87.jpeg", caption: "Silver for the dojo, wrapped in the tricolour" },
			{ img: "assets/img/New images/image 88.jpeg", caption: "Three medalists with the flags of India, Kazakhstan and Uzbekistan" },
			{ img: "assets/img/New images/image 89.jpeg", caption: "Podium finish at the WKC/FW Asian Karate Championship" },
			{ img: "assets/img/New images/image 90.jpeg", caption: "Green belt, medal and flag at the Asian Karate Championship" },
			{ img: "assets/img/New images/image 46.jpeg", caption: "The women's team on podium with certificates and the flag" },
			{ img: "assets/img/New images/image 51.jpeg", caption: "Kumite podium — Kazakhstan silver, India bronze" },
			{ img: "assets/img/New images/image 52.jpeg", caption: "Boys' kumite podium with the gold and the tricolour" },
			{ img: "assets/img/New images/image 53.jpeg", caption: "Alone at the top — gold on podium one" },
			{ img: "assets/img/New images/image 54.jpeg", caption: "Champion with the flag overhead on podium one" },
			{ img: "assets/img/New images/image 55.jpeg", caption: "Three golds on a single ribbon" },
			{ img: "assets/img/New images/image 56.jpeg", caption: "A second boys' podium with gold and the flag" },
			{ img: "assets/img/New images/image 57.jpeg", caption: "Arms wide in front of the tricolour" },
			{ img: "assets/img/New images/image 58.jpeg", caption: "Three medals and the tricolour beneath the XVI WKC crest" },
			{ img: "assets/img/New images/image 59.jpeg", caption: "Women's kumite podium — Kazakhstan, Belarus and India" },
			{ img: "assets/img/New images/image 60.jpeg", caption: "Boys' team podium with the flag and four medals" },
			{ img: "assets/img/New images/image 61.jpeg", caption: "Three golds for the junior female division" },
			{ img: "assets/img/New images/image 62.jpeg", caption: "Kyrgyzstan gold with India silver and Kazakhstan bronze" },
			{ img: "assets/img/New images/image 63.jpeg", caption: "Kobudo podium with bo staffs and the tricolour" },
			{ img: "assets/img/New images/image 65.jpeg", caption: "Boys' kumite podium — India gold, silver and bronze" },
			{ img: "assets/img/New images/image 68.jpeg", caption: "The full championship delegation in front of the WKC backdrop" },
			{ img: "assets/img/New images/image 69.jpeg", caption: "Over fifty medalists at the XVI WKC team photograph" },
			{ img: "assets/img/New images/image 70.jpeg", caption: "Kumite podium — gold, silver and bronze with certificates" },
			{ img: "assets/img/New images/image 71.jpeg", caption: "India silver and Kazakhstan bronze behind the Kyrgyz champion" },
			{ img: "assets/img/New images/image 75.jpeg", caption: "Team photograph with medals and certificates at the XVI WKC" },
			{ img: "assets/img/New images/image 76.jpeg", caption: "Girls' kumite podium with certificates and the tricolour" },
			{ img: "assets/img/New images/image 77.jpeg", caption: "A medalist presented with her certificate by the officials" },
			{ img: "assets/img/New images/image 79.jpeg", caption: "Officials and competitors at the WKC Asian Karate Championship" },
		],
	},
	{
		id: "ceremonies",
		kicker: "Ceremonies",
		title: "Trophies, stages and ceremonies",
		note: "Prize presentations on stage, awards day at the dojo and the team photographs taken after the finals.",
		items: [
			{ img: "assets/img/gallery/dojo-awards.jpg", caption: "Awards day with the Yelahanka dojo" },
			{ img: "assets/img/gallery/championship-stage.jpg", caption: "Trophy presentation on stage" },
			{ img: "assets/img/gallery/championship-ceremony.jpg", caption: "Prize ceremony moments" },
			{ img: "assets/img/gallery/championship-certificates.jpg", caption: "Certificates of achievement" },
			{ img: "assets/img/gallery/championship-officials.jpg", caption: "With the championship officials" },
			{ img: "assets/img/gallery/championship-celebration.jpg", caption: "Celebrating the victory" },
			{ img: "assets/img/gallery/trophy-portrait-1.jpg", caption: "Spirit of the Dojo — kata division medal" },
			{ img: "assets/img/gallery/trophy-portrait-2.jpg", caption: "National open — kumite division podium" },
			{ img: "assets/img/gallery/trophy-portrait-3.jpg", caption: "Team kata — championship trophy" },
			{ img: "assets/img/New images/image 8.jpeg", caption: "Centre stage with the tricolour at the WKC ceremony" },
			{ img: "assets/img/New images/image 12.jpeg", caption: "With the international officials in Bengaluru" },
			{ img: "assets/img/New images/image 26.jpeg", caption: "Medalists and officials at the WKC/FW ceremony" },
			{ img: "assets/img/New images/image 30.jpeg", caption: "The full dojo squad on stage at the XVI WKC" },
			{ img: "assets/img/New images/image 36.jpeg", caption: "Certificate and gold on the championship stage" },
			{ img: "assets/img/New images/image 84.jpeg", caption: "Medalists honoured with garlands at the dojo ceremony" },
			{ img: "assets/img/New images/image 64.jpeg", caption: "The team with certificates and medals at the WKC ceremony" },
			{ img: "assets/img/New images/image 74.jpeg", caption: "Officials at the garlanded portrait of Hanchi Dr. S. Reithinam" },
			{ img: "assets/img/New images/image 91.jpeg", caption: "The team with the trophy and officials at the Asian Karate Championship" },
			{ img: "assets/img/New images/image 92.jpeg", caption: "The full squad in blazers at the dojo award ceremony" },
			{ img: "assets/img/New images/image 93.jpeg", caption: "Students and instructors at the Army Public School culture and sports meet" },
			{ img: "assets/img/New images/image 95.jpeg", caption: "The full squad photographed together at the end of the training camp" },
		],
	},
];

/** every photograph, in section order */
export const galleryItems: GalleryItem[] = galleryGroups.flatMap((group) => group.items);

/** the moving half of the archive — the first section on the gallery page */
export const galleryVideo = {
	src: "assets/img/New images/video 1.mp4",
	kicker: "In motion",
	title: "The archive that will not stand still",
	lede: "Photographs freeze a moment; this one does not. Press play for the moving half of the collection.",
	tag: "Video · from the dojo",
};

/* --------------------------------------------------------------- CONTACT */

export const contactHours = [
	{ label: "Monday – Friday · Morning", value: "7:30 AM – 9:30 AM" },
	{ label: "Monday – Friday · Evening", value: "6:00 PM – 7:30 PM" },
	{ label: "Monday – Friday · Late evening", value: "7:30 PM – 9:30 PM" },
	{ label: "Saturday", value: "7:00 AM – 12:00 PM" },
	{ label: "Sunday", value: "6:00 AM – 11:00 AM" },
	{ label: "Public holidays", value: "Kata clinic only" },
];

export const contactInfo = [
	{ icon: "ph ph-map-pin-area", label: "Dojo", value: dojo.address, href: "" },
	{ icon: "ph ph-headphones", label: "Call", value: `${dojo.phone} · ${dojo.phone2}`, href: `tel:${dojo.phone}` },
	{ icon: "ph ph-envelope-simple", label: "Email", value: dojo.email, href: `mailto:${dojo.email}` },
	{ icon: "ph ph-whatsapp-logo", label: "WhatsApp", value: "Message the dojo", href: dojo.whatsapp },
];
