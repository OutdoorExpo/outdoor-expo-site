"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { FLICKET_TICKETS_URL } from "@/lib/constants";

const navItems = [
  { href: "/visit", label: "Visit" },
  { href: "/exhibitors", label: "Exhibitors" },
  { href: "/exhibit-with-us", label: "Exhibit With Us" },
  { href: "/sponsor", label: "Sponsor" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-light-grey">
        <div className="container-site flex items-center justify-between h-[64px] md:h-[80px]">
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop nav — only on large screens */}
          <nav className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-body-s font-medium text-charcoal hover:text-green-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* GET TICKETS — hidden on mobile (visible only at md and above)
                Mobile users have a prominent GET TICKETS in the Hero already,
                so we avoid duplication here. Tablet and desktop keep it. */}
            <Button
              href={FLICKET_TICKETS_URL}
              size="md"
              className="hidden md:inline-flex !h-10 !px-4 !text-[13px]"
            >
              Get Tickets
            </Button>
            {/* Mobile hamburger — visible up to lg */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden w-touch-rec h-touch-rec bg-charcoal text-white rounded-sm flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay — Mobile Rule #5 */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-charcoal text-white flex flex-col">
          <div className="container-site flex items-center justify-between h-[64px] border-b border-white/10">
            <Logo variant="white" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="w-touch-rec h-touch-rec flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 container-site py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-h3 font-heading font-semibold text-white border-b border-white/10"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="container-site pb-4">
            <Button href={FLICKET_TICKETS_URL} variant="primary" size="lg" className="w-full">
              Get Tickets
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
