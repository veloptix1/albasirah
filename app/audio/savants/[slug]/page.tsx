"use client";
import { useEffect, useState, use } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function SavantPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [savant, setSavant] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data, error } = await supabase
          .from("savants")
          .select("*")
          .eq("slug", slug)
          .maybeSingle();

        if (error) setError("Erreur : " + error.message);
        else if (!data) setError("Aucun savant trouvé avec le slug : " + slug);
        else setSavant(data);
      } catch (e: any) {
        setError("Exception : " + e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-emerald">Chargement...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-[6%] pt-32 pb-32 max-w-[800px] mx-auto text-center">
        <h1 className="text-2xl font-bold text-terracotta mb-4">Problème</h1>
        <p className="text-gray-600 mb-6">{error}</p>
        <Link href="/audio/savants" className="text-emerald font-semibold hover:underline">
          ← Retour aux savants
        </Link>
      </div>
    );
  }

  return (
    <div className="px-[6%] pt-24 pb-40 max-w-[900px] mx-auto">
      <Link href="/audio/savants" className="text-emerald text-sm font-semibold hover:underline">
        ← Retour aux savants
      </Link>

      <div className="mt-8 bg-white rounded-3xl p-8 border border-emerald/5">
        {savant.nom_ar && (
          <div className="font-amiri text-gold text-2xl mb-2" dir="rtl">
            {savant.nom_ar}
          </div>
        )}
        <h1 className="font-amiri font-bold text-emerald-dark text-3xl mb-3">
          {savant.nom_fr}
        </h1>
        {savant.titre_fr && (
          <p className="text-sm text-gray-600 mb-4">{savant.titre_fr}</p>
        )}
        {savant.pays && (
          <p className="text-sm text-gray-500 mb-2">Pays : {savant.pays}</p>
        )}
        {savant.naissance && (
          <p className="text-sm text-gray-500 mb-4">
            {savant.naissance} {savant.deces && `— ${savant.deces}`}
          </p>
        )}
        {savant.bio_fr && (
          <p className="text-gray-600 leading-relaxed whitespace-pre-line mt-6">
            {savant.bio_fr}
          </p>
        )}
      </div>
    </div>
  );
}