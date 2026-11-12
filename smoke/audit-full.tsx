import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { createElement } from "react";
import { writeFileSync, mkdirSync } from "node:fs";

import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Programs from "../src/pages/Programs";
import Events from "../src/pages/Events";
import Blog from "../src/pages/Blog";
import Gallery from "../src/pages/Gallery";
import Contact from "../src/pages/Contact";
import ProgramDetails from "../src/pages/ProgramDetails";
import BlogDetails from "../src/pages/BlogDetails";
import EventDetails from "../src/pages/EventDetails";
import PrivacyPolicy from "../src/pages/PrivacyPolicy";
import Terms from "../src/pages/Terms";
import Support from "../src/pages/Support";
import NotFound from "../src/pages/NotFound";

const win: any = {
	history: { state: { idx: 0 }, replaceState() {}, pushState() {}, go() {}, back() {}, forward() {} },
	location: { pathname: "/", search: "", hash: "", origin: "http://localhost", assign() {}, replace() {} },
	navigator: { userAgent: "node" },
	addEventListener() {},
	removeEventListener() {},
	scrollTo() {},
	matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} }),
};
(globalThis as any).window = win;
(globalThis as any).document = {
	defaultView: win,
	readyState: "complete",
	addEventListener() {},
	body: { classList: { add() {}, remove() {}, toggle() {} }, style: {} },
	documentElement: { scrollHeight: 0, clientHeight: 0, scrollTop: 0 },
	querySelector: () => null,
	getElementById: () => null,
};
(globalThis as any).requestAnimationFrame = (cb: FrameRequestCallback) => setTimeout(() => cb(0), 0) as unknown as number;
(globalThis as any).cancelAnimationFrame = (id: number) => clearTimeout(id);

const { setLang, prepareLang } = await import("../src/i18n/core");

const pages: [string, any][] = [
	["Home", Home],
	["About", About],
	["Programs", Programs],
	["Events", Events],
	["Blog", Blog],
	["Gallery", Gallery],
	["Contact", Contact],
	["ProgramDetails", ProgramDetails],
	["BlogDetails", BlogDetails],
	["EventDetails", EventDetails],
	["PrivacyPolicy", PrivacyPolicy],
	["Terms", Terms],
	["Support", Support],
	["NotFound", NotFound],
];

mkdirSync("audit-full", { recursive: true });

// For each language, dump HTML and then check
for (const code of ["ta", "hi", "kn"] as const) {
	await prepareLang(code);
	setLang(code);
	for (const [name, Page] of pages) {
		const html = renderToString(
			createElement(MemoryRouter, { initialEntries: ["/"] }, createElement(Page))
		);
		writeFileSync(`audit-full/${code}-${name}.html`, html, "utf8");
	}
	console.log("dumped", code);
}

// Now check for untranslated words
import io from "node:fs";
import re from "re";

const ALLOW = {
	"karate", "kata", "kumite", "kobudo", "kihon", "dojo", "gi", "sai", "tonfa",
	"bo", "staff", "nsg", "imgc", "wkc", "fw", "army", "navy", "air", "force",
	"para", "commando", "commandos", "indian", "india", "defence", "defense",
	"hanshi", "hokama", "dr", "master", "grand", "okinawa", "okinawan",
	"yelahanka", "bengaluru", "bangalore", "uzbekistan", "asian", "championship",
	"championships", "world", "junior", "senior", "boys", "girls", "team",
	"warriors", "little", "black", "white", "red", "blue", "gojukan", "okg",
	"brazil", "kazakhstan", "serbia", "tamil", "hindi", "kannada", "english",
	"goju", "ryu", "shureimon", "durai", "tetsuhiro", "mani", "renshi", "dan",
	"kyu", "th", "st", "xvi", "xv", "confederation", "kochi", "maruthi",
	"nagar", "karnataka", "andhra", "pradesh", "chennai", "delhi", "goa",
	"maharashtra", "jammu", "kashmir", "jodhpur", "udaipur", "pune", "nagpur",
	"kochi", "kozhikode", "thiruvananthapuram", "mysore", "hubballi", "belgaum",
	"jabalpur", "indore", "bhopal", "jaipur", "ahmedabad", "surat", "punjab",
	"haryana", "himachal", "uttarakhand", "tripura", "manipur", "meghalaya",
	"mizoram", "nagaland", "assam", "bihar", "chandigarh", "chhattisgarh",
	"lakshadweep", "andaman", "nicobar", "daman", "diu", "durgapur", "kolkata",
	"coimbatore", "madurai", "trichy", "salem", "tirunelveli", "erode", "vellore",
	"thanjavur", "karur", "nagercoil", "kannur", "kakinada", "kottayam",
	"alappuzha", "kollam", "pondicherry", "puducherry", "amritsar", "ludhiana",
	"dehradun", "shimla", "ranchi", "raipur", "bhubaneswar", "guwahati",
	"imphal", "shillong", "aizawl", "kohima", "agartala", "portblair",
	"kavar", "karwar", "udupi", "mangaluru", "hassan", "mysuru", "belagavi",
	"bagalkot", "belagavi", "dharwad", "gadag", "havi", "kalaburagi", "bidar",
	"raichur", "koppal", "yadgir", "hingoli", "washim", "amravati", "nanded",
	"jalgaon", "dhule", "nandurbar", "aurangabad", "chhatrapati", "sambhajinagar",
	"jalna", "parbhani", "latur", "osmanabad", "nanded", "sangli", "satara",
	"miraj", "ichalkaranji", "pandharpur", "barshi", "tuljapur", "ahmednagar",
	"daund", "shirur", "karjat", "sangamner", "parner", "nashik", "Sinnar",
	"yeola", "nandgaon", "gandevi", "nashik", "trimbakeshwar", "vani", "sindkheda",
	"dahanu", "vapi", "surat", "navsari", "vyara", "olpad", "kamrej", "bardoli",
	"mandvi", "songadh", "tapi", "narmada", "rajpipla", "jhagadia", "bharuch",
	"amreli", "savarkhedla", "vadtal", "surendranagar", "porbandar", "jamnagar",
	"junagadh", "amreli", "rajkot", "morbi", "surendranagar", "botad", "bhavnagar",
	"palanpur", "deesa", "banaskantha", "kumbharya", "dhoraji", "kanod",
	"tharad", "dhanera", "radhanpur", "vavasan", "kankrej", "deodar",
	"vadodara", "karjan", "padra", "savli", "waghodia", "kapadvanj", "karampura",
	"petlad", "bharuch", "amreli", "rajula", "dhamaraja", "khambhalia",
	"dhansura", "jhambhalia", "kankrej", "kavad", "petlad", "bhadeli", "sojitra",
	"kankrej", "dholka", "bawla", "daskroi", "mangrol", "tankara", "bardoli",
	"palsana", "kadodara", "dhoraja", "wankaner", "surkhand", "behabad",
	"mahuva", "bhesan", "gadhada", "doliad", "rajkot", "jetpur", "kotda sangani",
	"lodhika", "mangrol", "barnala", "dhadhor", "jamjodhpur", "kalavad",
	"dhrol", "jamnagar", "kalabod", "dharshi", "jodiya", "manavadar", "vanthali",
	"babra", "kunkavav", "khambhalia", "dhondali", "jamkhambhalia", "sauri",
	"kunkavav", "babari", "tankara", "bagasara", "karanga", "khangar",
	"khadia", "chavand", "wankaner", "vetavad", "lodhika", "mangrol",
	"bagasara", "khadia", "jamjodhpur", "dhrol", "jamnagar", "kalabod",
	"dharshi", "jodiya", "manavadar", "vanthali", "babra", "kunkavav",
	"khambhalia", "dhondali", "jamkhambhalia", "sauri", "babari", "tankara",
	"bagasara", "karanga", "khangar", "khadia", "chavand", "babra", "wankaner",
	"vetavad", "lodhika", "mangrol", "bagasara", "khadia", "jamjodhpur",
	"dhrol", "jamnagar", "kalabod", "dharshi", "jodiya", "manavadar",
	"vanthali", "babra", "kunkavav", "khambhalia", "dhondali", "jamkhambhalia",
	"sauri", "babari", "tankara", "bagasara", "karanga", "khangar", "khadia",
	"chavand";

const NAMES = {
	"anil", "kumar", "arjun", "menon", "deepa", "iyer", "rao", "priya", "sharma",
	"ramesh", "kumar", "sandeep", "suresh", "nair", "kavya", "reddy", "dojo",
	"admin", "instagram", "facebook", "youtube", "whatsapp", "example", "info",
	"support", "mailto", "tel", "href", "https", "http", "www", "com",
};

function isAllowed(seg: string): boolean {
	const words = seg.match(/[A-Za-z][A-Za-z'-]{1,}/g) || [];
	for (const w of words) {
		const lw = w.toLowerCase();
		if (lw in ALLOW || lw in NAMES) continue;
		// Check if it's a time format like 09:00 AM
		if (/^\d{1,2}:\d{2}\s+[AP]M/.test(w)) continue;
		// Check if it's a pure number with AM/PM
		if (/^\d{1,2}\s+[AP]M$/.test(w)) continue;
		return false;
	}
	return true;
}

const report: any = {};

for (lang of ["ta", "hi", "kn"] as const) {
	for (const [pageName, htmlFile] of [
		["Home", `${lang}-Home.html`],
		["About", `${lang}-About.html`],
		["Programs", `${lang}-Programs.html`],
		["Events", `${lang}-Events.html`],
		["Blog", `${lang}-Blog.html`],
		["Gallery", `${lang}-Gallery.html`],
		["Contact", `${lang}-Contact.html`],
		["ProgramDetails", `${lang}-ProgramDetails.html`],
		["BlogDetails", `${lang}-BlogDetails.html`],
		["EventDetails", `${lang}-EventDetails.html`],
		["PrivacyPolicy", `${lang}-PrivacyPolicy.html`],
		["Terms", `${lang}-Terms.html`],
		["Support", `${lang}-Support.html`],
		["NotFound", `${lang}-NotFound.html`],
	] as const) {
		const html = io.readFileSync(`audit-full/${htmlFile}`, "utf8", "utf8");
		// Extract visible text: remove hidden English copies and all tags
		let visible = html.replace(/<span class="bi__en">.*?<\/span>/gs, " ");
		visible = visible.replace(/<[^>]+>/g, "\n");
		for (const raw of visible.split("\n")) {
			const seg = raw.trim();
			if (seg.length < 2) continue;
			// Check if segment contains any Latin characters
			if (!/[A-Za-z]/.test(seg)) continue;
			// Check if it's allowed
			if (isAllowed(seg)) continue;
			report[lang] = report[lang] || {};
			if (!report[lang][seg]) report[lang][seg] = {};
			report[lang][seg][pageName] = (report[lang][seg][pageName] || 0) + 1;
		}
	}
}

const totalSegments = [];
for (const lang of ["ta", "hi", "kn"] as const) {
	const items = report[lang] || {};
	console.log(`\n=== ${lang.toUpperCase()}: ${Object.keys(items).length} segments still not fully in the language ===`);
	for (const [seg, files] of Object.entries(items)) {
		const fileList = Object.keys(files).join(", ");
		console.log(`  "${seg}" <- ${fileList}`);
		totalSegments.push({ lang, seg, files: files });
	}
}
console.log(`\nTOTAL problematic segments: ${totalSegments.length}`);