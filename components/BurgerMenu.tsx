  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

        aria-label="Ouvrir le menu"
        aria-expanded={open}
        className="flex h-11 w-11 items-center justify-center rounded-xl text-emerald-dark active:bg-emerald/10"
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h10" />
        </svg>
        <button
          aria-label="Fermer le menu"
          className="fixed inset-0 z-[998] cursor-default bg-black/50"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-[999] flex h-[100dvh] w-[86%] max-w-[360px] flex-col bg-emerald-dark
                    ${open ? "translate-x-0" : "invisible translate-x-full"}`}
        style={{ paddingTop: "var(--safe-top)", paddingBottom: "var(--safe-bottom)" }}
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/10 px-5">
          <span className="font-amiri text-2xl font-bold text-gold" dir="rtl">بصيرة</span>
          <button onClick={() => setOpen(false)} aria-label="Fermer le menu"
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-2xl leading-none text-white/80 active:bg-white/10">
        <nav className="flex-1 overflow-y-auto px-3 py-3">
            <Link href="/dashboard" className="mb-1 flex h-12 items-center rounded-xl px-4 font-semibold text-gold no-underline active:bg-white/10">
              Tableau de bord
            <Link href="/admin" className="mb-2 flex h-12 items-center rounded-xl bg-gold px-4 font-semibold text-emerald-dark no-underline">
              Espace administrateur
          {links.map(({ label, href }) => {
            const current = pathname?.replace(/\/+$/, "") === href;
            return (
              <Link key={href} href={href} aria-current={current ? "page" : undefined}
                    className={`flex h-12 items-center rounded-xl px-4 font-medium no-underline active:bg-white/10
                                ${current ? "bg-white/10 text-gold" : "text-white/90"}`}>
            );
          })}
        </nav>
        <p className="shrink-0 border-t border-white/10 px-5 py-4 text-center text-xs text-white/50">
          AL BASIRAH © 2026
        </p>
}
