import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

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
  openGraph: {
    title: "Outdoor Expo 2026",
    description:
      "NZ's outdoor community. One place. Christchurch · 2–4 October 2026.",
    url: "https://outdoorexpo.co.nz",
    siteName: "Outdoor Expo 2026",
    locale: "en_NZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NZ" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
