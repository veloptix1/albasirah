"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useLang } from "@/components/LangProvider";
import { IconSpeaker, IconPlay } from "@/components/icons";

type Audio = {
  id: string;
  titre_fr: string;
  titre_ar: string | null;
  titre_en: string | null;
  audio_url: string;
  duree: number | null;
};

export default function CoranPage() {
  const { t, lang } = useLang();
  const [audios, setAudios] = useState<Audio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data: cat } = await supabase
        .from("audio_categories").select("id").eq("slug", "coran").single();
      if (!cat) { setLoading(false); return; }
      const { data } = await supabase
        .from("audios").select("*").eq("category_id", cat.id)
        .order("created_at", { ascending: false });
      setAudios(data || []);
      setLoading(false);
    })();
  }, []);

  const getTitle = (a: Audio) =>
    lang === "ar" ? a.titre_ar || a.titre_fr : lang === "en" ? a.titre_en || a.titre_fr : a.titre_fr;

  return (
    <main className="px-[6%] pt-24 pb-32 max-w-[1200px] mx-auto">
      <Link href="/audio" className="text-emerald text-sm font-semibold hover:underline">
        ← {t.common.back}
      </Link>

      <h1 className="font-amiri font-bold text-emerald-dark text-4xl my-6">
        {t.audio.quran}
      </h1>

      {loading ? (
        <p className="text-gray-400">{t.common.loading}</p>
      ) : audios.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-emerald/5">
          <span className="inline-block text-gold mb-3"><IconSpeaker size={40} /></span>
          <p className="text-gray-400">{t.audio.empty}</p>
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