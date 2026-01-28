import Icon from '@/Components/Icon';
import { useForm } from '@inertiajs/react';
import React from 'react';
import FloatingInput from './FloatingInput';
import FloatingSelect from './FloatingSelect';

export default function ContactForm() {
    const { data, setData, post, processing, errors } = useForm({
        full_name: '',
        email: '',
        phone: '',
        job_title: '',
        company: '',
        company_size: '',
        program: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Since we don't have a backend route specified yet, we can mock it or just log.
        // Assuming there might be a route later, but for now user just extracted UI.
        console.log('Form submitted', data);
        // post(route('contact.store'));
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

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
                    <FloatingInput
                        id="full-name"
                        label="Nama Lengkap"
                        name="full_name"
                        value={data.full_name}
                        onChange={(e) => setData('full_name', e.target.value)}
                        error={errors.full_name}
                    />
                    <FloatingInput
                        id="email"
                        label="Email Kantor"
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
                        label="Nomor Handphone"
                        type="tel"
                        name="phone"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                        error={errors.phone}
                    />
                    <FloatingInput
                        id="job-title"
                        label="Jabatan"
                        name="job_title"
                        value={data.job_title}
                        onChange={(e) => setData('job_title', e.target.value)}
                        error={errors.job_title}
                    />
                </div>

                <FloatingInput
                    id="company"
                    label="Nama Perusahaan"
                    name="company"
                    value={data.company}
                    onChange={(e) => setData('company', e.target.value)}
                    error={errors.company}
                />

                <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
                    <FloatingSelect
                        id="company-size"
                        label="Skala Perusahaan"
                        name="company_size"
                        value={data.company_size}
                        onChange={(e) =>
                            setData('company_size', e.target.value)
                        }
                        options={[
                            { label: '1 - 50 Karyawan', value: 'small' },
                            { label: '51 - 200 Karyawan', value: 'medium' },
                            { label: '201 - 1000 Karyawan', value: 'large' },
                            { label: '1000+ Karyawan', value: 'enterprise' },
                        ]}
                        error={errors.company_size}
                    />
                    <FloatingSelect
                        id="program"
                        label="Program Pelatihan"
                        name="program"
                        value={data.program}
                        onChange={(e) => setData('program', e.target.value)}
                        options={[
                            {
                                label: 'Leadership & Management',
                                value: 'leadership',
                            },
                            {
                                label: 'Digital Transformation',
                                value: 'digital',
                            },
                            { label: 'Sales & Marketing', value: 'sales' },
                            { label: 'Soft Skills', value: 'softskills' },
                            { label: 'Custom Program', value: 'custom' },
                        ]}
                        error={errors.program}
                    />
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={processing}
                        className="group flex w-full cursor-pointer items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-primary/30 transition-all hover:bg-[#006232] hover:shadow-lg hover:shadow-primary/40 sm:w-auto"
                    >
                        <span className="mr-2">Kirim Pesan</span>
                        <Icon
                            name="arrow_forward"
                            className="text-lg transition-transform group-hover:translate-x-1"
                        />
                    </button>
                </div>
            </form>
        </div>
    );
}
