import {
	createContext,
	createElement,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
	type ReactNode,
} from "react";
import { getLang, prepareLang, setLang, t } from "./core";
import { LANGUAGES, type Lang } from "./dictionary";

interface LanguageValue {
	lang: Lang;
	/** the language the pages are rendered in right now */
	activeLang: Lang | null;
	ready: boolean;
	setLang: (lang: Lang) => void;
	t: (text: string) => string;
}

const LanguageContext = createContext<LanguageValue>({
	lang: "en",
	activeLang: "en",
	ready: true,
	setLang: () => {},
	t: (text: string) => text,
});

export const useLang = () => useContext(LanguageContext);

/** A language can also be chosen with ?lang=ta (or hi / kn) in the address. */
const readUrlLang = (): Lang | null => {
	if (typeof window === "undefined") return null;
	const value = new URLSearchParams(window.location.search).get("lang");
	return value === "ta" || value === "hi" || value === "kn" ? value : null;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const initialLang = readUrlLang() ?? getLang();
	const [lang, setLangState] = useState<Lang>(initialLang);
	/* The language the pages are actually rendered in. It only changes once
	   the word list has arrived, so the site never blanks or flickers while
	   a new language is being fetched. */
	const [activeLang, setActiveLang] = useState<Lang | null>(
		initialLang === "en" ? "en" : null
	);
	const scrollRef = useRef<number | null>(null);

	/* Fetch the word list for the language, then render the site in it. */
	useEffect(() => {
		let alive = true;
		prepareLang(lang).then(() => {
			if (!alive) return;
			setLang(lang);
			setActiveLang(lang);
			document.documentElement.lang = lang;
			document.documentElement.classList.remove("lang-ta", "lang-hi", "lang-kn");
			if (lang !== "en") document.documentElement.classList.add(`lang-${lang}`);
		});
		return () => {
			alive = false;
		};
	}, [lang]);

	/* Switching language rebuilds the page — keep the reader where they were. */
	useEffect(() => {
		if (scrollRef.current === null) return;
		window.scrollTo(0, scrollRef.current);
		scrollRef.current = null;
	}, [activeLang]);

	const change = useCallback((next: Lang) => {
		scrollRef.current = window.scrollY;
		setLang(next);
		setLangState(next);
	}, []);

	const value = useMemo<LanguageValue>(
		() => ({
			lang,
			activeLang,
			ready: activeLang !== null,
			setLang: change,
			t: (text: string) => t(text, lang),
		}),
		[lang, activeLang, change]
	);

	return (
		<LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
	);
};

/**
 * The language picker. It sits in the header, next to the "More" menu, and
 * offers English together with Tamil, Hindi and Kannada.
 */
export const LanguageMenu = () => {
	const { lang, setLang: change } = useLang();
	const [open, setOpen] = useState(false);

	const current = LANGUAGES.find((item) => item.code === lang) ?? LANGUAGES[0];

	return (
		<li
			className={`has-child-items lang-menu${open ? " open" : ""}`}
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<button
				type="button"
				className="nav-dropdown-btn lang-menu__btn"
				onClick={() => setOpen((prev) => !prev)}
				aria-expanded={open}
				aria-haspopup="true"
				aria-label="Choose language"
			>
				<i className="ph ph-globe" aria-hidden="true"></i>
				<span className="lang-menu__current" lang={current.code}>
					{createElement("span", null, current.native)}
				</span>
				<i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
			</button>

			<ul className="sub-menu lang-menu__list">
				{LANGUAGES.map((item) => (
					<li key={item.code}>
						<button
							type="button"
							className={`lang-menu__option${
								item.code === lang ? " is-active" : ""
							}`}
							lang={item.code}
							onClick={() => {
								change(item.code);
								setOpen(false);
							}}
						>
							<span className="lang-menu__native">
								{createElement("span", null, item.native)}
							</span>
							<span className="lang-menu__en">
								{createElement("span", null, item.english)}
							</span>
						</button>
					</li>
				))}
			</ul>
		</li>
	);
};

export { LANGUAGES };
export type { Lang };
