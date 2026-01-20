import FormCard from '@/Components/Admin/FormCard';
import FormInput from '@/Components/Admin/FormInput';
import FormSelect from '@/Components/Admin/FormSelect';
import ImageUpload from '@/Components/Admin/ImageUpload';
import MentorSelector from '@/Components/Admin/MentorSelector';
import RichTextEditor from '@/Components/Admin/RichTextEditor';
import SidebarCard from '@/Components/Admin/SidebarCard';
import ToggleButtonGroup from '@/Components/Admin/ToggleButtonGroup';
import ToggleSwitch from '@/Components/Admin/ToggleSwitch';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

// Sample data
const categoryOptions = [
    { value: 'design', label: 'Design' },
    { value: 'development', label: 'Development' },
    { value: 'business', label: 'Business' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'creative', label: 'Creative Arts' },
];

const difficultyOptions = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
];

const sampleMentors = [
    { id: 1, name: 'Jane Doe', role: 'Lead Designer', avatar: undefined },
    { id: 2, name: 'John Smith', role: 'Sr. Engineer', avatar: undefined },
];

export default function CreateClass() {
    // Form state
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('beginner');
    const [thumbnail, setThumbnail] = useState<string | undefined>();
    const [price, setPrice] = useState('199');
    const [discount, setDiscount] = useState('20');
    const [isPublic, setIsPublic] = useState(true);
    const [isFeatured, setIsFeatured] = useState(false);
    const [mentors, setMentors] = useState(sampleMentors);

    // Calculate final price
    const normalPrice = parseFloat(price) || 0;
    const discountPercent = parseFloat(discount) || 0;
    const finalPrice = normalPrice * (1 - discountPercent / 100);

    const handleRemoveMentor = (id: number) => {
        setMentors(mentors.filter((m) => m.id !== id));
    };

    const handleThumbnailChange = (file: File | null) => {
        if (file) {
            const url = URL.createObjectURL(file);
            setThumbnail(url);
        }
    };

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
                        className="rounded-lg border border-[#dae7e0] bg-white px-4 py-2.5 text-sm font-medium text-[#101814] transition-colors hover:bg-[#f9fafb]"
                    >
                        Save Draft
                    </button>
                    <button
                        type="button"
                        className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-[#00622e]"
                    >
                        <Icon name="publish" size={18} />
                        Publish
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
                                value={title}
                                onChange={setTitle}
                            />

                            <RichTextEditor
                                label="Description"
                                value={description}
                                onChange={setDescription}
                                placeholder="Start typing your class description here..."
                                maxLength={2000}
                            />

                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <FormSelect
                                    label="Category"
                                    placeholder="Select a category"
                                    options={categoryOptions}
                                    value={category}
                                    onChange={setCategory}
                                />

                                <ToggleButtonGroup
                                    label="Difficulty Level"
                                    options={difficultyOptions}
                                    value={difficulty}
                                    onChange={setDifficulty}
                                />
                            </div>
                        </div>
                    </FormCard>

                    {/* Mentors Card */}
                    <MentorSelector
                        selectedMentors={mentors}
                        onRemoveMentor={handleRemoveMentor}
                    />
                </div>

                {/* Right Column - Sidebar */}
                <div className="flex flex-col gap-6">
                    {/* Thumbnail */}
                    <SidebarCard title="Class Thumbnail">
                        <ImageUpload
                            value={thumbnail}
                            onChange={handleThumbnailChange}
                        />
                    </SidebarCard>

                    {/* Pricing */}
                    <SidebarCard title="Pricing">
                        <div className="flex flex-col gap-4">
                            <FormInput
                                label="Normal Price ($)"
                                type="number"
                                value={price}
                                onChange={setPrice}
                            />
                            <FormInput
                                label="Discount (%)"
                                type="number"
                                value={discount}
                                onChange={setDiscount}
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

                    {/* Visibility */}
                    <SidebarCard title="Visibility">
                        <div className="flex flex-col gap-4">
                            <ToggleSwitch
                                label="Public"
                                description="Visible to all students"
                                checked={isPublic}
                                onChange={setIsPublic}
                            />
                            <ToggleSwitch
                                label="Featured"
                                description="Show on homepage"
                                checked={isFeatured}
                                onChange={setIsFeatured}
                            />
                        </div>
                    </SidebarCard>

                    {/* Autosave Status */}
                    <div className="flex items-center justify-center gap-2 text-xs text-[#a0b3a9]">
                        <Icon name="schedule" size={14} />
                        Autosaved 2 mins ago
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
