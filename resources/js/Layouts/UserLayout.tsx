import Icon from '@/Components/Icon';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, useState } from 'react';

interface NavItem {
    label: string;
    href: string;
    active: boolean;
}

interface UserLayoutProps extends PropsWithChildren {
    navItems?: NavItem[];
    showFooter?: boolean;
    fullWidth?: boolean;
}

export default function UserLayout({ children, navItems, showFooter = true, fullWidth = false }: UserLayoutProps) {
    const user = usePage().props.auth?.user;
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const defaultNavItems: NavItem[] = [
        {
            label: 'Home',
            href: '/home',
            active: route().current('home'),
        },
        {
            label: 'Kelas',
            href: route('user.classes'),
            active: route().current('user.classes*'),
        },
    ];

    const navigation = navItems ?? defaultNavItems;

    return (
        <div className="flex min-h-screen flex-col bg-background-light font-display text-gray-900">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <img
                                src="/ImpactAcademy.png"
                                alt="ImpactAcademy Logo"
                                className="h-40 w-auto"
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden items-center gap-8 md:flex">
                            {navigation.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`text-sm font-medium transition-colors ${
                                        item.active
                                            ? 'border-b-2 border-primary pb-0.5 text-gray-900'
                                            : 'text-gray-600 hover:text-primary'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Profile Actions */}
                        <div className="flex items-center gap-4">
                            {/* <button className="relative rounded-full p-2 text-gray-500 transition-colors hover:bg-primary-light hover:text-primary">
                                <Icon name="notifications" size={24} />
                                <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-red-500" />
                            </button> */}

                            {user ? (
                                <Link
                                    href={route('user.dashboard')}
                                    className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark sm:block"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <div className="hidden items-center gap-3 sm:flex">
                                    <Link
                                        href={route('login')}
                                        className="text-sm font-semibold text-gray-600 transition-colors hover:text-primary"
                                    >
                                        Masuk
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                                    >
                                        Daftar
                                    </Link>
                                </div>
                            )}

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() =>
                                    setShowMobileMenu(!showMobileMenu)
                                }
                                className="p-2 text-gray-500 hover:text-primary md:hidden"
                            >
                                <Icon
                                    name={showMobileMenu ? 'close' : 'menu'}
                                    size={24}
                                />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {showMobileMenu && (
                        <div className="border-t border-gray-200 py-4 md:hidden">
                            <div className="flex flex-col gap-2">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                                            item.active
                                                ? 'bg-primary/10 text-primary'
                                                : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}

                                {/* Mobile Auth Buttons */}
                                {!user && (
                                    <div className="mt-4 flex flex-col gap-2 border-t border-gray-200 pt-4">
                                        <Link
                                            href={route('login')}
                                            className="rounded-lg border border-gray-200 px-4 py-2 text-center text-sm font-semibold text-gray-600 transition-colors hover:border-primary hover:text-primary"
                                        >
                                            Masuk
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                                        >
                                            Daftar
                                        </Link>
                                    </div>
                                )}

                                {user && (
                                    <div className="mt-4 border-t border-gray-200 pt-4">
                                        <Link
                                            href={route('user.dashboard')}
                                            className="block rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                                        >
                                            Dashboard
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <main className={`flex-grow ${fullWidth ? 'w-full' : 'mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 md:py-12 lg:px-8'}`}>
                {children}
            </main>

            {/* Footer */}
            {showFooter && (
                <footer className="mt-12 border-t border-gray-200 bg-white py-8">
                    <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} ImpactAcademy. All rights
                            reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link
                                href="#"
                                className="text-sm text-gray-500 transition-colors hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="#"
                                className="text-sm text-gray-500 transition-colors hover:text-primary"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="#"
                                className="text-sm text-gray-500 transition-colors hover:text-primary"
                            >
                                Help Center
                            </Link>
                        </div>
                    </div>
                </footer>
            )}
        </div>
    );
}
