import { prepareUpload } from "@/lib/security";
    let name: string;
    try { name = prepareUpload(file, "pdf"); }
    catch (e: any) { setUploading(false); alert(e.message); return; }
    let name: string;
    try { name = prepareUpload(file, "image", "cover-"); }
    catch (e: any) { setUploading(false); alert(e.message); return; }
          <p className="text-muted text-sm">{list.length} livre(s)</p>
                     hover:bg-emerald-dark transition">
        <p className="text-muted">Chargement...</p>
        <div className="bg-white rounded-2xl p-16 text-center border border-line">
          <p className="text-muted">Aucun livre</p>
            <div key={l.id} className="bg-white rounded-2xl overflow-hidden
                                       border border-line hover:shadow-lg transition">
                  <img loading="lazy" decoding="async" src={l.couverture_url} alt="" className="w-full h-full object-cover" />
                <div className="text-xs text-muted mb-3 truncate">{l.auteur_fr}</div>
                  <a href={l.pdf_url} target="_blank" rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg bg-gold/15 text-gold-deep hover:bg-gold/25">
          <div className="bg-white rounded-2xl w-full max-w-3xl my-8">
            <div className="sticky top-0 bg-white border-b border-line px-6 py-4
                className="text-muted hover:text-terracotta text-2xl leading-none">×</button>
                    }} className="field" />
                    className="field font-mono" />
                    className="field font-amiri" />
                    className="field" />
                    className="field" />
                    className="field font-amiri" />
                    className="field" />
                  className="field" />
                    className="field" />
                    className="field">
                    className="field" />
                    className="field" />
            <div className="sticky bottom-0 bg-white border-t border-line px-6 py-4
                className="px-6 py-3 rounded-2xl border border-line
      <label className="block text-xs font-semibold text-emerald-dark mb-1.5">
