import { PageHeader } from '@/Components/Admin';
import FormCard from '@/Components/Admin/FormCard';
import FormInput from '@/Components/Admin/FormInput';
import ImageUpload from '@/Components/Admin/ImageUpload';
import { MentorCardGrid, MentorSearchBar } from '@/Components/Admin/Mentor';
import MentorForm, { MentorFormData } from '@/Components/Admin/Mentor/MentorForm';
import RichTextEditor from '@/Components/Admin/RichTextEditor';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { Mentor } from '@/types/admin';
import { Head, useForm } from '@inertiajs/react';
import { useMemo, useState } from 'react';

// Define the shape of data coming from the backend
interface BackendMentor {
    id: number;
    name: string;
    headline: string;
    bio: string;
    avatar_url?: string;
}

interface ListMentorProps {
    mentors: BackendMentor[];
}

export default function ListMentor({ mentors }: ListMentorProps) {
    const [searchValue, setSearchValue] = useState('');
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editingMentor, setEditingMentor] = useState<BackendMentor | null>(
        null,
    );

    const { data, setData, post, processing, errors, reset } = useForm<
        MentorFormData & { _method?: string }
    >({
        name: '',
        headline: '',
        bio: '',
        avatar: null,
        avatar_url: '',
    });

    // Transform backend data to match the MentorCard component expectation
    const formattedMentors: Mentor[] = useMemo(() => {
        return mentors.map((item) => ({
            id: item.id,
            name: item.name,
            // Fallback for email since it's not in the DB model for mentors yet
            email: item.headline || 'No headline',
            avatarUrl: item.avatar_url,
            isOnline: false, // Default
            stats: {
                classes: 0, // Default
                activeStudents: 0, // Default
                rating: 0, // Default
            },
        }));
    }, [mentors]);

    const filteredMentors = useMemo(() => {
        const query = searchValue.toLowerCase();
        return formattedMentors.filter(
            (mentor) =>
                mentor.name.toLowerCase().includes(query) ||
                mentor.email.toLowerCase().includes(query),
        );
    }, [searchValue, formattedMentors]);

    const handleEditMentor = (mentor: Mentor) => {
        // Find the raw backend mentor data
        const backendMentor = mentors.find((m) => m.id === mentor.id);
        if (backendMentor) {
            setEditingMentor(backendMentor);
            setData({
                name: backendMentor.name,
                headline: backendMentor.headline || '',
                bio: backendMentor.bio || '',
                avatar: null,
                avatar_url: backendMentor.avatar_url || '',
                _method: 'PUT',
            });
            setEditModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setEditModalOpen(false);
        setEditingMentor(null);
        reset();
    };

    const handleSubmitEdit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingMentor) return;

        post(route('admin.mentors.update', editingMentor.id), {
            forceFormData: true,
            onSuccess: () => {
                handleCloseModal();
            },
        });
    };

    const getAvatarPreview = () => {
        if (data.avatar instanceof File) {
            return URL.createObjectURL(data.avatar);
        }
        return data.avatar_url || undefined;
    };

    return (
        <AdminLayout breadcrumbs={[{ label: 'Direktori Mentor' }]}>
            <Head title="Direktori Mentor" />

            <div className="flex flex-col gap-8">
                {/* Header Section */}
                <PageHeader
                    title="Direktori Mentor"
                    description="Kelola semua mentor dan performa mereka di sini."
                    actionLabel="Tambah Mentor"
                    onAction={() =>
                        (window.location.href = route('admin.mentors.create'))
                    }
                />

                {/* Filter & Search Bar */}
                <MentorSearchBar
                    searchValue={searchValue}
                    onSearchChange={setSearchValue}
                    onFilter={() => console.log('Filter clicked')}
                    onExport={() => console.log('Export clicked')}
                />

                {/* Mentor Cards Grid */}
                <MentorCardGrid
                    mentors={filteredMentors}
                    onMentorEdit={handleEditMentor}
                />
            </div>

            {/* Edit Modal */}
            {editModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-xl">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between border-b border-slate-200 p-6">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">
                                    Edit Mentor
                                </h2>
                                <p className="text-sm text-slate-500">
                                    Perbarui informasi mentor
                                </p>
                            </div>
                            <button
                                onClick={handleCloseModal}
                                className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                            >
                                <Icon name="close" size={24} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6">
                            <MentorForm
                                data={data}
                                setData={setData}
                                errors={errors}
                                processing={processing}
                                onSubmit={handleSubmitEdit}
                                submitLabel="Simpan Perubahan"
                                onCancel={handleCloseModal}
                            />
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
