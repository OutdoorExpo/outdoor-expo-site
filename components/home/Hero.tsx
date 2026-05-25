import { Button } from "../Button";
import { Eyebrow } from "../Eyebrow";
import { FLICKET_TICKETS_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="relative flex items-center min-h-hero-mobile md:min-h-hero-desktop text-white py-10 md:py-12"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,14,12,0.45), rgba(15,14,12,0.25)), url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-site">
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
