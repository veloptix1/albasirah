import { EndMark } from "@/components/PageHeader";
import { BackLink } from "@/components/ui";
import { IconUser, IconLocation, IconCalendar, IconSpeaker, IconPlay, IconStar, IconCrown, IconStarFull, IconBook } from "@/components/icons";
  if (loading) return <div className="min-h-dvh flex items-center justify-center bg-cream"><p className="text-emerald">Chargement...</p></div>;
    <main className="page text-center">
      <BackLink href="/audio/oustaz" label="Retour aux oustaz" />
    <main className="page">
      <BackLink href="/audio/oustaz" label="Retour aux oustaz" />
      <div className="mt-6 mb-12 bg-white rounded-2xl overflow-hidden border border-line">
              <div className={`w-32 h-32 rounded-2xl shrink-0 overflow-hidden border-4 border-white flex items-center justify-center ${isClassique ? "bg-gold" : "bg-gradient-to-br from-emerald to-emerald-dark"}`}>
                {savant.photo_url ? <img loading="lazy" decoding="async" src={savant.photo_url} alt={getName()} className="w-full h-full object-cover" /> : <span className={isClassique ? "text-emerald-dark" : "text-gold"}><IconUser size={48} /></span>}
                {getTitre() && <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${isClassique ? "bg-gold/15 text-gold-deep" : "bg-emerald/10 text-emerald"}`}>
            <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-muted mt-6 pt-6 border-t border-line justify-center sm:justify-start">
          <div className="bg-cream rounded-2xl p-6 sm:p-8 border border-line">
              <div className="text-xs font-bold text-gold">Biographie</div>
            <p className="text-ink/80 text-sm leading-relaxed whitespace-pre-line">{getBio()}</p>
          <p className="text-muted text-sm">{audios.length} audio{audios.length > 1 ? "s" : ""}</p>
        <div className="bg-white rounded-2xl p-16 text-center border border-line">
          <p className="text-muted">Aucun audio pour le moment</p>
              className="bg-white rounded-2xl p-4 border border-line
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shrink-0">
                  <div className="text-xs text-muted">
