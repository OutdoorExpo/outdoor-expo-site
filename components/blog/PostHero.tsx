import type { BlogPostMeta } from "@/lib/blog/types";
import { formatPublishDate } from "./formatDate";

interface PostHeroProps {
  post: BlogPostMeta;
}

/**
 * Full-bleed hero image with gradient overlay + category tag + title.
 * Used at the top of every individual blog post page.
 */
export function PostHero({ post }: PostHeroProps) {
  return (
    <section
      className="relative w-full h-[420px] md:h-[520px] lg:h-[560px] overflow-hidden"
      aria-label="Article hero"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={post.heroImage.src}
        alt={post.heroImage.alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 55%" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 80%, rgba(0,0,0,0.7) 100%)",
        }}
      />
      <div className="absolute inset-0 flex items-end">
        <div className="container-site pb-8 md:pb-10">
          <div className="max-w-[760px]">
            <span className="inline-block bg-orange-500 text-white text-eyebrow uppercase tracking-[0.1em] font-bold px-3 py-1 rounded-sm mb-3">
              {post.category}
            </span>
            <h1 className="text-h1 font-extrabold text-white mb-3 leading-tight">
              {post.title}
            </h1>
            <div className="text-body-s text-white/85">
              {formatPublishDate(post.publishedAt)} · {post.author} ·{" "}
              {post.readingMinutes} min read
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
