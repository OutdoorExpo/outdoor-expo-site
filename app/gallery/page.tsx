import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "2025 Gallery — Outdoor Expo NZ",
  description:
    "A look back at Outdoor Expo 2025 — the people, the moments, the gear that made it New Zealand's biggest outdoor showcase.",
};

// 143 photos: /gallery/001.jpg through /gallery/143.jpg
const PHOTO_COUNT = 143;

export default function GalleryPage() {
  const photos = Array.from({ length: PHOTO_COUNT }, (_, i) => {
    const n = String(i + 1).padStart(3, "0");
    return {
      src: `/gallery/${n}.jpg`,
      alt: `Outdoor Expo 2025 — photo ${n}`,
    };
  });

  return (
    <main className="bg-white">
      {/* Page header */}
      <section className="bg-paper section-content">
        <div className="container-site">
          <div className="max-w-[720px]">
            <Eyebrow>The 2025 Expo</Eyebrow>
            <h1 className="text-h1 font-extrabold text-charcoal mb-2 mt-2">
              Highlights from 2025
            </h1>
            <p className="text-body-l text-dark-grey">
              Explore moments from last year&apos;s Outdoor Expo — from
              exhibitor displays and live demos to families enjoying the day.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white pb-12 md:pb-16">
        <div className="container-site pt-2 md:pt-4">
          <GalleryGrid photos={photos} />
        </div>
      </section>
    </main>
  );
}
