import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { createElement } from "react";

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

/**
 * Minimal DOM stub so `createBrowserRouter` (used by src/App.jsx) can be
 * initialised in Node. This lets us verify the real application shell —
 * not just individual pages — which is where router-context bugs hide.
 */
const installDomStub = () => {
  const win: any = {
    history: {
      state: { idx: 0 },
      replaceState() {},
      pushState() {},
      go() {},
      back() {},
      forward() {},
    },
    location: {
      pathname: "/",
      search: "",
      hash: "",
      origin: "http://localhost",
      assign() {},
      replace() {},
    },
    navigator: { userAgent: "node" },
    addEventListener() {},
    removeEventListener() {},
    scrollTo() {},
    matchMedia: () => ({
      matches: false,
      addEventListener() {},
      removeEventListener() {},
      addListener() {},
      removeListener() {},
    }),
  };

  (globalThis as any).window = win;
  (globalThis as any).document = {
    defaultView: win,
    readyState: "complete",
    addEventListener() {},
    removeEventListener() {},
    body: { classList: { add() {}, remove() {}, toggle() {} }, style: {} },
    documentElement: { scrollHeight: 0, clientHeight: 0, scrollTop: 0 },
    querySelector: () => null,
    getElementById: () => null,
  };
  try {
    Object.defineProperty(globalThis, "navigator", {
      value: win.navigator,
      configurable: true,
      writable: true,
    });
  } catch {
    // Node exposes a read-only navigator; the stub is optional.
  }
  (globalThis as any).requestAnimationFrame = (cb: FrameRequestCallback) =>
    setTimeout(() => cb(0), 0) as unknown as number;
  (globalThis as any).cancelAnimationFrame = (id: number) => clearTimeout(id);
};

installDomStub();

// dynamic import so the DOM stub is installed before the browser router is created
const { default: App } = await import("../src/App");

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

let failures = 0;

const report = (label: string, fn: () => number) => {
  try {
    const size = fn();
    if (size < 500) {
      console.log(`WARN  ${label}: rendered only ${size} chars`);
      failures++;
    } else {
      console.log(`OK    ${label}: ${size} chars`);
    }
  } catch (err: any) {
    failures++;
    console.log(`FAIL  ${label}: ${err?.message}`);
    if (err?.stack) console.log(err.stack.split("\n").slice(0, 8).join("\n"));
  }
};

// 1. The real application shell (router + preloader + back-to-top) must mount.
//    This catches hooks used outside the router context, e.g. useLocation()
//    in a component rendered next to <RouterProvider>.
report("App", () => renderToString(createElement(App)).length);

// 2. Every page must render on its own.
for (const [name, Page] of pages) {
  report(name, () =>
    renderToString(
      createElement(
        MemoryRouter,
        { initialEntries: ["/"] },
        createElement(Page)
      )
    ).length
  );
}

console.log(failures === 0 ? "\nALL PAGES RENDERED" : `\n${failures} FAILURE(S)`);
process.exit(failures === 0 ? 0 : 1);
