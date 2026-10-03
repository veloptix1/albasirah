"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

const categories = [
  { slug: "croyance",    emoji: "🕌", label: "Croyance" },
  { slug: "priere",      emoji: "🕋", label: "La Prière" },
  { slug: "livre",       emoji: "📚", label: "Livre" },
  { slug: "rapporteurs", emoji: "📜", label: "Rapporteurs Hadith" },
  { slug: "prophetes",   emoji: "🌟", label: "Histoire des Prophètes" },
  { slug: "saaba",       emoji: "🤝", label: "Histoire des Sahaba" },
  { slug: "biographie",  emoji: "👤", label: "Biographie des Savants" },
  { slug: "tafsir",      emoji: "📖", label: "Tafsir" },
];

export default function DashboardPage() {
  const router = useRouter();
  const [nom, setNom] = useState("");
  const [loading, setLoading] = useState(true);

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
        <p className="text-emerald">Chargement...</p>
      </div>
    );
  }

  return (
    <main className="px-[6%] pt-28 pb-32 max-w-[1200px] mx-auto min-h-screen">
      <div className="mb-10">
        <p className="text-gold font-semibold text-sm mb-1">Assalamu alaykum</p>
        <h1 className="font-amiri font-bold text-emerald-dark text-4xl">
          {nom}
        </h1>
      </div>

      <h2 className="font-amiri font-bold text-emerald-dark text-2xl mb-5">
        Nos catégories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/categorie/${c.slug}`}
            className="bg-white rounded-3xl p-6 flex flex-col items-center text-center
                       border-2 border-transparent hover:border-emerald
                       hover:-translate-y-1.5
                       hover:shadow-[0_20px_40px_rgba(13,92,74,0.12)]
                       transition-all no-underline group"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald/10 flex items-center justify-center
                            text-3xl mb-4 group-hover:scale-110 transition-transform">
              {c.emoji}
            </div>
            <div className="font-bold text-sm text-emerald leading-tight">
              {c.label}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}