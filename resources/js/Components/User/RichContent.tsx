interface RichContentProps {
    html: string;
    className?: string;
}

export default function RichContent({
    html,
    className = '',
}: RichContentProps) {
    if (!html || html === '<p></p>') {
        return (
            <p className="italic leading-relaxed text-gray-400">
                Tidak ada deskripsi.
            </p>
        );
    }

    return (
        <div
            className={`rich-content leading-relaxed text-gray-600 ${className}`}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
