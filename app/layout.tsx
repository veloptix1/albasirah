import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import { LangProvider } from "@/components/LangProvider";

export const metadata: Metadata = {
  title: "AL BASIRAH — La vision intérieure",
  description: "Application islamique audio : savants, hadiths authentiques.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <LangProvider>
          <Navbar />
          {children}
          <BottomNav />
        </LangProvider>
      </body>
    </html>
  );
}