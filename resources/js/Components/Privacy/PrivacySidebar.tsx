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
                        href="#collected-info"
                        onClick={(e) => scrollToSection(e, 'collected-info')}
                        className="block py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                    >
                        A. Informasi yang Dikumpulkan
                    </a>
                    <a
                        href="#personal-info"
                        onClick={(e) => scrollToSection(e, 'personal-info')}
                        className="block py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                    >
                        B. Informasi Pribadi
                    </a>
                    <a
                        href="#technology"
                        onClick={(e) => scrollToSection(e, 'technology')}
                        className="block py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                    >
                        C. Teknologi Pengumpulan
                    </a>
                    <a
                        href="#usage"
                        onClick={(e) => scrollToSection(e, 'usage')}
                        className="block py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                    >
                        D. Penggunaan Data
                    </a>
                    <a
                        href="#email-policy"
                        onClick={(e) => scrollToSection(e, 'email-policy')}
                        className="block py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                    >
                        E. Pengelolaan Email
                    </a>
                    <a
                        href="#disclosure"
                        onClick={(e) => scrollToSection(e, 'disclosure')}
                        className="block py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                    >
                        F. Pengungkapan Info
                    </a>
                    <a
                        href="#security"
                        onClick={(e) => scrollToSection(e, 'security')}
                        className="block py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                    >
                        G. Keamanan Data
                    </a>
                    <a
                        href="#rights"
                        onClick={(e) => scrollToSection(e, 'rights')}
                        className="block py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                    >
                        H. Hak Pengguna
                    </a>
                    <a
                        href="#changes"
                        onClick={(e) => scrollToSection(e, 'changes')}
                        className="block py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                    >
                        I. Perubahan Kebijakan
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => scrollToSection(e, 'contact')}
                        className="block py-2 text-sm font-medium text-slate-600 transition-colors hover:text-primary"
                    >
                        J. Kontak Kami
                    </a>
                </nav>
                <div className="mt-8 rounded-xl border border-primary/10 bg-primary/5 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase text-primary">
                        Butuh Bantuan?
                    </p>
                    <p className="mb-3 text-sm text-slate-600">
                        Silahkan menghubungi customer service, kami akan menjawab 24/7 pertanyaan anda
                    </p>
                    <a
                        className="flex items-center gap-1 text-sm font-bold text-primary hover:underline"
                        href="/contact"
                    >
                        Kontak Kami
                        <Icon name="arrow_forward" size={14} />
                    </a>
                </div>
            </div>
        </aside>
    );
}
