import type { MetadataRoute } from "next";

/**
 * robots.txt — tells crawlers what they can access and where the sitemap is.
 *
 * We allow all standard crawling. The sitemap URL must use the production
 * domain so search engines find it after cutover.
 */
const SITE_URL = "https://www.outdoorexpo.co.nz";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Block any internal-only paths if they're added later.
        // disallow: ["/admin", "/api/internal"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
