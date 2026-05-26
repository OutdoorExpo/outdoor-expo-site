import { Button } from "../Button";
import { Eyebrow } from "../Eyebrow";
import { FLICKET_TICKETS_URL } from "@/lib/constants";

/**
 * Hero — background video with text overlay.
 *
 * Implementation per Phase 4 Video Hero Guide + Mobile Design Rules #6:
 * - autoPlay + muted + loop + playsInline (iOS-safe)
 * - poster image shown while video loads & for reduced-motion users
 * - Dark overlay 35-45% for text legibility
 * - Video pinned with object-cover so it fills hero on any aspect ratio
 *
 * Reduced motion: CSS hides the <video> for users with
 * `prefers-reduced-motion: reduce`, falling back to the poster image.
 */
export function Hero() {
  return (
    <section className="relative flex items-center min-h-hero-mobile md:min-h-hero-desktop text-white py-10 md:py-12 overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        preload="metadata"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Fallback poster image — shown when video can't play (reduced motion, no JS, etc.) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center motion-safe:hidden"
        style={{ backgroundImage: "url('/hero-poster.jpg')" }}
        aria-hidden="true"
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />

      {/* Foreground content */}
      <div className="container-site relative z-20">
        <div className="container-prose">
          <Eyebrow variant="orange">Christchurch · 2–4 October 2026</Eyebrow>
          <h1 className="text-display font-extrabold text-white mb-3 mt-2">
            NZ&apos;s outdoor community.
            <br />
            One place.
          </h1>
          <p className="text-body-l text-white opacity-95 mb-5 max-w-[560px]">
            Three days. 300+ brands across 13 zones.
          </p>
          <Button href={FLICKET_TICKETS_URL} variant="primary" size="lg">
            Get Tickets
          </Button>
        </div>
      </div>
    </section>
  );
}
