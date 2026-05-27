/**
 * Slugs (in display order) of exhibitors already confirmed for 2026.
 *
 * Shared module — imported by:
 *   - /exhibitors (directory page; uses this list to pin confirmed brands to the top)
 *   - /exhibitors/[slug] (detail page; uses this set to show a "Confirmed for 2026" badge)
 *
 * Update this list as new confirmations come in. The slugs must match
 * exactly to those in lib/exhibitors-2025.json — they're used both as the
 * URL path segment and as the JSON lookup key.
 */
export const CONFIRMED_2026_SLUGS: string[] = [
  // Slugs are listed alphabetically by display name (ignoring leading "the-").
  // The "christchurch-mini-garage" slug looks odd because the Wix import
  // preserved the company's previous name — the actual brand is "Actions
  // Power & Water Sports", which is why it sorts first.
  "christchurch-mini-garage",
  "advanced-optics",
  "arctic-sammy",
  "bays-boating",
  "black-sheep-trading",
  "the-bush-baths",
  "canterbury-vehicle-accessories",
  "cjm-s-events-ltd",
  "cmg-campers",
  "cohesive-construction",
  "ebikeznz",
  "falcon-overland",
  "hybrid-bikes",
  "kaweka-outdoor-equipment",
  "lifestyle-builds",
  "lysaght-ltd",
  "manchester-unity",
  "mountain-high-clothing",
  "night-owl-outdoor-gear",
  "north-to-south-first-aid-supplies",
  "osprey-boats-new-zealand",
  "ponies2go",
  "pulsar",
  "pure-salt",
  "sports-marine",
  "the-shed-specialists-co",
  "white-pointer-boats",
];

export const CONFIRMED_2026_SET = new Set(CONFIRMED_2026_SLUGS);
