import { BackLink } from "@/components/ui";
import { safeUrl } from "@/lib/security";
import { EndMark } from "@/components/PageHeader";
    <main className="page max-w-[900px]">
      <BackLink href="/dashboard" label="Retour" />
        <h1 className="font-amiri font-bold text-emerald-dark text-[1.75rem] leading-tight sm:text-4xl mb-3">
        <p className="text-muted max-w-2xl mx-auto">
        <p className="text-muted text-center">Chargement...</p>
          <div className="bg-white rounded-2xl p-6 border border-line">
            <p className="text-sm text-muted mb-4">
                    <span className="text-xs text-muted">{android.taille}</span>
                  <p className="text-xs text-muted mb-4 leading-relaxed">
                <a href={safeUrl(android.download_url) ?? "#"} target="_blank" rel="noopener noreferrer"
              <p className="text-sm text-muted">Aucune version disponible</p>
          <div className="bg-white rounded-2xl p-6 border border-line">
            <p className="text-sm text-muted mb-4">
                    <span className="text-xs text-muted">{ios.taille}</span>
                  <p className="text-xs text-muted mb-4 leading-relaxed">
                <a href={safeUrl(ios.download_url) ?? "#"} target="_blank" rel="noopener noreferrer"
              <p className="text-sm text-muted">Bientôt disponible</p>
      <div className="mt-12 bg-emerald/5 rounded-2xl p-6 sm:p-8 border border-line">
