"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useLang } from "@/components/LangProvider";
import { IconParchemin, IconCheck, IconUser } from "@/components/icons";

type Hadith = {
  id: string;
  texte_ar: string;
  texte_fr: string | null;
  texte_en: string | null;
  source: string | null;
  rapporteur: string | null;
  authenticite: string;
  explication_fr: string | null;
  savant_id: string | null;
};

type Filter = "tous" | "sahih" | "hasan" | "daif";

export default function HadithsPage() {
  const { lang } = useLang();
  const [hadiths, setHadiths] = useState<Hadith[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>("tous");
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("hadiths").select("*").order("ordre");
      setHadiths(data || []);
      setLoading(false);
    })();
  }, []);

  const getTexte = (h: Hadith) =>
    lang === "ar" ? h.texte_ar
      : lang === "en" ? h.texte_en || h.texte_fr
      : h.texte_fr;

  const filtered = hadiths.filter(
    (h) => filter === "tous" || h.authenticite === filter
  );

  const filters: { id: Filter; label: string }[] = [
    { id: "tous", label: "Tous" },
    { id: "sahih", label: "Sahih" },
    { id: "hasan", label: "Hasan" },
    { id: "daif", label: "Da'if" },
  ];

  const authBadge: Record<string, string> = {
    sahih: "bg-emerald/10 text-emerald",
    hasan: "bg-gold/15 text-gold",
    daif: "bg-terracotta/10 text-terracotta",
  };

  return (
    <main className="px-[6%] pt-24 pb-40 max-w-[1200px] mx-auto">
      <Link href="/dashboard" className="text-emerald text-sm font-semibold hover:underline">
        ← Retour
      </Link>

      <div className="mt-6 mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald/10 flex items-center justify-center text-emerald">
            <IconParchemin size={24} />
          </div>
          <div className="text-xs font-bold text-gold uppercase tracking-[3px]">
            Sunna
          </div>
        </div>
        <h1 className="font-amiri font-bold text-emerald-dark text-4xl sm:text-5xl mb-3">
          Hadiths
        </h1>
        <p className="text-gray-500 max-w-2xl">
          Les paroles du Prophète ﷺ authentiquement rapportées,
          avec traduction et explication.
        </p>
      </div>

      {/* Filtres */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {filters.map(({ id, label }) => (
          <button key={id} onClick={() => setFilter(id)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap
                        transition
              ${filter === id
                ? "bg-emerald text-white shadow-[0_8px_20px_rgba(13,92,74,0.25)]"
                : "bg-white text-emerald-dark border border-emerald/10 hover:border-emerald/30"}`}>
            {label}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-gray-400">Chargement...</p>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-3xl p-16 text-center border border-emerald/5">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald/10 flex items-center justify-center text-emerald">
            <IconParchemin size={28} />
          </div>
          <p className="text-gray-400">Aucun hadith dans cette catégorie</p>
        </div>
      ) : (
        <div className="grid gap-5">
          {filtered.map((h) => {
            const isOpen = expanded === h.id;
            return (
              <div key={h.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald/5
                           hover:border-emerald/15 transition-all">
                <div className="flex items-center gap-3 mb-5 flex-wrap">
                  <span className={`px-3 py-1 rounded-full text-[0.7rem] font-bold uppercase
                    ${authBadge[h.authenticite]}`}>
                    {h.authenticite}
                  </span>
                  {h.source && (
                    <span className="text-xs text-gray-400">{h.source}</span>
                  )}
                  {h.rapporteur && (
                    <span className="text-xs text-gray-400 inline-flex items-center gap-1">
                      <IconUser size={12} /> {h.rapporteur}
                    </span>
                  )}
                </div>

                <div className="font-amiri text-emerald-dark text-xl sm:text-2xl leading-loose
                                mb-5 text-right" dir="rtl">
                  {h.texte_ar}
                </div>

                {getTexte(h) && (
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {getTexte(h)}
                  </p>
                )}

                {h.explication_fr && (
                  <>
                    <button onClick={() => setExpanded(isOpen ? null : h.id)}
                      className="text-sm font-semibold text-emerald hover:text-gold
                                 transition inline-flex items-center gap-1">
                      {isOpen ? "Masquer" : "Voir"} l'explication
                    </button>
                    {isOpen && (
                      <div className="mt-4 p-5 rounded-2xl bg-emerald/5 border-l-4 border-gold">
                        <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                          {h.explication_fr}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}