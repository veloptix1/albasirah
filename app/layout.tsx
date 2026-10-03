import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AL BASIRAH — La vision intérieure",
  description: "Application islamique audio : savants, hadiths authentiques, en français et en arabe.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}