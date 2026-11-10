import { EndMark } from "@/components/PageHeader";
import { BackLink, ListSkeleton, PageHeader, SearchField } from "@/components/ui";
import { IconArrowRight } from "@/components/icons";
    <main className="page">
      <BackLink href="/dashboard" label="Retour" />
      <PageHeader title="Les Prophètes" subtitle="Les 25 prophètes mentionnés dans le Coran — avec leurs passages coraniques, les hadiths authentiques et les paroles des savants." />
      <SearchField value={search} onChange={setSearch} placeholder="Rechercher un prophète..." />
        <ListSkeleton />
        <div className="bg-white rounded-2xl p-8 text-center border border-line">
          <p className="text-muted">Aucun prophète trouvé</p>
                         border border-line
                                flex items-center justify-center text-gold font-amiri font-bold text-2xl transition">
                <p className="text-xs text-muted text-center line-clamp-2 mb-3">
                              group-hover:gap-2 transition-all mt-auto pt-3 border-t border-line">
