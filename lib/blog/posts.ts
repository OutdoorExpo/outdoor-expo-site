import type { BlogPostMeta } from "./types";

/**
 * Central registry of all blog posts.
 * Add a new entry when publishing a new post, and create the matching
 * `app/blog/[slug]/page.tsx` file.
 *
 * Order: newest first (sorted by publishedAt descending).
 */
export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "duck-hunting-2026",
    title:
      "Your Mates Invited You Duck Hunting — Here's What You Need to Know",
    excerpt:
      "First time duck hunting in New Zealand? Here are five things every first-timer should know before heading out to the maimai — from licences to layering.",
    category: "Duck Season 2026",
    author: "Outdoor Expo Team",
    publishedAt: "2026-05-15",
    readingMinutes: 5,
    heroImage: {
      src: "/blog/duck-hunting-2026/hero.jpg",
      alt: "Duck hunting pond in New Zealand with a maimai hide visible in the background and decoy ducks on the water",
    },
    tags: ["Hunting", "Duck Season", "First Timer"],
  },
];

/** Helper: find a post by slug (used by individual post pages). */
export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Helper: posts other than the given slug (used for "more posts" sections). */
export function getRelatedPosts(
  currentSlug: string,
  limit = 3
): BlogPostMeta[] {
  return BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
