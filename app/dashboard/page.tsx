"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useLang } from "@/components/LangProvider";
import { IconUser, IconSpeaker, IconBook, IconStar } from "@/components/icons";

const categories = [
  { key: "croyance",    slug: "croyance",    emoji: "🕌", color: "emerald" },
  { key: "priere",      slug: "priere",      emoji: "🕋", color: "gold" },
  { key: "livre",       slug: "livre",       emoji: "📚", color: "terracotta" },
  { key: "rapporteurs", slug: "rapporteurs", emoji: "📜", color: "indigo" },
  { key: "prophetes",   slug: "prophetes",   emoji: "🌟", color: "emerald" },
  { key: "saaba",       slug: "saaba",       emoji: "🤝", color: "gold" },
  { key: "biographie",  slug: "biographie",  emoji: "👤", color: "terracotta" },
  { key: "tafsir",      slug: "tafsir",      emoji: "📖", color: "indigo" },
] as const;

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  emerald:    { bg: "bg-emerald/10",    text: "text-emerald",    border: "hover:border-emerald" },
  gold:       { bg: "bg-gold/15",       text: "text-gold",       border: "hover:border-gold" },
  terracotta: { bg: "bg-terracotta/10", text: "text-terracotta", border: "hover:border-terracotta" },
  indigo:     { bg: "bg-indigo/10",     text: "text-indigo",     border: "hover:border-indigo" },
};

export default function DashboardPage() {
  const router = useRouter();
  const { t } = useLang();
  const [nom, setNom] = useState("");
  const [loading, setLoading] = useState(true);

  // Auth guard : redirige vers /auth si non connecté
  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/auth");
        return;
      }
      const { data } = await supabase
        .from("profiles").select("nom").eq("id", user.id).single();
      setNom(data?.nom || "Utilisateur");
      setLoading(false);
    })();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-emerald">{t.common.loading}</p>
      </div>
    );
  }

  // Raccourcis perso
  const shortcuts = [
    { icon: IconSpeaker, label: "Audio",      href: "/audio",   color: "emerald" },
    { icon: IconBook,    label: "Hadiths",    href: "/hadiths", color: "gold" },
    { icon: IconStar,    label: "Favoris",    href: "/favoris", color: "terracotta" },
    { icon: IconUser,    label: "Mon Profil", href: "/profil",  color: "indigo" },
  ];

  return (
    <main className="px-[6%] pt-28 pb-32 max-w-[1200px] mx-auto min-h-screen">
      {/* Salutation */}
      <div className="mb-10">
        <p className="text-gold font-semibold text-sm mb-1">Assalamu alaykum</p>
        <h1 className="font-amiri font-bold text-emerald-dark text-4xl">
          {nom}
        </h1>
      </div>

      {/* Raccourcis rapides */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {shortcuts.map(({ icon: Icon, label, href, color }) => (
          <Link key={href} href={href}
            className="bg-white rounded-3xl p-5 flex flex-col items-center text-center
                       border border-emerald/5 hover:-translate-y-1
                       hover:shadow-[0_20px_40px_rgba(13,92,74,0.1)]
                       transition-all no-underline">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3
                            ${colorMap[color].bg} ${colorMap[color].text}`}>
              <Icon size={22} />
            </div>
            <div className="font-bold text-emerald-dark text-sm">{label}</div>
          </Link>
        ))}
      </div>

      {/* Les 8 catégories */}
      <div className="mb-6">
        <h2 className="font-amiri font-bold text-emerald-dark text-2xl">
          {t.home.categories}
        </h2>
        <p className="text-gray-500 text-sm">{t.home.categoriesSubtitle}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map(({ key, slug, emoji, color }) => {
          const c = colorMap[color];
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
                {(t.categories as any)[key]}
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}