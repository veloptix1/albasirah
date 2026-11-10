import { BackLink, ListSkeleton, PageHeader, SearchField } from "@/components/ui";
import { EndMark } from "@/components/PageHeader";
import { IconArrowRight } from "@/components/icons";
    <main className="page">

      <BackLink href="/dashboard" label="Retour" />


      <PageHeader title="Nouveau" subtitle="Les dernières actualités et nouvelles islamiques — annonces, événements, publications et nouvelles des savants." />
      <SearchField value={search} onChange={setSearch} placeholder="Rechercher une actualité..." />
        <div role="group" aria-label="Filtres" className="scrollbar-none -mx-4 mb-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            aria-pressed={filterCat === "tous"} className="chip">
              aria-pressed={filterCat === cat} className="chip">
        <ListSkeleton />
        <div className="bg-white rounded-2xl p-8 text-center border border-line">
          <p className="text-muted mb-2">Aucune actualité pour le moment</p>
                         border border-line
                  <img loading="lazy" decoding="async" src={a.image_url} alt={a.titre}
                    className="w-full h-full object-cover transition-transform duration-500" />
                                  bg-terracotta text-white text-xs font-bold flex items-center gap-1">
                                  bg-white/95 text-emerald-dark text-xs font-bold">
                <div className="flex items-center gap-2 text-xs text-muted mb-2">
                  <p className="text-xs text-muted line-clamp-3 mb-3">
                                border-t border-line">
