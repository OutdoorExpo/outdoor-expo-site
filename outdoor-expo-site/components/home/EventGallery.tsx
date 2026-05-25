"use client";

import { useState } from "react";
import Link from "next/link";
import { Eyebrow } from "../Eyebrow";
import { Lightbox, type LightboxImage } from "../Lightbox";

/**
 * 12 curated "best of 2025" photos for the home gallery.
 * Span hints drive the bento layout:
 *   - "wide" → col-span-2 (for super-wide landscapes, AR > 1.8)
 *   - "tall" → row-span-2 (for portraits, AR < 0.9)
 *   - undefined → default 1×1 cell
 */
const PHOTOS: { file: string; alt: string; span?: "wide" | "tall" }[] = [
  { file: "home-01.jpg", alt: "Outdoor Expo 2025 — event moment" },
  { file: "home-02.jpg", alt: "Outdoor Expo 2025 — panoramic view", span: "wide" },
  { file: "home-03.jpg", alt: "Outdoor Expo 2025 — event moment" },
  { file: "home-04.jpg", alt: "Outdoor Expo 2025 — event moment" },
  { file: "home-05.jpg", alt: "Outdoor Expo 2025 — event moment" },
  { file: "home-06.jpg", alt: "Outdoor Expo 2025 — event moment" },
  { file: "home-07.jpg", alt: "Outdoor Expo 2025 — event moment" },
  { file: "home-08.jpg", alt: "Outdoor Expo 2025 — event moment", span: "tall" },
  { file: "home-09.jpg", alt: "Outdoor Expo 2025 — event moment" },
  { file: "home-10.jpg", alt: "Outdoor Expo 2025 — event moment" },
  { file: "home-11.jpg", alt: "Outdoor Expo 2025 — event moment", span: "tall" },
  { file: "home-12.jpg", alt: "Outdoor Expo 2025 — event moment" },
];

const LIGHTBOX_IMAGES: LightboxImage[] = PHOTOS.map((p) => ({
  src: `/home/gallery/${p.file}`,
  alt: p.alt,
}));

export function EventGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  function openAt(index: number) {
    setCurrentIndex(index);
    setIsOpen(true);
  }

  return (
    <section className="bg-paper section-content">
      <div className="container-site">
        <div className="max-w-[680px] mb-6">
          <Eyebrow>2025 In Pictures</Eyebrow>
          <h2 className="text-h1 font-extrabold text-charcoal mb-2 mt-2">
            What 20,000+ visitors
            <br />
            experienced last year.
          </h2>
          <p className="text-body-l text-dark-grey">
            From family camping setups to live demos and big-rig walkthroughs —
            a snapshot of the 2025 floor.
          </p>
        </div>

        {/* Bento grid — 2 cols mobile, 4 cols desktop, dense packing. */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-6"
          style={{
            gridAutoRows: "minmax(140px, auto)",
            gridAutoFlow: "dense",
          }}
        >
          {PHOTOS.map((photo, i) => {
            const spanClass =
              photo.span === "wide"
                ? "col-span-2 row-span-1"
                : photo.span === "tall"
                ? "row-span-2 col-span-1"
                : "col-span-1 row-span-1";

            return (
              <button
                key={photo.file}
                type="button"
                onClick={() => openAt(i)}
                aria-label={`Open ${photo.alt}`}
                className={`${spanClass} group relative overflow-hidden rounded bg-light-grey focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2`}
                style={{ minHeight: 0 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/home/gallery/${photo.file}`}
                  alt={photo.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover overlay (desktop only) */}
                <div className="hidden md:block absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/15 transition-colors" />
              </button>
            );
          })}
        </div>

        {/* Set responsive grid row height larger on desktop via inline media query workaround.
            Tailwind doesn't support arbitrary media-query inline styles, so we override via CSS. */}
        <style jsx>{`
          @media (min-width: 768px) {
            .grid {
              grid-auto-rows: minmax(220px, auto) !important;
            }
          }
        `}</style>

        <div className="flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-body font-semibold text-green-500 hover:text-green-600 transition-colors"
          >
            View Full 2025 Gallery
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>

      <Lightbox
        images={LIGHTBOX_IMAGES}
        isOpen={isOpen}
        currentIndex={currentIndex}
        onClose={() => setIsOpen(false)}
        onIndexChange={setCurrentIndex}
      />
    </section>
  );
}
