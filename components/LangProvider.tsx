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
  fr: { common: { back: "Retour", loading: "Chargement..." } },
  en: { common: { back: "Back", loading: "Loading..." } },
  ar: { common: { back: "رجوع", loading: "جارٍ التحميل..." } },
};

// 🔥 Valeur par défaut pour éviter le crash SSR
const defaultCtx: Ctx = {
  lang: "fr",
  setLang: () => {},
  t: translations.fr,
  rtl: false,
};

const LangContext = createContext<Ctx>(defaultCtx);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
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