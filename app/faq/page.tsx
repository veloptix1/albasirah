import { BackLink, PageHeader } from "@/components/ui";
import { EndMark } from "@/components/PageHeader";
    <main className="page max-w-[900px]">
      <BackLink href="/dashboard" label="Retour" />
      <PageHeader title="Questions fréquentes" subtitle="Les réponses aux questions les plus courantes sur AL BASIRAH." />
            <div key={i} className="bg-white rounded-2xl border border-line hover:border-emerald/15 transition-all overflow-hidden">
                <span aria-pressed={isOpen} className="chip">
                <div className="px-6 pb-5 border-t border-line pt-4">
                  <p className="text-sm text-ink/80 leading-relaxed">{faq.r}</p>
      <div className="mt-12 bg-emerald/5 rounded-2xl p-8 text-center border border-line">
        <p className="text-sm text-ink/80 mb-4">Ouvrez un ticket auprès de notre équipe support.</p>
