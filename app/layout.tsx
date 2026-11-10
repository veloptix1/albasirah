import type { Metadata, Viewport } from "next";
import { Amiri, Poppins } from "next/font/google";
// Polices embarquées au build : fonctionnent hors ligne dans l'app Android
const amiri = Amiri({ subsets: ["arabic", "latin"], weight: ["400", "700"], variable: "--font-amiri", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0d5c4a",
};

    <html lang="fr" className={`${amiri.variable} ${poppins.variable}`}>
      <body>
}
