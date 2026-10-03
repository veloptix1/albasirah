"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useLang } from "@/components/LangProvider";
import { IconBook } from "@/components/icons";

type Savant = {
  id: string;
  nom_fr: string;
  nom_ar: string | null;
  nom_en: string | null;
  bio_fr: string | null;
  photo_url: string | null;
};

export default function SavantsPage() {
  const { t, lang } = useLang();
  const [savants, setSavants] = useState<Savant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("savants").select("*").eq("type", "savant").order("ordre");
      setSavants(data || []);
      setLoading(false);
    })();
  }, []);

  const getName = (s: Savant) =>
    lang === "ar" ? s.nom_ar || s.nom_fr : lang === "en" ? s.nom_en || s.nom_fr : s.nom_fr;

  return (
    <main className="px-[6%] pt-24 pb-32 max-w-[1200px] mx-auto">
      <Link href="/audio" className="text-emerald text-sm font-semibold hover:underline">
        ← {t.common.back}
      </Link>

      <h1 className="font-amiri font-bold text-emerald-dark text-4xl my-6">
        {t.audio.bySavants}
      </h1>

      {loading ? (
        <p className="text-gray-400">{t.common.loading}</p>
      ) : savants.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-emerald/5">
          <p className="text-gray-400">{t.audio.empty}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {savants.map((s) => (
            <Link key={s.id} href={`/audio/savants/${s.id}`}
              className="bg-white rounded-3xl p-6 flex items-center gap-4
                         border border-emerald/5 hover:-translate-y-1
                         hover:shadow-[0_20px_40px_rgba(13,92,74,0.1)]
                         transition-all no-underline">
              <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center
                              overflow-hidden shrink-0">
                {s.photo_url ? (
                  <img src={s.photo_url} alt={getName(s)} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-emerald"><IconBook size={26} /></span>
                )}
              </div>
              <div className="min-w-0">
                <div className="font-bold text-emerald-dark text-base truncate">
                  {getName(s)}
                </div>
                <div className="text-xs text-gray-500 line-clamp-2">
                  {s.bio_fr || "—"}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}