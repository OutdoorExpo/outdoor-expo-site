import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blog/posts";
import { PostHero } from "@/components/blog/PostHero";
import { PostBody } from "@/components/blog/PostBody";
import { PostIntro } from "@/components/blog/PostIntro";
import { PostFigure } from "@/components/blog/PostFigure";
import { PostGrid } from "@/components/blog/PostGrid";
import { PostChecklist } from "@/components/blog/PostChecklist";
import { PostQuote } from "@/components/blog/PostQuote";
import { PostArrowList } from "@/components/blog/PostArrowList";
import { PostCTA } from "@/components/blog/PostCTA";

const SLUG = "duck-hunting-2026";
const SITE_URL = "https://www.outdoorexpo.co.nz";

const post = getPostBySlug(SLUG);

export const metadata: Metadata = post
  ? {
      title: `${post.title} | Outdoor Expo NZ`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
        url: `${SITE_URL}/blog/${SLUG}`,
        publishedTime: post.publishedAt,
        authors: [post.author],
        tags: post.tags,
        images: [
          {
            url: `${SITE_URL}${post.heroImage.src}`,
            width: 2000,
            height: 1500,
            alt: post.heroImage.alt,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt,
        images: [`${SITE_URL}${post.heroImage.src}`],
      },
    }
  : {};

export default function DuckHunting2026Post() {
  if (!post) notFound();

  // JSON-LD structured data for Google rich results.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [`${SITE_URL}${post.heroImage.src}`],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Outdoor Expo",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${SLUG}`,
    },
    keywords: post.tags?.join(", "),
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <PostHero post={post} />

      <PostBody>
        <PostIntro tag="First timer? Don't worry — we've got you sorted.">
          It&apos;s 3:30am. Your phone alarm goes off and for a second, you
          seriously question every life choice that led to this moment. But
          your mate&apos;s already sent the &ldquo;leaving in 10&rdquo; text,
          so there&apos;s no backing out now.
        </PostIntro>

        <p>Welcome to your first duck hunting season in New Zealand.</p>

        <p>
          Every year, thousands of Kiwis head out to the maimai for opening
          weekend — and if you&apos;ve been invited along for the first time,
          you&apos;re in for a proper experience. But before you rock up in
          your jandals and a hoodie, here are five things worth knowing.
        </p>

        {/* ── Section 1 ── */}
        <h2>1. Get Your Licence — Yes, It&apos;s a Thing</h2>

        <p>
          Before you even think about touching a shotgun, you&apos;ll need a
          current <strong>Game Bird Hunting Licence</strong> from Fish &amp;
          Game New Zealand. You can buy one online at{" "}
          <a
            href="https://www.fishandgame.org.nz"
            target="_blank"
            rel="noopener noreferrer"
          >
            fishandgame.org.nz
          </a>
          , and you&apos;ll need to choose the right region for where
          you&apos;re hunting. No licence? That&apos;s illegal, and your mates
          won&apos;t be impressed.
        </p>

        <p>
          If you don&apos;t have a firearms licence, that&apos;s okay — you can
          still go along for the experience. Plenty of first-timers spend their
          first season as a &ldquo;spotter&rdquo; or simply soaking in the
          atmosphere. Trust us, it&apos;s still worth the early alarm.
        </p>

        <PostFigure
          src="/blog/duck-hunting-2026/maimai-aim.jpg"
          alt="Outdoor Expo's Marc aiming his shotgun from inside a maimai during New Zealand duck season"
          caption="Our very own Marc, keeping an eye on the morning flight."
          orientation="tall"
        />

        {/* ── Section 2 ── */}
        <h2>2. Know What You&apos;re Allowed to Shoot (and What You&apos;re Not)</h2>

        <p>
          New Zealand has clear rules around species, bag limits, and shooting
          hours. Mallards are the most common target, but you&apos;ll want to
          check the current season&apos;s regulations for your area — limits
          and legal species can vary by Fish &amp; Game region. Your mates will
          likely brief you, but doing a quick read beforehand never hurts.
        </p>

        <p>
          One golden rule:{" "}
          <strong>if you&apos;re not 100% sure what it is, don&apos;t shoot.</strong>
        </p>

        {/* ── Section 3 ── */}
        <h2>3. Dress for 5am, Not 5pm</h2>

        <p>
          This isn&apos;t a casual Sunday walk. You&apos;re sitting in a maimai
          before dawn, often in wet, cold conditions — so layering is
          everything. Think thermal base layers, a good fleece mid-layer, and
          waterproof outer shell. Waders are a must if you&apos;re setting up
          decoys or retrieving birds. And don&apos;t forget ear protection —
          shotguns are loud. <em>Really</em> loud.
        </p>

        <PostChecklist
          title="First-Timer Gear Checklist"
          items={[
            "Warm, dark-coloured or camo clothing (no bright colours)",
            "Waterproof jacket and pants",
            "Gumboots or waders",
            "Beanie and gloves",
            "Ear protection",
            "Torch / headlamp",
            "Thermos with something hot ☕ (non-negotiable)",
          ]}
        />

        <PostFigure
          src="/blog/duck-hunting-2026/hot-drink.jpg"
          alt="Marc making a hot drink on a cold duck hunting morning in New Zealand — warm layers and a thermos are essential"
          caption="Marc desperately looking for something warm to drink ☕"
          orientation="tall"
        />

        {/* ── Section 4 ── */}
        <h2>4. Mind Your Maimai Manners</h2>

        <p>
          The maimai is a small space shared with your mates, their gear, and
          probably a dog. There&apos;s an unwritten code that first-timers
          should pick up quickly:
        </p>

        <PostArrowList
          items={[
            "<strong>Stay quiet.</strong> Ducks have sharp hearing. Your mates are not being rude — they're being strategic.",
            "<strong>Keep your phone on silent.</strong> Better yet, put it away. (We know it's tempting.)",
            "<strong>Listen to the experienced hunters.</strong> They'll tell you when to stay down, when to call, and when to shoot. Your job is to follow their lead.",
            "<strong>Don't stand up at the wrong moment.</strong> Nothing clears the sky faster than sudden movement.",
          ]}
        />

        <PostFigure
          src="/blog/duck-hunting-2026/phone-rookie.jpg"
          alt="Hunter looking at phone in a maimai — a classic rookie moment during duck season"
          caption={"“I said PUT THAT AWAY, Dave.”"}
        />

        {/* ── Section 5 ── */}
        <h2>5. It&apos;s Not About the Bag Count — Enjoy the Experience</h2>

        <p>
          Here&apos;s what no one tells you about duck hunting: the best part
          isn&apos;t the shooting. It&apos;s the 4am drive through fog. The
          first light breaking over the water. The sound of wings overhead. The
          quiet conversations in the maimai between flights.
        </p>

        <p>
          Your first season might not be a full bag. You might not fire a
          single shot. But you&apos;ll understand why your mates do this every
          year — and why they invited you.
        </p>

        <PostQuote>
          &ldquo;You&apos;ll understand why your mates do this every year — and
          why they invited you.&rdquo;
        </PostQuote>

        <PostFigure
          src="/blog/duck-hunting-2026/boat-dawn.jpg"
          alt="Two hunters heading out across the lake in a flat-bottomed boat at dawn for a day of duck hunting in New Zealand"
          caption="Heading out across the lake. Worth every early alarm."
        />

        <PostGrid
          items={[
            {
              src: "/blog/duck-hunting-2026/decoys-ready.jpg",
              alt: "Decoy ducks piled on the ground ready to be set up on the water for a New Zealand duck hunting morning",
              caption: "Decoys ready to hit the water.",
            },
            {
              src: "/blog/duck-hunting-2026/decoys-water.jpg",
              alt: "Decoy ducks and real mallards on a New Zealand lake with a hunter in a boat in the background",
              caption: "Decoys doing their job — real birds mixing in.",
            },
          ]}
          uniform
        />
      </PostBody>

      {/* CTA must live OUTSIDE PostBody — PostBody applies descendant
          selectors (e.g. [&_p]:text-charcoal, [&_a]:text-green-500) that
          would otherwise turn the CTA's white text and buttons invisible
          on its dark background. */}
      <div className="max-w-[760px] mx-auto px-4 md:px-6 pb-12 md:pb-16">
        <PostCTA />
      </div>
    </main>
  );
}
