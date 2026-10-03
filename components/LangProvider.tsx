"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Lang, t as translate, isRTL } from "@/lib/i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: ReturnType<typeof translate>;
  rtl: boolean;
};

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const saved = (localStorage.getItem("lang") as Lang) || "fr";
    setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.dir = isRTL(l) ? "rtl" : "ltr";
    document.documentElement.lang = l;
  };

  useEffect(() => {
    document.documentElement.dir = isRTL(lang) ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider
      value={{ lang, setLang, t: translate(lang), rtl: isRTL(lang) }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}