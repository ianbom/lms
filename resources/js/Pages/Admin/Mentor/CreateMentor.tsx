import { PageHeader } from '@/Components/Admin';
import FormCard from '@/Components/Admin/FormCard';
import FormInput from '@/Components/Admin/FormInput';
import ImageUpload from '@/Components/Admin/ImageUpload';
import RichTextEditor from '@/Components/Admin/RichTextEditor';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function CreateMentor() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        headline: '',
        bio: '',
        avatar: null as File | null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.mentors.store'), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout
            breadcrumbs={[
                { label: 'Mentors', href: route('admin.mentors') },
                { label: 'Create Mentor' },
            ]}
        >
            <Head title="Create Mentor" />

            {/* Page Header */}
            <PageHeader
                title="Create Mentor"
                description="Add a new mentor to the platform."
            />

            <form onSubmit={submit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Main Form Area */}
                    <div className="flex flex-col gap-6 lg:col-span-2">
                        <FormCard title="Personal Information" icon="person">
                            <div className="flex flex-col gap-6">
                                <FormInput
                                    label="Full Name"
                                    value={data.name}
                                    onChange={(val) => setData('name', val)}
                                    placeholder="e.g. Dr. Sarah Wijaya"
                                    required
                                    error={errors.name}
                                />
                                <FormInput
                                    label="Headline"
                                    value={data.headline}
                                    onChange={(val) => setData('headline', val)}
                                    placeholder="e.g. Expert in Machine Learning"
                                    error={errors.headline}
                                />
                                <RichTextEditor
                                    label="Bio"
                                    value={data.bio}
                                    onChange={(val) => setData('bio', val)}
                                    placeholder="Tell us about the mentor's background and expertise..."
                                    error={errors.bio}
                                />
                            </div>
                        </FormCard>
                    </div>

                    {/* Sidebar / Media */}
                    <div className="flex flex-col gap-6">
                        <FormCard title="Profile Image" icon="image">
                            <ImageUpload
                                value={
                                    data.avatar instanceof File
                                        ? URL.createObjectURL(data.avatar)
                                        : undefined
                                }
                                onChange={(file) => setData('avatar', file)}
                                aspectRatio="1:1"
                                className="w-full"
                                error={errors.avatar}
                            />
                        </FormCard>
                    </div>
                </div>

                {/* Form Actions */}
                <div className="flex items-center justify-end gap-4 border-t border-slate-200 pt-6">
                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#64748b] transition-all hover:bg-slate-50"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={processing}
                        className="rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-[#00622e] disabled:opacity-50"
                    >
                        {processing ? 'Creating...' : 'Create Mentor'}
                    </button>
                </div>
            </form>
        </AdminLayout>
    );
}
