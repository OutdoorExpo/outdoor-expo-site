"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface LightboxImage {
  src: string;
  alt?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

/**
 * Self-contained lightbox — no external dependencies.
 * Keyboard: ESC closes, ← → navigates.
 * Mouse: backdrop click closes, arrow buttons navigate.
 * Touch: horizontal swipe navigates (>60px threshold).
 */
export function Lightbox({
  images,
  isOpen,
  currentIndex,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const touchStartX = useRef<number | null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const total = images.length;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < total - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) onIndexChange(currentIndex - 1);
  }, [hasPrev, currentIndex, onIndexChange]);

  const goNext = useCallback(() => {
    if (hasNext) onIndexChange(currentIndex + 1);
  }, [hasNext, currentIndex, onIndexChange]);

  // Reset loaded state whenever the image changes
  useEffect(() => {
    setImgLoaded(false);
  }, [currentIndex]);

  // Preload next image for snappy navigation
  useEffect(() => {
    if (!isOpen) return;
    if (hasNext) {
      const img = new window.Image();
      img.src = images[currentIndex + 1].src;
    }
    if (hasPrev) {
      const img = new window.Image();
      img.src = images[currentIndex - 1].src;
    }
  }, [isOpen, currentIndex, hasNext, hasPrev, images]);

  // Keyboard nav
  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose, goPrev, goNext]);

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const current = images[currentIndex];
  if (!current) return null;

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 60) return;
    if (dx < 0) goNext();
    else goPrev();
  }

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button — top right */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close image viewer"
        className="absolute top-3 right-3 md:top-5 md:right-5 z-[210] w-touch-rec h-touch-rec flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </svg>
      </button>

      {/* Counter — top left */}
      <div className="absolute top-3 left-3 md:top-6 md:left-6 z-[210] text-white text-body-s opacity-80 pointer-events-none">
        {currentIndex + 1} / {total}
      </div>

      {/* Prev — desktop only (mobile uses swipe) */}
      {hasPrev && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Previous image"
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-[210] w-12 h-12 items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 6 9 12 15 18" />
          </svg>
        </button>
      )}

      {/* Next — desktop only */}
      {hasNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Next image"
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-[210] w-12 h-12 items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      )}

      {/* Image container — clicks inside don't close */}
      <div
        className="relative max-w-[95vw] max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {!imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white/60 text-body-s">
            Loading...
          </div>
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current.src}
          src={current.src}
          alt={current.alt ?? ""}
          onLoad={() => setImgLoaded(true)}
          className={`max-w-[95vw] max-h-[90vh] object-contain transition-opacity duration-200 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
