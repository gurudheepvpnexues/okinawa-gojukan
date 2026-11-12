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

for (const code of ["ta", "hi", "kn"]) {
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