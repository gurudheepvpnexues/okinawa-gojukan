/**
 * Dev helper: screenshots a page with headless Chrome, waiting for the
 * preloader to clear and the target selector to appear.
 *
 *   node tools/shot.js <path> <out.png> [selector] [width] [height]
 */
const puppeteer = require("puppeteer-core");

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

(async () => {
	const [, , path = "/", out = "shot.png", selector = "", w = "1600", h = "1200"] =
		process.argv;

	const browser = await puppeteer.launch({
		executablePath: CHROME,
		headless: "new",
		args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1"],
	});

	const page = await browser.newPage();
	await page.setViewport({ width: Number(w), height: Number(h) });
	await page.goto(`http://localhost:5173${path}`, { waitUntil: "networkidle2", timeout: 60000 });

	// wait for the preloader to go
	await page
		.waitForFunction(
			() => !document.querySelector(".preloader_wrap"),
			{ timeout: 15000 }
		)
		.catch(() => console.log("preloader still visible"));

	if (selector) {
		await page
			.waitForSelector(selector, { timeout: 15000 })
			.catch(() => console.log("selector not found:", selector));
		const el = await page.$(selector);
		if (el) {
			await el.scrollIntoView();
			await new Promise((r) => setTimeout(r, 900));
			await page.screenshot({ path: out, fullPage: false });
			console.log("saved scrolled shot:", out);
			await browser.close();
			return;
		}
	}

	await new Promise((r) => setTimeout(r, 1200));
	await page.screenshot({ path: out, fullPage: false });
	console.log("saved:", out);
	await browser.close();
})();
