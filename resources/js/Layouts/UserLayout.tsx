import Dropdown from '@/Components/Dropdown';
import { Footer } from '@/Components/Home';
import Icon from '@/Components/Icon';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, useState } from 'react';

interface NavItem {
    label: string;
    href: string;
    active: boolean;
    children?: NavItem[];
}

interface UserLayoutProps extends PropsWithChildren {
    navItems?: NavItem[];
    showFooter?: boolean;
    fullWidth?: boolean;
}

export default function UserLayout({
    children,
    navItems,
    showFooter = true,
    fullWidth = false,
}: UserLayoutProps) {
    const user = usePage().props.auth?.user;
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const defaultNavItems: NavItem[] = [
        {
            label: 'Home',
            href: '/home',
            active: route().current('home'),
        },
        {
            label: 'E-Learning',
            href: route('user.classes'),
            active: route().current('user.classes*'),
        },
        {
            label: 'Corporate Training',
            href: '#',
            active: route().current('corporate-training'), // Update logic as needed
            children: [
                {
                    label: 'Corporate Training',
                    href: route('corporate-training'), // Temporary mapping to existing page
                    active: route().current('corporate-training'),
                },
            ],
        },
        {
            label: 'Kontak',
            href: route('contact'),
            active: route().current('contact'),
        },
        // {
        //     label: 'Privacy Policy',
        //     href: route('privacy'),
        //     active: route().current('privacy'),
        // },
        // {
        //     label: 'Terms of Service',
        //     href: route('terms'),
        //     active: route().current('terms'),
        // },
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
                                className="h-8 w-auto"
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden items-center gap-8 md:flex">
                            {navigation.map((item) =>
                                item.children ? (
                                    <div key={item.label} className="relative">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <button
                                                    type="button"
                                                    className={`group inline-flex items-center text-sm font-medium transition-colors ${
                                                        item.active
                                                            ? 'text-gray-900'
                                                            : 'text-gray-600 hover:text-primary'
                                                    }`}
                                                >
                                                    {item.label}
                                                    <Icon
                                                        name="expand_more"
                                                        className="h-4 w-4 transition-transform group-hover:text-primary"
                                                    />
                                                </button>
                                            </Dropdown.Trigger>
                                            <Dropdown.Content
                                                align="right"
                                                width="48"
                                            >
                                                {item.children.map((child) => (
                                                    <Dropdown.Link
                                                        key={child.label}
                                                        href={child.href}
                                                        className={
                                                            child.active
                                                                ? 'bg-gray-100 text-gray-900'
                                                                : ''
                                                        }
                                                    >
                                                        {child.label}
                                                    </Dropdown.Link>
                                                ))}
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                ) : (
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
                                ),
                            )}
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
                                {navigation.map((item) =>
                                    item.children ? (
                                        <div
                                            key={item.label}
                                            className="space-y-1"
                                        >
                                            <div className="px-3 py-2 text-sm font-medium text-gray-900">
                                                {item.label}
                                            </div>
                                            <div className="ml-4 flex flex-col gap-1 border-l-2 border-gray-100 pl-2">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.label}
                                                        href={child.href}
                                                        className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                                                            child.active
                                                                ? 'bg-primary/10 text-primary'
                                                                : 'text-gray-600 hover:bg-gray-50'
                                                        }`}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
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
                                    ),
                                )}

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
            <main
                className={`flex-grow ${fullWidth ? 'w-full' : 'mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 md:py-12 lg:px-8'}`}
            >
                {children}
            </main>

            {/* Footer */}
            {showFooter && <Footer />}

            {/* Floating WhatsApp CTA */}
            <a
                href="https://wa.me/62811106066" // Replace with actual number
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
                aria-label="Chat with us on WhatsApp"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
            </a>
        </div>
    );
}
