"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "sw";

/**
 * Lightweight i18n for the demo. Strings are keyed by their English text; the
 * Swahili column is a reviewable translation table. Missing keys fall back to
 * the key itself (i.e. the English text), so nothing ever renders blank.
 *
 * In production this would be a full next-intl setup with per-content
 * translation fields reviewed before publishing. The architecture here — a
 * persisted, site-wide toggle consumed via useT() — is the same shape.
 */
const DICT: Record<string, string> = {
  // Nav groups
  "My Record": "Rekodi Yangu",
  "About Me": "Kunihusu",
  "Get Involved": "Jiunge Nasi",
  // Nav links
  "What We've Delivered": "Tuliyotimiza",
  "Major Projects": "Miradi Mikuu",
  "My Manifesto": "Ilani Yangu",
  "My Promises": "Ahadi Zangu",
  "My Legacy": "Urithi Wangu",
  "Journey to Presidency": "Safari ya Urais",
  "Why Ruto": "Kwa Nini Ruto",
  "The Party": "Chama",
  "Election Center": "Kituo cha Uchaguzi",
  "Campaign Roadmap": "Ramani ya Kampeni",
  "Campaign Updates": "Habari za Kampeni",
  Donate: "Changia",
  "Media Room": "Chumba cha Vyombo vya Habari",
  "Ask the President": "Muulize Rais",
  // CTAs / common
  "Join the Movement": "Jiunge na Harakati",
  "President of Kenya": "Rais wa Kenya",
  "Language": "Lugha",
};

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (s: string) => string;
}

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (s) => s,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "sw") setLangState(saved);
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    window.localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  }

  const t = (s: string) => (lang === "sw" ? DICT[s] ?? s : s);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  return useContext(LanguageContext);
}
