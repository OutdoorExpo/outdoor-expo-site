import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Newsletter } from "@/components/home/Newsletter";
import { FaqAccordion } from "./FaqAccordion";

export const metadata = {
  title: "Official Ambassadors",
  description:
    "Meet the Official Ambassadors of Outdoor Expo 2026. Real people who live and breathe the outdoors — here to inspire, demonstrate, and connect with you at Canterbury Agricultural Park, 2–4 October 2026.",
};

export default function AmbassadorsPage() {
  return (
    <>
      <Hero />
      <AmbassadorCards />
      <WhatYouGet />
      <WhatWeAsk />
      <StatsBar />
      <BecomeAmbassador />
      <Faqs />
      <Newsletter />
    </>
  );
}

/* ─────────────────────────────────────────
   1 · HERO
───────────────────────────────────────── */
const ANCHORS = [
  { href: "#ambassadors", label: "Meet the ambassadors" },
  { href: "#become", label: "Become an ambassador" },
];

function Hero() {
  return (
    <section
      className="relative flex items-end text-white py-12 md:py-15 overflow-hidden min-h-[420px] md:min-h-[480px] lg:min-h-[520px]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,14,12,0.45) 0%, rgba(15,14,12,0.70) 100%), url('/ambassadors/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="container-site relative z-10 w-full">
        <div className="container-prose">
          <Eyebrow variant="orange">Official Ambassador Programme</Eyebrow>
          <h1 className="text-h1 font-extrabold text-white mb-3 mt-2 leading-[1.1]">
            Meet Our 2026
            <br />
            Ambassadors.
          </h1>
          <p className="text-body-l text-white opacity-90 mb-5 max-w-[540px]">
            Real people who live and breathe the outdoors — here to inspire,
            demonstrate, and connect at Canterbury Agricultural Park,
            2–4 October 2026.
          </p>
          <div className="flex flex-wrap gap-2">
            {ANCHORS.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="inline-flex items-center h-btn px-4 rounded-full border border-white/50 text-white text-label uppercase tracking-[0.08em] font-semibold hover:bg-white hover:text-charcoal transition-all text-sm"
              >
                {a.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   2 · AMBASSADOR CARDS
───────────────────────────────────────── */
const AMBASSADORS = [
  {
    id: 1,
    name: "Alex Pemberton",
    specialty: "Backcountry Tramping & Landscape Photography",
    demoTent: true,
    social: { instagram: "https://instagram.com/outdoorexponz", facebook: null },
    image: "/ambassadors/placeholder-1.jpg",
    bio: "Alex has spent the last decade documenting New Zealand's wildest places — from Fiordland's remote valleys to the Kaikōura coastline. Catch his Demo Tent session on planning and photographing multi-day backcountry trips.",
  },
  {
    id: 2,
    name: "Sarah Te Ruki",
    specialty: "Trail Riding & Women in MTB",
    demoTent: true,
    social: { instagram: "https://instagram.com/outdoorexponz", facebook: null },
    image: "/ambassadors/placeholder-2.jpg",
    bio: "A certified mountain bike guide, Sarah runs women's riding programmes across Canterbury and the West Coast. Catch her Demo Tent session for tips on building confidence on technical terrain.",
  },
  {
    id: 3,
    name: "Dave & Mel Hargreaves",
    specialty: "Campervans, Family Trips & Gear Reviews",
    demoTent: false,
    social: {
      instagram: "https://instagram.com/outdoorexponz",
      facebook: "https://facebook.com/outdoorexponz",
    },
    image: "/ambassadors/placeholder-3.jpg",
    bio: "Dave and Mel have campervan'd every corner of Aotearoa with their three kids. As family camping advocates they bring a practical, no-nonsense approach to getting the whole whānau outdoors.",
  },
];

function AmbassadorCards() {
  return (
    <section id="ambassadors" className="bg-paper section-content">
      <div className="container-site">
        <div className="text-center mb-8 md:mb-10">
          <Eyebrow>2026 Line-up</Eyebrow>
          <h2 className="text-h2 font-extrabold text-green-500 mt-2">
            Confirmed Ambassadors
          </h2>
          <p className="text-body text-dark-grey mt-2 max-w-[520px] mx-auto">
            Selected for their genuine passion, real audiences, and deep
            knowledge of their craft.
          </p>
        </div>

        {/* Grid: 3 confirmed + 1 mystery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {AMBASSADORS.map((amb) => (
            <AmbCard key={amb.id} amb={amb} />
          ))}
          <ComingSoonCard />
        </div>
      </div>
    </section>
  );
}

function AmbCard({ amb }: { amb: (typeof AMBASSADORS)[0] }) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-light-grey flex flex-col group">
      {/* Photo */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <div
          className="w-full h-full bg-cover bg-center bg-green-800 transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${amb.image}')` }}
          role="img"
          aria-label={amb.name}
        />
        {amb.demoTent && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-[0.08em] px-2 py-1 rounded-full">
            🎤 Demo Tent Speaker
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-orange-500 mb-1">
          {amb.specialty}
        </p>
        <h3 className="font-extrabold text-green-500 text-[1.1rem] leading-tight mb-2">
          {amb.name}
        </h3>
        <p className="text-body-s text-dark-grey mb-3 leading-relaxed flex-1">
          {amb.bio}
        </p>

        {/* Social links */}
        <div className="flex gap-2 mt-auto">
          {amb.social.instagram && (
            <a
              href={amb.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${amb.name} on Instagram`}
              className="w-8 h-8 rounded-full bg-paper flex items-center justify-center text-charcoal hover:bg-green-500 hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          )}
          {amb.social.facebook && (
            <a
              href={amb.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${amb.name} on Facebook`}
              className="w-8 h-8 rounded-full bg-paper flex items-center justify-center text-charcoal hover:bg-green-500 hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ComingSoonCard() {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-dashed border-green-300 flex flex-col">
      {/* Silhouette */}
      <div
        className="relative overflow-hidden bg-green-800"
        style={{ aspectRatio: "3/4" }}
      >
        {/* Blurred human silhouette */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 200 280"
            className="w-full h-full opacity-15"
            fill="white"
          >
            <circle cx="100" cy="72" r="40" />
            <ellipse cx="100" cy="195" rx="62" ry="82" />
          </svg>
        </div>
        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-green-900/40">
          <span className="text-white text-5xl font-extrabold opacity-60">?</span>
          <span className="text-white/80 text-[11px] font-bold uppercase tracking-[0.12em] text-center px-4">
            Coming Soon
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1 items-center justify-center text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-orange-500 mb-1">
          To Be Revealed
        </p>
        <h3 className="font-extrabold text-green-500 text-[1.1rem] leading-tight mb-2">
          More Ambassadors
          <br />
          on the Way
        </h3>
        <p className="text-body-s text-dark-grey">
          Follow{" "}
          <a
            href="https://instagram.com/outdoorexponz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 underline hover:text-orange-400"
          >
            @outdoorexponz
          </a>{" "}
          to be first to know.
        </p>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────
   3 · WHAT YOU GET
───────────────────────────────────────── */
const BENEFITS = [
  {
    icon: "🌐",
    title: "Ambassador Page",
    body: "Your profile — bio, photo and links — featured on outdoorexpo.co.nz for the full season.",
  },
  {
    icon: "🎟️",
    title: "Free Family Pass",
    body: "2 adults + 2 children (+ more when needed). Enjoy the Expo with your whānau.",
  },
  {
    icon: "📱",
    title: "Social Media Feature",
    body: "Dedicated posts on our Facebook & Instagram introducing you to our growing audience.",
  },
  {
    icon: "📬",
    title: "Newsletter Feature",
    body: "Featured in our newsletter to 2,000+ subscribers. Our open rate is 38% — 1.6× industry average.",
  },
  {
    icon: "🎤",
    title: "Demo Tent Session",
    body: "A 30-min live session in the Expo's busiest zone. Teach, demonstrate, and sell direct to a live audience.",
  },
  {
    icon: "🤝",
    title: "Exhibitor Function Invite",
    body: "Join 200+ exhibitors at our pre-event networking dinner (Thu 1 Oct). Meet the brands you've been wanting to work with — face to face.",
  },
];

function WhatYouGet() {
  return (
    <section className="bg-green-900 section-content text-white">
      <div className="container-site">
        <div className="text-center mb-8 md:mb-10">
          <Eyebrow variant="white">Ambassador Benefits</Eyebrow>
          <h2 className="text-h2 font-extrabold text-white mt-2">
            What you get.
          </h2>
          <p className="text-body text-white/75 mt-2 max-w-[480px] mx-auto">
            Everything included as an Official Outdoor Expo 2026 Ambassador.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="bg-white/10 rounded-xl p-5 border border-white/10 hover:bg-white/15 transition-colors"
            >
              <div className="text-2xl mb-3">{b.icon}</div>
              <h3 className="font-extrabold text-white text-[1.05rem] mb-1">{b.title}</h3>
              <p className="text-body-s text-white/70 leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   4 · WHAT WE ASK
───────────────────────────────────────── */
const ASKS = [
  {
    num: "01",
    text: "2 posts or Stories (Instagram/Facebook) before the event — mention Outdoor Expo 2026 and tag @outdoorexponz.",
  },
  {
    num: "02",
    text: "1 post or Reel at or after the Expo sharing your experience — photos, video, whatever feels natural to you.",
  },
  {
    num: "03",
    text: "Include #OutdoorExpo2026 and a disclosure tag (#ad or #partner) — required under NZ ASA advertising guidelines.",
  },
];

function WhatWeAsk() {
  return (
    <section className="bg-paper section-content">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <Eyebrow>Just 3 things</Eyebrow>
            <h2 className="text-h2 font-extrabold text-green-500 mt-2 mb-4">
              What we ask of you.
            </h2>
            <p className="text-body text-dark-grey">
              We keep it simple. No complicated deliverable schedules — just
              genuine content from someone who loves the outdoors.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {ASKS.map((a) => (
              <div key={a.num} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white font-extrabold flex items-center justify-center text-sm">
                  {a.num}
                </span>
                <p className="text-body text-charcoal leading-relaxed pt-2">
                  {a.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   5 · STATS BAR
───────────────────────────────────────── */
const STATS = [
  { value: "200+", label: "Exhibitors" },
  { value: "20,000+", label: "Expected Visitors" },
  { value: "3 Days", label: "New in 2026" },
  { value: "12", label: "Categories" },
];

function StatsBar() {
  return (
    <section className="bg-green-600 section-compact text-white">
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-h2 font-extrabold text-white leading-none">
                {s.value}
              </p>
              <p className="text-body-s text-white/70 mt-1 uppercase tracking-[0.06em]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   6 · BECOME AN AMBASSADOR
───────────────────────────────────────── */
const STEPS = [
  {
    icon: "✉️",
    title: "Reply YES",
    body: "Let us know you're in — and whether you'd like a Demo Tent session.",
  },
  {
    icon: "📋",
    title: "Sign the Agreement",
    body: "We'll send a simple 1-page agreement. Quick to read, easy to sign.",
  },
  {
    icon: "🏕️",
    title: "Get Featured",
    body: "We'll set up your Ambassador Page, newsletter feature, and social posts straight away.",
  },
];

function BecomeAmbassador() {
  return (
    <section id="become" className="bg-charcoal section-content text-white">
      <div className="container-site">
        <div className="text-center mb-8 md:mb-10">
          <Eyebrow variant="white">Join the programme</Eyebrow>
          <h2 className="text-h2 font-extrabold text-white mt-2 mb-3">
            Ready to come on board?
          </h2>
          <p className="text-body text-white/70 max-w-[480px] mx-auto mb-6">
            We&apos;re building the 2026 ambassador roster now. Earlier
            confirmations get more website and newsletter lead time — but reach
            out any time before July.
          </p>
          <Button
            variant="primary"
            size="lg"
            href="mailto:mido@outdoorexpo.co.nz?subject=Ambassador Programme — I'm in"
          >
            Get in touch
          </Button>
        </div>

        {/* 3-step flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-[760px] mx-auto">
          {STEPS.map((step) => (
            <div key={step.title} className="flex gap-4 md:flex-col md:items-center md:text-center">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-lg">
                {step.icon}
              </div>
              <div>
                <h4 className="font-extrabold text-white text-[1rem] mb-1">
                  {step.title}
                </h4>
                <p className="text-body-s text-white/60 leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-body-s text-white/35 mt-8">
          No cash payment — this is an in-kind programme. Questions?{" "}
          <a
            href="https://instagram.com/outdoorexponz"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/60 transition-colors"
          >
            DM @outdoorexponz
          </a>{" "}
          or email{" "}
          <a
            href="mailto:info@outdoorexpo.co.nz"
            className="underline hover:text-white/60 transition-colors"
          >
            info@outdoorexpo.co.nz
          </a>
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   7 · FAQ
───────────────────────────────────────── */
function Faqs() {
  return (
    <section className="bg-white section-content">
      <div className="container-site max-w-[760px] mx-auto">
        <div className="text-center mb-8">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="text-h2 font-extrabold text-green-500 mt-2">
            Common questions.
          </h2>
        </div>
        <FaqAccordion />
      </div>
    </section>
  );
}
