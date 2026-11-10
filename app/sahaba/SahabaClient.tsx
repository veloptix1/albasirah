import { EndMark } from "@/components/PageHeader";
import { BackLink, ListSkeleton, PageHeader, SearchField } from "@/components/ui";
import { IconArrowRight } from "@/components/icons";
    <main className="page">

      <BackLink href="/dashboard" label="Retour" />


      <PageHeader title="Les Sahaba" subtitle="Biographies des Compagnons du Prophète ﷺ — uniquement basées sur le Coran, les hadiths authentiques et les paroles des savants de la Salafiya." />

      <SearchField value={search} onChange={setSearch} placeholder="Rechercher un Sahaba..." />
        <ListSkeleton />
        <div className="bg-white rounded-2xl p-8 text-center border border-line">
          <p className="text-muted">Aucun Sahaba trouvé</p>
                         border border-line
                              mb-4 transition">
                <p className="text-xs text-muted line-clamp-2 mb-4">
                              group-hover:gap-2.5 transition-all mt-auto pt-3 border-t border-line">
