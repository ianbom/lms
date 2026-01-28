import Icon from '@/Components/Icon';
import React from 'react';

export default function TCSidebar() {
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
        <aside className="sticky top-[100px] hidden h-[calc(100vh-120px)] w-64 shrink-0 overflow-y-auto md:block">
            <nav className="flex flex-col gap-6 pr-4">
                <div>
                    <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                        Daftar Isi
                    </h3>
                    <ul className="flex flex-col space-y-1">
                        <li>
                            <a
                                href="#general"
                                onClick={(e) => scrollToSection(e, 'general')}
                                className="group flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition-all"
                            >
                                <Icon name="info" className="text-[20px]" />
                                A. Ketentuan Umum
                            </a>
                        </li>
                        <li>
                            <a
                                href="#responsibilities"
                                onClick={(e) =>
                                    scrollToSection(e, 'responsibilities')
                                }
                                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-primary"
                            >
                                <Icon
                                    name="person"
                                    className="text-[20px] text-gray-400 transition-colors group-hover:text-primary"
                                />
                                B. Tanggung Jawab Pengguna
                            </a>
                        </li>
                        <li>
                            <a
                                href="#violations"
                                onClick={(e) =>
                                    scrollToSection(e, 'violations')
                                }
                                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-primary"
                            >
                                <Icon
                                    name="warning"
                                    className="text-[20px] text-gray-400 transition-colors group-hover:text-primary"
                                />
                                C. Pelanggaran dan Sanksi
                            </a>
                        </li>
                        <li>
                            <a
                                href="#payments"
                                onClick={(e) => scrollToSection(e, 'payments')}
                                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-primary"
                            >
                                <Icon
                                    name="payments"
                                    className="text-[20px] text-gray-400 transition-colors group-hover:text-primary"
                                />
                                D. Pemesanan & Pembayaran
                            </a>
                        </li>
                        <li>
                            <a
                                href="#intellectual-property"
                                onClick={(e) =>
                                    scrollToSection(e, 'intellectual-property')
                                }
                                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-primary"
                            >
                                <Icon
                                    name="copyright"
                                    className="text-[20px] text-gray-400 transition-colors group-hover:text-primary"
                                />
                                E. Hak Kekayaan Intelektual
                            </a>
                        </li>
                        <li>
                            <a
                                href="#third-party"
                                onClick={(e) =>
                                    scrollToSection(e, 'third-party')
                                }
                                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-primary"
                            >
                                <Icon
                                    name="link"
                                    className="text-[20px] text-gray-400 transition-colors group-hover:text-primary"
                                />
                                F. Tautan Pihak Ketiga
                            </a>
                        </li>
                        <li>
                            <a
                                href="#liability"
                                onClick={(e) => scrollToSection(e, 'liability')}
                                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-primary"
                            >
                                <Icon
                                    name="gavel"
                                    className="text-[20px] text-gray-400 transition-colors group-hover:text-primary"
                                />
                                G. Batasan Tanggung Jawab
                            </a>
                        </li>
                        <li>
                            <a
                                href="#law"
                                onClick={(e) => scrollToSection(e, 'law')}
                                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-primary"
                            >
                                <Icon
                                    name="account_balance"
                                    className="text-[20px] text-gray-400 transition-colors group-hover:text-primary"
                                />
                                H. Hukum yang Berlaku
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                onClick={(e) => scrollToSection(e, 'contact')}
                                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-primary"
                            >
                                <Icon
                                    name="contact_support"
                                    className="text-[20px] text-gray-400 transition-colors group-hover:text-primary"
                                />
                                I. Hubungi Kami
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="mt-4 rounded-xl border border-gray-100 bg-gray-50 p-4">
                    <h4 className="mb-2 text-sm font-bold text-gray-900">
                        Butuh Bantuan?
                    </h4>
                    <p className="mb-3 text-xs text-gray-500">
                        Jika Anda memiliki pertanyaan tentang dokumen ini,
                        silakan hubungi tim kami.
                    </p>
                    <button className="w-full rounded-lg border border-primary/20 bg-white py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/5">
                        Hubungi Support
                    </button>
                </div>
            </nav>
        </aside>
    );
}
