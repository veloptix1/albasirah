import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "AL BASIRAH — La vision intérieure",
  description: "Application islamique audio : savants, hadiths authentiques.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}