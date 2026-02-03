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
                            Hubungi Kami
                        </div>
                        <h2 className="text-3xl font-bold leading-tight text-[#111814] md:text-4xl">
                            Kami bantu perusahaanmu <br /> bangun masa depan.
                        </h2>
                        <p className="max-w-md text-lg leading-relaxed text-gray-600">
                            Bangun kompetensi strategis melalui pelatihan berbasis praktik,
                            mentor profesional, dan ekosistem pembelajaran yang mendukung pertumbuhan organisasi berkelanjutan.
                        </p>
                    </div>
                    {/* Editorial Testimonial */}
                    <div className="relative mt-12 lg:mt-24">
                        <span className="absolute -left-4 -top-10 select-none text-6xl text-primary/20">
                            <Icon name="format_quote" size={60} />
                        </span>
                        <blockquote className="relative z-10">
                            <p className="mb-8 text-2xl font-medium leading-snug tracking-tight text-[#111814] md:text-3xl">
                                "Kurikulumnya benar-benar mengubah jalur karir
                                saya. Mentorship-nya tak tertandingi."
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
                                        Alumni, Angkatan 2023
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
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <label
                                        className="ml-1 text-sm font-semibold text-[#111814]"
                                        htmlFor="fullName"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <input
                                        className="bg-input-bg h-12 w-full rounded-lg border-none bg-[#E6F4EF] px-4 text-[#111814] placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#13ec7c] active:ring-[#13ec7c]"
                                        id="fullName"
                                        placeholder="John Doe"
                                        type="text"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="ml-1 text-sm font-semibold text-[#111814]"
                                            htmlFor="officeName"
                                        >
                                            Nama Kantor
                                        </label>
                                        <input
                                            className="bg-input-bg h-12 w-full rounded-lg border-none bg-[#E6F4EF] px-4 text-[#111814] placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#13ec7c]"
                                            id="officeName"
                                            placeholder="Cabang Jakarta"
                                            type="text"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="ml-1 text-sm font-semibold text-[#111814]"
                                            htmlFor="companyName"
                                        >
                                            Nama Perusahaan
                                        </label>
                                        <input
                                            className="bg-input-bg h-12 w-full rounded-lg border-none bg-[#E6F4EF] px-4 text-[#111814] placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#13ec7c]"
                                            id="companyName"
                                            placeholder="PT. Impact Academy"
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="ml-1 text-sm font-semibold text-[#111814]"
                                            htmlFor="email"
                                        >
                                            Email Kerja
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
                                            htmlFor="phone"
                                        >
                                            Nomor Handphone
                                        </label>
                                        <input
                                            className="bg-input-bg h-12 w-full rounded-lg border-none bg-[#E6F4EF] px-4 text-[#111814] placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#13ec7c]"
                                            id="phone"
                                            placeholder="+62 812 3456 7890"
                                            type="tel"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="ml-1 text-sm font-semibold text-[#111814]"
                                            htmlFor="jobTitle"
                                        >
                                            Jabatan
                                        </label>
                                        <input
                                            className="bg-input-bg h-12 w-full rounded-lg border-none bg-[#E6F4EF] px-4 text-[#111814] placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#13ec7c]"
                                            id="jobTitle"
                                            placeholder="HR Manager"
                                            type="text"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="ml-1 text-sm font-semibold text-[#111814]"
                                            htmlFor="companySize"
                                        >
                                            Skala Perusahaan
                                        </label>
                                        <div className="relative">
                                            <select
                                                className="bg-input-bg h-12 w-full appearance-none rounded-lg border-none bg-[#E6F4EF] px-4 text-[#111814] transition-all focus:bg-white focus:ring-2 focus:ring-[#13ec7c]"
                                                id="companySize"
                                                defaultValue=""
                                            >
                                                <option disabled value="">
                                                    Pilih skala
                                                </option>
                                                <option value="<10">&lt; 10 Karyawan</option>
                                                <option value="11-50">11 - 50 Karyawan</option>
                                                <option value="51-200">51 - 200 Karyawan</option>
                                                <option value="201-500">201 - 500 Karyawan</option>
                                                <option value="501-1000">501 - 1000 Karyawan</option>
                                                <option value=">1000">&gt; 1000 Karyawan</option>
                                            </select>
                                            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                                                <Icon name="expand_more" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label
                                        className="ml-1 text-sm font-semibold text-[#111814]"
                                        htmlFor="interest"
                                    >
                                        Pelatihan yang diinginkan
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="bg-input-bg h-12 w-full appearance-none rounded-lg border-none bg-[#E6F4EF] px-4 text-[#111814] transition-all focus:bg-white focus:ring-2 focus:ring-[#13ec7c]"
                                            id="interest"
                                            defaultValue=""
                                        >
                                            <option disabled value="">
                                                Pilih program
                                            </option>
                                            <option value="sertifikasi-bnsp">Sertifikasi BNSP</option>
                                            <option value="impact-measurement">Impact Measurement</option>
                                            <option value="iso-26000">ISO 26000</option>
                                            <option value="esg">ESG</option>
                                            <option value="theory-of-change">Theory of Change</option>
                                            <option value="logical-framework-approach">Logical Framework Approach</option>
                                            <option value="system-thinking">System Thinking</option>
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
                                        Pesan
                                    </label>
                                    <textarea
                                        className="bg-input-bg w-full resize-none rounded-lg border-none bg-[#E6F4EF] p-4 text-[#111814] transition-all placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#13ec7c]"
                                        id="message"
                                        placeholder="Ceritakan sedikit tentang kebutuhan pelatihanmu..."
                                        rows={4}
                                    ></textarea>
                                </div>
                            </div>
                            <button
                                className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary/90 text-base font-bold text-[#111814] shadow-md transition-all hover:bg-primary hover:shadow-lg active:scale-[0.99]"
                                type="button"
                            >
                                <span className='text-white'>Kirim Pesan</span>
                                <Icon className='text-white' name="arrow_forward" size={18} />
                            </button>
                            <p className="mt-2 text-center text-xs text-gray-500">
                                Dengan mengirimkan formulir ini, kamu menyetujui{' '}
                                <Link
                                    className="underline hover:text-[#13ec7c]"
                                    href="#"
                                >
                                    Kebijakan Privasi
                                </Link>{' '}
                                kami.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
