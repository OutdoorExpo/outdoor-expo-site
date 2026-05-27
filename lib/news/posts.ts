import type { NewsPostMeta, NewsType } from "./types";

/**
 * Display metadata for each NewsType — drives the filter chip labels
 * and the coloured badge shown on cards + post hero.
 * Order here is also the order of the filter chips on /news.
 */
export const NEWS_TYPE_META: Record<
  NewsType,
  { label: string; badgeClass: string }
> = {
  story: {
    label: "Stories",
    // Forest green — editorial, on-brand
    badgeClass: "bg-green-500 text-white",
  },
  exhibitor: {
    label: "Exhibitor Spotlights",
    // Vibrant orange — energetic, brand-forward
    badgeClass: "bg-orange-500 text-white",
  },
  competition: {
    label: "Competitions",
    // Charcoal — premium, attention-grabbing
    badgeClass: "bg-charcoal text-white",
  },
  announcement: {
    label: "Announcements",
    // Sand/paper outline — neutral, official
    badgeClass: "bg-paper text-charcoal border border-charcoal",
  },
};

/** Order of NewsType filter chips on /news index. */
export const NEWS_TYPE_ORDER: NewsType[] = [
  "story",
  "exhibitor",
  "competition",
  "announcement",
];

/**
 * Central registry of all news posts.
 * Add a new entry when publishing a new post, and create the matching
 * `app/news/[slug]/page.tsx` file.
 *
 * Order: newest first (sorted by publishedAt descending).
 */
export const NEWS_POSTS: NewsPostMeta[] = [
  {
    slug: "duck-hunting-2026",
    title:
      "Your Mates Invited You Duck Hunting — Here's What You Need to Know",
    excerpt:
      "First time duck hunting in New Zealand? Here are five things every first-timer should know before heading out to the maimai — from licences to layering.",
    type: "story",
    category: "Duck Season 2026",
    author: "Outdoor Expo Team",
    publishedAt: "2026-05-15",
    readingMinutes: 5,
    heroImage: {
      src: "/news/duck-hunting-2026/hero.jpg",
      alt: "Pre-dawn maimai pond in New Zealand — purple-pink sky reflected on still water with decoy ducks set out for opening morning",
      // Dawn shot — shift the crop upward so the pink/purple sky is the dominant element
      objectPosition: "center 35%",
    },
    tags: ["Hunting", "Duck Season", "First Timer"],
  },
];

/** Helper: find a post by slug (used by individual post pages). */
export function getPostBySlug(slug: string): NewsPostMeta | undefined {
  return NEWS_POSTS.find((p) => p.slug === slug);
}

/** Helper: posts other than the given slug (used for "more posts" sections). */
export function getRelatedPosts(
  currentSlug: string,
  limit = 3
): NewsPostMeta[] {
  return NEWS_POSTS.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
