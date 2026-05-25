"use client";

import { useEffect, useState } from "react";

/**
 * Back-to-top button — appears fixed bottom-right after the user scrolls
 * past ~400px. Smooth-scrolls to the top on click. Respects
 * prefers-reduced-motion (instant scroll instead of smooth).
 *
 * Sized 48×48 (touch-rec compliant). Brand: orange/white.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      title="Back to top"
      className={[
        "fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60]",
        "w-touch-rec h-touch-rec",
        "bg-orange-500 hover:bg-orange-400 text-white",
        "rounded-full shadow-lg",
        "flex items-center justify-center",
        "transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none",
      ].join(" ")}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
