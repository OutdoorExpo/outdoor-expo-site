/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  // 301 redirects from the old Wix site
  // Phase 2 deliverable — populate when migration begins
  async redirects() {
    return [
      // Example placeholder — replace with real migration map
      // {
      //   source: "/old-exhibitors/:slug",
      //   destination: "/exhibitors/:slug",
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;
