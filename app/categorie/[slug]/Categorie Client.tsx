"use client";
import Link from "next/link";

const labels: Record<string, { fr: string; ar: string; en: string }> = {
  croyance:    { fr: "Croyance",              ar: "العقيدة",           en: "Belief" },
  priere:      { fr: "La Prière",             ar: "الصلاة",            en: "Prayer" },
  livre:       { fr: "Livre",                 ar: "الكتب",             en: "Books" },
  rapporteurs: { fr: "Rapporteurs Hadith",    ar: "رواة الحديث",       en: "Hadith Narrators" },
  prophetes:   { fr: "Histoire des Prophètes",ar: "قصص الأنبياء",      en: "Prophets' Stories" },
  saaba:       { fr: "Histoire des Sahaba",   ar: "قصص الصحابة",       en: "Companions' Stories" },
  biographie:  { fr: "Biographie des Savants",ar: "سير العلماء",       en: "Scholars' Biography" },
  tafsir:      { fr: "Tafsir",                ar: "التفسير",           en: "Tafsir" },
};

export default function CategorieClient({ slug }: { slug: string }) {
  const label = labels[slug] || { fr: slug, ar: slug, en: slug };

  return (
    <main className="px-[6%] pt-24 pb-40 max-w-[1200px] mx-auto min-h-screen">
      <Link href="/dashboard" className="text-emerald text-sm font-semibold hover:underline">
        ← Retour
      </Link>

      <div className="mt-8 mb-12">
        <h1 className="font-amiri font-bold text-emerald-dark text-4xl mb-3">
          {label.fr}
        </h1>
        <div className="w-24 h-1 bg-gold rounded-full" />
      </div>

      <div className="bg-white rounded-3xl p-16 text-center border border-emerald/5">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald/10 flex items-center justify-center text-emerald text-3xl">
          📖
        </div>
        <h2 className="font-bold text-emerald-dark text-xl mb-2">
          Bientôt disponible
        </h2>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Cette section sera bientôt remplie par l'administration.
        </p>
      </div>
    </main>
  );
}