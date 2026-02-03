import Icon from '@/Components/Icon';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect, useState } from 'react';

export default function ContactSection() {
    const { flash } = usePage().props as { flash?: { success?: string } };
    const [showSuccess, setShowSuccess] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        full_name: '',
        office_address: '',
        company_name: '',
        email: '',
        phone: '',
        job_title: '',
        company_size: '',
        interest: '',
        message: '',
    });

    useEffect(() => {
        if (flash?.success) {
            setShowSuccess(true);
            reset();
            setTimeout(() => setShowSuccess(false), 5000);
        }
    }, [flash?.success]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('corporate-training.contact'));
    };

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
                            Bangun kompetensi strategis melalui pelatihan
                            berbasis praktik, mentor profesional, dan ekosistem
                            pembelajaran yang mendukung pertumbuhan organisasi
                            berkelanjutan.
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
                        {/* Success Message */}
                        {showSuccess && (
                            <div className="mb-6 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-800">
                                <Icon name="check_circle" size={24} />
                                <p className="text-sm font-medium">
                                    Pesan Anda telah berhasil dikirim. Kami akan
                                    segera menghubungi Anda.
                                </p>
                            </div>
                        )}

                        <form onSubmit={submit} className="flex flex-col gap-5">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <label
                                        className="ml-1 text-sm font-semibold text-[#111814]"
                                        htmlFor="fullName"
                                    >
                                        Nama Lengkap *
                                    </label>
                                    <input
                                        className={`bg-input-bg h-12 w-full rounded-lg border-none bg-[#E6F4EF] px-4 text-[#111814] placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#13ec7c] ${errors.full_name
                                                ? 'ring-2 ring-red-500'
                                                : ''
                                            }`}
                                        id="fullName"
                                        placeholder="Budi Santoso"
                                        type="text"
                                        value={data.full_name}
                                        onChange={(e) =>
                                            setData('full_name', e.target.value)
                                        }
                                    />
                                    {errors.full_name && (
                                        <p className="text-xs text-red-500">
                                            {errors.full_name}
                                        </p>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="ml-1 text-sm font-semibold text-[#111814]"
                                            htmlFor="officeAddress"
                                        >
                                            Alamat Kantor
                                        </label>
                                        <input
                                            className="bg-input-bg h-12 w-full rounded-lg border-none bg-[#E6F4EF] px-4 text-[#111814] placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#13ec7c]"
                                            id="officeAddress"
                                            placeholder="Jl. Sudirman No. 123"
                                            type="text"
                                            value={data.office_address}
                                            onChange={(e) =>
                                                setData(
                                                    'office_address',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="ml-1 text-sm font-semibold text-[#111814]"
                                            htmlFor="companyName"
                                        >
                                            Nama Perusahaan *
                                        </label>
                                        <input
                                            className={`bg-input-bg h-12 w-full rounded-lg border-none bg-[#E6F4EF] px-4 text-[#111814] placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#13ec7c] ${errors.company_name
                                                    ? 'ring-2 ring-red-500'
                                                    : ''
                                                }`}
                                            id="companyName"
                                            placeholder="PT Dampak Sosial Indonesia"
                                            type="text"
                                            value={data.company_name}
                                            onChange={(e) =>
                                                setData(
                                                    'company_name',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.company_name && (
                                            <p className="text-xs text-red-500">
                                                {errors.company_name}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="ml-1 text-sm font-semibold text-[#111814]"
                                            htmlFor="email"
                                        >
                                            Email Kerja *
                                        </label>
                                        <input
                                            className={`bg-input-bg h-12 w-full rounded-lg border-none bg-[#E6F4EF] px-4 text-[#111814] placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#13ec7c] ${errors.email
                                                    ? 'ring-2 ring-red-500'
                                                    : ''
                                                }`}
                                            id="email"
                                            placeholder="ptputrajaya@company.com"
                                            type="email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData('email', e.target.value)
                                            }
                                        />
                                        {errors.email && (
                                            <p className="text-xs text-red-500">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="ml-1 text-sm font-semibold text-[#111814]"
                                            htmlFor="phone"
                                        >
                                            Nomor Handphone *
                                        </label>
                                        <input
                                            className={`bg-input-bg h-12 w-full rounded-lg border-none bg-[#E6F4EF] px-4 text-[#111814] placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-[#13ec7c] ${errors.phone
                                                    ? 'ring-2 ring-red-500'
                                                    : ''
                                                }`}
                                            id="phone"
                                            placeholder="+62 812 3456 7890"
                                            type="tel"
                                            value={data.phone}
                                            onChange={(e) =>
                                                setData('phone', e.target.value)
                                            }
                                        />
                                        {errors.phone && (
                                            <p className="text-xs text-red-500">
                                                {errors.phone}
                                            </p>
                                        )}
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
                                            value={data.job_title}
                                            onChange={(e) =>
                                                setData(
                                                    'job_title',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="ml-1 text-sm font-semibold text-[#111814]"
                                            htmlFor="companySize"
                                        >
                                            Skala Perusahaan *
                                        </label>
                                        <div className="relative">
                                            <select
                                                className={`bg-input-bg h-12 w-full appearance-none rounded-lg border-none bg-[#E6F4EF] px-4 text-[#111814] transition-all focus:bg-white focus:ring-2 focus:ring-[#13ec7c] ${errors.company_size
                                                        ? 'ring-2 ring-red-500'
                                                        : ''
                                                    }`}
                                                id="companySize"
                                                value={data.company_size}
                                                onChange={(e) =>
                                                    setData(
                                                        'company_size',
                                                        e.target.value,
                                                    )
                                                }
                                            >
                                                <option disabled value="">
                                                    Pilih skala
                                                </option>
                                                <option value="<10">
                                                    &lt; 10 Karyawan
                                                </option>
                                                <option value="11-50">
                                                    11 - 50 Karyawan
                                                </option>
                                                <option value="51-200">
                                                    51 - 200 Karyawan
                                                </option>
                                                <option value="201-500">
                                                    201 - 500 Karyawan
                                                </option>
                                                <option value="501-1000">
                                                    501 - 1000 Karyawan
                                                </option>
                                                <option value=">1000">
                                                    &gt; 1000 Karyawan
                                                </option>
                                            </select>
                                            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                                                <Icon name="expand_more" />
                                            </span>
                                        </div>
                                        {errors.company_size && (
                                            <p className="text-xs text-red-500">
                                                {errors.company_size}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label
                                        className="ml-1 text-sm font-semibold text-[#111814]"
                                        htmlFor="interest"
                                    >
                                        Pelatihan yang diinginkan *
                                    </label>
                                    <div className="relative">
                                        <select
                                            className={`bg-input-bg h-12 w-full appearance-none rounded-lg border-none bg-[#E6F4EF] px-4 text-[#111814] transition-all focus:bg-white focus:ring-2 focus:ring-[#13ec7c] ${errors.interest
                                                    ? 'ring-2 ring-red-500'
                                                    : ''
                                                }`}
                                            id="interest"
                                            value={data.interest}
                                            onChange={(e) =>
                                                setData(
                                                    'interest',
                                                    e.target.value,
                                                )
                                            }
                                        >
                                            <option disabled value="">
                                                Pilih program
                                            </option>
                                            <option value="Sertifikasi BNSP">
                                                Sertifikasi BNSP
                                            </option>
                                            <option value="Impact Measurement">
                                                Impact Measurement
                                            </option>
                                            <option value="ISO 26000">
                                                ISO 26000
                                            </option>
                                            <option value="ESG">ESG</option>
                                            <option value="Theory of Change">
                                                Theory of Change
                                            </option>
                                            <option value="Logical Framework Approach">
                                                Logical Framework Approach
                                            </option>
                                            <option value="System Thinking">
                                                System Thinking
                                            </option>
                                            <option value="GHG">GHG</option>
                                        </select>
                                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                                            <Icon name="expand_more" />
                                        </span>
                                    </div>
                                    {errors.interest && (
                                        <p className="text-xs text-red-500">
                                            {errors.interest}
                                        </p>
                                    )}
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
                                        value={data.message}
                                        onChange={(e) =>
                                            setData('message', e.target.value)
                                        }
                                    ></textarea>
                                </div>
                            </div>
                            <button
                                className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary/90 text-base font-bold text-[#111814] shadow-md transition-all hover:bg-primary hover:shadow-lg active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
                                type="submit"
                                disabled={processing}
                            >
                                {processing ? (
                                    <>
                                        <Icon
                                            name="progress_activity"
                                            className="animate-spin text-white"
                                            size={18}
                                        />
                                        <span className="text-white">
                                            Mengirim...
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-white">
                                            Kirim Pesan
                                        </span>
                                        <Icon
                                            className="text-white"
                                            name="arrow_forward"
                                            size={18}
                                        />
                                    </>
                                )}
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

