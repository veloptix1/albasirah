"use client";
import { useState } from "react";
import Link from "next/link";
import { useLang } from "./LangProvider";
import { Lang } from "@/lib/i18n";

const links = [
  { key: "live", href: "/live" },
  { key: "warning", href: "/mise-en-garde" },
  { key: "new", href: "/nouveau" },
  { key: "faq", href: "/faq" },
  { key: "conditions", href: "/conditions" },
  { key: "support", href: "/support" },
  { key: "salafiya", href: "/salafiya" },
] as const;

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLang();

  const langs: { code: Lang; label: string }[] = [
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
  ];

  return (
    <>
      {/* Bouton burger */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Menu"
        className="w-11 h-11 rounded-xl bg-emerald flex flex-col items-center justify-center
                   gap-[5px] hover:bg-emerald-dark transition"
      >
        <span className="w-5 h-[2px] bg-gold rounded" />
        <span className="w-5 h-[2px] bg-gold rounded" />
        <span className="w-3 h-[2px] bg-gold rounded self-start ml-3" />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]
                    transition-opacity duration-300
                    ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[380px] z-[1000]
                    bg-gradient-to-b from-emerald-dark to-emerald
                    p-7 pt-20 overflow-y-auto
                    transition-transform duration-300 ease-out
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Bouton fermer */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Fermer"
          className="absolute top-5 right-5 w-10 h-10 rounded-full
                     bg-white/10 hover:bg-white/20 flex items-center justify-center
                     text-gold text-xl"
        >
          ×
        </button>

        {/* Titre */}
        <div className="font-amiri font-bold text-gold text-2xl mb-8 text-center" dir="rtl">
          بصيرة
        </div>

        {/* Sélecteur de langue */}
        <div className="flex gap-2 justify-center mb-8">
          {langs.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition
                ${lang === l.code
                  ? "bg-gold text-emerald-dark"
                  : "bg-white/10 text-white hover:bg-white/20"}`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Liens */}
        <nav className="space-y-1">
          {links.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              onClick={() => setOpen(false)}
              className="block px-5 py-3.5 rounded-2xl text-white/90 font-medium
                         hover:bg-white/10 hover:text-gold transition"
            >
              {t.nav[key]}
            </Link>
          ))}
        </nav>

        {/* Pied */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/50">AL BASIRAH © 2026</p>
        </div>
      </aside>
    </>
  );
}