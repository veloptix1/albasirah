"use client";
import { use } from "react";
import Link from "next/link";
import { useLang } from "@/components/LangProvider";

export default function CategoriePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { t } = useLang();

  // Récupère la traduction si elle existe
  const categoryName = (t.categories as any)[slug] || slug;

  return (
    <main className="px-[6%] pt-28 pb-32 max-w-[1200px] mx-auto min-h-screen">
      <Link href="/" className="text-emerald text-sm font-semibold hover:underline">
        ← {t.common.back}
      </Link>

      <div className="mt-8 mb-12">
        <h1 className="font-amiri font-bold text-emerald-dark text-4xl mb-3">
          {categoryName}
        </h1>
        <div className="w-24 h-1 bg-gold rounded-full" />
      </div>

      <div className="bg-white rounded-3xl p-16 text-center border border-emerald/5">
        <div className="text-6xl mb-5">📖</div>
        <h2 className="font-bold text-emerald-dark text-xl mb-2">
          {t.common.loading}
        </h2>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Cette section sera bientôt remplie par l'administration.
        </p>
      </div>
    </main>
  );
}