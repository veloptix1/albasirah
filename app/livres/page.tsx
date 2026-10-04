"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useLang } from "@/components/LangProvider";
import { IconLivre, IconSearch, IconDownload } from "@/components/icons";

type Livre = {
  id: string;
  slug: string;
  titre_fr: string;
  titre_ar: string | null;
  titre_en: string | null;
  auteur_fr: string | null;
  auteur_ar: string | null;
  auteur_en: string | null;
  couverture_url: string | null;
  pdf_url: string;
  langue: string;
};

export default function LivresPage() {
  const { lang } = useLang();
  const [livres, setLivres] = useState<Livre[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("livres").select("*").order("ordre", { ascending: true });
      setLivres(data || []);
      setLoading(false);
    })();
  }, []);

  const getTitre = (l: Livre) =>
    lang === "ar" ? l.titre_ar || l.titre_fr
      : lang === "en" ? l.titre_en || l.titre_fr
      : l.titre_fr;

  const getAuteur = (l: Livre) =>
    lang === "ar" ? l.auteur_ar || l.auteur_fr
      : lang === "en" ? l.auteur_en || l.auteur_fr
      : l.auteur_fr;

  const filtered = livres.filter((l) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      l.titre_fr?.toLowerCase().includes(q) ||
      l.titre_ar?.includes(search) ||
      l.auteur_fr?.toLowerCase().includes(q)
    );
  });

  return (
    <main className="px-[6%] pt-24 pb-40 max-w-[1200px] mx-auto">

      <Link href="/dashboard" className="text-emerald text-sm font-semibold hover:underline">
        ← Retour
      </Link>

      <div className="mt-6 mb-10">
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
          Découvrez, lisez en ligne ou téléchargez les livres islamiques de nos savants.
        </p>
      </div>

      {/* Recherche */}
      <div className="relative mb-8">
        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-emerald/50 pointer-events-none">
          <IconSearch size={18} />
        </div>
        <input
          type="text"
          placeholder="Rechercher un livre par titre ou auteur..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-14 pr-5 py-4 rounded-2xl border-2 border-emerald/10
                     focus:border-gold outline-none text-sm bg-white
                     shadow-[0_4px_14px_rgba(13,92,74,0.05)]"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400
                       hover:text-terracotta transition text-xl leading-none"
          >
            ×
          </button>
        )}
      </div>

      {loading ? (
        <p className="text-gray-400">Chargement...</p>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-3xl p-16 text-center border border-emerald/5">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold/15 flex items-center justify-center text-gold">
            <IconSearch size={28} />
          </div>
          <p className="text-gray-400 mb-2">Aucun livre trouvé</p>
          {search && (
            <button onClick={() => setSearch("")}
              className="text-emerald text-sm font-semibold hover:underline">
              Effacer la recherche
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((l) => (
            <Link
              key={l.id}
              href={`/livres/${l.slug}`}
              className="group bg-white rounded-2xl overflow-hidden
                         border border-emerald/5 hover:-translate-y-1
                         hover:shadow-[0_15px_35px_rgba(13,92,74,0.15)]
                         hover:border-gold/30 transition-all no-underline
                         flex flex-col"
            >
              {/* Couverture */}
              <div className="relative aspect-[3/4] bg-gradient-to-br from-emerald to-emerald-dark
                              flex items-center justify-center overflow-hidden">
                {l.couverture_url ? (
                  <img
                    src={l.couverture_url}
                    alt={getTitre(l)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-gold flex flex-col items-center gap-2 p-4">
                    <IconLivre size={36} />
                  </div>
                )}

                {/* Badge langue */}
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full
                                bg-white/95 text-emerald-dark
                                text-[0.58rem] font-bold uppercase tracking-wider">
                  {l.langue.toUpperCase()}
                </div>

                {/* Bouton télécharger overlay au hover */}
                <a
                  href={l.pdf_url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute bottom-2 right-2 w-8 h-8 rounded-full
                             bg-gold text-emerald-dark flex items-center justify-center
                             opacity-0 group-hover:opacity-100 transition-opacity
                             shadow-lg hover:scale-110"
                  title="Télécharger"
                >
                  <IconDownload size={14} />
                </a>
              </div>

              {/* Infos */}
              <div className="p-3 flex flex-col flex-1">
                {l.titre_ar && lang !== "ar" && (
                  <div className="font-amiri text-gold text-[0.7rem] mb-0.5 leading-tight"
                       dir="rtl">
                    {l.titre_ar}
                  </div>
                )}

                <h3 className="font-bold text-emerald-dark text-sm leading-tight mb-1
                               line-clamp-2 min-h-[2.3em]">
                  {getTitre(l)}
                </h3>

                {getAuteur(l) && (
                  <p className="text-[0.68rem] text-gray-500 line-clamp-1 mt-auto pt-2
                                border-t border-emerald/5">
                    {getAuteur(l)}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}