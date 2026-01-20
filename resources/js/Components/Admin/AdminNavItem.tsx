import Icon from '@/Components/Icon';
import { NavItem } from '@/types/admin';
import { Link } from '@inertiajs/react';

interface AdminNavItemProps extends NavItem {}

export default function AdminNavItem({
    label,
    href,
    icon,
    active = false,
    badge,
}: AdminNavItemProps) {
    if (active) {
        return (
            <Link
                href={href}
                className="group flex items-center gap-3 rounded-lg bg-primary px-4 py-3 text-white shadow-md shadow-primary/20 transition-all"
            >
                <Icon name={icon} size={22} />
                <span className="text-sm font-medium">{label}</span>
                {badge !== undefined && badge > 0 && (
                    <span className="ml-auto rounded-full bg-white/20 px-1.5 py-0.5 text-[10px] font-bold">
                        {badge}
                    </span>
                )}
            </Link>
        );
    }

    return (
        <Link
            href={href}
            className="text-text-muted group flex items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-primary-light hover:text-primary"
        >
            <Icon
                name={icon}
                size={22}
                className="transition-transform group-hover:scale-110"
            />
            <span className="text-sm font-medium">{label}</span>
            {badge !== undefined && badge > 0 && (
                <span className="ml-auto rounded-full bg-rose-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                    {badge}
                </span>
            )}
        </Link>
    );
}
