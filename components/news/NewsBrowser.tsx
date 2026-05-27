"use client";

import { useState, useMemo } from "react";
import type { NewsPostMeta, NewsType } from "@/lib/news/types";
import { NEWS_TYPE_META, NEWS_TYPE_ORDER } from "@/lib/news/posts";
import { PostCard } from "./PostCard";

interface NewsBrowserProps {
  posts: NewsPostMeta[];
}

type FilterValue = "all" | NewsType;

/**
 * Client-side filter + listing for /news.
 *
 * Filter chips: All / Stories / Exhibitor Spotlights / Competitions / Announcements
 * Only chips with at least one matching post are shown.
 * "All" view shows the latest post as featured + the rest in a grid.
 * Filtered views show every matching post in the grid.
 */
export function NewsBrowser({ posts }: NewsBrowserProps) {
  const [active, setActive] = useState<FilterValue>("all");

  // Build the chip list dynamically — only show types that have posts.
  const chips = useMemo(() => {
    const present = new Set(posts.map((p) => p.type));
    return [
      { value: "all" as FilterValue, label: "All" },
      ...NEWS_TYPE_ORDER.filter((t) => present.has(t)).map((t) => ({
        value: t as FilterValue,
        label: NEWS_TYPE_META[t].label,
      })),
    ];
  }, [posts]);

  // Filter posts based on active selection
  const filteredPosts = useMemo(() => {
    if (active === "all") return posts;
    return posts.filter((p) => p.type === active);
  }, [posts, active]);

  // For "All" view, treat the first post as featured. Filtered views
  // show every matching post in the same uniform grid.
  const showFeatured = active === "all" && filteredPosts.length > 0;
  const [featured, ...rest] = filteredPosts;
  const grid = showFeatured ? rest : filteredPosts;

  return (
    <>
      {/* Filter chips */}
      <section className="bg-white pt-6 md:pt-8" aria-label="Filter news by type">
        <div className="container-site">
          <div className="flex flex-wrap gap-2">
            {chips.map((c) => {
              const isActive = c.value === active;
              return (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => setActive(c.value)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-body-s font-semibold transition-colors ${
                    isActive
                      ? "bg-charcoal text-white"
                      : "bg-paper text-charcoal hover:bg-light-grey"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured post (only in "All" view).
          Bottom padding only when there's NO grid section below — otherwise
          the grid section's top padding handles the gap. */}
      {showFeatured && featured && (
        <section
          className={`bg-white pt-6 md:pt-10 ${
            rest.length === 0 ? "pb-12 md:pb-16" : ""
          }`}
        >
          <div className="container-site">
            <PostCard post={featured} featured />
          </div>
        </section>
      )}

      {/* Grid of remaining posts */}
      {grid.length > 0 && (
        <section className="bg-white pt-8 md:pt-12 pb-12 md:pb-16">
          <div className="container-site">
            {showFeatured && rest.length > 0 && (
              <h2 className="text-h2 font-extrabold text-charcoal mb-5">
                More posts
              </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {grid.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state — when a filter has no matches (shouldn't usually happen
          because we hide empty filter chips, but kept as a safety net). */}
      {filteredPosts.length === 0 && (
        <section className="bg-white pt-6 md:pt-10 pb-12 md:pb-16">
          <div className="container-site text-center">
            <p className="text-body text-mid-grey max-w-[480px] mx-auto">
              No posts in this category yet — check back soon.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
