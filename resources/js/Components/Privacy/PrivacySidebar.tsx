import Icon from '@/Components/Icon';
import React from 'react';

export default function PrivacySidebar() {
    const scrollToSection = (
        e: React.MouseEvent<HTMLAnchorElement>,
        id: string,
    ) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <aside className="hidden w-64 flex-shrink-0 lg:block">
            <div className="sticky top-24">
                <div className="mb-4">
                    <h3 className="mb-1 text-lg font-bold text-gray-900">
                        Table of Contents
                    </h3>
                    <p className="text-secondary-500 text-xs font-semibold uppercase tracking-wider">
                        Jump to section
                    </p>
                </div>
                <nav className="flex flex-col space-y-1 border-l border-gray-200 pl-4">
                    <a
                        href="#introduction"
                        onClick={(e) => scrollToSection(e, 'introduction')}
                        className="-ml-[17px] block border-l-4 border-primary py-2 pl-3 text-sm font-medium text-primary"
                    >
                        Introduction
                    </a>
                    <a
                        href="#collection"
                        onClick={(e) => scrollToSection(e, 'collection')}
                        className="block py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                    >
                        Data Collection
                    </a>
                    <a
                        href="#usage"
                        onClick={(e) => scrollToSection(e, 'usage')}
                        className="block py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                    >
                        How We Use Data
                    </a>
                    <a
                        href="#cookies"
                        onClick={(e) => scrollToSection(e, 'cookies')}
                        className="block py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                    >
                        Cookie Policy
                    </a>
                    <a
                        href="#sharing"
                        onClick={(e) => scrollToSection(e, 'sharing')}
                        className="block py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                    >
                        Data Sharing
                    </a>
                    <a
                        href="#security"
                        onClick={(e) => scrollToSection(e, 'security')}
                        className="block py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                    >
                        Security
                    </a>
                    <a
                        href="#rights"
                        onClick={(e) => scrollToSection(e, 'rights')}
                        className="block py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                    >
                        Your Rights
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, 'contact')}
                        className="block py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                    >
                        Contact Us
                    </a>
                </nav>
                <div className="mt-8 rounded-xl border border-primary/10 bg-primary/5 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase text-primary">
                        Need help?
                    </p>
                    <p className="mb-3 text-sm text-slate-600">
                        Our support team is available 24/7 to answer your
                        privacy questions.
                    </p>
                    <a
                        className="flex items-center gap-1 text-sm font-bold text-primary hover:underline"
                        href="/contact"
                    >
                        Contact Support
                        <Icon name="arrow_forward" size={14} />
                    </a>
                </div>
            </div>
        </aside>
    );
}
