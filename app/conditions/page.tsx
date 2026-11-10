import { BackLink, PageHeader } from "@/components/ui";
import { EndMark } from "@/components/PageHeader";
    <main className="page max-w-[900px]">
      <BackLink href="/dashboard" label="Retour" />
      <PageHeader title="Conditions d''utilisation" subtitle="Dernière mise à jour : Octobre 2026" />
          <section key={i} className="bg-white rounded-2xl p-6 sm:p-8 border border-line">
            <p className="text-sm text-ink/80 leading-relaxed">{s.c}</p>
