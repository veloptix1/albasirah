"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  // Page admin : PAS de Navbar, PAS de BottomNav, PAS de padding
  if (isAdmin) {
    return <>{children}</>;
  }

  // Pages publiques : Navbar + BottomNav + padding
  return (
    <>
      <Navbar />
      <div className="pt-[72px]">{children}</div>
      <BottomNav />
    </>
  );
}