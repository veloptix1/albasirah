import { EndMark } from "@/components/PageHeader";
import { BackLink } from "@/components/ui";
import { safeYoutubeId } from "@/lib/security";
  if (loading) return <div className="min-h-dvh flex items-center justify-center bg-cream"><p className="text-emerald">Chargement...</p></div>;
    <main className="page text-center">
      <BackLink href="/live" label="Retour aux vidéos" />
    <main className="page">
      <BackLink href="/live" label="Retour aux vidéos" />
      <div className="mt-6 mb-6 bg-black rounded-2xl overflow-hidden">
            src={`https://www.youtube-nocookie.com/embed/${safeYoutubeId(video.youtube_video_id) ?? ""}?autoplay=1&rel=0`}
            referrerPolicy="strict-origin-when-cross-origin"
          <div className="inline-block px-3 py-1 rounded-full bg-gold/15 text-gold-deep
                          text-xs font-bold mb-3">
          <div className="bg-cream rounded-2xl p-5 border border-line">
                  <img loading="lazy" decoding="async" src={`https://img.youtube.com/vi/${v.youtube_video_id}/hqdefault.jpg`}
                    className="w-full h-full object-cover transition" />
