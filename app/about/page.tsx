import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Newsletter } from "@/components/home/Newsletter";
import { FLICKET_TICKETS_URL } from "@/lib/constants";

export const metadata = {
  title: "About",
  description:
    "Outdoor Expo was born from a simple realisation: New Zealanders are at their best when they're outside. Founded by Marc, we've grown into NZ's largest celebration of outdoor life.",
};

export default function AboutPage() {
  return (
    <>
      <Hero />
      <OurStory />
      <WhyWeDoIt />
      <GivingBack />
      <FounderQuote />
      <CtaStrip />
      <Newsletter />
    </>
  );
}

/* ============== 1 · HERO ============== */
function Hero() {
  return (
    <section
      className="relative flex items-end text-white py-12 md:py-15 overflow-hidden"
      style={{
        // Match the wide cinematic aspect ratio of the source (16:7) on desktop,
        // with a sensible mobile minimum so the text still has room.
        aspectRatio: "16 / 7",
        minHeight: "360px",
        backgroundImage:
          "linear-gradient(rgba(15,14,12,0.35) 0%, rgba(15,14,12,0.65) 100%), url('/about/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="container-site relative z-10">
        <div className="container-prose">
          <Eyebrow variant="orange">Our story</Eyebrow>
          <h1 className="text-h1 font-extrabold text-white mb-3 mt-2 leading-[1.1]">
            Pioneered by an{" "}
            <br className="hidden md:block" />
            outdoor enthusiast,{" "}
            <br className="hidden md:block" />
            like you.
          </h1>
          <p className="text-body-l text-white opacity-95 max-w-[560px]">
            New Zealand&apos;s largest celebration of outdoor life — built by
            people who&apos;d rather be on the trail, on the water, or under
            the stars than anywhere else.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============== 2 · OUR STORY ============== */
function OurStory() {
  return (
    <section className="bg-paper section-content">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <Eyebrow>The beginning</Eyebrow>
            <h2 className="text-h1 font-extrabold text-green-500 mb-3 mt-2 leading-tight">
              Born from a simple realisation.
            </h2>
            <p className="text-body-l text-dark-grey mb-3">
              New Zealanders are at their best when they&apos;re outside.
            </p>
            <p className="text-body text-dark-grey mb-3">
              After decades in business, our founder Marc wanted to create
              more than just another event — a space where people could come
              together, share their love of the outdoors, and discover
              what&apos;s possible.
            </p>
            <p className="text-body text-dark-grey">
              Since then, the expo has grown into New Zealand&apos;s largest
              celebration of outdoor life. We&apos;ve welcomed thousands of
              adventurers — from families taking their first tramp to seasoned
              explorers searching for the latest gear — all united by a
              passion for fresh air, open spaces, and unforgettable journeys.
            </p>
          </div>
          <div
            className="rounded-lg overflow-hidden bg-cover bg-center w-full"
            style={{
              aspectRatio: "4/3",
              backgroundImage: "url('/about/our-story.jpg')",
            }}
            role="img"
            aria-label="Outdoor Expo — our story"
          />
        </div>
      </div>
    </section>
  );
}

/* ============== 3 · WHY WE DO IT ============== */
const BELIEFS = [
  {
    title: "It’s about more than gear.",
    body: "Tents, boats, 4WDs — they’re the means, not the end. We’re here to inspire people to step outside routine and find new passions.",
  },
  {
    title: "Aotearoa is the backdrop.",
    body: "There’s nowhere else like New Zealand for outdoor life. We celebrate every corner — the alpine, the coast, the river, the bush.",
  },
  {
    title: "Community is the engine.",
    body: "We bring together brands, makers, families, and adventurers in one place — three days that build connections that last all year.",
  },
];

function WhyWeDoIt() {
  return (
    <section className="bg-white section-content">
      <div className="container-site">
        <div className="container-prose mb-7">
          <Eyebrow>Why we do it</Eyebrow>
          <h2 className="text-h1 font-extrabold text-charcoal mb-3 mt-2 leading-tight">
            Inspiring New Zealanders
            <br />
            to get outside.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {BELIEFS.map((b) => (
            <div
              key={b.title}
              className="bg-paper p-4 rounded border-t-4 border-orange-500"
            >
              <h3 className="text-h3 font-bold text-charcoal mb-2 leading-tight">
                {b.title}
              </h3>
              <p className="text-body text-dark-grey">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== 4 · GIVING BACK ============== */
const PARTNERS_2025 = [
  {
    name: "Canterbury West Coast Air Rescue",
    body: "The rescue helicopter service that responds when New Zealanders are in trouble outdoors — on the trail, in the alpine, or out at sea.",
    url: "https://canwestrescue.nz/",
  },
  {
    name: "Coastguard Tautiaki Moana",
    body: "Volunteer crews keeping Kiwis safe on the water — a charitable trust we’re proud to support because the ocean is part of who we are.",
    url: "https://www.coastguard.nz/",
  },
];

function GivingBack() {
  return (
    <section className="bg-charcoal text-white section-content">
      <div className="container-site">
        <div className="container-prose mb-7">
          <Eyebrow variant="orange">Giving back</Eyebrow>
          <h2 className="text-h1 font-extrabold text-white mb-3 mt-2 leading-tight">
            We support those
            <br />
            who keep us safe outdoors.
          </h2>
          <p className="text-body-l text-white opacity-90 mb-3">
            Outdoor Expo gives back to the charities that protect Kiwis in
            the places we love to explore. In 2025, we proudly supported
            two of New Zealand&apos;s most important outdoor safety
            organisations:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-5">
          {PARTNERS_2025.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/5 hover:bg-white/10 border border-white/15 hover:border-orange-500 rounded p-4 transition-colors no-underline"
            >
              <div className="text-eyebrow uppercase tracking-[0.1em] font-semibold text-orange-500 mb-2">
                2025 partner
              </div>
              <h3 className="text-h3 font-bold text-white mb-2 leading-tight">
                {p.name}
              </h3>
              <p className="text-body text-white opacity-85 mb-2">{p.body}</p>
              <span className="text-eyebrow uppercase tracking-[0.1em] font-semibold text-orange-500">
                Learn more →
              </span>
            </a>
          ))}
        </div>
        <div className="container-prose">
          <p className="text-body text-white opacity-90">
            <strong className="text-orange-500">For 2026,</strong> our
            charity partners will be announced closer to the event — but
            our commitment stays the same: a portion of every ticket and
            stand supports the people and organisations keeping Kiwis safe
            outdoors.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============== 5 · FOUNDER QUOTE ============== */
function FounderQuote() {
  return (
    <section
      className="relative text-white section-content overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,14,12,0.7), rgba(15,14,12,0.7)), url('/about/looking-ahead.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-site">
        <div className="container-prose mx-auto text-center">
          <Eyebrow variant="orange">Looking ahead</Eyebrow>
          <blockquote className="font-heading text-h2 font-bold text-white mt-3 mb-4 leading-snug">
            &ldquo;Our vision is simple — to inspire, connect, and equip
            New Zealanders for the adventures ahead.&rdquo;
          </blockquote>
          <div className="text-body-l font-semibold text-white opacity-90">
            Marc · Founder
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== 6 · CTA STRIP ============== */
function CtaStrip() {
  return (
    <section className="bg-paper section-content">
      <div className="container-site">
        <div className="container-prose mx-auto text-center">
          <Eyebrow>Be part of the adventure</Eyebrow>
          <h2 className="text-h1 font-extrabold text-charcoal mb-3 mt-2 leading-tight">
            Join us in Christchurch,
            <br />
            2–4 October 2026.
          </h2>
          <p className="text-body-l text-dark-grey mb-5">
            Whether you&apos;re showcasing your latest products or coming to
            discover what&apos;s new in the outdoor world — Canterbury
            Agricultural Park is the place to be.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Button href={FLICKET_TICKETS_URL} variant="primary" size="lg">
              Get Tickets
            </Button>
            <Button href="/exhibit-with-us" variant="outline-charcoal" size="lg">
              Exhibit With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
