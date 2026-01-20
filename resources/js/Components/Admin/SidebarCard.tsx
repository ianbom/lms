interface SidebarCardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function SidebarCard({
    title,
    children,
    className = '',
}: SidebarCardProps) {
    return (
        <div
            className={`rounded-xl border border-[#e5e7eb] bg-white p-5 ${className}`}
        >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#5e6a62]">
                {title}
            </h3>
            {children}
        </div>
    );
}
