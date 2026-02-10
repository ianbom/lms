import Icon from '@/Components/Icon';
import { useForm, usePage } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import FloatingInput from './FloatingInput';
import FloatingSelect from './FloatingSelect';

export default function ContactForm() {
    const { flash } = usePage().props as { flash?: { success?: string } };
    const [showSuccess, setShowSuccess] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        full_name: '',
        email: '',
        phone: '',
        company_size: '',
        message: '',
    });

    useEffect(() => {
        if (flash?.success) {
            setShowSuccess(true);
            reset();
            setTimeout(() => setShowSuccess(false), 5000);
        }
    }, [flash?.success]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('contact.store'));
    };

    return (
        <div className="flex w-full flex-col justify-center bg-white p-8 lg:w-1/2 lg:p-12 xl:p-16">
            <div className="mb-8 lg:hidden">
                <h2 className="text-dark-navy text-2xl font-bold">
                    Contact Us
                </h2>
                <p className="text-slate-gray mt-2 text-sm">
                    Get in touch with our expert team today.
                </p>
            </div>

            <div className="mb-10 hidden text-left lg:block">
                <h2 className="text-dark-navy mb-2 text-3xl font-bold tracking-tight">
                    Mari Terkoneksi
                </h2>
                <p className="text-slate-gray text-base font-normal">
                    Isi formulir di bawah ini untuk mendiskusikan kebutuhan
                    pelatihan Anda.
                </p>
            </div>

            {/* Success Message */}
            {showSuccess && (
                <div className="mb-6 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-800">
                    <Icon name="check_circle" size={24} />
                    <p className="text-sm font-medium">
                        Pesan Anda telah berhasil dikirim. Kami akan segera
                        menghubungi Anda.
                    </p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
                    <FloatingInput
                        id="full-name"
                        label="Nama Lengkap *"
                        name="full_name"
                        value={data.full_name}
                        onChange={(e) => setData('full_name', e.target.value)}
                        error={errors.full_name}
                    />
                    <FloatingInput
                        id="email"
                        label="Email Kantor *"
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        error={errors.email}
                    />
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
                    <FloatingInput
                        id="phone"
                        label="Nomor Handphone *"
                        type="tel"
                        name="phone"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                        error={errors.phone}
                    />

                    <FloatingSelect
                        id="company-size"
                        label="Skala Perusahaan"
                        name="company_size"
                        value={data.company_size}
                        onChange={(e) =>
                            setData('company_size', e.target.value)
                        }
                        options={[
                            {
                                label: '1 - 50 Karyawan',
                                value: '1 - 50 Karyawan',
                            },
                            {
                                label: '51 - 200 Karyawan',
                                value: '51 - 200 Karyawan',
                            },
                            {
                                label: '201 - 1000 Karyawan',
                                value: '201 - 1000 Karyawan',
                            },
                            {
                                label: '1000+ Karyawan',
                                value: '1000+ Karyawan',
                            },
                        ]}
                        error={errors.company_size}
                    />
                </div>

                <div className="relative">
                    <textarea
                        id="message"
                        name="message"
                        value={data.message}
                        onChange={(e) => setData('message', e.target.value)}
                        placeholder=" "
                        rows={4}
                        className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-[#00753D] focus:outline-none focus:ring-0 ${
                            errors.message
                                ? 'border-red-600'
                                : 'border-gray-300'
                        }`}
                    />
                    <label
                        htmlFor="message"
                        className={`absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#00753D] ${
                            errors.message ? 'text-red-600' : ''
                        }`}
                    >
                        Pesan
                    </label>
                    {errors.message && (
                        <p className="mt-2 text-xs text-red-600">
                            {errors.message}
                        </p>
                    )}
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={processing}
                        className="group flex w-full cursor-pointer items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-primary/30 transition-all hover:bg-[#006232] hover:shadow-lg hover:shadow-primary/40 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                    >
                        {processing ? (
                            <>
                                <Icon
                                    name="progress_activity"
                                    className="mr-2 animate-spin text-lg"
                                />
                                <span>Mengirim...</span>
                            </>
                        ) : (
                            <>
                                <span className="mr-2">Kirim Pesan</span>
                                <Icon
                                    name="arrow_forward"
                                    className="text-lg transition-transform group-hover:translate-x-1"
                                />
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
