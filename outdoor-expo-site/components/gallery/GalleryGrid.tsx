"use client";

import { useState } from "react";
import { Lightbox, type LightboxImage } from "../Lightbox";

interface Photo {
  src: string;
  alt: string;
}

interface GalleryGridProps {
  photos: Photo[];
}

/**
 * Instagram-style square grid:
 *   - Mobile: 3 cols, 1px gap
 *   - Desktop: 4 cols, 4px gap
 * Click any tile → opens lightbox at that index.
 */
export function GalleryGrid({ photos }: GalleryGridProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const lightboxImages: LightboxImage[] = photos.map((p) => ({
    src: p.src,
    alt: p.alt,
  }));

  function openAt(index: number) {
    setCurrentIndex(index);
    setIsOpen(true);
  }

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-[1px] md:gap-1">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => openAt(i)}
            aria-label={`Open photo ${i + 1}`}
            className="group relative aspect-square overflow-hidden bg-light-grey focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="hidden md:block absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/15 transition-colors" />
          </button>
        ))}
      </div>

      <Lightbox
        images={lightboxImages}
        isOpen={isOpen}
        currentIndex={currentIndex}
        onClose={() => setIsOpen(false)}
        onIndexChange={setCurrentIndex}
      />
    </>
  );
}
