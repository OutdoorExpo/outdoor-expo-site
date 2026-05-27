import {
  EVENT_NAME,
  EVENT_DATES,
  EVENT_HOURS,
  EVENT_VENUE_FULL,
  EVENT_VENUE_SHORT,
  EVENT_LOCATION,
  EVENT_START_DATETIME,
  FLICKET_TICKETS_URL,
} from "@/lib/constants";

const SITE_URL = "https://www.outdoorexpo.co.nz";

/**
 * Organization JSON-LD — identifies Outdoor Expo as an entity to Google.
 * Powers the brand panel in search results and links our social accounts.
 * Drop this on the root layout so it's present on every page.
 */
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Outdoor Expo",
    alternateName: "Outdoor Expo NZ",
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    description:
      "New Zealand's largest celebration of outdoor life — held annually in Christchurch.",
    sameAs: [
      "https://www.facebook.com/outdoorexponz",
      "https://www.instagram.com/outdoorexponz/",
      "https://www.tiktok.com/@outdoorexponz",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@outdoorexpo.co.nz",
      contactType: "customer service",
      areaServed: "NZ",
      availableLanguage: "en",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Event JSON-LD — eligible for Google's Event rich result (dates, location,
 * "Get tickets" button). Use on the home page and Visit page.
 */
export function EventSchema() {
  // End date — 3 days from start, 5pm close
  const startDate = EVENT_START_DATETIME; // 2026-10-02T09:00:00+13:00
  const endDate = "2026-10-04T16:00:00+13:00";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: EVENT_NAME,
    description: `${EVENT_NAME} — three days celebrating New Zealand's outdoor community. 300+ exhibitors across 12 zones. ${EVENT_DATES}.`,
    startDate,
    endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: EVENT_VENUE_SHORT,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Canterbury Agricultural Park",
        addressLocality: EVENT_LOCATION,
        addressRegion: "Canterbury",
        postalCode: "8024",
        addressCountry: "NZ",
      },
    },
    image: [`${SITE_URL}/og-image.png`],
    organizer: {
      "@type": "Organization",
      name: "Outdoor Expo",
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      url: FLICKET_TICKETS_URL,
      price: "20",
      priceCurrency: "NZD",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01T00:00:00+13:00",
    },
    performer: {
      "@type": "Organization",
      name: "Outdoor Expo",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * WebSite JSON-LD with site-search action — enables a search box in
 * Google search results for the brand. Optional but cheap to include.
 */
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Outdoor Expo",
    url: SITE_URL,
    inLanguage: "en-NZ",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
