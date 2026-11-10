import { BackLink, ListSkeleton, PageHeader, SearchField } from "@/components/ui";
import { EndMark } from "@/components/PageHeader";
import { IconPlay, IconArrowRight } from "@/components/icons";
    <main className="page">
      <PageHeader
        title="Coran"
        subtitle={`114 sourates — écoutez, lisez et téléchargez avec ${RECITATEURS.length} récitateurs.`}
        back="/audio"
      />
      <SearchField value={search} onChange={setSearch} placeholder="Rechercher par numéro, nom français, arabe ou translittération..." />
              aria-pressed={filterType === t} className="chip">
            aria-label="Trier"
            className="field w-auto appearance-none pr-9">
      <p className="text-sm text-muted mb-5">
        <ListSkeleton />
        <div className="bg-white rounded-2xl p-8 text-center border border-line">
          <p className="text-muted">Aucune sourate trouvée</p>
              className="bg-white rounded-2xl border border-line
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-xs
                                  text-muted mt-0.5">
                    <span aria-pressed={s.type === "Mecquoise"} className="chip">
                              transition shrink-0 border
                                   text-xs font-bold flex items-center justify-center
                                   border border-white leading-none">
          role="dialog" aria-modal="true" aria-label="Récitateurs disponibles"
          className="fixed inset-0 z-[999] bg-black/60
            className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-2xl
                       max-h-[80vh] overflow-hidden flex flex-col"
            <div className="px-5 py-4 border-b border-line flex items-center justify-between shrink-0">
                <div className="text-xs font-bold text-gold">
                <div key={r.slug} className="border-b border-line last:border-0">
                      <div className="text-xs text-muted mt-0.5">{r.pays}</div>
