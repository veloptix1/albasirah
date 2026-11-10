import { BackLink } from "@/components/ui";
import { safeUrl } from "@/lib/security";
import { EndMark } from "@/components/PageHeader";
  if (loading) return <div className="min-h-dvh flex items-center justify-center bg-cream"><p className="text-emerald">Chargement...</p></div>;
    <main className="page text-center">
      <BackLink href="/livres" label="Retour aux livres" />
  const pdfUrl = safeUrl(livre.pdf_url) ?? "#";
  const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
    <main className="page">
      <BackLink href="/livres" label="Retour aux livres" />
        <div className="bg-gradient-to-br from-emerald to-emerald-dark rounded-2xl
                        overflow-hidden">
            <img loading="lazy" decoding="async" src={livre.couverture_url} alt={getTitre()}
              <div className="text-xs font-semibold opacity-70">
                            bg-emerald/8 text-emerald text-xs font-bold mb-3">
            <div className="flex items-center gap-2 text-ink/80 mb-6">
          <div className="flex flex-wrap gap-4 text-xs text-muted mb-6">
            <p className="text-ink/80 text-sm leading-relaxed whitespace-pre-line mb-8">
                         hover:bg-emerald-dark transition-all">
              href={pdfUrl}
                         border border-line
        <div className="bg-white rounded-2xl overflow-hidden border border-line">
          <div className="px-6 py-4 border-b border-line flex items-center justify-between">
              className="text-muted hover:text-terracotta text-sm font-semibold">
              sandbox="allow-scripts allow-same-origin allow-popups"
              referrerPolicy="no-referrer"
          <div className="px-6 py-3 border-t border-line bg-cream text-center">
            <p className="text-xs text-muted">
              Si le PDF ne s'affiche pas, <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-emerald font-semibold hover:underline">cliquez ici pour l'ouvrir dans un nouvel onglet</a>.
