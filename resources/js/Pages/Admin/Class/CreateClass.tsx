import ClassForm, {
    Category,
    ClassFormData,
    ClassFormErrors,
    Mentor,
} from '@/Components/Admin/Class/ClassForm';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

interface Props {
    categories: Category[];
    mentors: Mentor[];
}

export default function CreateClass({ categories, mentors }: Props) {
    const [processing, setProcessing] = useState(false);
    const [formData, setFormData] = useState<ClassFormData>({
        title: '',
        description: '',
        category_id: '',
        price: '0',
        discount: '0',
        status: 'draft',
    });
    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
    const [thumbnailPreview, setThumbnailPreview] = useState<string | undefined>();
    const [selectedMentors, setSelectedMentors] = useState<Mentor[]>([]);
    const [errors, setErrors] = useState<ClassFormErrors>({});

    const handleRemoveMentor = (id: number) => {
        setSelectedMentors(selectedMentors.filter((m) => m.id !== id));
    };

    const handleAddMentor = (mentor: Mentor) => {
        if (!selectedMentors.find((m) => m.id === mentor.id)) {
            setSelectedMentors([...selectedMentors, mentor]);
        }
    };

    const handleThumbnailChange = (file: File | null) => {
        if (file) {
            const url = URL.createObjectURL(file);
            setThumbnailPreview(url);
            setThumbnailFile(file);
        } else {
            setThumbnailPreview(undefined);
            setThumbnailFile(null);
        }
    };

    const handleSaveDraft = () => {
        setProcessing(true);
        setErrors({});

        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('category_id', formData.category_id);
        data.append('price', formData.price);
        data.append('discount', formData.discount);
        data.append('status', 'draft');
        selectedMentors.forEach((mentor) => {
            data.append('mentors[]', mentor.id.toString());
        });
        if (thumbnailFile) {
            data.append('thumbnail', thumbnailFile);
        }

        router.post(route('admin.classes.store'), data, {
            forceFormData: true,
            preserveScroll: true,
            onError: (errors) => {
                setErrors(errors as ClassFormErrors);
            },
            onFinish: () => {
                setProcessing(false);
            },
        });
    };

    // Cleanup preview URL on unmount
    useEffect(() => {
        return () => {
            if (thumbnailPreview) {
                URL.revokeObjectURL(thumbnailPreview);
            }
        };
    }, [thumbnailPreview]);

    return (
        <AdminLayout
            breadcrumbs={[
                { label: 'Kelas', href: route('admin.classes') },
                { label: 'Buat Kelas Baru' },
            ]}
        >
            <Head title="Buat Kelas Baru" />

            {/* Page Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h1 className="text-2xl font-bold tracking-tight text-[#101814]">
                    Buat Kelas Baru
                </h1>
                <div className="flex items-center gap-3">
                    <Link
                        href={route('admin.classes')}
                        className="rounded-md px-4 py-2.5 text-sm font-medium text-[#5e6a62] transition-colors hover:bg-[#f0f5f2] hover:text-[#101814]"
                    >
                        Batalkan
                    </Link>
                    <button
                        type="button"
                        onClick={handleSaveDraft}
                        disabled={processing}
                        className="flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-[#00622e] disabled:opacity-50"
                    >
                        <Icon name="publish" size={18} />
                        {processing ? 'Menyimpan...' : 'Simpan Draft'}
                    </button>
                </div>
            </div>

            {/* Class Form */}
            <ClassForm
                formData={formData}
                onFormDataChange={setFormData}
                categories={categories}
                mentors={mentors}
                selectedMentors={selectedMentors}
                onAddMentor={handleAddMentor}
                onRemoveMentor={handleRemoveMentor}
                thumbnailPreview={thumbnailPreview}
                onThumbnailChange={handleThumbnailChange}
                errors={errors}
            />
        </AdminLayout>
    );
}
