interface GridItem {
  src: string;
  alt: string;
  caption?: string;
}

interface PostGridProps {
  items: GridItem[];
  /** When true, force every cell to the same square aspect (good for portraits). */
  uniform?: boolean;
}

/**
 * 2-column photo grid for groups of 2–4 images.
 * Mobile: stacks to 1 column. Desktop: 2 columns.
 */
export function PostGrid({ items, uniform = false }: PostGridProps) {
  const aspectClass = uniform ? "aspect-square" : "aspect-[4/3]";

  return (
    <div className="my-8 md:my-10 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
      {items.map((item, i) => (
        <figure key={i}>
          <div className={`relative ${aspectClass} overflow-hidden rounded bg-light-grey`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {item.caption && (
            <figcaption className="text-body-s text-mid-grey italic text-center mt-2">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
