import { renderToString } from "react-dom/server";
import { useLocation, Link, useSearchParams, MemoryRouter } from "react-router-dom";
import { Children, createContext, useContext, useState, createElement, memo, useEffect, useRef, useMemo } from "react";
import { mkdirSync, writeFileSync } from "node:fs";
import { jsxs as jsxs$1, jsx as jsx$1, Fragment as Fragment$1 } from "react/jsx-runtime";
import { g as getLang, t, B as Bi, L as LANGUAGES } from "./assets/core-BJ3r9w7B.js";
import { useScroll, useSpring, motion, useReducedMotion, useMotionValue, useTransform } from "framer-motion";
const TEXT_ATTRIBUTES = ["alt", "placeholder", "aria-label", "title"];
const RAW_TEXT_TAGS = ["title", "script", "style", "textarea"];
const PLAIN_TEXT_TAGS = ["option"];
const translateChildren = (children) => {
  if (children === null || children === void 0 || typeof children === "boolean") {
    return children;
  }
  if (typeof children === "string") return Bi(children);
  if (typeof children === "number") return children;
  if (Array.isArray(children)) {
    return Children.map(children, (child) => translateChildren(child));
  }
  return children;
};
const translatePlain = (children) => {
  if (typeof children === "string") return t(children);
  if (Array.isArray(children)) {
    return Children.map(children, (child) => translatePlain(child));
  }
  return children;
};
const translateProps = (type, props) => {
  if (!props || getLang() === "en") return props;
  const out = { ...props };
  const tag = typeof type === "string" ? type : "";
  if (PLAIN_TEXT_TAGS.includes(tag) && out.children !== void 0) {
    out.children = translatePlain(out.children);
  } else if (!RAW_TEXT_TAGS.includes(tag) && out.children !== void 0) {
    out.children = translateChildren(out.children);
  }
  if (tag) {
    for (const attribute of TEXT_ATTRIBUTES) {
      const value = out[attribute];
      if (typeof value === "string") out[attribute] = t(value);
    }
  }
  return out;
};
const Fragment = Fragment$1;
function jsx(type, props, key) {
  return jsx$1(type, translateProps(type, props), key);
}
function jsxs(type, props, key) {
  return jsxs$1(type, translateProps(type, props), key);
}
const dojo = {
  address: "16/290, 24th Cross, Maruthi Nagar, Yelahanka, Bangalore - 64",
  phone: "8971895922",
  phone2: "8660600981",
  whatsapp: "https://wa.me/918971895922",
  email: "info@example.com",
  email2: "support@example.com",
  maps: "https://maps.google.com/maps?q=24th%20Cross%2C%20Maruthi%20Nagar%2C%20Yelahanka%2C%20Bangalore-64&t=&z=15&ie=UTF8&iwloc=&output=embed"
};
const homePillars = [
  {
    no: "01",
    icon: "assets/img/features/icon2.svg",
    title: "Focus",
    text: "Hours of repetition teach the mind to hold a single point of attention, on the mat and off it."
  },
  {
    no: "02",
    icon: "assets/img/features/icon3.svg",
    title: "Resilience",
    text: "A body that is worked hard, and a temperament that knows how to start again after a hard round."
  },
  {
    no: "03",
    icon: "assets/img/features/icon4.svg",
    title: "Respect",
    text: "Bowing before striking. The Okinawan courtesy that turns a class into a way of living."
  },
  {
    no: "04",
    icon: "assets/img/features/icon1.svg",
    title: "Readiness",
    text: "Calm, decisive and technically sound when a real situation asks for it, not a graded one."
  }
];
const homeMethod = [
  {
    no: "01",
    title: "Kihon — Basic Techniques",
    text: "Stances, blocks, strikes and footwork drilled until they stop being instructions and start being reflex.",
    meta: "Weeks 1–8"
  },
  {
    no: "02",
    title: "Kata — Formalised Forms",
    text: "Okinawan kata practised as whole movements, with breath, timing and power bound into every sequence.",
    meta: "Weeks 9–24"
  },
  {
    no: "03",
    title: "Kumite — Applied Practice",
    text: "Partner work and controlled sparring that reads distance and timing under a moving opponent.",
    meta: "Weeks 25–40"
  },
  {
    no: "04",
    title: "Grading — Tested Progress",
    text: "Quarterly belt examinations that certify technique, attitude and the character a black belt needs.",
    meta: "Every quarter"
  }
];
const homeDisciplines = [
  {
    no: "01",
    title: "Karate-Do",
    text: "Shotokan-derived kihon and kata taught the Okinawan way, with a graded syllabus and quarterly examinations.",
    meta: "All ages"
  },
  {
    no: "02",
    title: "Kobudo",
    text: "Bo staff, sai and tonfa work that builds balance, timing and the kind of calm that a weapon demands.",
    meta: "Tuesday & Friday"
  },
  {
    no: "03",
    title: "Little Warriors",
    text: "A playful, structured class for children aged 5 to 11 built on balance, courtesy and simple kata.",
    meta: "Ages 5–11"
  },
  {
    no: "04",
    title: "Self-Defence",
    text: "Situational drills for escapes, blocks and awareness, taught with the calm of a defence instructor.",
    meta: "Weekends"
  },
  {
    no: "05",
    title: "Fitness & Conditioning",
    text: "Strength, mobility and cardiovascular work written around the needs of a martial artist, not a gym.",
    meta: "Daily"
  },
  {
    no: "06",
    title: "Competition Squad",
    text: "Travelling squad for students who want graded kumite, judged kata and a national circuit.",
    meta: "By invitation"
  }
];
const homeWeek = [
  {
    day: "Monday",
    sessions: [
      { time: "6:00 AM", name: "Kihon & Kata", tag: "Open" },
      { time: "4:30 PM", name: "Kids Karate", tag: "Ages 5–11" },
      { time: "6:30 PM", name: "Kumite Squad", tag: "Graded" }
    ]
  },
  {
    day: "Tuesday",
    sessions: [
      { time: "6:00 AM", name: "Kihon & Kata", tag: "Open" },
      { time: "5:00 PM", name: "Kobudo", tag: "Bo staff" },
      { time: "7:00 PM", name: "Adult Karate-Do", tag: "Open" }
    ]
  },
  {
    day: "Wednesday",
    sessions: [
      { time: "6:00 AM", name: "Kihon & Kata", tag: "Open" },
      { time: "4:30 PM", name: "Kids Karate", tag: "Ages 5–11" },
      { time: "6:30 PM", name: "Self-Defence", tag: "Open" }
    ]
  },
  {
    day: "Thursday",
    sessions: [
      { time: "6:00 AM", name: "Kihon & Kata", tag: "Open" },
      { time: "5:00 PM", name: "Little Warriors", tag: "Ages 5–11" },
      { time: "7:00 PM", name: "Kumite Squad", tag: "Graded" }
    ]
  },
  {
    day: "Friday",
    sessions: [
      { time: "6:00 AM", name: "Kihon & Kata", tag: "Open" },
      { time: "5:00 PM", name: "Kobudo", tag: "Bo staff" },
      { time: "7:00 PM", name: "Adult Karate-Do", tag: "Open" }
    ]
  },
  {
    day: "Saturday",
    sessions: [
      { time: "7:00 AM", name: "Open Training", tag: "All" },
      { time: "9:00 AM", name: "Competition Kumite", tag: "Graded" }
    ]
  },
  {
    day: "Sunday",
    sessions: [
      { time: "6:00 AM", name: "Kihon & Kata", tag: "Open" },
      { time: "9:00 AM", name: "Kata Clinic", tag: "Open" }
    ]
  }
];
const homeNumbers = [
  { value: "500+", label: "Students trained" },
  { value: "23+", label: "Years of teaching" },
  { value: "300+", label: "Grading passes" },
  { value: "20+", label: "National podiums" }
];
const homeMarquee = [
  "One strike",
  "呼吸 · breath",
  "Discipline",
  "Okinawa",
  "Second chances",
  "集中 · focus",
  "Respect",
  "Never quit",
  "Karate-do",
  "Humility"
];
const homePhotos = [
  { src: "assets/img/New images/image 5.jpeg", alt: "Podium finishers at the WKC World Karate Championship", w: 1600, h: 1200 },
  { src: "assets/img/New images/image 12.jpeg", alt: "Dojo representatives with the championship officials", w: 1200, h: 1600 },
  { src: "assets/img/New images/image 15.jpeg", alt: "Medalists with the national flag at the World Karate Championship", w: 1200, h: 1600 },
  { src: "assets/img/New images/image 68.jpeg", alt: "The full championship delegation in front of the WKC backdrop", w: 4096, h: 1842 },
  { src: "assets/img/New images/image 75.jpeg", alt: "Team photograph with medals and certificates at the XVI WKC World Karate Championship", w: 1600, h: 1200 },
  { src: "assets/img/New images/image 77.jpeg", alt: "A medalist presented with her certificate by the championship officials", w: 1200, h: 1600 },
  { src: "assets/img/about/okinawa-kata-gate.jpg", alt: "Karateka performing kata in front of a traditional red temple", w: 1440, h: 1920 },
  { src: "assets/img/New images/image 79.jpeg", alt: "Officials and competitors at the WKC Asian Karate Championship", w: 1600, h: 902 },
  { src: "assets/img/New images/image 80.jpeg", alt: "Instructors in black hakama at the dojo", w: 1173, h: 960 }
];
const homeAchievements = [
  { src: "assets/img/New images/image 81.jpeg", alt: "Junior champion on the top of the podium with gold and the tricolour at IMGC Uzbekistan", w: 3024, h: 4032 },
  { src: "assets/img/New images/image 82.jpeg", alt: "Champion on podium number one with the Indian flag at the World Championship", w: 4032, h: 3024 },
  { src: "assets/img/New images/image 83.jpeg", alt: "Young gold medalist with her diploma and coach in front of the national flag", w: 3024, h: 4032 },
  { src: "assets/img/New images/image 84.jpeg", alt: "Dojo medalists honoured with garlands and shawls at the award ceremony", w: 1280, h: 960 },
  { src: "assets/img/New images/image 85.jpeg", alt: "Gold medalist on the podium draped in the tricolour at IMGC-2024 Uzbekistan", w: 4032, h: 3024 },
  { src: "assets/img/New images/image 86.jpeg", alt: "Medalist with her diploma and coach holding the national flag", w: 3120, h: 4160 },
  { src: "assets/img/New images/image 87.jpeg", alt: "Silver medalist wrapped in the Indian flag with his coach at the World Championship", w: 3024, h: 4032 },
  { src: "assets/img/New images/image 88.jpeg", alt: "Three young medalists with the flags of India, Kazakhstan and Uzbekistan in the arena", w: 1600, h: 1200 },
  { src: "assets/img/New images/image 89.jpeg", alt: "Karateka on the podium with the tricolour at the WKC/FW Asian Karate Championship", w: 960, h: 1280 },
  { src: "assets/img/New images/image 90.jpeg", alt: "Green-belt medalist holding the Indian flag on the podium at the Asian Karate Championship", w: 960, h: 1280 },
  { src: "assets/img/New images/image 91.jpeg", alt: "The team with the trophy and championship officials at the Asian Karate Championship", w: 960, h: 1280 },
  { src: "assets/img/New images/image 92.jpeg", alt: "The full squad in blazers at the dojo award ceremony", w: 1280, h: 960 }
];
const homeVoices = [
  {
    img: "assets/img/testimonials/1.jpg",
    name: "Priya Sharma",
    role: "Student",
    text: "Training here changed the way I study, work and even speak to people. The instructors correct every detail, and they correct it with patience."
  },
  {
    img: "assets/img/testimonials/2.jpg",
    name: "Ramesh Kumar",
    role: "Parent",
    text: "My daughter joined as a shy seven-year-old. Two years later she leads a class warm-up. I cannot thank the dojo enough for that change."
  }
];
const homeAudience = [
  {
    no: "01",
    title: "Children, five to eleven",
    text: "Their own classes, their own games and their own first kata. We keep them apart from the adults and let them lead the warm-up."
  },
  {
    no: "02",
    title: "Adults and latecomers",
    text: "Most of our students are adults who have never trained before, or who trained once and stopped. Both are welcome from the first session."
  },
  {
    no: "03",
    title: "The services",
    text: "Army, Navy, Air Force and Para and NSG Commando units train with us. Discipline learned in uniform is taught the same way here."
  }
];
const homeInstructors = [
  {
    img: "assets/img/team/1.jpg",
    name: "Ramesh Iyer",
    title: "Chief Instructor",
    role: "Karate-Do & Kobudo"
  },
  {
    img: "assets/img/team/2.jpg",
    name: "Suresh Nair",
    title: "Head Coach",
    role: "Kumite & Competition Squad"
  },
  {
    img: "assets/img/team/3.jpg",
    name: "Anil Kumar",
    title: "Fitness Instructor",
    role: "Strength & Conditioning"
  },
  {
    img: "assets/img/team/4.jpg",
    name: "Deepa Rao",
    title: "Little Warriors Lead",
    role: "Kids Karate Program"
  }
];
const homeJournal = [
  {
    img: "assets/img/gallery/okinawa-red-belt.jpg",
    slug: "tenth-dan-red-belt",
    date: "09 November, 2026",
    author: "Hanshi Dr. S. C. Durai",
    avatar: "assets/img/blog/avator/5.jpg",
    title: "Red Belt 10th Dan: awarded in Okinawa",
    desc: "Our Chief Instructor returns from Okinawa with the Red Belt 10th Dan in Goju-Ryu, conferred by Grand Master Hanshi Dr. Tetsuhiro Hokama — the first Indian to receive the rank directly from the birthplace of karate."
  },
  {
    img: "assets/img/blog/2.jpg",
    date: "11 August, 2026",
    author: "Head Coach",
    avatar: "assets/img/blog/avator/2.jpg",
    title: "Why We Practise Kata Before Kumite",
    desc: "Kata is not a performance. It is the map a fighter follows when a round turns faster than thought."
  },
  {
    img: "assets/img/blog/5.jpg",
    date: "19 July, 2026",
    author: "Chief Instructor",
    avatar: "assets/img/blog/avator/5.jpg",
    title: "Belt Gradings: How We Prepare Our Students",
    desc: "The grading syllabus, the weeks of preparation behind it and the mindset we want every student to carry onto the mat."
  }
];
const aboutStory = {
  image: "assets/img/about/okinawa-kata-gate.jpg",
  imageSrcSet: "assets/img/about/okinawa-kata-gate.jpg 1440w, assets/img/about/okinawa-kata-gate-4k.jpg 2880w",
  tag: "Since 2003",
  title: "A dojo built on the Okinawan way of training",
  lead: "Okinawa Gojukan Karate-Do began with nine students, one wooden floor and a single rule: train properly, or do not train at all.",
  body: "Twenty-three years on, that rule still decides how we teach. Every class opens with a bow, every technique is broken down until it can be repeated a thousand times, and every student is graded on character as firmly as on technique.",
  points: [
    "Karate-Do, Kobudo, Jujitsu and weapons taught in one continuous syllabus",
    "Quarterly belt examinations with an independent visiting examiner",
    "Classes for children from five years old through to active adults",
    "International podiums in Kazakhstan, Uzbekistan, Serbia and India"
  ]
};
const aboutTimeline = [
  {
    year: "2003",
    title: "The first mat",
    text: "The school opens in a rented hall in Yelahanka with nine students and a single black belt instructor."
  },
  {
    year: "2008",
    title: "First grading hall",
    text: "Forty-one students sit the inaugural belt examination. Twenty-eight pass on the day."
  },
  {
    year: "2012",
    title: "The competition squad",
    text: "A graded kumite and kata squad is formed and travels to its first national tournament in Kochi."
  },
  {
    year: "2016",
    title: "Kobudo joins the syllabus",
    text: "Bo staff, sai and tonfa are introduced as a graded discipline of their own."
  },
  {
    year: "2021",
    title: "Little Warriors",
    text: "A dedicated class for children aged five to eleven is designed around play, balance and courtesy."
  },
  {
    year: "2026",
    title: "Nearly 1,200 students",
    text: "The school passes 1,200 students trained across seven branches, with a competition record of twenty national podiums."
  },
  {
    year: "2026",
    title: "Beyond the borders",
    text: "International podiums in Kazakhstan, Uzbekistan and Serbia, and a WKC world championship held in India — the first time the school has stood on a world stage at home."
  }
];
const aboutValues = [
  {
    no: "01",
    title: "Discipline",
    text: "Arriving on time, training hard and stopping only when the coach says so. The habit matters more than the technique."
  },
  {
    no: "02",
    title: "Respect",
    text: "The bow, the greeting and the silence. Training partners are treated as equals, and the mat is treated as sacred."
  },
  {
    no: "03",
    title: "Perseverance",
    text: "Nobody earns a belt in a month. We grade the hours, not the enthusiasm, and the hours always add up."
  },
  {
    no: "04",
    title: "Compassion",
    text: "Students are taught to protect the person in front of them. A technique that cannot be controlled is not a technique."
  }
];
const aboutFacts = [
  { label: "Founded", value: "2003 · Yelahanka, Bangalore" },
  { label: "Students trained", value: "Nearly 1,200 across every branch" },
  { label: "Branches", value: "Seven · across six states" },
  { label: "International podiums", value: "Kazakhstan · Uzbekistan · Serbia · India" },
  { label: "Dojo floor", value: "Two halls · 1,400 sq ft" },
  { label: "Weekly sessions", value: "19 across seven days" },
  { label: "Belt levels", value: "Nine · white to black" },
  { label: "Grading cycle", value: "Quarterly" },
  { label: "Instructors", value: "Four full-time, two visiting" }
];
const aboutBranches = [
  {
    city: "Bangalore",
    place: "Yelahanka, Karnataka",
    note: "Head dojo · two halls on the original mat · opened 2003",
    head: true
  },
  {
    city: "Chennai",
    place: "Tamil Nadu",
    note: "Full syllabus, weekly grading and a working competition squad"
  },
  {
    city: "Durga",
    place: "Delhi",
    note: "Karate-do and kobudo taught to the same grading standard"
  },
  {
    city: "Udhampur",
    place: "Jammu & Kashmir",
    note: "Branch dojo with a dedicated Little Warriors class"
  },
  {
    city: "Maharashtra",
    place: "Across the state",
    note: "District-level branches and an annual state grading camp"
  },
  {
    city: "Goa",
    place: "Across the state",
    note: "Seasonal classes and a coastal kata team"
  },
  {
    city: "Andhra Pradesh",
    place: "Across the state",
    note: "District branches, open-air grading camps in summer"
  }
];
const aboutVoices = [
  {
    img: "assets/img/testimonials/3.jpg",
    name: "Kavya Reddy",
    role: "Software Engineer",
    text: "The instructors bring real defence-force discipline into the room. You feel safe, focused and genuinely well guided."
  },
  {
    img: "assets/img/testimonials/4.jpg",
    name: "Arjun Menon",
    role: "School Teacher",
    text: "A clean, well-organised dojo with a belt system that makes sense. Progress is visible week after week, not just at grading time."
  },
  {
    img: "assets/img/testimonials/5.jpg",
    name: "Deepa Iyer",
    role: "Parent",
    text: "My son learned to listen better, train harder and never give up. That growth means everything to us as a family."
  }
];
const programChapters = [
  {
    no: "01",
    title: "Foundation Track",
    lead: "Kihon, conditioning and the etiquette of the dojo. No belt pressure, no competition, just sound basics.",
    points: ["Weekly kihon and kata class", "Mobility and conditioning work", "Dojo etiquette and safety briefing"]
  },
  {
    no: "02",
    title: "Graded Karate-Do",
    lead: "The full syllabus for students who want to be examined. Belt grading every quarter, kata tested before kumite.",
    points: ["Complete syllabus across eight belts", "Quarterly graded examinations", "Technical correction every session"]
  },
  {
    no: "03",
    title: "Little Warriors",
    lead: "A class built for five to eleven year olds. Short games, simple kata and a great deal of encouragement.",
    points: ["Balance, coordination and listening games", "First three katas taught playfully", "Parent watching area with live viewing"]
  },
  {
    no: "04",
    title: "Competition Squad",
    lead: "For students who want to be tested. Graded kumite, judged kata, and a season on the national circuit.",
    points: ["Weekly squad session plus grading rounds", "Tournament preparation and weight planning", "Traveling to eight national events a year"]
  }
];
const beltLadder = [
  { name: "White", kyu: "9th Kyu", years: "0-3 months", color: "#ffffff", img: "assets/img/belts/white" },
  { name: "Yellow", kyu: "8th Kyu", years: "3-6 months", color: "#f2c200", img: "assets/img/belts/yellow" },
  { name: "Orange", kyu: "7th Kyu", years: "6-10 months", color: "#ef6c00", img: "assets/img/belts/orange" },
  { name: "Green", kyu: "6th Kyu", years: "10-14 months", color: "#0e7a3d", img: "assets/img/belts/green" },
  { name: "Blue", kyu: "5th Kyu", years: "14-20 months", color: "#1d4ed8", img: "assets/img/belts/blue" },
  { name: "Purple", kyu: "4th Kyu", years: "20-26 months", color: "#6d28d9", img: "assets/img/belts/purple" },
  { name: "Brown", kyu: "3rd Kyu", years: "26-34 months", color: "#5a3a22", img: "assets/img/belts/brown" },
  { name: "Black", kyu: "1st Dan", years: "3 years +", color: "#0b0b0b", img: "assets/img/belts/black" }
];
const programEnrol = [
  {
    no: "01",
    title: "Write to us",
    text: "Send your name, age and the class that suits you. We reply the same working day.",
    meta: "5 minutes"
  },
  {
    no: "02",
    title: "Come for a free trial",
    text: "Train for a full session with no fee and no obligation. Bring a white t-shirt and a belt if you have one.",
    meta: "1 session"
  },
  {
    no: "03",
    title: "Choose your track",
    text: "Sit down with the instructor, pick a track and start the grading cycle. The first belt usually comes within a quarter.",
    meta: "Same week"
  }
];
const eventFeature = {
  image: "assets/img/events/feature-championship.jpg",
  tag: "Season opener",
  title: "Spirit of the Dojo — Karate Championship",
  date: "Sat, 22 August 2026 · 10:00 AM",
  venue: "Yelahanka Dojo Hall, Bangalore"
};
const eventLedger = [
  { no: "01", title: "Spirit of the Dojo: Karate Championship", date: "Sat, 22 August 2026", meta: "10:00 AM" },
  { no: "02", title: "Warriors' Way: National Karate Tournament", date: "Sat, 19 September 2026", meta: "11:00 AM" },
  { no: "03", title: "Kick for Glory: Karate Open Cup", date: "Sun, 04 October 2026", meta: "09:00 AM" },
  { no: "04", title: "Samurai Spirit: International Karate Challenge", date: "Sat, 17 October 2026", meta: "10:30 AM" },
  { no: "05", title: "Karate Warriors: Regional Open", date: "Sun, 25 October 2026", meta: "09:00 AM" },
  { no: "06", title: "The Ultimate Dojo Clash", date: "Sat, 07 November 2026", meta: "10:00 AM" },
  { no: "07", title: "Karate Power Cup: Fight for Honor", date: "Sun, 22 November 2026", meta: "09:30 AM" },
  { no: "08", title: "Path of Strength: Karate Masters Event", date: "Sat, 05 December 2026", meta: "11:00 AM" }
];
const eventChambers = [
  { img: "assets/img/events/division-kata.jpg", name: "Kata Division", note: "Judged forms" },
  { img: "assets/img/events/division-kumite.jpg", name: "Kumite Division", note: "Graded rounds" },
  { img: "assets/img/events/division-team.jpg", name: "Team Kata", note: "Four-member" },
  { img: "assets/img/events/division-demo.jpg", name: "Skills Demo", note: "Open display" },
  { img: "assets/img/events/division-awards.jpg", name: "Awards Hall", note: "Prize ceremony" }
];
const eventSessions = [
  {
    img: "assets/img/events/session-kobudo.jpg",
    tag: "New this season",
    title: "Kobudo — Bo Staff Session",
    meta: "Tuesday & Friday · 5:00 PM",
    text: "A new evening session on the traditional weapons. Bo staff and jo are taught from the first step, with free sparring held back until the forms are clean."
  },
  {
    img: "assets/img/events/session-kids.jpg",
    tag: "New batch",
    title: "Kids Karate — Afternoon Session",
    meta: "Monday, Wednesday & Friday · 4:30 PM",
    text: "A fresh afternoon group for children aged five to eleven. Games first, then the first three kihon drills, with parents watching from the side of the mat."
  },
  {
    img: "assets/img/events/session-junior.jpg",
    tag: "New grading cycle",
    title: "Junior Kumite Squad — Evening Training",
    meta: "Monday & Thursday · 6:30 PM",
    text: "Graded sparring for students who hold a belt of green or above, working on distance, timing and the three-step entry. Grading happens at the end of the cycle."
  },
  {
    img: "assets/img/events/session-grading.jpg",
    tag: "Monthly",
    title: "Grading & Belt Ceremony",
    meta: "Last Sunday of the month · 9:00 AM",
    text: "The monthly grading floor. Instructors watch a full kihon set, a kata and a round of kumite before the belt is tied, with family and tea afterwards in the hall."
  }
];
const blogPosts = [
  {
    img: "assets/img/gallery/okinawa-red-belt.jpg",
    slug: "tenth-dan-red-belt",
    date: "09 November, 2026",
    author: "Hanshi Dr. S. C. Durai",
    avatar: "assets/img/blog/avator/5.jpg",
    title: "Red Belt 10th Dan: awarded in Okinawa",
    desc: "Our Chief Instructor returns from Okinawa with the Red Belt 10th Dan in Goju-Ryu, conferred by Grand Master Hanshi Dr. Tetsuhiro Hokama — the first Indian to receive the rank directly from the birthplace of karate."
  },
  {
    img: "assets/img/New images/image 2.jpeg",
    slug: "world-championship-2026",
    date: "02 November, 2026",
    author: "Chief Instructor",
    avatar: "assets/img/blog/avator/5.jpg",
    title: "Three golds in Bengaluru: inside the XVI WKC World Championship",
    desc: "A week of kata, kumite and kobudo at the world championship — and the months of preparation that put the squad on the podium."
  },
  {
    img: "assets/img/New images/image 63.jpeg",
    slug: "kobudo-world-stage",
    date: "24 October, 2026",
    author: "Kobudo Instructor",
    avatar: "assets/img/blog/avator/4.jpg",
    title: "Bo staff and bronze: kobudo on the world stage",
    desc: "The weapons division travelled with the kumite squad this year. What the bo staff team learned from a first world championship."
  },
  {
    img: "assets/img/blog/1.jpg",
    date: "18 August, 2026",
    author: "Dojo Admin",
    avatar: "assets/img/blog/avator/1.jpg",
    title: "Martial Arts: A Journey of Discipline and Self-Discovery",
    desc: "Karate teaches far more than kicks and punches. Discover how steady training shapes focus, patience and self-belief."
  },
  {
    img: "assets/img/blog/2.jpg",
    date: "11 August, 2026",
    author: "Head Coach",
    avatar: "assets/img/blog/avator/2.jpg",
    title: "Why We Practise Kata Before Kumite",
    desc: "Kata is not a performance. It is the map a fighter follows when a round turns faster than thought."
  },
  {
    img: "assets/img/blog/3.jpg",
    date: "04 August, 2026",
    author: "Little Warriors Lead",
    avatar: "assets/img/blog/avator/3.jpg",
    title: "What Children Learn in Their First Karate Class",
    desc: "Balance, courtesy and a short attention span that finally has a purpose. A look inside our kids karate programme."
  },
  {
    img: "assets/img/blog/4.jpg",
    date: "28 July, 2026",
    author: "Fitness Instructor",
    avatar: "assets/img/blog/avator/4.jpg",
    title: "Keeping the Heart at Home While Training",
    desc: "Simple ways to stay active, flexible and motivated between dojo sessions, so your body and mind stay ready."
  },
  {
    img: "assets/img/blog/5.jpg",
    date: "19 July, 2026",
    author: "Chief Instructor",
    avatar: "assets/img/blog/avator/5.jpg",
    title: "Belt Gradings: How We Prepare Our Students",
    desc: "The grading syllabus, the weeks of preparation behind it and the mindset we want every student to carry onto the mat."
  },
  {
    img: "assets/img/blog/6.jpg",
    date: "08 July, 2026",
    author: "Dojo Admin",
    avatar: "assets/img/blog/avator/6.jpg",
    title: "From the First Belt to the Black Belt",
    desc: "From the first belt to the black belt, every student follows a personal path of growth, hard work and quiet confidence."
  }
];
const galleryItems = [
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
  { img: "assets/img/New images/image 1.jpeg", caption: "Team and officials on the tatami at the WKC championship" },
  { img: "assets/img/New images/image 2.jpeg", caption: "Double gold in front of the national flag" },
  { img: "assets/img/New images/image 3.jpeg", caption: "Silver in senior female kumite, XVI WKC World Championship" },
  { img: "assets/img/New images/image 5.jpeg", caption: "Seniors on the podium — gold, silver and bronze" },
  { img: "assets/img/New images/image 6.jpeg", caption: "Medalists with their WKC certificates" },
  { img: "assets/img/New images/image 7.jpeg", caption: "Three golds for the dojo at the XVI WKC" },
  { img: "assets/img/New images/image 8.jpeg", caption: "Centre stage with the tricolour at the WKC ceremony" },
  { img: "assets/img/New images/image 10.jpeg", caption: "A second gold run at the world championship" },
  { img: "assets/img/New images/image 11.jpeg", caption: "Three golds on the tatami" },
  { img: "assets/img/New images/image 12.jpeg", caption: "With the international officials in Bengaluru" },
  { img: "assets/img/New images/image 13.jpeg", caption: "Coaches and the junior team on the competition mat" },
  { img: "assets/img/New images/image 14.jpeg", caption: "Podium finish for the senior girls' kumite" },
  { img: "assets/img/New images/image 15.jpeg", caption: "Two medalists and their coach under the flag" },
  { img: "assets/img/New images/image 16.jpeg", caption: "Medals, brown belt and the bo staff" },
  { img: "assets/img/New images/image 18.jpeg", caption: "The women's squad on podium one" },
  { img: "assets/img/New images/image 19.jpeg", caption: "Gold, silver and bronze across three nations" },
  { img: "assets/img/New images/image 20.jpeg", caption: "Three medals and the flag beneath the WKC crest" },
  { img: "assets/img/New images/image 21.jpeg", caption: "Boys' kata podium with medals and certificates" },
  { img: "assets/img/New images/image 22.jpeg", caption: "Three golds at the XVI WKC, Bengaluru" },
  { img: "assets/img/New images/image 23.jpeg", caption: "Gold for Kazakhstan, silver and bronze for India" },
  { img: "assets/img/New images/image 24.jpeg", caption: "Three medals and the tricolour at the WKC crest" },
  { img: "assets/img/New images/image 25.jpeg", caption: "Champion's walk with the flag and three golds" },
  { img: "assets/img/New images/image 26.jpeg", caption: "Medalists and officials at the WKC/FW ceremony" },
  { img: "assets/img/New images/image 27.jpeg", caption: "Gold and silver in front of the national flag" },
  { img: "assets/img/New images/image 28.jpeg", caption: "Kobudo team kneeling at the ready on the tatami" },
  { img: "assets/img/New images/image 29.jpeg", caption: "Medalists with their World Karate Confederation certificates" },
  { img: "assets/img/New images/image 30.jpeg", caption: "The full dojo squad on stage at the XVI WKC" },
  { img: "assets/img/New images/image 32.jpeg", caption: "The belt ladder on the dojo wall" },
  { img: "assets/img/New images/image 33.jpeg", caption: "Three golds held high with the tricolour" },
  { img: "assets/img/New images/image 34.jpeg", caption: "Junior medalists with certificates and the flag" },
  { img: "assets/img/New images/image 35.jpeg", caption: "A first gold in front of the national flag" },
  { img: "assets/img/New images/image 36.jpeg", caption: "Certificate and gold on the championship stage" },
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
  { img: "assets/img/New images/image 80.jpeg", caption: "The senior instructors lined up in hakama at the dojo" },
  { img: "assets/img/New images/image 81.jpeg", caption: "Gold on podium one with the tricolour at IMGC Uzbekistan" },
  { img: "assets/img/New images/image 82.jpeg", caption: "Champion with the flag at the XV World Championship" },
  { img: "assets/img/New images/image 83.jpeg", caption: "A young gold medalist, her diploma and her coach" },
  { img: "assets/img/New images/image 84.jpeg", caption: "Medalists honoured with garlands at the dojo ceremony" },
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
  { img: "assets/img/New images/image 64.jpeg", caption: "The team with certificates and medals at the WKC ceremony" },
  { img: "assets/img/New images/image 65.jpeg", caption: "Boys' kumite podium — India gold, silver and bronze" },
  { img: "assets/img/New images/image 68.jpeg", caption: "The full championship delegation in front of the WKC backdrop" },
  { img: "assets/img/New images/image 69.jpeg", caption: "Over fifty medalists at the XVI WKC team photograph" },
  { img: "assets/img/New images/image 70.jpeg", caption: "Kumite podium — gold, silver and bronze with certificates" },
  { img: "assets/img/New images/image 71.jpeg", caption: "India silver and Kazakhstan bronze behind the Kyrgyz champion" },
  { img: "assets/img/New images/image 74.jpeg", caption: "Officials at the garlanded portrait of Hanchi Dr. S. Reithinam" },
  { img: "assets/img/New images/image 75.jpeg", caption: "Team photograph with medals and certificates at the XVI WKC" },
  { img: "assets/img/New images/image 76.jpeg", caption: "Girls' kumite podium with certificates and the tricolour" },
  { img: "assets/img/New images/image 77.jpeg", caption: "A medalist presented with her certificate by the officials" },
  { img: "assets/img/about/okinawa-kata-gate-4k.jpg", caption: "Karateka performing kata in front of a traditional red temple" },
  { img: "assets/img/New images/image 79.jpeg", caption: "Officials and competitors at the WKC Asian Karate Championship" },
  { img: "assets/img/New images/image 91.jpeg", caption: "The team with the trophy and officials at the Asian Karate Championship" },
  { img: "assets/img/New images/image 92.jpeg", caption: "The full squad in blazers at the dojo award ceremony" }
];
const contactHours = [
  { label: "Monday – Friday · Morning", value: "7:30 AM – 9:30 AM" },
  { label: "Monday – Friday · Evening", value: "6:00 PM – 7:30 PM" },
  { label: "Monday – Friday · Late evening", value: "7:30 PM – 9:30 PM" },
  { label: "Saturday", value: "7:00 AM – 12:00 PM" },
  { label: "Sunday", value: "6:00 AM – 11:00 AM" },
  { label: "Public holidays", value: "Kata clinic only" }
];
const contactInfo = [
  { icon: "ph ph-map-pin-area", label: "Dojo", value: dojo.address, href: "" },
  { icon: "ph ph-headphones", label: "Call", value: `${dojo.phone} · ${dojo.phone2}`, href: `tel:${dojo.phone}` },
  { icon: "ph ph-envelope-simple", label: "Email", value: dojo.email, href: `mailto:${dojo.email}` },
  { icon: "ph ph-whatsapp-logo", label: "WhatsApp", value: "Message the dojo", href: dojo.whatsapp }
];
const LanguageContext = createContext({
  lang: "en",
  activeLang: "en",
  ready: true,
  setLang: () => {
  },
  t: (text) => text
});
const useLang = () => useContext(LanguageContext);
const LanguageMenu = () => {
  const { lang, setLang: change } = useLang();
  const [open, setOpen] = useState(false);
  const current = LANGUAGES.find((item) => item.code === lang) ?? LANGUAGES[0];
  return /* @__PURE__ */ jsxs(
    "li",
    {
      className: `has-child-items lang-menu${open ? " open" : ""}`,
      onMouseEnter: () => setOpen(true),
      onMouseLeave: () => setOpen(false),
      children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "nav-dropdown-btn lang-menu__btn",
            onClick: () => setOpen((prev) => !prev),
            "aria-expanded": open,
            "aria-haspopup": "true",
            "aria-label": "Choose language",
            children: [
              /* @__PURE__ */ jsx("i", { className: "ph ph-globe", "aria-hidden": "true" }),
              /* @__PURE__ */ jsx("span", { className: "lang-menu__current", lang: current.code, children: createElement("span", null, current.native) }),
              /* @__PURE__ */ jsx("i", { className: "fa-solid fa-chevron-down", "aria-hidden": "true" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("ul", { className: "sub-menu lang-menu__list", children: LANGUAGES.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: `lang-menu__option${item.code === lang ? " is-active" : ""}`,
            lang: item.code,
            onClick: () => {
              change(item.code);
              setOpen(false);
            },
            children: [
              /* @__PURE__ */ jsx("span", { className: "lang-menu__native", children: createElement("span", null, item.native) }),
              /* @__PURE__ */ jsx("span", { className: "lang-menu__en", children: createElement("span", null, item.english) })
            ]
          }
        ) }, item.code)) })
      ]
    }
  );
};
const navItems$1 = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Events", to: "/events" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" }
];
const detailItems$1 = [
  { label: "Program Details", to: "/program-details" },
  { label: "Event Details", to: "/event-details" },
  { label: "Blog Details", to: "/blog-details" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Support", to: "/support" }
];
const MobileOffcanvas = ({ isOpen, toggleOffcanvas }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { pathname } = useLocation();
  const toggleDropdown = () => setOpenDropdown((prev) => !prev);
  useEffect(() => {
    setOpenDropdown(false);
  }, [pathname]);
  useEffect(() => {
    document.body.classList.toggle("offcanvas-open", isOpen);
    return () => document.body.classList.remove("offcanvas-open");
  }, [isOpen]);
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") toggleOffcanvas();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, toggleOffcanvas]);
  const isActive = (to) => to === "/" ? pathname === "/" : pathname.startsWith(to);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "fix-area", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: `offcanvas__info ${isOpen ? "info-open" : ""}`,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Mobile navigation menu",
        "aria-hidden": !isOpen,
        children: /* @__PURE__ */ jsx("div", { className: "offcanvas__wrapper", children: /* @__PURE__ */ jsxs("div", { className: "offcanvas__content", children: [
          /* @__PURE__ */ jsxs("div", { className: "offcanvas__top d-flex justify-content-between align-items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "offcanvas__logo", children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "brand_link", onClick: toggleOffcanvas, children: [
              /* @__PURE__ */ jsx("span", { className: "brand_badge", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: "assets/img/okg-logo.png",
                  alt: "Okinawa Gojukan Karate-Do emblem"
                }
              ) }),
              /* @__PURE__ */ jsxs("span", { className: "brand_text", children: [
                /* @__PURE__ */ jsx("span", { className: "brand_kn", children: "ಒಕಿನಾವಾ ಗೋಜುಕನ್ ಕರಾಟೆ-ತರಬೇತಿ ಶಾಲೆ" }),
                /* @__PURE__ */ jsxs("span", { className: "brand_en", children: [
                  "Okinawa ",
                  /* @__PURE__ */ jsx("b", { children: "Gojukan Karate-Do" }),
                  " Training School"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "offcanvas__close", children: /* @__PURE__ */ jsx("button", { onClick: toggleOffcanvas, "aria-label": "Close navigation menu", children: /* @__PURE__ */ jsx("i", { className: "fas fa-times" }) }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mobile-menu fix mb-3", children: /* @__PURE__ */ jsxs("ul", { children: [
            navItems$1.map((item, index) => /* @__PURE__ */ jsx(
              "li",
              {
                className: isActive(item.to) ? "active" : "",
                style: { transitionDelay: `${0.05 + index * 0.05}s` },
                children: /* @__PURE__ */ jsx(Link, { to: item.to, onClick: toggleOffcanvas, children: item.label })
              },
              item.to
            )),
            /* @__PURE__ */ jsxs("li", { className: "has-child-items", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  className: "dropdown-toggle-btn",
                  onClick: toggleDropdown,
                  "aria-expanded": openDropdown,
                  children: [
                    "More ",
                    /* @__PURE__ */ jsx("i", { className: "fa-solid fa-chevron-down" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "ul",
                {
                  className: "sub-menu",
                  style: {
                    display: openDropdown ? "block" : "none"
                  },
                  children: detailItems$1.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: item.to, onClick: toggleOffcanvas, children: item.label }) }, item.to))
                }
              )
            ] }),
            /* @__PURE__ */ jsx(LanguageMenu, {})
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "offcanvas__contact", children: [
            /* @__PURE__ */ jsxs("a", { href: `tel:+91${dojo.phone}`, className: "offcanvas__phone", children: [
              /* @__PURE__ */ jsx("i", { className: "ph ph-phone-call" }),
              " +91 ",
              dojo.phone
            ] }),
            /* @__PURE__ */ jsxs("a", { href: `mailto:${dojo.email}`, className: "offcanvas__mail", children: [
              /* @__PURE__ */ jsx("i", { className: "ph ph-envelope-simple" }),
              " ",
              dojo.email
            ] })
          ] })
        ] }) })
      }
    ) }),
    isOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: "offcanvas__overlay overlay-open",
        onClick: toggleOffcanvas,
        "aria-hidden": "true"
      }
    )
  ] });
};
const MobileOffcanvas$1 = memo(MobileOffcanvas);
const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Events", to: "/events" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" }
];
const detailItems = [
  { label: "Program Details", to: "/program-details" },
  { label: "Event Details", to: "/event-details" },
  { label: "Blog Details", to: "/blog-details" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Support", to: "/support" }
];
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 1e-3
  });
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "scroll-progress",
      style: { scaleX },
      "aria-hidden": "true"
    }
  );
};
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { pathname } = useLocation();
  const toggleOffcanvas = () => setIsOpen((prev) => !prev);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.pageYOffset > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setDropdownOpen(false);
    setIsOpen(false);
  }, [pathname]);
  const isActive = (to) => to === "/" ? pathname === "/" : pathname.startsWith(to);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("a", { className: "skip-link", href: "#main", children: "Skip to content" }),
    /* @__PURE__ */ jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsx(MobileOffcanvas$1, { isOpen, toggleOffcanvas }),
    /* @__PURE__ */ jsx(
      "header",
      {
        id: "mar_header",
        className: `navbar position-absolute top-0 start-0 w-100 z-3 ${scrolled ? "scrolled" : ""}`,
        children: /* @__PURE__ */ jsxs("div", { className: "container d-flex align-items-center justify-content-between", children: [
          /* @__PURE__ */ jsx("div", { className: "site_logo d-inline-block my-auto", children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "brand_link", "aria-label": "Okinawa Gojukan Karate-Do home", children: [
            /* @__PURE__ */ jsx("span", { className: "brand_badge", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "assets/img/okg-logo.png",
                alt: "Okinawa Gojukan Karate-Do emblem"
              }
            ) }),
            /* @__PURE__ */ jsxs("span", { className: "brand_text", children: [
              /* @__PURE__ */ jsx("span", { className: "brand_kn", children: "ಒಕಿನಾವಾ ಗೋಜುಕನ್ ಕರಾಟೆ-ತರಬೇತಿ ಶಾಲೆ" }),
              /* @__PURE__ */ jsxs("span", { className: "brand_en", children: [
                "Okinawa ",
                /* @__PURE__ */ jsx("b", { children: "Gojukan Karate-Do" }),
                " Training School"
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("nav", { className: "main-menu align-self-center", children: /* @__PURE__ */ jsxs("ul", { children: [
            navItems.map((item) => /* @__PURE__ */ jsx(
              "li",
              {
                className: isActive(item.to) ? "active" : "",
                children: /* @__PURE__ */ jsx(Link, { to: item.to, children: item.label })
              },
              item.to
            )),
            /* @__PURE__ */ jsxs(
              "li",
              {
                className: `has-child-items ${dropdownOpen ? "open" : ""}`,
                onMouseEnter: () => setDropdownOpen(true),
                onMouseLeave: () => setDropdownOpen(false),
                children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      type: "button",
                      className: "nav-dropdown-btn",
                      onClick: () => setDropdownOpen((prev) => !prev),
                      "aria-expanded": dropdownOpen,
                      children: [
                        "More ",
                        /* @__PURE__ */ jsx("i", { className: "fa-solid fa-chevron-down" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx("ul", { className: "sub-menu", children: detailItems.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: item.to, children: item.label }) }, item.to)) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(LanguageMenu, {})
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "header__hamburger d-xl-none my-auto", children: /* @__PURE__ */ jsx(
            "button",
            {
              className: "sidebar__toggle",
              onClick: toggleOffcanvas,
              "aria-label": "Open navigation menu",
              "aria-expanded": isOpen,
              children: /* @__PURE__ */ jsx("i", { className: "ph ph-list" })
            }
          ) })
        ] })
      }
    )
  ] });
};
const Header$1 = memo(Header);
const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("error");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("success");
    setMessage("Thank you for subscribing.");
    setEmail("");
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: custom * 0.2 }
    })
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    motion.footer,
    {
      className: "mar_footer",
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxs("div", { className: "row mb-4 g-4", children: [
            /* @__PURE__ */ jsx(motion.div, { className: "col-lg-3 col-md-4 col-12", custom: 0, variants: fadeUp, children: /* @__PURE__ */ jsxs("div", { className: "footer_about mb-md-0 mb-5", children: [
              /* @__PURE__ */ jsxs(Link, { to: "/", className: "brand_link brand--lg mb-3", children: [
                /* @__PURE__ */ jsx("span", { className: "brand_badge", children: /* @__PURE__ */ jsx("img", { src: "assets/img/okg-logo.png", alt: "Okinawa Gojukan Karate-Do emblem" }) }),
                /* @__PURE__ */ jsx("span", { className: "brand_text", children: "Okinawa Gojukan Karate-Do Training School" })
              ] }),
              /* @__PURE__ */ jsx("p", { children: "Trained Indian Defence services (Army, Navy, Airforce) and Para & NSG Cammandos" }),
              /* @__PURE__ */ jsx("span", { children: "Connect with us" }),
              /* @__PURE__ */ jsxs("ul", { className: "social_link", children: [
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com", target: "_blank", rel: "noreferrer", "aria-label": "Facebook", children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-facebook-f" }) }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com", target: "_blank", rel: "noreferrer", "aria-label": "Instagram", children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-instagram" }) }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.youtube.com", target: "_blank", rel: "noreferrer", "aria-label": "YouTube", children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-youtube" }) }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://wa.me/918971895922", target: "_blank", rel: "noreferrer", "aria-label": "WhatsApp", children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-whatsapp" }) }) })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(motion.div, { className: "col-xl-3 col-lg-4 col-md-6 col-12", custom: 1, variants: fadeUp, children: /* @__PURE__ */ jsxs("div", { className: "footer_widget", children: [
              /* @__PURE__ */ jsx("h3", { className: "footer-title", children: "Explore" }),
              /* @__PURE__ */ jsxs("ul", { children: [
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", children: "About Us" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/gallery", children: "Gallery" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/programs", children: "Our Programs" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/events", children: "Events" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/blog", children: "Blog" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Contact" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/support", children: "Support" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/privacy-policy", children: "Privacy Policy" }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/terms", children: "Terms & Conditions" }) })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(motion.div, { className: "col-xl-3 col-lg-4 col-md-6 col-12", custom: 2, variants: fadeUp, children: /* @__PURE__ */ jsxs("div", { className: "footer_widget", children: [
              /* @__PURE__ */ jsx("h3", { className: "footer-title", children: "Quick Contact" }),
              /* @__PURE__ */ jsxs("div", { className: "footer_contact", children: [
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("i", { className: "ph ph-map-pin-area" }),
                  /* @__PURE__ */ jsx("span", { children: dojo.address })
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("i", { className: "ph ph-phone-call" }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    /* @__PURE__ */ jsx("a", { href: `tel:${dojo.phone}`, children: dojo.phone }),
                    " / ",
                    /* @__PURE__ */ jsx("a", { href: `tel:${dojo.phone2}`, children: dojo.phone2 })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("i", { className: "ph ph-envelope-simple" }),
                  /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("a", { href: `mailto:${dojo.email}`, children: dojo.email }) })
                ] })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "footer-title mt-4", children: "Our Branches" }),
              /* @__PURE__ */ jsx("ul", { className: "footer_branches", children: aboutBranches.map((branch) => /* @__PURE__ */ jsxs(
                "li",
                {
                  className: branch.head ? "footer_branches--head" : void 0,
                  children: [
                    /* @__PURE__ */ jsx("b", { children: branch.city }),
                    /* @__PURE__ */ jsx("span", { children: branch.head ? "Yelahanka, Bangalore" : branch.place })
                  ]
                },
                branch.city
              )) })
            ] }) }),
            /* @__PURE__ */ jsx(motion.div, { className: "col-xl-3 col-lg-4 col-md-6 col-12", custom: 3, variants: fadeUp, children: /* @__PURE__ */ jsxs("div", { className: "footer_widget", children: [
              /* @__PURE__ */ jsx("h3", { className: "footer-title", children: "Subscribe To Newsletter" }),
              /* @__PURE__ */ jsxs("div", { id: "newsletter_form", children: [
                /* @__PURE__ */ jsxs("form", { className: "newsletter_form", onSubmit: handleSubmit, children: [
                  /* @__PURE__ */ jsx("label", { className: "visually-hidden", htmlFor: "newsletter-email", children: "Email address" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "newsletter-email",
                      type: "email",
                      name: "email",
                      value: email,
                      onChange: (e) => setEmail(e.target.value),
                      placeholder: "Enter Email Address",
                      required: true
                    }
                  ),
                  /* @__PURE__ */ jsx("button", { type: "submit", children: "Subscribe Now" })
                ] }),
                message && /* @__PURE__ */ jsx(
                  "div",
                  {
                    id: "form-messages",
                    className: status === "success" ? "form-success mt-3" : "form-error mt-3",
                    role: "status",
                    children: message
                  }
                )
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx(motion.div, { className: "row", custom: 4, variants: fadeUp, children: /* @__PURE__ */ jsxs("div", { className: "col-12", children: [
            /* @__PURE__ */ jsx("div", { className: "divider dwhite mb-4" }),
            /* @__PURE__ */ jsx("div", { className: "mar_copyright text-center", children: /* @__PURE__ */ jsxs("p", { children: [
              "Copyright © ",
              (/* @__PURE__ */ new Date()).getFullYear(),
              " ",
              /* @__PURE__ */ jsx(Link, { to: "/", children: "Okinawa Gojukan Karate-Do Training School" }),
              ". All Rights Reserved."
            ] }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("img", { src: "assets/img/shapes/stars.svg", alt: "", "aria-hidden": "true", className: "footer_stars position-absolute" }),
        /* @__PURE__ */ jsx("img", { src: "assets/img/shapes/fdots.svg", alt: "", "aria-hidden": "true", className: "footer_fdots position-absolute" }),
        /* @__PURE__ */ jsx("img", { src: "assets/img/shapes/fcircle.svg", alt: "", "aria-hidden": "true", className: "footer_fcircle position-absolute" }),
        /* @__PURE__ */ jsx("img", { src: "assets/img/shapes/arrowsup.svg", alt: "", "aria-hidden": "true", className: "footer_arrowsup position-absolute" })
      ]
    }
  ) });
};
const Footer$1 = memo(Footer);
const MasterFigure = memo(
  ({ className = "" }) => /* @__PURE__ */ jsx("figure", { className: `h3d__master ${className}`, children: /* @__PURE__ */ jsxs("div", { className: "h3d__master-frame", children: [
    /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "h3d__master-img",
        src: "assets/img/banner/master.jpeg",
        alt: "The chief instructor of Okinawa Gojukan Karate-Do receiving his instructor certificate from the IKO grand master in Okinawa",
        width: 1200,
        height: 1600,
        loading: "eager",
        decoding: "async"
      }
    ) }),
    /* @__PURE__ */ jsx("span", { className: "h3d__master-grade", "aria-hidden": "true" }),
    /* @__PURE__ */ jsx("span", { className: "h3d__master-vignette", "aria-hidden": "true" }),
    /* @__PURE__ */ jsx("span", { className: "h3d__master-sweep", "aria-hidden": "true" })
  ] }) })
);
MasterFigure.displayName = "MasterFigure";
const HERO_REEL = [
  {
    src: "assets/img/banner/master.jpeg",
    alt: "The chief instructor of Okinawa Gojukan Karate-Do receiving his instructor certificate from the IKO grand master in Okinawa",
    w: 1200,
    h: 1600,
    position: "50% 50%"
  },
  {
    src: "assets/img/New images/home1.jpeg",
    alt: "Gojukan Karate-Do wall artwork inside the Yelahanka dojo",
    w: 1086,
    h: 1448,
    position: "50% 45%"
  },
  {
    src: "assets/img/New images/image 15.jpeg",
    alt: "A medalist with the national flag at the World Karate Championship",
    w: 1200,
    h: 1600,
    position: "50% 40%"
  },
  {
    src: "assets/img/New images/image 83.jpeg",
    alt: "A young gold medalist with her diploma and coach in front of the national flag",
    w: 3024,
    h: 4032,
    position: "50% 35%"
  },
  {
    src: "assets/img/New images/image 12.jpeg",
    alt: "Dojo representatives with the championship officials",
    w: 1200,
    h: 1600,
    position: "50% 45%"
  }
];
const REEL_INTERVAL = 5200;
const HeroReel = memo(
  ({ items = HERO_REEL }) => {
    const [index, setIndex] = useState(0);
    const reduce = useReducedMotion();
    useEffect(() => {
      if (reduce) return;
      if (items.length < 2) return;
      const id = window.setInterval(() => {
        setIndex((current) => (current + 1) % items.length);
      }, REEL_INTERVAL);
      return () => window.clearInterval(id);
    }, [items.length, reduce]);
    return /* @__PURE__ */ jsxs("figure", { className: "h3d__master h3d__reel", children: [
      /* @__PURE__ */ jsxs("div", { className: "h3d__master-frame", children: [
        items.map((item, position) => /* @__PURE__ */ jsx(
          "img",
          {
            className: `h3d__master-img h3d__reel__slide${position === index ? " is-active" : ""}`,
            src: item.src,
            alt: position === index ? item.alt : "",
            width: item.w,
            height: item.h,
            style: { objectPosition: item.position ?? "50% 50%" },
            loading: position === 0 ? "eager" : "lazy",
            decoding: "async",
            "aria-hidden": position === index ? void 0 : true
          },
          item.src
        )),
        /* @__PURE__ */ jsx("span", { className: "h3d__master-grade", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("span", { className: "h3d__master-vignette", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("span", { className: "h3d__master-sweep", "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "h3d__reel__dots", role: "tablist", "aria-label": "Hero photographs", children: items.map((item, position) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          role: "tab",
          className: `h3d__reel__dot${position === index ? " is-active" : ""}`,
          "aria-selected": position === index,
          "aria-label": item.alt,
          onClick: () => setIndex(position)
        },
        item.src
      )) })
    ] });
  }
);
HeroReel.displayName = "HeroReel";
const Particle = memo(
  ({ left, top, size, tone, delay, duration, opacity = 0.8 }) => /* @__PURE__ */ jsx(
    "span",
    {
      className: `h3d__particle h3d__particle--${tone}`,
      style: {
        left: `${left}%`,
        top: `${top}%`,
        width: size,
        height: size,
        opacity,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      },
      "aria-hidden": "true"
    }
  )
);
Particle.displayName = "Particle";
const TITLE_LINES = [
  [
    { t: "Train the", red: false },
    { t: "body", red: true },
    { t: ".", red: false }
  ],
  [
    { t: "build the", red: false },
    { t: "character", red: true },
    { t: ".", red: false }
  ]
];
const lede = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  "Our Chief Instructor,",
  " ",
  /* @__PURE__ */ jsx("em", { children: "Hanshi Dr. S. C. Durai, 10th Dan" }),
  ", was awarded the",
  " ",
  /* @__PURE__ */ jsx("em", { children: "Red Belt" }),
  " in Goju-Ryu at Okinawa, Japan — conferred by Grand Master Hanshi Dr. Tetsuhiro Hokama, and the first Indian to receive the rank directly from the birthplace of karate. Okinawan karate-do taught to the standards of the Indian defence services — Army, Navy, Airforce, Para and NSG Commandos."
] });
const FACTS = [
  { value: 2003, label: "Dojo founded" },
  { value: 9, label: "Belt levels" },
  { value: 19, label: "Weekly sessions" }
];
const PARTICLES = [
  { left: 6, top: 22, size: 6, tone: "red", delay: 0, duration: 9 },
  { left: 14, top: 68, size: 4, tone: "white", delay: 1.2, duration: 11 },
  { left: 24, top: 12, size: 3, tone: "white", delay: 2.4, duration: 8 },
  { left: 33, top: 82, size: 5, tone: "red", delay: 0.6, duration: 10 },
  { left: 42, top: 34, size: 3, tone: "white", delay: 3.1, duration: 12 },
  { left: 52, top: 8, size: 4, tone: "red", delay: 1.8, duration: 9.5 },
  { left: 61, top: 74, size: 5, tone: "white", delay: 2.1, duration: 10.5 },
  { left: 70, top: 28, size: 3, tone: "red", delay: 4.2, duration: 8.5 },
  { left: 78, top: 58, size: 6, tone: "red", delay: 0.9, duration: 11.5 },
  { left: 87, top: 18, size: 4, tone: "white", delay: 1.5, duration: 9.8 },
  { left: 92, top: 76, size: 3, tone: "white", delay: 3.6, duration: 12.5 },
  { left: 46, top: 52, size: 3, tone: "red", delay: 5, duration: 10 },
  { left: 66, top: 90, size: 4, tone: "red", delay: 2.7, duration: 9.2 },
  { left: 8, top: 46, size: 3, tone: "white", delay: 4.6, duration: 11.2 }
];
const useCountUp = (target, duration = 1.5, delay = 0) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frame = 0;
    let started = false;
    const run = () => {
      if (started) return;
      started = true;
      const origin = performance.now() + delay * 1e3;
      const tick = (now) => {
        const progress = Math.min(
          1,
          Math.max(0, (now - origin) / (duration * 1e3))
        );
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration, delay]);
  return { ref, value };
};
const Fact = memo(
  ({ value, label, index }) => {
    const { ref, value: shown } = useCountUp(value, 1.5, index * 0.16);
    return /* @__PURE__ */ jsxs("div", { className: "h3d__fact", children: [
      /* @__PURE__ */ jsx("b", { ref, children: shown }),
      /* @__PURE__ */ jsx("span", { children: label })
    ] });
  }
);
Fact.displayName = "Fact";
const Hero3D = () => {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const softX = useSpring(pointerX, { stiffness: 55, damping: 18, mass: 0.7 });
  const softY = useSpring(pointerY, { stiffness: 55, damping: 18, mass: 0.7 });
  const fighterX = useTransform(softX, [-1, 1], [34, -34]);
  const fighterY = useTransform(softY, [-1, 1], [22, -22]);
  const copyX = useTransform(softX, [-1, 1], [14, -14]);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const titleScroll = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const stageScroll = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const handlePointer = (event) => {
    if (reduce) return;
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width * 2 - 1);
    pointerY.set((event.clientY - rect.top) / rect.height * 2 - 1);
  };
  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "h3d",
      ref: sectionRef,
      onPointerMove: handlePointer,
      onPointerLeave: resetPointer,
      children: [
        /* @__PURE__ */ jsx("div", { className: "h3d__tex", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("div", { className: "h3d__panels", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("div", { className: "h3d__veil", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("div", { className: "h3d__scan", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxs("div", { className: "h3d__grid", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "h3d__copy",
              style: { x: copyX },
              children: [
                /* @__PURE__ */ jsxs(
                  motion.span,
                  {
                    className: "h3d__eyebrow",
                    initial: { opacity: 0, y: 16 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.7, delay: 0.05 },
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "h3d__eyebrow-dot" }),
                      "Yelahanka · Bangalore · since 2003"
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.h1,
                  {
                    className: "h3d__title",
                    style: { y: titleScroll },
                    children: TITLE_LINES.map((line, lineIndex) => /* @__PURE__ */ jsx("span", { className: "h3d__title-line", children: line.map((word, wordIndex) => /* @__PURE__ */ jsx(
                      motion.span,
                      {
                        className: `h3d__word${word.red ? " h3d__word--red" : ""}`,
                        initial: { opacity: 0, y: 60 },
                        animate: { opacity: 1, y: 0 },
                        transition: {
                          duration: 0.8,
                          delay: 0.1 + (lineIndex * 3 + wordIndex) * 0.1,
                          ease: [0.16, 1, 0.3, 1]
                        },
                        children: word.t
                      },
                      `${lineIndex}-${word.t}-${wordIndex}`
                    )) }, lineIndex))
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.p,
                  {
                    className: "h3d__lede",
                    initial: { opacity: 0, y: 24 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
                    children: lede()
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "h3d__cta",
                    initial: { opacity: 0, scale: 0.92 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] },
                    children: [
                      /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "h3d__btn h3d__btn--primary", children: [
                        "Book a free trial",
                        /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
                      ] }),
                      /* @__PURE__ */ jsx(Link, { to: "/programs", className: "h3d__btn h3d__btn--ghost", children: "See the syllabus" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "h3d__facts",
                    initial: { opacity: 0, y: 22 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] },
                    children: FACTS.map((fact, index) => /* @__PURE__ */ jsx(
                      Fact,
                      {
                        value: fact.value,
                        label: fact.label,
                        index
                      },
                      fact.label
                    ))
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "h3d__stage", children: [
            /* @__PURE__ */ jsx("div", { className: "h3d__glow", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "h3d__fighter-scroll",
                style: { y: stageScroll },
                children: /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "h3d__fighter-enter",
                    initial: { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
                    animate: { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" },
                    transition: { duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
                    children: /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "h3d__fighter",
                        initial: { scale: 1.14 },
                        animate: { scale: 1 },
                        style: { x: fighterX, y: fighterY },
                        transition: { duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
                        children: /* @__PURE__ */ jsx(HeroReel, {})
                      }
                    )
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "h3d__dust", "aria-hidden": "true", children: PARTICLES.map((particle, index) => /* @__PURE__ */ jsx(Particle, { ...particle }, index)) })
          ] })
        ] })
      ]
    }
  );
};
const Hero3D$1 = memo(Hero3D);
const ease$1 = [0.16, 1, 0.3, 1];
const SecHead = memo(
  ({ index, kicker, title, lede: lede2, action, align = "split" }) => /* @__PURE__ */ jsxs("div", { className: "sec-head", children: [
    /* @__PURE__ */ jsxs("div", { className: "sec-head__bar", children: [
      index && /* @__PURE__ */ jsx("span", { className: "sec-head__index", children: index }),
      /* @__PURE__ */ jsx("span", { className: "sec-head__kicker", children: kicker }),
      /* @__PURE__ */ jsx("span", { className: "spacer" }),
      action
    ] }),
    align === "split" && lede2 ? /* @__PURE__ */ jsxs("div", { className: "sec-head__row", children: [
      /* @__PURE__ */ jsx("h2", { className: "sec-head__title", children: title }),
      /* @__PURE__ */ jsx("p", { className: "sec-head__lede", children: lede2 })
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h2", { className: "sec-head__title", children: title }),
      lede2 && /* @__PURE__ */ jsx("p", { className: "sec-head__lede mt-3", children: lede2 })
    ] })
  ] })
);
SecHead.displayName = "SecHead";
const Split = memo(
  ({
    image,
    alt,
    tag,
    title,
    lead,
    body,
    points = [],
    flip = false,
    cta,
    aspect,
    srcSet,
    sizes
  }) => /* @__PURE__ */ jsxs("div", { className: `split ${flip ? "split--flip" : ""}`, children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: `split__media${aspect ? " split__media--ratio" : ""}`,
        style: aspect ? { aspectRatio: aspect } : void 0,
        initial: { opacity: 0, y: 34 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.8, ease: ease$1 },
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: image,
              alt,
              loading: "lazy",
              srcSet,
              sizes
            }
          ),
          tag && /* @__PURE__ */ jsx("span", { className: "split__tag", children: tag })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "split__body",
        initial: { opacity: 0, y: 34 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.8, delay: 0.12, ease: ease$1 },
        children: [
          /* @__PURE__ */ jsx("h3", { className: "split__title", children: title }),
          lead && /* @__PURE__ */ jsx("p", { className: "fs-5 fw-semibold", children: lead }),
          body && /* @__PURE__ */ jsx("p", { children: body }),
          points.length > 0 && /* @__PURE__ */ jsx("ul", { className: "split__list", children: points.map((point) => /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("i", { className: "fa-solid fa-check" }),
            /* @__PURE__ */ jsx("span", { children: point })
          ] }, point)) }),
          cta && /* @__PURE__ */ jsxs(Link, { to: cta.to, className: "arrow-link mt-4", children: [
            cta.label,
            " ",
            /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
          ] })
        ]
      }
    )
  ] })
);
Split.displayName = "Split";
const Ledger = memo(({ items, to }) => /* @__PURE__ */ jsx("div", { className: "ledger", children: items.map((item) => {
  const inner = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("span", { className: "ledger__num", children: item.no }),
    /* @__PURE__ */ jsx("h3", { children: item.title }),
    /* @__PURE__ */ jsx("p", { children: item.text }),
    item.meta && /* @__PURE__ */ jsx("span", { className: "ledger__meta", children: item.meta }),
    /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-up-right" })
  ] });
  return item.to ? /* @__PURE__ */ jsx(Link, { to: item.to, className: "ledger__row", children: inner }, item.no) : /* @__PURE__ */ jsx("div", { className: "ledger__row", children: inner }, item.no);
}) }));
Ledger.displayName = "Ledger";
const Band = memo(
  ({ index, image, kicker, title, text, stats = [], action }) => /* @__PURE__ */ jsxs("section", { className: "band", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "band__bg",
        style: { backgroundImage: `url(${image})` },
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "container band__inner", children: [
      /* @__PURE__ */ jsxs("div", { className: "band__body", children: [
        /* @__PURE__ */ jsx("span", { className: "band__kicker", children: index ? `${index} — ${kicker}` : kicker }),
        /* @__PURE__ */ jsx("h2", { children: title }),
        /* @__PURE__ */ jsx("p", { children: text }),
        action && /* @__PURE__ */ jsxs(Link, { to: action.to, className: "btn-solid mt-4", children: [
          action.label,
          " ",
          /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
        ] })
      ] }),
      stats.length > 0 && /* @__PURE__ */ jsx("ul", { className: "band__stats", children: stats.map((stat) => /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("b", { children: stat.value }),
        /* @__PURE__ */ jsx("span", { children: stat.label })
      ] }, stat.label)) })
    ] })
  ] })
);
Band.displayName = "Band";
const Masthead = memo(
  ({
    index,
    kicker,
    title,
    lede: lede2,
    background,
    plain = false,
    crumbs = []
  }) => /* @__PURE__ */ jsxs("section", { className: `masthead ${plain ? "masthead--plain" : ""}`, children: [
    !plain && background && /* @__PURE__ */ jsx(
      "div",
      {
        className: "masthead__bg",
        style: { backgroundImage: `url(${background})` },
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "container masthead__inner", children: [
      /* @__PURE__ */ jsxs("nav", { className: "masthead__crumbs", "aria-label": "Breadcrumb", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", children: "Home" }),
        /* @__PURE__ */ jsx("i", { className: "fa-solid fa-chevron-right" }),
        /* @__PURE__ */ jsx("span", { children: crumbs[0]?.label ?? title })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "masthead__row", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "masthead__index",
              initial: { opacity: 0, y: 14 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.1 },
              children: [
                index,
                " — ",
                kicker
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.h1,
            {
              className: `masthead__title${title.length >= 42 ? " masthead__title--xs" : title.length >= 32 ? " masthead__title--long" : ""}`,
              initial: { opacity: 0, y: 26 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.85, delay: 0.16, ease: ease$1 },
              children: title
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            className: "masthead__lede",
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.85, delay: 0.3, ease: ease$1 },
            children: lede2
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "masthead__rule" })
    ] })
  ] })
);
Masthead.displayName = "Masthead";
const Closing = memo(
  ({ kicker = "Next step", title, text, primary, secondary }) => /* @__PURE__ */ jsx("section", { className: "closing", children: /* @__PURE__ */ jsxs("div", { className: "container closing__inner", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "band__kicker", children: kicker }),
      /* @__PURE__ */ jsx("h2", { children: title }),
      /* @__PURE__ */ jsx("p", { children: text })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "closing__actions", children: [
      /* @__PURE__ */ jsxs(Link, { to: primary.to, className: "btn-solid", children: [
        primary.label,
        " ",
        /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
      ] }),
      secondary && /* @__PURE__ */ jsx(Link, { to: secondary.to, className: "btn-ghost", children: secondary.label })
    ] })
  ] }) })
);
Closing.displayName = "Closing";
const indiaRegions = [
  { name: "Andaman and Nicobar", rings: [[[0.8374, 0.9877], [0.8405, 0.9951], [0.8368, 1.0027], [0.8315, 0.9912], [0.8374, 0.9877]], [[0.8333, 0.9814], [0.8346, 0.984], [0.8313, 0.9876], [0.8308, 0.9837], [0.8333, 0.9814]], [[0.8231, 0.9635], [0.8256, 0.9682], [0.8212, 0.9663], [0.8231, 0.9635]], [[0.8282, 0.9634], [0.8292, 0.9665], [0.827, 0.9647], [0.8282, 0.9634]], [[0.8292, 0.9604], [0.8296, 0.9631], [0.8292, 0.9604]], [[0.8276, 0.9571], [0.8268, 0.9644], [0.8254, 0.9589], [0.8276, 0.9571]], [[0.8154, 0.9533], [0.8176, 0.9583], [0.8142, 0.956], [0.8154, 0.9533]], [[0.8303, 0.9466], [0.8305, 0.9513], [0.8303, 0.9466]], [[0.805, 0.9258], [0.8063, 0.9291], [0.8033, 0.9295], [0.805, 0.9258]], [[0.7967, 0.8745], [0.7989, 0.8779], [0.7984, 0.8844], [0.7966, 0.8865], [0.7927, 0.8859], [0.7924, 0.8781], [0.7967, 0.8745]], [[0.8025, 0.8623], [0.802, 0.8638], [0.8025, 0.8623]], [[0.8006, 0.8554], [0.8021, 0.8598], [0.7993, 0.8605], [0.8006, 0.8554]], [[0.7876, 0.8529], [0.7892, 0.855], [0.7876, 0.8529]], [[0.7974, 0.8525], [0.7972, 0.854], [0.7974, 0.8525]], [[0.8121, 0.845], [0.8137, 0.8453], [0.8121, 0.845]], [[0.8106, 0.8391], [0.8128, 0.8438], [0.8092, 0.8403], [0.8106, 0.8391]], [[0.8112, 0.8367], [0.8113, 0.8388], [0.8112, 0.8367]], [[0.8124, 0.8352], [0.8129, 0.8387], [0.8102, 0.8357], [0.8124, 0.8352]], [[0.8136, 0.8335], [0.8138, 0.8375], [0.8136, 0.8335]], [[0.8024, 0.8328], [0.8049, 0.8387], [0.8017, 0.8458], [0.805, 0.8432], [0.804, 0.8495], [0.8013, 0.8509], [0.8041, 0.8506], [0.8027, 0.8564], [0.7966, 0.8449], [0.7981, 0.8418], [0.7996, 0.8441], [0.8024, 0.8328]], [[0.8033, 0.8325], [0.8043, 0.8344], [0.8033, 0.8325]], [[0.8085, 0.8321], [0.8078, 0.8336], [0.8085, 0.8321]], [[0.8139, 0.8319], [0.8146, 0.8337], [0.8139, 0.8319]], [[0.8027, 0.8309], [0.8027, 0.8329], [0.8027, 0.8309]], [[0.8097, 0.8313], [0.8091, 0.8329], [0.8097, 0.8313]], [[0.8047, 0.8304], [0.8081, 0.8318], [0.8043, 0.8381], [0.8047, 0.8304]], [[0.8372, 0.8301], [0.8384, 0.8327], [0.8372, 0.8301]], [[0.8101, 0.8272], [0.809, 0.8287], [0.8101, 0.8272]], [[0.8027, 0.8142], [0.8029, 0.8176], [0.8027, 0.8142]], [[0.8084, 0.8115], [0.8105, 0.8246], [0.8089, 0.8274], [0.8051, 0.8254], [0.8083, 0.8301], [0.803, 0.8307], [0.8019, 0.8211], [0.805, 0.819], [0.8033, 0.819], [0.8031, 0.8142], [0.8084, 0.8115]], [[0.8022, 0.8091], [0.8014, 0.8156], [0.8002, 0.8125], [0.8022, 0.8091]], [[0.8117, 0.8089], [0.81, 0.8107], [0.8117, 0.8089]], [[0.8124, 0.7908], [0.8124, 0.7971], [0.8143, 0.7983], [0.81, 0.798], [0.8135, 0.8003], [0.8126, 0.8063], [0.8107, 0.8084], [0.8083, 0.807], [0.8096, 0.8097], [0.8067, 0.8127], [0.805, 0.8082], [0.8067, 0.7962], [0.8124, 0.7908]], [[0.812, 0.7876], [0.8124, 0.7891], [0.812, 0.7876]], [[0.8227, 0.7725], [0.8226, 0.7755], [0.8227, 0.7725]], [[0.8311, 0.7489], [0.8302, 0.751], [0.8311, 0.7489]]] },
  { name: "Andhra Pradesh", rings: [[[0.4188, 0.7894], [0.4186, 0.7917], [0.4188, 0.7894]], [[0.4855, 0.691], [0.4849, 0.6949], [0.4833, 0.6921], [0.4855, 0.691]], [[0.4845, 0.6914], [0.4807, 0.691], [0.4848, 0.696], [0.4737, 0.7015], [0.4668, 0.7043], [0.456, 0.7027], [0.4438, 0.7226], [0.4394, 0.7232], [0.4389, 0.7191], [0.4352, 0.7178], [0.4225, 0.7245], [0.4167, 0.7358], [0.4157, 0.7434], [0.4161, 0.7515], [0.4203, 0.7589], [0.418, 0.7738], [0.4239, 0.7951], [0.4187, 0.7861], [0.4185, 0.7896], [0.4175, 0.7865], [0.4158, 0.7904], [0.4238, 0.7972], [0.4213, 0.7939], [0.4145, 0.7921], [0.412, 0.7983], [0.4057, 0.8003], [0.4064, 0.8027], [0.4041, 0.8], [0.4014, 0.8011], [0.3968, 0.7987], [0.3951, 0.7993], [0.3966, 0.8029], [0.3931, 0.8058], [0.3904, 0.8046], [0.3884, 0.8086], [0.3831, 0.8064], [0.3814, 0.8082], [0.3799, 0.8061], [0.3746, 0.8071], [0.3719, 0.8095], [0.3699, 0.8187], [0.3679, 0.8171], [0.367, 0.821], [0.3644, 0.821], [0.3589, 0.8188], [0.3605, 0.8136], [0.3637, 0.8111], [0.367, 0.8134], [0.366, 0.8098], [0.3708, 0.8006], [0.3643, 0.7988], [0.3651, 0.7907], [0.3587, 0.7914], [0.3579, 0.7885], [0.3556, 0.7889], [0.3564, 0.782], [0.3514, 0.7831], [0.3525, 0.779], [0.3476, 0.7794], [0.3442, 0.7858], [0.3424, 0.7845], [0.3363, 0.7876], [0.3355, 0.7826], [0.328, 0.7818], [0.328, 0.78], [0.3277, 0.7851], [0.3223, 0.7855], [0.3237, 0.7797], [0.3193, 0.7724], [0.3232, 0.772], [0.3233, 0.7757], [0.3271, 0.7777], [0.3322, 0.7766], [0.3347, 0.7812], [0.3357, 0.7784], [0.3325, 0.7767], [0.3347, 0.7741], [0.3332, 0.7735], [0.3379, 0.7726], [0.3378, 0.7692], [0.3344, 0.7672], [0.3343, 0.7714], [0.3312, 0.767], [0.3272, 0.7668], [0.3258, 0.7707], [0.3207, 0.7698], [0.319, 0.7651], [0.3218, 0.7623], [0.3186, 0.7626], [0.3153, 0.7586], [0.3185, 0.7478], [0.3154, 0.7468], [0.3156, 0.744], [0.325, 0.7458], [0.3273, 0.742], [0.3276, 0.7376], [0.3217, 0.7303], [0.3235, 0.7257], [0.3263, 0.7256], [0.3233, 0.7195], [0.3246, 0.7173], [0.3381, 0.7166], [0.3375, 0.7062], [0.3407, 0.7034], [0.3298, 0.6992], [0.3368, 0.6955], [0.3353, 0.693], [0.3378, 0.682], [0.3342, 0.6752], [0.3382, 0.6686], [0.3436, 0.6665], [0.336, 0.6636], [0.3425, 0.6512], [0.3393, 0.6485], [0.341, 0.6413], [0.3387, 0.636], [0.3408, 0.6326], [0.3451, 0.6324], [0.3482, 0.6242], [0.3514, 0.6237], [0.3457, 0.6171], [0.3485, 0.6151], [0.3489, 0.6082], [0.3516, 0.6069], [0.3583, 0.6103], [0.3587, 0.6047], [0.3626, 0.6032], [0.3614, 0.5965], [0.3644, 0.5927], [0.3626, 0.5884], [0.3682, 0.5923], [0.379, 0.5934], [0.3794, 0.5967], [0.3827, 0.597], [0.3823, 0.6001], [0.3891, 0.6031], [0.3911, 0.5981], [0.3981, 0.6019], [0.4085, 0.5994], [0.4134, 0.605], [0.4125, 0.6125], [0.4099, 0.6146], [0.4122, 0.6173], [0.4115, 0.6242], [0.4176, 0.6284], [0.4224, 0.6271], [0.4247, 0.6313], [0.429, 0.63], [0.4336, 0.6335], [0.4383, 0.642], [0.4367, 0.6447], [0.4396, 0.6427], [0.4406, 0.6459], [0.444, 0.6448], [0.4462, 0.6571], [0.4497, 0.6549], [0.4635, 0.6561], [0.4761, 0.6483], [0.4833, 0.6508], [0.4865, 0.6459], [0.4847, 0.6439], [0.4874, 0.6404], [0.4856, 0.64], [0.4864, 0.637], [0.4899, 0.6329], [0.4945, 0.6429], [0.4998, 0.6361], [0.503, 0.6388], [0.5076, 0.6381], [0.5064, 0.6359], [0.5087, 0.6329], [0.5062, 0.6297], [0.51, 0.6253], [0.5122, 0.6272], [0.518, 0.6235], [0.5153, 0.6183], [0.5198, 0.6197], [0.52, 0.6157], [0.5222, 0.6178], [0.525, 0.613], [0.5287, 0.6206], [0.53, 0.6177], [0.5325, 0.6238], [0.539, 0.6262], [0.546, 0.6251], [0.5496, 0.6208], [0.5492, 0.6175], [0.5538, 0.6159], [0.5545, 0.6175], [0.5568, 0.6158], [0.5546, 0.614], [0.558, 0.6132], [0.5593, 0.6164], [0.5403, 0.6403], [0.5234, 0.6496], [0.5124, 0.6633], [0.4866, 0.6785], [0.483, 0.6845], [0.4862, 0.687], [0.4863, 0.6834], [0.4845, 0.6914]]] },
  { name: "Arunachal Pradesh", rings: [[[0.908, 0.2695], [0.9106, 0.2747], [0.9152, 0.2739], [0.9067, 0.2802], [0.9083, 0.2862], [0.9192, 0.2801], [0.9178, 0.2831], [0.922, 0.2906], [0.9112, 0.3033], [0.9154, 0.3057], [0.9235, 0.3015], [0.9336, 0.3067], [0.9366, 0.3048], [0.946, 0.3107], [0.9431, 0.315], [0.9464, 0.3168], [0.9456, 0.3212], [0.9416, 0.3208], [0.9306, 0.3308], [0.931, 0.3362], [0.9382, 0.3486], [0.9297, 0.3453], [0.9277, 0.3399], [0.9221, 0.3393], [0.9191, 0.342], [0.9062, 0.3442], [0.895, 0.356], [0.8889, 0.3579], [0.8856, 0.3625], [0.8799, 0.3629], [0.8786, 0.3506], [0.8866, 0.3475], [0.8884, 0.3429], [0.8999, 0.3431], [0.9038, 0.3394], [0.8986, 0.3373], [0.8996, 0.3331], [0.8958, 0.327], [0.9025, 0.3187], [0.8912, 0.3191], [0.8561, 0.3329], [0.8498, 0.3301], [0.85, 0.3341], [0.8362, 0.3469], [0.837, 0.3495], [0.8265, 0.3542], [0.8121, 0.355], [0.8011, 0.3508], [0.7988, 0.3534], [0.7842, 0.3557], [0.7817, 0.3465], [0.7822, 0.343], [0.7846, 0.3422], [0.7815, 0.3356], [0.7704, 0.3355], [0.7676, 0.332], [0.7699, 0.326], [0.7673, 0.3225], [0.7756, 0.3242], [0.7785, 0.3275], [0.7874, 0.3225], [0.7906, 0.3253], [0.7981, 0.3238], [0.8035, 0.318], [0.8019, 0.3133], [0.8182, 0.3061], [0.8171, 0.3024], [0.8218, 0.2954], [0.8398, 0.2943], [0.8486, 0.2799], [0.8591, 0.2749], [0.8613, 0.2707], [0.8665, 0.2771], [0.8852, 0.2817], [0.8893, 0.2784], [0.8891, 0.2754], [0.8964, 0.2704], [0.9056, 0.2667], [0.908, 0.2695]]] },
  { name: "Assam", rings: [[[0.7159, 0.402], [0.7155, 0.4041], [0.7159, 0.402]], [[0.9017, 0.3197], [0.8958, 0.3271], [0.8996, 0.3331], [0.8986, 0.3373], [0.9037, 0.3395], [0.8999, 0.3431], [0.8882, 0.343], [0.8866, 0.3475], [0.8733, 0.3547], [0.8694, 0.3543], [0.8652, 0.3599], [0.8564, 0.3634], [0.8517, 0.3705], [0.8505, 0.3672], [0.8422, 0.3804], [0.8414, 0.389], [0.8358, 0.3926], [0.8351, 0.3874], [0.8216, 0.4016], [0.8256, 0.4054], [0.826, 0.4097], [0.8191, 0.4195], [0.8175, 0.4265], [0.8149, 0.4265], [0.8127, 0.4399], [0.8063, 0.441], [0.8043, 0.4362], [0.7952, 0.4492], [0.7939, 0.4452], [0.7875, 0.4453], [0.7901, 0.429], [0.7883, 0.4235], [0.796, 0.4244], [0.7939, 0.4202], [0.7957, 0.4165], [0.8055, 0.4127], [0.8049, 0.4089], [0.7983, 0.4043], [0.8009, 0.4001], [0.7984, 0.4012], [0.7927, 0.3946], [0.7859, 0.3974], [0.7878, 0.3894], [0.7857, 0.3881], [0.79, 0.3836], [0.7786, 0.3863], [0.7754, 0.3822], [0.7708, 0.3895], [0.768, 0.3851], [0.7664, 0.3906], [0.7606, 0.3917], [0.7572, 0.3956], [0.7564, 0.391], [0.7504, 0.3923], [0.7513, 0.3901], [0.7486, 0.388], [0.7389, 0.3897], [0.7376, 0.3876], [0.7355, 0.3898], [0.7344, 0.3857], [0.7235, 0.3876], [0.7166, 0.3953], [0.7204, 0.3998], [0.7159, 0.4017], [0.7142, 0.3925], [0.7165, 0.3883], [0.7105, 0.3798], [0.7112, 0.3758], [0.7155, 0.3732], [0.7156, 0.3611], [0.7237, 0.3607], [0.7264, 0.3571], [0.7324, 0.3555], [0.7412, 0.3601], [0.7714, 0.3588], [0.7766, 0.3551], [0.7826, 0.3573], [0.7988, 0.3534], [0.8011, 0.3508], [0.8121, 0.355], [0.8315, 0.3533], [0.85, 0.3341], [0.8498, 0.3301], [0.8561, 0.3329], [0.8912, 0.3191], [0.9017, 0.3197]]] },
  { name: "Bihar", rings: [[[0.5401, 0.3345], [0.5455, 0.3389], [0.5555, 0.3405], [0.5577, 0.3447], [0.5562, 0.3505], [0.566, 0.3535], [0.5678, 0.3571], [0.5731, 0.3567], [0.5735, 0.3604], [0.5865, 0.3565], [0.5931, 0.3669], [0.5985, 0.3635], [0.6077, 0.3651], [0.62, 0.3719], [0.6304, 0.3663], [0.631, 0.3709], [0.6387, 0.3744], [0.6425, 0.3713], [0.6468, 0.3733], [0.6554, 0.3697], [0.6597, 0.3738], [0.662, 0.368], [0.6658, 0.3674], [0.6642, 0.3695], [0.6673, 0.3748], [0.6576, 0.3811], [0.6527, 0.3889], [0.6602, 0.3968], [0.6609, 0.4039], [0.6565, 0.402], [0.652, 0.4051], [0.6537, 0.4134], [0.6459, 0.4083], [0.6429, 0.4101], [0.6426, 0.4135], [0.638, 0.4126], [0.6371, 0.4171], [0.6326, 0.4193], [0.6297, 0.4334], [0.626, 0.4321], [0.6254, 0.4356], [0.6213, 0.4329], [0.616, 0.4334], [0.6114, 0.4413], [0.6061, 0.4382], [0.6075, 0.4341], [0.6017, 0.4335], [0.5991, 0.4275], [0.5961, 0.4291], [0.5896, 0.4261], [0.5874, 0.4342], [0.5757, 0.436], [0.5698, 0.441], [0.5694, 0.439], [0.5639, 0.4412], [0.5608, 0.4359], [0.5566, 0.4405], [0.5524, 0.4411], [0.5516, 0.4441], [0.5454, 0.4386], [0.5454, 0.4347], [0.5398, 0.4376], [0.5362, 0.4323], [0.5325, 0.4358], [0.5211, 0.436], [0.5225, 0.4327], [0.5177, 0.4274], [0.5156, 0.4195], [0.5166, 0.4134], [0.5315, 0.4054], [0.5394, 0.3958], [0.5452, 0.3977], [0.5466, 0.3949], [0.5514, 0.3972], [0.5558, 0.3955], [0.5526, 0.3904], [0.538, 0.3829], [0.5367, 0.3783], [0.5413, 0.3779], [0.5417, 0.3735], [0.5335, 0.3709], [0.539, 0.3643], [0.5491, 0.3649], [0.5436, 0.361], [0.5439, 0.3568], [0.5381, 0.3558], [0.5341, 0.3412], [0.5313, 0.341], [0.5336, 0.3392], [0.5325, 0.3374], [0.5401, 0.3345]]] },
  { name: "Chandigarh", rings: [[[0.3171, 0.2235], [0.3131, 0.2208], [0.3164, 0.22], [0.3171, 0.2235]]] },
  { name: "Chhattisgarh", rings: [[[0.5159, 0.4504], [0.5214, 0.4528], [0.5231, 0.4583], [0.5272, 0.4597], [0.5296, 0.4671], [0.5345, 0.4683], [0.5367, 0.466], [0.5354, 0.4743], [0.5386, 0.476], [0.5375, 0.4824], [0.541, 0.4882], [0.5423, 0.4862], [0.5478, 0.4878], [0.548, 0.4911], [0.5432, 0.498], [0.5366, 0.5013], [0.5366, 0.508], [0.5248, 0.5136], [0.5222, 0.519], [0.5238, 0.5252], [0.5202, 0.5272], [0.5188, 0.5308], [0.5207, 0.5324], [0.5176, 0.5328], [0.5162, 0.5367], [0.5182, 0.5415], [0.5142, 0.5406], [0.5117, 0.5485], [0.4948, 0.548], [0.4894, 0.5587], [0.486, 0.5567], [0.4853, 0.5675], [0.4885, 0.5717], [0.4873, 0.5836], [0.497, 0.5859], [0.4971, 0.5905], [0.4932, 0.593], [0.4934, 0.5899], [0.4888, 0.5887], [0.4857, 0.5911], [0.4824, 0.5856], [0.4761, 0.5852], [0.4736, 0.5822], [0.4715, 0.5841], [0.4708, 0.5886], [0.4772, 0.5926], [0.4761, 0.6017], [0.481, 0.6045], [0.4802, 0.6139], [0.4827, 0.6209], [0.4778, 0.6273], [0.4719, 0.6293], [0.4737, 0.6322], [0.4676, 0.6391], [0.4609, 0.6419], [0.4565, 0.6565], [0.4497, 0.6549], [0.446, 0.6571], [0.444, 0.6448], [0.4406, 0.6459], [0.4396, 0.6427], [0.4367, 0.6447], [0.4383, 0.6422], [0.4365, 0.637], [0.4292, 0.63], [0.4246, 0.6313], [0.4216, 0.626], [0.4249, 0.6239], [0.4224, 0.6184], [0.426, 0.6102], [0.4316, 0.605], [0.4329, 0.608], [0.4371, 0.6087], [0.4401, 0.6063], [0.4383, 0.6042], [0.4415, 0.6029], [0.4343, 0.5982], [0.4308, 0.5914], [0.4263, 0.5922], [0.4295, 0.5898], [0.4267, 0.5878], [0.4302, 0.5878], [0.4309, 0.5834], [0.4263, 0.5809], [0.426, 0.5777], [0.4331, 0.5747], [0.4333, 0.5659], [0.429, 0.5655], [0.432, 0.5633], [0.4308, 0.5551], [0.4272, 0.5526], [0.4282, 0.5474], [0.4348, 0.5432], [0.4362, 0.5296], [0.439, 0.5284], [0.4419, 0.5163], [0.4449, 0.5178], [0.4482, 0.5055], [0.4547, 0.5028], [0.4569, 0.5055], [0.4636, 0.5023], [0.4681, 0.4982], [0.4683, 0.4912], [0.4735, 0.4884], [0.4735, 0.4844], [0.48, 0.4823], [0.481, 0.4762], [0.4746, 0.4733], [0.4728, 0.4693], [0.4634, 0.4702], [0.4622, 0.4674], [0.4658, 0.463], [0.4635, 0.4568], [0.4687, 0.46], [0.4728, 0.4579], [0.4911, 0.4609], [0.4998, 0.455], [0.5044, 0.4579], [0.5098, 0.4574], [0.5159, 0.4504]]] },
  { name: "Dadra and Nagar Haveli", rings: [[[0.2, 0.5761], [0.2035, 0.5738], [0.2058, 0.5754], [0.2023, 0.579], [0.2073, 0.5795], [0.2064, 0.5835], [0.1999, 0.5819], [0.198, 0.5766], [0.2, 0.5761]]] },
  { name: "Daman and Diu", rings: [[[0.1961, 0.5702], [0.1949, 0.5735], [0.1961, 0.5702]], [[0.1377, 0.5616], [0.1359, 0.5625], [0.1377, 0.5616]], [[0.1321, 0.5542], [0.1362, 0.5561], [0.1336, 0.5578], [0.1361, 0.5587], [0.1343, 0.5631], [0.1293, 0.5608], [0.1321, 0.5542]]] },
  { name: "Delhi", rings: [[[0.3292, 0.2886], [0.3329, 0.2962], [0.3299, 0.3028], [0.3176, 0.2983], [0.3206, 0.2955], [0.3208, 0.2891], [0.3249, 0.2869], [0.3292, 0.2886]]] },
  { name: "Goa", rings: [[[0.2272, 0.7211], [0.231, 0.7265], [0.2387, 0.7251], [0.2413, 0.7366], [0.2388, 0.7377], [0.2401, 0.7446], [0.2374, 0.7483], [0.2322, 0.7484], [0.2282, 0.7432], [0.2274, 0.7347], [0.2243, 0.7329], [0.2277, 0.7327], [0.2244, 0.7312], [0.2211, 0.7229], [0.2272, 0.7211]]] },
  { name: "Gujarat", rings: [[[0.1905, 0.5478], [0.1908, 0.55], [0.1905, 0.5478]], [[0.0973, 0.5049], [0.0976, 0.5067], [0.0973, 0.5049]], [[0.0823, 0.5043], [0.0807, 0.5062], [0.0823, 0.5043]], [[0.1062, 0.5018], [0.1045, 0.5027], [0.1062, 0.5018]], [[0.1089, 0.5005], [0.1074, 0.5019], [0.1089, 0.5005]], [[0.1224, 0.4853], [0.1213, 0.4874], [0.1224, 0.4853]], [[0.1234, 0.4848], [0.1223, 0.4862], [0.1234, 0.4848]], [[0.0646, 0.4766], [0.0663, 0.478], [0.0646, 0.4766]], [[0.0655, 0.4746], [0.0664, 0.4761], [0.0655, 0.4746]], [[0.062, 0.471], [0.0624, 0.4736], [0.0621, 0.4717], [0.0604, 0.473], [0.062, 0.471]], [[0.0623, 0.4672], [0.0607, 0.4701], [0.0623, 0.4672]], [[0.0585, 0.4602], [0.0606, 0.4606], [0.0595, 0.4652], [0.0536, 0.4672], [0.0571, 0.4654], [0.0546, 0.4656], [0.0585, 0.4602]], [[0.057, 0.4596], [0.0559, 0.4637], [0.057, 0.4596]], [[0.0627, 0.4593], [0.0633, 0.4619], [0.0609, 0.4624], [0.0627, 0.4593]], [[0.0596, 0.4578], [0.0606, 0.46], [0.0576, 0.4608], [0.0596, 0.4578]], [[0.0613, 0.4558], [0.0582, 0.4588], [0.0613, 0.4558]], [[0.0639, 0.4555], [0.0655, 0.4565], [0.0634, 0.4585], [0.0639, 0.4555]], [[0.0623, 0.4539], [0.0634, 0.4562], [0.0611, 0.4588], [0.0623, 0.4539]], [[0.0607, 0.4538], [0.0548, 0.4643], [0.0541, 0.4592], [0.0607, 0.4538]], [[0.1729, 0.4321], [0.1806, 0.433], [0.1775, 0.4342], [0.1833, 0.4368], [0.184, 0.4401], [0.1864, 0.4367], [0.1911, 0.4384], [0.1922, 0.4416], [0.198, 0.4428], [0.2007, 0.4375], [0.2034, 0.4372], [0.2029, 0.4405], [0.2074, 0.4415], [0.2029, 0.4475], [0.2079, 0.4533], [0.2118, 0.4494], [0.2133, 0.456], [0.2114, 0.4608], [0.2159, 0.4636], [0.216, 0.4665], [0.2205, 0.4663], [0.2197, 0.472], [0.2258, 0.4722], [0.2277, 0.4758], [0.2298, 0.4743], [0.2342, 0.4772], [0.2348, 0.4811], [0.2384, 0.4808], [0.242, 0.4892], [0.2455, 0.4917], [0.2425, 0.499], [0.239, 0.4988], [0.2356, 0.503], [0.2323, 0.5022], [0.2347, 0.5062], [0.2367, 0.5043], [0.2399, 0.5071], [0.2367, 0.5095], [0.2331, 0.5082], [0.2364, 0.5172], [0.2339, 0.5196], [0.2354, 0.5214], [0.2251, 0.5259], [0.2278, 0.531], [0.2244, 0.5324], [0.2266, 0.5367], [0.2404, 0.5343], [0.2409, 0.5367], [0.233, 0.5371], [0.2295, 0.5398], [0.2293, 0.5432], [0.2258, 0.5442], [0.2255, 0.5473], [0.2183, 0.5474], [0.228, 0.5535], [0.2294, 0.5614], [0.2208, 0.5672], [0.2142, 0.5624], [0.2126, 0.5646], [0.2156, 0.568], [0.2123, 0.5729], [0.2135, 0.5789], [0.2098, 0.5788], [0.2083, 0.5815], [0.2058, 0.5788], [0.2026, 0.5802], [0.2058, 0.5761], [0.2036, 0.5738], [0.198, 0.5765], [0.1994, 0.5787], [0.1923, 0.5811], [0.1935, 0.5747], [0.1965, 0.5732], [0.197, 0.5612], [0.1918, 0.5482], [0.1889, 0.5505], [0.1897, 0.5455], [0.1877, 0.5439], [0.1925, 0.5349], [0.1889, 0.5368], [0.188, 0.5348], [0.1953, 0.531], [0.1862, 0.5311], [0.1872, 0.5259], [0.1851, 0.5216], [0.1876, 0.5135], [0.1929, 0.5144], [0.1978, 0.5109], [0.1864, 0.5108], [0.1846, 0.5136], [0.1808, 0.5077], [0.1825, 0.5126], [0.1807, 0.5111], [0.1803, 0.516], [0.1788, 0.5134], [0.1783, 0.5223], [0.1772, 0.5185], [0.179, 0.5165], [0.175, 0.5187], [0.1765, 0.5215], [0.1743, 0.5206], [0.1775, 0.5235], [0.1779, 0.5286], [0.1754, 0.5259], [0.1791, 0.5323], [0.1721, 0.543], [0.1733, 0.5465], [0.1408, 0.5617], [0.1354, 0.5624], [0.1361, 0.5587], [0.1336, 0.5578], [0.1358, 0.5547], [0.1311, 0.5533], [0.129, 0.561], [0.1117, 0.5495], [0.0999, 0.5356], [0.1006, 0.5316], [0.0994, 0.5335], [0.0974, 0.5318], [0.0998, 0.5353], [0.0961, 0.5326], [0.0762, 0.5099], [0.0802, 0.5042], [0.0802, 0.507], [0.084, 0.5061], [0.0829, 0.5098], [0.0852, 0.5116], [0.093, 0.5089], [0.0933, 0.5057], [0.0957, 0.5096], [0.1004, 0.5045], [0.1025, 0.5069], [0.1036, 0.5036], [0.1047, 0.5054], [0.1079, 0.5022], [0.1136, 0.5019], [0.1237, 0.4845], [0.1193, 0.4893], [0.1124, 0.4883], [0.1133, 0.486], [0.1127, 0.4895], [0.1025, 0.492], [0.0997, 0.496], [0.0975, 0.4938], [0.0925, 0.4945], [0.0839, 0.4923], [0.0677, 0.482], [0.0654, 0.4792], [0.0707, 0.476], [0.0674, 0.4769], [0.0626, 0.4704], [0.0627, 0.4653], [0.0708, 0.4579], [0.066, 0.4587], [0.0639, 0.4619], [0.0633, 0.4596], [0.0678, 0.4565], [0.0643, 0.4549], [0.0704, 0.455], [0.0712, 0.4438], [0.0747, 0.4471], [0.0765, 0.4444], [0.0781, 0.4461], [0.0965, 0.4444], [0.1002, 0.4478], [0.1087, 0.4481], [0.1123, 0.444], [0.1262, 0.4396], [0.1262, 0.4452], [0.1333, 0.4462], [0.1433, 0.4402], [0.1395, 0.4389], [0.1392, 0.4355], [0.1425, 0.4309], [0.1483, 0.4333], [0.1556, 0.4309], [0.1636, 0.4312], [0.1655, 0.4334], [0.166, 0.4311], [0.1681, 0.4327], [0.1714, 0.43], [0.1729, 0.4321]]] },
  { name: "Haryana", rings: [[[0.3176, 0.2166], [0.3273, 0.2234], [0.326, 0.2277], [0.3288, 0.2308], [0.3363, 0.2313], [0.3359, 0.2335], [0.3382, 0.2319], [0.3407, 0.2347], [0.3352, 0.244], [0.3308, 0.2461], [0.3262, 0.2558], [0.3263, 0.2792], [0.3293, 0.2862], [0.3208, 0.2891], [0.3206, 0.2955], [0.3175, 0.2974], [0.3189, 0.3], [0.3248, 0.2996], [0.3276, 0.3035], [0.3328, 0.2999], [0.3371, 0.3033], [0.339, 0.3194], [0.3297, 0.3251], [0.3237, 0.3239], [0.325, 0.3267], [0.3224, 0.3266], [0.3217, 0.3295], [0.3189, 0.328], [0.3214, 0.3127], [0.3184, 0.3099], [0.3085, 0.3187], [0.3085, 0.3163], [0.3059, 0.3159], [0.3064, 0.3123], [0.3008, 0.3113], [0.3023, 0.3166], [0.2974, 0.3156], [0.2968, 0.3177], [0.2988, 0.3232], [0.2909, 0.3223], [0.2897, 0.32], [0.2931, 0.3151], [0.2901, 0.3144], [0.2949, 0.3123], [0.2896, 0.3049], [0.285, 0.3035], [0.2784, 0.2963], [0.2757, 0.2855], [0.2771, 0.2825], [0.2725, 0.2779], [0.2735, 0.2737], [0.2638, 0.2748], [0.2566, 0.2687], [0.2491, 0.2714], [0.2471, 0.2671], [0.2497, 0.2644], [0.2494, 0.2565], [0.2451, 0.2553], [0.2478, 0.2525], [0.2469, 0.2495], [0.2507, 0.2511], [0.2554, 0.248], [0.2611, 0.2528], [0.264, 0.2508], [0.2642, 0.2546], [0.267, 0.2535], [0.2685, 0.2565], [0.2663, 0.2597], [0.2683, 0.2638], [0.275, 0.2545], [0.2788, 0.2568], [0.285, 0.2539], [0.2933, 0.2566], [0.2994, 0.2524], [0.2971, 0.2503], [0.2998, 0.2441], [0.2982, 0.2422], [0.3019, 0.244], [0.3046, 0.2406], [0.3058, 0.2442], [0.3104, 0.2449], [0.3115, 0.2405], [0.3088, 0.2384], [0.3139, 0.236], [0.3152, 0.2323], [0.3204, 0.2339], [0.3153, 0.2161], [0.3176, 0.2166]]] },
  { name: "Himachal Pradesh", rings: [[[0.3165, 0.1316], [0.3201, 0.139], [0.3267, 0.1409], [0.3326, 0.1468], [0.3443, 0.1413], [0.3526, 0.1553], [0.3645, 0.1489], [0.365, 0.1539], [0.3616, 0.1581], [0.3665, 0.1582], [0.369, 0.1614], [0.3666, 0.1676], [0.3713, 0.1686], [0.3714, 0.1721], [0.3767, 0.1765], [0.3743, 0.1839], [0.3785, 0.1903], [0.3747, 0.1938], [0.3836, 0.2082], [0.3798, 0.2085], [0.3774, 0.205], [0.3675, 0.205], [0.364, 0.2019], [0.3497, 0.2068], [0.3436, 0.2205], [0.3473, 0.2289], [0.3399, 0.2342], [0.3263, 0.2284], [0.3273, 0.2234], [0.3196, 0.216], [0.3107, 0.2122], [0.3114, 0.2046], [0.3052, 0.2022], [0.3031, 0.1965], [0.3011, 0.2009], [0.2973, 0.2014], [0.2888, 0.1783], [0.2791, 0.1735], [0.2817, 0.1705], [0.2805, 0.168], [0.29, 0.1611], [0.2875, 0.1581], [0.2893, 0.1491], [0.2855, 0.1441], [0.2916, 0.1439], [0.304, 0.1334], [0.3112, 0.1343], [0.3165, 0.1316]]] },
  { name: "Jammu and Kashmir", rings: [[[0.3501, 0.0505], [0.3565, 0.0487], [0.3529, 0.0535], [0.3607, 0.0779], [0.3705, 0.0809], [0.3831, 0.0913], [0.3824, 0.0955], [0.3747, 0.1009], [0.3771, 0.112], [0.3749, 0.1163], [0.386, 0.1319], [0.3962, 0.1337], [0.3945, 0.141], [0.4002, 0.1494], [0.4004, 0.1545], [0.3932, 0.1589], [0.3899, 0.158], [0.3869, 0.163], [0.383, 0.1641], [0.377, 0.1593], [0.3759, 0.1513], [0.3626, 0.1593], [0.3645, 0.1489], [0.3526, 0.1553], [0.3443, 0.1413], [0.3326, 0.1468], [0.3267, 0.1409], [0.3201, 0.139], [0.3158, 0.1309], [0.3143, 0.1337], [0.304, 0.1334], [0.2904, 0.1444], [0.2861, 0.1428], [0.2897, 0.1532], [0.2767, 0.1665], [0.2636, 0.159], [0.2522, 0.1589], [0.2505, 0.1544], [0.2522, 0.1461], [0.2471, 0.1497], [0.2406, 0.1432], [0.2416, 0.1396], [0.2313, 0.133], [0.2366, 0.1236], [0.2296, 0.1139], [0.2376, 0.1085], [0.2389, 0.1045], [0.2375, 0.1022], [0.2273, 0.1017], [0.2302, 0.0938], [0.2278, 0.0903], [0.2237, 0.0899], [0.2293, 0.0824], [0.2297, 0.0778], [0.2352, 0.078], [0.2424, 0.0738], [0.2844, 0.0845], [0.3065, 0.0742], [0.3129, 0.0755], [0.3149, 0.0692], [0.3225, 0.0688], [0.3231, 0.0651], [0.3274, 0.0645], [0.3478, 0.0477], [0.3501, 0.0505]]] },
  { name: "Jharkhand", rings: [[[0.6465, 0.4095], [0.6521, 0.4118], [0.6519, 0.417], [0.6579, 0.4236], [0.6532, 0.428], [0.6557, 0.4295], [0.656, 0.4338], [0.6517, 0.4342], [0.6529, 0.4401], [0.6476, 0.4456], [0.6492, 0.4487], [0.6432, 0.4498], [0.6422, 0.4543], [0.6354, 0.4523], [0.6372, 0.4571], [0.6356, 0.4595], [0.6218, 0.4593], [0.6218, 0.4641], [0.611, 0.4661], [0.6068, 0.4731], [0.599, 0.4676], [0.599, 0.4706], [0.5933, 0.472], [0.5925, 0.4805], [0.595, 0.4827], [0.5987, 0.4822], [0.6041, 0.4873], [0.6141, 0.4874], [0.6108, 0.4896], [0.6103, 0.4944], [0.6165, 0.4978], [0.6175, 0.5011], [0.6208, 0.5012], [0.6206, 0.5052], [0.6247, 0.5118], [0.6205, 0.5132], [0.6129, 0.5088], [0.6108, 0.5101], [0.5988, 0.5015], [0.5962, 0.505], [0.5984, 0.514], [0.5947, 0.5212], [0.5903, 0.5204], [0.5916, 0.5164], [0.5879, 0.5185], [0.5791, 0.5149], [0.5741, 0.5201], [0.57, 0.5168], [0.5664, 0.5173], [0.5705, 0.5105], [0.569, 0.5043], [0.5453, 0.509], [0.5366, 0.5029], [0.5389, 0.4991], [0.5432, 0.498], [0.5484, 0.4891], [0.5423, 0.4862], [0.541, 0.4882], [0.5375, 0.4824], [0.5386, 0.476], [0.5354, 0.4743], [0.5367, 0.466], [0.5345, 0.4683], [0.5296, 0.4671], [0.5272, 0.4597], [0.5231, 0.4583], [0.5214, 0.4528], [0.5158, 0.4503], [0.5197, 0.4415], [0.518, 0.4368], [0.5325, 0.4358], [0.5362, 0.4323], [0.5398, 0.4376], [0.5456, 0.4348], [0.5454, 0.4386], [0.5516, 0.4441], [0.5524, 0.4411], [0.5566, 0.4405], [0.5608, 0.4359], [0.5639, 0.4412], [0.5694, 0.439], [0.5698, 0.441], [0.5757, 0.436], [0.5874, 0.4342], [0.5896, 0.4261], [0.5961, 0.4291], [0.5991, 0.4275], [0.6017, 0.4335], [0.6075, 0.4341], [0.6061, 0.4382], [0.6114, 0.4413], [0.616, 0.4334], [0.6213, 0.4329], [0.6254, 0.4356], [0.626, 0.4321], [0.6297, 0.4334], [0.6336, 0.418], [0.6371, 0.4171], [0.638, 0.4126], [0.6424, 0.4136], [0.6431, 0.4098], [0.6465, 0.4095]]] },
  { name: "Karnataka", rings: [[[0.3329, 0.6362], [0.3351, 0.6377], [0.3337, 0.6403], [0.341, 0.6413], [0.3393, 0.6485], [0.3425, 0.6512], [0.336, 0.6636], [0.3436, 0.6663], [0.3382, 0.6686], [0.3342, 0.6752], [0.3378, 0.682], [0.3353, 0.693], [0.3368, 0.6955], [0.3298, 0.6992], [0.3407, 0.7049], [0.3375, 0.7062], [0.3381, 0.7166], [0.3281, 0.7157], [0.3233, 0.7195], [0.3264, 0.7249], [0.3235, 0.7257], [0.3217, 0.7303], [0.3276, 0.7376], [0.3276, 0.7407], [0.325, 0.7458], [0.3157, 0.7436], [0.3154, 0.7468], [0.3185, 0.7478], [0.3153, 0.7586], [0.3186, 0.7626], [0.3218, 0.7623], [0.319, 0.7651], [0.3208, 0.7699], [0.3258, 0.7707], [0.3272, 0.7668], [0.3312, 0.767], [0.3343, 0.7714], [0.3344, 0.7672], [0.3378, 0.7692], [0.3379, 0.7726], [0.3332, 0.7735], [0.3347, 0.7741], [0.3325, 0.7767], [0.3357, 0.7784], [0.3347, 0.7812], [0.3322, 0.7766], [0.3271, 0.7777], [0.3233, 0.7757], [0.3232, 0.772], [0.3193, 0.7724], [0.3237, 0.7797], [0.3224, 0.7855], [0.3277, 0.7851], [0.328, 0.78], [0.328, 0.7818], [0.3355, 0.7826], [0.3371, 0.7875], [0.3424, 0.7845], [0.3442, 0.7858], [0.3476, 0.7794], [0.3525, 0.779], [0.3514, 0.7831], [0.3544, 0.781], [0.3566, 0.7824], [0.3556, 0.7889], [0.3579, 0.7885], [0.3587, 0.7914], [0.3651, 0.7907], [0.3643, 0.7988], [0.3708, 0.8006], [0.366, 0.8098], [0.367, 0.8134], [0.3637, 0.8111], [0.3599, 0.8166], [0.3478, 0.8132], [0.3449, 0.8194], [0.3406, 0.8196], [0.3415, 0.8274], [0.3368, 0.8338], [0.3448, 0.8349], [0.3461, 0.8368], [0.3429, 0.842], [0.3374, 0.8422], [0.3354, 0.8479], [0.33, 0.8463], [0.3259, 0.8491], [0.3227, 0.8463], [0.3195, 0.8469], [0.3176, 0.8534], [0.3091, 0.8523], [0.3074, 0.8496], [0.3046, 0.8506], [0.3045, 0.8478], [0.2953, 0.8448], [0.2953, 0.841], [0.2879, 0.8418], [0.2859, 0.8379], [0.2817, 0.8373], [0.2743, 0.8312], [0.2726, 0.8274], [0.2741, 0.8246], [0.2719, 0.8259], [0.2698, 0.8232], [0.2715, 0.8218], [0.2629, 0.8195], [0.2612, 0.8154], [0.2574, 0.8165], [0.2502, 0.7821], [0.2462, 0.7767], [0.2427, 0.7602], [0.2404, 0.761], [0.2385, 0.7541], [0.2337, 0.7521], [0.2341, 0.7489], [0.2392, 0.7469], [0.2407, 0.74], [0.2388, 0.7377], [0.2413, 0.7366], [0.2387, 0.7251], [0.2338, 0.7246], [0.2378, 0.7209], [0.242, 0.7213], [0.2453, 0.7128], [0.2421, 0.7124], [0.2461, 0.7109], [0.2463, 0.7068], [0.241, 0.7054], [0.2422, 0.7016], [0.2393, 0.6968], [0.2428, 0.6973], [0.2455, 0.6931], [0.2484, 0.6965], [0.252, 0.6949], [0.2522, 0.6913], [0.2591, 0.6896], [0.2596, 0.6841], [0.2642, 0.6839], [0.2681, 0.6873], [0.2703, 0.6837], [0.2821, 0.6835], [0.2816, 0.6739], [0.2791, 0.67], [0.2809, 0.667], [0.286, 0.6704], [0.2886, 0.6689], [0.2899, 0.6719], [0.2957, 0.6705], [0.2974, 0.6727], [0.2995, 0.6703], [0.3037, 0.6723], [0.3022, 0.6632], [0.307, 0.6611], [0.308, 0.6579], [0.3131, 0.6605], [0.3161, 0.6558], [0.3146, 0.6535], [0.32, 0.6529], [0.3212, 0.6443], [0.3259, 0.6453], [0.3299, 0.6371], [0.3329, 0.6362]]] },
  { name: "Kerala", rings: [[[0.3, 0.9033], [0.301, 0.9047], [0.3, 0.9033]], [[0.2663, 0.8367], [0.267, 0.8386], [0.2663, 0.8367]], [[0.2653, 0.8337], [0.2663, 0.8367], [0.2653, 0.8337]], [[0.2613, 0.8155], [0.2629, 0.8195], [0.2715, 0.8218], [0.2697, 0.8228], [0.2717, 0.8258], [0.2741, 0.8246], [0.2726, 0.8274], [0.2743, 0.8312], [0.2791, 0.8354], [0.2858, 0.8378], [0.2882, 0.842], [0.2953, 0.841], [0.2956, 0.845], [0.3045, 0.8478], [0.3053, 0.8516], [0.2989, 0.8537], [0.2994, 0.857], [0.3085, 0.8604], [0.3059, 0.8657], [0.3142, 0.8648], [0.3131, 0.8668], [0.3162, 0.87], [0.3119, 0.8737], [0.3194, 0.8784], [0.3187, 0.8828], [0.3166, 0.8829], [0.3171, 0.8932], [0.3217, 0.8959], [0.3294, 0.8918], [0.3311, 0.896], [0.3283, 0.8995], [0.3306, 0.9035], [0.3272, 0.9146], [0.333, 0.9149], [0.3347, 0.918], [0.3266, 0.933], [0.33, 0.9376], [0.3273, 0.9415], [0.3307, 0.9475], [0.3283, 0.949], [0.3275, 0.9546], [0.3218, 0.9524], [0.3087, 0.9364], [0.3015, 0.9171], [0.2996, 0.9033], [0.3026, 0.9113], [0.3018, 0.9064], [0.3033, 0.908], [0.3029, 0.9171], [0.3074, 0.9169], [0.3048, 0.916], [0.3035, 0.9066], [0.2985, 0.8979], [0.2989, 0.9031], [0.2941, 0.8855], [0.2893, 0.8778], [0.2877, 0.867], [0.2803, 0.8564], [0.2767, 0.8464], [0.2753, 0.8473], [0.2706, 0.8419], [0.2729, 0.8415], [0.2696, 0.8399], [0.2738, 0.8358], [0.2683, 0.8368], [0.2676, 0.8399], [0.2574, 0.8166], [0.2613, 0.8155]]] },
  { name: "Lakshadweep", rings: [[[0.2028, 0.9542], [0.2009, 0.9559], [0.2028, 0.9542]], [[0.1751, 0.8769], [0.1761, 0.8751], [0.1751, 0.8769]], [[0.1939, 0.8632], [0.193, 0.8657], [0.1939, 0.8632]]] },
  { name: "Madhya Pradesh", rings: [[[0.3643, 0.3566], [0.3704, 0.3604], [0.375, 0.359], [0.3835, 0.3629], [0.3831, 0.3667], [0.3878, 0.3745], [0.3819, 0.3815], [0.3838, 0.3835], [0.3795, 0.3931], [0.376, 0.3948], [0.3777, 0.399], [0.3663, 0.4011], [0.3622, 0.4075], [0.3667, 0.4158], [0.3631, 0.4171], [0.3631, 0.4201], [0.3581, 0.4249], [0.3613, 0.4313], [0.3598, 0.4362], [0.3648, 0.4445], [0.3686, 0.4405], [0.3773, 0.4477], [0.3827, 0.4418], [0.3801, 0.4322], [0.376, 0.4334], [0.377, 0.4263], [0.3721, 0.4213], [0.3705, 0.4114], [0.3662, 0.4104], [0.3731, 0.4051], [0.3765, 0.408], [0.378, 0.4056], [0.3755, 0.4032], [0.3786, 0.4055], [0.3802, 0.4012], [0.383, 0.4074], [0.3771, 0.4099], [0.3789, 0.4124], [0.3799, 0.4085], [0.3823, 0.4084], [0.3799, 0.4146], [0.3836, 0.4135], [0.3838, 0.4108], [0.3844, 0.4153], [0.3863, 0.4136], [0.3875, 0.4163], [0.3921, 0.4161], [0.3921, 0.4117], [0.3943, 0.4129], [0.3915, 0.4107], [0.393, 0.4086], [0.3945, 0.4112], [0.3987, 0.411], [0.3959, 0.4163], [0.3987, 0.4173], [0.401, 0.4141], [0.4096, 0.4168], [0.4096, 0.412], [0.4221, 0.4056], [0.4272, 0.4142], [0.4229, 0.418], [0.4238, 0.42], [0.4294, 0.4186], [0.4288, 0.4167], [0.4328, 0.4177], [0.4324, 0.4149], [0.4348, 0.4183], [0.438, 0.418], [0.4356, 0.4155], [0.4395, 0.4164], [0.4411, 0.4135], [0.4388, 0.422], [0.4471, 0.4217], [0.4489, 0.4238], [0.4513, 0.4223], [0.453, 0.4145], [0.4596, 0.4176], [0.4621, 0.4135], [0.4633, 0.4181], [0.4723, 0.4198], [0.4741, 0.4258], [0.4814, 0.426], [0.4806, 0.4289], [0.4828, 0.4277], [0.4843, 0.4331], [0.4879, 0.4337], [0.4882, 0.43], [0.4915, 0.4318], [0.4955, 0.4302], [0.4997, 0.4336], [0.4971, 0.435], [0.4987, 0.4439], [0.4955, 0.4492], [0.5001, 0.4549], [0.4946, 0.4591], [0.4905, 0.4609], [0.4728, 0.4579], [0.4696, 0.4601], [0.465, 0.4562], [0.463, 0.4574], [0.4658, 0.463], [0.4622, 0.4674], [0.4634, 0.4702], [0.4728, 0.4693], [0.4746, 0.4733], [0.481, 0.4762], [0.48, 0.4823], [0.4735, 0.4844], [0.4735, 0.4884], [0.4683, 0.4912], [0.4681, 0.4982], [0.4636, 0.5023], [0.4569, 0.5055], [0.4547, 0.5028], [0.4482, 0.5055], [0.4449, 0.5178], [0.4419, 0.5163], [0.439, 0.5284], [0.4362, 0.5296], [0.4345, 0.5419], [0.4266, 0.5406], [0.4222, 0.5326], [0.4117, 0.5357], [0.4061, 0.5332], [0.4001, 0.5351], [0.3986, 0.5308], [0.3907, 0.5292], [0.3904, 0.5316], [0.381, 0.5335], [0.3816, 0.537], [0.3663, 0.5365], [0.3647, 0.5326], [0.3513, 0.5403], [0.3404, 0.541], [0.3375, 0.5406], [0.3353, 0.5355], [0.3411, 0.5351], [0.3391, 0.5299], [0.3371, 0.5276], [0.3313, 0.5279], [0.3163, 0.5333], [0.316, 0.5376], [0.3111, 0.542], [0.3111, 0.5466], [0.3069, 0.5465], [0.3035, 0.5504], [0.2973, 0.5502], [0.295, 0.5407], [0.2682, 0.5395], [0.2585, 0.5323], [0.248, 0.5306], [0.2445, 0.5192], [0.2398, 0.5222], [0.2354, 0.5216], [0.2339, 0.5196], [0.2364, 0.5172], [0.2331, 0.5082], [0.2367, 0.5095], [0.2399, 0.5071], [0.2367, 0.5043], [0.2347, 0.5062], [0.2323, 0.5022], [0.2356, 0.503], [0.239, 0.4988], [0.2425, 0.499], [0.2455, 0.4917], [0.2408, 0.4849], [0.2537, 0.48], [0.2467, 0.4761], [0.2496, 0.4717], [0.2596, 0.466], [0.2586, 0.4579], [0.2612, 0.4527], [0.2582, 0.4449], [0.2539, 0.4442], [0.2571, 0.438], [0.2527, 0.4366], [0.2559, 0.4312], [0.2553, 0.427], [0.2582, 0.4317], [0.2621, 0.4278], [0.2568, 0.4271], [0.2563, 0.4212], [0.2628, 0.4249], [0.2663, 0.4186], [0.272, 0.4187], [0.2694, 0.4238], [0.2742, 0.4247], [0.2708, 0.4264], [0.2678, 0.4231], [0.2681, 0.4295], [0.2871, 0.4292], [0.2892, 0.4384], [0.2856, 0.4378], [0.2837, 0.4401], [0.2867, 0.4454], [0.2842, 0.449], [0.2869, 0.4512], [0.2829, 0.4547], [0.2772, 0.4521], [0.2754, 0.4563], [0.2793, 0.4604], [0.2824, 0.4617], [0.2829, 0.4569], [0.2852, 0.4586], [0.2913, 0.4559], [0.2908, 0.4528], [0.2961, 0.4505], [0.2977, 0.4426], [0.2986, 0.4464], [0.3064, 0.4459], [0.3083, 0.4482], [0.3132, 0.4441], [0.3134, 0.448], [0.3195, 0.4493], [0.3209, 0.4468], [0.3169, 0.4358], [0.3199, 0.4355], [0.3215, 0.4383], [0.3246, 0.4346], [0.3234, 0.4298], [0.3165, 0.4262], [0.321, 0.4244], [0.3181, 0.4198], [0.3348, 0.4163], [0.3336, 0.4062], [0.3312, 0.4058], [0.3288, 0.4096], [0.3155, 0.4096], [0.3093, 0.4052], [0.3068, 0.3958], [0.3101, 0.3905], [0.3148, 0.3893], [0.3264, 0.3782], [0.3474, 0.3673], [0.3499, 0.3637], [0.3558, 0.363], [0.3564, 0.3589], [0.3643, 0.3566]]] },
  { name: "Maharashtra", rings: [[[0.2442, 0.5191], [0.2489, 0.5312], [0.2585, 0.5323], [0.2707, 0.5402], [0.295, 0.5407], [0.2962, 0.5488], [0.3006, 0.5505], [0.3111, 0.5466], [0.3111, 0.542], [0.316, 0.5376], [0.3163, 0.5333], [0.3313, 0.5279], [0.3371, 0.5276], [0.3391, 0.5299], [0.3411, 0.5351], [0.3353, 0.5355], [0.3375, 0.5406], [0.3404, 0.541], [0.3513, 0.5403], [0.3647, 0.5326], [0.3663, 0.5365], [0.3816, 0.537], [0.381, 0.5335], [0.3904, 0.5316], [0.3907, 0.5292], [0.3986, 0.5308], [0.4001, 0.5351], [0.4061, 0.5332], [0.4117, 0.5357], [0.4222, 0.5326], [0.4266, 0.5406], [0.4348, 0.5428], [0.4275, 0.5498], [0.432, 0.5633], [0.429, 0.5655], [0.4333, 0.5659], [0.4331, 0.5747], [0.426, 0.5777], [0.4263, 0.5809], [0.4309, 0.5834], [0.4302, 0.5878], [0.4267, 0.5878], [0.4295, 0.5898], [0.4263, 0.5922], [0.4308, 0.5914], [0.4343, 0.5982], [0.4415, 0.6029], [0.4383, 0.6042], [0.4401, 0.6063], [0.4371, 0.6087], [0.4329, 0.608], [0.4316, 0.605], [0.4288, 0.6071], [0.4224, 0.6184], [0.4248, 0.6241], [0.4176, 0.6284], [0.411, 0.6234], [0.4122, 0.6173], [0.4099, 0.6146], [0.4125, 0.6125], [0.4134, 0.605], [0.4077, 0.5988], [0.3981, 0.6019], [0.3911, 0.5981], [0.3891, 0.6031], [0.3823, 0.6001], [0.3827, 0.597], [0.3794, 0.5967], [0.379, 0.5934], [0.3682, 0.5923], [0.3626, 0.5884], [0.3644, 0.5927], [0.3614, 0.5965], [0.3626, 0.6032], [0.3587, 0.6047], [0.3583, 0.6103], [0.3516, 0.6069], [0.3489, 0.6082], [0.3485, 0.6151], [0.3457, 0.6171], [0.3514, 0.6237], [0.345, 0.6284], [0.3451, 0.6324], [0.3408, 0.6326], [0.3386, 0.6365], [0.34, 0.6403], [0.3337, 0.6403], [0.3351, 0.6377], [0.3323, 0.6356], [0.3259, 0.6453], [0.3212, 0.6443], [0.32, 0.6529], [0.3146, 0.6535], [0.3161, 0.6558], [0.3131, 0.6605], [0.308, 0.6579], [0.307, 0.6611], [0.3022, 0.6632], [0.3037, 0.6723], [0.2995, 0.6703], [0.2974, 0.6727], [0.2957, 0.6705], [0.2899, 0.6719], [0.2886, 0.6689], [0.286, 0.6704], [0.2809, 0.667], [0.2791, 0.67], [0.2816, 0.6739], [0.2821, 0.6835], [0.2703, 0.6837], [0.2681, 0.6873], [0.2642, 0.6839], [0.2596, 0.6841], [0.2591, 0.6896], [0.2522, 0.6913], [0.252, 0.6949], [0.2484, 0.6965], [0.2455, 0.6931], [0.2428, 0.6973], [0.2392, 0.697], [0.2422, 0.7016], [0.2411, 0.7056], [0.2466, 0.7077], [0.2458, 0.7113], [0.2421, 0.7124], [0.2453, 0.7128], [0.242, 0.7213], [0.2378, 0.7209], [0.2318, 0.7267], [0.227, 0.7206], [0.221, 0.7228], [0.2142, 0.7124], [0.2127, 0.7012], [0.21, 0.6978], [0.2124, 0.6965], [0.21, 0.695], [0.2081, 0.6814], [0.2101, 0.681], [0.2061, 0.6727], [0.2078, 0.6724], [0.2054, 0.6693], [0.2044, 0.6557], [0.1982, 0.6431], [0.1992, 0.6412], [0.2032, 0.645], [0.203, 0.6397], [0.2012, 0.6417], [0.1977, 0.6388], [0.1959, 0.6278], [0.1963, 0.6243], [0.1998, 0.6241], [0.1975, 0.6211], [0.2013, 0.618], [0.1992, 0.6161], [0.1945, 0.6215], [0.1952, 0.6122], [0.1936, 0.6126], [0.1954, 0.6093], [0.1937, 0.6117], [0.1938, 0.601], [0.1917, 0.6005], [0.1897, 0.5903], [0.1909, 0.5869], [0.1928, 0.5879], [0.1923, 0.5811], [0.1965, 0.5782], [0.2059, 0.5839], [0.2098, 0.5788], [0.2134, 0.579], [0.2123, 0.5729], [0.2156, 0.568], [0.2126, 0.5644], [0.2144, 0.5623], [0.2208, 0.5672], [0.2294, 0.5614], [0.228, 0.5535], [0.2183, 0.5474], [0.2255, 0.5473], [0.2295, 0.5398], [0.2412, 0.5352], [0.2266, 0.5367], [0.2244, 0.5324], [0.2277, 0.53], [0.2251, 0.5259], [0.2442, 0.5191]]] },
  { name: "Manipur", rings: [[[0.8597, 0.3982], [0.8591, 0.4028], [0.8629, 0.4046], [0.86, 0.4128], [0.8649, 0.4155], [0.8647, 0.4193], [0.852, 0.4423], [0.847, 0.4586], [0.8364, 0.456], [0.8346, 0.4534], [0.8271, 0.4554], [0.8222, 0.4499], [0.8193, 0.4529], [0.8191, 0.4508], [0.8146, 0.4522], [0.8108, 0.4499], [0.8149, 0.4265], [0.8175, 0.4265], [0.8238, 0.4112], [0.826, 0.4097], [0.8301, 0.4133], [0.8371, 0.4011], [0.8425, 0.4], [0.8515, 0.4034], [0.8597, 0.3982]]] },
  { name: "Meghalaya", rings: [[[0.7765, 0.3827], [0.7786, 0.3863], [0.7902, 0.3837], [0.7857, 0.3881], [0.7878, 0.3894], [0.7859, 0.3974], [0.7927, 0.3946], [0.7984, 0.4012], [0.8011, 0.4003], [0.7983, 0.4043], [0.8049, 0.4089], [0.8055, 0.4127], [0.797, 0.4154], [0.795, 0.4189], [0.7831, 0.4137], [0.7701, 0.416], [0.7588, 0.4132], [0.7337, 0.4152], [0.7148, 0.4101], [0.7159, 0.4017], [0.7204, 0.3995], [0.7166, 0.3949], [0.7235, 0.3876], [0.7344, 0.3857], [0.7355, 0.3898], [0.7376, 0.3876], [0.7389, 0.3897], [0.7486, 0.388], [0.7513, 0.3901], [0.7504, 0.3923], [0.7564, 0.391], [0.7572, 0.3956], [0.7606, 0.3917], [0.7664, 0.3906], [0.768, 0.3851], [0.7708, 0.3895], [0.7727, 0.3842], [0.7765, 0.3827]]] },
  { name: "Mizoram", rings: [[[0.8054, 0.4397], [0.8123, 0.4406], [0.8108, 0.4499], [0.8218, 0.4519], [0.8251, 0.4643], [0.8235, 0.4824], [0.8206, 0.4868], [0.8156, 0.4854], [0.8167, 0.4897], [0.8143, 0.4967], [0.8179, 0.5115], [0.8162, 0.5142], [0.8129, 0.5136], [0.8118, 0.5206], [0.8102, 0.5191], [0.8088, 0.5219], [0.8029, 0.5151], [0.7996, 0.5209], [0.7971, 0.4978], [0.7924, 0.4892], [0.7934, 0.4788], [0.7889, 0.4599], [0.7911, 0.4566], [0.79, 0.4453], [0.7939, 0.4452], [0.7952, 0.4492], [0.8043, 0.4362], [0.8054, 0.4397]]] },
  { name: "Nagaland", rings: [[[0.8792, 0.3543], [0.8799, 0.3629], [0.8747, 0.3707], [0.8768, 0.373], [0.8763, 0.3825], [0.8783, 0.3835], [0.8733, 0.3893], [0.8742, 0.3943], [0.8697, 0.4009], [0.8614, 0.4044], [0.8591, 0.4028], [0.8596, 0.3965], [0.8516, 0.4034], [0.8425, 0.4], [0.8371, 0.4011], [0.8302, 0.4132], [0.8269, 0.4119], [0.8256, 0.4054], [0.8216, 0.4016], [0.8351, 0.3874], [0.8358, 0.3926], [0.8414, 0.389], [0.8422, 0.3804], [0.8505, 0.3672], [0.8517, 0.3705], [0.8563, 0.3635], [0.8652, 0.3599], [0.8703, 0.3538], [0.8733, 0.3547], [0.8786, 0.3506], [0.8792, 0.3543]]] },
  { name: "Orissa", rings: [[[0.5604, 0.6144], [0.5588, 0.6151], [0.5604, 0.6144]], [[0.6242, 0.5604], [0.6282, 0.5623], [0.6239, 0.5639], [0.6244, 0.5617], [0.6212, 0.5645], [0.6242, 0.5604]], [[0.6246, 0.5599], [0.6267, 0.5603], [0.6246, 0.5599]], [[0.6, 0.5026], [0.6108, 0.5101], [0.6129, 0.5088], [0.6196, 0.5129], [0.6195, 0.5154], [0.6272, 0.5175], [0.6291, 0.5245], [0.6353, 0.5216], [0.6365, 0.5266], [0.6424, 0.5291], [0.6429, 0.533], [0.6314, 0.536], [0.6227, 0.5466], [0.6272, 0.5587], [0.6229, 0.5604], [0.6207, 0.5656], [0.6295, 0.5624], [0.62, 0.57], [0.6211, 0.5748], [0.6117, 0.5803], [0.612, 0.5824], [0.6147, 0.579], [0.6094, 0.5863], [0.6052, 0.5838], [0.6087, 0.5871], [0.5799, 0.5978], [0.5603, 0.6144], [0.5568, 0.6129], [0.5545, 0.6175], [0.5538, 0.6159], [0.5492, 0.6175], [0.5496, 0.6208], [0.546, 0.6251], [0.533, 0.6243], [0.525, 0.613], [0.5222, 0.6178], [0.52, 0.6157], [0.5198, 0.6197], [0.5153, 0.6183], [0.518, 0.6235], [0.5122, 0.6272], [0.51, 0.6253], [0.5062, 0.6297], [0.5087, 0.6329], [0.5064, 0.6359], [0.5076, 0.6381], [0.503, 0.6388], [0.4998, 0.6361], [0.4945, 0.6429], [0.4899, 0.6329], [0.4864, 0.637], [0.4856, 0.64], [0.4874, 0.6404], [0.4847, 0.6439], [0.4865, 0.6459], [0.4835, 0.6506], [0.4761, 0.6483], [0.4635, 0.6561], [0.4566, 0.6564], [0.4609, 0.6419], [0.4676, 0.6391], [0.4737, 0.6322], [0.4719, 0.6293], [0.4778, 0.6273], [0.4827, 0.6209], [0.4802, 0.6139], [0.481, 0.6045], [0.4761, 0.6017], [0.4772, 0.5926], [0.4708, 0.5886], [0.4713, 0.5844], [0.4736, 0.5822], [0.4761, 0.5852], [0.4824, 0.5856], [0.4857, 0.5911], [0.4889, 0.5887], [0.4935, 0.59], [0.4932, 0.593], [0.4968, 0.5911], [0.497, 0.5859], [0.4873, 0.5836], [0.4885, 0.5717], [0.4853, 0.5675], [0.486, 0.5567], [0.4894, 0.5587], [0.4948, 0.548], [0.5046, 0.5472], [0.5096, 0.5496], [0.5142, 0.5406], [0.5182, 0.5415], [0.5162, 0.5367], [0.5176, 0.5328], [0.5207, 0.5324], [0.5188, 0.5308], [0.5202, 0.5272], [0.5238, 0.5252], [0.5222, 0.519], [0.5251, 0.5133], [0.5366, 0.508], [0.5363, 0.5026], [0.5453, 0.509], [0.569, 0.5043], [0.5705, 0.5105], [0.5667, 0.5176], [0.57, 0.5168], [0.5741, 0.5201], [0.5781, 0.515], [0.5879, 0.5185], [0.5916, 0.5164], [0.5903, 0.5204], [0.5947, 0.5212], [0.5989, 0.51], [0.5963, 0.5044], [0.6, 0.5026]]] },
  { name: "Puducherry", rings: [[[0.4066, 0.8719], [0.4098, 0.8721], [0.4097, 0.8771], [0.4052, 0.8738], [0.4066, 0.8719]], [[0.4048, 0.8401], [0.4062, 0.843], [0.4093, 0.842], [0.4082, 0.8461], [0.4038, 0.8443], [0.4058, 0.8435], [0.4033, 0.8409], [0.4048, 0.8401]], [[0.2729, 0.8355], [0.2695, 0.8395], [0.2705, 0.8418], [0.2682, 0.837], [0.2729, 0.8355]], [[0.4818, 0.6909], [0.4846, 0.6911], [0.4818, 0.6909]]] },
  { name: "Punjab", rings: [[[0.288, 0.1588], [0.2899, 0.1614], [0.2805, 0.168], [0.2817, 0.1705], [0.2791, 0.1735], [0.2888, 0.1783], [0.2973, 0.2014], [0.3011, 0.2009], [0.3031, 0.1965], [0.3052, 0.2022], [0.3111, 0.2042], [0.3107, 0.2122], [0.3179, 0.2197], [0.3131, 0.2213], [0.3184, 0.2237], [0.3204, 0.234], [0.3152, 0.2323], [0.3139, 0.236], [0.3088, 0.2384], [0.3115, 0.2405], [0.3104, 0.2449], [0.3058, 0.2442], [0.3046, 0.2406], [0.3019, 0.244], [0.2982, 0.2422], [0.2998, 0.2441], [0.2971, 0.2503], [0.2994, 0.2524], [0.2933, 0.2566], [0.285, 0.2539], [0.2788, 0.2568], [0.275, 0.2545], [0.2683, 0.2638], [0.2663, 0.2597], [0.2685, 0.2565], [0.267, 0.2535], [0.2642, 0.2546], [0.264, 0.2508], [0.2611, 0.2528], [0.2554, 0.248], [0.2504, 0.2512], [0.2276, 0.2488], [0.2299, 0.2413], [0.227, 0.2342], [0.248, 0.2099], [0.2521, 0.2089], [0.2463, 0.2074], [0.2505, 0.1959], [0.2482, 0.1944], [0.2467, 0.1864], [0.2492, 0.1806], [0.2588, 0.1741], [0.2688, 0.1733], [0.2726, 0.168], [0.2714, 0.1641], [0.2759, 0.1642], [0.2767, 0.1665], [0.2881, 0.1556], [0.288, 0.1588]]] },
  { name: "Rajasthan", rings: [[[0.2275, 0.2486], [0.2468, 0.2498], [0.2478, 0.2525], [0.2451, 0.2553], [0.2494, 0.2565], [0.2497, 0.2644], [0.2471, 0.2671], [0.2491, 0.2714], [0.2566, 0.2687], [0.2638, 0.2748], [0.2735, 0.2737], [0.2725, 0.2779], [0.2771, 0.2825], [0.2757, 0.2855], [0.2784, 0.2963], [0.285, 0.3035], [0.2896, 0.3049], [0.2949, 0.3123], [0.2901, 0.3144], [0.2931, 0.3151], [0.2897, 0.32], [0.2909, 0.3223], [0.2988, 0.3232], [0.2968, 0.3177], [0.2974, 0.3156], [0.3023, 0.3166], [0.3008, 0.3113], [0.3064, 0.3123], [0.3059, 0.3159], [0.3085, 0.3163], [0.3085, 0.3187], [0.3166, 0.3102], [0.3195, 0.3106], [0.3214, 0.3127], [0.3196, 0.3295], [0.325, 0.3267], [0.3237, 0.3239], [0.3316, 0.3246], [0.3328, 0.3339], [0.3358, 0.3384], [0.3413, 0.3403], [0.3431, 0.3452], [0.3378, 0.3488], [0.3456, 0.3513], [0.3355, 0.3567], [0.3363, 0.3608], [0.3378, 0.3573], [0.3456, 0.3542], [0.3538, 0.3569], [0.3566, 0.3537], [0.3611, 0.3547], [0.3586, 0.3592], [0.3562, 0.3591], [0.3558, 0.363], [0.3499, 0.3637], [0.3474, 0.3673], [0.3264, 0.3782], [0.3148, 0.3893], [0.3101, 0.3905], [0.3068, 0.3958], [0.3093, 0.4052], [0.3155, 0.4096], [0.3288, 0.4096], [0.3312, 0.4058], [0.3336, 0.4062], [0.3348, 0.4163], [0.3181, 0.4198], [0.321, 0.4244], [0.3165, 0.4262], [0.3234, 0.4298], [0.3246, 0.4346], [0.3215, 0.4383], [0.3199, 0.4355], [0.3169, 0.4358], [0.3209, 0.4468], [0.3195, 0.4493], [0.3134, 0.448], [0.3132, 0.4441], [0.3083, 0.4482], [0.3064, 0.4459], [0.2986, 0.4464], [0.2977, 0.4426], [0.2961, 0.4505], [0.2908, 0.4528], [0.2913, 0.4559], [0.2852, 0.4586], [0.2829, 0.4569], [0.2824, 0.4617], [0.2793, 0.4604], [0.2754, 0.4563], [0.2772, 0.4521], [0.2829, 0.4547], [0.2869, 0.4512], [0.2842, 0.449], [0.2867, 0.4454], [0.2837, 0.4401], [0.2856, 0.4378], [0.2892, 0.4384], [0.2871, 0.4292], [0.2681, 0.4295], [0.2678, 0.4231], [0.2708, 0.4264], [0.2742, 0.4247], [0.2694, 0.4238], [0.272, 0.4187], [0.2663, 0.4186], [0.2628, 0.4249], [0.2568, 0.421], [0.2568, 0.4271], [0.2621, 0.4284], [0.2582, 0.4317], [0.2553, 0.427], [0.2559, 0.4312], [0.2527, 0.4366], [0.2571, 0.438], [0.2539, 0.4442], [0.2582, 0.4449], [0.2612, 0.4527], [0.2586, 0.4579], [0.2596, 0.466], [0.2496, 0.4717], [0.2467, 0.4761], [0.2537, 0.48], [0.2408, 0.4849], [0.23, 0.4745], [0.2277, 0.4758], [0.2258, 0.4722], [0.2197, 0.472], [0.2205, 0.4663], [0.216, 0.4665], [0.2159, 0.4636], [0.2114, 0.4608], [0.2133, 0.456], [0.2118, 0.4494], [0.2079, 0.4533], [0.2029, 0.4475], [0.2074, 0.4415], [0.2029, 0.4405], [0.2032, 0.4371], [0.198, 0.4428], [0.1922, 0.4416], [0.1911, 0.4384], [0.1864, 0.4367], [0.184, 0.4401], [0.1833, 0.4368], [0.1775, 0.4342], [0.1806, 0.433], [0.1748, 0.4331], [0.1714, 0.43], [0.1681, 0.4327], [0.166, 0.4311], [0.1655, 0.4334], [0.1636, 0.4312], [0.1483, 0.4333], [0.1429, 0.4313], [0.136, 0.4153], [0.1293, 0.407], [0.129, 0.3965], [0.1172, 0.3964], [0.1116, 0.3881], [0.1138, 0.3675], [0.103, 0.3661], [0.0929, 0.3587], [0.096, 0.346], [0.1092, 0.333], [0.1135, 0.3234], [0.1199, 0.3174], [0.1259, 0.317], [0.1318, 0.3274], [0.1357, 0.3281], [0.1666, 0.3191], [0.1677, 0.3133], [0.1754, 0.3052], [0.1815, 0.2911], [0.1986, 0.2819], [0.2086, 0.2634], [0.2123, 0.25], [0.2299, 0.2409], [0.2275, 0.2486]]] },
  { name: "Sikkim", rings: [[[0.6784, 0.3142], [0.6841, 0.3171], [0.6857, 0.3214], [0.6822, 0.3327], [0.6864, 0.3424], [0.6811, 0.3474], [0.6758, 0.3456], [0.6719, 0.3493], [0.6615, 0.3474], [0.6592, 0.3446], [0.6601, 0.3351], [0.6649, 0.3233], [0.6625, 0.3194], [0.6784, 0.3142]]] },
  { name: "Tamil Nadu", rings: [[[0.3932, 0.9232], [0.3971, 0.9285], [0.3902, 0.9255], [0.3932, 0.9232]], [[0.4166, 0.7923], [0.4238, 0.7972], [0.4242, 0.7949], [0.422, 0.8157], [0.419, 0.8255], [0.4148, 0.8295], [0.4093, 0.842], [0.4062, 0.843], [0.4066, 0.8406], [0.4033, 0.8409], [0.4058, 0.8435], [0.4038, 0.8443], [0.4082, 0.8461], [0.4068, 0.8537], [0.4098, 0.872], [0.4061, 0.8717], [0.4052, 0.8738], [0.4097, 0.8771], [0.4107, 0.893], [0.4064, 0.8938], [0.4029, 0.8911], [0.4006, 0.8928], [0.406, 0.8939], [0.4003, 0.8916], [0.3927, 0.8943], [0.3907, 0.8979], [0.3919, 0.9012], [0.3806, 0.9182], [0.3847, 0.9235], [0.3895, 0.9246], [0.3786, 0.9251], [0.3643, 0.9305], [0.3583, 0.937], [0.3579, 0.9404], [0.3602, 0.9411], [0.3563, 0.9441], [0.3552, 0.9528], [0.3394, 0.9619], [0.3322, 0.9605], [0.3253, 0.9551], [0.3307, 0.9477], [0.3273, 0.9415], [0.33, 0.9376], [0.3266, 0.933], [0.3347, 0.918], [0.333, 0.9149], [0.3272, 0.9146], [0.3306, 0.9035], [0.3283, 0.8994], [0.3311, 0.896], [0.3294, 0.8918], [0.3217, 0.8959], [0.3171, 0.8932], [0.3166, 0.8829], [0.3187, 0.8828], [0.3194, 0.8784], [0.3119, 0.8737], [0.3162, 0.87], [0.3131, 0.8668], [0.3142, 0.8648], [0.3059, 0.8657], [0.3085, 0.8604], [0.2994, 0.857], [0.2989, 0.8537], [0.3074, 0.8496], [0.3091, 0.8523], [0.3176, 0.8534], [0.3195, 0.8469], [0.3227, 0.8463], [0.3259, 0.8491], [0.33, 0.8463], [0.3354, 0.8479], [0.3374, 0.8422], [0.3429, 0.842], [0.346, 0.8367], [0.3367, 0.8325], [0.3411, 0.8289], [0.3406, 0.8196], [0.3449, 0.8194], [0.3478, 0.8132], [0.3508, 0.8127], [0.3526, 0.8152], [0.3546, 0.8138], [0.3599, 0.8166], [0.3589, 0.8188], [0.367, 0.821], [0.3746, 0.8071], [0.3799, 0.8061], [0.3814, 0.8082], [0.3831, 0.8064], [0.3884, 0.8086], [0.3904, 0.8046], [0.3931, 0.8058], [0.3966, 0.8029], [0.3951, 0.7993], [0.3968, 0.7987], [0.4014, 0.8011], [0.4041, 0.8], [0.4064, 0.8027], [0.4057, 0.8003], [0.412, 0.7983], [0.4154, 0.7936], [0.4139, 0.7923], [0.4166, 0.7923]]] },
  { name: "Tripura", rings: [[[0.7866, 0.4362], [0.7893, 0.4407], [0.7875, 0.4453], [0.791, 0.4473], [0.7908, 0.458], [0.7878, 0.4651], [0.7864, 0.4623], [0.7832, 0.4656], [0.7798, 0.4628], [0.7802, 0.471], [0.7739, 0.4783], [0.7759, 0.4839], [0.7693, 0.4889], [0.7632, 0.4777], [0.7633, 0.4851], [0.7613, 0.4839], [0.7553, 0.4624], [0.7573, 0.4624], [0.7591, 0.4543], [0.7619, 0.4545], [0.7619, 0.4501], [0.7686, 0.451], [0.7708, 0.446], [0.7737, 0.449], [0.7731, 0.4454], [0.778, 0.4491], [0.7785, 0.4424], [0.7846, 0.4408], [0.7866, 0.4362]]] },
  { name: "Uttar Pradesh", rings: [[[0.3404, 0.2333], [0.351, 0.239], [0.344, 0.2523], [0.3468, 0.259], [0.3517, 0.2582], [0.3528, 0.2638], [0.3633, 0.255], [0.3657, 0.2558], [0.3716, 0.2632], [0.3813, 0.2669], [0.3749, 0.2718], [0.3792, 0.2737], [0.3806, 0.2776], [0.3877, 0.2784], [0.3885, 0.2821], [0.3947, 0.2839], [0.3963, 0.2879], [0.4074, 0.2867], [0.4076, 0.2897], [0.4098, 0.2883], [0.4133, 0.2928], [0.4179, 0.2889], [0.4301, 0.2985], [0.4297, 0.2946], [0.4317, 0.2938], [0.4513, 0.3052], [0.4546, 0.313], [0.4584, 0.312], [0.4719, 0.3226], [0.4775, 0.3203], [0.4891, 0.3288], [0.4971, 0.3273], [0.4979, 0.3348], [0.5117, 0.3365], [0.5157, 0.3408], [0.5179, 0.3356], [0.5248, 0.336], [0.5339, 0.3409], [0.5381, 0.3558], [0.5439, 0.3568], [0.5436, 0.361], [0.5491, 0.3649], [0.539, 0.3643], [0.5379, 0.3677], [0.5335, 0.3686], [0.5335, 0.3709], [0.5417, 0.3735], [0.5414, 0.3779], [0.5368, 0.3781], [0.5366, 0.3802], [0.5416, 0.3865], [0.5526, 0.3904], [0.5558, 0.3955], [0.5514, 0.3972], [0.5466, 0.3949], [0.5452, 0.3977], [0.5394, 0.3958], [0.5315, 0.4054], [0.5162, 0.4139], [0.5167, 0.4245], [0.5225, 0.4328], [0.5179, 0.4369], [0.5197, 0.4415], [0.5117, 0.4563], [0.5041, 0.4578], [0.4956, 0.4495], [0.4987, 0.4439], [0.497, 0.4408], [0.4971, 0.435], [0.4998, 0.4352], [0.4987, 0.432], [0.4886, 0.43], [0.4879, 0.4337], [0.4843, 0.4331], [0.4828, 0.4277], [0.4806, 0.4289], [0.4814, 0.426], [0.4741, 0.4258], [0.4723, 0.4198], [0.4633, 0.4181], [0.4621, 0.4135], [0.4596, 0.4176], [0.453, 0.4145], [0.4513, 0.4223], [0.4489, 0.4238], [0.4471, 0.4217], [0.4388, 0.422], [0.4411, 0.4135], [0.4395, 0.4164], [0.4356, 0.4155], [0.438, 0.418], [0.4348, 0.4183], [0.4324, 0.4149], [0.4328, 0.4177], [0.4228, 0.4194], [0.4272, 0.4142], [0.4221, 0.4056], [0.4096, 0.412], [0.4098, 0.4168], [0.401, 0.4141], [0.3987, 0.4173], [0.3959, 0.4163], [0.3987, 0.411], [0.3945, 0.4112], [0.3927, 0.4086], [0.393, 0.4156], [0.3876, 0.4164], [0.3863, 0.4136], [0.3844, 0.4153], [0.3838, 0.4108], [0.3836, 0.4135], [0.3798, 0.4145], [0.3823, 0.4083], [0.3799, 0.4085], [0.3789, 0.4124], [0.3771, 0.4101], [0.383, 0.4074], [0.3807, 0.405], [0.3816, 0.4012], [0.3784, 0.4029], [0.3786, 0.4055], [0.3755, 0.4032], [0.378, 0.4056], [0.3765, 0.408], [0.3731, 0.4051], [0.3662, 0.4104], [0.3705, 0.4114], [0.3721, 0.4213], [0.377, 0.4263], [0.376, 0.4334], [0.3801, 0.4322], [0.3827, 0.4418], [0.3773, 0.4477], [0.3686, 0.4405], [0.3656, 0.4444], [0.3636, 0.4435], [0.3642, 0.4408], [0.3597, 0.4359], [0.3613, 0.4313], [0.3581, 0.4249], [0.3631, 0.4201], [0.3631, 0.4171], [0.3667, 0.4158], [0.3622, 0.4075], [0.3663, 0.4011], [0.3777, 0.399], [0.376, 0.3948], [0.3795, 0.3931], [0.3838, 0.3835], [0.3819, 0.3815], [0.3876, 0.3755], [0.3876, 0.3711], [0.3831, 0.3667], [0.3835, 0.3629], [0.375, 0.359], [0.3704, 0.3604], [0.3639, 0.3564], [0.3595, 0.3577], [0.3597, 0.3537], [0.3538, 0.3569], [0.3456, 0.3542], [0.3357, 0.36], [0.3355, 0.3567], [0.3456, 0.3513], [0.3383, 0.3497], [0.3431, 0.3452], [0.3413, 0.3403], [0.3358, 0.3384], [0.3321, 0.3311], [0.331, 0.3243], [0.339, 0.3194], [0.3369, 0.3147], [0.3391, 0.3091], [0.3316, 0.2982], [0.3325, 0.2928], [0.3285, 0.2898], [0.3252, 0.2618], [0.3284, 0.2505], [0.3352, 0.244], [0.3404, 0.2333]]] },
  { name: "Uttaranchal", rings: [[[0.3896, 0.1997], [0.3963, 0.211], [0.4016, 0.2143], [0.4098, 0.2131], [0.4211, 0.2207], [0.4208, 0.2273], [0.4321, 0.2305], [0.4454, 0.2388], [0.4255, 0.2566], [0.4268, 0.262], [0.4217, 0.2673], [0.4234, 0.2757], [0.4187, 0.2793], [0.4139, 0.2928], [0.4098, 0.2883], [0.4076, 0.2897], [0.4074, 0.2867], [0.3963, 0.2879], [0.3947, 0.2839], [0.3885, 0.2821], [0.3877, 0.2784], [0.3806, 0.2776], [0.3792, 0.2737], [0.3749, 0.2718], [0.3813, 0.2669], [0.3716, 0.2632], [0.3676, 0.2566], [0.3633, 0.255], [0.3528, 0.2638], [0.3517, 0.2582], [0.3468, 0.259], [0.344, 0.2523], [0.351, 0.239], [0.3398, 0.233], [0.3473, 0.2289], [0.3436, 0.2205], [0.3497, 0.2068], [0.364, 0.2019], [0.3675, 0.205], [0.3774, 0.205], [0.3819, 0.2086], [0.3836, 0.2081], [0.3813, 0.2007], [0.3851, 0.1956], [0.3896, 0.1997]]] },
  { name: "West Bengal", rings: [[[0.6739, 0.5333], [0.675, 0.5351], [0.6739, 0.5333]], [[0.6842, 0.533], [0.6863, 0.5347], [0.6842, 0.533]], [[0.681, 0.532], [0.6812, 0.5342], [0.681, 0.532]], [[0.6751, 0.532], [0.6755, 0.5345], [0.6751, 0.532]], [[0.6823, 0.5315], [0.6817, 0.534], [0.6823, 0.5315]], [[0.6763, 0.5302], [0.6771, 0.5326], [0.6763, 0.5302]], [[0.6888, 0.5298], [0.6902, 0.5331], [0.6888, 0.5298]], [[0.6834, 0.5298], [0.681, 0.5305], [0.6834, 0.5298]], [[0.6682, 0.5298], [0.6684, 0.533], [0.6682, 0.5298]], [[0.6726, 0.5297], [0.6722, 0.5328], [0.6726, 0.5297]], [[0.68, 0.5295], [0.6817, 0.5317], [0.68, 0.5295]], [[0.665, 0.5293], [0.6652, 0.5332], [0.665, 0.5293]], [[0.6911, 0.5293], [0.6909, 0.5327], [0.6911, 0.5293]], [[0.6886, 0.5291], [0.6895, 0.5315], [0.6886, 0.5291]], [[0.6754, 0.5288], [0.6756, 0.5321], [0.6754, 0.5288]], [[0.6857, 0.5285], [0.6869, 0.5322], [0.6857, 0.5285]], [[0.6713, 0.5289], [0.6709, 0.5334], [0.6713, 0.5289]], [[0.6655, 0.5279], [0.6682, 0.5307], [0.6676, 0.5345], [0.6653, 0.5327], [0.6655, 0.5279]], [[0.687, 0.5279], [0.6888, 0.5298], [0.687, 0.5279]], [[0.6699, 0.5279], [0.6697, 0.5304], [0.6699, 0.5279]], [[0.6894, 0.5278], [0.6911, 0.5291], [0.6894, 0.5278]], [[0.6841, 0.5278], [0.6846, 0.5326], [0.682, 0.5299], [0.6841, 0.5278]], [[0.6765, 0.5274], [0.6776, 0.5291], [0.6765, 0.5274]], [[0.668, 0.5292], [0.6675, 0.5274], [0.668, 0.5292]], [[0.6893, 0.5272], [0.6894, 0.5294], [0.6878, 0.5281], [0.6893, 0.5272]], [[0.6773, 0.527], [0.6773, 0.5297], [0.6773, 0.527]], [[0.6727, 0.5271], [0.672, 0.5298], [0.6727, 0.5271]], [[0.6806, 0.5264], [0.6816, 0.5313], [0.6806, 0.5264]], [[0.6754, 0.5263], [0.6746, 0.5293], [0.6754, 0.5263]], [[0.6716, 0.5263], [0.6716, 0.5293], [0.6716, 0.5263]], [[0.6893, 0.5263], [0.69, 0.528], [0.6893, 0.5263]], [[0.684, 0.5265], [0.6829, 0.5283], [0.684, 0.5265]], [[0.6828, 0.5285], [0.6826, 0.5259], [0.6828, 0.5285]], [[0.6867, 0.5258], [0.6862, 0.5283], [0.6867, 0.5258]], [[0.6875, 0.5251], [0.6867, 0.5281], [0.6875, 0.5251]], [[0.6768, 0.525], [0.6775, 0.5267], [0.6768, 0.525]], [[0.6688, 0.5247], [0.6703, 0.5271], [0.6684, 0.5297], [0.6667, 0.5265], [0.6688, 0.5247]], [[0.6849, 0.5245], [0.6866, 0.5291], [0.6842, 0.5273], [0.6849, 0.5245]], [[0.6629, 0.5242], [0.6621, 0.5324], [0.6598, 0.5308], [0.6629, 0.5242]], [[0.6828, 0.5241], [0.683, 0.527], [0.6828, 0.5241]], [[0.6886, 0.5236], [0.6902, 0.5255], [0.6884, 0.5275], [0.6886, 0.5236]], [[0.6777, 0.5235], [0.6782, 0.5272], [0.6777, 0.5235]], [[0.6759, 0.5235], [0.6756, 0.5261], [0.6759, 0.5235]], [[0.6724, 0.5232], [0.6728, 0.527], [0.6707, 0.5256], [0.6724, 0.5232]], [[0.6807, 0.5232], [0.6819, 0.5273], [0.6807, 0.5232]], [[0.6783, 0.5227], [0.6781, 0.5244], [0.6783, 0.5227]], [[0.6843, 0.5228], [0.6886, 0.5245], [0.6859, 0.5263], [0.6843, 0.5228]], [[0.6808, 0.5223], [0.6834, 0.5239], [0.6808, 0.5223]], [[0.6815, 0.5208], [0.6831, 0.5225], [0.6815, 0.5208]], [[0.6789, 0.5195], [0.6794, 0.522], [0.6789, 0.5195]], [[0.663, 0.5192], [0.6602, 0.523], [0.663, 0.5192]], [[0.6836, 0.5195], [0.6863, 0.5197], [0.6864, 0.5224], [0.6817, 0.5215], [0.6836, 0.5195]], [[0.6863, 0.5186], [0.6848, 0.5187], [0.6863, 0.5186]], [[0.6898, 0.5184], [0.6911, 0.5223], [0.6885, 0.5203], [0.6898, 0.5184]], [[0.6853, 0.5175], [0.6843, 0.5193], [0.6853, 0.5175]], [[0.6833, 0.5173], [0.6816, 0.5182], [0.6833, 0.5173]], [[0.6837, 0.516], [0.6852, 0.5174], [0.6837, 0.516]], [[0.6852, 0.5146], [0.6867, 0.5171], [0.6841, 0.5159], [0.6852, 0.5146]], [[0.6877, 0.5139], [0.687, 0.5193], [0.6882, 0.5182], [0.6897, 0.5233], [0.6866, 0.5203], [0.686, 0.5145], [0.6877, 0.5139]], [[0.6893, 0.5135], [0.6908, 0.5158], [0.6886, 0.5188], [0.6893, 0.5135]], [[0.68, 0.5132], [0.6828, 0.5145], [0.6796, 0.5174], [0.6808, 0.5199], [0.6781, 0.5166], [0.68, 0.5132]], [[0.6845, 0.5139], [0.6803, 0.518], [0.6845, 0.5139]], [[0.6835, 0.5107], [0.6842, 0.5146], [0.6816, 0.5135], [0.6835, 0.5107]], [[0.6847, 0.5081], [0.6873, 0.5102], [0.6866, 0.5128], [0.6845, 0.5105], [0.6868, 0.5146], [0.6855, 0.5118], [0.6856, 0.5135], [0.6832, 0.5126], [0.6847, 0.5081]], [[0.6888, 0.5075], [0.6912, 0.5159], [0.6877, 0.5117], [0.6888, 0.5075]], [[0.6851, 0.5069], [0.6862, 0.509], [0.6851, 0.5069]], [[0.6826, 0.5036], [0.6842, 0.5058], [0.6826, 0.5036]], [[0.6861, 0.502], [0.6862, 0.508], [0.6845, 0.5034], [0.6861, 0.502]], [[0.6868, 0.5014], [0.6892, 0.5059], [0.6875, 0.5099], [0.6868, 0.5014]], [[0.6626, 0.3479], [0.6719, 0.3493], [0.6768, 0.3454], [0.6832, 0.3474], [0.6853, 0.3484], [0.6855, 0.3538], [0.69, 0.3542], [0.6933, 0.3587], [0.7008, 0.3567], [0.709, 0.3596], [0.7086, 0.3617], [0.7155, 0.3623], [0.7158, 0.371], [0.7111, 0.376], [0.7117, 0.3804], [0.7088, 0.3785], [0.7075, 0.3828], [0.7092, 0.3841], [0.7062, 0.3875], [0.6944, 0.3817], [0.6921, 0.3727], [0.6882, 0.3705], [0.6868, 0.3737], [0.6914, 0.3776], [0.6859, 0.3763], [0.6846, 0.3783], [0.6777, 0.3702], [0.672, 0.3676], [0.6714, 0.3646], [0.6703, 0.366], [0.6689, 0.3699], [0.6735, 0.3705], [0.6748, 0.374], [0.6642, 0.3813], [0.6644, 0.3854], [0.6614, 0.3892], [0.6623, 0.3932], [0.667, 0.3928], [0.6753, 0.403], [0.6835, 0.4026], [0.6845, 0.4079], [0.6896, 0.4102], [0.6869, 0.4145], [0.6723, 0.4135], [0.671, 0.4219], [0.6687, 0.4246], [0.6657, 0.4215], [0.663, 0.4223], [0.6641, 0.4248], [0.659, 0.4313], [0.6689, 0.4409], [0.6812, 0.4445], [0.6799, 0.4499], [0.6823, 0.4542], [0.6763, 0.4584], [0.6759, 0.4657], [0.6831, 0.4706], [0.6807, 0.4786], [0.6891, 0.48], [0.6846, 0.4869], [0.6883, 0.4922], [0.688, 0.4973], [0.6833, 0.4959], [0.688, 0.4999], [0.6848, 0.5058], [0.6794, 0.5005], [0.6855, 0.5084], [0.6811, 0.5136], [0.6781, 0.513], [0.6791, 0.5089], [0.6776, 0.5165], [0.6762, 0.5139], [0.6773, 0.523], [0.6754, 0.521], [0.6762, 0.5233], [0.6738, 0.5241], [0.6757, 0.5189], [0.6732, 0.5235], [0.6728, 0.5197], [0.6712, 0.5239], [0.6702, 0.5211], [0.6707, 0.5267], [0.6696, 0.5226], [0.6695, 0.5248], [0.6669, 0.5239], [0.667, 0.529], [0.6637, 0.5241], [0.6649, 0.5146], [0.6608, 0.5131], [0.6619, 0.51], [0.6602, 0.5128], [0.6583, 0.512], [0.6552, 0.5055], [0.6569, 0.5115], [0.6645, 0.5168], [0.6606, 0.5197], [0.6576, 0.5167], [0.6603, 0.5198], [0.6566, 0.5267], [0.6429, 0.533], [0.6417, 0.528], [0.6362, 0.5262], [0.6353, 0.5216], [0.6291, 0.5245], [0.6287, 0.5187], [0.6195, 0.5154], [0.6247, 0.5104], [0.6209, 0.5061], [0.6208, 0.5012], [0.6175, 0.5011], [0.6165, 0.4978], [0.6103, 0.4944], [0.6108, 0.4896], [0.6141, 0.4874], [0.6039, 0.4872], [0.5987, 0.4822], [0.595, 0.4827], [0.5923, 0.4783], [0.5935, 0.4714], [0.599, 0.4706], [0.5987, 0.4676], [0.6068, 0.4731], [0.611, 0.4661], [0.6218, 0.4641], [0.6218, 0.4593], [0.6356, 0.4595], [0.6372, 0.4571], [0.6354, 0.4523], [0.6422, 0.4543], [0.6432, 0.4498], [0.6493, 0.4485], [0.6476, 0.4456], [0.6529, 0.4401], [0.6517, 0.4342], [0.656, 0.4338], [0.6557, 0.4295], [0.6532, 0.428], [0.6579, 0.4236], [0.6518, 0.4168], [0.6543, 0.4107], [0.6514, 0.4063], [0.6564, 0.402], [0.6609, 0.4031], [0.6602, 0.3968], [0.6527, 0.3889], [0.6539, 0.3847], [0.6676, 0.3742], [0.6642, 0.3695], [0.6658, 0.3674], [0.6619, 0.368], [0.6641, 0.3567], [0.6584, 0.348], [0.6597, 0.3445], [0.6626, 0.3479]]] }
];
const indiaAnchors = [
  { id: "udhampur", x: 0.2596, y: 0.1406 },
  { id: "durga", x: 0.329, y: 0.2965 },
  { id: "maharashtra", x: 0.2832, y: 0.5937 },
  { id: "goa", x: 0.2257, y: 0.73 },
  { id: "andhra", x: 0.4063, y: 0.717 },
  { id: "bangalore", x: 0.3406, y: 0.8098 },
  { id: "chennai", x: 0.4225, y: 0.8063 }
];
const indiaMapHeight = 1.0504;
const indiaPins = [
  {
    id: "udhampur",
    label: "Udhampur",
    sub: "Jammu & Kashmir",
    place: "Jammu & Kashmir",
    side: "left",
    dy: 0
  },
  {
    id: "durga",
    label: "Durga",
    sub: "Delhi",
    place: "Delhi",
    side: "right",
    dy: 0
  },
  {
    id: "maharashtra",
    label: "Maharashtra",
    place: "Maharashtra",
    legend: "State network",
    side: "left",
    dy: 0
  },
  {
    id: "goa",
    label: "Goa",
    place: "Goa",
    legend: "State network",
    side: "left",
    dy: -26
  },
  {
    id: "andhra",
    label: "Andhra Pradesh",
    place: "Andhra Pradesh",
    legend: "State network",
    side: "right",
    dy: 0,
    flip: true
  },
  {
    id: "bangalore",
    label: "Bangalore",
    sub: "Karnataka",
    place: "Karnataka",
    side: "left",
    dy: 0,
    head: true
  },
  {
    id: "chennai",
    label: "Chennai",
    sub: "Tamil Nadu",
    place: "Tamil Nadu",
    side: "right",
    dy: 0
  }
];
const TILT = 48 * Math.PI / 180;
const CAMERA = 3.2;
const FOCAL = 2.9;
const LIGHT = { x: -0.45, y: -0.89 };
const inside = (px, py, poly) => {
  let hit = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0];
    const yi = poly[i][1];
    const xj = poly[j][0];
    const yj = poly[j][1];
    if (yi > py !== yj > py && px < (xj - xi) * (py - yi) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
};
const bounds = (poly) => {
  let x0 = Infinity;
  let y0 = Infinity;
  let x1 = -Infinity;
  let y1 = -Infinity;
  for (const [x, y] of poly) {
    if (x < x0) x0 = x;
    if (y < y0) y0 = y;
    if (x > x1) x1 = x;
    if (y > y1) y1 = y;
  }
  return [x0, y0, x1, y1];
};
const anchorsById = new Map(indiaAnchors.map((a) => [a.id, a]));
const IndiaMap3D = memo(() => {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const hoverRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !wrap || !ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let unit = 0;
    let ox = 0;
    let oy = 0;
    const plate = document.createElement("canvas");
    const pctx = plate.getContext("2d");
    const regions = indiaRegions.map((r) => ({
      name: r.name,
      rings: r.rings,
      bounds: r.rings.map(bounds),
      dots: []
    }));
    const buildDotField = () => {
      const step = 0.0125;
      for (const reg of regions) reg.dots.length = 0;
      for (let v = 0; v <= indiaMapHeight; v += step) {
        for (let u = 0; u <= 1; u += step) {
          for (const reg of regions) {
            let hit = false;
            for (let k = 0; k < reg.rings.length; k++) {
              const bb = reg.bounds[k];
              if (u < bb[0] || u > bb[2] || v < bb[1] || v > bb[3]) continue;
              if (inside(u, v, reg.rings[k])) {
                hit = true;
                break;
              }
            }
            if (hit) {
              reg.dots.push({ u, v });
              break;
            }
          }
        }
      }
    };
    buildDotField();
    const raw = (u, v, h) => {
      const X = u - 0.5;
      const Y = (v - 0.5) * indiaMapHeight;
      const px = X;
      const py = Y * Math.cos(TILT) - h * Math.sin(TILT);
      const pz = Y * Math.sin(TILT) + h * Math.cos(TILT);
      const s = FOCAL / (CAMERA - pz);
      return { x: px * s, y: py * s, z: pz, s };
    };
    const project = (u, v, h) => {
      const p = raw(u, v, h);
      return { x: ox + p.x * unit, y: oy + p.y * unit, z: p.z, s: p.s };
    };
    const projectRing = (ring, h) => ring.map(([u, v]) => project(u, v, h));
    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      if (!rect.width) return;
      width = rect.width;
      height = Math.round(Math.min(width * 0.78, 660));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      plate.width = canvas.width;
      plate.height = canvas.height;
      pctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;
      for (const reg of regions) {
        for (const ring of reg.rings) {
          for (const [u, v] of ring) {
            for (const h of [0, -0.075]) {
              const p = raw(u, v, h);
              if (p.x < minX) minX = p.x;
              if (p.x > maxX) maxX = p.x;
              if (p.y < minY) minY = p.y;
              if (p.y > maxY) maxY = p.y;
            }
          }
        }
      }
      unit = Math.min(width * 0.96 / (maxX - minX), height * 0.94 / (maxY - minY));
      ox = width / 2 - (minX + maxX) / 2 * unit;
      oy = height / 2 - (minY + maxY) / 2 * unit;
      drawPlate();
    };
    const drawPlate = () => {
      if (!pctx) return;
      pctx.clearRect(0, 0, width, height);
      const ordered = regions.map((reg) => {
        let z = 0;
        for (const [u, v] of reg.rings[0]) z += raw(u, v, 0).z;
        return { reg, z: z / reg.rings[0].length };
      }).sort((a, b) => a.z - b.z);
      for (const { reg } of ordered) {
        for (const ring of reg.rings) {
          const top = projectRing(ring, 0);
          const base = projectRing(ring, -0.075);
          let gx = 0;
          let gy = 0;
          for (const p of top) {
            gx += p.x;
            gy += p.y;
          }
          gx /= top.length;
          gy /= top.length;
          for (let i = 0; i < top.length; i++) {
            const j = (i + 1) % top.length;
            const a = top[i];
            const b = top[j];
            let nx = b.y - a.y;
            let ny = -(b.x - a.x);
            const len = Math.hypot(nx, ny) || 1;
            nx /= len;
            ny /= len;
            const mx = (a.x + b.x) / 2 - gx;
            const my = (a.y + b.y) / 2 - gy;
            if (nx * mx + ny * my < 0) {
              nx = -nx;
              ny = -ny;
            }
            const lit = Math.max(0, nx * LIGHT.x + ny * LIGHT.y);
            pctx.beginPath();
            pctx.moveTo(a.x, a.y);
            pctx.lineTo(b.x, b.y);
            pctx.lineTo(base[j].x, base[j].y);
            pctx.lineTo(base[i].x, base[i].y);
            pctx.closePath();
            const tone = 16 + lit * 118;
            pctx.fillStyle = `rgb(${Math.round(tone + 10)},${Math.round(tone + 6)},${Math.round(tone + 18)})`;
            pctx.fill();
            if (lit > 0.28) {
              pctx.beginPath();
              pctx.moveTo(a.x, a.y);
              pctx.lineTo(b.x, b.y);
              pctx.strokeStyle = `rgba(255,255,255,${(lit - 0.28) * 0.5})`;
              pctx.lineWidth = 1.4;
              pctx.stroke();
            }
          }
          pctx.beginPath();
          pctx.moveTo(top[0].x, top[0].y);
          for (const p of top.slice(1)) pctx.lineTo(p.x, p.y);
          pctx.closePath();
          const g = pctx.createLinearGradient(top[0].x, top[0].y, top[top.length - 1].x, top[top.length - 1].y);
          g.addColorStop(0, "rgb(92,88,106)");
          g.addColorStop(1, "rgb(33,32,42)");
          pctx.fillStyle = g;
          pctx.fill();
        }
      }
      const dotR = 19e-4 * unit;
      for (const reg of regions) {
        for (const d of reg.dots) {
          const p = project(d.u, d.v, 0);
          const r = dotR * p.s;
          if (r < 0.3) continue;
          pctx.globalAlpha = 0.24 + 0.3 * Math.min(1, (p.z + 0.42) / 0.84);
          pctx.fillStyle = "#fff";
          pctx.beginPath();
          pctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          pctx.fill();
        }
      }
      pctx.globalAlpha = 1;
      pctx.lineWidth = 1;
      pctx.strokeStyle = "rgba(255,255,255,.14)";
      for (const { reg } of ordered) {
        for (const ring of reg.rings) {
          const top = projectRing(ring, 0);
          pctx.beginPath();
          pctx.moveTo(top[0].x, top[0].y);
          for (const p of top.slice(1)) pctx.lineTo(p.x, p.y);
          pctx.closePath();
          pctx.stroke();
        }
      }
    };
    const paint = (now) => {
      const t2 = now / 1e3;
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(plate, 0, 0, width, height);
      if (!reduce) {
        const sweep = t2 * 0.11 % 1.6 - 0.3;
        const gx = width * sweep;
        const gl = ctx.createLinearGradient(gx - width * 0.22, 0, gx + width * 0.22, height);
        gl.addColorStop(0, "rgba(255,255,255,0)");
        gl.addColorStop(0.5, "rgba(255,255,255,.055)");
        gl.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = gl;
        ctx.fillRect(0, 0, width, height);
      }
      const pulse = reduce ? 1 : 1 + Math.sin(t2 * 2.1) * 0.16;
      const hovered = hoverRef.current;
      const k = unit / 560;
      for (const pin of indiaPins) {
        const a = anchorsById.get(pin.id);
        if (!a) continue;
        const p = project(a.x, a.y, 0);
        const isHead = !!pin.head;
        const isHover = hovered === pin.id;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y + 2 * k, 9 * k * p.s, 3 * k * p.s, 0, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,0,0,.55)";
        ctx.fill();
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 30 * k * p.s);
        glow.addColorStop(0, isHead ? "rgba(255,59,47,.55)" : "rgba(225,6,0,.36)");
        glow.addColorStop(1, "rgba(225,6,0,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 30 * k * p.s, 0, Math.PI * 2);
        ctx.fill();
        const r = (isHead ? 6.6 : 5.2) * k * p.s * (isHead ? pulse : 1) * (isHover ? 1.35 : 1);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = isHead ? "#ff3b2f" : "#e10600";
        ctx.fill();
        ctx.lineWidth = 1.6;
        ctx.strokeStyle = "#fff";
        ctx.stroke();
        if (isHead) {
          const rr = r + 7 + (pulse - 1) * 20;
          ctx.beginPath();
          ctx.arc(p.x, p.y, rr, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255,59,47,${0.5 / pulse})`;
          ctx.lineWidth = 1.4;
          ctx.stroke();
        }
        drawLabel(pin, p, isHead, isHover);
      }
    };
    const drawLabel = (pin, p, isHead, isHover) => {
      if (width < 560) return;
      const flip = pin.flip && width < 700;
      const side = flip ? pin.side === "right" ? "left" : "right" : pin.side;
      const showSub = !!pin.sub && width >= 700;
      ctx.font = "800 11px Lato, system-ui, sans-serif";
      const nameW = ctx.measureText(pin.label.toUpperCase()).width;
      let subW = 0;
      if (showSub) {
        ctx.font = "400 9.5px Lato, system-ui, sans-serif";
        subW = ctx.measureText(pin.sub.toUpperCase()).width;
      }
      const padX = 9;
      const boxW = Math.max(nameW, subW) + padX * 2;
      const boxH = showSub ? 33 : 21;
      let bx = side === "right" ? p.x + 22 : p.x - 22 - boxW;
      let by = p.y - boxH / 2 + pin.dy;
      bx = Math.max(3, Math.min(width - boxW - 3, bx));
      by = Math.max(3, Math.min(height - boxH - 3, by));
      const edgeX = side === "right" ? bx : bx + boxW;
      ctx.beginPath();
      ctx.moveTo(edgeX, by + boxH / 2);
      ctx.lineTo(p.x, p.y);
      ctx.strokeStyle = isHover ? "rgba(255,59,47,.75)" : "rgba(225,6,0,.45)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = "rgba(8,8,8,.92)";
      ctx.strokeStyle = isHover ? "#ff3b2f" : isHead ? "rgba(255,59,47,.8)" : "rgba(225,6,0,.55)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(bx, by, boxW, boxH, 3);
      ctx.fill();
      ctx.stroke();
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#fff";
      ctx.font = "800 11px Lato, system-ui, sans-serif";
      ctx.fillText(pin.label.toUpperCase(), bx + padX, by + (showSub ? 12 : boxH / 2 + 0.5));
      if (showSub) {
        ctx.fillStyle = "rgba(255,255,255,.5)";
        ctx.font = "400 9.5px Lato, system-ui, sans-serif";
        ctx.fillText(pin.sub.toUpperCase(), bx + padX, by + 24);
      }
    };
    let raf = 0;
    let running = true;
    const frame = (now) => {
      if (!running) return;
      paint(now);
      raf = requestAnimationFrame(frame);
    };
    resize();
    paint(0);
    raf = requestAnimationFrame(frame);
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      let found = null;
      let best = 26;
      for (const pin of indiaPins) {
        const a = anchorsById.get(pin.id);
        if (!a) continue;
        const p = project(a.x, a.y, 0);
        const d = Math.hypot(p.x - mx, p.y - my);
        if (d < best) {
          best = d;
          found = pin.id;
        }
      }
      if (found !== hoverRef.current) {
        hoverRef.current = found;
        canvas.style.cursor = found ? "pointer" : "default";
      }
    };
    const onLeave = () => {
      hoverRef.current = null;
      canvas.style.cursor = "default";
    };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    const ro = new ResizeObserver(() => {
      resize();
      paint(performance.now());
    });
    ro.observe(wrap);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "imap", ref: wrapRef, children: /* @__PURE__ */ jsx(
    "canvas",
    {
      className: "imap__canvas",
      ref: canvasRef,
      role: "img",
      "aria-label": "Three-dimensional map of India showing the seven dojo branches — Bangalore, Chennai, Durga, Udhampur, Maharashtra, Goa and Andhra Pradesh"
    }
  ) });
});
IndiaMap3D.displayName = "IndiaMap3D";
const globeDots = [
  { x: -0.575, y: -0.7965, z: 0.1868 },
  { x: -0.6214, y: -0.757, z: 0.2019 },
  { x: -0.6075, y: -0.757, z: 0.2405 },
  { x: -0.6654, y: -0.7145, z: 0.2162 },
  { x: -0.6505, y: -0.7145, z: 0.2576 },
  { x: -0.7068, y: -0.6691, z: 0.2296 },
  { x: -0.691, y: -0.6691, z: 0.2736 },
  { x: -0.6724, y: -0.6691, z: 0.3164 },
  { x: -0.7453, y: -0.6211, z: 0.2422 },
  { x: -0.7287, y: -0.6211, z: 0.2885 },
  { x: -0.7091, y: -0.6211, z: 0.3337 },
  { x: -0.6868, y: -0.6211, z: 0.3775 },
  { x: 0.0492, y: -0.6211, z: -0.7821 },
  { x: -0.781, y: -0.5707, z: 0.2537 },
  { x: -0.7635, y: -0.5707, z: 0.3023 },
  { x: -0.743, y: -0.5707, z: 0.3496 },
  { x: -0.7196, y: -0.5707, z: 0.3956 },
  { x: -0.6933, y: -0.5707, z: 0.44 },
  { x: -0.6643, y: -0.5707, z: 0.4827 },
  { x: 0.5234, y: -0.5707, z: -0.6327 },
  { x: 0.4827, y: -0.5707, z: -0.6643 },
  { x: 0.44, y: -0.5707, z: -0.6933 },
  { x: -0.7953, y: -0.518, z: 0.3149 },
  { x: -0.774, y: -0.518, z: 0.3642 },
  { x: -0.7496, y: -0.518, z: 0.4121 },
  { x: -0.7222, y: -0.518, z: 0.4583 },
  { x: -0.692, y: -0.518, z: 0.5028 },
  { x: 0.2643, y: -0.518, z: 0.8135 },
  { x: 0.3149, y: -0.518, z: 0.7953 },
  { x: 0.3642, y: -0.518, z: 0.774 },
  { x: 0.4121, y: -0.518, z: 0.7496 },
  { x: 0.774, y: -0.518, z: -0.3642 },
  { x: 0.7496, y: -0.518, z: -0.4121 },
  { x: 0.7222, y: -0.518, z: -0.4583 },
  { x: 0.692, y: -0.518, z: -0.5028 },
  { x: 0.6591, y: -0.518, z: -0.5452 },
  { x: 0.6235, y: -0.518, z: -0.5855 },
  { x: 0.5855, y: -0.518, z: -0.6235 },
  { x: 0.5452, y: -0.518, z: -0.6591 },
  { x: 0.5028, y: -0.518, z: -0.692 },
  { x: 0.4583, y: -0.518, z: -0.7222 },
  { x: 0.4121, y: -0.518, z: -0.7496 },
  { x: -0.824, y: -0.4633, z: 0.3262 },
  { x: -0.8019, y: -0.4633, z: 0.3773 },
  { x: -0.7766, y: -0.4633, z: 0.4269 },
  { x: -0.7482, y: -0.4633, z: 0.4749 },
  { x: -0.717, y: -0.4633, z: 0.5209 },
  { x: -0.6828, y: -0.4633, z: 0.5649 },
  { x: 0.2739, y: -0.4633, z: 0.8428 },
  { x: 0.3262, y: -0.4633, z: 0.824 },
  { x: 0.3773, y: -0.4633, z: 0.8019 },
  { x: 0.4269, y: -0.4633, z: 0.7766 },
  { x: 0.8019, y: -0.4633, z: -0.3773 },
  { x: 0.7766, y: -0.4633, z: -0.4269 },
  { x: 0.7482, y: -0.4633, z: -0.4749 },
  { x: 0.717, y: -0.4633, z: -0.5209 },
  { x: 0.6828, y: -0.4633, z: -0.5649 },
  { x: 0.646, y: -0.4633, z: -0.6066 },
  { x: 0.6066, y: -0.4633, z: -0.646 },
  { x: 0.5649, y: -0.4633, z: -0.6828 },
  { x: 0.5209, y: -0.4633, z: -0.717 },
  { x: 0.4749, y: -0.4633, z: -0.7482 },
  { x: 0.4269, y: -0.4633, z: -0.7766 },
  { x: -0.8494, y: -0.4067, z: 0.3363 },
  { x: -0.8266, y: -0.4067, z: 0.389 },
  { x: -0.8005, y: -0.4067, z: 0.4401 },
  { x: -0.7713, y: -0.4067, z: 0.4895 },
  { x: -0.7391, y: -0.4067, z: 0.537 },
  { x: -0.7039, y: -0.4067, z: 0.5823 },
  { x: -0.6659, y: -0.4067, z: 0.6254 },
  { x: 0.2823, y: -0.4067, z: 0.8688 },
  { x: 0.3363, y: -0.4067, z: 0.8494 },
  { x: 0.389, y: -0.4067, z: 0.8266 },
  { x: 0.4401, y: -0.4067, z: 0.8005 },
  { x: 0.4895, y: -0.4067, z: 0.7713 },
  { x: 0.6659, y: -0.4067, z: 0.6254 },
  { x: 0.8266, y: -0.4067, z: -0.389 },
  { x: 0.8005, y: -0.4067, z: -0.4401 },
  { x: 0.7713, y: -0.4067, z: -0.4895 },
  { x: 0.7391, y: -0.4067, z: -0.537 },
  { x: 0.7039, y: -0.4067, z: -0.5823 },
  { x: 0.6659, y: -0.4067, z: -0.6254 },
  { x: 0.6254, y: -0.4067, z: -0.6659 },
  { x: 0.5823, y: -0.4067, z: -0.7039 },
  { x: 0.537, y: -0.4067, z: -0.7391 },
  { x: 0.4895, y: -0.4067, z: -0.7713 },
  { x: -0.8715, y: -0.3486, z: 0.345 },
  { x: -0.8481, y: -0.3486, z: 0.3991 },
  { x: -0.8213, y: -0.3486, z: 0.4515 },
  { x: -0.7914, y: -0.3486, z: 0.5022 },
  { x: -0.7583, y: -0.3486, z: 0.5509 },
  { x: -0.7222, y: -0.3486, z: 0.5974 },
  { x: -0.6832, y: -0.3486, z: 0.6416 },
  { x: -0.6416, y: -0.3486, z: 0.6832 },
  { x: 0.2331, y: -0.3486, z: 0.9078 },
  { x: 0.2896, y: -0.3486, z: 0.8914 },
  { x: 0.345, y: -0.3486, z: 0.8715 },
  { x: 0.3991, y: -0.3486, z: 0.8481 },
  { x: 0.4515, y: -0.3486, z: 0.8213 },
  { x: 0.5022, y: -0.3486, z: 0.7914 },
  { x: 0.6832, y: -0.3486, z: 0.6416 },
  { x: 0.8213, y: -0.3486, z: -0.4515 },
  { x: 0.7914, y: -0.3486, z: -0.5022 },
  { x: 0.7583, y: -0.3486, z: -0.5509 },
  { x: 0.7222, y: -0.3486, z: -0.5974 },
  { x: 0.6832, y: -0.3486, z: -0.6416 },
  { x: 0.6416, y: -0.3486, z: -0.6832 },
  { x: 0.5974, y: -0.3486, z: -0.7222 },
  { x: 0.5509, y: -0.3486, z: -0.7583 },
  { x: -0.9105, y: -0.289, z: 0.2958 },
  { x: -0.8901, y: -0.289, z: 0.3524 },
  { x: -0.8662, y: -0.289, z: 0.4076 },
  { x: -0.8389, y: -0.289, z: 0.4612 },
  { x: -0.8083, y: -0.289, z: 0.513 },
  { x: -0.7745, y: -0.289, z: 0.5627 },
  { x: -0.7376, y: -0.289, z: 0.6102 },
  { x: -0.6979, y: -0.289, z: 0.6553 },
  { x: -0.6553, y: -0.289, z: 0.6979 },
  { x: -0.6102, y: -0.289, z: 0.7376 },
  { x: 0.2381, y: -0.289, z: 0.9272 },
  { x: 0.2958, y: -0.289, z: 0.9105 },
  { x: 0.3524, y: -0.289, z: 0.8901 },
  { x: 0.4076, y: -0.289, z: 0.8662 },
  { x: 0.4612, y: -0.289, z: 0.8389 },
  { x: 0.513, y: -0.289, z: 0.8083 },
  { x: 0.5627, y: -0.289, z: 0.7745 },
  { x: 0.6553, y: -0.289, z: 0.6979 },
  { x: 0.6979, y: -0.289, z: 0.6553 },
  { x: 0.8083, y: -0.289, z: -0.513 },
  { x: 0.7745, y: -0.289, z: -0.5627 },
  { x: 0.7376, y: -0.289, z: -0.6102 },
  { x: 0.6979, y: -0.289, z: -0.6553 },
  { x: 0.6553, y: -0.289, z: -0.6979 },
  { x: 0.6102, y: -0.289, z: -0.7376 },
  { x: 0.5627, y: -0.289, z: -0.7745 },
  { x: -0.9259, y: -0.2284, z: 0.3009 },
  { x: -0.9052, y: -0.2284, z: 0.3584 },
  { x: -0.8809, y: -0.2284, z: 0.4145 },
  { x: -0.8532, y: -0.2284, z: 0.469 },
  { x: -0.822, y: -0.2284, z: 0.5217 },
  { x: -0.7876, y: -0.2284, z: 0.5723 },
  { x: -0.7502, y: -0.2284, z: 0.6206 },
  { x: -0.7097, y: -0.2284, z: 0.6665 },
  { x: -0.6665, y: -0.2284, z: 0.7097 },
  { x: -0.6206, y: -0.2284, z: 0.7502 },
  { x: 0.2421, y: -0.2284, z: 0.943 },
  { x: 0.3009, y: -0.2284, z: 0.9259 },
  { x: 0.3584, y: -0.2284, z: 0.9052 },
  { x: 0.4145, y: -0.2284, z: 0.8809 },
  { x: 0.469, y: -0.2284, z: 0.8532 },
  { x: 0.5217, y: -0.2284, z: 0.822 },
  { x: 0.5723, y: -0.2284, z: 0.7876 },
  { x: 0.6665, y: -0.2284, z: 0.7097 },
  { x: 0.7502, y: -0.2284, z: -0.6206 },
  { x: 0.7097, y: -0.2284, z: -0.6665 },
  { x: 0.6665, y: -0.2284, z: -0.7097 },
  { x: 0.6206, y: -0.2284, z: -0.7502 },
  { x: -0.955, y: -0.1668, z: 0.2452 },
  { x: -0.9377, y: -0.1668, z: 0.3047 },
  { x: -0.9168, y: -0.1668, z: 0.363 },
  { x: -0.8922, y: -0.1668, z: 0.4198 },
  { x: -0.864, y: -0.1668, z: 0.475 },
  { x: -0.8325, y: -0.1668, z: 0.5283 },
  { x: -0.7977, y: -0.1668, z: 0.5796 },
  { x: -0.7597, y: -0.1668, z: 0.6285 },
  { x: -0.7188, y: -0.1668, z: 0.675 },
  { x: -0.675, y: -0.1668, z: 0.7188 },
  { x: -0.6285, y: -0.1668, z: 0.7597 },
  { x: 0.1848, y: -0.1668, z: 0.9685 },
  { x: 0.2452, y: -0.1668, z: 0.955 },
  { x: 0.3047, y: -0.1668, z: 0.9377 },
  { x: 0.363, y: -0.1668, z: 0.9168 },
  { x: 0.4198, y: -0.1668, z: 0.8922 },
  { x: 0.475, y: -0.1668, z: 0.864 },
  { x: 0.5283, y: -0.1668, z: 0.8325 },
  { x: 0.5796, y: -0.1668, z: 0.7977 },
  { x: 0.6285, y: -0.1668, z: 0.7597 },
  { x: -0.9769, y: -0.1045, z: 0.1864 },
  { x: -0.9633, y: -0.1045, z: 0.2473 },
  { x: -0.9458, y: -0.1045, z: 0.3073 },
  { x: -0.9247, y: -0.1045, z: 0.3661 },
  { x: -0.8999, y: -0.1045, z: 0.4234 },
  { x: -0.8715, y: -0.1045, z: 0.4791 },
  { x: -0.8397, y: -0.1045, z: 0.5329 },
  { x: -0.8046, y: -0.1045, z: 0.5846 },
  { x: -0.7663, y: -0.1045, z: 0.6339 },
  { x: -0.725, y: -0.1045, z: 0.6808 },
  { x: -0.6808, y: -0.1045, z: 0.725 },
  { x: -0.6339, y: -0.1045, z: 0.7663 },
  { x: -0.5846, y: -0.1045, z: 0.8046 },
  { x: 0.1864, y: -0.1045, z: 0.9769 },
  { x: 0.2473, y: -0.1045, z: 0.9633 },
  { x: 0.3073, y: -0.1045, z: 0.9458 },
  { x: 0.3661, y: -0.1045, z: 0.9247 },
  { x: 0.4234, y: -0.1045, z: 0.8999 },
  { x: 0.4791, y: -0.1045, z: 0.8715 },
  { x: 0.5329, y: -0.1045, z: 0.8397 },
  { x: 0.5846, y: -0.1045, z: 0.8046 },
  { x: 0.6339, y: -0.1045, z: 0.7663 },
  { x: -0.9814, y: -0.0419, z: 0.1872 },
  { x: -0.9677, y: -0.0419, z: 0.2485 },
  { x: -0.9502, y: -0.0419, z: 0.3087 },
  { x: -0.929, y: -0.0419, z: 0.3678 },
  { x: -0.904, y: -0.0419, z: 0.4254 },
  { x: -0.8755, y: -0.0419, z: 0.4813 },
  { x: -0.8436, y: -0.0419, z: 0.5354 },
  { x: -0.8083, y: -0.0419, z: 0.5873 },
  { x: -0.7698, y: -0.0419, z: 0.6369 },
  { x: -0.7283, y: -0.0419, z: 0.6839 },
  { x: -0.6839, y: -0.0419, z: 0.7283 },
  { x: 0.1872, y: -0.0419, z: 0.9814 },
  { x: 0.2485, y: -0.0419, z: 0.9677 },
  { x: 0.3087, y: -0.0419, z: 0.9502 },
  { x: 0.3678, y: -0.0419, z: 0.929 },
  { x: 0.4254, y: -0.0419, z: 0.904 },
  { x: 0.4813, y: -0.0419, z: 0.8755 },
  { x: 0.5354, y: -0.0419, z: 0.8436 },
  { x: 0.5873, y: -0.0419, z: 0.8083 },
  { x: 0.6369, y: -0.0419, z: 0.7698 },
  { x: 0.9677, y: -0.0419, z: -0.2485 },
  { x: -0.9821, y: 0.0209, z: 0.1873 },
  { x: -0.9684, y: 0.0209, z: 0.2486 },
  { x: -0.9508, y: 0.0209, z: 0.3089 },
  { x: -0.9296, y: 0.0209, z: 0.368 },
  { x: -0.9046, y: 0.0209, z: 0.4257 },
  { x: -0.8761, y: 0.0209, z: 0.4816 },
  { x: -0.8441, y: 0.0209, z: 0.5357 },
  { x: -0.8088, y: 0.0209, z: 0.5877 },
  { x: 0.1873, y: 0.0209, z: 0.9821 },
  { x: 0.2486, y: 0.0209, z: 0.9684 },
  { x: 0.3089, y: 0.0209, z: 0.9508 },
  { x: 0.368, y: 0.0209, z: 0.9296 },
  { x: 0.4257, y: 0.0209, z: 0.9046 },
  { x: 0.4816, y: 0.0209, z: 0.8761 },
  { x: 0.5357, y: 0.0209, z: 0.8441 },
  { x: 0.5877, y: 0.0209, z: 0.8088 },
  { x: 0.6373, y: 0.0209, z: 0.7703 },
  { x: 0.6844, y: 0.0209, z: 0.7288 },
  { x: 0.9821, y: 0.0209, z: -0.1873 },
  { x: -0.9652, y: 0.0837, z: 0.2478 },
  { x: -0.9477, y: 0.0837, z: 0.3079 },
  { x: -0.9265, y: 0.0837, z: 0.3668 },
  { x: -0.9017, y: 0.0837, z: 0.4243 },
  { x: -0.8732, y: 0.0837, z: 0.4801 },
  { x: -0.8414, y: 0.0837, z: 0.5339 },
  { x: -0.8062, y: 0.0837, z: 0.5857 },
  { x: 0.1249, y: 0.0837, z: 0.9886 },
  { x: 0.1867, y: 0.0837, z: 0.9788 },
  { x: 0.2478, y: 0.0837, z: 0.9652 },
  { x: 0.3079, y: 0.0837, z: 0.9477 },
  { x: 0.3668, y: 0.0837, z: 0.9265 },
  { x: 0.4243, y: 0.0837, z: 0.9017 },
  { x: 0.4801, y: 0.0837, z: 0.8732 },
  { x: 0.5339, y: 0.0837, z: 0.8414 },
  { x: 0.5857, y: 0.0837, z: 0.8062 },
  { x: 0.6352, y: 0.0837, z: 0.7678 },
  { x: 0.6821, y: 0.0837, z: 0.7264 },
  { x: 0.7264, y: 0.0837, z: 0.6821 },
  { x: 0.9788, y: 0.0837, z: -0.1867 },
  { x: -0.9582, y: 0.1461, z: 0.246 },
  { x: -0.9409, y: 0.1461, z: 0.3057 },
  { x: -0.9198, y: 0.1461, z: 0.3642 },
  { x: -0.8951, y: 0.1461, z: 0.4212 },
  { x: -0.8669, y: 0.1461, z: 0.4766 },
  { x: -0.1854, y: 0.1461, z: 0.9717 },
  { x: -0.124, y: 0.1461, z: 0.9815 },
  { x: -0.0621, y: 0.1461, z: 0.9873 },
  { x: -0, y: 0.1461, z: 0.9893 },
  { x: 0.0621, y: 0.1461, z: 0.9873 },
  { x: 0.124, y: 0.1461, z: 0.9815 },
  { x: 0.1854, y: 0.1461, z: 0.9717 },
  { x: 0.246, y: 0.1461, z: 0.9582 },
  { x: 0.3057, y: 0.1461, z: 0.9409 },
  { x: 0.3642, y: 0.1461, z: 0.9198 },
  { x: 0.4212, y: 0.1461, z: 0.8951 },
  { x: 0.4766, y: 0.1461, z: 0.8669 },
  { x: 0.5301, y: 0.1461, z: 0.8353 },
  { x: 0.5815, y: 0.1461, z: 0.8003 },
  { x: 0.6306, y: 0.1461, z: 0.7622 },
  { x: 0.6772, y: 0.1461, z: 0.7211 },
  { x: 0.7211, y: 0.1461, z: 0.6772 },
  { x: 0.9815, y: 0.1461, z: -0.124 },
  { x: 0.9717, y: 0.1461, z: -0.1854 },
  { x: -0.2433, y: 0.2079, z: 0.9474 },
  { x: -0.1833, y: 0.2079, z: 0.9608 },
  { x: -0.1226, y: 0.2079, z: 0.9704 },
  { x: -0.0614, y: 0.2079, z: 0.9762 },
  { x: -0, y: 0.2079, z: 0.9781 },
  { x: 0.0614, y: 0.2079, z: 0.9762 },
  { x: 0.1226, y: 0.2079, z: 0.9704 },
  { x: 0.1833, y: 0.2079, z: 0.9608 },
  { x: 0.2433, y: 0.2079, z: 0.9474 },
  { x: 0.3023, y: 0.2079, z: 0.9303 },
  { x: 0.3601, y: 0.2079, z: 0.9095 },
  { x: 0.4165, y: 0.2079, z: 0.8851 },
  { x: 0.4712, y: 0.2079, z: 0.8572 },
  { x: 0.5241, y: 0.2079, z: 0.8259 },
  { x: 0.5749, y: 0.2079, z: 0.7913 },
  { x: 0.6235, y: 0.2079, z: 0.7537 },
  { x: 0.9608, y: 0.2079, z: 0.1833, hot: true },
  { x: 0.9762, y: 0.2079, z: -0.0614 },
  { x: 0.9704, y: 0.2079, z: -0.1226 },
  { x: 0.9608, y: 0.2079, z: -0.1833 },
  { x: 0.9474, y: 0.2079, z: -0.2433 },
  { x: -0.2395, y: 0.2689, z: 0.9329 },
  { x: -0.1805, y: 0.2689, z: 0.9461 },
  { x: -0.1207, y: 0.2689, z: 0.9556 },
  { x: -0.0605, y: 0.2689, z: 0.9613 },
  { x: -0, y: 0.2689, z: 0.9632 },
  { x: 0.0605, y: 0.2689, z: 0.9613 },
  { x: 0.1207, y: 0.2689, z: 0.9556 },
  { x: 0.1805, y: 0.2689, z: 0.9461 },
  { x: 0.2395, y: 0.2689, z: 0.9329 },
  { x: 0.2976, y: 0.2689, z: 0.916 },
  { x: 0.3546, y: 0.2689, z: 0.8955 },
  { x: 0.4101, y: 0.2689, z: 0.8715 },
  { x: 0.464, y: 0.2689, z: 0.844 },
  { x: 0.5161, y: 0.2689, z: 0.8132 },
  { x: 0.5661, y: 0.2689, z: 0.7792 },
  { x: 0.9329, y: 0.2689, z: 0.2395, hot: true },
  { x: 0.9461, y: 0.2689, z: 0.1805, hot: true },
  { x: 0.9556, y: 0.2689, z: 0.1207 },
  { x: 0.9613, y: 0.2689, z: -0.0605 },
  { x: 0.9556, y: 0.2689, z: -0.1207 },
  { x: 0.9461, y: 0.2689, z: -0.1805 },
  { x: 0.9329, y: 0.2689, z: -0.2395 },
  { x: -0.2349, y: 0.3289, z: 0.9147 },
  { x: -0.177, y: 0.3289, z: 0.9276 },
  { x: -0.1184, y: 0.3289, z: 0.9369 },
  { x: -0.0593, y: 0.3289, z: 0.9425 },
  { x: -0, y: 0.3289, z: 0.9444 },
  { x: 0.0593, y: 0.3289, z: 0.9425 },
  { x: 0.1184, y: 0.3289, z: 0.9369 },
  { x: 0.177, y: 0.3289, z: 0.9276 },
  { x: 0.2349, y: 0.3289, z: 0.9147 },
  { x: 0.2918, y: 0.3289, z: 0.8982 },
  { x: 0.3476, y: 0.3289, z: 0.8781 },
  { x: 0.4021, y: 0.3289, z: 0.8545 },
  { x: 0.455, y: 0.3289, z: 0.8276 },
  { x: 0.506, y: 0.3289, z: 0.7974 },
  { x: 0.5551, y: 0.3289, z: 0.764 },
  { x: 0.8982, y: 0.3289, z: 0.2918 },
  { x: 0.9147, y: 0.3289, z: 0.2349, hot: true },
  { x: 0.9276, y: 0.3289, z: 0.177, hot: true },
  { x: 0.9369, y: 0.3289, z: 0.1184, hot: true },
  { x: 0.9425, y: 0.3289, z: 0.0593 },
  { x: 0.9425, y: 0.3289, z: -0.0593 },
  { x: 0.9369, y: 0.3289, z: -0.1184 },
  { x: 0.9276, y: 0.3289, z: -0.177 },
  { x: 0.9147, y: 0.3289, z: -0.2349 },
  { x: 0.8982, y: 0.3289, z: -0.2918 },
  { x: -0.8929, y: 0.3875, z: -0.2293 },
  { x: -0.1727, y: 0.3875, z: 0.9055 },
  { x: -0.1155, y: 0.3875, z: 0.9146 },
  { x: -0.0579, y: 0.3875, z: 0.92 },
  { x: -0, y: 0.3875, z: 0.9219 },
  { x: 0.0579, y: 0.3875, z: 0.92 },
  { x: 0.1155, y: 0.3875, z: 0.9146 },
  { x: 0.1727, y: 0.3875, z: 0.9055 },
  { x: 0.2293, y: 0.3875, z: 0.8929 },
  { x: 0.2849, y: 0.3875, z: 0.8767 },
  { x: 0.3394, y: 0.3875, z: 0.8571 },
  { x: 0.3925, y: 0.3875, z: 0.8341 },
  { x: 0.4441, y: 0.3875, z: 0.8078 },
  { x: 0.494, y: 0.3875, z: 0.7784 },
  { x: 0.8767, y: 0.3875, z: 0.2849, hot: true },
  { x: 0.8929, y: 0.3875, z: 0.2293, hot: true },
  { x: 0.9055, y: 0.3875, z: 0.1727, hot: true },
  { x: 0.9146, y: 0.3875, z: 0.1155, hot: true },
  { x: 0.92, y: 0.3875, z: 0.0579, hot: true },
  { x: 0.9219, y: 0.3875, z: 0, hot: true },
  { x: 0.92, y: 0.3875, z: -0.0579 },
  { x: 0.9146, y: 0.3875, z: -0.1155 },
  { x: 0.9055, y: 0.3875, z: -0.1727 },
  { x: 0.8929, y: 0.3875, z: -0.2293 },
  { x: 0.8767, y: 0.3875, z: -0.2849 },
  { x: 0.8571, y: 0.3875, z: -0.3394 },
  { x: -0.8328, y: 0.4446, z: -0.3297 },
  { x: -0.8519, y: 0.4446, z: -0.2768 },
  { x: -0.8676, y: 0.4446, z: -0.2228 },
  { x: -0.8798, y: 0.4446, z: -0.1678 },
  { x: -0.8886, y: 0.4446, z: -0.1123 },
  { x: -0.1123, y: 0.4446, z: 0.8886 },
  { x: -0.0562, y: 0.4446, z: 0.8939 },
  { x: -0, y: 0.4446, z: 0.8957 },
  { x: 0.0562, y: 0.4446, z: 0.8939 },
  { x: 0.1123, y: 0.4446, z: 0.8886 },
  { x: 0.1678, y: 0.4446, z: 0.8798 },
  { x: 0.2228, y: 0.4446, z: 0.8676 },
  { x: 0.2768, y: 0.4446, z: 0.8519 },
  { x: 0.3297, y: 0.4446, z: 0.8328 },
  { x: 0.3814, y: 0.4446, z: 0.8105 },
  { x: 0.4315, y: 0.4446, z: 0.7849 },
  { x: 0.4799, y: 0.4446, z: 0.7563 },
  { x: 0.7563, y: 0.4446, z: 0.4799 },
  { x: 0.7849, y: 0.4446, z: 0.4315 },
  { x: 0.8105, y: 0.4446, z: 0.3814 },
  { x: 0.8328, y: 0.4446, z: 0.3297, hot: true },
  { x: 0.8519, y: 0.4446, z: 0.2768, hot: true },
  { x: 0.8676, y: 0.4446, z: 0.2228, hot: true },
  { x: 0.8798, y: 0.4446, z: 0.1678, hot: true },
  { x: 0.8886, y: 0.4446, z: 0.1123, hot: true },
  { x: 0.8939, y: 0.4446, z: 0.0562, hot: true },
  { x: 0.8957, y: 0.4446, z: 0, hot: true },
  { x: 0.8939, y: 0.4446, z: -0.0562, hot: true },
  { x: 0.8886, y: 0.4446, z: -0.1123 },
  { x: 0.8798, y: 0.4446, z: -0.1678 },
  { x: 0.8676, y: 0.4446, z: -0.2228 },
  { x: 0.8519, y: 0.4446, z: -0.2768 },
  { x: 0.8328, y: 0.4446, z: -0.3297 },
  { x: 0.8105, y: 0.4446, z: -0.3814 },
  { x: 0.7849, y: 0.4446, z: -0.4315 },
  { x: -0.8052, y: 0.5, z: -0.3188 },
  { x: -0.8236, y: 0.5, z: -0.2676 },
  { x: -0.8388, y: 0.5, z: -0.2154 },
  { x: -0.8507, y: 0.5, z: -0.1623 },
  { x: -0.8592, y: 0.5, z: -0.1085 },
  { x: -0.8643, y: 0.5, z: -0.0544 },
  { x: -0.866, y: 0.5, z: -0 },
  { x: -0.8643, y: 0.5, z: 0.0544 },
  { x: -0.8592, y: 0.5, z: 0.1085 },
  { x: -0.8507, y: 0.5, z: 0.1623 },
  { x: -0.1085, y: 0.5, z: 0.8592 },
  { x: -0.0544, y: 0.5, z: 0.8643 },
  { x: -0, y: 0.5, z: 0.866 },
  { x: 0.0544, y: 0.5, z: 0.8643 },
  { x: 0.1085, y: 0.5, z: 0.8592 },
  { x: 0.1623, y: 0.5, z: 0.8507 },
  { x: 0.2154, y: 0.5, z: 0.8388 },
  { x: 0.2676, y: 0.5, z: 0.8236 },
  { x: 0.3188, y: 0.5, z: 0.8052 },
  { x: 0.3687, y: 0.5, z: 0.7836 },
  { x: 0.4172, y: 0.5, z: 0.7589 },
  { x: 0.464, y: 0.5, z: 0.7312 },
  { x: 0.6673, y: 0.5, z: 0.552 },
  { x: 0.7006, y: 0.5, z: 0.509 },
  { x: 0.7312, y: 0.5, z: 0.464 },
  { x: 0.7589, y: 0.5, z: 0.4172 },
  { x: 0.7836, y: 0.5, z: 0.3687 },
  { x: 0.8052, y: 0.5, z: 0.3188 },
  { x: 0.8236, y: 0.5, z: 0.2676 },
  { x: 0.8388, y: 0.5, z: 0.2154, hot: true },
  { x: 0.8507, y: 0.5, z: 0.1623, hot: true },
  { x: 0.8592, y: 0.5, z: 0.1085 },
  { x: 0.8643, y: 0.5, z: 0.0544 },
  { x: 0.866, y: 0.5, z: 0 },
  { x: 0.8643, y: 0.5, z: -0.0544 },
  { x: 0.8592, y: 0.5, z: -0.1085 },
  { x: 0.8507, y: 0.5, z: -0.1623 },
  { x: 0.8388, y: 0.5, z: -0.2154 },
  { x: 0.8236, y: 0.5, z: -0.2676 },
  { x: 0.8052, y: 0.5, z: -0.3188 },
  { x: 0.7836, y: 0.5, z: -0.3687 },
  { x: 0.7589, y: 0.5, z: -0.4172 },
  { x: -0.7536, y: 0.5534, z: -0.3546 },
  { x: -0.7744, y: 0.5534, z: -0.3066 },
  { x: -0.7922, y: 0.5534, z: -0.2574 },
  { x: -0.8068, y: 0.5534, z: -0.2071 },
  { x: -0.8182, y: 0.5534, z: -0.1561 },
  { x: -0.8264, y: 0.5534, z: -0.1044 },
  { x: -0.8313, y: 0.5534, z: -0.0523 },
  { x: -0.8329, y: 0.5534, z: -0 },
  { x: -0.8313, y: 0.5534, z: 0.0523 },
  { x: -0.8264, y: 0.5534, z: 0.1044 },
  { x: -0.8182, y: 0.5534, z: 0.1561 },
  { x: -0, y: 0.5534, z: 0.8329 },
  { x: 0.0523, y: 0.5534, z: 0.8313 },
  { x: 0.1044, y: 0.5534, z: 0.8264 },
  { x: 0.1561, y: 0.5534, z: 0.8182 },
  { x: 0.2071, y: 0.5534, z: 0.8068 },
  { x: 0.6072, y: 0.5534, z: 0.5702 },
  { x: 0.6418, y: 0.5534, z: 0.5309 },
  { x: 0.6738, y: 0.5534, z: 0.4896 },
  { x: 0.7033, y: 0.5534, z: 0.4463 },
  { x: 0.7299, y: 0.5534, z: 0.4013 },
  { x: 0.7536, y: 0.5534, z: 0.3546 },
  { x: 0.7744, y: 0.5534, z: 0.3066 },
  { x: 0.7922, y: 0.5534, z: 0.2574 },
  { x: 0.8068, y: 0.5534, z: 0.2071, hot: true },
  { x: 0.8182, y: 0.5534, z: 0.1561 },
  { x: 0.8264, y: 0.5534, z: 0.1044 },
  { x: 0.8313, y: 0.5534, z: 0.0523 },
  { x: 0.8329, y: 0.5534, z: 0 },
  { x: 0.8313, y: 0.5534, z: -0.0523 },
  { x: 0.8264, y: 0.5534, z: -0.1044 },
  { x: 0.8182, y: 0.5534, z: -0.1561 },
  { x: 0.8068, y: 0.5534, z: -0.2071 },
  { x: 0.7922, y: 0.5534, z: -0.2574 },
  { x: 0.7744, y: 0.5534, z: -0.3066 },
  { x: 0.7536, y: 0.5534, z: -0.3546 },
  { x: 0.7299, y: 0.5534, z: -0.4013 },
  { x: 0.7033, y: 0.5534, z: -0.4463 },
  { x: 0.6072, y: 0.5534, z: -0.5702 },
  { x: -0.698, y: 0.6046, z: -0.3837 },
  { x: -0.7207, y: 0.6046, z: -0.3391 },
  { x: -0.7406, y: 0.6046, z: -0.2932 },
  { x: -0.7575, y: 0.6046, z: -0.2461 },
  { x: -0.7715, y: 0.6046, z: -0.1981 },
  { x: -0.7824, y: 0.6046, z: -0.1493 },
  { x: -0.7902, y: 0.6046, z: -0.0998 },
  { x: -0.795, y: 0.6046, z: -0.05 },
  { x: -0.7965, y: 0.6046, z: -0 },
  { x: -0.795, y: 0.6046, z: 0.05 },
  { x: -0.7902, y: 0.6046, z: 0.0998 },
  { x: -0.7824, y: 0.6046, z: 0.1493 },
  { x: -0.7715, y: 0.6046, z: 0.1981 },
  { x: -0.0998, y: 0.6046, z: 0.7902 },
  { x: -0.05, y: 0.6046, z: 0.795 },
  { x: 0.5806, y: 0.6046, z: 0.5453 },
  { x: 0.6137, y: 0.6046, z: 0.5077 },
  { x: 0.6444, y: 0.6046, z: 0.4682 },
  { x: 0.6725, y: 0.6046, z: 0.4268 },
  { x: 0.698, y: 0.6046, z: 0.3837 },
  { x: 0.7207, y: 0.6046, z: 0.3391 },
  { x: 0.7406, y: 0.6046, z: 0.2932 },
  { x: 0.7575, y: 0.6046, z: 0.2461 },
  { x: 0.7715, y: 0.6046, z: 0.1981 },
  { x: 0.7824, y: 0.6046, z: 0.1493 },
  { x: 0.7902, y: 0.6046, z: 0.0998 },
  { x: 0.795, y: 0.6046, z: 0.05 },
  { x: 0.7965, y: 0.6046, z: 0 },
  { x: 0.795, y: 0.6046, z: -0.05 },
  { x: 0.7902, y: 0.6046, z: -0.0998 },
  { x: 0.7824, y: 0.6046, z: -0.1493 },
  { x: 0.7715, y: 0.6046, z: -0.1981 },
  { x: 0.7575, y: 0.6046, z: -0.2461 },
  { x: 0.7406, y: 0.6046, z: -0.2932 },
  { x: 0.7207, y: 0.6046, z: -0.3391 },
  { x: 0.698, y: 0.6046, z: -0.3837 },
  { x: 0.6725, y: 0.6046, z: -0.4268 },
  { x: 0.6444, y: 0.6046, z: -0.4682 },
  { x: 0.5077, y: 0.6046, z: -0.6137 },
  { x: -0.6392, y: 0.6534, z: -0.4056 },
  { x: -0.6634, y: 0.6534, z: -0.3647 },
  { x: -0.6849, y: 0.6534, z: -0.3223 },
  { x: -0.7038, y: 0.6534, z: -0.2787 },
  { x: -0.7199, y: 0.6534, z: -0.2339 },
  { x: -0.7332, y: 0.6534, z: -0.1883 },
  { x: -0.7436, y: 0.6534, z: -0.1418 },
  { x: -0.751, y: 0.6534, z: -0.0949 },
  { x: -0.7555, y: 0.6534, z: -0.0475 },
  { x: -0.757, y: 0.6534, z: -0 },
  { x: -0.7555, y: 0.6534, z: 0.0475 },
  { x: -0.751, y: 0.6534, z: 0.0949 },
  { x: -0.7436, y: 0.6534, z: 0.1418 },
  { x: -0.7332, y: 0.6534, z: 0.1883 },
  { x: -0.7199, y: 0.6534, z: 0.2339 },
  { x: -0.0949, y: 0.6534, z: 0.751 },
  { x: -0.0475, y: 0.6534, z: 0.7555 },
  { x: -0, y: 0.6534, z: 0.757 },
  { x: 0.2339, y: 0.6534, z: 0.7199 },
  { x: 0.2787, y: 0.6534, z: 0.7038 },
  { x: 0.3223, y: 0.6534, z: 0.6849 },
  { x: 0.3647, y: 0.6534, z: 0.6634 },
  { x: 0.4825, y: 0.6534, z: 0.5833 },
  { x: 0.5182, y: 0.6534, z: 0.5518 },
  { x: 0.5518, y: 0.6534, z: 0.5182 },
  { x: 0.5833, y: 0.6534, z: 0.4825 },
  { x: 0.6124, y: 0.6534, z: 0.445 },
  { x: 0.6392, y: 0.6534, z: 0.4056 },
  { x: 0.6634, y: 0.6534, z: 0.3647 },
  { x: 0.6849, y: 0.6534, z: 0.3223 },
  { x: 0.7038, y: 0.6534, z: 0.2787 },
  { x: 0.7199, y: 0.6534, z: 0.2339 },
  { x: 0.7332, y: 0.6534, z: 0.1883 },
  { x: 0.7436, y: 0.6534, z: 0.1418 },
  { x: 0.751, y: 0.6534, z: 0.0949 },
  { x: 0.7555, y: 0.6534, z: 0.0475 },
  { x: 0.757, y: 0.6534, z: 0 },
  { x: 0.7555, y: 0.6534, z: -0.0475 },
  { x: 0.751, y: 0.6534, z: -0.0949 },
  { x: 0.7436, y: 0.6534, z: -0.1418 },
  { x: 0.7332, y: 0.6534, z: -0.1883 },
  { x: 0.7199, y: 0.6534, z: -0.2339 },
  { x: 0.7038, y: 0.6534, z: -0.2787 },
  { x: 0.6849, y: 0.6534, z: -0.3223 },
  { x: 0.6634, y: 0.6534, z: -0.3647 },
  { x: 0.6392, y: 0.6534, z: -0.4056 },
  { x: 0.6124, y: 0.6534, z: -0.445 },
  { x: 0.4825, y: 0.6534, z: -0.5833 },
  { x: -0.6032, y: 0.6997, z: -0.3828 },
  { x: -0.6261, y: 0.6997, z: -0.3442 },
  { x: -0.6465, y: 0.6997, z: -0.3042 },
  { x: -0.6643, y: 0.6997, z: -0.263 },
  { x: -0.6795, y: 0.6997, z: -0.2208 },
  { x: -0.692, y: 0.6997, z: -0.1777 },
  { x: -0.7018, y: 0.6997, z: -0.1339 },
  { x: -0.7088, y: 0.6997, z: -0.0895 },
  { x: -0.7131, y: 0.6997, z: -0.0449 },
  { x: -0.7145, y: 0.6997, z: -0 },
  { x: -0.7131, y: 0.6997, z: 0.0449 },
  { x: -0.7088, y: 0.6997, z: 0.0895 },
  { x: -0.7018, y: 0.6997, z: 0.1339 },
  { x: -0.692, y: 0.6997, z: 0.1777 },
  { x: -0.6795, y: 0.6997, z: 0.2208 },
  { x: -0.6643, y: 0.6997, z: 0.263 },
  { x: -0.6465, y: 0.6997, z: 0.3042 },
  { x: -0, y: 0.6997, z: 0.7145 },
  { x: 0.0449, y: 0.6997, z: 0.7131 },
  { x: 0.0895, y: 0.6997, z: 0.7088 },
  { x: 0.1777, y: 0.6997, z: 0.692 },
  { x: 0.2208, y: 0.6997, z: 0.6795 },
  { x: 0.263, y: 0.6997, z: 0.6643 },
  { x: 0.3042, y: 0.6997, z: 0.6465 },
  { x: 0.3442, y: 0.6997, z: 0.6261 },
  { x: 0.42, y: 0.6997, z: 0.578 },
  { x: 0.4554, y: 0.6997, z: 0.5505 },
  { x: 0.4891, y: 0.6997, z: 0.5208 },
  { x: 0.5208, y: 0.6997, z: 0.4891 },
  { x: 0.5505, y: 0.6997, z: 0.4554 },
  { x: 0.578, y: 0.6997, z: 0.42 },
  { x: 0.6032, y: 0.6997, z: 0.3828 },
  { x: 0.6261, y: 0.6997, z: 0.3442 },
  { x: 0.6465, y: 0.6997, z: 0.3042 },
  { x: 0.6643, y: 0.6997, z: 0.263 },
  { x: 0.6795, y: 0.6997, z: 0.2208 },
  { x: 0.692, y: 0.6997, z: 0.1777 },
  { x: 0.7018, y: 0.6997, z: 0.1339 },
  { x: 0.7088, y: 0.6997, z: 0.0895 },
  { x: 0.7131, y: 0.6997, z: 0.0449 },
  { x: 0.7145, y: 0.6997, z: 0 },
  { x: 0.7131, y: 0.6997, z: -0.0449 },
  { x: 0.7088, y: 0.6997, z: -0.0895 },
  { x: 0.7018, y: 0.6997, z: -0.1339 },
  { x: 0.692, y: 0.6997, z: -0.1777 },
  { x: 0.6795, y: 0.6997, z: -0.2208 },
  { x: 0.6643, y: 0.6997, z: -0.263 },
  { x: 0.6465, y: 0.6997, z: -0.3042 },
  { x: 0.6261, y: 0.6997, z: -0.3442 },
  { x: 0.6032, y: 0.6997, z: -0.3828 },
  { x: 0.578, y: 0.6997, z: -0.42 },
  { x: 0.5505, y: 0.6997, z: -0.4554 },
  { x: 0.5208, y: 0.6997, z: -0.4891 },
  { x: -0.565, y: 0.7431, z: -0.3585 },
  { x: -0.5864, y: 0.7431, z: -0.3224 },
  { x: -0.6054, y: 0.7431, z: -0.2849 },
  { x: -0.6221, y: 0.7431, z: -0.2463 },
  { x: -0.6364, y: 0.7431, z: -0.2068 },
  { x: -0.6481, y: 0.7431, z: -0.1664 },
  { x: -0.6573, y: 0.7431, z: -0.1254 },
  { x: -0.6639, y: 0.7431, z: -0.0839 },
  { x: -0.6678, y: 0.7431, z: -0.042 },
  { x: -0.6691, y: 0.7431, z: -0 },
  { x: -0.6678, y: 0.7431, z: 0.042 },
  { x: -0.6639, y: 0.7431, z: 0.0839 },
  { x: -0.6573, y: 0.7431, z: 0.1254 },
  { x: -0.6481, y: 0.7431, z: 0.1664 },
  { x: -0.6364, y: 0.7431, z: 0.2068 },
  { x: -0.6221, y: 0.7431, z: 0.2463 },
  { x: -0.6054, y: 0.7431, z: 0.2849 },
  { x: -0.5864, y: 0.7431, z: 0.3224 },
  { x: -0.565, y: 0.7431, z: 0.3585 },
  { x: -0.5413, y: 0.7431, z: 0.3933 },
  { x: -0.042, y: 0.7431, z: 0.6678 },
  { x: -0, y: 0.7431, z: 0.6691 },
  { x: 0.042, y: 0.7431, z: 0.6678 },
  { x: 0.0839, y: 0.7431, z: 0.6639 },
  { x: 0.1254, y: 0.7431, z: 0.6573 },
  { x: 0.1664, y: 0.7431, z: 0.6481 },
  { x: 0.2068, y: 0.7431, z: 0.6364 },
  { x: 0.2463, y: 0.7431, z: 0.6221 },
  { x: 0.2849, y: 0.7431, z: 0.6054 },
  { x: 0.3224, y: 0.7431, z: 0.5864 },
  { x: 0.3585, y: 0.7431, z: 0.565 },
  { x: 0.3933, y: 0.7431, z: 0.5413 },
  { x: 0.4265, y: 0.7431, z: 0.5156 },
  { x: 0.4581, y: 0.7431, z: 0.4878 },
  { x: 0.4878, y: 0.7431, z: 0.4581 },
  { x: 0.5156, y: 0.7431, z: 0.4265 },
  { x: 0.5413, y: 0.7431, z: 0.3933 },
  { x: 0.565, y: 0.7431, z: 0.3585 },
  { x: 0.5864, y: 0.7431, z: 0.3224 },
  { x: 0.6054, y: 0.7431, z: 0.2849 },
  { x: 0.6221, y: 0.7431, z: 0.2463 },
  { x: 0.6364, y: 0.7431, z: 0.2068 },
  { x: 0.6481, y: 0.7431, z: 0.1664 },
  { x: 0.6573, y: 0.7431, z: 0.1254 },
  { x: 0.6639, y: 0.7431, z: 0.0839 },
  { x: 0.6678, y: 0.7431, z: 0.042 },
  { x: 0.6691, y: 0.7431, z: 0 },
  { x: 0.6678, y: 0.7431, z: -0.042 },
  { x: 0.6639, y: 0.7431, z: -0.0839 },
  { x: 0.6573, y: 0.7431, z: -0.1254 },
  { x: 0.6481, y: 0.7431, z: -0.1664 },
  { x: 0.6364, y: 0.7431, z: -0.2068 },
  { x: 0.6221, y: 0.7431, z: -0.2463 },
  { x: 0.6054, y: 0.7431, z: -0.2849 },
  { x: 0.5864, y: 0.7431, z: -0.3224 },
  { x: 0.565, y: 0.7431, z: -0.3585 },
  { x: 0.5413, y: 0.7431, z: -0.3933 },
  { x: 0.5156, y: 0.7431, z: -0.4265 },
  { x: 0.4878, y: 0.7431, z: -0.4581 },
  { x: 0.4581, y: 0.7431, z: -0.4878 },
  { x: -0.5025, y: 0.7837, z: -0.3651 },
  { x: -0.5245, y: 0.7837, z: -0.3328 },
  { x: -0.5443, y: 0.7837, z: -0.2992 },
  { x: -0.562, y: 0.7837, z: -0.2645 },
  { x: -0.5775, y: 0.7837, z: -0.2287 },
  { x: -0.5907, y: 0.7837, z: -0.1919 },
  { x: -0.6016, y: 0.7837, z: -0.1545 },
  { x: -0.6101, y: 0.7837, z: -0.1164 },
  { x: -0.6162, y: 0.7837, z: -0.0779 },
  { x: -0.6199, y: 0.7837, z: -0.039 },
  { x: -0.6211, y: 0.7837, z: -0 },
  { x: -0.6199, y: 0.7837, z: 0.039 },
  { x: -0.6162, y: 0.7837, z: 0.0779 },
  { x: -0.6101, y: 0.7837, z: 0.1164 },
  { x: -0.6016, y: 0.7837, z: 0.1545 },
  { x: -0.5907, y: 0.7837, z: 0.1919 },
  { x: -0.5775, y: 0.7837, z: 0.2287 },
  { x: -0.562, y: 0.7837, z: 0.2645 },
  { x: -0.5443, y: 0.7837, z: 0.2992 },
  { x: -0.5245, y: 0.7837, z: 0.3328 },
  { x: -0.039, y: 0.7837, z: 0.6199 },
  { x: -0, y: 0.7837, z: 0.6211 },
  { x: 0.039, y: 0.7837, z: 0.6199 },
  { x: 0.0779, y: 0.7837, z: 0.6162 },
  { x: 0.1164, y: 0.7837, z: 0.6101 },
  { x: 0.1545, y: 0.7837, z: 0.6016 },
  { x: 0.1919, y: 0.7837, z: 0.5907 },
  { x: 0.2287, y: 0.7837, z: 0.5775 },
  { x: 0.2645, y: 0.7837, z: 0.562 },
  { x: 0.2992, y: 0.7837, z: 0.5443 },
  { x: 0.3328, y: 0.7837, z: 0.5245 },
  { x: 0.3651, y: 0.7837, z: 0.5025 },
  { x: 0.3959, y: 0.7837, z: 0.4786 },
  { x: 0.4252, y: 0.7837, z: 0.4528 },
  { x: 0.4528, y: 0.7837, z: 0.4252 },
  { x: 0.4786, y: 0.7837, z: 0.3959 },
  { x: 0.5025, y: 0.7837, z: 0.3651 },
  { x: 0.5245, y: 0.7837, z: 0.3328 },
  { x: 0.5443, y: 0.7837, z: 0.2992 },
  { x: 0.562, y: 0.7837, z: 0.2645 },
  { x: 0.5775, y: 0.7837, z: 0.2287 },
  { x: 0.5907, y: 0.7837, z: 0.1919 },
  { x: 0.6016, y: 0.7837, z: 0.1545 },
  { x: 0.6101, y: 0.7837, z: 0.1164 },
  { x: 0.6162, y: 0.7837, z: 0.0779 },
  { x: 0.6199, y: 0.7837, z: 0.039 },
  { x: 0.6211, y: 0.7837, z: 0 },
  { x: 0.6199, y: 0.7837, z: -0.039 },
  { x: 0.6162, y: 0.7837, z: -0.0779 },
  { x: 0.6101, y: 0.7837, z: -0.1164 },
  { x: 0.6016, y: 0.7837, z: -0.1545 },
  { x: 0.5907, y: 0.7837, z: -0.1919 },
  { x: 0.5775, y: 0.7837, z: -0.2287 },
  { x: 0.562, y: 0.7837, z: -0.2645 },
  { x: 0.5443, y: 0.7837, z: -0.2992 },
  { x: 0.5245, y: 0.7837, z: -0.3328 },
  { x: 0.5025, y: 0.7837, z: -0.3651 },
  { x: 0.4786, y: 0.7837, z: -0.3959 },
  { x: 0.4528, y: 0.7837, z: -0.4252 },
  { x: 0.4252, y: 0.7837, z: -0.4528 },
  { x: 0.3959, y: 0.7837, z: -0.4786 },
  { x: 0.3651, y: 0.7837, z: -0.5025 },
  { x: -0.1764, y: 0.8211, z: -0.5428 },
  { x: -0.4397, y: 0.8211, z: -0.3638 },
  { x: -0.4617, y: 0.8211, z: -0.3355 },
  { x: -0.4819, y: 0.8211, z: -0.3058 },
  { x: -0.5001, y: 0.8211, z: -0.2749 },
  { x: -0.5164, y: 0.8211, z: -0.243 },
  { x: -0.5306, y: 0.8211, z: -0.2101 },
  { x: -0.5428, y: 0.8211, z: -0.1764 },
  { x: -0.5528, y: 0.8211, z: -0.1419 },
  { x: -0.5606, y: 0.8211, z: -0.1069 },
  { x: -0.5662, y: 0.8211, z: -0.0715 },
  { x: -0.5696, y: 0.8211, z: -0.0358 },
  { x: -0.5707, y: 0.8211, z: -0 },
  { x: -0.5696, y: 0.8211, z: 0.0358 },
  { x: -0.5662, y: 0.8211, z: 0.0715 },
  { x: -0.5606, y: 0.8211, z: 0.1069 },
  { x: -0.5528, y: 0.8211, z: 0.1419 },
  { x: -0.5428, y: 0.8211, z: 0.1764 },
  { x: -0.5306, y: 0.8211, z: 0.2101 },
  { x: -0.5164, y: 0.8211, z: 0.243 },
  { x: -0.5001, y: 0.8211, z: 0.2749 },
  { x: -0.4819, y: 0.8211, z: 0.3058 },
  { x: 0.1069, y: 0.8211, z: 0.5606 },
  { x: 0.1419, y: 0.8211, z: 0.5528 },
  { x: 0.1764, y: 0.8211, z: 0.5428 },
  { x: 0.2101, y: 0.8211, z: 0.5306 },
  { x: 0.243, y: 0.8211, z: 0.5164 },
  { x: 0.2749, y: 0.8211, z: 0.5001 },
  { x: 0.3058, y: 0.8211, z: 0.4819 },
  { x: 0.3355, y: 0.8211, z: 0.4617 },
  { x: 0.3638, y: 0.8211, z: 0.4397 },
  { x: 0.3907, y: 0.8211, z: 0.416 },
  { x: 0.416, y: 0.8211, z: 0.3907 },
  { x: 0.4397, y: 0.8211, z: 0.3638 },
  { x: 0.4617, y: 0.8211, z: 0.3355 },
  { x: 0.4819, y: 0.8211, z: 0.3058 },
  { x: 0.5001, y: 0.8211, z: 0.2749 },
  { x: 0.5164, y: 0.8211, z: 0.243 },
  { x: 0.5306, y: 0.8211, z: 0.2101 },
  { x: 0.5428, y: 0.8211, z: 0.1764 },
  { x: 0.5528, y: 0.8211, z: 0.1419 },
  { x: 0.5606, y: 0.8211, z: 0.1069 },
  { x: 0.5662, y: 0.8211, z: 0.0715 },
  { x: 0.5696, y: 0.8211, z: 0.0358 },
  { x: 0.5707, y: 0.8211, z: 0 },
  { x: 0.5696, y: 0.8211, z: -0.0358 },
  { x: 0.5662, y: 0.8211, z: -0.0715 },
  { x: 0.5606, y: 0.8211, z: -0.1069 },
  { x: 0.5528, y: 0.8211, z: -0.1419 },
  { x: 0.5428, y: 0.8211, z: -0.1764 },
  { x: 0.5306, y: 0.8211, z: -0.2101 },
  { x: 0.5164, y: 0.8211, z: -0.243 },
  { x: 0.5001, y: 0.8211, z: -0.2749 },
  { x: 0.4819, y: 0.8211, z: -0.3058 },
  { x: 0.4617, y: 0.8211, z: -0.3355 },
  { x: 0.4397, y: 0.8211, z: -0.3638 },
  { x: 0.416, y: 0.8211, z: -0.3907 },
  { x: 0.3907, y: 0.8211, z: -0.416 },
  { x: 0.3638, y: 0.8211, z: -0.4397 },
  { x: 0.3355, y: 0.8211, z: -0.4617 },
  { x: -0.1288, y: 0.8554, z: -0.5018 },
  { x: -0.1601, y: 0.8554, z: -0.4927 },
  { x: -0.1907, y: 0.8554, z: -0.4816 },
  { x: -0.2206, y: 0.8554, z: -0.4687 },
  { x: -0.2496, y: 0.8554, z: -0.454 },
  { x: -0.2776, y: 0.8554, z: -0.4374 },
  { x: -0.3045, y: 0.8554, z: -0.4191 },
  { x: -0.3302, y: 0.8554, z: -0.3991 },
  { x: -0.3546, y: 0.8554, z: -0.3776 },
  { x: -0.3776, y: 0.8554, z: -0.3546 },
  { x: -0.3991, y: 0.8554, z: -0.3302 },
  { x: -0.4191, y: 0.8554, z: -0.3045 },
  { x: -0.4374, y: 0.8554, z: -0.2776 },
  { x: -0.454, y: 0.8554, z: -0.2496 },
  { x: -0.4687, y: 0.8554, z: -0.2206 },
  { x: -0.4816, y: 0.8554, z: -0.1907 },
  { x: -0.4927, y: 0.8554, z: -0.1601 },
  { x: -0.5018, y: 0.8554, z: -0.1288 },
  { x: -0.5089, y: 0.8554, z: -0.0971 },
  { x: -0.5139, y: 0.8554, z: -0.0649 },
  { x: -0.517, y: 0.8554, z: -0.0325 },
  { x: -0.518, y: 0.8554, z: -0 },
  { x: -0.517, y: 0.8554, z: 0.0325 },
  { x: -0.5139, y: 0.8554, z: 0.0649 },
  { x: -0.5089, y: 0.8554, z: 0.0971 },
  { x: -0.5018, y: 0.8554, z: 0.1288 },
  { x: -0.4927, y: 0.8554, z: 0.1601 },
  { x: -0.4816, y: 0.8554, z: 0.1907 },
  { x: -0.4687, y: 0.8554, z: 0.2206 },
  { x: -0.454, y: 0.8554, z: 0.2496 },
  { x: 0.2496, y: 0.8554, z: 0.454 },
  { x: 0.2776, y: 0.8554, z: 0.4374 },
  { x: 0.3045, y: 0.8554, z: 0.4191 },
  { x: 0.3302, y: 0.8554, z: 0.3991 },
  { x: 0.3546, y: 0.8554, z: 0.3776 },
  { x: 0.3776, y: 0.8554, z: 0.3546 },
  { x: 0.3991, y: 0.8554, z: 0.3302 },
  { x: 0.4191, y: 0.8554, z: 0.3045 },
  { x: 0.4374, y: 0.8554, z: 0.2776 },
  { x: 0.454, y: 0.8554, z: 0.2496 },
  { x: 0.4687, y: 0.8554, z: 0.2206 },
  { x: 0.4816, y: 0.8554, z: 0.1907 },
  { x: 0.4927, y: 0.8554, z: 0.1601 },
  { x: 0.5018, y: 0.8554, z: 0.1288 },
  { x: 0.5089, y: 0.8554, z: 0.0971 },
  { x: 0.5139, y: 0.8554, z: 0.0649 },
  { x: 0.517, y: 0.8554, z: 0.0325 },
  { x: 0.518, y: 0.8554, z: 0 },
  { x: 0.517, y: 0.8554, z: -0.0325 },
  { x: 0.5139, y: 0.8554, z: -0.0649 },
  { x: 0.5089, y: 0.8554, z: -0.0971 },
  { x: 0.5018, y: 0.8554, z: -0.1288 },
  { x: 0.4927, y: 0.8554, z: -0.1601 },
  { x: 0.4816, y: 0.8554, z: -0.1907 },
  { x: 0.4687, y: 0.8554, z: -0.2206 },
  { x: 0.454, y: 0.8554, z: -0.2496 },
  { x: 0.4374, y: 0.8554, z: -0.2776 },
  { x: 0.4191, y: 0.8554, z: -0.3045 },
  { x: 0.3991, y: 0.8554, z: -0.3302 },
  { x: 0.3776, y: 0.8554, z: -0.3546 },
  { x: 0.3546, y: 0.8554, z: -0.3776 },
  { x: 0.3302, y: 0.8554, z: -0.3991 },
  { x: 0.3045, y: 0.8554, z: -0.4191 },
  { x: 0.2776, y: 0.8554, z: -0.4374 },
  { x: 0.2496, y: 0.8554, z: -0.454 },
  { x: -0.1152, y: 0.8862, z: -0.4487 },
  { x: -0.1432, y: 0.8862, z: -0.4406 },
  { x: -0.1706, y: 0.8862, z: -0.4308 },
  { x: -0.1973, y: 0.8862, z: -0.4192 },
  { x: -0.2232, y: 0.8862, z: -0.406 },
  { x: -0.2482, y: 0.8862, z: -0.3912 },
  { x: -0.2723, y: 0.8862, z: -0.3748 },
  { x: -0.2953, y: 0.8862, z: -0.357 },
  { x: -0.3171, y: 0.8862, z: -0.3377 },
  { x: -0.3377, y: 0.8862, z: -0.3171 },
  { x: -0.357, y: 0.8862, z: -0.2953 },
  { x: -0.3748, y: 0.8862, z: -0.2723 },
  { x: -0.3912, y: 0.8862, z: -0.2482 },
  { x: -0.406, y: 0.8862, z: -0.2232 },
  { x: -0.4192, y: 0.8862, z: -0.1973 },
  { x: -0.4308, y: 0.8862, z: -0.1706 },
  { x: -0.4406, y: 0.8862, z: -0.1432 },
  { x: -0.4487, y: 0.8862, z: -0.1152 },
  { x: -0.4551, y: 0.8862, z: -0.0868 },
  { x: -0.4596, y: 0.8862, z: -0.0581 },
  { x: -0.4624, y: 0.8862, z: -0.0291 },
  { x: -0.4633, y: 0.8862, z: -0 },
  { x: -0.4624, y: 0.8862, z: 0.0291 },
  { x: -0.4596, y: 0.8862, z: 0.0581 },
  { x: -0.4551, y: 0.8862, z: 0.0868 },
  { x: -0.4487, y: 0.8862, z: 0.1152 },
  { x: -0.4406, y: 0.8862, z: 0.1432 },
  { x: -0.4308, y: 0.8862, z: 0.1706 },
  { x: -0.4192, y: 0.8862, z: 0.1973 },
  { x: -0.3748, y: 0.8862, z: 0.2723 },
  { x: -0.357, y: 0.8862, z: 0.2953 },
  { x: -0.3377, y: 0.8862, z: 0.3171 },
  { x: -0.3171, y: 0.8862, z: 0.3377 },
  { x: -0.2953, y: 0.8862, z: 0.357 },
  { x: 0.2482, y: 0.8862, z: 0.3912 },
  { x: 0.2723, y: 0.8862, z: 0.3748 },
  { x: 0.2953, y: 0.8862, z: 0.357 },
  { x: 0.3171, y: 0.8862, z: 0.3377 },
  { x: 0.3377, y: 0.8862, z: 0.3171 },
  { x: 0.357, y: 0.8862, z: 0.2953 },
  { x: 0.3748, y: 0.8862, z: 0.2723 },
  { x: 0.3912, y: 0.8862, z: 0.2482 },
  { x: 0.406, y: 0.8862, z: 0.2232 },
  { x: 0.4192, y: 0.8862, z: 0.1973 },
  { x: 0.4308, y: 0.8862, z: 0.1706 },
  { x: 0.4406, y: 0.8862, z: 0.1432 },
  { x: 0.4487, y: 0.8862, z: 0.1152 },
  { x: 0.4551, y: 0.8862, z: 0.0868 },
  { x: 0.4596, y: 0.8862, z: 0.0581 },
  { x: 0.4624, y: 0.8862, z: 0.0291 },
  { x: 0.4633, y: 0.8862, z: 0 },
  { x: 0.4624, y: 0.8862, z: -0.0291 },
  { x: 0.4596, y: 0.8862, z: -0.0581 },
  { x: 0.4551, y: 0.8862, z: -0.0868 },
  { x: 0.4487, y: 0.8862, z: -0.1152 },
  { x: 0.4406, y: 0.8862, z: -0.1432 },
  { x: 0.4308, y: 0.8862, z: -0.1706 },
  { x: 0.4192, y: 0.8862, z: -0.1973 },
  { x: 0.406, y: 0.8862, z: -0.2232 },
  { x: 0.3912, y: 0.8862, z: -0.2482 },
  { x: 0.3748, y: 0.8862, z: -0.2723 },
  { x: 0.357, y: 0.8862, z: -0.2953 },
  { x: 0.3377, y: 0.8862, z: -0.3171 },
  { x: 0.3171, y: 0.8862, z: -0.3377 },
  { x: 0.2953, y: 0.8862, z: -0.357 },
  { x: 0.2723, y: 0.8862, z: -0.3748 },
  { x: 0.2482, y: 0.8862, z: -0.3912 },
  { x: 0.2232, y: 0.8862, z: -0.406 },
  { x: 0.1973, y: 0.8862, z: -0.4192 },
  { x: 0.1706, y: 0.8862, z: -0.4308 },
  { x: 0.1432, y: 0.8862, z: -0.4406 },
  { x: 0.1152, y: 0.8862, z: -0.4487 },
  { x: 0.0868, y: 0.8862, z: -0.4551 },
  { x: -0.1012, y: 0.9135, z: -0.394 },
  { x: -0.1257, y: 0.9135, z: -0.3868 },
  { x: -0.1497, y: 0.9135, z: -0.3782 },
  { x: -0.1732, y: 0.9135, z: -0.368 },
  { x: -0.1959, y: 0.9135, z: -0.3564 },
  { x: -0.2179, y: 0.9135, z: -0.3434 },
  { x: -0.2391, y: 0.9135, z: -0.3291 },
  { x: -0.2593, y: 0.9135, z: -0.3134 },
  { x: -0.2784, y: 0.9135, z: -0.2965 },
  { x: -0.2965, y: 0.9135, z: -0.2784 },
  { x: -0.3134, y: 0.9135, z: -0.2593 },
  { x: -0.3291, y: 0.9135, z: -0.2391 },
  { x: -0.3434, y: 0.9135, z: -0.2179 },
  { x: -0.3564, y: 0.9135, z: -0.1959 },
  { x: -0.368, y: 0.9135, z: -0.1732 },
  { x: -0.3782, y: 0.9135, z: -0.1497 },
  { x: -0.3868, y: 0.9135, z: -0.1257 },
  { x: -0.394, y: 0.9135, z: -0.1012 },
  { x: -0.3995, y: 0.9135, z: -0.0762 },
  { x: -0.4035, y: 0.9135, z: -0.051 },
  { x: -0.4059, y: 0.9135, z: -0.0255 },
  { x: -0.4067, y: 0.9135, z: -0 },
  { x: -0.4059, y: 0.9135, z: 0.0255 },
  { x: -0.4035, y: 0.9135, z: 0.051 },
  { x: -0.3995, y: 0.9135, z: 0.0762 },
  { x: -0.394, y: 0.9135, z: 0.1012 },
  { x: -0.3868, y: 0.9135, z: 0.1257 },
  { x: -0.3434, y: 0.9135, z: 0.2179 },
  { x: -0.3291, y: 0.9135, z: 0.2391 },
  { x: -0.3134, y: 0.9135, z: 0.2593 },
  { x: -0.2965, y: 0.9135, z: 0.2784 },
  { x: -0.2784, y: 0.9135, z: 0.2965 },
  { x: -0.2593, y: 0.9135, z: 0.3134 },
  { x: -0.2391, y: 0.9135, z: 0.3291 },
  { x: -0.2179, y: 0.9135, z: 0.3434 },
  { x: 0.1959, y: 0.9135, z: 0.3564 },
  { x: 0.2179, y: 0.9135, z: 0.3434 },
  { x: 0.2391, y: 0.9135, z: 0.3291 },
  { x: 0.2593, y: 0.9135, z: 0.3134 },
  { x: 0.2784, y: 0.9135, z: 0.2965 },
  { x: 0.2965, y: 0.9135, z: 0.2784 },
  { x: 0.3134, y: 0.9135, z: 0.2593 },
  { x: 0.3291, y: 0.9135, z: 0.2391 },
  { x: 0.3434, y: 0.9135, z: 0.2179 },
  { x: 0.3564, y: 0.9135, z: 0.1959 },
  { x: 0.368, y: 0.9135, z: 0.1732 },
  { x: 0.3782, y: 0.9135, z: 0.1497 },
  { x: 0.3868, y: 0.9135, z: 0.1257 },
  { x: 0.394, y: 0.9135, z: 0.1012 },
  { x: 0.3995, y: 0.9135, z: 0.0762 },
  { x: 0.4035, y: 0.9135, z: 0.051 },
  { x: 0.4059, y: 0.9135, z: 0.0255 },
  { x: 0.4067, y: 0.9135, z: 0 },
  { x: 0.4059, y: 0.9135, z: -0.0255 },
  { x: 0.4035, y: 0.9135, z: -0.051 },
  { x: 0.3995, y: 0.9135, z: -0.0762 },
  { x: 0.394, y: 0.9135, z: -0.1012 },
  { x: 0.3868, y: 0.9135, z: -0.1257 },
  { x: 0.3782, y: 0.9135, z: -0.1497 },
  { x: 0.368, y: 0.9135, z: -0.1732 },
  { x: 0.3564, y: 0.9135, z: -0.1959 },
  { x: 0.3434, y: 0.9135, z: -0.2179 },
  { x: 0.3291, y: 0.9135, z: -0.2391 },
  { x: 0.3134, y: 0.9135, z: -0.2593 },
  { x: 0.2965, y: 0.9135, z: -0.2784 },
  { x: 0.2784, y: 0.9135, z: -0.2965 },
  { x: 0.2593, y: 0.9135, z: -0.3134 },
  { x: 0.2391, y: 0.9135, z: -0.3291 },
  { x: 0.2179, y: 0.9135, z: -0.3434 },
  { x: 0.1959, y: 0.9135, z: -0.3564 },
  { x: 0.1732, y: 0.9135, z: -0.368 },
  { x: 0.1497, y: 0.9135, z: -0.3782 },
  { x: 0.1257, y: 0.9135, z: -0.3868 },
  { x: 0.1012, y: 0.9135, z: -0.394 },
  { x: 0.0762, y: 0.9135, z: -0.3995 },
  { x: -0.0867, y: 0.9373, z: -0.3376 },
  { x: -0.1077, y: 0.9373, z: -0.3315 },
  { x: -0.1283, y: 0.9373, z: -0.3241 },
  { x: -0.1484, y: 0.9373, z: -0.3154 },
  { x: -0.1679, y: 0.9373, z: -0.3055 },
  { x: -0.1868, y: 0.9373, z: -0.2943 },
  { x: -0.2049, y: 0.9373, z: -0.282 },
  { x: -0.2222, y: 0.9373, z: -0.2686 },
  { x: -0.2386, y: 0.9373, z: -0.2541 },
  { x: -0.2541, y: 0.9373, z: -0.2386 },
  { x: -0.2686, y: 0.9373, z: -0.2222 },
  { x: -0.282, y: 0.9373, z: -0.2049 },
  { x: -0.2943, y: 0.9373, z: -0.1868 },
  { x: -0.3458, y: 0.9373, z: -0.0437 },
  { x: -0.3479, y: 0.9373, z: -0.0219 },
  { x: -0.3486, y: 0.9373, z: -0 },
  { x: -0.3479, y: 0.9373, z: 0.0219 },
  { x: -0.3458, y: 0.9373, z: 0.0437 },
  { x: -0.3424, y: 0.9373, z: 0.0653 },
  { x: -0.3376, y: 0.9373, z: 0.0867 },
  { x: -0.3055, y: 0.9373, z: 0.1679 },
  { x: -0.2943, y: 0.9373, z: 0.1868 },
  { x: -0.282, y: 0.9373, z: 0.2049 },
  { x: -0.2686, y: 0.9373, z: 0.2222 },
  { x: -0.2541, y: 0.9373, z: 0.2386 },
  { x: -0.2386, y: 0.9373, z: 0.2541 },
  { x: -0.2222, y: 0.9373, z: 0.2686 },
  { x: -0.2049, y: 0.9373, z: 0.282 },
  { x: -0.1868, y: 0.9373, z: 0.2943 },
  { x: -0.1679, y: 0.9373, z: 0.3055 },
  { x: -0.1484, y: 0.9373, z: 0.3154 },
  { x: -0.1283, y: 0.9373, z: 0.3241 },
  { x: 0.1484, y: 0.9373, z: 0.3154 },
  { x: 0.1679, y: 0.9373, z: 0.3055 },
  { x: 0.2222, y: 0.9373, z: 0.2686 },
  { x: 0.2386, y: 0.9373, z: 0.2541 },
  { x: 0.2541, y: 0.9373, z: 0.2386 },
  { x: 0.2686, y: 0.9373, z: 0.2222 },
  { x: 0.282, y: 0.9373, z: 0.2049 },
  { x: 0.2943, y: 0.9373, z: 0.1868 },
  { x: 0.3055, y: 0.9373, z: 0.1679 },
  { x: 0.3154, y: 0.9373, z: 0.1484 },
  { x: 0.3241, y: 0.9373, z: 0.1283 },
  { x: 0.3315, y: 0.9373, z: 0.1077 },
  { x: 0.3376, y: 0.9373, z: 0.0867 },
  { x: 0.3424, y: 0.9373, z: 0.0653 },
  { x: 0.3458, y: 0.9373, z: 0.0437 },
  { x: 0.3479, y: 0.9373, z: 0.0219 },
  { x: 0.3486, y: 0.9373, z: 0 },
  { x: 0.3479, y: 0.9373, z: -0.0219 },
  { x: 0.3458, y: 0.9373, z: -0.0437 },
  { x: 0.3424, y: 0.9373, z: -0.0653 },
  { x: 0.3376, y: 0.9373, z: -0.0867 },
  { x: 0.3315, y: 0.9373, z: -0.1077 },
  { x: 0.3241, y: 0.9373, z: -0.1283 },
  { x: 0.3154, y: 0.9373, z: -0.1484 },
  { x: 0.3055, y: 0.9373, z: -0.1679 },
  { x: 0.2943, y: 0.9373, z: -0.1868 },
  { x: 0.282, y: 0.9373, z: -0.2049 },
  { x: 0.2686, y: 0.9373, z: -0.2222 },
  { x: 0.2541, y: 0.9373, z: -0.2386 },
  { x: 0.2386, y: 0.9373, z: -0.2541 },
  { x: 0.2222, y: 0.9373, z: -0.2686 },
  { x: 0.2049, y: 0.9373, z: -0.282 },
  { x: 0.1868, y: 0.9373, z: -0.2943 },
  { x: 0.1679, y: 0.9373, z: -0.3055 },
  { x: -0.2615, y: 0.9573, z: 0.1231 },
  { x: -0.2533, y: 0.9573, z: 0.1392 },
  { x: -0.244, y: 0.9573, z: 0.1549 },
  { x: -0.2338, y: 0.9573, z: 0.1699 },
  { x: -0.2227, y: 0.9573, z: 0.1842 },
  { x: -0.2107, y: 0.9573, z: 0.1979 },
  { x: -0.1979, y: 0.9573, z: 0.2107 },
  { x: -0.1842, y: 0.9573, z: 0.2227 },
  { x: -0.1699, y: 0.9573, z: 0.2338 },
  { x: -0.1549, y: 0.9573, z: 0.244 },
  { x: -0.1392, y: 0.9573, z: 0.2533 },
  { x: -0.1231, y: 0.9573, z: 0.2615 },
  { x: -0.1064, y: 0.9573, z: 0.2687 },
  { x: 0.2839, y: 0.9573, z: 0.0542 },
  { x: 0.2868, y: 0.9573, z: 0.0362 },
  { x: 0.2885, y: 0.9573, z: 0.0181 },
  { x: 0.289, y: 0.9573, z: 0 },
  { x: 0.2885, y: 0.9573, z: -0.0181 },
  { x: 0.2868, y: 0.9573, z: -0.0362 },
  { x: 0.2839, y: 0.9573, z: -0.0542 },
  { x: 0.28, y: 0.9573, z: -0.0719 },
  { x: 0.2749, y: 0.9573, z: -0.0893 },
  { x: 0.2687, y: 0.9573, z: -0.1064 },
  { x: 0.2615, y: 0.9573, z: -0.1231 },
  { x: 0.2533, y: 0.9573, z: -0.1392 },
  { x: -0.2066, y: 0.9736, z: 0.0972 },
  { x: -0.2001, y: 0.9736, z: 0.11 },
  { x: -0.1928, y: 0.9736, z: 0.1224 },
  { x: -0.1847, y: 0.9736, z: 0.1342 },
  { x: -0.1759, y: 0.9736, z: 0.1456 },
  { x: -0.1665, y: 0.9736, z: 0.1563 },
  { x: -0.1563, y: 0.9736, z: 0.1665 },
  { x: -0.1456, y: 0.9736, z: 0.1759 },
  { x: -0.1342, y: 0.9736, z: 0.1847 },
  { x: -0.1224, y: 0.9736, z: 0.1928 },
  { x: -0.11, y: 0.9736, z: 0.2001 },
  { x: -0.0972, y: 0.9736, z: 0.2066 },
  { x: -0.1408, y: 0.986, z: 0.0894 },
  { x: -0.1349, y: 0.986, z: 0.098 },
  { x: -0.1285, y: 0.986, z: 0.1063 },
  { x: -0.1216, y: 0.986, z: 0.1142 },
  { x: -0.1142, y: 0.986, z: 0.1216 },
  { x: -0.1063, y: 0.986, z: 0.1285 },
  { x: -0.098, y: 0.986, z: 0.1349 },
  { x: -0.0894, y: 0.986, z: 0.1408 },
  { x: -0.0803, y: 0.986, z: 0.1461 },
  { x: -0.071, y: 0.986, z: 0.1509 }
];
const globeShell = [
  { x: -0, y: -0.9848, z: -0.1736 },
  { x: -0.0331, y: -0.9848, z: -0.1705 },
  { x: -0.065, y: -0.9848, z: -0.161 },
  { x: -0.0946, y: -0.9848, z: -0.1456 },
  { x: -0.1206, y: -0.9848, z: -0.1249 },
  { x: -0.1422, y: -0.9848, z: -0.0996 },
  { x: -0.1586, y: -0.9848, z: -0.0706 },
  { x: -0.1692, y: -0.9848, z: -0.0391 },
  { x: -0.1735, y: -0.9848, z: -61e-4 },
  { x: -0.1715, y: -0.9848, z: 0.0272 },
  { x: -0.1632, y: -0.9848, z: 0.0594 },
  { x: -0.1488, y: -0.9848, z: 0.0894 },
  { x: -0.129, y: -0.9848, z: 0.1162 },
  { x: -0.1045, y: -0.9848, z: 0.1387 },
  { x: -0.0761, y: -0.9848, z: 0.1561 },
  { x: -0.0449, y: -0.9848, z: 0.1677 },
  { x: -0.0121, y: -0.9848, z: 0.1732 },
  { x: 0.0212, y: -0.9848, z: 0.1724 },
  { x: 0.0537, y: -0.9848, z: 0.1651 },
  { x: 0.0842, y: -0.9848, z: 0.1519 },
  { x: 0.1116, y: -0.9848, z: 0.133 },
  { x: 0.1349, y: -0.9848, z: 0.1093 },
  { x: 0.1533, y: -0.9848, z: 0.0815 },
  { x: 0.1661, y: -0.9848, z: 0.0508 },
  { x: 0.1727, y: -0.9848, z: 0.0182 },
  { x: 0.173, y: -0.9848, z: -0.0151 },
  { x: 0.1669, y: -0.9848, z: -0.0479 },
  { x: 0.1547, y: -0.9848, z: -0.0788 },
  { x: 0.1368, y: -0.9848, z: -0.1069 },
  { x: 0.1139, y: -0.9848, z: -0.1311 },
  { x: 0.0868, y: -0.9848, z: -0.1504 },
  { x: 0.0565, y: -0.9848, z: -0.1642 },
  { x: 0.0242, y: -0.9848, z: -0.172 },
  { x: -0, y: -0.9336, z: -0.3584 },
  { x: -0.0684, y: -0.9336, z: -0.3518 },
  { x: -0.1342, y: -0.9336, z: -0.3323 },
  { x: -0.1952, y: -0.9336, z: -0.3006 },
  { x: -0.2489, y: -0.9336, z: -0.2578 },
  { x: -0.2936, y: -0.9336, z: -0.2056 },
  { x: -0.3274, y: -0.9336, z: -0.1458 },
  { x: -0.3492, y: -0.9336, z: -0.0806 },
  { x: -0.3581, y: -0.9336, z: -0.0125 },
  { x: -0.354, y: -0.9336, z: 0.0561 },
  { x: -0.3368, y: -0.9336, z: 0.1226 },
  { x: -0.3072, y: -0.9336, z: 0.1846 },
  { x: -0.2663, y: -0.9336, z: 0.2398 },
  { x: -0.2157, y: -0.9336, z: 0.2862 },
  { x: -0.1571, y: -0.9336, z: 0.3221 },
  { x: -0.0928, y: -0.9336, z: 0.3462 },
  { x: -0.025, y: -0.9336, z: 0.3575 },
  { x: 0.0437, y: -0.9336, z: 0.3557 },
  { x: 0.1107, y: -0.9336, z: 0.3408 },
  { x: 0.1737, y: -0.9336, z: 0.3134 },
  { x: 0.2304, y: -0.9336, z: 0.2745 },
  { x: 0.2785, y: -0.9336, z: 0.2255 },
  { x: 0.3164, y: -0.9336, z: 0.1682 },
  { x: 0.3427, y: -0.9336, z: 0.1048 },
  { x: 0.3564, y: -0.9336, z: 0.0375 },
  { x: 0.357, y: -0.9336, z: -0.0312 },
  { x: 0.3445, y: -0.9336, z: -0.0988 },
  { x: 0.3193, y: -0.9336, z: -0.1627 },
  { x: 0.2824, y: -0.9336, z: -0.2206 },
  { x: 0.2351, y: -0.9336, z: -0.2705 },
  { x: 0.1792, y: -0.9336, z: -0.3104 },
  { x: 0.1167, y: -0.9336, z: -0.3388 },
  { x: 0.0499, y: -0.9336, z: -0.3549 },
  { x: -0, y: -0.848, z: -0.5299 },
  { x: -0.1011, y: -0.848, z: -0.5202 },
  { x: -0.1985, y: -0.848, z: -0.4913 },
  { x: -0.2886, y: -0.848, z: -0.4444 },
  { x: -0.3681, y: -0.848, z: -0.3812 },
  { x: -0.4341, y: -0.848, z: -0.3039 },
  { x: -0.4841, y: -0.848, z: -0.2155 },
  { x: -0.5163, y: -0.848, z: -0.1192 },
  { x: -0.5296, y: -0.848, z: -0.0185 },
  { x: -0.5234, y: -0.848, z: 0.0829 },
  { x: -0.498, y: -0.848, z: 0.1812 },
  { x: -0.4542, y: -0.848, z: 0.2729 },
  { x: -0.3938, y: -0.848, z: 0.3546 },
  { x: -0.3189, y: -0.848, z: 0.4232 },
  { x: -0.2323, y: -0.848, z: 0.4763 },
  { x: -0.1372, y: -0.848, z: 0.5119 },
  { x: -0.037, y: -0.848, z: 0.5286 },
  { x: 0.0646, y: -0.848, z: 0.526 },
  { x: 0.1638, y: -0.848, z: 0.504 },
  { x: 0.2569, y: -0.848, z: 0.4635 },
  { x: 0.3406, y: -0.848, z: 0.4059 },
  { x: 0.4118, y: -0.848, z: 0.3335 },
  { x: 0.4679, y: -0.848, z: 0.2488 },
  { x: 0.5068, y: -0.848, z: 0.1549 },
  { x: 0.527, y: -0.848, z: 0.0554 },
  { x: 0.5279, y: -0.848, z: -0.0462 },
  { x: 0.5094, y: -0.848, z: -0.1461 },
  { x: 0.4722, y: -0.848, z: -0.2406 },
  { x: 0.4176, y: -0.848, z: -0.3263 },
  { x: 0.3477, y: -0.848, z: -0.3999 },
  { x: 0.265, y: -0.848, z: -0.4589 },
  { x: 0.1725, y: -0.848, z: -0.501 },
  { x: 0.0738, y: -0.848, z: -0.5248 },
  { x: -0, y: -0.7314, z: -0.682 },
  { x: -0.1301, y: -0.7314, z: -0.6695 },
  { x: -0.2555, y: -0.7314, z: -0.6323 },
  { x: -0.3714, y: -0.7314, z: -0.572 },
  { x: -0.4738, y: -0.7314, z: -0.4906 },
  { x: -0.5587, y: -0.7314, z: -0.3912 },
  { x: -0.623, y: -0.7314, z: -0.2774 },
  { x: -0.6645, y: -0.7314, z: -0.1534 },
  { x: -0.6816, y: -0.7314, z: -0.0238 },
  { x: -0.6736, y: -0.7314, z: 0.1067 },
  { x: -0.6409, y: -0.7314, z: 0.2333 },
  { x: -0.5846, y: -0.7314, z: 0.3513 },
  { x: -0.5068, y: -0.7314, z: 0.4563 },
  { x: -0.4104, y: -0.7314, z: 0.5447 },
  { x: -0.299, y: -0.7314, z: 0.613 },
  { x: -0.1765, y: -0.7314, z: 0.6588 },
  { x: -0.0476, y: -0.7314, z: 0.6803 },
  { x: 0.0831, y: -0.7314, z: 0.6769 },
  { x: 0.2107, y: -0.7314, z: 0.6486 },
  { x: 0.3306, y: -0.7314, z: 0.5965 },
  { x: 0.4384, y: -0.7314, z: 0.5224 },
  { x: 0.53, y: -0.7314, z: 0.4292 },
  { x: 0.6022, y: -0.7314, z: 0.3202 },
  { x: 0.6522, y: -0.7314, z: 0.1994 },
  { x: 0.6783, y: -0.7314, z: 0.0713 },
  { x: 0.6794, y: -0.7314, z: -0.0594 },
  { x: 0.6556, y: -0.7314, z: -0.188 },
  { x: 0.6077, y: -0.7314, z: -0.3096 },
  { x: 0.5374, y: -0.7314, z: -0.4199 },
  { x: 0.4474, y: -0.7314, z: -0.5147 },
  { x: 0.341, y: -0.7314, z: -0.5906 },
  { x: 0.222, y: -0.7314, z: -0.6448 },
  { x: 0.0949, y: -0.7314, z: -0.6754 },
  { x: -0, y: -0.5878, z: -0.809 },
  { x: -0.1544, y: -0.5878, z: -0.7942 },
  { x: -0.3031, y: -0.5878, z: -0.7501 },
  { x: -0.4406, y: -0.5878, z: -0.6785 },
  { x: -0.562, y: -0.5878, z: -0.582 },
  { x: -0.6627, y: -0.5878, z: -0.464 },
  { x: -0.7391, y: -0.5878, z: -0.3291 },
  { x: -0.7883, y: -0.5878, z: -0.182 },
  { x: -0.8085, y: -0.5878, z: -0.0282 },
  { x: -0.7991, y: -0.5878, z: 0.1266 },
  { x: -0.7602, y: -0.5878, z: 0.2767 },
  { x: -0.6935, y: -0.5878, z: 0.4167 },
  { x: -0.6012, y: -0.5878, z: 0.5413 },
  { x: -0.4869, y: -0.5878, z: 0.6461 },
  { x: -0.3546, y: -0.5878, z: 0.7271 },
  { x: -0.2094, y: -0.5878, z: 0.7815 },
  { x: -0.0564, y: -0.5878, z: 0.807 },
  { x: 0.0986, y: -0.5878, z: 0.803 },
  { x: 0.25, y: -0.5878, z: 0.7694 },
  { x: 0.3922, y: -0.5878, z: 0.7076 },
  { x: 0.52, y: -0.5878, z: 0.6197 },
  { x: 0.6287, y: -0.5878, z: 0.5091 },
  { x: 0.7143, y: -0.5878, z: 0.3798 },
  { x: 0.7737, y: -0.5878, z: 0.2365 },
  { x: 0.8046, y: -0.5878, z: 0.0846 },
  { x: 0.8059, y: -0.5878, z: -0.0705 },
  { x: 0.7777, y: -0.5878, z: -0.223 },
  { x: 0.7208, y: -0.5878, z: -0.3673 },
  { x: 0.6375, y: -0.5878, z: -0.4981 },
  { x: 0.5308, y: -0.5878, z: -0.6106 },
  { x: 0.4045, y: -0.5878, z: -0.7006 },
  { x: 0.2634, y: -0.5878, z: -0.7649 },
  { x: 0.1126, y: -0.5878, z: -0.8011 },
  { x: -0, y: -0.4226, z: -0.9063 },
  { x: -0.1729, y: -0.4226, z: -0.8897 },
  { x: -0.3395, y: -0.4226, z: -0.8403 },
  { x: -0.4936, y: -0.4226, z: -0.7601 },
  { x: -0.6296, y: -0.4226, z: -0.6519 },
  { x: -0.7424, y: -0.4226, z: -0.5198 },
  { x: -0.828, y: -0.4226, z: -0.3686 },
  { x: -0.8831, y: -0.4226, z: -0.2039 },
  { x: -0.9058, y: -0.4226, z: -0.0316 },
  { x: -0.8951, y: -0.4226, z: 0.1418 },
  { x: -0.8517, y: -0.4226, z: 0.31 },
  { x: -0.7769, y: -0.4226, z: 0.4668 },
  { x: -0.6735, y: -0.4226, z: 0.6064 },
  { x: -0.5454, y: -0.4226, z: 0.7238 },
  { x: -0.3973, y: -0.4226, z: 0.8146 },
  { x: -0.2346, y: -0.4226, z: 0.8754 },
  { x: -0.0632, y: -0.4226, z: 0.9041 },
  { x: 0.1105, y: -0.4226, z: 0.8996 },
  { x: 0.2801, y: -0.4226, z: 0.8619 },
  { x: 0.4394, y: -0.4226, z: 0.7927 },
  { x: 0.5826, y: -0.4226, z: 0.6943 },
  { x: 0.7043, y: -0.4226, z: 0.5704 },
  { x: 0.8002, y: -0.4226, z: 0.4255 },
  { x: 0.8667, y: -0.4226, z: 0.265 },
  { x: 0.9013, y: -0.4226, z: 0.0947 },
  { x: 0.9029, y: -0.4226, z: -0.079 },
  { x: 0.8712, y: -0.4226, z: -0.2498 },
  { x: 0.8075, y: -0.4226, z: -0.4115 },
  { x: 0.7142, y: -0.4226, z: -0.558 },
  { x: 0.5946, y: -0.4226, z: -0.684 },
  { x: 0.4532, y: -0.4226, z: -0.7849 },
  { x: 0.2951, y: -0.4226, z: -0.8569 },
  { x: 0.1261, y: -0.4226, z: -0.8975 },
  { x: -0, y: -0.2419, z: -0.9703 },
  { x: -0.1851, y: -0.2419, z: -0.9525 },
  { x: -0.3635, y: -0.2419, z: -0.8996 },
  { x: -0.5285, y: -0.2419, z: -0.8138 },
  { x: -0.674, y: -0.2419, z: -0.698 },
  { x: -0.7948, y: -0.2419, z: -0.5565 },
  { x: -0.8864, y: -0.2419, z: -0.3947 },
  { x: -0.9454, y: -0.2419, z: -0.2183 },
  { x: -0.9697, y: -0.2419, z: -0.0339 },
  { x: -0.9583, y: -0.2419, z: 0.1518 },
  { x: -0.9118, y: -0.2419, z: 0.3319 },
  { x: -0.8317, y: -0.2419, z: 0.4997 },
  { x: -0.7211, y: -0.2419, z: 0.6493 },
  { x: -0.5839, y: -0.2419, z: 0.7749 },
  { x: -0.4253, y: -0.2419, z: 0.8721 },
  { x: -0.2511, y: -0.2419, z: 0.9372 },
  { x: -0.0677, y: -0.2419, z: 0.9679 },
  { x: 0.1182, y: -0.2419, z: 0.9631 },
  { x: 0.2998, y: -0.2419, z: 0.9228 },
  { x: 0.4704, y: -0.2419, z: 0.8486 },
  { x: 0.6237, y: -0.2419, z: 0.7433 },
  { x: 0.7541, y: -0.2419, z: 0.6106 },
  { x: 0.8567, y: -0.2419, z: 0.4555 },
  { x: 0.9279, y: -0.2419, z: 0.2837 },
  { x: 0.965, y: -0.2419, z: 0.1014 },
  { x: 0.9666, y: -0.2419, z: -0.0846 },
  { x: 0.9327, y: -0.2419, z: -0.2674 },
  { x: 0.8645, y: -0.2419, z: -0.4405 },
  { x: 0.7646, y: -0.2419, z: -0.5974 },
  { x: 0.6366, y: -0.2419, z: -0.7323 },
  { x: 0.4851, y: -0.2419, z: -0.8403 },
  { x: 0.3159, y: -0.2419, z: -0.9174 },
  { x: 0.135, y: -0.2419, z: -0.9609 },
  { x: -0, y: -0.0523, z: -0.9986 },
  { x: -0.1905, y: -0.0523, z: -0.9803 },
  { x: -0.3741, y: -0.0523, z: -0.9259 },
  { x: -0.5439, y: -0.0523, z: -0.8375 },
  { x: -0.6937, y: -0.0523, z: -0.7184 },
  { x: -0.818, y: -0.0523, z: -0.5728 },
  { x: -0.9123, y: -0.0523, z: -0.4062 },
  { x: -0.973, y: -0.0523, z: -0.2246 },
  { x: -0.998, y: -0.0523, z: -0.0349 },
  { x: -0.9863, y: -0.0523, z: 0.1562 },
  { x: -0.9384, y: -0.0523, z: 0.3416 },
  { x: -0.856, y: -0.0523, z: 0.5143 },
  { x: -0.7421, y: -0.0523, z: 0.6682 },
  { x: -0.601, y: -0.0523, z: 0.7975 },
  { x: -0.4378, y: -0.0523, z: 0.8976 },
  { x: -0.2585, y: -0.0523, z: 0.9646 },
  { x: -0.0697, y: -0.0523, z: 0.9962 },
  { x: 0.1217, y: -0.0523, z: 0.9912 },
  { x: 0.3086, y: -0.0523, z: 0.9498 },
  { x: 0.4841, y: -0.0523, z: 0.8734 },
  { x: 0.6419, y: -0.0523, z: 0.765 },
  { x: 0.7761, y: -0.0523, z: 0.6285 },
  { x: 0.8817, y: -0.0523, z: 0.4688 },
  { x: 0.955, y: -0.0523, z: 0.292 },
  { x: 0.9932, y: -0.0523, z: 0.1044 },
  { x: 0.9948, y: -0.0523, z: -0.087 },
  { x: 0.9599, y: -0.0523, z: -0.2753 },
  { x: 0.8898, y: -0.0523, z: -0.4534 },
  { x: 0.7869, y: -0.0523, z: -0.6148 },
  { x: 0.6552, y: -0.0523, z: -0.7537 },
  { x: 0.4993, y: -0.0523, z: -0.8648 },
  { x: 0.3251, y: -0.0523, z: -0.9442 },
  { x: 0.139, y: -0.0523, z: -0.9889 },
  { x: -0, y: 0.1392, z: -0.9903 },
  { x: -0.189, y: 0.1392, z: -0.9721 },
  { x: -0.371, y: 0.1392, z: -0.9182 },
  { x: -0.5393, y: 0.1392, z: -0.8305 },
  { x: -0.6879, y: 0.1392, z: -0.7123 },
  { x: -0.8112, y: 0.1392, z: -0.568 },
  { x: -0.9047, y: 0.1392, z: -0.4028 },
  { x: -0.9649, y: 0.1392, z: -0.2228 },
  { x: -0.9897, y: 0.1392, z: -0.0346 },
  { x: -0.9781, y: 0.1392, z: 0.1549 },
  { x: -0.9305, y: 0.1392, z: 0.3387 },
  { x: -0.8488, y: 0.1392, z: 0.51 },
  { x: -0.7359, y: 0.1392, z: 0.6626 },
  { x: -0.596, y: 0.1392, z: 0.7909 },
  { x: -0.4341, y: 0.1392, z: 0.89 },
  { x: -0.2563, y: 0.1392, z: 0.9565 },
  { x: -0.0691, y: 0.1392, z: 0.9879 },
  { x: 0.1207, y: 0.1392, z: 0.9829 },
  { x: 0.306, y: 0.1392, z: 0.9418 },
  { x: 0.4801, y: 0.1392, z: 0.8661 },
  { x: 0.6365, y: 0.1392, z: 0.7586 },
  { x: 0.7696, y: 0.1392, z: 0.6232 },
  { x: 0.8744, y: 0.1392, z: 0.4649 },
  { x: 0.947, y: 0.1392, z: 0.2895 },
  { x: 0.9848, y: 0.1392, z: 0.1035 },
  { x: 0.9865, y: 0.1392, z: -0.0863 },
  { x: 0.9519, y: 0.1392, z: -0.273 },
  { x: 0.8823, y: 0.1392, z: -0.4496 },
  { x: 0.7803, y: 0.1392, z: -0.6097 },
  { x: 0.6497, y: 0.1392, z: -0.7474 },
  { x: 0.4951, y: 0.1392, z: -0.8576 },
  { x: 0.3224, y: 0.1392, z: -0.9363 },
  { x: 0.1378, y: 0.1392, z: -0.9806 },
  { x: -0, y: 0.3256, z: -0.9455 },
  { x: -0.1804, y: 0.3256, z: -0.9281 },
  { x: -0.3542, y: 0.3256, z: -0.8767 },
  { x: -0.515, y: 0.3256, z: -0.793 },
  { x: -0.6568, y: 0.3256, z: -0.6801 },
  { x: -0.7745, y: 0.3256, z: -0.5423 },
  { x: -0.8638, y: 0.3256, z: -0.3846 },
  { x: -0.9213, y: 0.3256, z: -0.2127 },
  { x: -0.9449, y: 0.3256, z: -0.033 },
  { x: -0.9339, y: 0.3256, z: 0.1479 },
  { x: -0.8885, y: 0.3256, z: 0.3234 },
  { x: -0.8105, y: 0.3256, z: 0.487 },
  { x: -0.7027, y: 0.3256, z: 0.6327 },
  { x: -0.569, y: 0.3256, z: 0.7551 },
  { x: -0.4145, y: 0.3256, z: 0.8498 },
  { x: -0.2447, y: 0.3256, z: 0.9133 },
  { x: -0.066, y: 0.3256, z: 0.9432 },
  { x: 0.1152, y: 0.3256, z: 0.9385 },
  { x: 0.2922, y: 0.3256, z: 0.8992 },
  { x: 0.4584, y: 0.3256, z: 0.827 },
  { x: 0.6078, y: 0.3256, z: 0.7243 },
  { x: 0.7348, y: 0.3256, z: 0.595 },
  { x: 0.8348, y: 0.3256, z: 0.4439 },
  { x: 0.9042, y: 0.3256, z: 0.2764 },
  { x: 0.9403, y: 0.3256, z: 0.0988 },
  { x: 0.9419, y: 0.3256, z: -0.0824 },
  { x: 0.9089, y: 0.3256, z: -0.2606 },
  { x: 0.8425, y: 0.3256, z: -0.4293 },
  { x: 0.7451, y: 0.3256, z: -0.5821 },
  { x: 0.6203, y: 0.3256, z: -0.7136 },
  { x: 0.4728, y: 0.3256, z: -0.8188 },
  { x: 0.3078, y: 0.3256, z: -0.894 },
  { x: 0.1316, y: 0.3256, z: -0.9363 },
  { x: -0, y: 0.5, z: -0.866 },
  { x: -0.1652, y: 0.5, z: -0.8501 },
  { x: -0.3244, y: 0.5, z: -0.803 },
  { x: -0.4717, y: 0.5, z: -0.7263 },
  { x: -0.6016, y: 0.5, z: -0.623 },
  { x: -0.7094, y: 0.5, z: -0.4967 },
  { x: -0.7912, y: 0.5, z: -0.3522 },
  { x: -0.8438, y: 0.5, z: -0.1948 },
  { x: -0.8655, y: 0.5, z: -0.0302 },
  { x: -0.8554, y: 0.5, z: 0.1355 },
  { x: -0.8138, y: 0.5, z: 0.2962 },
  { x: -0.7423, y: 0.5, z: 0.446 },
  { x: -0.6436, y: 0.5, z: 0.5795 },
  { x: -0.5212, y: 0.5, z: 0.6916 },
  { x: -0.3796, y: 0.5, z: 0.7784 },
  { x: -0.2241, y: 0.5, z: 0.8365 },
  { x: -0.0604, y: 0.5, z: 0.8639 },
  { x: 0.1055, y: 0.5, z: 0.8596 },
  { x: 0.2676, y: 0.5, z: 0.8236 },
  { x: 0.4199, y: 0.5, z: 0.7574 },
  { x: 0.5567, y: 0.5, z: 0.6634 },
  { x: 0.673, y: 0.5, z: 0.545 },
  { x: 0.7647, y: 0.5, z: 0.4066 },
  { x: 0.8282, y: 0.5, z: 0.2532 },
  { x: 0.8613, y: 0.5, z: 0.0905 },
  { x: 0.8627, y: 0.5, z: -0.0755 },
  { x: 0.8325, y: 0.5, z: -0.2387 },
  { x: 0.7716, y: 0.5, z: -0.3932 },
  { x: 0.6824, y: 0.5, z: -0.5332 },
  { x: 0.5682, y: 0.5, z: -0.6536 },
  { x: 0.433, y: 0.5, z: -0.75 },
  { x: 0.282, y: 0.5, z: -0.8188 },
  { x: 0.1205, y: 0.5, z: -0.8576 },
  { x: -0, y: 0.6561, z: -0.7547 },
  { x: -0.144, y: 0.6561, z: -0.7408 },
  { x: -0.2827, y: 0.6561, z: -0.6998 },
  { x: -0.411, y: 0.6561, z: -0.633 },
  { x: -0.5243, y: 0.6561, z: -0.5429 },
  { x: -0.6182, y: 0.6561, z: -0.4329 },
  { x: -0.6895, y: 0.6561, z: -0.307 },
  { x: -0.7354, y: 0.6561, z: -0.1698 },
  { x: -0.7542, y: 0.6561, z: -0.0263 },
  { x: -0.7454, y: 0.6561, z: 0.1181 },
  { x: -0.7092, y: 0.6561, z: 0.2581 },
  { x: -0.6469, y: 0.6561, z: 0.3887 },
  { x: -0.5609, y: 0.6561, z: 0.505 },
  { x: -0.4542, y: 0.6561, z: 0.6027 },
  { x: -0.3308, y: 0.6561, z: 0.6783 },
  { x: -0.1953, y: 0.6561, z: 0.729 },
  { x: -0.0526, y: 0.6561, z: 0.7529 },
  { x: 0.092, y: 0.6561, z: 0.7491 },
  { x: 0.2332, y: 0.6561, z: 0.7178 },
  { x: 0.3659, y: 0.6561, z: 0.6601 },
  { x: 0.4851, y: 0.6561, z: 0.5781 },
  { x: 0.5865, y: 0.6561, z: 0.475 },
  { x: 0.6664, y: 0.6561, z: 0.3543 },
  { x: 0.7217, y: 0.6561, z: 0.2207 },
  { x: 0.7506, y: 0.6561, z: 0.0789 },
  { x: 0.7518, y: 0.6561, z: -0.0658 },
  { x: 0.7255, y: 0.6561, z: -0.208 },
  { x: 0.6725, y: 0.6561, z: -0.3426 },
  { x: 0.5947, y: 0.6561, z: -0.4646 },
  { x: 0.4951, y: 0.6561, z: -0.5696 },
  { x: 0.3774, y: 0.6561, z: -0.6536 },
  { x: 0.2457, y: 0.6561, z: -0.7136 },
  { x: 0.105, y: 0.6561, z: -0.7474 },
  { x: -0, y: 0.788, z: -0.6157 },
  { x: -0.1175, y: 0.788, z: -0.6044 },
  { x: -0.2306, y: 0.788, z: -0.5708 },
  { x: -0.3353, y: 0.788, z: -0.5163 },
  { x: -0.4277, y: 0.788, z: -0.4429 },
  { x: -0.5043, y: 0.788, z: -0.3531 },
  { x: -0.5624, y: 0.788, z: -0.2504 },
  { x: -0.5999, y: 0.788, z: -0.1385 },
  { x: -0.6153, y: 0.788, z: -0.0215 },
  { x: -0.6081, y: 0.788, z: 0.0963 },
  { x: -0.5785, y: 0.788, z: 0.2106 },
  { x: -0.5277, y: 0.788, z: 0.3171 },
  { x: -0.4575, y: 0.788, z: 0.412 },
  { x: -0.3705, y: 0.788, z: 0.4917 },
  { x: -0.2699, y: 0.788, z: 0.5534 },
  { x: -0.1593, y: 0.788, z: 0.5947 },
  { x: -0.0429, y: 0.788, z: 0.6142 },
  { x: 0.075, y: 0.788, z: 0.6111 },
  { x: 0.1902, y: 0.788, z: 0.5855 },
  { x: 0.2985, y: 0.788, z: 0.5385 },
  { x: 0.3957, y: 0.788, z: 0.4716 },
  { x: 0.4785, y: 0.788, z: 0.3874 },
  { x: 0.5436, y: 0.788, z: 0.289 },
  { x: 0.5888, y: 0.788, z: 0.18 },
  { x: 0.6123, y: 0.788, z: 0.0644 },
  { x: 0.6133, y: 0.788, z: -0.0537 },
  { x: 0.5918, y: 0.788, z: -0.1697 },
  { x: 0.5486, y: 0.788, z: -0.2795 },
  { x: 0.4851, y: 0.788, z: -0.379 },
  { x: 0.4039, y: 0.788, z: -0.4646 },
  { x: 0.3078, y: 0.788, z: -0.5332 },
  { x: 0.2004, y: 0.788, z: -0.5821 },
  { x: 0.0857, y: 0.788, z: -0.6097 },
  { x: -0, y: 0.891, z: -0.454 },
  { x: -0.0866, y: 0.891, z: -0.4456 },
  { x: -0.1701, y: 0.891, z: -0.4209 },
  { x: -0.2473, y: 0.891, z: -0.3807 },
  { x: -0.3154, y: 0.891, z: -0.3266 },
  { x: -0.3719, y: 0.891, z: -0.2604 },
  { x: -0.4147, y: 0.891, z: -0.1847 },
  { x: -0.4424, y: 0.891, z: -0.1021 },
  { x: -0.4537, y: 0.891, z: -0.0158 },
  { x: -0.4484, y: 0.891, z: 0.071 },
  { x: -0.4266, y: 0.891, z: 0.1553 },
  { x: -0.3891, y: 0.891, z: 0.2338 },
  { x: -0.3374, y: 0.891, z: 0.3038 },
  { x: -0.2732, y: 0.891, z: 0.3626 },
  { x: -0.199, y: 0.891, z: 0.408 },
  { x: -0.1175, y: 0.891, z: 0.4385 },
  { x: -0.0317, y: 0.891, z: 0.4529 },
  { x: 0.0553, y: 0.891, z: 0.4506 },
  { x: 0.1403, y: 0.891, z: 0.4318 },
  { x: 0.2201, y: 0.891, z: 0.3971 },
  { x: 0.2918, y: 0.891, z: 0.3478 },
  { x: 0.3528, y: 0.891, z: 0.2857 },
  { x: 0.4008, y: 0.891, z: 0.2131 },
  { x: 0.4342, y: 0.891, z: 0.1327 },
  { x: 0.4515, y: 0.891, z: 0.0475 },
  { x: 0.4523, y: 0.891, z: -0.0396 },
  { x: 0.4364, y: 0.891, z: -0.1251 },
  { x: 0.4045, y: 0.891, z: -0.2061 },
  { x: 0.3577, y: 0.891, z: -0.2795 },
  { x: 0.2978, y: 0.891, z: -0.3426 },
  { x: 0.227, y: 0.891, z: -0.3932 },
  { x: 0.1478, y: 0.891, z: -0.4293 },
  { x: 0.0632, y: 0.891, z: -0.4496 },
  { x: -0, y: 0.9613, z: -0.2756 },
  { x: -0.0526, y: 0.9613, z: -0.2706 },
  { x: -0.1033, y: 0.9613, z: -0.2556 },
  { x: -0.1501, y: 0.9613, z: -0.2312 },
  { x: -0.1915, y: 0.9613, z: -0.1983 },
  { x: -0.2258, y: 0.9613, z: -0.1581 },
  { x: -0.2518, y: 0.9613, z: -0.1121 },
  { x: -0.2686, y: 0.9613, z: -0.062 },
  { x: -0.2755, y: 0.9613, z: -96e-4 },
  { x: -0.2722, y: 0.9613, z: 0.0431 },
  { x: -0.259, y: 0.9613, z: 0.0943 },
  { x: -0.2363, y: 0.9613, z: 0.142 },
  { x: -0.2048, y: 0.9613, z: 0.1844 },
  { x: -0.1659, y: 0.9613, z: 0.2201 },
  { x: -0.1208, y: 0.9613, z: 0.2477 },
  { x: -0.0713, y: 0.9613, z: 0.2662 },
  { x: -0.0192, y: 0.9613, z: 0.275 },
  { x: 0.0336, y: 0.9613, z: 0.2736 },
  { x: 0.0852, y: 0.9613, z: 0.2621 },
  { x: 0.1336, y: 0.9613, z: 0.2411 },
  { x: 0.1772, y: 0.9613, z: 0.2112 },
  { x: 0.2142, y: 0.9613, z: 0.1735 },
  { x: 0.2434, y: 0.9613, z: 0.1294 },
  { x: 0.2636, y: 0.9613, z: 0.0806 },
  { x: 0.2741, y: 0.9613, z: 0.0288 },
  { x: 0.2746, y: 0.9613, z: -0.024 },
  { x: 0.265, y: 0.9613, z: -0.076 },
  { x: 0.2456, y: 0.9613, z: -0.1251 },
  { x: 0.2172, y: 0.9613, z: -0.1697 },
  { x: 0.1808, y: 0.9613, z: -0.208 },
  { x: 0.1378, y: 0.9613, z: -0.2387 },
  { x: 0.0897, y: 0.9613, z: -0.2606 },
  { x: 0.0384, y: 0.9613, z: -0.273 }
];
const globePins = [
  { id: "serbia", label: "Serbia", sub: "International circuit", x: 0.2566, y: 0.6947, z: 0.672, side: "left", dy: -14 },
  { id: "kazakhstan", label: "Kazakhstan", sub: "World-level podiums", x: 0.6155, y: 0.7431, z: 0.2625, side: "right", dy: -18 },
  { id: "uzbekistan", label: "Uzbekistan", sub: "IMGC · gold", x: 0.676, y: 0.6626, z: 0.3224, side: "left", dy: 18 },
  { id: "india", label: "India", sub: "WKC World Championship", x: 0.9098, y: 0.3746, z: 0.1785, side: "right", dy: 16 }
];
const ease = [0.16, 1, 0.3, 1];
const Pillars = memo(
  ({ items = homePillars }) => /* @__PURE__ */ jsx("div", { className: "pillars", children: items.map((pillar, index) => /* @__PURE__ */ jsxs(
    motion.article,
    {
      className: "pillar",
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.25 },
      transition: { duration: 0.65, delay: index * 0.09, ease },
      children: [
        /* @__PURE__ */ jsx("span", { className: "pillar__num", children: pillar.no }),
        /* @__PURE__ */ jsx("span", { className: "pillar__icon", children: /* @__PURE__ */ jsx("img", { src: pillar.icon, alt: "", "aria-hidden": "true" }) }),
        /* @__PURE__ */ jsx("h3", { children: pillar.title }),
        /* @__PURE__ */ jsx("p", { children: pillar.text })
      ]
    },
    pillar.no
  )) })
);
Pillars.displayName = "Pillars";
const Timeline = memo(
  ({ items = aboutTimeline }) => /* @__PURE__ */ jsx("div", { className: "timeline", children: items.map((entry, index) => /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "timeline__item",
      initial: { opacity: 0, x: -22 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true, amount: 0.4 },
      transition: { duration: 0.6, delay: index * 0.07, ease },
      children: [
        /* @__PURE__ */ jsx("div", { className: "timeline__year", children: entry.year }),
        /* @__PURE__ */ jsx("h3", { children: entry.title }),
        /* @__PURE__ */ jsx("p", { children: entry.text })
      ]
    },
    `${entry.year}-${entry.title}`
  )) })
);
Timeline.displayName = "Timeline";
const Values = memo(
  ({ items = aboutValues }) => /* @__PURE__ */ jsx("div", { className: "values", children: items.map((value, index) => /* @__PURE__ */ jsxs(
    motion.article,
    {
      className: "value",
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.3 },
      transition: { duration: 0.65, delay: index * 0.1, ease },
      children: [
        /* @__PURE__ */ jsx("span", { className: "value__no", children: value.no }),
        /* @__PURE__ */ jsx("h3", { children: value.title }),
        /* @__PURE__ */ jsx("p", { children: value.text })
      ]
    },
    value.no
  )) })
);
Values.displayName = "Values";
const Branches = memo(
  ({ items = aboutBranches }) => /* @__PURE__ */ jsx("div", { className: "branches", children: items.map((branch, index) => /* @__PURE__ */ jsxs(
    motion.article,
    {
      className: `branch${branch.head ? " branch--head" : ""}`,
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.3 },
      transition: { duration: 0.65, delay: index * 0.08, ease },
      children: [
        /* @__PURE__ */ jsx("span", { className: "branch__no", children: String(index + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsx("h3", { children: branch.city }),
        /* @__PURE__ */ jsx("span", { className: "branch__place", children: branch.place }),
        /* @__PURE__ */ jsx("p", { children: branch.note }),
        branch.head && /* @__PURE__ */ jsx("span", { className: "branch__tag", children: "Head dojo" })
      ]
    },
    branch.city
  )) })
);
Branches.displayName = "Branches";
const International = memo(() => /* @__PURE__ */ jsxs("div", { className: "intl", children: [
  /* @__PURE__ */ jsxs("div", { className: "intl__head", children: [
    /* @__PURE__ */ jsx("span", { className: "intl__label", children: "International podiums" }),
    /* @__PURE__ */ jsx("h3", { className: "intl__title", children: "Kazakhstan, Uzbekistan, Serbia and India" }),
    /* @__PURE__ */ jsx("p", { className: "intl__text", children: "The competition squad has podiumed outside India as well as at home — three golds at the IMGC World Championship in Uzbekistan, world-level finishes in Kazakhstan, and selection for the senior squad on the Serbian international circuit." })
  ] }),
  /* @__PURE__ */ jsx(Globe, {})
] }));
International.displayName = "International";
const BranchMap = memo(() => /* @__PURE__ */ jsxs("div", { className: "panel", children: [
  /* @__PURE__ */ jsxs("div", { className: "panel__head", children: [
    /* @__PURE__ */ jsx("span", { className: "panel__label", children: "Branch map" }),
    /* @__PURE__ */ jsx("span", { className: "panel__hint", children: "Move your cursor over the map" })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "panel__art", children: /* @__PURE__ */ jsx(IndiaMap3D, {}) }),
  /* @__PURE__ */ jsx("ul", { className: "panel__legend", children: indiaPins.map((pin) => /* @__PURE__ */ jsxs("li", { children: [
    /* @__PURE__ */ jsx("i", { className: pin.head ? "is-head" : void 0, "aria-hidden": "true" }),
    /* @__PURE__ */ jsx("b", { children: pin.label }),
    /* @__PURE__ */ jsx("span", { children: pin.legend ?? pin.place })
  ] }, pin.id)) })
] }));
BranchMap.displayName = "BranchMap";
const Globe = memo(() => {
  const canvasRef = useRef(null);
  const stageRef = useRef(null);
  const pausedRef = useRef(false);
  const angleRef = useRef(-40);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const SIZE = 460;
    const R = 172;
    const F = 900;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    canvas.style.width = `${SIZE}px`;
    canvas.style.height = `${SIZE}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const cx = SIZE / 2;
    const cy = SIZE / 2;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last = performance.now();
    const project = (x, y, z, cos, sin) => {
      const rx = x * cos + z * sin;
      const rz = -x * sin + z * cos;
      const zw = rz * R;
      const scale = F / (F - zw);
      return {
        x: cx + rx * R * scale,
        y: cy - y * R * scale,
        z: zw,
        scale
      };
    };
    const draw = (now) => {
      const dt = Math.min(now - last, 64) / 1e3;
      last = now;
      if (!reduce && !pausedRef.current) angleRef.current += dt * 9;
      const a = angleRef.current * Math.PI / 180;
      const cos = Math.cos(a);
      const sin = Math.sin(a);
      ctx.clearRect(0, 0, SIZE, SIZE);
      ctx.fillStyle = "rgba(255,255,255,.08)";
      for (const dot of globeShell) {
        const p = project(dot.x, dot.y, dot.z, cos, sin);
        if (p.z < 0) continue;
        const r = 1.3 * p.scale;
        ctx.fillRect(p.x - r, p.y - r, r * 2, r * 2);
      }
      for (const dot of globeDots) {
        const p = project(dot.x, dot.y, dot.z, cos, sin);
        if (p.z < -6) continue;
        const edge = Math.max(0, Math.min(1, (p.z + 18) / 46));
        const alpha = 0.3 + 0.7 * edge;
        const r = (dot.hot ? 2.4 : 1.7) * p.scale;
        if (dot.hot) {
          ctx.fillStyle = `rgba(255,42,28,${alpha})`;
        } else {
          ctx.fillStyle = `rgba(255,255,255,${alpha * 0.92})`;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
        if (dot.hot) {
          ctx.fillStyle = `rgba(255,42,28,${alpha * 0.16})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 2.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      for (const pin of globePins) {
        const p = project(pin.x, pin.y, pin.z, cos, sin);
        if (p.z < 4) continue;
        const r = 6 * p.scale;
        const isHead = pin.id === "india";
        ctx.beginPath();
        ctx.arc(p.x, p.y, r + 5, 0, Math.PI * 2);
        ctx.fillStyle = isHead ? "rgba(225,6,0,.22)" : "rgba(225,6,0,.16)";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = isHead ? "#ff3b2f" : "#e10600";
        ctx.fill();
        ctx.lineWidth = 1.6;
        ctx.strokeStyle = "#fff";
        ctx.stroke();
        const text = pin.label.toUpperCase();
        ctx.font = "700 11px Lato, system-ui, sans-serif";
        const tw = ctx.measureText(text).width;
        const padX = 8;
        const boxW = tw + padX * 2;
        const boxH = 21;
        let bx = p.x + 13;
        if (pin.side === "left") bx = p.x - 13 - boxW;
        let by = p.y - boxH / 2 + pin.dy;
        bx = Math.max(4, Math.min(SIZE - boxW - 4, bx));
        by = Math.max(4, Math.min(SIZE - boxH - 4, by));
        ctx.fillStyle = "rgba(8,8,8,.92)";
        ctx.strokeStyle = "rgba(225,6,0,.55)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.rect(bx, by, boxW, boxH);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#fff";
        ctx.textBaseline = "middle";
        ctx.fillText(text, bx + padX, by + boxH / 2 + 0.5);
      }
      const shade = ctx.createRadialGradient(
        cx - R * 0.32,
        cy - R * 0.34,
        R * 0.1,
        cx,
        cy,
        R * 1.06
      );
      shade.addColorStop(0, "rgba(255,255,255,.05)");
      shade.addColorStop(0.55, "rgba(0,0,0,0)");
      shade.addColorStop(0.86, "rgba(0,0,0,.42)");
      shade.addColorStop(1, "rgba(0,0,0,.7)");
      ctx.fillStyle = shade;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.02, 0, Math.PI * 2);
      ctx.fill();
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    const onEnter = () => {
      pausedRef.current = true;
    };
    const onLeave = () => {
      pausedRef.current = false;
    };
    const stage = stageRef.current;
    stage?.addEventListener("mouseenter", onEnter);
    stage?.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      stage?.removeEventListener("mouseenter", onEnter);
      stage?.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "globe", children: [
    /* @__PURE__ */ jsx("div", { className: "globe__stage", ref: stageRef, children: /* @__PURE__ */ jsx(
      "canvas",
      {
        ref: canvasRef,
        className: "globe__canvas",
        role: "img",
        "aria-label": "Rotating globe marking the countries where the dojo has podiumed — Kazakhstan, Uzbekistan, Serbia and India"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "globe__caption", children: /* @__PURE__ */ jsx("ul", { className: "globe__legend", children: globePins.map((pin) => /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx("i", { "aria-hidden": "true" }),
      /* @__PURE__ */ jsx("b", { children: pin.label }),
      /* @__PURE__ */ jsx("span", { children: pin.sub })
    ] }, pin.id)) }) })
  ] });
});
Globe.displayName = "Globe";
Globe.displayName = "Globe";
const BranchAddresses = memo(
  ({ items = aboutBranches }) => /* @__PURE__ */ jsx("ul", { className: "addr-list", children: items.map((branch, index) => /* @__PURE__ */ jsxs(
    motion.li,
    {
      className: `addr${branch.head ? " addr--head" : ""}`,
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.3 },
      transition: { duration: 0.6, delay: index * 0.07, ease },
      children: [
        /* @__PURE__ */ jsx("span", { className: "addr__city", children: branch.city }),
        /* @__PURE__ */ jsx("span", { className: "addr__place", children: branch.head ? dojo.address : branch.place }),
        branch.head && /* @__PURE__ */ jsx("span", { className: "addr__tag", children: "Head dojo" })
      ]
    },
    branch.city
  )) })
);
BranchAddresses.displayName = "BranchAddresses";
const BeltGraphic = memo(({ img }) => /* @__PURE__ */ jsxs("picture", { children: [
  /* @__PURE__ */ jsx("source", { srcSet: `${img}.webp`, type: "image/webp" }),
  /* @__PURE__ */ jsx(
    "img",
    {
      className: "belt",
      src: `${img}.png`,
      alt: "",
      "aria-hidden": "true",
      width: 236,
      height: 424,
      loading: "lazy",
      decoding: "async"
    }
  )
] }));
BeltGraphic.displayName = "BeltGraphic";
const BeltLadder = memo(
  ({ items = beltLadder }) => /* @__PURE__ */ jsx("div", { className: "ladder", children: items.map((step, index) => /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "ladder__step",
      initial: { opacity: 0, y: 26 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.3 },
      transition: { duration: 0.55, delay: index * 0.07, ease },
      children: [
        /* @__PURE__ */ jsx("div", { className: "ladder__bar", "aria-hidden": "true", children: /* @__PURE__ */ jsx(BeltGraphic, { img: step.img }) }),
        /* @__PURE__ */ jsx("div", { className: "ladder__label", children: step.name }),
        /* @__PURE__ */ jsx("div", { className: "ladder__kyu", children: step.kyu }),
        /* @__PURE__ */ jsx("div", { className: "ladder__yrs", children: step.years })
      ]
    },
    step.name
  )) })
);
BeltLadder.displayName = "BeltLadder";
const Timetable = memo(
  ({ items = homeWeek }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "timetable-wrap", children: /* @__PURE__ */ jsxs("table", { className: "timetable", children: [
      /* @__PURE__ */ jsx("caption", { children: "Weekly class schedule · Yelahanka dojo hall" }),
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", children: "Day" }),
        /* @__PURE__ */ jsx("th", { scope: "col", children: "Session" }),
        /* @__PURE__ */ jsx("th", { scope: "col", children: "Time" }),
        /* @__PURE__ */ jsx("th", { scope: "col", children: "Level" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: items.map(
        (day) => day.sessions.map((session, sIndex) => /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { children: sIndex === 0 ? day.day : "" }),
          /* @__PURE__ */ jsx("td", { children: session.name }),
          /* @__PURE__ */ jsx("td", { children: session.time }),
          /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsx("span", { className: "tag", children: session.tag }) })
        ] }, `${day.day}-${session.time}`))
      ) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "timetable-cards", children: [
      /* @__PURE__ */ jsx("p", { className: "timetable-cards__cap", children: "Weekly class schedule · Yelahanka dojo hall" }),
      items.map((day) => /* @__PURE__ */ jsxs("div", { className: "timetable-card", children: [
        /* @__PURE__ */ jsx("h3", { className: "timetable-card__day", children: day.day }),
        /* @__PURE__ */ jsx("ul", { className: "timetable-card__list", children: day.sessions.map((session) => /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsxs("div", { className: "timetable-card__row", children: [
            /* @__PURE__ */ jsx("b", { children: session.name }),
            /* @__PURE__ */ jsx("span", { className: "tag", children: session.tag })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "timetable-card__time", children: session.time })
        ] }, `${day.day}-${session.time}`)) })
      ] }, day.day))
    ] })
  ] })
);
Timetable.displayName = "Timetable";
const Chapters = memo(
  ({ items = programChapters }) => /* @__PURE__ */ jsx("div", { className: "chapters", children: items.map((chapter, index) => /* @__PURE__ */ jsxs(
    motion.article,
    {
      className: "chapter",
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.65, delay: index * 0.09, ease },
      children: [
        /* @__PURE__ */ jsx("span", { className: "chapter__no", children: chapter.no }),
        /* @__PURE__ */ jsx("h3", { children: chapter.title }),
        /* @__PURE__ */ jsx("p", { children: chapter.lead }),
        /* @__PURE__ */ jsx("ul", { className: "chapter__points", children: chapter.points.map((point) => /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-check" }),
          /* @__PURE__ */ jsx("span", { children: point })
        ] }, point)) })
      ]
    },
    chapter.no
  )) })
);
Chapters.displayName = "Chapters";
const Facts = memo(
  ({ items = aboutFacts }) => /* @__PURE__ */ jsx("div", { className: "facts", children: items.map((fact) => /* @__PURE__ */ jsxs("div", { className: "facts__row", children: [
    /* @__PURE__ */ jsx("span", { className: "facts__label", children: fact.label }),
    /* @__PURE__ */ jsx("span", { className: "facts__value", children: fact.value })
  ] }, fact.label)) })
);
Facts.displayName = "Facts";
const defaultPlans = [
  {
    name: "Basic",
    note: "Two classes a week, for students starting out.",
    price: "1,200",
    period: "per month",
    features: [
      { text: "Two karate-do classes each week" },
      { text: "Kihon and kata syllabus access" },
      { text: "Dojo kit and belt on joining" },
      { text: "Competition squad entry", off: true },
      { text: "Personal grading review", off: true }
    ]
  },
  {
    name: "Standard",
    note: "The full graded track, at the pace most students need.",
    price: "1,600",
    period: "per month",
    featured: true,
    features: [
      { text: "Unlimited karate-do classes" },
      { text: "Full graded syllabus to black belt" },
      { text: "Quarterly belt examinations included" },
      { text: "Little Warriors companion class" },
      { text: "Personal grading review" }
    ]
  },
  {
    name: "Premium",
    note: "Competition preparation and one-to-one correction.",
    price: "2,000",
    period: "per month",
    features: [
      { text: "Everything in the Standard track" },
      { text: "Twice-weekly squad sessions" },
      { text: "Tournament entry and travel support" },
      { text: "Video technique analysis" },
      { text: "One-to-one instructor session monthly" }
    ]
  }
];
const Plans = memo(
  ({ items = defaultPlans }) => /* @__PURE__ */ jsx("div", { className: "plans", children: items.map((plan, index) => /* @__PURE__ */ jsxs(
    motion.article,
    {
      className: `plan ${plan.featured ? "plan--feature" : ""}`,
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.65, delay: index * 0.1, ease },
      children: [
        plan.featured && /* @__PURE__ */ jsx("span", { className: "plan__flag", children: "Most chosen" }),
        /* @__PURE__ */ jsx("div", { className: "plan__name", children: plan.name }),
        /* @__PURE__ */ jsx("p", { className: "plan__note", children: plan.note }),
        /* @__PURE__ */ jsxs("div", { className: "plan__price", children: [
          /* @__PURE__ */ jsx("span", { children: "₹" }),
          /* @__PURE__ */ jsx("b", { children: plan.price }),
          /* @__PURE__ */ jsx("span", { children: plan.period })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "plan__features", children: plan.features.map((feature) => /* @__PURE__ */ jsxs("li", { className: feature.off ? "is-off" : "", children: [
          /* @__PURE__ */ jsx(
            "i",
            {
              className: feature.off ? "fa-solid fa-minus" : "fa-solid fa-check"
            }
          ),
          /* @__PURE__ */ jsx("span", { children: feature.text })
        ] }, feature.text)) }),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-solid", children: [
          "Join ",
          plan.name,
          " ",
          /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
        ] })
      ]
    },
    plan.name
  )) })
);
Plans.displayName = "Plans";
const Voices = memo(
  ({ items = homeVoices }) => /* @__PURE__ */ jsx("div", { className: "quotes", children: items.map((voice, index) => /* @__PURE__ */ jsxs(
    motion.figure,
    {
      className: "quote",
      initial: { opacity: 0, y: 28 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.25 },
      transition: { duration: 0.65, delay: index * 0.1, ease },
      children: [
        /* @__PURE__ */ jsx("span", { className: "quote__mark", children: "“" }),
        /* @__PURE__ */ jsx("blockquote", { className: "quote__text", children: voice.text }),
        /* @__PURE__ */ jsxs("figcaption", { className: "quote__who", children: [
          /* @__PURE__ */ jsx("img", { src: voice.img, alt: "", "aria-hidden": "true", loading: "lazy" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("b", { children: voice.name }),
            /* @__PURE__ */ jsx("span", { children: voice.role })
          ] })
        ] })
      ]
    },
    voice.name
  )) })
);
Voices.displayName = "Voices";
const Numbers = memo(
  ({ items = homeNumbers }) => /* @__PURE__ */ jsx("div", { className: "sec--ink sec sec--grid", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "stats", children: items.map((stat, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "stat",
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.4 },
        transition: { duration: 0.6, delay: index * 0.08, ease },
        children: [
          /* @__PURE__ */ jsx("div", { className: "stat__value", children: stat.value }),
          /* @__PURE__ */ jsx("div", { className: "stat__label", children: stat.label })
        ]
      },
      stat.label
    )) }),
    /* @__PURE__ */ jsx("div", { className: "marquee", "aria-hidden": "true", children: /* @__PURE__ */ jsx("div", { className: "marquee__track", children: [...homeMarquee, ...homeMarquee].map((word, index) => /* @__PURE__ */ jsxs("span", { children: [
      /* @__PURE__ */ jsx("b", { children: "◆" }),
      " ",
      word
    ] }, index)) }) })
  ] }) })
);
Numbers.displayName = "Numbers";
const PhotoStrip = memo(
  ({
    items = homePhotos,
    kicker = "In pictures",
    title = /* @__PURE__ */ jsxs(Fragment, { children: [
      "Where the training ",
      /* @__PURE__ */ jsx("em", { children: "takes you" })
    ] }),
    lede: lede2 = "Podiums, officials' tables and long days on the road — championship photographs from Bengaluru to Central Asia.",
    label = "Championship photographs",
    direction = 1
  }) => {
    const marqueeRef = useRef(null);
    const pendingRef = useRef(0);
    const resumeAtRef = useRef(0);
    const holdRef = useRef(false);
    useEffect(() => {
      const el = marqueeRef.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const speed = 65;
      let raf = 0;
      let last = performance.now();
      const tick = (now) => {
        const dt = Math.min(now - last, 64) / 1e3;
        last = now;
        const half = el.scrollWidth / 2;
        const setScroll = (pos) => {
          if (half > 0) {
            while (pos > half) pos -= half;
            while (pos < 0) pos += half;
          }
          el.scrollLeft = pos;
        };
        const pending = pendingRef.current;
        if (pending !== 0) {
          let step = pending * Math.min(1, dt * 9);
          if (Math.abs(step) > Math.abs(pending)) step = pending;
          setScroll(el.scrollLeft + step);
          pendingRef.current = pending - step;
          if (Math.abs(pendingRef.current) < 1) {
            pendingRef.current = 0;
            resumeAtRef.current = now + 700;
          }
        } else if (!holdRef.current && now >= resumeAtRef.current) {
          setScroll(el.scrollLeft + speed * dt * direction);
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, [direction]);
    const nudge = (dir) => {
      const el = marqueeRef.current;
      if (!el) return;
      const img = el.querySelector(".photo-strip__img");
      const step = (img ? img.offsetWidth : Math.round(el.clientWidth * 0.4)) + 16;
      const half = el.scrollWidth / 2;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        let pos = el.scrollLeft + dir * step;
        if (half > 0) {
          while (pos > half) pos -= half;
          while (pos < 0) pos += half;
        }
        el.scrollLeft = pos;
        return;
      }
      pendingRef.current += dir * step;
    };
    return /* @__PURE__ */ jsxs(
      "section",
      {
        className: "sec sec--tight photo-strip",
        "aria-label": label,
        onMouseEnter: () => holdRef.current = true,
        onMouseLeave: () => {
          holdRef.current = false;
          resumeAtRef.current = performance.now() + 300;
        },
        onTouchStart: () => holdRef.current = true,
        onTouchEnd: () => {
          holdRef.current = false;
          resumeAtRef.current = performance.now() + 1500;
        },
        onTouchCancel: () => {
          holdRef.current = false;
          resumeAtRef.current = performance.now() + 1500;
        },
        children: [
          /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx(SecHead, { kicker, title, lede: lede2 }) }),
          /* @__PURE__ */ jsxs("div", { className: "photo-strip__frame", children: [
            /* @__PURE__ */ jsx("div", { className: "photo-strip__marquee", ref: marqueeRef, children: /* @__PURE__ */ jsx("div", { className: "photo-strip__track", children: [...items, ...items].map((photo, index) => /* @__PURE__ */ jsx(
              "img",
              {
                className: "photo-strip__img",
                src: photo.src,
                alt: index < items.length ? photo.alt : "",
                width: photo.w,
                height: photo.h,
                loading: "lazy",
                draggable: false
              },
              `${photo.src}-${index}`
            )) }) }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "photo-strip__btn photo-strip__btn--prev",
                "aria-label": "Show previous photos",
                onClick: () => nudge(-direction),
                children: /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-left", "aria-hidden": "true" })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "photo-strip__btn photo-strip__btn--next",
                "aria-label": "Show next photos",
                onClick: () => nudge(direction),
                children: /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right", "aria-hidden": "true" })
              }
            )
          ] })
        ]
      }
    );
  }
);
PhotoStrip.displayName = "PhotoStrip";
const Instructors = memo(
  ({ items = homeInstructors }) => /* @__PURE__ */ jsx("div", { className: "instructors", children: items.map((member, index) => /* @__PURE__ */ jsxs(
    motion.article,
    {
      className: "instructor",
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.65, delay: index * 0.09, ease },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "instructor__img", children: [
          /* @__PURE__ */ jsx("span", { className: "instructor__idx", children: String(index + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsx("img", { src: member.img, alt: member.name, loading: "lazy" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "instructor__cap", children: [
          /* @__PURE__ */ jsx("h3", { children: member.name }),
          /* @__PURE__ */ jsx("p", { children: member.title }),
          /* @__PURE__ */ jsx("span", { children: member.role })
        ] })
      ]
    },
    member.name
  )) })
);
Instructors.displayName = "Instructors";
const Journal = memo(() => /* @__PURE__ */ jsx("div", { className: "ledger ledger--journal", children: homeJournal.map((post) => /* @__PURE__ */ jsxs(
  Link,
  {
    to: `/blog-details${post.slug ? `?post=${post.slug}` : ""}`,
    className: "ledger__row ledger__row--journal",
    children: [
      /* @__PURE__ */ jsx("span", { className: "ledger__num", children: post.date }),
      /* @__PURE__ */ jsx("h3", { children: post.title }),
      /* @__PURE__ */ jsx("p", { children: post.desc }),
      /* @__PURE__ */ jsx("span", { className: "ledger__meta", children: post.author }),
      /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-up-right" })
    ]
  },
  post.title
)) }));
Journal.displayName = "Journal";
const EventLedger = memo(
  ({ items = eventLedger }) => /* @__PURE__ */ jsx("div", { className: "ledger", children: items.map((event) => /* @__PURE__ */ jsxs(Link, { to: "/event-details", className: "ledger__row", children: [
    /* @__PURE__ */ jsx("span", { className: "ledger__num", children: event.no }),
    /* @__PURE__ */ jsx("h3", { children: event.title }),
    /* @__PURE__ */ jsx("p", { children: event.date }),
    /* @__PURE__ */ jsx("span", { className: "ledger__meta", children: event.meta }),
    /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-up-right" })
  ] }, event.no)) })
);
EventLedger.displayName = "EventLedger";
const Chambers = memo(
  ({ items = eventChambers }) => /* @__PURE__ */ jsx("div", { className: "chambers", children: items.map((chamber, index) => /* @__PURE__ */ jsxs(
    motion.figure,
    {
      className: "chamber",
      initial: { opacity: 0, y: 26 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.6, delay: index * 0.08, ease },
      children: [
        /* @__PURE__ */ jsx("img", { src: chamber.img, alt: chamber.name, loading: "lazy" }),
        /* @__PURE__ */ jsxs("figcaption", { className: "chamber__cap", children: [
          /* @__PURE__ */ jsx("b", { children: chamber.name }),
          /* @__PURE__ */ jsx("span", { children: chamber.note })
        ] })
      ]
    },
    chamber.name
  )) })
);
Chambers.displayName = "Chambers";
const SessionCards = memo(
  ({ items = eventSessions }) => /* @__PURE__ */ jsx("div", { className: "sessions", children: items.map((session, index) => /* @__PURE__ */ jsxs(
    motion.article,
    {
      className: "session",
      initial: { opacity: 0, y: 28 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.6, delay: index * 0.08, ease },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "session__media", children: [
          /* @__PURE__ */ jsx("img", { src: session.img, alt: session.title, loading: "lazy" }),
          /* @__PURE__ */ jsx("span", { className: "session__tag", children: session.tag })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "session__body", children: [
          /* @__PURE__ */ jsx("span", { className: "session__meta", children: session.meta }),
          /* @__PURE__ */ jsx("h3", { children: session.title }),
          /* @__PURE__ */ jsx("p", { children: session.text })
        ] })
      ]
    },
    session.title
  )) })
);
SessionCards.displayName = "SessionCards";
const Posts = memo(() => {
  const [page, setPage] = useState(0);
  const sectionRef = useRef(null);
  const perPage = 3;
  const totalPages = Math.ceil(blogPosts.length / perPage);
  useEffect(() => {
    const offset = sectionRef.current?.offsetTop ?? 0;
    window.scrollTo({ top: Math.max(offset - 90, 0), behavior: "smooth" });
  }, [page]);
  const visible = blogPosts.slice(page * perPage, page * perPage + perPage);
  return /* @__PURE__ */ jsx("section", { className: "sec sec--tight", ref: sectionRef, children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "journal__grid", children: visible.map((post, index) => /* @__PURE__ */ jsxs(
      motion.article,
      {
        className: "post",
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, delay: index * 0.1, ease },
        children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: `/blog-details${post.slug ? `?post=${post.slug}` : ""}`,
              className: "post__img",
              children: /* @__PURE__ */ jsx("img", { src: post.img, alt: post.title, loading: "lazy" })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "post__meta", children: [
            /* @__PURE__ */ jsx("span", { children: post.date }),
            /* @__PURE__ */ jsx("span", { children: post.author })
          ] }),
          /* @__PURE__ */ jsx("h3", { children: /* @__PURE__ */ jsx(Link, { to: `/blog-details${post.slug ? `?post=${post.slug}` : ""}`, children: post.title }) }),
          /* @__PURE__ */ jsx("p", { children: post.desc }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: `/blog-details${post.slug ? `?post=${post.slug}` : ""}`,
              className: "arrow-link",
              children: [
                "Read ",
                /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
              ]
            }
          )
        ]
      }
    )) }),
    totalPages > 1 && /* @__PURE__ */ jsxs("nav", { className: "mart-pagination mt-5", "aria-label": "Blog pagination", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          "aria-label": "Previous page",
          disabled: page === 0,
          onClick: () => setPage((p) => Math.max(p - 1, 0)),
          children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-left" })
        }
      ),
      Array.from({ length: totalPages }).map((_, i) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: i === page ? "current" : "",
          "aria-current": i === page ? "page" : void 0,
          onClick: () => setPage(i),
          children: i + 1
        },
        i
      )),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          "aria-label": "Next page",
          disabled: page === totalPages - 1,
          onClick: () => setPage((p) => Math.min(p + 1, totalPages - 1)),
          children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right" })
        }
      )
    ] })
  ] }) });
});
Posts.displayName = "Posts";
const Mosaic = memo(() => {
  const [active, setActive] = useState(null);
  const closeRef = useRef(null);
  const triggerRef = useRef(null);
  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowLeft")
        setActive(
          (i) => i === null ? i : (i - 1 + galleryItems.length) % galleryItems.length
        );
      if (e.key === "ArrowRight")
        setActive((i) => i === null ? i : (i + 1) % galleryItems.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    };
  }, [active]);
  const open = (index, trigger) => {
    triggerRef.current = trigger;
    setActive(index);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "mosaic", children: galleryItems.map((item, index) => /* @__PURE__ */ jsxs(
      motion.figure,
      {
        initial: { opacity: 0, scale: 0.96 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.6, delay: index % 4 * 0.07, ease },
        role: "button",
        tabIndex: 0,
        onClick: (e) => open(index, e.currentTarget),
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            open(index, e.currentTarget);
          }
        },
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: item.img,
              alt: item.caption,
              loading: "lazy",
              style: item.pos ? { objectPosition: item.pos } : void 0
            }
          ),
          /* @__PURE__ */ jsx("figcaption", { children: item.caption })
        ]
      },
      item.img
    )) }),
    active !== null && /* @__PURE__ */ jsxs(
      "div",
      {
        className: "lb",
        onClick: () => setActive(null),
        role: "dialog",
        "aria-modal": "true",
        "aria-label": galleryItems[active].caption,
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              ref: closeRef,
              className: "lb__btn lb__close",
              onClick: () => setActive(null),
              "aria-label": "Close",
              children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-xmark" })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "lb__btn lb__prev",
              onClick: (e) => {
                e.stopPropagation();
                setActive(
                  (active - 1 + galleryItems.length) % galleryItems.length
                );
              },
              "aria-label": "Previous photo",
              children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-chevron-left" })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "lb__btn lb__next",
              onClick: (e) => {
                e.stopPropagation();
                setActive((active + 1) % galleryItems.length);
              },
              "aria-label": "Next photo",
              children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-chevron-right" })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "lb__frame", onClick: (e) => e.stopPropagation(), children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: galleryItems[active].img,
                alt: galleryItems[active].caption
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "lb__cap", children: galleryItems[active].caption })
          ] })
        ]
      }
    )
  ] });
});
Mosaic.displayName = "Mosaic";
const Inquiry = memo(() => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [waUrl, setWaUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const age = String(data.get("age") ?? "").trim();
    const interest = String(data.get("interest") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !phone) {
      setSent(false);
      setError(
        "Please add your name and phone number so the dojo can call you back."
      );
      return;
    }
    const body = [
      "New enquiry from the Okinawa Gojukan website",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : "",
      age ? `Age of student: ${age}` : "",
      interest ? `Interested in: ${interest}` : "",
      message ? `Message: ${message}` : ""
    ].filter(Boolean).join("\n");
    const url = `${dojo.whatsapp}?text=${encodeURIComponent(body)}`;
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) window.location.href = url;
    setError("");
    setWaUrl(url);
    setSent(true);
  };
  return /* @__PURE__ */ jsxs("div", { className: "inquiry", children: [
    /* @__PURE__ */ jsxs("aside", { className: "inquiry__aside", children: [
      /* @__PURE__ */ jsx("h3", { children: "Reach the dojo" }),
      contactInfo.map((item) => /* @__PURE__ */ jsxs("div", { className: "info-row", children: [
        /* @__PURE__ */ jsx("span", { className: "info-row__ico", children: /* @__PURE__ */ jsx("i", { className: item.icon }) }),
        /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx("b", { children: item.label }),
          item.href ? /* @__PURE__ */ jsx(
            "a",
            {
              href: item.href,
              target: item.href.startsWith("http") ? "_blank" : void 0,
              rel: item.href.startsWith("http") ? "noreferrer" : void 0,
              children: item.value
            }
          ) : /* @__PURE__ */ jsx("span", { children: item.value })
        ] })
      ] }, item.label)),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx("b", { className: "d-block small text-uppercase fw-bold opacity-50 mb-2", children: "Opening hours" }),
        contactHours.map((row) => /* @__PURE__ */ jsx("div", { className: "info-row", children: /* @__PURE__ */ jsxs("span", { children: [
          /* @__PURE__ */ jsx("b", { children: row.label }),
          /* @__PURE__ */ jsx("span", { children: row.value })
        ] }) }, row.label))
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "inquiry__form", children: [
      /* @__PURE__ */ jsxs("div", { className: "sec-head mb-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "sec-head__bar", children: [
          /* @__PURE__ */ jsx("span", { className: "sec-head__index", children: "FORM" }),
          /* @__PURE__ */ jsx("span", { className: "sec-head__kicker", children: "Enquiry" })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "sec-head__title", children: "Book a free trial class" })
      ] }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          noValidate: true,
          children: [
            /* @__PURE__ */ jsxs("div", { className: "form-grid", children: [
              /* @__PURE__ */ jsxs("div", { className: "field", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "inq-name", children: "Your name" }),
                /* @__PURE__ */ jsx("input", { id: "inq-name", name: "name", type: "text", required: true })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "field", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "inq-phone", children: "Phone number" }),
                /* @__PURE__ */ jsx("input", { id: "inq-phone", name: "phone", type: "tel", required: true })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "field", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "inq-email", children: "Email address (optional)" }),
                /* @__PURE__ */ jsx("input", { id: "inq-email", name: "email", type: "email" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "field", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "inq-age", children: "Age of the student" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: "inq-age",
                    name: "age",
                    type: "number",
                    min: 4,
                    max: 70,
                    placeholder: "e.g. 12"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "field field--full", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "inq-interest", children: "I am interested in" }),
                /* @__PURE__ */ jsxs("select", { id: "inq-interest", name: "interest", defaultValue: "", children: [
                  /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Select a track" }),
                  /* @__PURE__ */ jsx("option", { children: "Foundation track for beginners" }),
                  /* @__PURE__ */ jsx("option", { children: "Graded karate-do syllabus" }),
                  /* @__PURE__ */ jsx("option", { children: "Little Warriors (ages 5-11)" }),
                  /* @__PURE__ */ jsx("option", { children: "Competition squad" }),
                  /* @__PURE__ */ jsx("option", { children: "Kobudo / weapons training" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "field field--full", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "inq-message", children: "Message" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    id: "inq-message",
                    name: "message",
                    rows: 5,
                    placeholder: "Tell us about the student and what you are looking for."
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("button", { type: "submit", className: "btn-solid mt-4", children: [
              "Send on WhatsApp ",
              /* @__PURE__ */ jsx("i", { className: "ph ph-whatsapp-logo" })
            ] }),
            sent && /* @__PURE__ */ jsxs("div", { className: "form-success mt-3", children: [
              /* @__PURE__ */ jsx("i", { className: "fa-solid fa-circle-check" }),
              /* @__PURE__ */ jsxs("span", { children: [
                "WhatsApp is open with your details filled in. Press send and it lands in the dojo inbox.",
                waUrl && /* @__PURE__ */ jsx(
                  "a",
                  {
                    className: "d-inline-block mt-2",
                    href: waUrl,
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Open WhatsApp again"
                  }
                )
              ] })
            ] }),
            error && /* @__PURE__ */ jsxs("p", { className: "form-error mt-3", children: [
              /* @__PURE__ */ jsx("i", { className: "fa-solid fa-circle-exclamation" }),
              " ",
              error
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "form-note", children: [
              "Your message goes straight to the dojo WhatsApp inbox and is read by an instructor. Prefer to talk? Call ",
              dojo.phone,
              ", or email",
              " ",
              /* @__PURE__ */ jsx("a", { href: `mailto:${dojo.email}`, children: dojo.email }),
              ". Trial classes are free for every new student."
            ] })
          ]
        }
      )
    ] })
  ] });
});
Inquiry.displayName = "Inquiry";
const Home = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header$1, {}),
    /* @__PURE__ */ jsxs("main", { id: "main", children: [
      /* @__PURE__ */ jsx(Hero3D$1, {}),
      /* @__PURE__ */ jsx(PhotoStrip, {}),
      /* @__PURE__ */ jsx(
        PhotoStrip,
        {
          items: homeAchievements,
          direction: -1,
          kicker: "Latest achievements",
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "What the last two seasons ",
            /* @__PURE__ */ jsx("em", { children: "brought back" })
          ] }),
          lede: "Gold at IMGC Uzbekistan, the WKC/FW Asian Karate Championship squad and the homecoming at the dojo — the podium photographs behind the medal count.",
          label: "Latest achievement photographs"
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "sec sec--grid", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "01",
            kicker: "The dojo",
            title: /* @__PURE__ */ jsxs(Fragment, { children: [
              "Okinawan karate-do,",
              /* @__PURE__ */ jsx("br", {}),
              "taught the hard way"
            ] }),
            lede: "We are a small school with a long memory. Every class follows the same discipline the founders learned in the services — start early, work honestly, finish the repetition.",
            action: /* @__PURE__ */ jsxs(Link, { to: "/about", className: "arrow-link", children: [
              "Our story ",
              /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          Split,
          {
            image: "assets/img/programs/1-dojo.jpg",
            alt: "Students training on the mat at the Okinawa Gojukan dojo in Yelahanka",
            tag: "Yelahanka · since 2003",
            title: "A school built on the mat, not the marketing",
            lead: "Twenty-three years of teaching the same way: correct technique, corrected early, corrected often.",
            body: "Okinawa Gojukan Karate-Do was started with nine students and a borrowed hall. The syllabus has grown, the competition record has grown with it, but the rule has not moved — if the technique is not right, the belt is not earned, however long it takes.",
            points: [
              "Karate-Do, Kobudo, Jujitsu and weapons in one continuous syllabus",
              "Quarterly belt examinations with an independent visiting examiner",
              "Classes for children from five years old through to active adults"
            ],
            cta: { label: "Read the full story", to: "/about" }
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sec sec--paper2", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "02",
            kicker: "What we build",
            title: /* @__PURE__ */ jsxs(Fragment, { children: [
              "Four things a dojo",
              /* @__PURE__ */ jsx("br", {}),
              "should actually teach"
            ] }),
            lede: "Anyone can throw a punch. These are the four qualities we are really in the business of building, one class at a time."
          }
        ),
        /* @__PURE__ */ jsx(Pillars, {})
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sec", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "03",
            kicker: "The method",
            title: "One path, four stages, measured in years",
            lede: "Students move through a fixed sequence. Nothing is skipped, and nothing is rushed to a grading date."
          }
        ),
        /* @__PURE__ */ jsx(Ledger, { items: homeMethod })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sec sec--paper2", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "04",
            kicker: "Disciplines",
            title: "What you can train here",
            lede: "Six disciplines running through the week. Every one of them ends with the same bow."
          }
        ),
        /* @__PURE__ */ jsx(Ledger, { items: homeDisciplines })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sec", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "05",
            kicker: "The week",
            title: "Nineteen sessions, seven days",
            lede: "Morning, evening and weekend classes. The timetable below is the one we actually run.",
            action: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "arrow-link", children: [
              "Book a place ",
              /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(Timetable, {})
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sec sec--paper2", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "06",
            kicker: "Who trains here",
            title: "Not everyone here is a fighter",
            lede: "Most people who walk in for the first time are not competition fighters, and nobody is asked to be. Membership starts at ₹1,200 a month and the first session is free.",
            action: /* @__PURE__ */ jsxs(Link, { to: "/programs", className: "arrow-link", children: [
              "Membership terms ",
              /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(Values, { items: homeAudience })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sec", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "07",
            kicker: "The line",
            title: "Who teaches the class",
            lede: "Four instructors, named on the card. Every one of them trained in the Indian defence services, competed at national level, and still teaches the beginner's kata."
          }
        ),
        /* @__PURE__ */ jsx(Instructors, {})
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sec sec--paper2", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "08",
            kicker: "Voices",
            title: "Said by the people on the mat",
            lede: "In their own words, unedited — students and parents on the mat."
          }
        ),
        /* @__PURE__ */ jsx(Voices, { items: homeVoices })
      ] }) }),
      /* @__PURE__ */ jsx(
        Band,
        {
          index: "09",
          image: "assets/img/bg/voices.jpg",
          kicker: "The room",
          title: "Two halls, one mat, no mirrors",
          text: "Karate is not performed at us and it is not filmed for the feed. The mat is measured in effort, and the only score that matters at the end of the session is the one you set for yourself.",
          stats: [
            { value: "2", label: "Dojo halls" },
            { value: "7", label: "Days a week" },
            { value: "0", label: "Excuses accepted" }
          ],
          action: { label: "Visit the dojo", to: "/contact" }
        }
      ),
      /* @__PURE__ */ jsx(Numbers, {}),
      /* @__PURE__ */ jsx("section", { className: "sec sec--paper2", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "10",
            kicker: "Journal",
            title: "Notes from the dojo",
            lede: "Technique write-ups, grading advice and the occasional opinion about shoes.",
            action: /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "arrow-link", children: [
              "All posts ",
              /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(Journal, {})
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sec", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "11",
            kicker: "Next up",
            title: eventFeature.title,
            lede: "The season opens with our own championship. Registration is open to dojo students and to registered clubs from across the country.",
            action: /* @__PURE__ */ jsxs(Link, { to: "/events", className: "arrow-link", children: [
              "Full calendar ",
              /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          Split,
          {
            image: "assets/img/events/1.jpg",
            alt: eventFeature.title,
            tag: eventFeature.date,
            title: eventFeature.venue,
            lead: `${eventFeature.tag} · main event of the season`,
            body: "Dojo students are entered by their instructor. Everyone else can register at the contact page, and the first hundred entries receive a commemorative training belt.",
            points: [
              "Open to all dojo students and registered clubs",
              "Kata, kumite and team kata divisions",
              "Medals, certificates and a belt for early entries"
            ],
            cta: { label: "Event details", to: "/event-details" }
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(
        Closing,
        {
          kicker: "Start here",
          title: "Your first class is free, and it is all you need to try.",
          text: "Call the dojo, tell us the age of the student, and we will keep a mat ready. No kit required for the trial session.",
          primary: { label: "Book a free trial", to: "/contact" },
          secondary: { label: "See the syllabus", to: "/programs" }
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer$1, {})
  ] });
};
const Home$1 = memo(Home);
const AboutPage = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header$1, {}),
    /* @__PURE__ */ jsxs("main", { id: "main", children: [
      /* @__PURE__ */ jsx(
        Masthead,
        {
          index: "01",
          kicker: "About the school",
          title: "Twenty-three years on the same mat",
          lede: "Okinawa Gojukan Karate-Do has taught karate-do in Yelahanka since 2003. The building has changed twice; the method has not changed at all.",
          background: "assets/img/banner/about.jpg?v=20261112d",
          crumbs: [{ label: "About" }]
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "sec sec--grid", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "02",
            kicker: "Our story",
            title: "It started with nine students and one rule",
            lede: "The rule was simple and it still decides everything: train properly, or do not train at all."
          }
        ),
        /* @__PURE__ */ jsx(
          Split,
          {
            image: aboutStory.image,
            srcSet: aboutStory.imageSrcSet,
            sizes: "(max-width: 991px) 100vw, 55vw",
            alt: "Hanshi Dr. S. C. Durai performing kata in front of the Shureimon gate in Okinawa",
            aspect: "3 / 4",
            tag: aboutStory.tag,
            title: aboutStory.title,
            lead: aboutStory.lead,
            body: aboutStory.body,
            points: aboutStory.points,
            cta: { label: "See what we teach", to: "/programs" }
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sec sec--tight", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx(International, {}) }) }),
      /* @__PURE__ */ jsx("section", { className: "sec sec--paper2", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "04",
            kicker: "Where we teach",
            title: "Seven branches, one syllabus",
            lede: "The head dojo is in Yelahanka, Bangalore. Around it sit six branches and state networks — each teaching the same graded syllabus, held to the same standard, with nearly 1,200 students trained across all of them."
          }
        ),
        /* @__PURE__ */ jsx(BranchMap, {}),
        /* @__PURE__ */ jsx(Branches, {})
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sec", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "05",
            kicker: "The long version",
            title: "How the school grew",
            lede: "A short history of a slow, deliberate build. Every step below took longer than anyone expected."
          }
        ),
        /* @__PURE__ */ jsx(Timeline, {})
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sec sec--paper2", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "06",
            kicker: "What we hold to",
            title: "Four words on the wall of the dojo",
            lede: "They are not decoration. Every one of them is written into how a class is run and how a student is graded."
          }
        ),
        /* @__PURE__ */ jsx(Values, {})
      ] }) }),
      /* @__PURE__ */ jsx(
        Band,
        {
          index: "07",
          image: "assets/img/bg/about.jpg",
          kicker: "The instructors",
          title: "Defence-service discipline, in a small Yelahanka hall",
          text: "Our teaching staff have served in the Army, Navy, Airforce and the Para and NSG Commandos. What they bring to the mat is not tactics, but a standard of preparation, punctuality and personal accountability that a civilian dojo rarely insists on.",
          stats: [
            { value: "4", label: "Full-time instructors" },
            { value: "2", label: "Visiting examiners" },
            { value: "1", label: "Bow before striking" }
          ],
          action: { label: "Train with us", to: "/contact" }
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "sec sec--paper2", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "08",
            kicker: "At a glance",
            title: "The school in numbers",
            lede: "If you would rather read the facts than the story, they are here."
          }
        ),
        /* @__PURE__ */ jsx(Facts, {})
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sec", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "09",
            kicker: "Voices",
            title: "What former students say",
            lede: "Written for us by people who have already left the belt behind them."
          }
        ),
        /* @__PURE__ */ jsx(Voices, { items: aboutVoices })
      ] }) }),
      /* @__PURE__ */ jsx(
        Closing,
        {
          kicker: "Come and see",
          title: "The best way to judge a dojo is to stand on its mat.",
          text: "Trial classes are free for every new student. Turn up in comfortable clothes and we will take care of the rest.",
          primary: { label: "Book a free trial", to: "/contact" },
          secondary: { label: "Visit the gallery", to: "/gallery" }
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer$1, {})
  ] });
};
const About = memo(AboutPage);
const ProgramsPage = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header$1, {}),
    /* @__PURE__ */ jsxs("main", { id: "main", children: [
      /* @__PURE__ */ jsx(
        Masthead,
        {
          index: "01",
          kicker: "Programmes",
          title: "Four tracks, one syllabus",
          lede: "Wherever you start, the sequence is the same: kihon, then kata, then kumite, then the grading hall. The tracks below differ only in pace and focus.",
          background: "assets/img/banner/programs.jpg?v=20261112f",
          crumbs: [{ label: "Programs" }]
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "sec sec--grid", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "02",
            kicker: "The tracks",
            title: "Choose where you join the line",
            lede: "Most beginners start in the foundation track and move up at the next grading. Nobody is asked to skip a stage.",
            action: /* @__PURE__ */ jsxs(Link, { to: "/program-details", className: "arrow-link", children: [
              "Syllabus detail ",
              /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(Chapters, {})
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sec sec--paper2", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "03",
            kicker: "The ladder",
            title: "Eight belts, and nobody gets one for free",
            lede: "Belt gradings are held every quarter. The times below are the honest average for a student who trains two or three times a week."
          }
        ),
        /* @__PURE__ */ jsx(BeltLadder, {})
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sec", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "04",
            kicker: "The week",
            title: "Nineteen sessions across seven days",
            lede: "Morning, evening and weekend options. Little Warriors and the competition squad run on their own hours, listed here."
          }
        ),
        /* @__PURE__ */ jsx(Timetable, {})
      ] }) }),
      /* @__PURE__ */ jsx(
        Band,
        {
          index: "05",
          image: "assets/img/bg/team.jpg",
          kicker: "The grading hall",
          title: "Examined, not assessed",
          text: "A belt examination is not a pass mark. Four examiners watch every student for an hour, write down what they saw, and then argue about it in the next room. Nobody is graded on a good morning.",
          stats: [
            { value: "4", label: "Examiners per grading" },
            { value: "60", label: "Minutes per student" },
            { value: "4", label: "Grading days a year" }
          ],
          action: { label: "Ask about grading", to: "/support" }
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "sec sec--paper2", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "06",
            kicker: "Membership",
            title: "Three terms, no long contracts",
            lede: "Monthly membership, a free trial before you pay, and a kit included when you join."
          }
        ),
        /* @__PURE__ */ jsx(Plans, {})
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sec", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "07",
            kicker: "Joining",
            title: "Three steps from here to the mat",
            lede: "It takes less than a week, and none of it costs you anything until you decide it should."
          }
        ),
        /* @__PURE__ */ jsx(Ledger, { items: programEnrol })
      ] }) }),
      /* @__PURE__ */ jsx(
        Closing,
        {
          kicker: "First step",
          title: "Come for one session and decide afterwards.",
          text: "Wear something you can move in and bring water. We will find you a class that fits the age and the level.",
          primary: { label: "Book a free trial", to: "/contact" },
          secondary: { label: "Ask a question", to: "/support" }
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer$1, {})
  ] });
};
const Programs = memo(ProgramsPage);
const EventsPage = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header$1, {}),
    /* @__PURE__ */ jsxs("main", { id: "main", children: [
      /* @__PURE__ */ jsx(
        Masthead,
        {
          index: "01",
          kicker: "Calendar",
          title: "The season, on the mat",
          lede: "Championships, open cups and grading days. Our own championship opens the season, followed by the fixtures the squad travels to.",
          background: "assets/img/banner/events.jpg?v=20261112d",
          crumbs: [{ label: "Events" }]
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "sec sec--grid", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "02",
            kicker: "Season opener",
            title: eventFeature.title,
            lede: "Kata and kumite divisions for every belt, with a visiting panel from across the country on the judging chair.",
            action: /* @__PURE__ */ jsxs(Link, { to: "/event-details", className: "arrow-link", children: [
              "Event details ",
              /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          Split,
          {
            image: eventFeature.image,
            alt: eventFeature.title,
            tag: eventFeature.date,
            title: eventFeature.venue,
            lead: eventFeature.tag,
            body: "Registration closes two weeks before the event, and the first hundred entries receive a commemorative training belt. Arrive by 9:00 AM for a 10:00 AM start, in your gi and belt if you hold one.",
            points: [
              "Kata, kumite and team kata divisions",
              "Open to students of every belt level",
              "Medals, certificates and a belt for early entries"
            ],
            cta: { label: "Register for this event", to: "/contact" }
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sec sec--grid", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "03",
            kicker: "Latest sessions",
            title: "New sessions on the timetable",
            lede: "The classes added to the timetable this season. Each one is open to new students, and the first session of any of them is free.",
            action: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "arrow-link", children: [
              "Book a place ",
              /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(SessionCards, {})
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sec sec--paper2", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "04",
            kicker: "Full calendar",
            title: "Eight dates, August to December",
            lede: "Dates are fixed a season in advance. Entries for our own championship close two weeks before the event; for the external tournaments, entries close with the organisers."
          }
        ),
        /* @__PURE__ */ jsx(EventLedger, {})
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sec", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "05",
            kicker: "Divisions",
            title: "What happens on the day",
            lede: "Five divisions run at every championship, judged on the same rules our students are taught."
          }
        ),
        /* @__PURE__ */ jsx(Chambers, {})
      ] }) }),
      /* @__PURE__ */ jsx(
        Closing,
        {
          kicker: "Compete with us",
          title: "The squad travels to eight events a year.",
          text: "Squad selection happens at the start of each season. If you think you are ready, ask your instructor.",
          primary: { label: "Register an interest", to: "/contact" },
          secondary: { label: "See the syllabus", to: "/programs" }
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer$1, {})
  ] });
};
const Events = memo(EventsPage);
const BlogPage = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header$1, {}),
    /* @__PURE__ */ jsxs("main", { id: "main", children: [
      /* @__PURE__ */ jsx(
        Masthead,
        {
          index: "01",
          kicker: "Journal",
          title: "Notes from the mat",
          lede: "Technique write-ups, grading advice and the occasional opinion about shoes. Written by the instructors and the students who train here.",
          background: "assets/img/banner/blog.jpg?v=20261112d",
          crumbs: [{ label: "Journal" }]
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "sec sec--tight", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "note", children: [
        /* @__PURE__ */ jsx("span", { className: "note__label", children: "From the editors" }),
        /* @__PURE__ */ jsx("p", { className: "note__text", children: "We write about what happens in the room, not about karate in the abstract. Every piece here has been tested on the mat first and then written up, which is why they occasionally disagree with each other." }),
        /* @__PURE__ */ jsxs(Link, { to: "/blog-details", className: "arrow-link", children: [
          "Start reading ",
          /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "sec sec--paper2", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "feature", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/blog-details?post=tenth-dan-red-belt",
            className: "feature__figure",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "assets/img/gallery/okinawa-red-belt.jpg",
                  alt: "Hanshi Dr. S. C. Durai with Grand Master Hanshi Dr. Tetsuhiro Hokama in Okinawa"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "feature__tag", children: "Featured" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "feature__kicker", children: "Achievements — Okinawa" }),
          /* @__PURE__ */ jsx("h2", { className: "feature__title", children: "Red Belt 10th Dan, awarded in Okinawa" }),
          /* @__PURE__ */ jsx("p", { className: "feature__text", children: "Our Chief Instructor, Hanshi Dr. S. C. Durai, was awarded the Red Belt 10th Dan in Goju-Ryu by Grand Master Hanshi Dr. Tetsuhiro Hokama — the first Indian to receive the rank directly from the birthplace of karate. The full statement, with the pictures from the hall." }),
          /* @__PURE__ */ jsxs("div", { className: "feature__stats", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("b", { children: "10th Dan" }),
              /* @__PURE__ */ jsx("span", { children: "Red belt, Goju-Ryu" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("b", { children: "Okinawa" }),
              /* @__PURE__ */ jsx("span", { children: "Birthplace of karate" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("b", { children: "1st Indian" }),
              /* @__PURE__ */ jsx("span", { children: "So awarded" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/blog-details?post=tenth-dan-red-belt", className: "arrow-link", children: [
            "Read the announcement ",
            /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "sec sec--paper2 sec--grid", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx(
        SecHead,
        {
          index: "03",
          kicker: "All posts",
          title: "Everything we have written",
          lede: "Nine pieces, in reverse order of publication. The archive grows every month."
        }
      ) }) }),
      /* @__PURE__ */ jsx(Posts, {}),
      /* @__PURE__ */ jsx(
        Closing,
        {
          kicker: "Keep reading",
          title: "Practice is the only article that actually teaches.",
          text: "Come and try a class. We will show you the technique properly, and you can decide for yourself whether our writing matches our teaching.",
          primary: { label: "Book a free trial", to: "/contact" },
          secondary: { label: "Browse the gallery", to: "/gallery" }
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer$1, {})
  ] });
};
const Blog = memo(BlogPage);
const GalleryPage = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header$1, {}),
    /* @__PURE__ */ jsxs("main", { id: "main", children: [
      /* @__PURE__ */ jsx(
        Masthead,
        {
          index: "01",
          kicker: "Archive",
          title: "Twenty-three years of dojo photographs",
          lede: "Training sessions, grading days and championship weekends, photographed at the Yelahanka hall and at tournaments across the country.",
          background: "assets/img/banner/gallery.jpg?v=20261112d",
          crumbs: [{ label: "Gallery" }]
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "sec sec--grid", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "02",
            kicker: "The album",
            title: "Tap any frame to open it",
            lede: "Use the arrow keys to move through the album once a photograph is open."
          }
        ),
        /* @__PURE__ */ jsx(Mosaic, {})
      ] }) }),
      /* @__PURE__ */ jsx(
        Closing,
        {
          kicker: "Be in the next one",
          title: "The best photograph of this school is still to be taken.",
          text: "Join a class and give us a reason to update this page.",
          primary: { label: "Book a free trial", to: "/contact" },
          secondary: { label: "Read the story", to: "/about" }
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer$1, {})
  ] });
};
const Gallery = memo(GalleryPage);
const ContactPage = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header$1, {}),
    /* @__PURE__ */ jsxs("main", { id: "main", children: [
      /* @__PURE__ */ jsx(
        Masthead,
        {
          index: "01",
          kicker: "Contact",
          title: "Come and train with us",
          lede: "Call the dojo, send a message, or simply turn up for a free trial class. We are on Maruthi Nagar in Yelahanka, seven days a week.",
          background: "assets/img/banner/contact.jpg?v=20261112i",
          crumbs: [{ label: "Contact" }]
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "sec", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "02",
            kicker: "Write to us",
            title: "Tell us who is coming and we will save a mat",
            lede: "Your message goes to the dojo WhatsApp inbox and is read by an instructor, not a call centre. We usually reply the same working day."
          }
        ),
        /* @__PURE__ */ jsx(Inquiry, {})
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sec sec--paper2 sec--tight", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "03",
            kicker: "Find us",
            title: "The dojo in Yelahanka",
            lede: dojo.address
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "map-frame", children: /* @__PURE__ */ jsx(
          "iframe",
          {
            title: "Okinawa Gojukan Karate-Do dojo location on Google Maps",
            src: dojo.maps,
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
            allowFullScreen: true
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "sec sec--tight", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx(
          SecHead,
          {
            index: "04",
            kicker: "Branches",
            title: "Seven dojos, one school",
            lede: "The head dojo is on Maruthi Nagar in Yelahanka. The branches below run the same graded syllabus, and any of them can book your trial class."
          }
        ),
        /* @__PURE__ */ jsx(BranchAddresses, {})
      ] }) }),
      /* @__PURE__ */ jsx(
        Closing,
        {
          kicker: "No forms needed",
          title: "Or simply call the dojo.",
          text: `Ring ${dojo.phone} between 7:30 AM and 9:30 PM and ask for a trial class. We will tell you honestly which session suits the student.`,
          primary: { label: `Call ${dojo.phone}`, to: "/contact" },
          secondary: { label: "See class times", to: "/programs" }
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer$1, {})
  ] });
};
const Contact = memo(ContactPage);
const pathway = [
  {
    no: "01",
    title: "Kihon — Basics",
    text: "Stances, blocks and strikes drilled until the body remembers them without thinking.",
    meta: "Foundation"
  },
  {
    no: "02",
    title: "Kata — Forms",
    text: "Set sequences practised with focus, correct breathing and power that comes from technique, not effort.",
    meta: "Technique"
  },
  {
    no: "03",
    title: "Kumite — Sparring",
    text: "Controlled partner and free practice that builds timing, distance sense and courage.",
    meta: "Application"
  },
  {
    no: "04",
    title: "Belt Grading",
    text: "Clear, structured examinations that mark your progress and open the next stage of training.",
    meta: "Quarterly"
  }
];
const syllabus = [
  {
    no: "01",
    title: "Karate-Do",
    text: "Kihon, kata and kumite taught across nine belt levels, examined every quarter.",
    meta: "All levels"
  },
  {
    no: "02",
    title: "Kobudo",
    text: "Bo staff, sai and tonfa work, graded as a discipline of its own.",
    meta: "Weapons"
  },
  {
    no: "03",
    title: "Jujitsu",
    text: "Grappling, breakfalls and ground escapes built around safe partner practice.",
    meta: "Grappling"
  },
  {
    no: "04",
    title: "Little Warriors",
    text: "A class for five to eleven year olds built on balance, courtesy and simple kata.",
    meta: "Ages 5–11"
  }
];
const ProgramDetails$1 = () => {
  return /* @__PURE__ */ jsx("section", { className: "sec", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "detail", children: [
      /* @__PURE__ */ jsxs(
        motion.article,
        {
          className: "article",
          initial: { opacity: 0, y: 34 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7 },
          children: [
            /* @__PURE__ */ jsxs("figure", { className: "article__figure", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "assets/img/programs/3-bushido.jpg",
                  alt: "A karate student performing kata during a class at the dojo"
                }
              ),
              /* @__PURE__ */ jsx("figcaption", { children: "Every belt starts with the same four stages" })
            ] }),
            /* @__PURE__ */ jsx("h3", { children: "About the programme" }),
            /* @__PURE__ */ jsx("p", { children: "Okinawa Gojukan Karate-Do Training School offers structured martial arts programmes in Karate, Jujitsu and Kobudo for children, teenagers and adults. Each programme follows a progressive syllabus — kihon, kata and kumite — so that students advance step by step with clear goals at every belt level." }),
            /* @__PURE__ */ jsx("p", { children: "Classes are led by instructors with Indian Defence service backgrounds (Army, Navy, Airforce and Para and NSG Commandos), who combine traditional Okinawan karate-do values with disciplined, safety-first coaching. Whether the goal is fitness, self-defence, confidence or competition, there is a place on the mats in Yelahanka." }),
            /* @__PURE__ */ jsx("h3", { children: "During this programme we cover" }),
            /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsx("li", { children: "How to begin traditional karate-do the right way" }),
              /* @__PURE__ */ jsx("li", { children: "Class structure, belt progression and grading requirements" }),
              /* @__PURE__ */ jsx("li", { children: "What training at our Yelahanka dojo is really like" }),
              /* @__PURE__ */ jsx("li", { children: "How the programme prepares students for competitions and belt examinations" })
            ] }),
            /* @__PURE__ */ jsx("h3", { children: "Your training pathway" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.aside,
        {
          className: "detail__aside",
          initial: { opacity: 0, y: 34 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.15 },
          children: [
            /* @__PURE__ */ jsx("h3", { children: "Programme facts" }),
            /* @__PURE__ */ jsxs("div", { className: "info-row", children: [
              /* @__PURE__ */ jsx("span", { className: "info-row__ico", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-calendar-days" }) }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("b", { children: "Grading cycle" }),
                /* @__PURE__ */ jsx("span", { children: "Every quarter" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "info-row", children: [
              /* @__PURE__ */ jsx("span", { className: "info-row__ico", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-layer-group" }) }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("b", { children: "Belt levels" }),
                /* @__PURE__ */ jsx("span", { children: "Nine, white to black" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "info-row", children: [
              /* @__PURE__ */ jsx("span", { className: "info-row__ico", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-location-dot" }) }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("b", { children: "Where" }),
                /* @__PURE__ */ jsx("span", { children: dojo.address })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "info-row", children: [
              /* @__PURE__ */ jsx("span", { className: "info-row__ico", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-phone" }) }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("b", { children: "Call the dojo" }),
                /* @__PURE__ */ jsx("a", { href: `tel:${dojo.phone}`, children: dojo.phone })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-solid", children: [
              "Apply now ",
              /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
      /* @__PURE__ */ jsx("h3", { className: "sec-head__title mb-4", children: "The four stages" }),
      /* @__PURE__ */ jsx(Ledger, { items: pathway })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
      /* @__PURE__ */ jsx("h3", { className: "sec-head__title mb-4", children: "Programmes we run" }),
      /* @__PURE__ */ jsx(Ledger, { items: syllabus })
    ] })
  ] }) });
};
const ProgramDetails$2 = memo(ProgramDetails$1);
const ProgramDetailsPage = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header$1, {}),
    /* @__PURE__ */ jsxs("main", { id: "main", children: [
      /* @__PURE__ */ jsx(
        Masthead,
        {
          index: "01",
          kicker: "Programme detail",
          title: "How a student actually progresses",
          lede: "The syllabus behind every belt: what is taught, in what order, and what you are expected to be able to do by the time you are called to the grading floor.",
          background: "assets/img/banner/program-details.jpg?v=20261112d",
          crumbs: [{ label: "Programs" }, { label: "Detail" }]
        }
      ),
      /* @__PURE__ */ jsx(ProgramDetails$2, {}),
      /* @__PURE__ */ jsx(
        Closing,
        {
          kicker: "Start the pathway",
          title: "The first stage is free to try.",
          text: "Attend one full session before you pay anything. We will place you at the right stage of the pathway on the spot.",
          primary: { label: "Book a free trial", to: "/contact" },
          secondary: { label: "See the syllabus", to: "/programs" }
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer$1, {})
  ] });
};
const ProgramDetails = memo(ProgramDetailsPage);
const articles = {
  /* ------------------------------------------------------------ default */
  discipline: {
    slug: "discipline",
    title: "Martial Arts: A Journey of Discipline and Self-Discovery",
    standfirst: "Karate teaches far more than kicks and punches. How steady training shapes focus, patience and self-belief.",
    date: "18 August, 2026",
    read: "8 min read",
    author: "Dojo Admin",
    avatar: "assets/img/blog/avator/6.jpg",
    category: "Martial Arts Philosophy",
    hero: {
      img: "assets/img/blog/blog-details.jpg",
      alt: "Karate students training conditioning drills in the dojo",
      caption: "Strength work before every technique session"
    },
    body: () => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("p", { children: "Karate teaches far more than kicks and punches. A strong body is only the first part of it — the second is a mind that can hold a single point of attention through a long, unglamorous afternoon. At our dojo every class opens with a bow, a warm-up and simple strength work — squats, lunges, push-ups and balance drills — that prepares the body for safe, effective training and for the hour that follows it." }),
      /* @__PURE__ */ jsx("p", { children: "Progress matters more than intensity. Beginners should start with two or three short sessions each week, gradually adding repetitions as fitness improves. Planks and hip bridges build the core power needed for crisp techniques, while stretching after every session keeps muscles long and flexible. Good nutrition, hydration and proper sleep complete the picture and help young athletes recover faster." }),
      /* @__PURE__ */ jsx("blockquote", { children: "A black belt is simply a white belt who never stopped showing up — steady, patient practice is the real secret to strength." }),
      /* @__PURE__ */ jsx("p", { children: "Track your small wins: hold your stance a little longer, complete one more set, keep your guard up through the final round. Over weeks these efforts add up to visible progress in class, on the mat and in everyday life. Train consistently, train safely, and let strength grow one session at a time." })
    ] })
  },
  /* ------------------------------------------------- world championship */
  "world-championship-2026": {
    slug: "world-championship-2026",
    title: "Three golds in Bengaluru: inside the XVI WKC World Championship",
    standfirst: "A week of kata, kumite and kobudo at the world championship — and the months of preparation that put the squad on the podium.",
    date: "02 November, 2026",
    read: "9 min read",
    author: "Chief Instructor",
    avatar: "assets/img/blog/avator/5.jpg",
    category: "Achievements",
    hero: {
      img: "assets/img/New images/image 2.jpeg",
      alt: "Two medalists holding the Indian flag after the XVI WKC World Championship",
      caption: "Double gold in front of the national flag — XVI WKC, Bengaluru"
    },
    body: () => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("p", { children: "A world championship is decided over one weekend and won over the months before it. Our squad travelled to Bengaluru for the XVI World Karate Confederation Championship entered across kata, kumite and kobudo, and came home with three golds, two silvers and a spread of bronze medals that kept the dojo on the podium in almost every division it entered." }),
      /* @__PURE__ */ jsx("p", { children: "The hall was loud from the first elimination round. Several tatami ran at once, the scoreboards reset every few minutes, and between them our coaches moved mat to mat with the draw sheets folded into their jacket pockets. What looks from the stands like a single performance is really a day of small decisions — when to attack, when to wait, and when to breathe." }),
      /* @__PURE__ */ jsx("blockquote", { children: "The medal is only the receipt. The training was the purchase." }),
      /* @__PURE__ */ jsx("h3", { children: "The week before" }),
      /* @__PURE__ */ jsx("p", { children: "The final preparation block began with the ordinary things: longer warm-ups, sharper kihon, and kumite rounds run at competition pace rather than class pace. Kata was repeated until the sequence stopped needing to be remembered, and the kobudo team drilled the same three transition until the staff moved without a conscious count." }),
      /* @__PURE__ */ jsx("p", { children: "Nothing about that last week was dramatic. There were no secret drills and no last-minute changes. We simply reduced the volume, kept the intensity and let the students recover — which is usually the hardest instruction for a competitor to follow." }),
      /* @__PURE__ */ jsxs("figure", { className: "article__figure", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "assets/img/New images/image 75.jpeg",
            alt: "The full squad with medals and certificates at the XVI WKC World Championship",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsx("figcaption", { children: "The full squad with medals and certificates on the final day" })
      ] }),
      /* @__PURE__ */ jsx("h3", { children: "What the tatami gave back" }),
      /* @__PURE__ */ jsx("p", { children: "Across the weekend the results came in waves. Some were expected, some were a genuine surprise to everyone except the student who earned them. The podium list, as it finished:" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("i", { className: "ph ph-trophy" }),
          "Gold — senior female kumite, after three straight wins"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("i", { className: "ph ph-trophy" }),
          "Gold — junior boys' kata, with the highest flag score of the round"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("i", { className: "ph ph-trophy" }),
          "Gold — cadet girls' kumite, decided in extra time"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("i", { className: "ph ph-medal" }),
          "Silver — senior male kumite and junior female kata"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("i", { className: "ph ph-medal" }),
          "Bronze — kobudo bo staff and the team kata division"
        ] })
      ] }),
      /* @__PURE__ */ jsx("h3", { children: "Juniors, kobudo and the next generation" }),
      /* @__PURE__ */ jsx("p", { children: "The loudest corner of the hall was ours. Our cadet and junior competitors made up more than half of the entries, and several were standing on a world podium for the first time. The younger students did not treat the championship as an exception — they lined up, bowed and performed exactly as they do on a Tuesday evening." }),
      /* @__PURE__ */ jsxs("figure", { className: "article__figure", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "assets/img/New images/image 63.jpeg",
            alt: "Two kobudo medalists holding bo staffs and certificates at the championship",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsx("figcaption", { children: "Kobudo on the world stage — bo staff medals and certificates" })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "The kobudo result deserves its own line. The weapons division is often the quiet part of a karate championship, and our team had never taken a world medal in it before. Two bronze medals on the same afternoon changed that, and made the case for keeping weapons training in the syllabus exactly where it is." }),
      /* @__PURE__ */ jsx("h3", { children: "What we bring home" }),
      /* @__PURE__ */ jsx("p", { children: "The medals will go into the cabinet by the dojo entrance, and the certificates will be framed beside the Okinawa set. What matters more is what the squad brings back into the class: sharper timing, a clearer idea of what competition pace really feels like, and a group of juniors who now know that the podium is a place they are allowed to aim for." }),
      /* @__PURE__ */ jsx("p", { children: "Training resumes on the usual schedule this week. If you have been thinking about the competition squad, the next selection session is open to every student from green belt upward — come and watch first, then decide." })
    ] })
  },
  /* --------------------------------------------------------- red belt 10 */
  "tenth-dan-red-belt": {
    slug: "tenth-dan-red-belt",
    title: "Red Belt 10th Dan: awarded in Okinawa",
    standfirst: "Our Chief Instructor returns from Okinawa with the Red Belt 10th Dan in Goju-Ryu, conferred by Grand Master Hanshi Dr. Tetsuhiro Hokama.",
    date: "09 November, 2026",
    read: "6 min read",
    author: "Hanshi Dr. S. C. Durai",
    avatar: "assets/img/blog/avator/5.jpg",
    category: "Achievements",
    hero: {
      img: "assets/img/gallery/okinawa-red-belt.jpg",
      alt: "Hanshi Dr. S. C. Durai with Grand Master Hanshi Dr. Tetsuhiro Hokama after the 10th Dan award in Okinawa",
      caption: "With Grand Master Hanshi Dr. Tetsuhiro Hokama after the award, Okinawa"
    },
    body: () => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("p", { children: "I am deeply humbled and proud to share a major milestone in my martial arts journey. I have recently returned from Okinawa, Japan, where I was officially awarded the Red Belt 10th Dan in Goju-Ryu Karate by Grand Master Hanshi Dr. Tetsuhiro Hokama, 10th Dan — and I am the first Indian to receive this rank directly from the birthplace of karate." }),
      /* @__PURE__ */ jsx("p", { children: "It was a profound experience demonstrating a lifetime of training in front of elite practitioners and participants from all over the world. From across the globe, practitioners unite: here boundaries fade where the spirit strikes, and the beauty of motion connects us all. Receiving the highest credits and praise from Grand Master Hokama himself is a moment I will cherish forever." }),
      /* @__PURE__ */ jsx("blockquote", { children: "Though he is no longer with us, this milestone is a testament to his timeless guidance, profound wisdom and the enduring legacy he left behind." }),
      /* @__PURE__ */ jsx("h3", { children: "The award" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("i", { className: "ph ph-award" }),
          "Rank — Red Belt, 10th Dan, Goju-Ryu Karate"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("i", { className: "ph ph-map-pin" }),
          "Conferred in Okinawa, Japan — the birthplace of karate"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("i", { className: "ph ph-seal-check" }),
          "By Grand Master Hanshi Dr. Tetsuhiro Hokama, 10th Dan"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("i", { className: "ph ph-flag" }),
          "First Indian to receive the rank directly from Okinawa"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("i", { className: "ph ph-heart" }),
          "Dedicated to the memory of Renshi Dr. R. V. T. Mani"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("figure", { className: "article__figure", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "assets/img/gallery/okinawa-belt-presentation.jpg",
            alt: "The Red Belt presented by the senior master in Okinawa",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsx("figcaption", { children: "The Red Belt presented by the senior master at the Okinawa dojo" })
      ] }),
      /* @__PURE__ */ jsx("h3", { children: "A rank with a lineage" }),
      /* @__PURE__ */ jsx("p", { children: "Goju-Ryu is the style we have taught in Yelahanka since 2003, and it carries its own standard: hard training, close contact, and a refusal to separate the character from the technique. A tenth dan is not a prize for a season's results. It is a marker for the whole of a teaching life, and it carries the names of the teachers who came before." }),
      /* @__PURE__ */ jsx("p", { children: "That is why I dedicate this Red Belt to my revered guru, the late Renshi Dr. R. V. T. Mani. He is no longer with us, but his teaching is still on the mat every evening — in the way a student stands, the way a class is opened and closed, and the way a promise to a beginner is kept. I am forever grateful for the path he carved." }),
      /* @__PURE__ */ jsx("h3", { children: "What it means for the dojo" }),
      /* @__PURE__ */ jsx("p", { children: "A rank of this kind changes nothing about the standard we hold, and that is the point of it. The syllabus stays the same, the grading stays the same, and the students who arrive at five o'clock on a Wednesday are owed exactly the same attention as the ones who arrive for a tournament. What the rank gives me is not authority over the dojo; it is the duty to keep it worthy." }),
      /* @__PURE__ */ jsx("p", { children: "Thank you all for standing by me and keeping his teachings alive." }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("b", { children: "Best regards," }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("b", { children: "Hanshi Dr. S. C. Durai" }),
        /* @__PURE__ */ jsx("br", {}),
        "10th Dan, Goju-Ryu Karate"
      ] })
    ] })
  },
  /* --------------------------------------------------------------- kobudo */
  "kobudo-world-stage": {
    slug: "kobudo-world-stage",
    title: "Bo staff and bronze: kobudo on the world stage",
    standfirst: "The weapons division travelled with the kumite squad this year. What the bo staff team learned from a first world championship.",
    date: "24 October, 2026",
    read: "5 min read",
    author: "Kobudo Instructor",
    avatar: "assets/img/blog/avator/4.jpg",
    category: "Achievements",
    hero: {
      img: "assets/img/New images/image 63.jpeg",
      alt: "Two kobudo medalists holding bo staffs and certificates at the championship",
      caption: "Kobudo on the world stage — bo staff medals and certificates"
    },
    body: () => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("p", { children: "Kobudo is the quiet half of our syllabus: the bo staff, the sai, the rogu and the nunchaku, taught as a continuation of the empty hand techniques rather than as a separate sport. At the XVI World Karate Confederation Championship the weapons team travelled with the kumite squad for the first time as a full division entry." }),
      /* @__PURE__ */ jsx("p", { children: "The scoring is unforgiving. Two judges score distance, timing and the angle of the strike, and a single rushed transition costs more than it does in kumite. Our competitors had trained the same three sequences for months and were still surprised by how quickly the tatami moved once the opening whistle went." }),
      /* @__PURE__ */ jsx("blockquote", { children: "The staff does not protect you. It only shows you where your timing already was." }),
      /* @__PURE__ */ jsxs("figure", { className: "article__figure", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "assets/img/New images/image 41.jpeg",
            alt: "Kobudo podium with bo staffs, medals and certificates at the championship",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsx("figcaption", { children: "Kobudo podium with bo staffs, medals and certificates" })
      ] }),
      /* @__PURE__ */ jsx("h3", { children: "What the mat taught us" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("i", { className: "ph ph-check-circle" }),
          "Distance is trained, not assumed — the staff must meet the target at full extension"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("i", { className: "ph ph-check-circle" }),
          "Transitions need an anchor: a fixed count keeps the feet honest"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("i", { className: "ph ph-check-circle" }),
          "Kata first, weapons second — the empty-hand rhythm carries the technique"
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Two bronze medals were the result, and both were won on the last exchange of the final round. More importantly, the weapons squad now has a benchmark: a real world championship mat, scored by judges who had never seen our dojo before. Next season we begin again from that line." })
    ] })
  }
};
const popularPosts = [
  {
    img: "assets/img/gallery/okinawa-red-belt.jpg",
    title: "Red Belt 10th Dan: awarded in Okinawa",
    date: "09 November, 2026",
    to: "/blog-details?post=tenth-dan-red-belt"
  },
  {
    img: "assets/img/New images/image 2.jpeg",
    title: "Three golds in Bengaluru: inside the XVI WKC",
    date: "02 November, 2026",
    to: "/blog-details?post=world-championship-2026"
  },
  {
    img: "assets/img/New images/image 63.jpeg",
    title: "Bo staff and bronze: kobudo on the world stage",
    date: "24 October, 2026",
    to: "/blog-details?post=kobudo-world-stage"
  }
];
const categories = [
  "Achievements",
  "Training Tips",
  "Techniques & Skills",
  "Fitness & Conditioning",
  "Health & Nutrition",
  "Martial Arts Philosophy"
];
const comments = [
  {
    name: "Ramesh Kumar",
    avatar: "assets/img/blog/avator/1.jpg",
    date: "19 Aug, 2026",
    text: "Wonderful article! My son has been training at the dojo for a year and his confidence has grown so much. Thank you for sharing these tips.",
    children: [
      {
        name: "Priya Sharma",
        avatar: "assets/img/blog/avator/2.jpg",
        date: "20 Aug, 2026",
        text: "Great read. Staying consistent between classes is something I struggle with — these suggestions are really practical and easy to follow.",
        children: [
          {
            name: "Sandeep Rao",
            avatar: "assets/img/blog/avator/3.jpg",
            date: "21 Aug, 2026",
            text: "Very helpful for beginners. I wish I had found this kind of guidance when I first started karate training."
          }
        ]
      }
    ]
  }
];
const countComments = (list) => list.reduce(
  (total, comment) => total + 1 + (comment.children ? countComments(comment.children) : 0),
  0
);
const CommentItem = memo(({ comment }) => /* @__PURE__ */ jsxs("li", { className: "comment", children: [
  /* @__PURE__ */ jsxs("div", { className: "single-comment", children: [
    /* @__PURE__ */ jsxs("div", { className: "com-img", children: [
      /* @__PURE__ */ jsx("img", { src: comment.avatar, alt: comment.name }),
      /* @__PURE__ */ jsx("h4", { children: comment.name }),
      /* @__PURE__ */ jsx("span", { className: "cdate", children: comment.date })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "com-content", children: /* @__PURE__ */ jsx("p", { children: comment.text }) })
  ] }),
  comment.children && comment.children.length > 0 && /* @__PURE__ */ jsx("ul", { className: "children", children: comment.children.map((child, idx) => /* @__PURE__ */ jsx(CommentItem, { comment: child }, idx)) })
] }));
const BlogDetails$1 = () => {
  const [commentSent, setCommentSent] = useState(false);
  const [params] = useSearchParams();
  const slug2 = params.get("post") ?? "";
  const article = articles[slug2] ?? articles.discipline;
  return /* @__PURE__ */ jsx("section", { className: "sec", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "detail", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(
        motion.article,
        {
          className: "article",
          initial: { opacity: 0, y: 34 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7 },
          children: [
            /* @__PURE__ */ jsxs("figure", { className: "article__figure", children: [
              /* @__PURE__ */ jsx("img", { src: article.hero.img, alt: article.hero.alt }),
              /* @__PURE__ */ jsx("figcaption", { children: article.hero.caption })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "article__meta", children: [
              /* @__PURE__ */ jsx("span", { children: article.date }),
              /* @__PURE__ */ jsx("span", { children: article.read }),
              /* @__PURE__ */ jsxs("span", { className: "d-flex align-items-center gap-2", children: [
                /* @__PURE__ */ jsx("img", { src: article.avatar, alt: "", "aria-hidden": "true" }),
                article.author
              ] }),
              /* @__PURE__ */ jsx("span", { children: article.category })
            ] }),
            /* @__PURE__ */ jsx("h3", { children: article.title }),
            article.body()
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "comments mt-5",
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxs("h3", { className: "sec-head__title mb-4", children: [
              "Comments — ",
              countComments(comments)
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "comment-list", children: comments.map((comment, idx) => /* @__PURE__ */ jsx(CommentItem, { comment }, idx)) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "mt-5",
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.1 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h3", { className: "sec-head__title mb-4", children: "Leave a comment" }),
            /* @__PURE__ */ jsxs(
              "form",
              {
                onSubmit: (e) => {
                  e.preventDefault();
                  setCommentSent(true);
                },
                noValidate: true,
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "form-grid", children: [
                    /* @__PURE__ */ jsxs("div", { className: "field", children: [
                      /* @__PURE__ */ jsx("label", { htmlFor: "cmt-name", children: "Your name" }),
                      /* @__PURE__ */ jsx("input", { id: "cmt-name", name: "name", type: "text", required: true })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "field", children: [
                      /* @__PURE__ */ jsx("label", { htmlFor: "cmt-email", children: "Your email" }),
                      /* @__PURE__ */ jsx("input", { id: "cmt-email", name: "email", type: "email", required: true })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "field field--full", children: [
                      /* @__PURE__ */ jsx("label", { htmlFor: "cmt-message", children: "Message" }),
                      /* @__PURE__ */ jsx(
                        "textarea",
                        {
                          id: "cmt-message",
                          name: "message",
                          rows: 5,
                          required: true
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("button", { type: "submit", className: "btn-solid mt-4", children: [
                    "Post comment ",
                    /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
                  ] }),
                  commentSent && /* @__PURE__ */ jsxs("p", { className: "form-success mt-3", children: [
                    /* @__PURE__ */ jsx("i", { className: "fa-solid fa-circle-check" }),
                    " Thank you! Your comment has been posted."
                  ] })
                ]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      motion.aside,
      {
        className: "detail__aside",
        initial: { opacity: 0, y: 34 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, delay: 0.15 },
        children: [
          /* @__PURE__ */ jsx("h3", { children: "Categories" }),
          /* @__PURE__ */ jsx("ul", { className: "mb-4", children: categories.map((cat) => /* @__PURE__ */ jsx(
            "li",
            {
              style: {
                display: "block",
                padding: "10px 0",
                borderBottom: "1px solid rgba(255,255,255,.16)"
              },
              children: /* @__PURE__ */ jsx(Link, { to: "/blog", style: { color: "#fff", fontSize: "14px" }, children: cat })
            },
            cat
          )) }),
          /* @__PURE__ */ jsx("h3", { className: "mt-4", children: "Popular posts" }),
          popularPosts.map((post) => /* @__PURE__ */ jsxs(
            Link,
            {
              to: post.to,
              className: "d-flex gap-3 align-items-center py-2",
              style: {
                borderBottom: "1px solid rgba(255,255,255,.16)"
              },
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: post.img,
                    alt: "",
                    "aria-hidden": "true",
                    style: { width: "68px", height: "68px", objectFit: "cover" },
                    loading: "lazy"
                  }
                ),
                /* @__PURE__ */ jsxs("span", { style: { color: "rgba(255,255,255,.82)", fontSize: "14px" }, children: [
                  post.title,
                  /* @__PURE__ */ jsx(
                    "small",
                    {
                      className: "d-block",
                      style: {
                        color: "rgba(255,255,255,.45)",
                        fontSize: "11px",
                        letterSpacing: ".12em",
                        textTransform: "uppercase"
                      },
                      children: post.date
                    }
                  )
                ] })
              ]
            },
            post.title
          )),
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-solid", children: [
            "Ask the dojo ",
            /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
          ] })
        ]
      }
    )
  ] }) }) });
};
const BlogDetails$2 = memo(BlogDetails$1);
const BlogDetailsPage = () => {
  const [params] = useSearchParams();
  const article = articles[params.get("post") ?? ""] ?? articles.discipline;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header$1, {}),
    /* @__PURE__ */ jsxs("main", { id: "main", children: [
      /* @__PURE__ */ jsx(
        Masthead,
        {
          index: "01",
          kicker: article.category,
          title: article.title,
          lede: article.standfirst,
          background: "assets/img/banner/blog-details.jpg?v=20261112d",
          crumbs: [{ label: "Journal" }, { label: article.category }]
        }
      ),
      /* @__PURE__ */ jsx(BlogDetails$2, {}),
      /* @__PURE__ */ jsx(
        Closing,
        {
          kicker: "Read, then train",
          title: "Reading about it is not the same as doing it.",
          text: "If the practice described here sounds like work, come and try a class. The trial session is free and you do not need any kit.",
          primary: { label: "Book a free trial", to: "/contact" },
          secondary: { label: "More articles", to: "/blog" }
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer$1, {})
  ] });
};
const BlogDetails = memo(BlogDetailsPage);
const EventDetails$1 = () => {
  return /* @__PURE__ */ jsx("section", { className: "sec", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "detail", children: [
      /* @__PURE__ */ jsxs(
        motion.article,
        {
          className: "article",
          initial: { opacity: 0, y: 34 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7 },
          children: [
            /* @__PURE__ */ jsxs("figure", { className: "article__figure", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "assets/img/events/event-details.jpg",
                  alt: "Students at a karate championship in the dojo hall"
                }
              ),
              /* @__PURE__ */ jsx("figcaption", { children: "Competition day at the Yelahanka dojo hall" })
            ] }),
            /* @__PURE__ */ jsx("h3", { children: "About the event" }),
            /* @__PURE__ */ jsx("p", { children: "Our events bring students together for grading examinations, demonstrations and open championships — days filled with effort, sportsmanship and celebration. Families, coaches and young athletes from across Bangalore take part, competing in kata and kumite categories suited to every age and belt level." }),
            /* @__PURE__ */ jsx("p", { children: "Spectators are welcome to cheer, capture the moments and celebrate every achievement on the mat. Registration closes two weeks before each event." }),
            /* @__PURE__ */ jsx("h3", { children: "During this event we cover" }),
            /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsx("li", { children: "Event schedule, registration and category details for players" }),
              /* @__PURE__ */ jsx("li", { children: "Rules, judging criteria and safety requirements" }),
              /* @__PURE__ */ jsx("li", { children: "What the competition day looks like for students and parents" }),
              /* @__PURE__ */ jsx("li", { children: "How our students prepare for tournaments and belt grading tests" })
            ] }),
            /* @__PURE__ */ jsx("h3", { children: "Who is judging" }),
            /* @__PURE__ */ jsx("p", { children: "Each event is officiated by a visiting panel from outside the school, so that the standard applied on the day is the same standard students are taught to expect. A chief instructor from the dojo oversees the floor." })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.aside,
        {
          className: "detail__aside",
          initial: { opacity: 0, y: 34 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.15 },
          children: [
            /* @__PURE__ */ jsx("h3", { children: "Event information" }),
            /* @__PURE__ */ jsxs("div", { className: "info-row", children: [
              /* @__PURE__ */ jsx("span", { className: "info-row__ico", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-calendar" }) }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("b", { children: "Start date" }),
                /* @__PURE__ */ jsx("span", { children: "22 August, 2026" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "info-row", children: [
              /* @__PURE__ */ jsx("span", { className: "info-row__ico", children: /* @__PURE__ */ jsx("i", { className: "fa-regular fa-clock" }) }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("b", { children: "Start time" }),
                /* @__PURE__ */ jsx("span", { children: "10:00 AM" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "info-row", children: [
              /* @__PURE__ */ jsx("span", { className: "info-row__ico", children: /* @__PURE__ */ jsx("i", { className: "fa-regular fa-calendar" }) }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("b", { children: "End time" }),
                /* @__PURE__ */ jsx("span", { children: "6:00 PM" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "info-row", children: [
              /* @__PURE__ */ jsx("span", { className: "info-row__ico", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-location-dot" }) }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("b", { children: "Location" }),
                /* @__PURE__ */ jsx("span", { children: "Yelahanka, Bangalore" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-solid", children: [
              "Register now ",
              /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
      /* @__PURE__ */ jsx("h3", { className: "sec-head__title mb-4", children: "Who you will meet" }),
      /* @__PURE__ */ jsx("div", { className: "instructors instructors--pair", children: homeInstructors.slice(0, 2).map((member, index) => /* @__PURE__ */ jsxs(
        motion.article,
        {
          className: "instructor",
          initial: { opacity: 0, y: 26 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.6, delay: index * 0.1 },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "instructor__img", children: [
              /* @__PURE__ */ jsx("span", { className: "instructor__idx", children: String(index + 1).padStart(2, "0") }),
              /* @__PURE__ */ jsx("img", { src: member.img, alt: member.name, loading: "lazy" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "instructor__cap", children: [
              /* @__PURE__ */ jsx("h3", { children: member.name }),
              /* @__PURE__ */ jsx("p", { children: member.title }),
              /* @__PURE__ */ jsx("span", { children: member.role })
            ] })
          ]
        },
        member.name
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "arrow-link", children: [
      "Ask the dojo about this event on ",
      dojo.phone,
      /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
    ] }) })
  ] }) });
};
const EventDetails$2 = memo(EventDetails$1);
const EventDetailsPage = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header$1, {}),
    /* @__PURE__ */ jsxs("main", { id: "main", children: [
      /* @__PURE__ */ jsx(
        Masthead,
        {
          index: "01",
          kicker: "Event detail",
          title: "Spirit of the Dojo — Karate Championship",
          lede: "Our flagship annual event: kata and kumite divisions for every belt, judged by visiting examiners from across the country.",
          background: "assets/img/banner/event-details.jpg?v=20261112d",
          crumbs: [{ label: "Events" }, { label: "Detail" }]
        }
      ),
      /* @__PURE__ */ jsx(EventDetails$2, {}),
      /* @__PURE__ */ jsx(
        Closing,
        {
          kicker: "Register",
          title: "Entries close two weeks before the day.",
          text: "Ask the dojo for the entry form, or simply write with the student's name and belt level and we will send it over.",
          primary: { label: "Register an interest", to: "/contact" },
          secondary: { label: "Full calendar", to: "/events" }
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer$1, {})
  ] });
};
const EventDetails = memo(EventDetailsPage);
const slug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const ContentPage = ({
  eyebrow = "Information",
  title,
  subtitle = "",
  intro = "",
  sections
}) => {
  const index = useMemo(
    () => sections.map((section) => ({ label: section.heading, id: slug(section.heading) })),
    [sections]
  );
  return /* @__PURE__ */ jsx("section", { className: "sec sec--grid", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "legal", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "article",
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.65 },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "article__meta", children: [
            /* @__PURE__ */ jsx("span", { children: eyebrow }),
            /* @__PURE__ */ jsxs("span", { children: [
              sections.length,
              " sections"
            ] }),
            /* @__PURE__ */ jsx("span", { children: "Last reviewed 2026" })
          ] }),
          intro && /* @__PURE__ */ jsx("p", { className: "fs-5 fw-semibold", children: intro }),
          subtitle && /* @__PURE__ */ jsx("p", { children: subtitle }),
          sections.map((section) => /* @__PURE__ */ jsxs("section", { id: slug(section.heading), children: [
            /* @__PURE__ */ jsx("h3", { children: section.heading }),
            section.body.map((paragraph, i) => /* @__PURE__ */ jsx("p", { children: paragraph }, i)),
            section.list && /* @__PURE__ */ jsx("ul", { children: section.list.map((item) => /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("i", { className: "fa-solid fa-check" }),
              /* @__PURE__ */ jsx("span", { children: item })
            ] }, item)) })
          ] }, section.heading))
        ]
      }
    ),
    /* @__PURE__ */ jsx("nav", { className: "legal__index", "aria-label": title, children: index.map((item) => /* @__PURE__ */ jsx("a", { href: `#${item.id}`, children: item.label }, item.id)) })
  ] }) }) });
};
const ContentPage$1 = memo(ContentPage);
const PrivacyPolicy = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header$1, {}),
    /* @__PURE__ */ jsxs("main", { id: "main", children: [
      /* @__PURE__ */ jsx(
        Masthead,
        {
          index: "01",
          kicker: "Legal",
          title: "Privacy Policy",
          lede: "What we collect, why we collect it, and the choices you have. Written plainly, because a policy nobody can read protects nobody.",
          plain: true,
          crumbs: [{ label: "Privacy Policy" }]
        }
      ),
      /* @__PURE__ */ jsx(
        ContentPage$1,
        {
          eyebrow: "Legal",
          title: "Privacy Policy",
          subtitle: "We keep your information safe, private and only use it to serve you.",
          intro: "Okinawa Gojukan Karate-Do Training School respects your privacy. This policy explains what information we collect, why we collect it and the choices you have.",
          sections: [
            {
              heading: "Information we collect",
              body: [
                "We only collect information you actively give us, such as your name, phone number, email address and the details you include in an enquiry or registration form."
              ],
              list: [
                "Enquiry and registration form details",
                "Your message when you contact the dojo",
                "Newsletter email address, if you opt in"
              ]
            },
            {
              heading: "How we use your information",
              body: [
                "Your details are used to reply to your enquiries, schedule trial classes, share class schedules and belt grading updates, and to send the newsletter you requested."
              ],
              list: [
                "Responding to enquiries and bookings",
                "Class, grading and event notifications",
                "Improving our training programmes"
              ]
            },
            {
              heading: "Cookies and tracking",
              body: [
                "Our website uses a small number of cookies to remember basic site preferences and to understand which pages are most useful. We do not use advertising trackers."
              ]
            },
            {
              heading: "Sharing your information",
              body: [
                "We never sell, rent or trade your personal information. Details are shared only with coaches who need them to run your training, and with authorities where the law requires it."
              ]
            },
            {
              heading: "Your rights",
              body: [
                `You can ask us at any time to show, correct or delete the information we hold about you. Write to us at ${dojo.email2} and we will respond as quickly as possible.`
              ]
            },
            {
              heading: "Data security",
              body: [
                "Information is stored securely and access is limited to team members who need it for your training. We regularly review our processes to keep your data safe."
              ]
            }
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        Closing,
        {
          kicker: "Questions",
          title: "Ask us anything about your data.",
          text: "Write to the dojo and we will explain exactly what we hold and why, in plain language.",
          primary: { label: "Contact the dojo", to: "/contact" },
          secondary: { label: "Support", to: "/support" }
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer$1, {})
  ] });
};
const PrivacyPolicy$1 = memo(PrivacyPolicy);
const Terms = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header$1, {}),
    /* @__PURE__ */ jsxs("main", { id: "main", children: [
      /* @__PURE__ */ jsx(
        Masthead,
        {
          index: "01",
          kicker: "Legal",
          title: "Terms & Conditions",
          lede: "The simple rules that keep our dojo safe, focused and worth coming back to. Every student and every guardian agrees to them.",
          plain: true,
          crumbs: [{ label: "Terms & Conditions" }]
        }
      ),
      /* @__PURE__ */ jsx(
        ContentPage$1,
        {
          eyebrow: "Legal",
          title: "Terms & Conditions",
          subtitle: "Clear expectations for students, guardians and visitors.",
          intro: "These terms apply to everyone training with or visiting Okinawa Gojukan Karate-Do Training School at our Yelahanka dojo.",
          sections: [
            {
              heading: "Training membership",
              body: [
                "Membership begins once your enrolment and the applicable monthly fee are confirmed. Fees are due on the first week of each training month, and the plan you choose can be changed by written request."
              ],
              list: [
                "A free trial class is offered to every new student",
                "Belt examinations are scheduled by the instructor",
                "Monthly plans can be upgraded at any time"
              ]
            },
            {
              heading: "Class attendance",
              body: [
                "Please arrive ten minutes before class in full training gear. Consistent attendance matters more than long sessions, and repeated absences may affect belt grading readiness."
              ],
              list: [
                "Inform us in advance if you need to miss a session",
                "Sessions missed are not carried forward",
                "Training gear and uniform must be worn during class"
              ]
            },
            {
              heading: "Health and safety",
              body: [
                "Tell your instructor about any injury, medical condition or pregnancy before training. Students train at their own level, and instructors may adjust or stop an exercise at any time."
              ],
              list: [
                "Parental consent for students under 18",
                "Medical clearance for competitive squad training",
                "No training while injured or unwell"
              ]
            },
            {
              heading: "Uniform and equipment",
              body: [
                "A white karate gi is required for all classes. Protective gear for kumite, sparring gloves and mouth guards is issued once students enter the competitive squad."
              ]
            },
            {
              heading: "Conduct at the dojo",
              body: [
                "Respect for instructors, training partners and the dojo is expected at all times. Repeated misconduct may lead to suspension of training privileges."
              ],
              list: [
                "Bow to instructors and training partners",
                "No foul language or abusive behaviour",
                "Silence and focus during kata practice"
              ]
            },
            {
              heading: "Cancellations and refunds",
              body: [
                "Membership can be cancelled with one month of written notice. Fees already paid cover training already delivered, so they are non-refundable except in medical or dojo closure cases."
              ]
            }
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        Closing,
        {
          kicker: "Agreed and understood",
          title: "The only rule that matters is showing up.",
          text: "Everything else in these terms exists so that the mat stays safe and the training stays worth the trip.",
          primary: { label: "Book a free trial", to: "/contact" },
          secondary: { label: "Support", to: "/support" }
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer$1, {})
  ] });
};
const Terms$1 = memo(Terms);
const Support = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header$1, {}),
    /* @__PURE__ */ jsxs("main", { id: "main", children: [
      /* @__PURE__ */ jsx(
        Masthead,
        {
          index: "01",
          kicker: "Help centre",
          title: "How can we help?",
          lede: "Quick answers about joining, training, fees and grading. If your question is not here, call or write and we will answer the same working day.",
          plain: true,
          crumbs: [{ label: "Support" }]
        }
      ),
      /* @__PURE__ */ jsx(
        ContentPage$1,
        {
          eyebrow: "Help Centre",
          title: "How can we help?",
          subtitle: "Quick answers about joining, training and fees.",
          intro: "If your question is not answered here, call or write to the dojo and we will get back to you the same working day.",
          sections: [
            {
              heading: "Joining the dojo",
              body: [
                "You do not need any previous experience. Every student starts with kihon, the basic techniques, and progresses at a pace set by the instructor."
              ],
              list: [
                "Attend one free trial class before you decide",
                "Bring sportswear and indoor shoes for the trial",
                "A white gi is purchased after you join"
              ]
            },
            {
              heading: "Class schedule",
              body: [
                "Classes run through the week at our Yelahanka dojo, with separate timings for kids and adults, plus a weekend open training session. The full weekly timetable is published on the programmes page."
              ],
              list: [
                "Weekday evening and weekend morning batches",
                "Little Warriors classes for younger children",
                "Competition squad sessions on request"
              ]
            },
            {
              heading: "Belt grading",
              body: [
                "Grading is held every quarter. When you are ready, the instructor will tell you the syllabus to practise and the grading date in advance."
              ],
              list: [
                "Grading syllabus shared at least four weeks prior",
                "Parents are invited to watch the grading",
                "Certificates and belts awarded on grading day"
              ]
            },
            {
              heading: "Fees and payment",
              body: [
                "Monthly plans start from the first class of the month. Payment can be made at the dojo counter or by bank transfer, and a receipt is issued on request."
              ],
              list: [
                "Basic, Standard and Premium monthly plans",
                "Sibling and annual discounts on request",
                "No hidden charges for belt grading or sparring gear"
              ]
            },
            {
              heading: "Facility and safety",
              body: [
                "The dojo is fully equipped with tatami training mats, a wooden technique area and sanitised changing facilities. Visitors are asked to sign in at the desk."
              ],
              list: [
                "Training mats sanitised after every session",
                "Drinking water available on site",
                "First aid support available during classes"
              ]
            },
            {
              heading: "Still need help?",
              body: [
                `Call us on ${dojo.phone} or ${dojo.phone2}, or write to ${dojo.email2} with your question and we will help you plan your first class.`
              ]
            }
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        Closing,
        {
          kicker: "Still unanswered",
          title: "Ask a person, not a form.",
          text: "Ring the dojo between 6 AM and 8 PM. Somebody who teaches here will pick up.",
          primary: { label: "Contact the dojo", to: "/contact" },
          secondary: { label: "Read the story", to: "/about" }
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer$1, {})
  ] });
};
const Support$1 = memo(Support);
const NotFound = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header$1, {}),
    /* @__PURE__ */ jsx("main", { id: "main", children: /* @__PURE__ */ jsx(
      "section",
      {
        className: "nf",
        style: {
          backgroundImage: "url(assets/img/banner/404.jpg?v=20261112d)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        },
        children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7 },
            children: [
              /* @__PURE__ */ jsx("div", { className: "nf__code", children: "404" }),
              /* @__PURE__ */ jsx("h1", { children: "Nothing on this mat" }),
              /* @__PURE__ */ jsx("p", { children: "The page you asked for has moved, been renamed, or never existed. Head back to the dojo and keep training." }),
              /* @__PURE__ */ jsxs("div", { className: "nf__actions", children: [
                /* @__PURE__ */ jsxs(Link, { to: "/", className: "btn-solid", children: [
                  "Back to home ",
                  /* @__PURE__ */ jsx("i", { className: "ph ph-arrow-right" })
                ] }),
                /* @__PURE__ */ jsx(Link, { to: "/programs", className: "btn-ghost btn-ghost--light", children: "See the syllabus" }),
                /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-ghost btn-ghost--light", children: "Contact the dojo" })
              ] })
            ]
          }
        ) })
      }
    ) }),
    /* @__PURE__ */ jsx(Footer$1, {})
  ] });
};
const NotFound$1 = memo(NotFound);
const win = {
  history: { state: { idx: 0 }, replaceState() {
  }, pushState() {
  }, go() {
  }, back() {
  }, forward() {
  } },
  location: { pathname: "/", search: "", hash: "", origin: "http://localhost", assign() {
  }, replace() {
  } },
  navigator: { userAgent: "node" },
  addEventListener() {
  },
  removeEventListener() {
  },
  scrollTo() {
  },
  matchMedia: () => ({ matches: false, addEventListener() {
  }, removeEventListener() {
  }, addListener() {
  }, removeListener() {
  } })
};
globalThis.window = win;
globalThis.document = {
  defaultView: win,
  readyState: "complete",
  addEventListener() {
  },
  body: { classList: { add() {
  }, remove() {
  }, toggle() {
  } }, style: {} },
  documentElement: { scrollHeight: 0, clientHeight: 0, scrollTop: 0 },
  querySelector: () => null,
  getElementById: () => null
};
globalThis.requestAnimationFrame = (cb) => setTimeout(() => cb(0), 0);
globalThis.cancelAnimationFrame = (id) => clearTimeout(id);
const { setLang, prepareLang } = await import("./assets/core-BJ3r9w7B.js").then((n) => n.c);
const pages = [
  ["Home", Home$1],
  ["About", About],
  ["Programs", Programs],
  ["Events", Events],
  ["Blog", Blog],
  ["Gallery", Gallery],
  ["Contact", Contact],
  ["ProgramDetails", ProgramDetails],
  ["BlogDetails", BlogDetails],
  ["EventDetails", EventDetails],
  ["PrivacyPolicy", PrivacyPolicy$1],
  ["Terms", Terms$1],
  ["Support", Support$1],
  ["NotFound", NotFound$1]
];
mkdirSync("audit", { recursive: true });
for (const code of ["ta", "hi", "kn"]) {
  await prepareLang(code);
  setLang(code);
  for (const [name, Page] of pages) {
    const html = renderToString(
      createElement(MemoryRouter, { initialEntries: ["/"] }, createElement(Page))
    );
    writeFileSync(`audit/${code}-${name}.html`, html, "utf8");
  }
  console.log("dumped", code);
}
