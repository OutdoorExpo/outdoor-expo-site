import Link from "next/link";
import type { NewsPostMeta } from "@/lib/news/types";
import { formatPublishDate } from "./formatDate";
import { TypeBadge } from "./TypeBadge";

interface PostCardProps {
  post: NewsPostMeta;
  /** When true, the card spans wider/taller — used for the featured/latest post. */
  featured?: boolean;
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const href = `/news/${post.slug}`;

  if (featured) {
    return (
      <Link
        href={href}
        className="group block md:grid md:grid-cols-2 md:gap-6 bg-paper rounded overflow-hidden hover:shadow-lg transition-shadow"
      >
        <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.heroImage.src}
            alt={post.heroImage.alt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Type badge — top-left of image */}
          <div className="absolute top-3 left-3">
            <TypeBadge type={post.type} />
          </div>
        </div>
        <div className="p-5 md:p-7 flex flex-col justify-center">
          <span className="text-eyebrow uppercase tracking-[0.08em] font-semibold text-orange-500 mb-2">
            {post.category}
          </span>
          <h2 className="text-h2 font-extrabold text-charcoal mb-2 group-hover:text-green-500 transition-colors">
            {post.title}
          </h2>
          <p className="text-body text-dark-grey mb-3 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="text-body-s text-mid-grey">
            {formatPublishDate(post.publishedAt)} · {post.readingMinutes} min read
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group block bg-paper rounded overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.heroImage.src}
          alt={post.heroImage.alt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Type badge — top-left of image */}
        <div className="absolute top-3 left-3">
          <TypeBadge type={post.type} />
        </div>
      </div>
      <div className="p-4 md:p-5">
        <span className="text-eyebrow uppercase tracking-[0.08em] font-semibold text-orange-500 mb-2 block">
          {post.category}
        </span>
        <h3 className="text-h3 font-extrabold text-charcoal mb-2 group-hover:text-green-500 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-body-s text-dark-grey mb-3 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="text-body-s text-mid-grey">
          {formatPublishDate(post.publishedAt)} · {post.readingMinutes} min read
        </div>
      </div>
    </Link>
  );
}
