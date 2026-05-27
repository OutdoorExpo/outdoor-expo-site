import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { NewsBrowser } from "@/components/news/NewsBrowser";
import { NEWS_POSTS } from "@/lib/news/posts";
import { Newsletter } from "@/components/home/Newsletter";

export const metadata: Metadata = {
  title: "News — Outdoor Expo NZ",
  description:
    "News, exhibitor spotlights, competitions, and stories from the Outdoor Expo team and the brands behind New Zealand's largest outdoor expo.",
  openGraph: {
    title: "News — Outdoor Expo NZ",
    description:
      "News, exhibitor spotlights, competitions, and stories from the Outdoor Expo team.",
    type: "website",
  },
};

export default function NewsIndexPage() {
  return (
    <main className="bg-white">
      {/* Page header */}
      <section className="bg-paper section-content">
        <div className="container-site">
          <div className="max-w-[720px]">
            <Eyebrow>Outdoor Expo News</Eyebrow>
            <h1 className="text-h1 font-extrabold text-charcoal mb-2 mt-2">
              Stories, spotlights,
              <br />
              and what&apos;s on.
            </h1>
            <p className="text-body-l text-dark-grey">
              Editorial stories, new exhibitor spotlights, competitions, and
              announcements — straight from the Outdoor Expo team and the
              brands behind New Zealand&apos;s biggest outdoor event.
            </p>
          </div>
        </div>
      </section>

      {/* Filter chips + cards (client component) */}
      <NewsBrowser posts={NEWS_POSTS} />

      {/* Newsletter signup — shown on every state of the news index. */}
      <Newsletter />
    </main>
  );
}
