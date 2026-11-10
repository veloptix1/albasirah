import { prepareUpload } from "@/lib/security";
    let name: string;
    try { name = prepareUpload(file, "audio"); }
    catch (e: any) { setUploading(false); alert(e.message); return; }
          <p className="text-muted text-sm">{list.length} audio(s)</p>
                     hover:bg-emerald-dark transition">
        className="field" />
        <p className="text-muted">Chargement...</p>
        <div className="bg-white rounded-2xl p-16 text-center border border-line">
          <p className="text-muted">Aucun audio</p>
        <div className="bg-white rounded-2xl border border-line overflow-hidden">
              <tr className="text-left text-xs font-bold text-emerald-dark">
                <tr key={a.id} className="border-t border-line hover:bg-cream/50">
                          <div className="text-xs text-muted truncate font-amiri" dir="rtl">
                  <td className="px-6 py-4 text-sm text-ink/80 hidden md:table-cell">
                  <td className="px-6 py-4 text-sm text-ink/80 hidden lg:table-cell">
          <div className="bg-white rounded-2xl w-full max-w-3xl my-8">
            <div className="sticky top-0 bg-white border-b border-line px-6 py-4
                className="text-muted hover:text-terracotta text-2xl leading-none">×</button>
                  className="field" />
                    className="field font-amiri" />
                    className="field" />
                  className="field" />
                    className="field">
                    className="field">
                  className="field" />
            <div className="sticky bottom-0 bg-white border-t border-line px-6 py-4
                className="px-6 py-3 rounded-2xl border border-line
      <label className="block text-xs font-semibold text-emerald-dark mb-1.5">
