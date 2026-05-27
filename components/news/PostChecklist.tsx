interface PostChecklistProps {
  title?: string;
  items: string[];
}

/**
 * A green-accented checklist box. Used inline within post bodies
 * for "gear lists", "must-haves", "checklists" etc.
 */
export function PostChecklist({ title, items }: PostChecklistProps) {
  return (
    <div className="my-8 bg-paper border-l-[4px] border-green-500 rounded-r px-6 py-5">
      {title && (
        <div className="text-eyebrow uppercase tracking-[0.1em] font-bold text-green-500 mb-3">
          {title}
        </div>
      )}
      <ul className="list-none p-0 m-0">
        {items.map((item, i) => (
          <li
            key={i}
            className="text-body text-charcoal py-2 border-b border-green-100 last:border-b-0 flex items-start gap-3"
          >
            <span className="text-green-500 font-bold flex-shrink-0">✓</span>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
