import ClassForm, {
    Category,
    ClassFormData,
    ClassFormErrors,
    Mentor as MentorOption,
} from '@/Components/Admin/Class/ClassForm';
import Icon from '@/Components/Icon';
import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { ClassData } from '../types';

interface EditClassModalProps {
    isOpen: boolean;
    onClose: () => void;
    classData: ClassData;
    categories: Category[];
    mentors: MentorOption[];
}

export default function EditClassModal({
    isOpen,
    onClose,
    classData,
    categories,
    mentors,
}: EditClassModalProps) {
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState<ClassFormErrors>({});
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
    const [selectedMentors, setSelectedMentors] = useState<MentorOption[]>([]);

    // Reset form when modal opens
    useEffect(() => {
        if (isOpen) {
            setFormData({
                title: classData.title || '',
                description: classData.description || '',
                category_id: classData.category?.id?.toString() || '',
                price: classData.price?.toString() || '0',
                discount: classData.discount?.toString() || '0',
                status: classData.status || 'draft',
            });
            setThumbnailPreview(classData.thumbnail_url || undefined);
            setThumbnailFile(null);
            setSelectedMentors(
                classData.mentors?.map((m) => ({
                    id: m.id,
                    name: m.name,
                    avatar: m.avatar_url,
                })) || []
            );
            setErrors({});
        }
    }, [isOpen, classData]);

    // Cleanup preview URL on unmount
    useEffect(() => {
        return () => {
            if (thumbnailPreview && thumbnailPreview.startsWith('blob:')) {
                URL.revokeObjectURL(thumbnailPreview);
            }
        };
    }, [thumbnailPreview]);

    const handleRemoveMentor = (id: number) => {
        setSelectedMentors(selectedMentors.filter((m) => m.id !== id));
    };

    const handleAddMentor = (mentor: MentorOption) => {
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
            setThumbnailPreview(classData.thumbnail_url || undefined);
            setThumbnailFile(null);
        }
    };

    const handleSubmit = () => {
        setProcessing(true);
        setErrors({});

        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('category_id', formData.category_id);
        data.append('price', formData.price);
        data.append('discount', formData.discount);
        data.append('status', formData.status);
        selectedMentors.forEach((mentor) => {
            data.append('mentors[]', mentor.id.toString());
        });
        if (thumbnailFile) {
            data.append('thumbnail', thumbnailFile);
        }
        data.append('_method', 'PUT');

        router.post(route('admin.classes.update', classData.id), data, {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                onClose();
            },
            onError: (errors) => {
                setErrors(errors as ClassFormErrors);
            },
            onFinish: () => {
                setProcessing(false);
            },
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 transition-opacity"
                onClick={onClose}
            />
            {/* Modal Content */}
            <div className="relative z-10 my-8 w-full max-w-5xl rounded-xl bg-slate-100 p-6 shadow-xl">
                {/* Modal Header */}
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-slate-900">Edit Kelas</h2>
                    <button
                        onClick={onClose}
                        className="rounded-md p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-600"
                    >
                        <Icon name="close" size={24} />
                    </button>
                </div>

                {/* Modal Body - Class Form */}
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

                {/* Modal Footer */}
                <div className="mt-6 flex items-center justify-end gap-3 border-t border-slate-200 pt-6">
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={processing}
                        className="rounded-md px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-200 disabled:opacity-50"
                    >
                        Batal
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={processing}
                        className="flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-[#00622e] disabled:opacity-50"
                    >
                        <Icon name="save" size={18} />
                        {processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                    </button>
                </div>
            </div>
        </div>
    );
}
