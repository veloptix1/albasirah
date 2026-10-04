"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LivreClient({ slug }: { slug: string }) {
  const [livre, setLivre] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("livres")
        .select("*")
        .eq("slug", slug)
        .limit(1);
      setLivre(data && data.length > 0 ? data[0] : null);
      setLoading(false);
    })();
  }, [slug]);

  if (loading) return <div style={{ padding: 40 }}>Chargement...</div>;
  if (!livre) return <div style={{ padding: 40 }}>Livre introuvable : {slug}</div>;

  return (
    <div style={{ padding: 40 }}>
      <h1>{livre.titre_fr}</h1>
      <p>{livre.auteur_fr}</p>
      {livre.pdf_url && (
        <a href={livre.pdf_url} target="_blank" rel="noopener noreferrer">
          Ouvrir le PDF
        </a>
      )}
    </div>
  );
}