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
    showNewsletter?: boolean;
}

const defaultColumns: FooterColumn[] = [
    {
        title: 'Kelas',
        links: [
            { label: 'Web Development', href: '#' },
            { label: 'UI/UX Design', href: '#' },
            { label: 'Data Science', href: '#' },
            { label: 'Digital Marketing', href: '#' },
            { label: 'Business', href: '#' },
        ],
    },
    {
        title: 'Perusahaan',
        links: [
            { label: 'Tentang Kami', href: '#' },
            { label: 'Karir', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Mitra', href: '#' },
        ],
    },
    {
        title: 'Bantuan',
        links: [
            { label: 'Pusat Bantuan', href: '#' },
            { label: 'Hubungi Kami', href: '#' },
            { label: 'Syarat & Ketentuan', href: '#' },
            { label: 'Kebijakan Privasi', href: '#' },
        ],
    },
];

export default function Footer({
    columns = defaultColumns,
    showNewsletter = true,
}: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-[#022C22] to-[#011E17] pt-16 text-gray-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 pb-12 sm:grid-cols-2 lg:grid-cols-5">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="mb-4 flex items-center gap-2">
                            <img
                                src="/ImpactAcademy.png"
                                alt="ImpactAcademy Logo"
                                className="-my-16 h-36 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="mb-6 max-w-sm text-sm leading-relaxed text-gray-400">
                            Platform pembelajaran online terbaik untuk
                            mengembangkan skill dan karir Anda dengan mentor
                            berpengalaman.
                        </p>

                        {/* Newsletter */}
                        {showNewsletter && (
                            <div>
                                <p className="mb-3 text-sm font-medium text-white">
                                    Berlangganan Newsletter
                                </p>
                                <div className="flex max-w-sm gap-2">
                                    <input
                                        type="email"
                                        placeholder="Email Anda"
                                        className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                    />
                                    <button className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:bg-primary/90">
                                        Daftar
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Link Columns */}
                    {columns.map((column, index) => (
                        <div key={index}>
                            <h4 className="mb-4 font-semibold text-white">
                                {column.title}
                            </h4>
                            <ul className="space-y-3 text-sm">
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
                <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-6 sm:flex-row">
                    <p className="text-sm text-gray-500">
                        © {currentYear} ImpactAcademy. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary hover:text-white"
                            aria-label="Facebook"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary hover:text-white"
                            aria-label="Instagram"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary hover:text-white"
                            aria-label="YouTube"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary hover:text-white"
                            aria-label="LinkedIn"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
