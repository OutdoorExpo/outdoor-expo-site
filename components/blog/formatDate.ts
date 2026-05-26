/**
 * Format an ISO date (e.g. "2026-05-15") as a human-friendly label
 * for the New Zealand audience: "15 May 2026".
 */
export function formatPublishDate(iso: string): string {
  const date = new Date(iso);
  if (isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-NZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
