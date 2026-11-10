import { IconMosque, IconSpeaker, IconLivre, IconBook, IconCrown, IconUser, IconHome, IconArrowRight, IconParchemin, IconStar } from "@/components/icons";
      const { data: profile, error } = await supabase
      if (error || profile?.role !== "admin") { router.replace("/dashboard"); return; }
      <div className="min-h-dvh flex items-center justify-center bg-cream">
        <p className="text-emerald">Vérification des droits…</p>
    <div className="min-h-dvh bg-cream flex">
                        fixed top-0 left-0 h-dvh z-[900]">
              <div className="text-xs text-gold tracking-widest">AL BASIRAH</div>
                      px-4 h-14 flex items-center justify-between"
           style={{ paddingTop: "var(--safe-top)", height: "calc(56px + var(--safe-top))" }}>
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen}
          className="w-11 h-11 rounded-xl flex items-center justify-center text-gold active:bg-white/10">
          <span className="text-2xl leading-none">{menuOpen ? "×" : "≡"}</span>
        <div className="lg:hidden fixed left-0 right-0 z-[900] bg-emerald-dark
                        text-white p-3 space-y-1 overflow-y-auto"
             style={{ top: "calc(56px + var(--safe-top))", maxHeight: "calc(100dvh - 56px - var(--safe-top))" }}>
      <div className="flex-1 lg:ml-64 lg:pt-0 w-full min-w-0" style={{ paddingTop: "calc(var(--safe-top) + 56px)" }}>
