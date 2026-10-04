"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LivresClient() {
  const [livres, setLivres] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from("livres").select("*");
      if (error) console.error(error);
      setLivres(data || []);
      setLoading(false);
    })();
  }, []);

  if (loading) return <div style={{ padding: 40 }}>Chargement...</div>;

  return (
    <div style={{ padding: 40 }}>
      <h1>Livres : {livres.length}</h1>
      {livres.map((l) => (
        <div key={l.id} style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
          <strong>{l.titre_fr}</strong>
          <br />
          <a href={`/livres/${l.slug}`}>Voir ce livre →</a>
        </div>
      ))}
    </div>
  );
}