import { createElement } from "react";
const LANGUAGES = [
  { code: "en", native: "English", english: "English" },
  { code: "ta", native: "தமிழ்", english: "Tamil" },
  { code: "hi", native: "हिन्दी", english: "Hindi" },
  { code: "kn", native: "ಕನ್ನಡ", english: "Kannada" }
];
const loaders = {
  en: async () => ({}),
  ta: async () => {
    const [a, b, c, extra, extra2, extra3, fixed] = await Promise.all([
      import("./ta1-Cvmfxr0I.js"),
      import("./ta2-BP-UNrw8.js"),
      import("./ta3-DXRBMeMm.js"),
      import("./extra-DKItriq3.js"),
      import("./extra2-BItfinb_.js"),
      import("./extra3-CKTCeYgT.js"),
      import("./fixed-ta-DTJlAkZq.js")
    ]);
    return {
      ...a.ta1,
      ...b.ta2,
      ...c.ta3,
      ...extra.taExtra,
      ...extra2.taExtra2,
      ...extra3.taExtra3,
      ...fixed.fixedTa
    };
  },
  hi: async () => {
    const [a, b, c, extra, extra2, extra3, fixed] = await Promise.all([
      import("./hi1-viuIs8HU.js"),
      import("./hi2-CTYFMCsO.js"),
      import("./hi3-usJ7vbh4.js"),
      import("./extra-DKItriq3.js"),
      import("./extra2-BItfinb_.js"),
      import("./extra3-CKTCeYgT.js"),
      import("./fixed-hi-oL7nn7oG.js")
    ]);
    return {
      ...a.hi1,
      ...b.hi2,
      ...c.hi3,
      ...extra.hiExtra,
      ...extra2.hiExtra2,
      ...extra3.hiExtra3,
      ...fixed.fixedHi
    };
  },
  kn: async () => {
    const [a, b, c, extra, extra2, extra3, fixed] = await Promise.all([
      import("./kn1-CdMiFIMt.js"),
      import("./kn2-Dd8WJdC1.js"),
      import("./kn3-BWLbXKNp.js"),
      import("./extra-DKItriq3.js"),
      import("./extra2-BItfinb_.js"),
      import("./extra3-CKTCeYgT.js"),
      import("./fixed-kn-CfPxNlvq.js")
    ]);
    return {
      ...a.kn1,
      ...b.kn2,
      ...c.kn3,
      ...extra.knExtra,
      ...extra2.knExtra2,
      ...extra3.knExtra3,
      ...fixed.fixedKn
    };
  }
};
const loadDictionary = loaders;
const STORAGE_KEY = "ogk-lang";
const globalScope = globalThis;
const store = globalScope.__ogkI18n ??= {
  lang: "en",
  dicts: {}
};
const readStoredLang = () => {
  if (typeof window === "undefined") return "en";
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "ta" || value === "hi" || value === "kn" ? value : "en";
  } catch {
    return "en";
  }
};
store.lang = readStoredLang();
const getLang = () => store.lang;
const setLang = (lang) => {
  store.lang = lang;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
    }
  }
};
const norm = (value) => value.replace(/\s+/g, " ").trim();
const indexes = /* @__PURE__ */ new Map();
const buildIndex = (lang) => {
  const byEnglish = /* @__PURE__ */ new Map();
  const byNative = /* @__PURE__ */ new Map();
  for (const [english, native] of Object.entries(store.dicts[lang] ?? {})) {
    const key = norm(english);
    const value = norm(native);
    if (value === key) continue;
    if (!byEnglish.has(key)) byEnglish.set(key, value);
    if (!byNative.has(value)) byNative.set(value, english);
  }
  return { byEnglish, byNative };
};
const indexFor = (lang) => {
  let index = indexes.get(lang);
  if (!index) {
    index = buildIndex(lang);
    indexes.set(lang, index);
  }
  return index;
};
const prepareLang = async (lang) => {
  if (store.dicts[lang]) return;
  const map = await loadDictionary[lang]();
  store.dicts[lang] = map;
  indexes.delete(lang);
};
const lookup = (english, lang) => indexFor(lang).byEnglish.get(norm(english));
const lookupEnglish = (native, lang) => indexFor(lang).byNative.get(norm(native));
const t = (text, lang) => {
  const language = store.lang;
  if (language === "en") return text;
  return lookup(text, language) ?? text;
};
const Bi = (text) => {
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
const core = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Bi,
  getLang,
  lookup,
  lookupEnglish,
  prepareLang,
  setLang,
  t
}, Symbol.toStringTag, { value: "Module" }));
export {
  Bi as B,
  LANGUAGES as L,
  core as c,
  getLang as g,
  t
};
