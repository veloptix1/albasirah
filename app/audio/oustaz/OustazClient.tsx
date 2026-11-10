import { EndMark } from "@/components/PageHeader";
import { ListSkeleton, PageHeader, SearchField } from "@/components/ui";
import { IconLocation, IconCalendar, IconDiploma } from "@/components/icons";
    <main className="page">
      <PageHeader title="Par nos Oustaz" subtitle="Les enseignants et professeurs qui transmettent le savoir islamique." back="/audio" backLabel="{t.common.back}" />
        <SearchField value={search} onChange={setSearch} placeholder="Rechercher un oustaz..." />
        <p className="text-sm text-muted mb-5">
        <ListSkeleton />
        <div className="bg-white rounded-2xl p-8 text-center border border-line">
          <p className="text-muted mb-2">
                         border border-line
                  <img loading="lazy" decoding="async" src={o.photo_url} alt={getName(o)}
                    className="w-full h-full object-cover transition-transform duration-500" />
                                text-xs font-bold">
                  <div className="font-amiri text-gold text-xs mb-0.5 leading-tight"
                  <p className="text-xs text-muted mb-2 line-clamp-1">
                <div className="flex items-center gap-2 text-xs text-muted
                                mt-auto pt-2 border-t border-line">
