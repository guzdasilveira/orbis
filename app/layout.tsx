import type { Metadata } from "next";
import { Syne, Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/content";
import { organizationJsonLd, softwareApplicationsJsonLd } from "@/lib/seo";
import SkipLink from "@/components/layout/SkipLink";

const syne = Syne({
  subsets: ["latin", "latin-ext"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["italic", "normal"],
  variable: "--font-instrument",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s · ORBIS",
  },
  description: SITE.description,
  keywords: [
    "software para automotoras Uruguay",
    "sistema de gestión gimnasios Mercado Pago",
    "software para psicólogos Uruguay",
    "cobranzas automáticas WhatsApp",
    "Finanzy",
    "FLUX",
    "PureMind",
  ],
  authors: [{ name: "ORBIS" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_UY",
    url: SITE.url,
    siteName: "ORBIS",
    title: SITE.title,
    description: SITE.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = [organizationJsonLd(), ...softwareApplicationsJsonLd()];

  return (
    <html lang="es">
      <body
        className={`${syne.variable} ${instrumentSerif.variable} ${dmSans.variable} font-body bg-navy text-cream antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
