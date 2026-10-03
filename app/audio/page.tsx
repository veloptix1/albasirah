"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useLang } from "@/components/LangProvider";
import { IconSpeaker, IconBook, IconUser, IconPlay } from "@/components/icons";

type Savant = { id: string; nom_fr: string; nom_ar: string | null; nom_en: string | null; type: string; photo_url: string | null };
type Audio = { id: string; titre_fr: string; titre_ar: string | null; titre_en: string | null; audio_url: string; duree: number | null; savant_id: string | null };

const sections = [
  { id: "savants", icon: IconBook,   titleKey: "bySavants", color: "emerald", href: "/audio/savants" },
  { id: "oustaz",  icon: IconUser,   titleKey: "byOustaz",  color: "terracotta", href: "/audio/oustaz" },
  { id: "coran",   icon: IconSpeaker, titleKey: "quran",    color: "gold", href: "/audio/coran" },
] as const;

export default function AudioPage() {
  const { t, lang } = useLang();
  const router = useRouter();
  const [savants, setSavants] = useState<Savant[]>([]);
  const [audios, setAudios] = useState<Audio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const [s, a] = await Promise.all([
        supabase.from("savants").select("*").order("ordre"),
        supabase.from("audios").select("*").order("created_at", { ascending: false }).limit(20),
      ]);
      setSavants(s.data || []);
      setAudios(a.data || []);
      setLoading(false);
    })();
  }, []);

  const getName = (s: Savant) =>
    lang === "ar" ? s.nom_ar || s.nom_fr : lang === "en" ? s.nom_en || s.nom_fr : s.nom_fr;

  const getTitle = (a: Audio) =>
    lang === "ar" ? a.titre_ar || a.titre_fr : lang === "en" ? a.titre_en || a.titre_fr : a.titre_fr;

  return (
    <main className="px-[6%] pt-24 pb-32 max-w-[1200px] mx-auto">
      <div className="mb-10">
        <h1 className="font-amiri font-bold text-emerald-dark text-4xl mb-2">
          {t.audio.title}
        </h1>
        <p className="text-gray-500">{t.audio.subtitle}</p>
      </div>

      {/* 3 catégories principales */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {sections.map(({ id, icon: Icon, titleKey, color, href }) => {
          const colorMap = {
            emerald: { bg: "bg-emerald/10", text: "text-emerald" },
            terracotta: { bg: "bg-terracotta/10", text: "text-terracotta" },
            gold: { bg: "bg-gold/15", text: "text-gold" },
          }[color];
          return (
            <Link key={id} href={href}
              className="bg-white rounded-3xl p-6 flex items-center gap-4
                         border border-emerald/5 hover:-translate-y-1
                         hover:shadow-[0_20px_40px_rgba(13,92,74,0.1)]
                         transition-all no-underline">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colorMap.bg} ${colorMap.text}`}>
                <Icon size={26} />
              </div>
              <div className="flex-1">
                <div className="font-bold text-emerald-dark text-base">
                  {t.audio[titleKey]}
                </div>
                <div className="text-xs text-gray-500">
                  {savants.filter(s => s.type === (id === "coran" ? "coran" : id)).length} audio(s)
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Derniers audios */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-bold text-emerald-dark text-xl">{t.nav.new}</h2>
      </div>

      {loading ? (
        <p className="text-gray-400">{t.common.loading}</p>
      ) : audios.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-emerald/5">
          <p className="text-gray-400 mb-3">{t.audio.empty}</p>
          <Link href="/admin/audios"
            className="text-emerald text-sm font-semibold hover:underline">
            + Ajouter un audio (admin)
          </Link>
        </div>
      ) : (
        <div className="grid gap-3">
          {audios.map((a) => (
            <div key={a.id}
              className="bg-white rounded-2xl p-4 flex items-center gap-4
                         hover:shadow-[0_10px_30px_rgba(13,92,74,0.08)] transition">
              <div className="w-11 h-11 rounded-full bg-gold flex items-center justify-center shrink-0">
                <IconPlay size={14} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-emerald-dark text-sm truncate">
                  {getTitle(a)}
                </div>
                {a.duree && (
                  <div className="text-xs text-gray-500">
                    {Math.floor(a.duree / 60)} {t.audio.minutes}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}