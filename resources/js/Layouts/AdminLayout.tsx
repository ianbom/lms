import AdminHeader from '@/Components/Admin/AdminHeader';
import AdminSidebar from '@/Components/Admin/AdminSidebar';
import Toast from '@/Components/Toast';
import { BreadcrumbItem, NavItem } from '@/types/admin';
import { router, usePage } from '@inertiajs/react';
import { PropsWithChildren, useEffect, useState } from 'react';

interface AdminLayoutProps extends PropsWithChildren {
    breadcrumbs?: BreadcrumbItem[];
}

interface FlashProps {
    success?: string;
    error?: string;
}

export default function AdminLayout({
    children,
    breadcrumbs = [],
}: AdminLayoutProps) {
    const { auth, flash } = usePage().props as {
        auth: { user: { name: string; email: string; avatar?: string } };
        flash: FlashProps;
    };
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [toast, setToast] = useState<{
        message: string;
        type: 'success' | 'error';
    } | null>(null);

    useEffect(() => {
        if (flash?.success) {
            setToast({ message: flash.success, type: 'success' });
        } else if (flash?.error) {
            setToast({ message: flash.error, type: 'error' });
        }
    }, [flash]);

    const navigation: NavItem[] = [
        {
            label: 'Dashboard',
            href: route('admin.dashboard'),
            icon: 'dashboard',
            active: route().current('admin.dashboard'),
        },
        {
            label: 'Categories',
            href: route('admin.categories'),
            icon: 'category',
            active: route().current('admin.categories'),
        },
        {
            label: 'Classes',
            href: route('admin.classes'),
            icon: 'book_2',
            active: route().current('admin.classes'),
        },
        {
            label: 'Mentors',
            href: route('admin.mentors'),
            icon: 'groups',
            active: route().current('admin.mentors'),
        },
        {
            label: 'Orders',
            href: route('admin.orders'),
            icon: 'shopping_cart',
            active: route().current('admin.orders'),
            // badge: 3,
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

                {/* Global Toast */}
                {toast && (
                    <Toast
                        message={toast.message}
                        type={toast.type}
                        onClose={() => setToast(null)}
                    />
                )}
            </main>
        </div>
    );
}
