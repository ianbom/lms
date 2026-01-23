import Icon from '@/Components/Icon';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

interface NavItem {
    label: string;
    href: string;
}

interface NavbarProps {
    navItems?: NavItem[];
    showSignIn?: boolean;
}

const defaultNavItems: NavItem[] = [
    { label: 'Home', href: '#' },
    { label: 'Courses', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'About', href: '#' },
];

export default function Navbar({
    navItems = defaultNavItems,
    showSignIn = true,
}: NavbarProps) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex size-8 items-center justify-center rounded-md bg-primary text-white">
                            <Icon name="school" size={20} />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-gray-900">
                            LMS Platform
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden space-x-8 text-sm font-semibold text-gray-600 md:flex">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="transition-colors hover:text-primary"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">
                        {showSignIn && (
                            <Link
                                href="/login"
                                className="hidden text-sm font-semibold text-gray-700 hover:text-primary md:block"
                            >
                                Sign In
                            </Link>
                        )}
                        <Link
                            href="/register"
                            className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark"
                        >
                            Get Started
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className="rounded-md p-2 text-gray-500 hover:bg-gray-100 md:hidden"
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
                    <div className="border-t border-gray-100 py-4 md:hidden">
                        <div className="flex flex-col space-y-3">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="rounded-md px-3 py-2 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-50 hover:text-primary"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            {showSignIn && (
                                <Link
                                    href="/login"
                                    className="rounded-md px-3 py-2 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-50 hover:text-primary"
                                >
                                    Sign In
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
