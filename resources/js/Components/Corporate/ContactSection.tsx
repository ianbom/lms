import Icon from '@/Components/Icon';
import { Link } from '@inertiajs/react';

export default function ContactSection() {
    return (
        <section className="w-full max-w-[1200px] px-6 py-12 lg:px-10 lg:py-24">
            <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
                {/* Left Column: Brand & Testimonial */}
                <div className="flex flex-1 flex-col justify-between">
                    <div className="space-y-6">
                        <div className="text-premium-green inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#00753D]">
                            Contact Us
                        </div>
                        <h2 className="text-3xl font-bold leading-tight text-[#111814] md:text-4xl">
                            We help you build <br /> your future.
                        </h2>
                        <p className="max-w-md text-lg leading-relaxed text-gray-600">
                            Whether you're looking to upskill your team or
                            launch a new career, our advisors are here to guide
                            you through the process.
                        </p>
                    </div>
                    {/* Editorial Testimonial */}
                    <div className="relative mt-12 lg:mt-24">
                        <span className="absolute -left-4 -top-10 select-none text-6xl text-primary/20">
                            <Icon name="format_quote" size={60} />
                        </span>
                        <blockquote className="relative z-10">
                            <p className="mb-8 text-2xl font-medium leading-snug tracking-tight text-[#111814] md:text-3xl">
                                "The curriculum transformed my career path
                                entirely. The mentorship is unmatched."
                            </p>
                            <div className="flex items-center gap-4">
                                <div
                                    className="h-12 w-12 rounded-full bg-gray-200 bg-cover bg-center"
                                    style={{
                                        backgroundImage:
                                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDiCDVhFS-Q4r5_PgJ6zBONlFNN0e6gDvWZ6cx78sHbQqfUKQXEYOb9F9FTUz-vkadFfyw2OHwZ2j8a5tnU27JtDbxVh3qZdbZVo_bBpZFba8D9emBSnlcAoHZBxA4JSpOQ-OViWbj1JZqQosbhZhuC8Wp_VipPjjAkMsXN9bEs9sVXzrTYL8dXOF5TNh7Zo53TaLIh0ChFUfDZJEHnLsoAwowoEVZVCKs8e2SPbwydBEfy6Bb3h7UBL06yV0CjBjqwqXH8yJ2uKGY-')",
                                    }}
                                ></div>
                                <div>
                                    <cite className="block font-bold not-italic text-[#111814]">
                                        Jessica Setiawan
                                    </cite>
                                    <span className="text-sm text-gray-500">
                                        Alumni, Class of 2023
                                    </span>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
                {/* Right Column: Airy Form */}
                <div className="flex-1">
                    <div className="mx-auto max-w-lg lg:mr-0">
                        <form className="flex flex-col gap-5">
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label
                                        className="ml-1 text-sm font-semibold text-[#111814]"
                                        htmlFor="firstName"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        className="bg-input-bg h-12 w-full rounded-lg border-none bg-[#E6F4EF] px-4 text-[#111814] placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#13ec7c] active:ring-[#13ec7c]"
                                        id="firstName"
                                        placeholder="Jane"
                                        type="text"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label
                                        className="ml-1 text-sm font-semibold text-[#111814]"
                                        htmlFor="lastName"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        className="bg-input-bg h-12 w-full rounded-lg border-none bg-[#E6F4EF] px-4 text-[#111814] placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#13ec7c]"
                                        id="lastName"
                                        placeholder="Doe"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="ml-1 text-sm font-semibold text-[#111814]"
                                    htmlFor="email"
                                >
                                    Work Email
                                </label>
                                <input
                                    className="bg-input-bg h-12 w-full rounded-lg border-none bg-[#E6F4EF] px-4 text-[#111814] placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#13ec7c]"
                                    id="email"
                                    placeholder="jane@company.com"
                                    type="email"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="ml-1 text-sm font-semibold text-[#111814]"
                                    htmlFor="interest"
                                >
                                    How can we help?
                                </label>
                                <div className="relative">
                                    <select
                                        className="bg-input-bg h-12 w-full appearance-none rounded-lg border-none bg-[#E6F4EF] px-4 text-[#111814] transition-all focus:bg-white focus:ring-2 focus:ring-[#13ec7c]"
                                        id="interest"
                                        defaultValue=""
                                    >
                                        <option disabled value="">
                                            Select a topic
                                        </option>
                                        <option value="admissions">
                                            Program Admissions
                                        </option>
                                        <option value="partnerships">
                                            Corporate Partnerships
                                        </option>
                                        <option value="careers">
                                            Careers at Impact
                                        </option>
                                        <option value="other">
                                            Other Inquiry
                                        </option>
                                    </select>
                                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                                        <Icon name="expand_more" />
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="ml-1 text-sm font-semibold text-[#111814]"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="bg-input-bg w-full resize-none rounded-lg border-none bg-[#E6F4EF] p-4 text-[#111814] transition-all placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#13ec7c]"
                                    id="message"
                                    placeholder="Tell us a bit about your goals..."
                                    rows={4}
                                ></textarea>
                            </div>
                            <button
                                className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#13ec7c] text-base font-bold text-[#111814] shadow-md transition-all hover:bg-[#0fd66e] hover:shadow-lg active:scale-[0.99]"
                                type="button"
                            >
                                <span>Start your Journey</span>
                                <Icon name="arrow_forward" size={18} />
                            </button>
                            <p className="mt-2 text-center text-xs text-gray-500">
                                By submitting this form, you agree to our{' '}
                                <Link
                                    className="underline hover:text-[#13ec7c]"
                                    href="#"
                                >
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
