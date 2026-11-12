export type Lang = "en" | "ta" | "hi" | "kn";

/** The languages the reader can pick, with their own names. */
export const LANGUAGES: {
	code: Lang;
	native: string;
	english: string;
}[] = [
	{ code: "en", native: "English", english: "English" },
	{ code: "ta", native: "தமிழ்", english: "Tamil" },
	{ code: "hi", native: "हिन्दी", english: "Hindi" },
	{ code: "kn", native: "ಕನ್ನಡ", english: "Kannada" },
];

/**
 * The translations are split per language and fetched only when the reader
 * asks for that language, so a visitor in English never downloads the Tamil,
 * Hindi and Kannada word lists.
 */
const loaders: Record<Lang, () => Promise<Record<string, string>>> = {
	en: async () => ({}),
	ta: async () => {
		const [a, b, c, extra, extra2, extra3, fixed] = await Promise.all([
			import("./parts/ta1"),
			import("./parts/ta2"),
			import("./parts/ta3"),
			import("./parts/extra"),
			import("./parts/extra2"),
			import("./parts/extra3"),
			import("./parts/fixed-ta"),
		]);
		return {
			...a.ta1,
			...b.ta2,
			...c.ta3,
			...extra.taExtra,
			...extra2.taExtra2,
			...extra3.taExtra3,
			...fixed.fixedTa,
		};
	},
	hi: async () => {
		const [a, b, c, extra, extra2, extra3, fixed] = await Promise.all([
			import("./parts/hi1"),
			import("./parts/hi2"),
			import("./parts/hi3"),
			import("./parts/extra"),
			import("./parts/extra2"),
			import("./parts/extra3"),
			import("./parts/fixed-hi"),
		]);
		return {
			...a.hi1,
			...b.hi2,
			...c.hi3,
			...extra.hiExtra,
			...extra2.hiExtra2,
			...extra3.hiExtra3,
			...fixed.fixedHi,
		};
	},
	kn: async () => {
		const [a, b, c, extra, extra2, extra3, fixed] = await Promise.all([
			import("./parts/kn1"),
			import("./parts/kn2"),
			import("./parts/kn3"),
			import("./parts/extra"),
			import("./parts/extra2"),
			import("./parts/extra3"),
			import("./parts/fixed-kn"),
		]);
		return {
			...a.kn1,
			...b.kn2,
			...c.kn3,
			...extra.knExtra,
			...extra2.knExtra2,
			...extra3.knExtra3,
			...fixed.fixedKn,
		};
	},
};

export const loadDictionary = loaders;
