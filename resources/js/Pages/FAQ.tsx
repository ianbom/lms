import FAQItem from '@/Components/FAQ/FAQItem';
import FAQSearch from '@/Components/FAQ/FAQSearch';
import FAQSidebar from '@/Components/FAQ/FAQSidebar';
import Icon from '@/Components/Icon';
import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';

export default function FAQ() {
    return (
        <UserLayout>
            <Head title="Help Center - FAQ" />

            <div className="mx-auto flex w-full max-w-[1280px]">
                <FAQSidebar />

                <main className="min-w-0 flex-1 bg-white px-4 py-8 md:px-12 md:py-12">
                    <div className="mx-auto max-w-[800px]">
                        {/* Page Heading & Intro */}
                        <div className="mb-10 space-y-6">
                            <div className="space-y-2">
                                <h1 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
                                    Frequently Asked Questions
                                </h1>
                                <p className="max-w-2xl text-lg text-slate-500">
                                    Find answers to common questions about our
                                    platform, payments, and account security.
                                </p>
                            </div>

                            <FAQSearch />
                        </div>

                        {/* Content Sections */}
                        <div className="space-y-16">
                            {/* Section 1: Account & Security */}
                            <section id="account" className="scroll-mt-24">
                                <div className="mb-6 flex items-center gap-3 border-b border-gray-200 pb-2">
                                    <div className="rounded-lg bg-primary/10 p-2 text-primary">
                                        <Icon name="verified_user" size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Account & Security
                                    </h2>
                                </div>
                                <div className="space-y-1">
                                    <FAQItem
                                        question="How do I reset my password?"
                                        answer="To reset your password, go to the login page and click 'Forgot Password'. You will receive an email with instructions to create a new password. For security reasons, the link expires in 24 hours."
                                    />
                                    <FAQItem
                                        question="Can I enable Two-Factor Authentication (2FA)?"
                                        isOpen={true}
                                        answer={
                                            <>
                                                <p className="mb-4">
                                                    Yes, we strongly recommend
                                                    enabling 2FA for account
                                                    security. Go to{' '}
                                                    <strong>
                                                        Settings &gt; Security
                                                    </strong>{' '}
                                                    and select "Enable 2FA". You
                                                    can use Google
                                                    Authenticator, Authy, or SMS
                                                    verification.
                                                </p>
                                                <div className="mb-4 rounded-lg border border-primary/10 bg-primary/5 p-4">
                                                    <p className="flex gap-2 text-sm text-gray-900">
                                                        <Icon
                                                            name="info"
                                                            className="text-[20px] text-primary"
                                                        />
                                                        Note: Once enabled, you
                                                        will need your
                                                        verification code every
                                                        time you log in from a
                                                        new device.
                                                    </p>
                                                </div>
                                            </>
                                        }
                                    />
                                    <FAQItem
                                        question="How do I change my email address?"
                                        answer="You can update your email address in your Profile settings. A confirmation email will be sent to both your old and new addresses to verify the change."
                                    />
                                </div>
                            </section>

                            {/* Section 2: Billing & Subscription */}
                            <section id="billing" className="scroll-mt-24">
                                <div className="mb-6 flex items-center gap-3 border-b border-gray-200 pb-2">
                                    <div className="rounded-lg bg-gray-50 p-2 text-gray-900">
                                        <Icon
                                            name="account_balance_wallet"
                                            size={24}
                                        />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Billing & Subscription
                                    </h2>
                                </div>
                                <div className="space-y-1">
                                    <FAQItem
                                        question="Where can I find my invoices?"
                                        answer={
                                            <p>
                                                Invoices are generated
                                                automatically at the end of each
                                                billing cycle. You can download
                                                PDF versions of your past
                                                invoices from the{' '}
                                                <strong>Billing</strong> tab in
                                                your dashboard.
                                            </p>
                                        }
                                    />
                                    <FAQItem
                                        question="What payment methods do you accept?"
                                        answer="We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and Google Pay. Enterprise customers can also pay via wire transfer."
                                    />
                                    <FAQItem
                                        question="Do you offer refunds?"
                                        answer="We offer a 14-day money-back guarantee for all new subscriptions. If you are not satisfied with the product, contact support within 14 days of your purchase for a full refund."
                                    />
                                </div>
                            </section>

                            {/* Section 3: Troubleshooting */}
                            <section
                                id="troubleshooting"
                                className="scroll-mt-24"
                            >
                                <div className="mb-6 flex items-center gap-3 border-b border-gray-200 pb-2">
                                    <div className="rounded-lg bg-gray-50 p-2 text-gray-900">
                                        <Icon name="build" size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Troubleshooting
                                    </h2>
                                </div>
                                <div className="space-y-1">
                                    <FAQItem
                                        question="The app is loading slowly. What should I do?"
                                        answer={
                                            <p>
                                                First, check your internet
                                                connection. If the connection is
                                                stable, try clearing your
                                                browser cache and cookies. If
                                                the issue persists, check our{' '}
                                                <a
                                                    href="#"
                                                    className="text-primary hover:underline"
                                                >
                                                    Status Page
                                                </a>{' '}
                                                to see if there are any ongoing
                                                incidents.
                                            </p>
                                        }
                                    />
                                </div>
                            </section>
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-20 border-t border-gray-200 py-10">
                            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gray-50 p-8 md:flex-row">
                                <div>
                                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                                        Can't find what you're looking for?
                                    </h3>
                                    <p className="text-slate-500">
                                        Our friendly support team is here to
                                        help with any questions you have.
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <button className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-white transition-all hover:bg-primary/90">
                                        <Icon name="chat_bubble" />
                                        Contact Support
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </UserLayout>
    );
}
