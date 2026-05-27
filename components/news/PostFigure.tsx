interface PostFigureProps {
  src: string;
  alt: string;
  caption?: string;
  /** "wide" = landscape (default), "tall" = portrait. Affects aspect ratio. */
  orientation?: "wide" | "tall";
}

/**
 * A single inline photo with optional caption.
 * Used between paragraphs in news post bodies.
 */
export function PostFigure({
  src,
  alt,
  caption,
  orientation = "wide",
}: PostFigureProps) {
  const aspectClass =
    orientation === "tall" ? "aspect-[3/4] md:aspect-[4/5]" : "aspect-[4/3]";

  return (
    <figure className="my-8 md:my-10">
      <div className={`relative ${aspectClass} overflow-hidden rounded bg-light-grey`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      {caption && (
        <figcaption className="text-body-s text-mid-grey italic text-center mt-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
