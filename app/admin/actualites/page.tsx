import { prepareUpload } from "@/lib/security";
    let name: string;
    try { name = prepareUpload(file, "image", "actu-"); }
    catch (e: any) { setUploading(false); alert(e.message); return; }
          <p className="text-muted text-sm">{list.length} actualité(s)</p>
                     hover:bg-emerald-dark transition">
        <p className="text-muted">Chargement...</p>
        <div className="bg-white rounded-2xl p-16 text-center border border-line">
          <p className="text-muted">Aucune actualité</p>
            <div key={a.id} className="bg-white rounded-2xl overflow-hidden border border-line">
                  <img loading="lazy" decoding="async" src={a.image_url} alt={a.titre} className="w-full h-full object-cover" />
                                  bg-terracotta text-white text-xs font-bold">
                <div className="flex items-center gap-2 text-xs text-muted mb-3">
                    className={`px-2.5 py-1 rounded-full text-xs font-bold
                      ${a.publie ? "bg-emerald/10 text-emerald" : "bg-gray-200 text-muted"}`}>
                    className={`px-2.5 py-1 rounded-full text-xs font-bold
                      ${a.epingle ? "bg-gold/20 text-gold" : "bg-gray-100 text-muted"}`}>
          <div className="bg-white rounded-2xl w-full max-w-3xl my-8">
            <div className="sticky top-0 bg-white border-b border-line px-6 py-4
                className="text-muted hover:text-terracotta text-2xl">×</button>
                  className="field" />
                    className="field" placeholder="Annonce, Événement, Fatwa..." />
                    className="field" />
                  <img loading="lazy" decoding="async" src={editing.image_url} alt="" className="mt-3 w-full max-h-48 object-cover rounded-xl" />
                  className="field" />
                  className="field" />
                  className="field" placeholder="Ex: Site officiel du comité..." />
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold transition
                        : "bg-white text-muted border-line"}`}>
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold transition
                        : "bg-white text-muted border-line"}`}>
            <div className="sticky bottom-0 bg-white border-t border-line px-6 py-4
                className="px-6 py-3 rounded-2xl border border-line
      <label className="block text-xs font-semibold text-emerald-dark mb-1.5">
