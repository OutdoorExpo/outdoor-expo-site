/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "static.wixstatic.com" },
    ],
  },
  async redirects() {
    return [
      // /blog → /news (permanent — Blog menu renamed to News)
      {
        source: "/blog",
        destination: "/news",
        permanent: true,
      },
      {
        source: "/blog/:slug*",
        destination: "/news/:slug*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
