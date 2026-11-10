import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconHome, IconSpeaker, IconLivre, IconBook, IconUser } from "./icons";

// "/audio/" et "/audio" doivent être traités pareil (trailingSlash activé)
const clean = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);
  const pathname = clean(usePathname() || "/");
    supabase.auth.getSession().then(({ data }) => setConnected(!!data.session));
    const { data: listener } = supabase.auth.onAuthStateChange((_e, session) => setConnected(!!session));
    { label: "Accueil",  Icon: IconHome,    href: connected ? "/dashboard" : "/", match: ["/", "/dashboard"] },
    { label: "Audio",    Icon: IconSpeaker, href: "/audio",    match: ["/audio"] },
    { label: "Livres",   Icon: IconLivre,   href: "/livres",   match: ["/livres"] },
    { label: "Hadiths",  Icon: IconBook,    href: "/hadiths",  match: ["/hadiths"] },
    { label: "Profil",   Icon: IconUser,    href: connected ? "/profil" : "/auth", match: ["/profil", "/auth"] },
  const isActive = (match: string[]) =>
    match.some((m) => (m === "/" ? pathname === "/" : pathname === m || pathname.startsWith(m + "/")));

    <nav aria-label="Navigation principale"
         className="fixed inset-x-0 bottom-0 z-[950] border-t border-line bg-white/95 backdrop-blur"
         style={{ paddingBottom: "var(--safe-bottom)" }}>
      <ul className="mx-auto flex max-w-[600px] items-stretch">
        {items.map(({ label, Icon, href, match }) => {
          const active = isActive(match);
            <li key={label} className="flex-1">
              <Link href={href} aria-current={active ? "page" : undefined}
                    className={`relative flex h-16 flex-col items-center justify-center gap-1 no-underline transition-colors
                                ${active ? "text-emerald" : "text-muted"}`}>
                {active && <span className="absolute inset-x-6 top-0 h-[3px] rounded-b bg-gold" />}
                <Icon size={22} />
                <span className="text-[0.7rem] font-medium">{label}</span>
              </Link>
            </li>
      </ul>
}
