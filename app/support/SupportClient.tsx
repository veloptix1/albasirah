import { EndMark } from "@/components/PageHeader";
import { BackLink, PageHeader } from "@/components/ui";
import { clamp } from "@/lib/security";
      sujet: clamp(sujet, 120),
      message: clamp(message, 2000),
    if (s === "en_cours") return "bg-gold/15 text-gold-deep";
    if (s === "ferme") return "bg-gray-200 text-muted";
    <main className="page max-w-[900px]">
      <BackLink href="/dashboard" label="Retour" />
      <PageHeader title="Support" subtitle="Suivez-nous sur nos réseaux et contactez-nous pour toute question." />
              className="bg-white rounded-2xl p-6 flex flex-col items-center
                         border border-line
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition"
              <div className="text-xs text-muted mt-1 truncate max-w-full">
          <div className="bg-white rounded-2xl p-8 text-center border border-line">
            <p className="text-muted mb-4">Connectez-vous pour nous envoyer un message.</p>
            className="w-full bg-white rounded-2xl p-6 border border-dashed border-emerald/20
            className="bg-white rounded-2xl p-6 sm:p-8 border border-line">
              <label className="block text-xs font-semibold text-emerald-dark mb-2">Sujet *</label>
                className="field" />
              <label className="block text-xs font-semibold text-emerald-dark mb-2">Message *</label>
                className="field resize-none" />
                className="px-6 py-3 rounded-2xl border border-line text-emerald-dark font-semibold text-sm">Annuler</button>
              <div key={t.id} className="bg-white rounded-2xl p-6 border border-line">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${statutBadge(t.statut)}`}>
                <p className="text-sm text-ink/80 mb-3">{t.message}</p>
                <div className="text-xs text-muted">
                  <div className="mt-4 pt-4 border-t border-line">
                    <div className="text-xs font-bold text-gold mb-2">Réponse du support</div>
