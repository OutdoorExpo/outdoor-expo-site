interface PostArrowListProps {
  items: string[];
}

/**
 * Arrow-prefixed list — used inline within post bodies for
 * "manners", "rules", "etiquette" style lists. HTML inside each
 * item is preserved (so you can bold leading words).
 */
export function PostArrowList({ items }: PostArrowListProps) {
  return (
    <ul className="list-none p-0 my-5">
      {items.map((item, i) => (
        <li
          key={i}
          className="relative text-body text-charcoal leading-[1.7] py-3 pl-7 border-b border-light-grey last:border-b-0"
        >
          <span className="absolute left-0 top-3 text-green-500 font-bold">
            →
          </span>
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  );
}
