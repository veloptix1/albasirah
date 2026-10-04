"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Lang = "fr" | "en" | "ar";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: any;
  rtl: boolean;
};

const translations: Record<Lang, any> = {
  fr: { common: { back: "Retour", loading: "Chargement..." }, nav: {}, audio: {}, home: {}, categories: {}, features: {}, burger: {} },
  en: { common: { back: "Back", loading: "Loading..." }, nav: {}, audio: {}, home: {}, categories: {}, features: {}, burger: {} },
  ar: { common: { back: "رجوع", loading: "جارٍ التحميل..." }, nav: {}, audio: {}, home: {}, categories: {}, features: {}, burger: {} },
};

const defaultCtx: Ctx = {
  lang: "fr",
  setLang: () => {},
  t: translations.fr,
  rtl: false,
};

const LangContext = createContext<Ctx>(defaultCtx);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = (localStorage.getItem("lang") as Lang) || "fr";
      if (saved === "fr" || saved === "en" || saved === "ar") {
        setLangState(saved);
      }
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
      document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = l;
    } catch {}
  };

  useEffect(() => {
    if (!mounted) return;
    try {
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
    } catch {}
  }, [lang, mounted]);

  return (
    <LangContext.Provider
      value={{
        lang,
        setLang,
        t: translations[lang] || translations.fr,
        rtl: lang === "ar",
      }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}