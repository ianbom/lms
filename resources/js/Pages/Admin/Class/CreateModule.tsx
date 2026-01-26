import ModuleForm, {
    createEmptyVideo,
    ModuleFormData,
} from '@/Components/Admin/Module/ModuleForm';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

interface CreateModuleProps {
    classId: number;
}

export default function CreateModule({ classId }: CreateModuleProps) {
    // 1. Setup useForm
    const { data, setData, post, processing, errors, transform } =
        useForm<ModuleFormData>({
            title: '',
            description: '',
            videos: [createEmptyVideo(1)],
        });

    // Handle data change from ModuleForm
    const handleDataChange = (
        newData: ModuleFormData | ((prev: ModuleFormData) => ModuleFormData),
    ) => {
        if (typeof newData === 'function') {
            setData(newData);
        } else {
            setData(newData);
        }
    };

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        // Transform data before sending to match backend expectations
        transform((formData) => ({
            title: formData.title,
            description: formData.description,
            videos: formData.videos.map((v) => ({
                title: v.title,
                description: v.description,
                youtube_url: v.youtubeUrl,
                is_preview: v.isPreview,
                duration_sec: v.durationSec,
                resources: v.files.map((f) => ({
                    title: f.name,
                    file: f.file, // Include actual File object
                    file_type: f.type,
                })),
            })),
        }));

        post(route('admin.module.store', classId), {
            forceFormData: true, // Required for file uploads
        });
    };

    return (
        <AdminLayout
            breadcrumbs={[
                { label: 'Kelas', href: route('admin.classes') },
                { label: 'Buat Modul' },
            ]}
        >
            <Head title="Buat Modul" />

            <form onSubmit={handleSubmit}>
                {/* Page Header */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-[#101814]">
                            Buat Modul Baru
                        </h1>
                        <p className="mt-1 text-[#5e6a62]">
                            Tambahkan detail modul dan konten video
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link
                            href={route('admin.classes')}
                            className="rounded-md border border-[#dae7e0] bg-white px-5 py-2.5 text-sm font-semibold text-[#5e6a62] transition-colors hover:bg-[#f9fafb]"
                        >
                            Batal
                        </Link>
                        <button
                            type="submit"
                            disabled={processing}
                            className="flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:bg-[#00622e] disabled:opacity-50"
                        >
                            <Icon name="save" size={20} />
                            {processing ? 'Menyimpan...' : 'Simpan Modul'}
                        </button>
                    </div>
                </div>

                {/* Module Form */}
                <div className="mt-8">
                    <ModuleForm
                        data={data}
                        errors={errors}
                        onDataChange={handleDataChange}
                    />
                </div>
            </form>
        </AdminLayout>
    );
}
