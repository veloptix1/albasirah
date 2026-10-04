"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { IconSearch, IconPlay, IconDownload } from "@/components/icons";

type Sourate = {
  numero: number;
  nom_ar: string;
  nom_fr: string;
  nom_translit: string;
  versets: number;
  type: string;
};

type CoranAudio = {
  id: string;
  sourate_numero: number;
  recitateur_slug: string;
  recitateur_nom: string;
  audio_url: string;
  duree: number | null;
};

export default function CoranClient() {
  const [sourates, setSourates] = useState<Sourate[]>([]);
  const [audios, setAudios] = useState<CoranAudio[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [openMenuFor, setOpenMenuFor] = useState<number | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const [s, a] = await Promise.all([
          supabase.from("sourates").select("*").order("numero"),
          supabase.from("coran_audios").select("*"),
        ]);
        setSourates(s.data || []);
        setAudios(a.data || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = sourates.filter((s) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      s.nom_fr.toLowerCase().includes(q) ||
      s.nom_translit.toLowerCase().includes(q) ||
      s.nom_ar.includes(search) ||
      String(s.numero) === search
    );
  });

  const getAudiosFor = (numero: number) =>
    audios.filter((a) => a.sourate_numero === numero);

  return (
    <main className="px-[6%] pt-24 pb-40 max-w-[1200px] mx-auto min-h-screen">

      <Link href="/audio" className="text-emerald text-sm font-semibold hover:underline">
        ← Retour
      </Link>

      <div className="mt-6 mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-2xl bg-gold/15 flex items-center justify-center text-gold text-2xl font-amiri">
            ﷽
          </div>
          <div className="text-xs font-bold text-gold uppercase tracking-[3px]">
            Le Noble Coran
          </div>
        </div>
        <h1 className="font-amiri font-bold text-emerald-dark text-4xl sm:text-5xl mb-3">
          Coran
        </h1>
        <p className="text-gray-500 max-w-2xl">
          114 sourates — Écoutez, lisez et téléchargez.
        </p>
      </div>

      {/* Recherche */}
      <div className="relative mb-8">
        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-emerald/50 pointer-events-none">
          <IconSearch size={18} />
        </div>
        <input
          type="text"
          placeholder="Rechercher par numéro, nom ou transcription..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-14 pr-5 py-4 rounded-2xl border-2 border-emerald/10
                     focus:border-gold outline-none text-sm bg-white"
        />
        {search && (
          <button onClick={() => setSearch("")}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400
                       hover:text-terracotta text-xl leading-none">
            ×
          </button>
        )}
      </div>

      {loading ? (
        <p className="text-gray-400">Chargement...</p>
      ) : (
        <div className="grid gap-3">
          {filtered.map((s) => {
            const audiosSourate = getAudiosFor(s.numero);
            const hasAudio = audiosSourate.length > 0;
            const isMenuOpen = openMenuFor === s.numero;

            return (
              <div key={s.numero}
                className="bg-white rounded-2xl border border-emerald/5
                           hover:border-emerald/15 transition-all overflow-visible">
                <div className="flex items-center gap-4 p-4">

                  {/* Numéro */}
                  <div className="w-11 h-11 rounded-xl bg-emerald/8 flex items-center justify-center
                                  text-emerald font-bold text-sm shrink-0">
                    {s.numero}
                  </div>

                  {/* Nom (cliquable → page texte) */}
                  <Link href={`/audio/coran/${s.numero}`}
                    className="flex-1 min-w-0 no-underline group">
                    <div className="font-semibold text-emerald-dark text-sm truncate
                                    group-hover:text-emerald transition">
                      {s.nom_translit} — {s.nom_fr}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="font-amiri" dir="rtl">{s.nom_ar}</span>
                      <span>·</span>
                      <span>{s.versets} versets</span>
                      <span>·</span>
                      <span>{s.type}</span>
                    </div>
                  </Link>

                  {/* Menu burger 3 traits (ouvre la liste des récitateurs) */}
                  <div className="relative shrink-0">
                    <button
                      onClick={() => setOpenMenuFor(isMenuOpen ? null : s.numero)}
                      aria-label="Récitateurs"
                      className={`w-10 h-10 rounded-xl flex flex-col items-center justify-center
                                  gap-[4px] transition
                        ${hasAudio
                          ? "bg-emerald text-gold hover:bg-emerald-dark"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}
                      disabled={!hasAudio}
                    >
                      <span className="w-4 h-[2px] bg-current rounded" />
                      <span className="w-4 h-[2px] bg-current rounded" />
                      <span className="w-2.5 h-[2px] bg-current rounded self-start ml-3" />
                    </button>

                    {/* Menu déroulant des récitateurs */}
                    {isMenuOpen && hasAudio && (
                      <>
                        <div
                          onClick={() => setOpenMenuFor(null)}
                          className="fixed inset-0 z-[500]"
                        />
                        <div className="absolute right-0 top-12 z-[600] w-72
                                        bg-white rounded-2xl border border-emerald/10
                                        shadow-[0_20px_50px_rgba(13,92,74,0.2)]
                                        overflow-hidden">
                          <div className="px-4 py-3 bg-emerald/5 border-b border-emerald/10">
                            <div className="text-xs font-bold text-emerald-dark uppercase tracking-wider">
                              Récitateurs disponibles
                            </div>
                          </div>
                          {audiosSourate.map((a) => (
                            <div key={a.id}>
                              <button
                                onClick={() => {
                                  setPlayingId(a.id);
                                  setOpenMenuFor(null);
                                }}
                                className="w-full px-4 py-3 flex items-center gap-3
                                           hover:bg-cream transition text-left">
                                <div className="w-8 h-8 rounded-full bg-gold
                                                flex items-center justify-center shrink-0">
                                  <IconPlay size={10} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-semibold text-emerald-dark truncate">
                                    {a.recitateur_nom}
                                  </div>
                                  {a.duree && (
                                    <div className="text-xs text-gray-500">
                                      {Math.floor(a.duree / 60)} min
                                    </div>
                                  )}
                                </div>
                              </button>

                              {playingId === a.id && (
                                <div className="px-4 pb-3">
                                  <audio
                                    src={a.audio_url}
                                    controls
                                    autoPlay
                                    className="w-full h-10"
                                  />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Bouton télécharger (le premier récitateur disponible) */}
                  {hasAudio && (
                    <a
                      href={audiosSourate[0].audio_url}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Télécharger"
                      className="w-10 h-10 rounded-xl bg-gold/15 hover:bg-gold/25
                                 flex items-center justify-center text-gold
                                 transition shrink-0"
                    >
                      <IconDownload size={16} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Lien admin */}
      <div className="mt-12 text-center">
        <Link href="/admin/coran" className="text-xs text-gray-400 hover:text-emerald">
          + Gérer les audios du Coran (admin)
        </Link>
      </div>
    </main>
  );
}