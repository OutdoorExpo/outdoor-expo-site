import Link from "next/link";
import { Logo } from "./Logo";

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/outdoorexponz",
    // simple Facebook glyph
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.2-1.5 1.5-1.5h1.6V3.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.4H7.7V13h2.7v8h3.1z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/outdoorexponz/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@outdoorexponz",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.6 8.3c-1.5 0-2.9-.5-4-1.4v6.6c0 3.3-2.6 5.9-5.9 5.9S3.8 16.8 3.8 13.5s2.6-5.9 5.9-5.9c.3 0 .6 0 .8.1V11c-.3-.1-.6-.2-.8-.2-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7V3h3.1c0 1.6 1.3 2.9 2.9 2.9h.9v2.4h.3z" />
      </svg>
    ),
  },
];

const footerColumns = [
  {
    title: "Visit",
    links: [
      { href: "/visit", label: "Plan Your Visit" },
      { href: "/tickets", label: "Tickets" },
      { href: "/zones", label: "Zones" },
      { href: "/visit#getting-here", label: "Getting Here" },
    ],
  },
  {
    title: "Exhibitors & Partners",
    links: [
      { href: "/exhibit-with-us", label: "Exhibit With Us" },
      { href: "/sponsor", label: "Sponsorship" },
      { href: "/exhibitors", label: "Exhibitor Directory" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/about", label: "Our Story" },
      { href: "/gallery", label: "2025 Gallery" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "/contact", label: "Get in Touch" },
      { href: "/visit#faqs", label: "FAQs" },
      { href: "/media", label: "Media Enquiries" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-white pt-8 pb-4">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-7">
          <div className="col-span-2 md:col-span-1">
            <Logo variant="white" />
            <p className="text-body-s opacity-70 mt-2 mb-3 max-w-[280px] leading-relaxed">
              The South Island&apos;s home of the outdoor community.
              Christchurch · 2–4 October 2026.
            </p>
            <div className="flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Outdoor Expo on ${s.label}`}
                  className="w-touch-rec h-touch-rec flex items-center justify-center bg-white/5 hover:bg-orange-500 border border-white/10 hover:border-orange-500 rounded-sm transition-colors text-white"
                >
                  <span className="w-5 h-5 block">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h5 className="text-eyebrow uppercase tracking-[0.1em] font-bold text-white opacity-60 mb-3">
                {col.title}
              </h5>
              {col.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-body-s text-white opacity-85 hover:opacity-100 mb-2 no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-3 flex flex-col md:flex-row justify-between items-start md:items-center text-eyebrow gap-2">
          <div className="opacity-60">© {new Date().getFullYear()} Outdoor Expo. All rights reserved.</div>
          <div className="flex flex-wrap gap-3">
            <Link href="/privacy" className="opacity-60 hover:opacity-100">
              Privacy Policy
            </Link>
            <Link href="/terms" className="opacity-60 hover:opacity-100">
              Terms &amp; Conditions
            </Link>
            <Link href="/exhibitor-terms" className="opacity-60 hover:opacity-100">
              Exhibitor Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
