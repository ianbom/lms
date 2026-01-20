import AdminHeader from '@/Components/Admin/AdminHeader';
import AdminSidebar from '@/Components/Admin/AdminSidebar';
import { BreadcrumbItem, NavItem } from '@/types/admin';
import { router, usePage } from '@inertiajs/react';
import { PropsWithChildren, useState } from 'react';

interface AdminLayoutProps extends PropsWithChildren {
    breadcrumbs?: BreadcrumbItem[];
}

export default function AdminLayout({
    children,
    breadcrumbs = [],
}: AdminLayoutProps) {
    const { auth } = usePage().props as {
        auth: { user: { name: string; email: string; avatar?: string } };
    };
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const navigation: NavItem[] = [
        {
            label: 'Dashboard',
            href: route('admin.dashboard'),
            icon: 'dashboard',
            active: route().current('admin.dashboard'),
        },
        {
            label: 'Categories',
            href: '#',
            icon: 'category',
            active: false,
        },
        {
            label: 'Classes',
            href: route('admin.classes'),
            icon: 'book_2',
            active: route().current('admin.classes'),
        },
        {
            label: 'Mentors',
            href: '#',
            icon: 'groups',
            active: false,
        },
        {
            label: 'Orders',
            href: '#',
            icon: 'shopping_cart',
            active: false,
            badge: 3,
        },
        {
            label: 'Certificates',
            href: '#',
            icon: 'workspace_premium',
            active: false,
        },
        {
            label: 'Settings',
            href: '#',
            icon: 'settings',
            active: false,
        },
    ];

    const handleLogout = () => {
        router.post(route('logout'));
    };

    const defaultBreadcrumbs: BreadcrumbItem[] = [
        { label: 'Home', href: '#' },
        ...breadcrumbs,
    ];

    return (
        <div className="text-text-primary flex h-screen overflow-hidden bg-background-light font-display">
            {/* Sidebar */}
            <AdminSidebar
                navigation={navigation}
                user={{
                    name: auth?.user?.name || 'Admin User',
                    role: 'Super Admin',
                    avatarUrl: auth?.user?.avatar,
                }}
                onLogout={handleLogout}
            />

            {/* Mobile Sidebar Overlay */}
            {showMobileMenu && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={() => setShowMobileMenu(false)}
                />
            )}

            {/* Main Content */}
            <main className="relative flex h-full flex-1 flex-col overflow-hidden">
                {/* Header */}
                <AdminHeader
                    breadcrumbs={defaultBreadcrumbs}
                    onMenuClick={() => setShowMobileMenu(!showMobileMenu)}
                    showMobileMenu={showMobileMenu}
                />

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto scroll-smooth p-4 md:p-8">
                    <div className="mx-auto flex max-w-[1400px] flex-col gap-8">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
