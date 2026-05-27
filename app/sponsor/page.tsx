import Image from "next/image";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Newsletter } from "@/components/home/Newsletter";
import { HubSpotFormWithTracking } from "@/components/HubSpotFormWithTracking";

export const metadata = {
  title: "Sponsor",
  description:
    "Partner with NZ's largest outdoor lifestyle expo. Engage with 20,000+ expected visitors — families, adventurers, and consumers with genuine purchasing intent. 2–4 October 2026, Christchurch.",
};

const SPONSOR_PROSPECTUS_URL =
  "https://drive.google.com/file/d/1NF9u96g5Gt5kcPtrzyN7gaJ-93Dk8J3k/view?usp=sharing";

const PROGRAM_BOOK_URL =
  "https://44544113.fs1.hubspotusercontent-ap1.net/hubfs/44544113/Outdoor%20Expo%202025%20Visitor%20Guide.pdf";

const SAMPLE_RADIO_URL =
  "https://drive.google.com/file/d/1rLjV-OZLZLNaytBnOY2HHcI-p3WE30ZH/view?usp=sharing";

const EXPO_MAP_URL =
  "https://drive.google.com/file/d/1npR9zs8aHHDqrEyQ_IHNdsArKFkS018L/view?usp=sharing";

const CONTACT_EMAIL = "info@outdoorexpo.co.nz";

export default function SponsorPage() {
  return (
    <>
      <Hero />
      <Stats />
      <WhySponsor />
      <Audience />
      <MarketingReach />
      <Zones />
      <Tiers />
      <Process />
      <ApplicationForm />
      <CtaStrip />
      <Newsletter />
    </>
  );
}

/* ============== 1 · HERO ============== */
function Hero() {
  return (
    <section className="relative flex items-center text-white py-12 md:py-15 overflow-hidden min-h-[60vh]">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        poster="/sponsor/hero-poster.jpg"
        preload="metadata"
      >
        <source src="/sponsor/hero-video.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 z-0 motion-reduce:block hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/sponsor/hero-poster.jpg')" }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(rgba(15,14,12,0.55), rgba(15,14,12,0.40))",
        }}
      />
      <div className="container-site relative z-10">
        <div className="container-prose">
          <Eyebrow variant="orange">Sponsor Outdoor Expo 2026</Eyebrow>
          <h1 className="text-h1 font-extrabold text-white mb-3 mt-2 leading-[1.1]">
            Engage With 20,000+{" "}
            <br className="hidden md:block" />
            Ready-to-Buy Visitors{" "}
            <br className="hidden md:block" />
            From All Walks of Life
          </h1>
          <p className="text-body-l text-white opacity-95 mb-5 max-w-[560px]">
            New Zealand&apos;s largest all-in-one outdoor lifestyle expo
            returns 2–4 October 2026 at Canterbury Agricultural Park. Connect
            with families, homeowners, travellers, and adventurers — at the
            moment they&apos;re actively planning their next purchase.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button
              href={SPONSOR_PROSPECTUS_URL}
              variant="primary"
              size="lg"
            >
              Download Sponsor Prospectus
            </Button>
            <Button href="#apply" variant="outline-white" size="lg">
              Talk to Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== 2 · STATS STRIP ============== */
const STATS = [
  { value: "20K+", label: "Expected Visitors" },
  { value: "300+", label: "Exhibitors" },
  { value: "12", label: "Themed Zones" },
  { value: "3", label: "Days" },
];

function Stats() {
  return (
    <section className="bg-white section-compact">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-heading font-extrabold text-[44px] md:text-[64px] text-green-500 leading-none">
                {s.value}
              </div>
              <div className="text-eyebrow uppercase tracking-[0.1em] font-semibold text-charcoal mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== 3 · WHY SPONSOR ============== */
const REASONS = [
  {
    n: "01",
    title: "National visibility.",
    body: "Premium exposure across digital, social, radio, billboards, PR, and on-site — before, during, and after the event.",
  },
  {
    n: "02",
    title: "Category exclusivity.",
    body: "Zone Sponsors receive exclusive naming rights — caravans, 4×4, boating, cycling, apparel, outdoor living, and more.",
  },
  {
    n: "03",
    title: "A brand-positive environment.",
    body: "A premium, high-energy event where sponsors are seen as community-focused, forward-thinking lifestyle brands.",
  },
  {
    n: "04",
    title: "Deep engagement.",
    body: "Demos, signage, zone activations, competitions — real interaction that builds trust and long-term brand recall.",
  },
  {
    n: "05",
    title: "Multi-channel backing.",
    body: "Radio campaigns, billboards, digital ads, email, social, influencers, printed materials — every sponsor amplified.",
  },
];

function WhySponsor() {
  return (
    <section className="bg-paper section-content">
      <div className="container-site">
        <div className="container-prose mb-8 md:mb-10">
          <Eyebrow>Why sponsor</Eyebrow>
          <h2 className="text-h1 font-extrabold text-green-500 mb-3 mt-2">
            Partner with NZ&apos;s
            <br />
            largest outdoor expo.
          </h2>
          <p className="text-body-l text-dark-grey">
            More than 300 exhibitors across automotive, caravans, motorsports,
            cycling, boating, outdoor living, apparel, tourism, and artisanal
            goods — and a diverse national audience ready to engage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {REASONS.map((r) => (
            <div
              key={r.n}
              className="bg-white p-4 rounded border-t-4 border-orange-500"
            >
              <div className="font-heading font-extrabold text-h2 text-orange-500 leading-none mb-2">
                {r.n}
              </div>
              <h3 className="text-h3 font-bold text-charcoal mb-2 leading-tight">
                {r.title}
              </h3>
              <p className="text-body text-dark-grey">{r.body}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 justify-center mt-8 md:mt-10">
          <Button href={SPONSOR_PROSPECTUS_URL} variant="primary" size="lg">
            Download Sponsor Prospectus
          </Button>
          <Button href="#apply" variant="outline-charcoal" size="lg">
            Talk to Us
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ============== 4 · AUDIENCE ============== */
const PERSONAS = [
  {
    img: "/sponsor/p1-family.jpg",
    title: "The Active Family Household",
    age: "35–45",
    body: "Looking for safe vehicles, caravans, travel ideas, outdoor living, bikes, e-bikes, and practical lifestyle upgrades.",
  },
  {
    img: "/sponsor/p2-young.jpg",
    title: "The Young Professional Explorer",
    age: "25–35",
    body: "Enjoys short getaways, emerging gear, mobility solutions, gadgets, cycling, and entry-level adventure products.",
  },
  {
    img: "/sponsor/p3-mature.jpg",
    title: "The Comfort-Focused Mature Traveller",
    age: "55–70",
    body: "High disposable income, prioritises comfort-first travel, motorhomes, caravans, boating, and premium outdoor living.",
  },
  {
    img: "/sponsor/p4-homeowner.jpg",
    title: "The Practical, Value-Driven Homeowner",
    age: "40–65",
    body: "Owns a home or lifestyle property; invests in vehicles, tools, outdoor living systems, garden and homestead upgrades.",
  },
];

function Audience() {
  return (
    <section className="bg-white section-content">
      <div className="container-site">
        <div className="container-prose mb-7">
          <Eyebrow>Who attends</Eyebrow>
          <h2 className="text-h1 font-extrabold text-charcoal mb-3 mt-2">
            A high-value lifestyle audience.
          </h2>
          <p className="text-body-l text-dark-grey">
            Our visitors represent a broad cross-section of New Zealanders —
            those who actively invest in their homes, vehicles, lifestyle,
            hobbies, travel, and outdoor gear.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PERSONAS.map((p) => (
            <article
              key={p.title}
              className="bg-paper rounded overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] bg-sand">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-3 flex-grow flex flex-col">
                <h3 className="font-heading font-bold text-body-l text-charcoal mb-1 leading-tight">
                  {p.title}
                </h3>
                <div className="text-eyebrow uppercase tracking-[0.08em] font-semibold text-orange-500 mb-2">
                  Age {p.age}
                </div>
                <p className="text-body-s text-dark-grey">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 justify-center mt-8 md:mt-10">
          <Button href="#apply" variant="primary" size="lg">
            Talk to Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ============== 5 · MARKETING REACH ============== */
const CHANNELS = [
  "Radio campaigns",
  "Billboards & outdoor",
  "Digital advertising",
  "Email newsletters",
  "Social media",
  "Influencer content",
  "Printed materials",
  "National PR",
];

function MarketingReach() {
  return (
    <section className="bg-paper section-content">
      <div className="container-site">
        <div className="container-prose mb-7">
          <Eyebrow>Amplify your brand</Eyebrow>
          <h2 className="text-h1 font-extrabold text-charcoal mb-3 mt-2">
            A marketing engine that works for you.
          </h2>
          <p className="text-body-l text-dark-grey">
            Our proven multi-channel campaign delivers massive visibility for
            sponsors — before, during, and after the event.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-5">
          {CHANNELS.map((c) => (
            <span
              key={c}
              className="inline-block px-3 py-2 bg-white rounded text-body-s font-semibold text-charcoal border border-light-grey"
            >
              {c}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <Button href={PROGRAM_BOOK_URL} variant="outline-charcoal" size="md">
            View the Program Book
          </Button>
          <Button href={SAMPLE_RADIO_URL} variant="outline-charcoal" size="md">
            Sample Radio Spots
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ============== 6 · ZONES ============== */
const ZONES = [
  "Caravans & Motorhomes",
  "Vehicles & Motorbikes",
  "4×4 & Overlanding",
  "Boating & Marine",
  "Cycling & E-Bikes",
  "Hunting & Fishing",
  "Outdoor Living",
  "Camping & Hiking",
  "Apparel & Footwear",
  "Tourism & Travel",
  "Food & Beverage",
  "Artisanal Goods",
];

function Zones() {
  return (
    <section className="bg-white section-content">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <Eyebrow>Explore the zones</Eyebrow>
            <h2 className="text-h1 font-extrabold text-charcoal mb-3 mt-2">
              Find your category.
            </h2>
            <p className="text-body-l text-dark-grey mb-4">
              Zone Sponsors receive official naming rights — positioning your
              brand as the recognised leader within its category.
            </p>
            <Button href={EXPO_MAP_URL} variant="outline-charcoal" size="md">
              View 2025 Expo Map
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {ZONES.map((z) => (
              <div
                key={z}
                className="bg-paper rounded px-3 py-2 text-body-s font-semibold text-charcoal border-l-2 border-green-500"
              >
                {z}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== 7 · SPONSORSHIP TIERS ============== */
const TIERS = [
  {
    badge: "Platinum",
    eyebrowVariant: "orange" as const,
    title: "Expo Naming Rights Partner",
    blurb:
      "The highest level of visibility across every event channel — radio, PR, signage, digital, print.",
    items: [
      "Event-wide naming rights",
      "Radio campaign naming integration",
      "National PR inclusion",
      "Premium main gate signage",
      "Two full-page features + ad in Digital Visitor Program",
      "Homepage hero logo for 12 months",
      "8 VIP parking passes · 15 function tickets",
    ],
    highlight: true,
  },
  {
    badge: "Gold",
    eyebrowVariant: "default" as const,
    title: "Exclusive Zone Sponsor",
    blurb:
      "Become the official brand partner for a high-traffic zone — caravans, cycling, 4×4, outdoor living, boating, and more.",
    items: [
      "Exclusive naming rights to one zone",
      "Branded zone signage",
      "Two full-page ads in Digital Visitor Program",
      "Homepage logo (12 months)",
      "Dedicated zone social promotion",
      "5 VIP parking passes · 10 function tickets",
    ],
    highlight: false,
  },
  {
    badge: "Silver",
    eyebrowVariant: "default" as const,
    title: "Featured Brand Partner",
    blurb:
      "A strong entry-level package for brands looking to gain meaningful visibility.",
    items: [
      "Full-page ad in Digital Visitor Program",
      "Homepage logo (12 months)",
      "Site signage",
      "2 dedicated social posts",
      "2 VIP parking passes · 5 function tickets",
    ],
    highlight: false,
  },
];

function Tiers() {
  return (
    <section className="bg-paper section-content">
      <div className="container-site">
        <div className="container-prose mx-auto mb-7 text-center">
          <Eyebrow>Sponsorship tiers</Eyebrow>
          <h2 className="text-h1 font-extrabold text-charcoal mb-3 mt-2">
            Three ways to partner.
          </h2>
          <p className="text-body-l text-dark-grey">
            From event-wide naming rights to zone exclusivity and featured
            brand placements — find the level that fits your goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {TIERS.map((t) => (
            <div
              key={t.badge}
              className={`bg-white rounded p-4 md:p-5 flex flex-col ${
                t.highlight
                  ? "border-2 border-orange-500 md:scale-[1.02] shadow-md"
                  : "border border-light-grey"
              }`}
            >
              <div className="mb-3">
                <span
                  className={`inline-block uppercase tracking-[0.1em] font-extrabold text-body-s px-2 py-1 rounded ${
                    t.highlight
                      ? "bg-orange-500 text-white"
                      : "bg-paper text-charcoal"
                  }`}
                >
                  {t.badge}
                </span>
              </div>
              <h3 className="text-h3 font-bold text-charcoal mb-2 leading-tight">
                {t.title}
              </h3>
              <p className="text-body text-dark-grey mb-4">{t.blurb}</p>
              <ul className="list-none p-0 mb-4 flex-grow">
                {t.items.map((item) => (
                  <li
                    key={item}
                    className="relative py-1 text-body-s text-dark-grey"
                    style={{ paddingLeft: 22 }}
                  >
                    <span className="absolute left-0 top-1 text-green-500 font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-body-s text-mid-grey italic">+ more in the prospectus</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-7">
          <Button
            href={SPONSOR_PROSPECTUS_URL}
            variant="primary"
            size="lg"
          >
            See Full Tier Details (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ============== 8 · PROCESS ============== */
const STEPS = [
  {
    n: "01",
    title: "Explore available zones.",
    body: "Review the prospectus, zone list, and 2025 layout to find the right fit.",
  },
  {
    n: "02",
    title: "Submit your interest.",
    body: "Email us or use the contact form — a quick note about your brand and which tier interests you.",
  },
  {
    n: "03",
    title: "We confirm availability.",
    body: "Our team checks zone and tier availability and confirms exclusivity within your category.",
  },
  {
    n: "04",
    title: "Contract & activation.",
    body: "Sign the agreement and start activation planning — signage, integrations, marketing assets.",
  },
  {
    n: "05",
    title: "Marketing rollout begins.",
    body: "Your brand goes live across our multi-channel campaign — radio, digital, social, PR, print.",
  },
];

function Process() {
  return (
    <section className="bg-white section-content">
      <div className="container-site">
        <div className="container-prose mb-7">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="text-h1 font-extrabold text-charcoal mb-3 mt-2">
            Securing your sponsorship.
          </h2>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 list-none p-0">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="bg-paper rounded p-4 border-t-2 border-green-500"
            >
              <div className="font-heading font-extrabold text-h2 text-green-500 leading-none mb-2">
                {s.n}
              </div>
              <h3 className="font-heading font-bold text-body-l text-charcoal mb-2 leading-tight">
                {s.title}
              </h3>
              <p className="text-body-s text-dark-grey">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="flex flex-wrap gap-2 justify-center mt-8 md:mt-10">
          <Button href="#apply" variant="primary" size="lg">
            Start Your Application
          </Button>
          <Button href={SPONSOR_PROSPECTUS_URL} variant="outline-charcoal" size="lg">
            Download Prospectus
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ============== 9 · APPLICATION FORM ============== */
function ApplicationForm() {
  return (
    <section id="apply" className="bg-paper section-content scroll-mt-20">
      <div className="container-site">
        <div className="container-prose mx-auto mb-7">
          <Eyebrow>Become a sponsor</Eyebrow>
          <h2 className="text-h1 font-extrabold text-charcoal mb-3 mt-2">
            Talk to us about partnership.
          </h2>
          <p className="text-body-l text-dark-grey mb-2">
            Fill out the form and our team will be in touch as soon as
            possible. We&apos;ll confirm availability, walk you through the
            tiers, and tailor a package that fits your goals.
          </p>
          <p className="text-body text-dark-grey">
            Before applying, we recommend reviewing the{" "}
            <a
              href={SPONSOR_PROSPECTUS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:text-orange-700"
            >
              2026 Sponsor Prospectus
            </a>{" "}
            for tier details and pricing.
          </p>
        </div>
        <div className="max-w-prose mx-auto">
          <HubSpotFormWithTracking
            portalId="44544113"
            formId="58110572-7435-4206-aec2-8c89f7b8a61d"
            region="ap1"
            eventName="sponsor_inquiry"
            eventParams={{ form_location: "sponsor_page" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ============== 10 · CTA STRIP (CONTACT) ============== */
function CtaStrip() {
  return (
    <section
      id="contact"
      className="relative text-white section-content overflow-hidden scroll-mt-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(30,120,58,0.85), rgba(30,120,58,0.85)), url('/sponsor/audience-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-site text-center">
        <Eyebrow variant="orange">Become a sponsor</Eyebrow>
        <h2 className="text-h1 font-extrabold text-white mb-3 mt-2 max-w-prose mx-auto">
          Ready to put your brand at the centre of the South Island?
        </h2>
        <p className="text-body-l text-white opacity-95 mb-5 max-w-prose mx-auto">
          Download the prospectus or email our team directly. We&apos;ll
          confirm availability, walk you through the tiers, and tailor a
          package that fits your goals.
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          <Button
            href={SPONSOR_PROSPECTUS_URL}
            variant="primary"
            size="lg"
          >
            Download Prospectus (PDF)
          </Button>
          <Button
            href={`mailto:${CONTACT_EMAIL}?subject=Sponsorship%20enquiry%20—%20Outdoor%20Expo%202026`}
            variant="outline-white"
            size="lg"
          >
            Email Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}
