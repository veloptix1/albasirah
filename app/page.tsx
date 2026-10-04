import "./globals.css";
import type { Metadata } from "next";
import { LangProvider } from "@/components/LangProvider";

export const metadata: Metadata = {
  title: "AL BASIRAH — La vision intérieure",
  description: "Application islamique audio : savants, hadiths authentiques.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}