          <p className="text-muted text-sm">{list.length} compagnon(s)</p>
        <p className="text-muted">Chargement...</p>
        <div className="bg-white rounded-2xl border border-line overflow-hidden">
              <tr className="text-left text-xs font-bold text-emerald-dark">
                <tr key={s.id} className="border-t border-line hover:bg-cream/50">
                    <div className="text-xs text-muted font-amiri" dir="rtl">{s.nom_ar}</div>
                  <td className="px-6 py-4 text-sm text-ink/80 hidden md:table-cell">{s.titre_fr || "—"}</td>
          <div className="bg-white rounded-2xl w-full max-w-3xl my-8">
            <div className="sticky top-0 bg-white border-b border-line px-6 py-4 flex items-center justify-between rounded-t-3xl">
              <button onClick={() => setEditing(null)} className="text-muted hover:text-terracotta text-2xl">×</button>
                    className="field" />
                    className="field font-mono" />
                    className="field font-amiri" />
                    className="field" />
                    className="field" />
                    className="field font-amiri" />
                  className="field" />
                    className="field" />
                    className="field" />
                  className="field" />
                  className="field font-mono" />
                  className="field font-mono" />
                  className="field" />
            <div className="sticky bottom-0 bg-white border-t border-line px-6 py-4 flex justify-end gap-3 rounded-b-3xl">
                className="px-6 py-3 rounded-2xl border border-line text-emerald-dark font-semibold text-sm">
      <label className="block text-xs font-semibold text-emerald-dark mb-1.5">{label}</label>
