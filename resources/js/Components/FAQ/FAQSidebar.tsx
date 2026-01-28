import Icon from '@/Components/Icon';
import React from 'react';

export default function FAQSidebar() {
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
        <aside className="custom-scrollbar sticky top-24 hidden h-[calc(100vh-6rem)] w-72 shrink-0 overflow-y-auto border-r border-gray-200 bg-white lg:block">
            <div className="space-y-8 p-6">
                <div className="space-y-2">
                    <h3 className="px-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                        Categories
                    </h3>
                    <nav className="flex flex-col gap-1">
                        <a
                            href="#getting-started"
                            onClick={(e) =>
                                scrollToSection(e, 'getting-started')
                            }
                            className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
                        >
                            <Icon
                                name="rocket_launch"
                                className="text-[20px] text-slate-500 transition-colors group-hover:text-primary"
                            />
                            Getting Started
                        </a>
                        <a
                            href="#account"
                            onClick={(e) => scrollToSection(e, 'account')}
                            className="relative flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2.5 text-sm font-medium text-primary"
                        >
                            <Icon
                                name="verified_user"
                                className="fill-current text-[20px]"
                            />
                            Account & Security
                            <div className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-primary"></div>
                        </a>
                        <a
                            href="#billing"
                            onClick={(e) => scrollToSection(e, 'billing')}
                            className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
                        >
                            <Icon
                                name="account_balance_wallet"
                                className="text-[20px] text-slate-500 transition-colors group-hover:text-primary"
                            />
                            Billing & Subscription
                        </a>
                        <a
                            href="#troubleshooting"
                            onClick={(e) =>
                                scrollToSection(e, 'troubleshooting')
                            }
                            className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
                        >
                            <Icon
                                name="build"
                                className="text-[20px] text-slate-500 transition-colors group-hover:text-primary"
                            />
                            Troubleshooting
                        </a>
                        <a
                            href="#api"
                            onClick={(e) => scrollToSection(e, 'api')}
                            className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
                        >
                            <Icon
                                name="integration_instructions"
                                className="text-[20px] text-slate-500 transition-colors group-hover:text-primary"
                            />
                            API & Developer
                        </a>
                    </nav>
                </div>

                {/* Promo Card */}
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                        <Icon name="support_agent" className="text-primary" />
                    </div>
                    <h4 className="mb-1 text-sm font-bold text-gray-900">
                        Need more help?
                    </h4>
                    <p className="mb-3 text-xs text-slate-500">
                        Our support team is available 24/7 to help you.
                    </p>
                    <button className="w-full rounded-lg border border-gray-200 bg-white py-2 text-xs font-bold text-gray-900 transition-colors hover:bg-gray-50">
                        Chat with Support
                    </button>
                </div>
            </div>
        </aside>
    );
}
