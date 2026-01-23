import Icon from '@/Components/Icon';
import { BreadcrumbItem } from '@/types/admin';
import { Link } from '@inertiajs/react';
import SearchInput from './SearchInput';

interface AdminHeaderProps {
    breadcrumbs: BreadcrumbItem[];
    onMenuClick?: () => void;
    showMobileMenu?: boolean;
}

export default function AdminHeader({
    breadcrumbs,
    onMenuClick,
    showMobileMenu = false,
}: AdminHeaderProps) {
    return (
        <header className="border-border sticky top-0 z-20 flex h-16 shrink-0 items-center justify-between border-b bg-white px-8">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm">
                {breadcrumbs.map((item, index) => (
                    <span key={item.label} className="flex items-center gap-2">
                        {index > 0 && (
                            <span className="text-border text-xs">/</span>
                        )}
                        {item.href ? (
                            <Link
                                href={item.href}
                                className="text-text-muted transition-colors hover:text-primary"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-text-primary font-medium">
                                {item.label}
                            </span>
                        )}
                    </span>
                ))}
            </div>

            {/* Right Actions */}
            {/* <div className="flex items-center gap-4">
                <SearchInput className="hidden w-64 sm:block" />

                <button className="text-text-muted relative rounded-full p-2 transition-colors hover:bg-background-light">
                    <Icon name="notifications" size={24} />
                    <span className="absolute right-2 top-2 size-2 rounded-full border border-white bg-rose-500" />
                </button>

                <button
                    onClick={onMenuClick}
                    className="text-text-muted rounded-full p-2 hover:bg-background-light lg:hidden"
                >
                    <Icon name="menu" size={24} />
                </button>
            </div> */}
        </header>
    );
}
