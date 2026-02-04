import Icon from '@/Components/Icon';
import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#1C1C1C] text-white">
            <div className="mx-auto w-full max-w-[1200px] px-8 py-12 md:px-12 md:py-16">
                <div className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl">
                            Make a Greatest — <br className="hidden md:block" />{' '}
                            and Sustainable Impact.
                        </h2>
                    </div>
                    {/* <div className="w-full min-w-[320px] lg:w-auto">
                        <p className="mb-3 text-sm font-medium text-white">
                            Get In Touch!
                        </p>
                        <form
                            className="group relative"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="relative flex items-center">
                                <input
                                    className="w-full rounded-full border border-gray-600 bg-transparent py-4 pl-6 pr-32 text-white placeholder-gray-400 transition-colors focus:border-[#00753D] focus:outline-none focus:ring-1 focus:ring-[#00753D] lg:w-96"
                                    placeholder="Enter your email"
                                    type="email"
                                />
                                <button
                                    className="absolute bottom-2 right-2 top-2 transform rounded-full bg-[#00753D] px-6 text-sm font-medium text-white shadow-lg transition-all hover:bg-[#005c30] hover:shadow-[#00753D]/30 active:scale-95"
                                    type="button"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div> */}
                </div>

                <div className="grid grid-cols-1 gap-10 border-t border-gray-800 pb-4 pt-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    <div className="space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">
                            Contact Information
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    className="group flex items-center gap-3 text-gray-300 transition-colors hover:text-[#00753D]"
                                    href="mailto:info@socialimpact.id"
                                >
                                    <div className="flex h-5 w-5 items-center justify-center text-[#00753D] transition-transform group-hover:scale-110">
                                        <Icon name="mail" size={20} />
                                    </div>
                                    <span>info@socialimpact.id</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="group flex items-center gap-3 text-gray-300 transition-colors hover:text-[#00753D]"
                                    href="tel:+62811106066"
                                >
                                    <div className="flex h-5 w-5 items-center justify-center text-[#00753D] transition-transform group-hover:scale-110">
                                        <Icon name="call" size={20} />
                                    </div>
                                    <span>+62 811 106 066</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <FooterLink href="/privacy-policy">
                                Privacy Policy
                            </FooterLink>
                            <FooterLink href="/terms-and-conditions">
                                Terms & Conditions
                            </FooterLink>
                            <FooterLink href="/contact-us">Contact</FooterLink>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">
                            Help
                        </h3>
                        <ul className="space-y-3">
                            <FooterLink href="/faq">FAQ</FooterLink>
                            <FooterLink href="/faq">Help Center</FooterLink>
                            <FooterLink href="/faq">Support</FooterLink>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">
                            Follow Us
                        </h3>
                        <div className="flex gap-4">
                            <SocialButton
                                href="https://www.linkedin.com/company/socialimpactid"
                                label="LinkedIn"
                            >
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </SocialButton>
                            <SocialButton
                                href="https://www.instagram.com/socialimpact_id/"
                                label="Instagram"
                            >
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5"
                                >
                                    <rect
                                        width="20"
                                        height="20"
                                        x="2"
                                        y="2"
                                        rx="5"
                                        ry="5"
                                    />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                                </svg>
                            </SocialButton>
                            <SocialButton
                                href="https://www.youtube.com/@SocialimpactID"
                                label="YouTube"
                            >
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5"
                                >
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </SocialButton>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full border-t border-gray-800">
                <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-8 py-6 text-xs text-gray-500 md:flex-row md:px-12">
                    <p>© 2026 Impact Academy. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <a
                            className="transition-colors hover:text-white"
                            href="/privacy-policy"
                        >
                            Privacy
                        </a>
                        <a
                            className="transition-colors hover:text-white"
                            href="/terms-and-conditions"
                        >
                            Terms & condition
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <li>
            <Link
                className="text-gray-300 transition-colors hover:text-white"
                href={href}
            >
                {children}
            </Link>
        </li>
    );
}

function SocialButton({
    href,
    children,
    label,
}: {
    href: string;
    children: React.ReactNode;
    label: string;
}) {
    return (
        <a
            className="flex h-10 w-10 transform items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#00753D] hover:text-white"
            href={href}
            aria-label={label}
        >
            {children}
        </a>
    );
}
