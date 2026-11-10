import { EndMark } from "@/components/PageHeader";
import { BackLink, ListSkeleton, PageHeader, SearchField } from "@/components/ui";
import { IconParchemin, IconUser } from "@/components/icons";
    hasan: "bg-gold/15 text-gold-deep",
    <main className="page">
      <BackLink href="/dashboard" label="Retour" />

      <PageHeader title="Les Hadiths" subtitle="Les paroles du Prophète ﷺ authentiquement rapportées, avec traduction et explication." />
      <SearchField value={search} onChange={setSearch} placeholder="Rechercher par texte, source ou rapporteur..." />
      <div role="group" aria-label="Filtres" className="scrollbar-none -mx-4 mb-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            aria-pressed={filter === id} className="chip">
        <p className="text-sm text-muted mb-5">
        <ListSkeleton />
        <div className="bg-white rounded-2xl p-8 text-center border border-line">
          <p className="text-muted mb-2">Aucun hadith</p>
                className="bg-white rounded-2xl p-6 sm:p-8 border border-line
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase
                    <span className="text-xs text-muted">{h.source}</span>
                    <span className="text-xs text-muted inline-flex items-center gap-1">
                  <p className="text-ink/80 leading-relaxed mb-4">
                        <p className="text-sm text-ink/80 leading-relaxed whitespace-pre-line">
