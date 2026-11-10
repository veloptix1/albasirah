import { BackLink, ListSkeleton, PageHeader, SearchField } from "@/components/ui";
import { EndMark } from "@/components/PageHeader";
import { IconArrowRight } from "@/components/icons";
    <main className="page">

      <BackLink href="/dashboard" label="Retour" />


      <PageHeader title="Rapporteurs de Hadiths" subtitle="Les grands rapporteurs (rawî) des hadiths authentiques du Prophète ﷺ, avec leurs biographies, leurs apports et les avis des savants." />

      <SearchField value={search} onChange={setSearch} placeholder="Rechercher un rapporteur..." />
        <ListSkeleton />
        <div className="bg-white rounded-2xl p-8 text-center border border-line">
          <p className="text-muted">Aucun rapporteur trouvé</p>
                         border border-line
                              mb-4 transition">
                <p className="text-xs text-muted line-clamp-2 mb-3">{getTitre(r)}</p>
                                bg-gold/15 text-gold-deep text-xs font-bold mb-3 w-fit">
                              group-hover:gap-2.5 transition-all mt-auto pt-3 border-t border-line">
