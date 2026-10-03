"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useLang } from "@/components/LangProvider";
import {
  IconCrown, IconStarFull, IconLocation, IconArrowRight, IconUser,
} from "@/components/icons";

type Savant = {
  id: string;
  slug: string;
  nom_fr: string;
  nom_ar: string | null;
  nom_en: string | null;
  titre_fr: string | null;
  titre_ar: string | null;
  titre_en: string | null;
  pays: string | null;
  naissance: string | null;
  deces: string | null;
  photo_url: string | null;
  categorie: string;
};

type Filter = "tous" | "classique" | "contemporain";

export default function SavantsPage() {
  const { t, lang } = useLang();
  const [savants, setSavants] = useState<Savant[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>("tous");

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("savants")
        .select("*")
        .neq("categorie", "oustaz")
        .order("ordre", { ascending: true })
        .order("nom_fr", { ascending: true });
      setSavants(data || []);
      setLoading(false);
    })();
  }, []);

  const getName = (s: Savant) =>
    lang === "ar" ? s.nom_ar || s.nom_fr : lang === "en" ? s.nom_en || s.nom_fr : s.nom_fr;

  const getTitre = (s: Savant) =>
    lang === "ar" ? s.titre_ar || s.titre_fr : lang === "en" ? s.titre_en || s.titre_fr : s.titre_fr;

  const filtered = savants.filter(
    (s) => filter === "tous" || s.categorie === filter
  );

  const filters: { id: Filter; label: string; Icon: any }[] = [
    { id: "tous",         label: "Tous",           Icon: IconUser },
    { id: "classique",    label: "Classiques",     Icon: IconCrown },
    { id: "contemporain", label: "Contemporains",  Icon: IconStarFull },
  ];

  return (
    <main className="px-[6%] pt-24 pb-40 max-w-[1200px] mx-auto">

      {/* Retour */}
      <Link href="/audio" className="text-emerald text-sm font-semibold hover:underline inline-flex items-center gap-1">
        ← {t.common.back}
      </Link>

      {/* En-tête */}
      <div className="mt-6 mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald/10 flex items-center justify-center text-emerald">
            <IconCrown size={24} />
          </div>
          <div className="text-xs font-bold text-gold uppercase tracking-[3px]">
            Salafiya
          </div>
        </div>
        <h1 className="font-amiri font-bold text-emerald-dark text-4xl sm:text-5xl mb-3">
          {t.audio.bySavants}
        </h1>
        <p className="text-gray-500 max-w-2xl">
          Les savants de la Salafiya bien guidée — des anciens aux contemporains.
          Découvrez leurs enseignements, leurs œuvres et leurs audios.
        </p>
      </div>

      {/* Filtres */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {filters.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setFilter(id)}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                        text-sm font-semibold whitespace-nowrap transition
              ${filter === id
                ? "bg-emerald text-white shadow-[0_8px_20px_rgba(13,92,74,0.25)]"
                : "bg-white text-emerald-dark border border-emerald/10 hover:border-emerald/30"}`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>

      {/* Grille */}
      {loading ? (
        <p className="text-gray-400">Chargement...</p>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-3xl p-16 text-center border border-emerald/5">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald/10 flex items-center justify-center text-emerald">
            <IconUser size={28} />
          </div>
          <p className="text-gray-400">Aucun savant dans cette catégorie</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((s) => (
            <Link
              key={s.id}
              href={`/audio/savants/${s.slug}`}
              className="group relative bg-white rounded-3xl overflow-hidden
                         border border-emerald/5 hover:-translate-y-1.5
                         hover:shadow-[0_25px_50px_rgba(13,92,74,0.15)]
                         transition-all no-underline"
            >
              {/* Bandeau catégorie */}
              <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-wider
                ${s.categorie === "classique"
                  ? "bg-gold/15 text-gold"
                  : "bg-emerald/10 text-emerald"}`}>
                {s.categorie === "classique" ? "Classique" : "Contemporain"}
              </div>

              {/* Photo / Avatar */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-emerald/5 to-cream
                              flex items-center justify-center overflow-hidden">
                {s.photo_url ? (
                  <img
                    src={s.photo_url}
                    alt={getName(s)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald to-emerald-dark
                                  flex items-center justify-center text-gold">
                    <IconUser size={40} />
                  </div>
                )}
              </div>

              {/* Infos */}
              <div className="p-6">
                {s.nom_ar && (
                  <div className="font-amiri text-gold text-sm mb-1" dir="rtl">
                    {s.nom_ar}
                  </div>
                )}
                <h3 className="font-bold text-emerald-dark text-lg leading-tight mb-1">
                  {getName(s)}
                </h3>
                {getTitre(s) && (
                  <p className="text-xs text-gray-500 mb-3">{getTitre(s)}</p>
                )}

                <div className="flex flex-wrap gap-3 text-[0.7rem] text-gray-400 mb-4">
                  {s.pays && (
                    <span className="inline-flex items-center gap-1">
                      <IconLocation size={12} /> {s.pays}
                    </span>
                  )}
                  {s.deces && (
                    <span className="inline-flex items-center gap-1">
                      <IconCalendar size={12} /> {s.deces}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald
                                group-hover:gap-2.5 transition-all">
                  Voir sa page
                  <IconArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Lien admin (si tu veux) */}
      <div className="mt-12 text-center">
        <Link href="/admin/savants"
          className="text-xs text-gray-400 hover:text-emerald">
          + Gérer les savants (admin)
        </Link>
      </div>
    </main>
  );
}