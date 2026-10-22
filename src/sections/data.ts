/**
 * Central content store for the "Dojo Editorial" redesign.
 * Every page draws a different slice of this data so that no two pages
 * repeat the same copy or the same photography.
 */

export const dojo = {
	name: "Okinawa Gojukan Karate-Do",
	kn: "ಒಕಿನಾವಾ ಗೋಜುಕನ್ ಕರಾಟೆ-ತರಬೇತಿ ಶಾಲೆ",
	tagline: "Trained Indian Defence services (Army, Navy, Airforce) and Para & NSG Cammandos",
	address: "16/290, 24th Cross, Maruthi Nagar, Yelahanka, Bangalore - 64",
	phone: "8971895922",
	phone2: "8660600981",
	whatsapp: "https://wa.me/918971895922",
	email: "info@example.com",
	email2: "support@example.com",
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

export const homeJournal = [
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
	image: "assets/img/programs/2-kata.jpg",
	tag: "Since 2003",
	title: "A dojo built on the Okinawan way of training",
	lead: "Okinawa Gojukan Karate-Do began with nine students, one wooden floor and a single rule: train properly, or do not train at all.",
	body: "Twenty-three years on, that rule still decides how we teach. Every class opens with a bow, every technique is broken down until it can be repeated a thousand times, and every student is graded on character as firmly as on technique.",
	points: [
		"Karate-Do, Kobudo, Jujitsu and weapons taught in one continuous syllabus",
		"Quarterly belt examinations with an independent visiting examiner",
		"Classes for children from five years old through to active adults",
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
		title: "Five hundred students",
		text: "The dojo passes five hundred students trained, with a competition record of twenty national podiums.",
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
	{ label: "Dojo floor", value: "Two halls · 1,400 sq ft" },
	{ label: "Weekly sessions", value: "19 across seven days" },
	{ label: "Belt levels", value: "Nine · white to black" },
	{ label: "Grading cycle", value: "Quarterly" },
	{ label: "Instructors", value: "Four full-time, two visiting" },
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
		points: ["Complete syllabus across nine belts", "Quarterly graded examinations", "Technical correction every session"],
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
	{ name: "White", years: "0-3 months", color: "#f3f2ee" },
	{ name: "Yellow", years: "3-6 months", color: "#f2c10d" },
	{ name: "Orange", years: "6-10 months", color: "#e2711d" },
	{ name: "Green", years: "10-14 months", color: "#1f7a3d" },
	{ name: "Blue", years: "14-20 months", color: "#1c4e9c" },
	{ name: "Purple", years: "20-26 months", color: "#5b2d8e" },
	{ name: "Brown", years: "26-34 months", color: "#6b4423" },
	{ name: "Red", years: "34-44 months", color: "#c1121f" },
	{ name: "Black", years: "3 years +", color: "#141414" },
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
	image: "assets/img/programs/4-kumite.jpg",
	tag: "Season opener",
	title: "Spirit of the Dojo — Karate Championship",
	date: "Sat, 22 August 2026 · 10:00 AM",
	venue: "Yelahanka Dojo Hall, Bangalore",
	text: "Our flagship annual championship returns with kata and kumite divisions for every belt, judged by visiting examiners from across the country. Registration closes two weeks before the event, and the first hundred entries receive a commemorative training belt.",
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
	{ img: "assets/img/events/2.jpg", name: "Kata Division", note: "Judged forms" },
	{ img: "assets/img/events/3.jpg", name: "Kumite Division", note: "Graded rounds" },
	{ img: "assets/img/events/4.jpg", name: "Team Kata", note: "Four-member" },
	{ img: "assets/img/events/5.jpg", name: "Skills Demo", note: "Open display" },
	{ img: "assets/img/events/6.jpg", name: "Awards Hall", note: "Prize ceremony" },
];

/* ------------------------------------------------------------------ BLOG */

export const blogPosts = [
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

export const galleryItems: { img: string; caption: string; pos?: string }[] = [
	{ img: "assets/img/gallery/okinawa-belt-presentation.jpg", caption: "Red belt presented by the senior master in Okinawa", pos: "50% 22%" },
	{ img: "assets/img/gallery/okinawa-red-belt.jpg", caption: "With the senior master after the belt ceremony", pos: "50% 22%" },
	{ img: "assets/img/gallery/okinawa-dan-certificate.jpg", caption: "Japanese dan certificate awarded in Okinawa", pos: "50% 22%" },
	{ img: "assets/img/gallery/okinawa-grading-certificate.jpg", caption: "Grading certificate from the Okinawa hombu dojo", pos: "50% 22%" },
	{ img: "assets/img/gallery/okinawa-calligraphy-frame.jpg", caption: "Calligraphy certificate presented at the hombu dojo", pos: "50% 22%" },
	{ img: "assets/img/gallery/okinawa-calligraphy-scroll.jpg", caption: "Calligraphy scroll presented in Okinawa", pos: "50% 22%" },
	{ img: "assets/img/gallery/training-class.jpg", caption: "Evening kihon class on the main mat" },
	{ img: "assets/img/gallery/dojo-awards.jpg", caption: "Awards day with the Yelahanka dojo" },
	{ img: "assets/img/gallery/championship-stage.jpg", caption: "Trophy presentation on stage" },
	{ img: "assets/img/gallery/championship-ceremony.jpg", caption: "Prize ceremony moments" },
	{ img: "assets/img/gallery/championship-certificates.jpg", caption: "Certificates of achievement" },
	{ img: "assets/img/gallery/championship-officials.jpg", caption: "With the championship officials" },
	{ img: "assets/img/gallery/championship-celebration.jpg", caption: "Celebrating the victory" },
	{ img: "assets/img/gallery/trophy-portrait-1.jpg", caption: "Spirit of the Dojo — kata division medal" },
	{ img: "assets/img/gallery/trophy-portrait-2.jpg", caption: "National open — kumite division podium" },
	{ img: "assets/img/gallery/trophy-portrait-3.jpg", caption: "Team kata — championship trophy" },
];

/* --------------------------------------------------------------- CONTACT */

export const contactHours = [
	{ label: "Monday – Friday", value: "6:00 AM – 8:00 PM" },
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
