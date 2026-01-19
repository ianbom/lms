interface TagListProps {
    tags: string[];
}

export default function TagList({ tags }: TagListProps) {
    return (
        <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
                <span
                    key={index}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary"
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}
