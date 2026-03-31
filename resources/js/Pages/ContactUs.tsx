import ContactForm from '@/Components/Contact/ContactForm';
import ContactHero from '@/Components/Contact/ContactHero';
import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';

export default function ContactUs() {
    return (
        <UserLayout>
            <Head title="Contact Us" />

            <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
                <div className="flex min-h-[600px] w-full flex-col gap-8 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl lg:flex-row lg:gap-0">
                    <ContactHero />
                    <ContactForm />
                </div>
                {/* Maps Section */}
                <div className="mt-16">
                    <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <div className="mb-2 h-1 w-12 rounded-full bg-primary" />
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                                Temukan Kami
                            </h2>
                            <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-500 sm:text-base">
                                Kunjungi kantor kami untuk berdiskusi langsung
                                mengenai kebutuhan pelatihan tim Anda.
                            </p>
                        </div>
                        {/* <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-5 py-3 shadow-sm">
                                <div>
                                    <p className="text-xs font-medium text-slate-400">
                                        Alamat
                                    </p>
                                    <p className="text-sm font-semibold text-slate-700">
                                        Bekasi, Jawa Barat
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-5 py-3 shadow-sm">
                                <div>
                                    <p className="text-xs font-medium text-slate-400">
                                        Telepon
                                    </p>
                                    <p className="text-sm font-semibold text-slate-700">
                                        0811-1060-66
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.0!2d106.9454703!3d-6.2655639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d00018ebf8f%3A0x33d30f8db400c7d7!2sSocial%20Impact%20Labs%20Indonesia!5e0!3m2!1sid!2sid!4v1711900000000!5m2!1sid!2sid"
                            className="h-[400px] w-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Lokasi Social Impact Labs Indonesia"
                        />
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
