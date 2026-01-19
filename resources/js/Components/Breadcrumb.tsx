import { Link } from '@inertiajs/react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="mb-6 flex items-center gap-2 text-sm">
            {items.map((item, index) => (
                <span key={index} className="flex items-center gap-2">
                    {index > 0 && <span className="text-gray-400">/</span>}
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="text-gray-500 transition-colors hover:text-primary"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="font-medium text-gray-900">
                            {item.label}
                        </span>
                    )}
                </span>
            ))}
        </nav>
    );
}
