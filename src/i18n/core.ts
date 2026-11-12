/**
 * Language core.
 *
 * The site keeps its English copy in the markup and looks the translation up
 * at render time, keyed by the English string itself. That keeps every page
 * working in all four languages without duplicating the component tree, and
 * the English line is always kept on screen next to the translated one so the
 * page never reads as a pure translation.
 *
 * The active language and the word lists live in a small store on the global
 * object, so the JSX layer and the provider always share one copy of them —
 * even when the development server pre-bundles the two modules separately.
 */

import { createElement, type ReactNode } from "react";
import { loadDictionary, type Lang } from "./dictionary";

const STORAGE_KEY = "ogk-lang";

interface Store {
	lang: Lang;
	dicts: Partial<Record<Lang, Record<string, string>>>;
}

const globalScope = globalThis as typeof globalThis & {
	__ogkI18n?: Store;
};

const store: Store = (globalScope.__ogkI18n ??= {
	lang: "en",
	dicts: {},
});

const readStoredLang = (): Lang => {
	if (typeof window === "undefined") return "en";
	try {
		const value = window.localStorage.getItem(STORAGE_KEY);
		return value === "ta" || value === "hi" || value === "kn" ? value : "en";
	} catch {
		return "en";
	}
};

store.lang = readStoredLang();

/** The language the site is being rendered in. */
export const getLang = (): Lang => store.lang;

export const setLang = (lang: Lang) => {
	store.lang = lang;
	if (typeof window !== "undefined") {
		try {
			window.localStorage.setItem(STORAGE_KEY, lang);
		} catch {
			/* storage unavailable — the choice is simply not remembered */
		}
	}
};

/* Whitespace in JSX text nodes rarely matches the copy exactly, so both the
   dictionary and the lookup key are normalised before they are compared. */
const norm = (value: string): string => value.replace(/\s+/g, " ").trim();

type Index = {
	byEnglish: Map<string, string>;
	byNative: Map<string, string>;
};

const indexes = new Map<Lang, Index>();

const buildIndex = (lang: Lang): Index => {
	const byEnglish = new Map<string, string>();
	const byNative = new Map<string, string>();

	for (const [english, native] of Object.entries(store.dicts[lang] ?? {})) {
		const key = norm(english);
		const value = norm(native);
		/* A line that was left in English (a brand, a name) is not a
		   translation, so it never wins over a real one. */
		if (value === key) continue;
		if (!byEnglish.has(key)) byEnglish.set(key, value);
		if (!byNative.has(value)) byNative.set(value, english);
	}

	return { byEnglish, byNative };
};

const indexFor = (lang: Lang): Index => {
	let index = indexes.get(lang);
	if (!index) {
		index = buildIndex(lang);
		indexes.set(lang, index);
	}
	return index;
};

/** Fetch a language's word list (cached after the first time). */
export const prepareLang = async (lang: Lang): Promise<void> => {
	if (store.dicts[lang]) return;
	const map = await loadDictionary[lang]();
	store.dicts[lang] = map;
	indexes.delete(lang);
};

/** The translation of an English string in the given language. */
export const lookup = (english: string, lang: Lang): string | undefined =>
	indexFor(lang).byEnglish.get(norm(english));

/** The English original of a translated string. */
export const lookupEnglish = (native: string, lang: Lang): string | undefined =>
	indexFor(lang).byNative.get(norm(native));

/** Translate a string into the given language. */
export const t = (text: string, lang?: Lang): string => {
	const language = lang ?? store.lang;
	if (language === "en") return text;
	return lookup(text, language) ?? text;
};

/**
 * A pair of lines: the translated line first, the English line underneath (or
 * in brackets for short labels). The CSS decides how the pair is laid out
 * depending on the element it sits in.
 */
export const Bi = (text: string): ReactNode => {
	const language = store.lang;
	if (language === "en") return text;

	const native = lookup(text, language);
	if (native) {
		return createElement(
			"span",
			{ className: "bi" },
			createElement("span", { className: "bi__ta" }, native),
			createElement("span", { className: "bi__en" }, text)
		);
	}

	const english = lookupEnglish(text, language);
	if (english) {
		return createElement(
			"span",
			{ className: "bi" },
			createElement("span", { className: "bi__ta" }, text),
			createElement("span", { className: "bi__en" }, english)
		);
	}

	return text;
};

export type { Lang };
