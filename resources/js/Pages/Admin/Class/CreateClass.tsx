import FormCard from '@/Components/Admin/FormCard';
import FormInput from '@/Components/Admin/FormInput';
import FormSelect from '@/Components/Admin/FormSelect';
import ImageUpload from '@/Components/Admin/ImageUpload';
import MentorSelector from '@/Components/Admin/MentorSelector';
import RichTextEditor from '@/Components/Admin/RichTextEditor';
import SidebarCard from '@/Components/Admin/SidebarCard';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';

// Define types for props
interface Category {
    id: number;
    name: string;
}

interface Mentor {
    id: number;
    name: string;
    role?: string;
    avatar?: string;
}

interface Props {
    categories: Category[];
    mentors: Mentor[];
}

export default function CreateClass({ categories, mentors }: Props) {
    const { data, setData, post, processing, errors, transform } = useForm({
        title: '',
        description: '',
        category_id: '',
        thumbnail: null as File | null,
        price: '0',
        discount: '0',
        mentors: [] as number[],
        status: 'published',
    });

    console.log(mentors);

    // Convert categories to select options
    const categoryOptions = categories.map((cat) => ({
        value: cat.id.toString(),
        label: cat.name,
    }));

    // Local state for preview and selected mentors
    const [thumbnailPreview, setThumbnailPreview] = useState<
        string | undefined
    >();
    const [selectedMentors, setSelectedMentors] = useState<Mentor[]>([]);

    // Calculate final price for display
    const normalPrice = parseFloat(data.price) || 0;
    const discountPercent = parseFloat(data.discount) || 0;
    const finalPrice = normalPrice * (1 - discountPercent / 100);

    const handleRemoveMentor = (id: number) => {
        setSelectedMentors(selectedMentors.filter((m) => m.id !== id));
        setData(
            'mentors',
            data.mentors.filter((mId) => mId !== id),
        );
    };

    const handleAddMentor = (mentor: Mentor) => {
        // Check if mentor already selected
        if (!selectedMentors.find((m) => m.id === mentor.id)) {
            setSelectedMentors([...selectedMentors, mentor]);
            setData('mentors', [...data.mentors, mentor.id]);
        }
    };

    const handleThumbnailChange = (file: File | null) => {
        if (file) {
            const url = URL.createObjectURL(file);
            setThumbnailPreview(url);
            setData('thumbnail', file);
        } else {
            setThumbnailPreview(undefined);
            setData('thumbnail', null);
        }
    };

    const handleSaveDraft = () => {
        transform((data) => ({
            ...data,
            status: 'draft',
        }));

        post(route('admin.classes.store'), {
            forceFormData: true,
            preserveScroll: true,
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
                { label: 'Classes', href: route('admin.classes') },
                { label: 'Create New Class' },
            ]}
        >
            <Head title="Create New Class" />

            {/* Page Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h1 className="text-2xl font-bold tracking-tight text-[#101814]">
                    Create New Class
                </h1>
                <div className="flex items-center gap-3">
                    <Link
                        href={route('admin.classes')}
                        className="rounded-lg px-4 py-2.5 text-sm font-medium text-[#5e6a62] transition-colors hover:bg-[#f0f5f2] hover:text-[#101814]"
                    >
                        Discard
                    </Link>
                    <button
                        type="button"
                        onClick={handleSaveDraft}
                        disabled={processing}
                        className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-[#00622e] disabled:opacity-50"
                    >
                        <Icon name="publish" size={18} />
                        {processing ? 'Saving...' : 'Save Draft'}
                    </button>
                </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Left Column - Main Form */}
                <div className="flex flex-col gap-6 lg:col-span-2">
                    {/* Class Details Card */}
                    <FormCard icon="edit_note" title="Class Details">
                        <div className="flex flex-col gap-5">
                            <FormInput
                                label="Class Title"
                                required
                                placeholder="e.g., Advanced System Architecture"
                                value={data.title}
                                onChange={(val) => setData('title', val)}
                                error={errors.title}
                            />

                            <RichTextEditor
                                label="Description"
                                value={data.description}
                                onChange={(val) => setData('description', val)}
                                placeholder="Start typing your class description here..."
                                maxLength={2000}
                                error={errors.description}
                            />

                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <FormSelect
                                    label="Category"
                                    placeholder="Select a category"
                                    options={categoryOptions}
                                    value={data.category_id}
                                    onChange={(val) =>
                                        setData('category_id', val)
                                    }
                                    error={errors.category_id}
                                />
                            </div>
                        </div>
                    </FormCard>

                    {/* Mentors Card */}
                    <MentorSelector
                        selectedMentors={selectedMentors}
                        onRemoveMentor={handleRemoveMentor}
                        availableMentors={mentors}
                        onAddMentor={handleAddMentor}
                    />
                </div>

                {/* Right Column - Sidebar */}
                <div className="flex flex-col gap-6">
                    {/* Thumbnail */}
                    <SidebarCard title="Class Thumbnail">
                        <ImageUpload
                            value={thumbnailPreview}
                            onChange={handleThumbnailChange}
                            error={errors.thumbnail}
                        />
                    </SidebarCard>

                    {/* Pricing */}
                    <SidebarCard title="Pricing">
                        <div className="flex flex-col gap-4">
                            <FormInput
                                label="Normal Price ($)"
                                type="number"
                                value={data.price}
                                onChange={(val) => setData('price', val)}
                                error={errors.price}
                            />
                            <FormInput
                                label="Discount (%)"
                                type="number"
                                value={data.discount}
                                onChange={(val) => setData('discount', val)}
                                error={errors.discount}
                            />

                            <div className="flex items-center justify-between border-t border-[#f0f5f2] pt-4">
                                <span className="text-sm text-[#5e6a62]">
                                    Final Price
                                </span>
                                <div className="text-right">
                                    {discountPercent > 0 && (
                                        <span className="mr-2 text-sm text-[#a0b3a9] line-through">
                                            ${normalPrice.toFixed(2)}
                                        </span>
                                    )}
                                    <span className="text-xl font-bold text-primary">
                                        ${finalPrice.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </SidebarCard>
                </div>
            </div>
        </AdminLayout>
    );
}
