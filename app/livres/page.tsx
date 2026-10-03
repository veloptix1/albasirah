"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useLang } from "@/components/LangProvider";
import {
  IconLivre, IconUser, IconArrowRight, IconDownload, IconBook,
} from "@/components/icons";

type Livre = {
  id: string;
  slug: string;
  titre_fr: string;
  titre_ar: string | null;
  titre_en: string | null;
  auteur_fr: string | null;
  auteur_ar: string | null;
  auteur_en: string | null;
  description_fr: string | null;
  couverture_url: string | null;
  pdf_url: string;
  pages: number | null;
  langue: string;
  categorie: string | null;
  annee: string | null;
};

export default function LivresPage() {
  const { t, lang } = useLang();
  const [livres, setLivres] = useState<Livre[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("livres").select("*").order("ordre", { ascending: true });
      setLivres(data || []);
      setLoading(false);
    })();
  }, []);

  const getTitre = (l: Livre) =>
    lang === "ar" ? l.titre_ar || l.titre_fr : lang === "en" ? l.titre_en || l.titre_fr : l.titre_fr;

  const getAuteur = (l: Livre) =>
    lang === "ar" ? l.auteur_ar || l.auteur_fr : lang === "en" ? l.auteur_en || l.auteur_fr : l.auteur_fr;

  return (
    <main className="px-[6%] pt-24 pb-40 max-w-[1200px] mx-auto">

      <Link href="/dashboard" className="text-emerald text-sm font-semibold hover:underline">
        ← Retour
      </Link>

      {/* En-tête */}
      <div className="mt-6 mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold">
            <IconLivre size={24} />
          </div>
          <div className="text-xs font-bold text-gold uppercase tracking-[3px]">
            Bibliothèque
          </div>
        </div>
        <h1 className="font-amiri font-bold text-emerald-dark text-4xl sm:text-5xl mb-3">
          Nos Livres
        </h1>
        <p className="text-gray-500 max-w-2xl">
          Découvrez, lisez en ligne ou téléchargez les livres islamiques
          de nos savants.
        </p>
      </div>

      {/* Grille différente : carte large par livre */}
      {loading ? (
        <p className="text-gray-400">Chargement...</p>
      ) : livres.length === 0 ? (
        <div className="bg-white rounded-3xl p-16 text-center border border-emerald/5">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold/15 flex items-center justify-center text-gold">
            <IconLivre size={28} />
          </div>
          <p className="text-gray-400">Aucun livre pour le moment</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {livres.map((l) => (
            <div
              key={l.id}
              className="group bg-white rounded-[28px] overflow-hidden
                         border border-emerald/5 hover:border-gold/30
                         hover:shadow-[0_25px_60px_rgba(13,92,74,0.12)]
                         transition-all"
            >
              <div className="grid md:grid-cols-[220px_1fr] gap-0">
                {/* Couverture */}
                <div className="relative aspect-[3/4] md:aspect-auto bg-gradient-to-br from-emerald to-emerald-dark
                                flex items-center justify-center overflow-hidden">
                  {l.couverture_url ? (
                    <img
                      src={l.couverture_url}
                      alt={getTitre(l)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-3 text-gold p-6">
                      <IconLivre size={48} />
                      <div className="text-center text-xs font-semibold uppercase tracking-widest opacity-70">
                        {t.categories?.livre || "Livre"}
                      </div>
                    </div>
                  )}
                  {/* Badge langue */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[0.65rem]
                                  font-bold uppercase tracking-wider bg-white/95 text-emerald-dark">
                    {l.langue.toUpperCase()}
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-7 flex flex-col">
                  {l.categorie && (
                    <div className="inline-block self-start px-3 py-1 rounded-full
                                    bg-emerald/8 text-emerald text-[0.7rem] font-bold
                                    uppercase tracking-wider mb-3">
                      {l.categorie}
                    </div>
                  )}

                  {l.titre_ar && lang !== "ar" && (
                    <div className="font-amiri text-gold text-base mb-1" dir="rtl">
                      {l.titre_ar}
                    </div>
                  )}

                  <h2 className="font-amiri font-bold text-emerald-dark text-2xl leading-tight mb-3">
                    {getTitre(l)}
                  </h2>

                  {getAuteur(l) && (
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <IconUser size={16} />
                      <span className="font-semibold">{getAuteur(l)}</span>
                    </div>
                  )}

                  {l.description_fr && (
                    <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3">
                      {l.description_fr}
                    </p>
                  )}

                  {/* Méta */}
                  <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-5">
                    {l.pages && <span>{l.pages} pages</span>}
                    {l.annee && <span>{l.annee}</span>}
                  </div>

                  {/* Boutons d'action */}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <Link
                      href={`/livres/${l.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl
                                 bg-emerald text-white font-semibold text-sm
                                 hover:bg-emerald-dark transition-all
                                 shadow-[0_8px_20px_rgba(13,92,74,0.2)]
                                 hover:-translate-y-0.5"
                    >
                      <IconBook size={16} />
                      Lire en ligne
                    </Link>

                    <a
                      href={l.pdf_url}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl
                                 bg-white text-emerald-dark font-semibold text-sm
                                 border-2 border-emerald/15
                                 hover:border-gold hover:text-gold transition-all"
                    >
                      <IconDownload size={16} />
                      Télécharger
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 text-center">
        <Link href="/admin/livres" className="text-xs text-gray-400 hover:text-emerald">
          + Gérer les livres (admin)
        </Link>
      </div>
    </main>
  );
}