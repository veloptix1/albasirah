"use client";
import Link from "next/link";
import { useLang } from "./LangProvider";

const categories = [
  { key: "croyance",   slug: "croyance",   emoji: "🕌", color: "emerald" },
  { key: "priere",     slug: "priere",     emoji: "🕋", color: "gold" },
  { key: "livre",      slug: "livre",      emoji: "📚", color: "terracotta" },
  { key: "rapporteurs",slug: "rapporteurs",emoji: "📜", color: "indigo" },
  { key: "prophetes",  slug: "prophetes",  emoji: "🌟", color: "emerald" },
  { key: "saaba",      slug: "saaba",      emoji: "🤝", color: "gold" },
  { key: "biographie", slug: "biographie", emoji: "👤", color: "terracotta" },
  { key: "tafsir",     slug: "tafsir",     emoji: "📖", color: "indigo" },
] as const;

export default function CategoryGrid() {
  const { t } = useLang();

  const colors: Record<string, { bg: string; text: string; border: string }> = {
    emerald:    { bg: "bg-emerald/10",       text: "text-emerald",    border: "hover:border-emerald" },
    gold:       { bg: "bg-gold/15",          text: "text-gold",       border: "hover:border-gold" },
    terracotta: { bg: "bg-terracotta/10",    text: "text-terracotta", border: "hover:border-terracotta" },
    indigo:     { bg: "bg-indigo/10",        text: "text-indigo",     border: "hover:border-indigo" },
  };

  return (
    <section className="px-[6%] py-16 max-w-[1200px] mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-amiri font-bold text-emerald-dark text-[clamp(1.8rem,4vw,2.6rem)] mb-2">
          {t.home.categories}
        </h2>
        <p className="text-gray-500">{t.home.categoriesSubtitle}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map(({ key, slug, emoji, color }) => {
          const c = colors[color];
          return (
            <Link
              key={key}
              href={`/categorie/${slug}`}
              className={`bg-white rounded-3xl p-6 flex flex-col items-center text-center
                          border-2 border-transparent ${c.border}
                          hover:-translate-y-1.5
                          hover:shadow-[0_20px_40px_rgba(13,92,74,0.12)]
                          transition-all no-underline group`}
            >
              <div className={`w-16 h-16 rounded-2xl ${c.bg} flex items-center justify-center
                              text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                {emoji}
              </div>
              <div className={`font-bold text-sm ${c.text} leading-tight`}>
                {t.categories[key]}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}