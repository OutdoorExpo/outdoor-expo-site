import Link from "next/link";
import { Logo } from "./Logo";

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
      { href: "/news", label: "News" },
      { href: "/past-events", label: "Past Events" },
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
            <p className="text-body-s opacity-70 mt-2 max-w-[280px] leading-relaxed">
              The South Island&apos;s home of the outdoor community.
              Christchurch · 2–4 October 2026.
            </p>
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
        <div className="border-t border-white/10 pt-3 flex flex-col md:flex-row justify-between items-start md:items-center text-eyebrow opacity-60 gap-2">
          <div>© {new Date().getFullYear()} Outdoor Expo. All rights reserved.</div>
          <div className="flex gap-3">
            <Link href="/privacy" className="opacity-60 hover:opacity-100">
              Privacy Policy
            </Link>
            <Link href="/terms" className="opacity-60 hover:opacity-100">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
