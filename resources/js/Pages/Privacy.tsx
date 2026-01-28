import Icon from '@/Components/Icon';
import PrivacyAccordion from '@/Components/Privacy/PrivacyAccordion';
import PrivacyContactCard from '@/Components/Privacy/PrivacyContactCard';
import PrivacySidebar from '@/Components/Privacy/PrivacySidebar';
import UserLayout from '@/Layouts/UserLayout';
import { Head, Link } from '@inertiajs/react';

export default function Privacy() {
    return (
        <UserLayout>
            <Head title="Privacy Policy" />

            <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
                {/* Breadcrumbs */}
                <nav className="mb-8 flex items-center text-sm">
                    <Link
                        href="/"
                        className="font-medium text-slate-500 transition-colors hover:text-primary"
                    >
                        Home
                    </Link>
                    <span className="mx-2 text-slate-400">/</span>
                    <a
                        href="#"
                        className="font-medium text-slate-500 transition-colors hover:text-primary"
                    >
                        Legal
                    </a>
                    <span className="mx-2 text-slate-400">/</span>
                    <span className="font-semibold text-primary">
                        Privacy Policy
                    </span>
                </nav>

                <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
                    <PrivacySidebar />

                    {/* Main Article Content */}
                    <main className="min-w-0 flex-1">
                        {/* Page Header */}
                        <div className="mb-10 border-b border-gray-100 pb-6">
                            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">
                                Privacy{' '}
                                <span className="relative inline-block text-gray-900">
                                    Policy
                                    <span className="absolute bottom-0 left-0 h-[6px] w-full rounded-full bg-primary opacity-90"></span>
                                </span>
                            </h1>
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                                <span className="flex items-center gap-1 rounded bg-gray-100 px-2 py-1">
                                    <Icon name="schedule" size={16} />
                                    Last Updated: October 24, 2023
                                </span>
                                <span>•</span>
                                <span>Version 3.0</span>
                                <span>•</span>
                                <span>5 min read</span>
                            </div>
                        </div>

                        {/* Article Body */}
                        <div className="prose prose-lg prose-slate max-w-none text-slate-600">
                            {/* Introduction */}
                            <section
                                className="mb-12 scroll-mt-28"
                                id="introduction"
                            >
                                <p className="lead mb-6 text-xl text-slate-700">
                                    At SaaS Platform, we are committed to
                                    protecting your privacy and ensuring the
                                    security of your personal information. This
                                    Privacy Policy outlines our practices
                                    regarding data collection, usage, and
                                    protection in a transparent manner.
                                </p>
                                <p className="mb-4">
                                    We believe that trust is the foundation of
                                    any successful relationship. That is why we
                                    have designed our platform with privacy as a
                                    core pillar. Whether you are a visitor or a
                                    registered user, we want you to feel
                                    confident about how we handle your digital
                                    footprint.
                                </p>
                            </section>

                            {/* Data Collection */}
                            <section
                                className="mb-12 scroll-mt-28"
                                id="collection"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    <Icon
                                        name="database"
                                        className="text-3xl text-primary"
                                    />
                                    <h2 className="m-0 text-2xl font-bold text-gray-900">
                                        Data Collection
                                    </h2>
                                </div>
                                <p className="mb-6">
                                    We collect information to provide better
                                    services to all our users. The types of
                                    information we collect depend on how you use
                                    our services.
                                </p>
                                <div className="not-prose grid gap-6 md:grid-cols-2">
                                    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
                                        <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-gray-900">
                                            <Icon
                                                name="person"
                                                className="text-primary"
                                            />
                                            Information You Provide
                                        </h3>
                                        <ul className="space-y-2 text-sm text-slate-600">
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                                                Account registration details
                                                (Name, Email)
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                                                Billing and payment information
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                                                Customer support communications
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
                                        <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-gray-900">
                                            <Icon
                                                name="dns"
                                                className="text-primary"
                                            />
                                            Auto-Collected Data
                                        </h3>
                                        <ul className="space-y-2 text-sm text-slate-600">
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                                                Device information (IP address,
                                                Browser type)
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                                                Usage logs and activity patterns
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                                                Cookies and pixel tags
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Usage */}
                            <section className="mb-12 scroll-mt-28" id="usage">
                                <div className="mb-4 flex items-center gap-3">
                                    <Icon
                                        name="manufacturing"
                                        className="text-3xl text-primary"
                                    />
                                    <h2 className="m-0 text-2xl font-bold text-gray-900">
                                        How We Use Data
                                    </h2>
                                </div>
                                <p className="mb-4">
                                    We use the information we collect to
                                    operate, maintain, and improve our services.
                                    Specifically, your data helps us to:
                                </p>
                                <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                                    <li>
                                        Process transactions and send related
                                        information, including confirmations and
                                        invoices.
                                    </li>
                                    <li>
                                        Send technical notices, updates,
                                        security alerts, and support and
                                        administrative messages.
                                    </li>
                                    <li>
                                        Respond to your comments, questions, and
                                        requests and provide customer service.
                                    </li>
                                    <li>
                                        Monitor and analyze trends, usage, and
                                        activities in connection with our
                                        Services.
                                    </li>
                                </ul>
                            </section>

                            {/* Technical Policies Accordions */}
                            <section
                                className="mb-12 scroll-mt-28"
                                id="cookies"
                            >
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Icon
                                            name="cookie"
                                            className="text-3xl text-primary"
                                        />
                                        <h2 className="m-0 text-2xl font-bold text-gray-900">
                                            Technical Policies
                                        </h2>
                                    </div>
                                    <span className="rounded border border-primary/20 bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                                        Expand for details
                                    </span>
                                </div>
                                <div className="not-prose space-y-4">
                                    <PrivacyAccordion title="Cookie & Tracking Technology">
                                        <p className="mb-3">
                                            We use cookies and similar tracking
                                            technologies to track the activity
                                            on our Service and hold certain
                                            information.
                                        </p>
                                        <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
                                            <h4 className="mb-2 text-xs font-semibold uppercase text-gray-900">
                                                Types of Cookies Used:
                                            </h4>
                                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                                <div>
                                                    <p className="text-xs font-medium text-primary">
                                                        Essential Cookies
                                                    </p>
                                                    <p className="text-xs">
                                                        Necessary for the
                                                        website to function
                                                        properly.
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-medium text-primary">
                                                        Analytics Cookies
                                                    </p>
                                                    <p className="text-xs">
                                                        Help us understand how
                                                        visitors interact with
                                                        the website.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </PrivacyAccordion>

                                    <PrivacyAccordion
                                        title="Data Sharing & Third Parties"
                                        id="sharing"
                                    >
                                        <p>
                                            We may share your personal
                                            information in the following
                                            situations:
                                        </p>
                                        <ul className="mt-2 list-disc space-y-1 pl-5">
                                            <li>
                                                <strong>
                                                    With Service Providers:
                                                </strong>{' '}
                                                To monitor and analyze the use
                                                of our Service, for payment
                                                processing, to contact you.
                                            </li>
                                            <li>
                                                <strong>
                                                    For Business Transfers:
                                                </strong>{' '}
                                                In connection with, or during
                                                negotiations of, any merger,
                                                sale of Company assets,
                                                financing, or acquisition.
                                            </li>
                                            <li>
                                                <strong>
                                                    With Affiliates:
                                                </strong>{' '}
                                                We may share Your information
                                                with Our affiliates, in which
                                                case we will require those
                                                affiliates to honor this Privacy
                                                Policy.
                                            </li>
                                        </ul>
                                    </PrivacyAccordion>
                                </div>
                            </section>

                            {/* Security */}
                            <section
                                className="mb-12 scroll-mt-28"
                                id="security"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    <Icon
                                        name="shield_lock"
                                        className="text-3xl text-primary"
                                    />
                                    <h2 className="m-0 text-2xl font-bold text-gray-900">
                                        Security Measures
                                    </h2>
                                </div>
                                <p>
                                    The security of your data is important to
                                    us, but remember that no method of
                                    transmission over the Internet, or method of
                                    electronic storage is 100% secure. While we
                                    strive to use commercially acceptable means
                                    to protect your Personal Data, we cannot
                                    guarantee its absolute security.
                                </p>
                            </section>

                            {/* Rights */}
                            <section className="mb-12 scroll-mt-28" id="rights">
                                <div className="mb-4 flex items-center gap-3">
                                    <Icon
                                        name="gavel"
                                        className="text-3xl text-primary"
                                    />
                                    <h2 className="m-0 text-2xl font-bold text-gray-900">
                                        Your Rights
                                    </h2>
                                </div>
                                <div className="rounded-r-lg border-l-4 border-primary bg-primary/5 p-4">
                                    <p className="mb-2 font-bold text-gray-900">
                                        GDPR & CCPA Compliance
                                    </p>
                                    <p className="m-0 text-sm">
                                        You have the right to access, update, or
                                        delete the information we have on you.
                                        Whenever made possible, you can access,
                                        update or request deletion of your
                                        Personal Data directly within your
                                        account settings section. If you are
                                        unable to perform these actions
                                        yourself, please contact us to assist
                                        you.
                                    </p>
                                </div>
                            </section>

                            <PrivacyContactCard />
                        </div>
                    </main>
                </div>
            </div>
        </UserLayout>
    );
}
