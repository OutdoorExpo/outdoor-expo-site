import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/Eyebrow";
import { Newsletter } from "@/components/home/Newsletter";
import exhibitors from "@/lib/exhibitors-2025.json";
import { CONFIRMED_2026_SET } from "@/lib/exhibitors-2026-confirmed";
import { EVENT_DATES, EVENT_VENUE_SHORT } from "@/lib/constants";

/**
 * Individual exhibitor detail page — /exhibitors/[slug]
 *
 * Why this exists:
 *   The old Wix site had 180+ /product-page/[slug] URLs (one per exhibitor),
 *   many of which had real Google rankings + external backlinks. To preserve
 *   that SEO equity post-migration, next.config.js 301s /product-page/[slug]
 *   → /exhibitors/[slug] (this page). Without these detail pages all the
 *   per-exhibitor link juice would collapse onto a single directory page.
 *
 * Build mode:
 *   Statically generated at build time via generateStaticParams(). 194 HTML
 *   pages (one per row in exhibitors-2025.json). No runtime DB calls.
 */

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

// Index for O(1) lookup
const bySlug = new Map<string, Exhibitor>(data.map((e) => [e.slug, e]));

/**
 * Tell Next.js which slugs to pre-render at build time.
 * Returning the full set generates all 194 pages — none fall back to runtime.
 */
export function generateStaticParams() {
  return data.map((e) => ({ slug: e.slug }));
}

/**
 * Per-page <title> + meta description. Each exhibitor gets a unique pair so
 * Google can index them as distinct documents rather than treating them as
 * near-duplicates of the directory page.
 */
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const exhibitor = bySlug.get(params.slug);
  if (!exhibitor) {
    return { title: "Exhibitor not found" };
  }

  // Trim the description for the meta tag — Google typically shows ~155 chars.
  const rawDesc = exhibitor.description?.replace(/\s+/g, " ").trim() ?? "";
  const trimmed =
    rawDesc.length > 155 ? rawDesc.slice(0, 152).trim() + "…" : rawDesc;
  const fallback = `${exhibitor.name} is exhibiting at Outdoor Expo 2026 — ${EVENT_DATES}, ${EVENT_VENUE_SHORT}, Christchurch.`;

  return {
    title: `${exhibitor.name} at Outdoor Expo 2026`,
    description: trimmed || fallback,
    alternates: {
      canonical: `/exhibitors/${exhibitor.slug}`,
    },
    openGraph: {
      title: `${exhibitor.name} at Outdoor Expo 2026`,
      description: trimmed || fallback,
      url: `/exhibitors/${exhibitor.slug}`,
      type: "website",
      images: exhibitor.logo ? [{ url: exhibitor.logo }] : undefined,
    },
  };
}

export default function ExhibitorDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const exhibitor = bySlug.get(params.slug);
  if (!exhibitor) {
    notFound();
  }

  const isConfirmed2026 = CONFIRMED_2026_SET.has(exhibitor.slug);
  // Split description on blank lines so paragraph breaks from the Wix import
  // (encoded as \n\n) render correctly.
  const paragraphs = (exhibitor.description ?? "")
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <>
      <Hero exhibitor={exhibitor} isConfirmed2026={isConfirmed2026} />
      <Body paragraphs={paragraphs} exhibitor={exhibitor} />
      <RelatedCTA />
      <Newsletter />
    </>
  );
}

/* ============== HERO ============== */
function Hero({
  exhibitor,
  isConfirmed2026,
}: {
  exhibitor: Exhibitor;
  isConfirmed2026: boolean;
}) {
  return (
    <section className="bg-paper section-content">
      <div className="container-site">
        <div className="mb-3">
          <Link
            href="/exhibitors"
            className="text-body-s text-dark-grey hover:text-green-500 no-underline"
          >
            ← All exhibitors
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[260px,1fr] gap-4 md:gap-6 items-start">
          {/* Logo */}
          <div className="bg-white border border-light-grey rounded aspect-[3/2] md:aspect-square flex items-center justify-center overflow-hidden p-4">
            {exhibitor.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={exhibitor.logo}
                alt={`${exhibitor.name} logo`}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <span className="text-mid-grey font-heading text-h1">
                {exhibitor.name[0]}
              </span>
            )}
          </div>

          {/* Title block */}
          <div>
            <Eyebrow>
              {isConfirmed2026 ? "Confirmed for 2026" : "2025 Exhibitor"}
            </Eyebrow>
            <h1 className="text-h1 font-extrabold text-charcoal mb-3 mt-2 leading-tight">
              {exhibitor.name}
            </h1>

            {/* Quick links */}
            <div className="flex flex-wrap gap-2 mb-3">
              {exhibitor.website && (
                <LinkPill href={exhibitor.website} label="Visit Website" primary />
              )}
              {exhibitor.instagram && (
                <LinkPill href={exhibitor.instagram} label="Instagram" />
              )}
              {exhibitor.facebook && (
                <LinkPill href={exhibitor.facebook} label="Facebook" />
              )}
              {exhibitor.youtube && (
                <LinkPill href={exhibitor.youtube} label="YouTube" />
              )}
            </div>

            {/* Show the 2026 commitment line ONLY for exhibitors confirmed
                for the 2026 line-up. For 2025-only exhibitors, we don't
                imply they'll be at the next event — that would be a false
                promise. The eyebrow above already labels which group the
                page belongs to. */}
            {isConfirmed2026 && (
              <p className="text-body text-dark-grey">
                See {exhibitor.name} at <strong>Outdoor Expo 2026</strong> —{" "}
                {EVENT_DATES}, {EVENT_VENUE_SHORT}, Christchurch.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== BODY ============== */
function Body({
  paragraphs,
  exhibitor,
}: {
  paragraphs: string[];
  exhibitor: Exhibitor;
}) {
  if (paragraphs.length === 0) return null;
  return (
    <section className="bg-white section-content">
      <div className="container-site">
        <div className="container-prose">
          <h2 className="text-h3 font-bold text-charcoal mb-3">
            About {exhibitor.name}
          </h2>
          <div>
            {paragraphs.map((p, i) => (
              <p key={i} className="text-body text-dark-grey mb-3 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== CTA ============== */
function RelatedCTA() {
  return (
    <section className="bg-paper section-content">
      <div className="container-site">
        <div className="text-center">
          <h2 className="text-h2 font-extrabold text-charcoal mb-2">
            Explore more exhibitors
          </h2>
          <p className="text-body-l text-dark-grey mb-3 max-w-2xl mx-auto">
            Camping, campervans, boats, outdoor gear, adventure, lifestyle — see
            the full line-up confirmed for {EVENT_DATES}.
          </p>
          <Link
            href="/exhibitors"
            className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold uppercase tracking-wider text-body-s px-4 py-2 rounded no-underline transition-colors"
          >
            View all exhibitors
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============== Small UI ============== */
function LinkPill({
  href,
  label,
  primary,
}: {
  href: string;
  label: string;
  primary?: boolean;
}) {
  if (primary) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold uppercase tracking-wider text-body-s px-3 py-1.5 rounded no-underline transition-colors"
      >
        {label}
      </a>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-sand hover:bg-green-50 hover:text-green-500 text-charcoal font-semibold uppercase tracking-wider text-body-s px-3 py-1.5 rounded no-underline transition-colors"
    >
      {label}
    </a>
  );
}
