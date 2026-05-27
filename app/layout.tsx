import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import {
  OrganizationSchema,
  EventSchema,
  WebSiteSchema,
} from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://outdoorexpo.co.nz"),
  title: {
    default: "Outdoor Expo 2026 — NZ's outdoor community. One place.",
    template: "%s | Outdoor Expo 2026",
  },
  description:
    "Three days. 300+ brands across 12 zones. Canterbury Agricultural Park, Christchurch · 2–4 October 2026.",
  // Favicons — Next.js generates the proper <link> tags from this
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Outdoor Expo 2026 — NZ's outdoor community. One place.",
    description:
      "Three days. 300+ brands across 12 zones. Canterbury Agricultural Park, Christchurch · 2–4 October 2026.",
    url: "https://outdoorexpo.co.nz",
    siteName: "Outdoor Expo 2026",
    locale: "en_NZ",
    type: "website",
    // Resolved against metadataBase → https://outdoorexpo.co.nz/og-image.png
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Outdoor Expo 2026 — Christchurch · 2–4 October 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outdoor Expo 2026 — NZ's outdoor community. One place.",
    description:
      "Three days. 300+ brands across 12 zones. Christchurch · 2–4 October 2026.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NZ" className={`${inter.variable} ${sora.variable}`}>
      <head>
        {/* Site-wide JSON-LD structured data */}
        <OrganizationSchema />
        <WebSiteSchema />
        <EventSchema />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
