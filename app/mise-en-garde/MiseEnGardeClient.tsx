import { EndMark } from "@/components/PageHeader";
import { ListSkeleton, PageHeader, SearchField } from "@/components/ui";
import { IconUser } from "@/components/icons";
    <main className="page">

      <PageHeader title="Mise en garde" subtitle="Les mises en garde des savants de la Salafiya contre les personnes, groupes et sectes déviantes — avec preuves et sources." back="/dashboard" />
      <SearchField value={search} onChange={setSearch} placeholder="Rechercher par nom, savant ou raison..." />
        <div role="group" aria-label="Filtres" className="scrollbar-none -mx-4 mb-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            aria-pressed={filterSavant === "tous"} className="chip">
                aria-pressed={filterSavant === sid} className="chip">
        <ListSkeleton />
        <div className="bg-white rounded-2xl p-8 text-center border border-line">
          <p className="text-muted mb-2">Aucune mise en garde pour le moment</p>
                className="bg-white rounded-2xl overflow-hidden border border-line
                      <img loading="lazy" decoding="async" src={m.cible_photo_url} alt={m.cible_nom}
                                    bg-terracotta text-white text-xs font-bold">
                                   text-gold mb-3
                      <p className="text-sm text-muted mb-4">
                        <div className="text-xs font-bold text-terracotta mb-2">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted mt-auto pt-3 border-t border-line">
