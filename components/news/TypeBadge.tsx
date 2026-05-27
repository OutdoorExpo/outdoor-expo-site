import type { NewsType } from "@/lib/news/types";
import { NEWS_TYPE_META } from "@/lib/news/posts";

interface TypeBadgeProps {
  type: NewsType;
  /** "sm" for cards, "md" for post hero */
  size?: "sm" | "md";
}

/**
 * Coloured pill that identifies a post's NewsType — Stories,
 * Exhibitor Spotlights, Competitions, or Announcements.
 *
 * Colour mapping lives in NEWS_TYPE_META so it stays consistent
 * with the filter chips on /news.
 */
export function TypeBadge({ type, size = "sm" }: TypeBadgeProps) {
  const meta = NEWS_TYPE_META[type];
  const sizeClass =
    size === "md"
      ? "text-eyebrow px-3 py-1"
      : "text-[10px] tracking-[0.1em] px-2 py-1";

  return (
    <span
      className={`inline-block uppercase font-bold rounded-full ${sizeClass} ${meta.badgeClass}`}
    >
      {meta.label}
    </span>
  );
}
