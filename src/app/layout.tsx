import type { Metadata } from "next";
import { Barlow_Condensed, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCallBar } from "@/components/StickyCallBar";
import { OrganizationSchema } from "@/components/schema/LocalBusiness";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display-loaded",
  display: "swap",
});

const sans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-loaded",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Couvreur aux Andelys (27700) — Rénovation de toiture | Lazar Couverture 27",
    template: "%s | Lazar Couverture 27",
  },
  description:
    "Couvreur zingueur aux Andelys et dans l'Eure : rénovation de toiture, réparation de fuite, démoussage, zinguerie, gouttières. Devis gratuit, 5,0★ sur 48 avis.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: site.name,
    title: "Couvreur aux Andelys (27700) | Lazar Couverture 27",
    description:
      "Rénovation de toiture, réparation de fuite, démoussage et zinguerie aux Andelys et dans l'Eure. Devis gratuit.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Lazar Couverture 27, couvreur aux Andelys" }],
  },
  // Icones generees depuis le logo fourni par l'entreprise (prepare-logo.py).
  // Pas de favicon.svg : le logo source est un JPEG, il n'existe pas de version
  // vectorielle. Le jour ou l'entreprise fournit un SVG, l'ajouter ici.
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: "/icon-180.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-FR" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen antialiased">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu
        </a>
        <OrganizationSchema />
        <Header />
        <main id="contenu" className="pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
