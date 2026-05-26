import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { PostCard } from "@/components/blog/PostCard";
import { BLOG_POSTS } from "@/lib/blog/posts";
import { Newsletter } from "@/components/home/Newsletter";

export const metadata: Metadata = {
  title: "Blog — Outdoor Expo NZ",
  description:
    "Stories, gear guides, and tips from the New Zealand outdoor community — brought to you by the Outdoor Expo team.",
  openGraph: {
    title: "Blog — Outdoor Expo NZ",
    description:
      "Stories, gear guides, and tips from the New Zealand outdoor community.",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <main className="bg-white">
      {/* Page header */}
      <section className="bg-paper section-content">
        <div className="container-site">
          <div className="max-w-[720px]">
            <Eyebrow>The Outdoor Expo Blog</Eyebrow>
            <h1 className="text-h1 font-extrabold text-charcoal mb-2 mt-2">
              Stories from the outdoors.
            </h1>
            <p className="text-body-l text-dark-grey">
              Gear guides, season tips, and behind-the-scenes from the Kiwi
              outdoor community — straight from the Outdoor Expo team and the
              brands behind it.
            </p>
          </div>
        </div>
      </section>

      {/* Featured post (latest) */}
      {featured && (
        <section className="bg-white pt-8 md:pt-12">
          <div className="container-site">
            <PostCard post={featured} featured />
          </div>
        </section>
      )}

      {/* More posts grid */}
      {rest.length > 0 && (
        <section className="bg-white pt-10 md:pt-14 pb-16 md:pb-24">
          <div className="container-site">
            <h2 className="text-h2 font-extrabold text-charcoal mb-5">
              More posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* When only the featured post exists, add a brief spacing band before the
          Newsletter. The promise of "subscribe below" lives in the Newsletter
          section itself, so we don't duplicate it here. */}
      {rest.length === 0 && (
        <section className="bg-white pt-10 md:pt-14 pb-2 md:pb-4">
          <div className="container-site">
            <p className="text-body text-mid-grey text-center max-w-[480px] mx-auto">
              More posts coming soon.
            </p>
          </div>
        </section>
      )}

      {/* Newsletter signup — shown on every state of the blog index. */}
      <Newsletter />
    </main>
  );
}
