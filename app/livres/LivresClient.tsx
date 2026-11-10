import { EndMark } from "@/components/PageHeader";
import { ListSkeleton, PageHeader, SearchField } from "@/components/ui";
import { IconLivre, IconUser } from "@/components/icons";
    <main className="page">
      <PageHeader title="Nos Livres" subtitle="Découvrez, lisez en ligne ou téléchargez les livres islamiques de nos savants." back="/dashboard" />
      <SearchField value={search} onChange={setSearch} placeholder="Rechercher un livre par titre ou auteur..." />
        <div role="group" aria-label="Filtres" className="scrollbar-none -mx-4 mb-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            aria-pressed={filter === "tous"} className="chip">
              aria-pressed={filter === cat} className="chip">
        <p className="text-sm text-muted mb-5">
        <ListSkeleton />
        <div className="bg-white rounded-2xl p-8 text-center border border-line">
          <p className="text-muted mb-2">Aucun livre trouvé</p>
                         border border-line
                  <img loading="lazy" decoding="async" src={l.couverture_url} alt={getTitre(l)}
                    className="w-full h-full object-cover transition-transform duration-500" />
                                text-xs font-bold">
                                  text-xs font-bold">
                  <div className="font-amiri text-gold text-xs mb-0.5 leading-tight"
                  <div className="text-xs text-muted inline-flex items-center gap-1
                                  mt-auto pt-2 border-t border-line line-clamp-1">
