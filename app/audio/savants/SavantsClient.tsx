import { ListSkeleton, PageHeader, SearchField } from "@/components/ui";
import { EndMark } from "@/components/PageHeader";
import { IconCrown, IconStarFull, IconLocation, IconCalendar, IconUser, IconSearch } from "@/components/icons";
    <main className="page">
      <PageHeader title={t.audio.bySavants} subtitle="Les savants de la Salafiya bien guidée — des anciens aux contemporains." back="/audio" backLabel={t.common.back} />
      <SearchField value={search} onChange={setSearch} placeholder="Rechercher un savant par nom, titre ou pays..." />
      <div role="group" aria-label="Filtres" className="scrollbar-none -mx-4 mb-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            aria-pressed={filter === id} className="chip">
        <ListSkeleton />
        <div className="bg-white rounded-2xl p-8 text-center border border-line">
          <p className="text-muted">Aucun savant trouvé</p>
                         border border-line
                  <img loading="lazy" decoding="async" src={s.photo_url} alt={getName(s)}
                    className="w-full h-full object-cover transition-transform duration-500" />
                <div aria-pressed={s.categorie === "classique"} className="chip">
                  <div className="font-amiri text-gold text-xs mb-0.5 leading-tight" dir="rtl">
                  <p className="text-xs text-muted mb-2 line-clamp-1">{getTitre(s)}</p>
                <div className="flex items-center gap-2 text-xs text-muted
                                mt-auto pt-2 border-t border-line">
