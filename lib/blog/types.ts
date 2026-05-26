/**
 * Shared types for the blog system.
 * Designed to migrate cleanly to Sanity CMS later (see Task #10).
 */

export interface BlogPostMeta {
  /** URL slug — used at /blog/[slug] */
  slug: string;
  /** Headline shown on listing card + page <h1> */
  title: string;
  /** 1–2 sentence summary for cards + meta description */
  excerpt: string;
  /** Eyebrow / category label */
  category: string;
  /** Author display name */
  author: string;
  /** ISO 8601 publish date, e.g. "2026-05-15" */
  publishedAt: string;
  /** Estimated reading time in minutes */
  readingMinutes: number;
  /** Hero image — used on listing card, post hero, and Open Graph */
  heroImage: {
    src: string;
    alt: string;
    /**
     * CSS object-position for the hero crop. Defaults to "center 55%".
     * Override per-post when a different focal point looks better —
     * e.g. "center 35%" to emphasise sky, "center 70%" for a foreground subject.
     */
    objectPosition?: string;
  };
  /** Tags for related-post filtering (optional) */
  tags?: string[];
}
