import { Eyebrow } from "@/components/Eyebrow";
import { Newsletter } from "@/components/home/Newsletter";
import exhibitors from "@/lib/exhibitors-2025.json";

export const metadata = {
  title: "Exhibitors",
  description:
    "The 2025 exhibitor line-up at Outdoor Expo. Many of these brands are already confirmed for 2026, with new exhibitors joining every week.",
};

type Exhibitor = {
  slug: string;
  name: string;
  description: string;
  logo: string | null;
  website: string | null;
  instagram: string | null;
  facebook: string | null;
  youtube: string | null;
};

const data = exhibitors as Exhibitor[];

export default function ExhibitorsPage() {
  return (
    <>
      <Hero />
      <Grid />
      <Newsletter />
    </>
  );
}

/* ============== HERO ============== */
function Hero() {
  return (
    <section className="bg-paper section-content">
      <div className="container-site">
        <div className="container-prose">
          <Eyebrow>2025 Line-up</Eyebrow>
          <h1 className="text-h1 font-extrabold text-charcoal mb-3 mt-2">
            The brands you met in 2025.
            <br />
            Many are already back for 2026.
          </h1>
          <p className="text-body-l text-dark-grey mb-3">
            Here&apos;s the full directory of exhibitors from Outdoor Expo
            2025. Many of these brands have already confirmed their stand for
            2026 — and new exhibitors are joining the line-up every week.
          </p>
          <p className="text-body text-dark-grey">
            <strong>Stay tuned.</strong> Follow us on{" "}
            <a
              href="https://www.instagram.com/outdoorexponz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:text-orange-700"
            >
              Instagram
            </a>{" "}
            or{" "}
            <a
              href="https://www.facebook.com/outdoorexponz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:text-orange-700"
            >
              Facebook
            </a>{" "}
            to be the first to hear about the 2026 line-up as it&apos;s
            announced.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============== GRID ============== */
function Grid() {
  return (
    <section className="bg-white section-content">
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {data.map((e) => (
            <Card key={e.slug} e={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== CARD ============== */
function Card({ e }: { e: Exhibitor }) {
  const primaryLink =
    e.website || e.instagram || e.facebook || e.youtube || null;
  const description =
    e.description && e.description.length > 140
      ? e.description.slice(0, 137).trim() + "…"
      : e.description;

  return (
    <article className="flex flex-col bg-white border border-light-grey rounded p-3 hover:border-green-500 transition-colors">
      {/* Logo */}
      <a
        href={primaryLink ?? "#"}
        target={primaryLink ? "_blank" : undefined}
        rel={primaryLink ? "noopener noreferrer" : undefined}
        className="block aspect-[3/2] bg-sand rounded mb-2 flex items-center justify-center overflow-hidden p-2"
        aria-label={`${e.name} — open website`}
      >
        {e.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={e.logo}
            alt={`${e.name} logo`}
            loading="lazy"
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <span className="text-mid-grey font-heading text-h3">
            {e.name[0]}
          </span>
        )}
      </a>

      {/* Name */}
      <h3 className="font-heading font-bold text-charcoal text-body-l mb-1 leading-tight">
        {primaryLink ? (
          <a
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 no-underline"
          >
            {e.name}
          </a>
        ) : (
          e.name
        )}
      </h3>

      {/* Description */}
      {description && (
        <p className="text-body-s text-dark-grey mb-2 flex-grow">
          {description}
        </p>
      )}

      {/* Links */}
      <div className="flex flex-wrap gap-1 mt-auto pt-1">
        {e.website && <Pill href={e.website} label="Website" />}
        {e.instagram && <Pill href={e.instagram} label="Instagram" />}
        {e.facebook && <Pill href={e.facebook} label="Facebook" />}
        {e.youtube && <Pill href={e.youtube} label="YouTube" />}
      </div>
    </article>
  );
}

function Pill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-2 py-0.5 text-[11px] uppercase tracking-[0.06em] font-semibold text-mid-grey bg-sand rounded-sm hover:bg-green-50 hover:text-green-500 transition-colors no-underline"
    >
      {label}
    </a>
  );
}
