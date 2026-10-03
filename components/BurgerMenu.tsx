"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "./LangProvider";
import { Lang } from "@/lib/i18n";
import { supabase } from "@/lib/supabase";

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
  const [connected, setConnected] = useState(false);
  const { t, lang, setLang } = useLang();
  const pathname = usePathname();

  // Détecte la connexion
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setConnected(!!data.session);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_e, session) => {
      setConnected(!!session);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  // Ferme le menu au changement de page
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloque le scroll quand ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const langs: { code: Lang; label: string }[] = [
    { code: "fr", label: "Français" },
    { code: "en", label: "English" },
    { code: "ar", label: "العربية" },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Menu"
        className="w-11 h-11 rounded-xl bg-emerald flex flex-col items-center justify-center
                   gap-[5px] hover:bg-emerald-dark transition relative z-[901]"
      >
        <span className="w-5 h-[2px] bg-gold rounded" />
        <span className="w-5 h-[2px] bg-gold rounded" />
        <span className="w-3 h-[2px] bg-gold rounded self-start ml-3" />
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998]"
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-screen w-[85%] max-w-[380px] z-[999]
                    bg-gradient-to-b from-emerald-dark to-emerald
                    flex flex-col
                    transition-transform duration-300 ease-out
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
          <div className="font-amiri font-bold text-gold text-2xl" dir="rtl">
            بصيرة
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Fermer"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20
                       flex items-center justify-center text-gold text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {/* Langue */}
          <div className="mb-6">
            <div className="text-xs text-white/50 uppercase tracking-widest mb-3">
              {t.burger.language}
            </div>
            <div className="flex gap-2">
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`flex-1 px-3 py-2 rounded-xl text-xs font-semibold transition
                    ${lang === l.code
                      ? "bg-gold text-emerald-dark"
                      : "bg-white/10 text-white hover:bg-white/20"}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Lien Dashboard (seulement si connecté) */}
          {connected && (
            <Link
              href="/dashboard"
              className="block px-5 py-3.5 rounded-2xl text-gold font-semibold
                         bg-white/5 hover:bg-white/10 transition mb-3"
            >
              📊 {t.nav.dashboard}
            </Link>
          )}

          {/* Liens classiques */}
          <nav className="space-y-1">
            {links.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className="block px-5 py-3.5 rounded-2xl text-white/90 font-medium
                           hover:bg-white/10 hover:text-gold transition"
              >
                {t.nav[key]}
              </Link>
            ))}
          </nav>

          <div className="mt-10 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-white/50">AL BASIRAH © 2026</p>
          </div>
        </div>
      </aside>
    </>
  );
}