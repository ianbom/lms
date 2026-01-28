import { PageHeader } from '@/Components/Admin';
import MentorForm, {
    MentorFormData,
} from '@/Components/Admin/Mentor/MentorForm';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function CreateMentor() {
    const { data, setData, post, processing, errors } = useForm<MentorFormData>(
        {
            name: '',
            headline: '',
            bio: '',
            avatar: null,
        },
    );

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

            <MentorForm
                data={data}
                setData={setData}
                errors={errors}
                processing={processing}
                onSubmit={submit}
                submitLabel="Create Mentor"
            />
        </AdminLayout>
    );
}
