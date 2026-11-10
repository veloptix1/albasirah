import { prepareUpload } from "@/lib/security";
    let name: string;
    try { name = prepareUpload(file, "image", "mise-"); }
    catch (e: any) { setUploading(false); alert(e.message); return; }
          <p className="text-muted text-sm">{list.length} mise(s) en garde</p>
                     hover:opacity-90 transition">
        <p className="text-muted">Chargement...</p>
        <div className="bg-white rounded-2xl p-16 text-center border border-line">
          <p className="text-muted">Aucune mise en garde</p>
        <div className="bg-white rounded-2xl border border-line overflow-hidden">
              <tr className="text-left text-xs font-bold text-emerald-dark">
                <tr key={m.id} className="border-t border-line hover:bg-cream/50">
                          <img loading="lazy" decoding="async" src={m.cible_photo_url} alt="" className="w-full h-full object-cover" />
                  <td className="px-6 py-4 text-sm text-ink/80 hidden md:table-cell">
                                       text-xs font-bold">
          <div className="bg-white rounded-2xl w-full max-w-3xl my-8">
            <div className="sticky top-0 bg-white border-b border-line px-6 py-4
                className="text-muted hover:text-terracotta text-2xl leading-none">×</button>
                  className="field">
                  className="field" placeholder="Personne, groupe ou secte" />
                  className="field" />
                  <img loading="lazy" decoding="async" src={editing.cible_photo_url} alt="" className="mt-3 w-32 h-32 object-cover rounded-xl" />
                  className="field" />
                  className="field font-amiri" />
                  className="field" />
                  className="field" placeholder="Réfutation de..., cassette n°..., etc." />
                  className="field" placeholder="Secte, Personne, Groupe..." />
            <div className="sticky bottom-0 bg-white border-t border-line px-6 py-4
                className="px-6 py-3 rounded-2xl border border-line
      <label className="block text-xs font-semibold text-emerald-dark mb-1.5">
