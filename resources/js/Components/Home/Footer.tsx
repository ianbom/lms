import Icon from '@/Components/Icon';
import { Link } from '@inertiajs/react';

interface FooterLink {
    label: string;
    href: string;
}

interface FooterColumn {
    title: string;
    links: FooterLink[];
}

interface FooterProps {
    columns?: FooterColumn[];
}

const defaultColumns: FooterColumn[] = [
    {
        title: 'Explore',
        links: [
            { label: 'Home', href: '#' },
            { label: 'Courses', href: '#' },
            { label: 'Categories', href: '#' },
            { label: 'Leaderboard', href: '#' },
            { label: 'Community', href: '#' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About Us', href: '#' },
            { label: 'Careers', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Press', href: '#' },
            { label: 'Contact', href: '#' },
        ],
    },
    {
        title: 'Support',
        links: [
            { label: 'Help Center', href: '#' },
            { label: 'FAQs', href: '#' },
            { label: 'Report a Problem', href: '#' },
            { label: 'Terms of Service', href: '#' },
            { label: 'Privacy Policy', href: '#' },
        ],
    },
];

export default function Footer({ columns = defaultColumns }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-100 bg-white pb-10 pt-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    {/* Brand Column */}
                    <div className="col-span-2 pr-8 lg:col-span-2">
                        <Link href="/" className="mb-6 flex items-center gap-2">
                            <div className="flex size-8 items-center justify-center rounded-md bg-primary text-white">
                                <Icon name="school" size={20} />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-gray-900">
                                LMS Platform
                            </span>
                        </Link>
                        <p className="mb-6 max-w-sm text-sm leading-relaxed text-gray-500">
                            LMS Platform is a modern online learning platform
                            that helps you gain in-demand skills through
                            expert-led courses, personalized learning paths, and
                            a vibrant peer community.
                        </p>
                        <button className="rounded-md bg-indigo-50 px-6 py-2 text-sm font-bold text-indigo-600 transition-colors hover:bg-indigo-100">
                            Contact Us
                        </button>
                    </div>

                    {/* Link Columns */}
                    {columns.map((column, index) => (
                        <div key={index}>
                            <h4 className="mb-6 text-xs font-bold uppercase tracking-wider text-gray-900">
                                {column.title}
                            </h4>
                            <ul className="space-y-3 text-sm text-gray-500">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            href={link.href}
                                            className="transition-colors hover:text-primary"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 md:flex-row">
                    <p className="text-xs text-gray-400">
                        © {currentYear} LMS Platform. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="text-gray-400 transition-colors hover:text-primary"
                        >
                            <Icon name="facebook" size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 transition-colors hover:text-primary"
                        >
                            <Icon name="smart_display" size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 transition-colors hover:text-primary"
                        >
                            <Icon name="alternate_email" size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
