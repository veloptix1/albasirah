import { prepareUpload } from "@/lib/security";
import { IconSpeaker, IconSearch, IconPlay } from "@/components/icons";
    const finalSlug = (recitateurSlug || "autre").replace(/[^a-z0-9-]/gi, "-").slice(0, 40);
    let fileName: string;
    try { fileName = prepareUpload(file, "audio", `${num}-${finalSlug}-`); }
    catch (e: any) { setUploading(false); alert(e.message); return; }
        <p className="text-muted text-sm">
        <div className="bg-white rounded-2xl p-5 border border-line">
          <div className="text-xs font-bold text-muted mb-1">
        <div className="bg-white rounded-2xl p-5 border border-line">
          <div className="text-xs font-bold text-muted mb-1">
        <div className="bg-white rounded-2xl p-5 border border-line col-span-2 lg:col-span-1">
          <div className="text-xs font-bold text-muted mb-1">
          className="field"
        <p className="text-muted">Chargement...</p>
                className="bg-white rounded-2xl border border-line
                    <div className="flex items-center gap-2 text-xs text-muted">
                  <div className="mt-3 pt-3 border-t border-line space-y-1.5">
                            <div className="text-xs text-muted">
            className="w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-2xl
                <div className="text-xs font-bold text-gold">
              <label className="block text-xs font-semibold text-emerald-dark mb-2">
                  className="field" />
              <label className="block text-xs font-semibold text-emerald-dark mb-2">
                className="w-full px-4 py-3 rounded-xl border border-line
                           focus:border-emerald outline-none text-sm
            <div className="flex justify-end gap-3 pt-4 border-t border-line">
                className="px-5 py-2.5 rounded-xl border border-line
