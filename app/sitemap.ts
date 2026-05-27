import type { MetadataRoute } from "next";
import { NEWS_POSTS } from "@/lib/news/posts";
import exhibitors from "@/lib/exhibitors-2025.json";
import { CONFIRMED_2026_SET } from "@/lib/exhibitors-2026-confirmed";

/**
 * Dynamic sitemap.xml — served at /sitemap.xml at build time.
 * Lists every public route + priority + change frequency for crawlers.
 *
 * Submit this URL to Google Search Console after domain cutover:
 *   https://www.outdoorexpo.co.nz/sitemap.xml
 */
const SITE_URL = "https://www.outdoorexpo.co.nz";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/visit`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/tickets`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/exhibitors`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/exhibit-with-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/sponsor`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/news`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Legal — lower priority
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/exhibitor-terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // News posts — generated from the central registry
  const newsRoutes: MetadataRoute.Sitemap = NEWS_POSTS.map((post) => ({
    url: `${SITE_URL}/news/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Individual exhibitor detail pages — one per row in exhibitors-2025.json.
  // 2026-confirmed exhibitors get a slightly higher priority so Google
  // crawls/refreshes them more aggressively.
  const exhibitorRoutes: MetadataRoute.Sitemap = (
    exhibitors as Array<{ slug: string }>
  ).map((e) => ({
    url: `${SITE_URL}/exhibitors/${e.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: CONFIRMED_2026_SET.has(e.slug) ? 0.7 : 0.5,
  }));

  return [...staticRoutes, ...newsRoutes, ...exhibitorRoutes];
}
