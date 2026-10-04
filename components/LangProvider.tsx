"use client";
import { createContext, useContext, useState } from "react";

type Lang = "fr" | "en" | "ar";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: any;
  rtl: boolean;
};

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  return (
    <LangContext.Provider
      value={{ lang, setLang, t: {}, rtl: lang === "ar" }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    return { lang: "fr" as Lang, setLang: () => {}, t: {}, rtl: false };
  }
  return ctx;
}