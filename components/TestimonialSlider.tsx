"use client";

import { useState, useEffect, useCallback } from "react";
import { Eyebrow } from "@/components/Eyebrow";

export type Testimonial = {
  name: string;
  quote: string;
};

type Props = {
  testimonials: Testimonial[];
  bgImage: string;
  autoplayMs?: number;
};

/**
 * Auto-rotating testimonial carousel.
 * - Pauses on hover (desktop) or when user touches a dot (mobile)
 * - Click dots to jump to a specific testimonial
 * - Respects prefers-reduced-motion (no autoplay)
 */
export function TestimonialSlider({
  testimonials,
  bgImage,
  autoplayMs = 7000,
}: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = setInterval(next, autoplayMs);
    return () => clearInterval(id);
  }, [next, autoplayMs, paused, active]);

  const t = testimonials[active];

  return (
    <section
      className="relative text-white section-content overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15,14,12,0.7), rgba(15,14,12,0.7)), url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-site">
        <div className="container-prose mx-auto text-center">
          <Eyebrow variant="orange">From 2025 exhibitors</Eyebrow>

          {/* Quote viewport — fixed min-height to avoid layout shift between long/short quotes */}
          <div className="mt-3 mb-4 flex items-center justify-center min-h-[220px] md:min-h-[260px]">
            <blockquote
              key={active}
              className="font-heading text-h3 md:text-h2 font-bold text-white leading-snug animate-fade-in"
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>
          </div>

          <div className="text-body-l font-semibold text-white opacity-90 mb-5">
            {t.name}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2" role="tablist" aria-label="Testimonials">
            {testimonials.map((tt, i) => (
              <button
                key={tt.name}
                role="tab"
                aria-selected={i === active}
                aria-label={`Show testimonial from ${tt.name}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-orange-500 w-6"
                    : "bg-white/40 hover:bg-white/70 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        :global(.animate-fade-in) {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
