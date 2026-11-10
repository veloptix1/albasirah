import { EndMark } from "@/components/PageHeader";
import { BackLink, ListSkeleton, PageHeader, SearchField } from "@/components/ui";
import { IconUser, IconPlay, IconArrowRight } from "@/components/icons";
    <main className="page max-w-[1400px]">
      <BackLink href="/dashboard" label="Retour" />
      <PageHeader title="Nos vidéos" subtitle="Les conférences, cours et rappels des savants sur différents sujets." />

      <SearchField value={search} onChange={setSearch} placeholder="Rechercher une vidéo..." />
        <div role="group" aria-label="Filtres" className="scrollbar-none -mx-4 mb-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            aria-pressed={filterCategorie === "tous"} className="chip">
              aria-pressed={filterCategorie === cat} className="chip">
        <ListSkeleton />
        <div className="bg-white rounded-2xl p-8 text-center border border-line">
          <p className="text-muted mb-2">Aucune vidéo pour le moment</p>
                className="group bg-white rounded-2xl overflow-hidden
                           border border-line
                  <img loading="lazy" decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500"
                                    shadow-lg transition">
                                    bg-black/80 text-white text-xs font-semibold">
                                    bg-gold text-emerald-dark text-xs font-bold">
                    <p className="text-xs text-muted line-clamp-2 mb-3">{v.description}</p>
                                  border-t border-line">
