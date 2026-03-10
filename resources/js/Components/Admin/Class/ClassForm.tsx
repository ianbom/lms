import FormCard from '@/Components/Admin/FormCard';
import FormInput from '@/Components/Admin/FormInput';
import FormSelect from '@/Components/Admin/FormSelect';
import ImageUpload from '@/Components/Admin/ImageUpload';
import MentorSelector from '@/Components/Admin/MentorSelector';
import RichTextEditor from '@/Components/Admin/RichTextEditor';
import SidebarCard from '@/Components/Admin/SidebarCard';

export interface Category {
    id: number;
    name: string;
}

export interface Mentor {
    id: number;
    name: string;
    role?: string;
    avatar?: string;
}

export interface ClassFormData {
    title: string;
    description: string;
    category_id: string;
    type: string;
    price: string;
    discount: string;
    status: string;
    location: string;
    is_priority: boolean;
    url_link: string;
    implementation_date: string;
}

export interface ClassFormErrors {
    title?: string;
    description?: string;
    category_id?: string;
    type?: string;
    price?: string;
    discount?: string;
    thumbnail?: string;
    [key: string]: string | undefined;
}

interface ClassFormProps {
    formData: ClassFormData;
    onFormDataChange: (data: ClassFormData) => void;
    categories: Category[];
    mentors: Mentor[];
    selectedMentors: Mentor[];
    onAddMentor: (mentor: Mentor) => void;
    onRemoveMentor: (id: number) => void;
    thumbnailPreview?: string;
    onThumbnailChange: (file: File | null) => void;
    errors: ClassFormErrors;
}

export default function ClassForm({
    formData,
    onFormDataChange,
    categories,
    mentors,
    selectedMentors,
    onAddMentor,
    onRemoveMentor,
    thumbnailPreview,
    onThumbnailChange,
    errors,
}: ClassFormProps) {
    // Convert categories to select options
    const categoryOptions = categories.map((cat) => ({
        value: cat.id.toString(),
        label: cat.name,
    }));

    // Calculate final price for display
    const normalPrice = parseFloat(formData.price) || 0;
    const discountPercent = parseFloat(formData.discount) || 0;
    const finalPrice = normalPrice * (1 - discountPercent / 100);

    const handleFieldChange = (field: keyof ClassFormData, value: string) => {
        onFormDataChange({ ...formData, [field]: value });
    };

    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Left Column - Main Form */}
            <div className="flex flex-col gap-6 lg:col-span-2">
                {/* Class Details Card */}
                <FormCard icon="edit_note" title="Detail Kelas">
                    <div className="flex flex-col gap-5">
                        <FormInput
                            label="Judul Kelas"
                            required
                            placeholder="Contoh: Arsitektur Sistem Lanjutan"
                            value={formData.title}
                            onChange={(val) => handleFieldChange('title', val)}
                            error={errors.title}
                        />

                        <RichTextEditor
                            label="Deskripsi"
                            value={formData.description}
                            onChange={(val) =>
                                handleFieldChange('description', val)
                            }
                            placeholder="Mulai ketik deskripsi kelas di sini..."
                            maxLength={2000}
                            error={errors.description}
                        />

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <FormSelect
                                label="Kategori"
                                placeholder="Pilih kategori"
                                options={categoryOptions}
                                value={formData.category_id}
                                onChange={(val) =>
                                    handleFieldChange('category_id', val)
                                }
                                error={errors.category_id}
                            />
                            <FormSelect
                                label="Tipe Kelas"
                                placeholder="Pilih tipe kelas"
                                options={[
                                    {
                                        value: 'e-learning',
                                        label: 'E-Learning',
                                    },
                                    { value: 'webinar', label: 'Webinar' },
                                    {
                                        value: 'learning-package',
                                        label: 'Learning Package',
                                    },
                                ]}
                                value={formData.type}
                                onChange={(val) =>
                                    handleFieldChange('type', val)
                                }
                                error={errors.type}
                            />
                        </div>

                        <FormInput
                            label="Lokasi"
                            placeholder="Contoh: Jakarta, Online, dll"
                            value={formData.location}
                            onChange={(val) =>
                                handleFieldChange('location', val)
                            }
                            error={errors.location}
                        />

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <FormInput
                                label="URL Link"
                                placeholder="Contoh: https://zoom.us/j/123456"
                                value={formData.url_link}
                                onChange={(val) =>
                                    handleFieldChange('url_link', val)
                                }
                                error={errors.url_link}
                            />
                            <FormInput
                                label="Tanggal Pelaksanaan"
                                type="date"
                                value={formData.implementation_date}
                                onChange={(val) =>
                                    handleFieldChange(
                                        'implementation_date',
                                        val,
                                    )
                                }
                                error={errors.implementation_date}
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            <label className="relative inline-flex cursor-pointer items-center">
                                <input
                                    type="checkbox"
                                    checked={formData.is_priority}
                                    onChange={(e) =>
                                        onFormDataChange({
                                            ...formData,
                                            is_priority: e.target.checked,
                                        })
                                    }
                                    className="peer sr-only"
                                />
                                <div className="peer h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full" />
                            </label>
                            <span className="text-sm font-medium text-slate-700">
                                Prioritas
                            </span>
                        </div>
                    </div>
                </FormCard>

                {/* Mentors Card */}
                <MentorSelector
                    selectedMentors={selectedMentors}
                    onRemoveMentor={onRemoveMentor}
                    availableMentors={mentors}
                    onAddMentor={onAddMentor}
                    error={errors.mentors}
                />
            </div>

            {/* Right Column - Sidebar */}
            <div className="flex flex-col gap-6">
                {/* Thumbnail */}
                <SidebarCard title="Thumbnail Kelas">
                    <ImageUpload
                        value={thumbnailPreview}
                        onChange={onThumbnailChange}
                        error={errors.thumbnail}
                    />
                </SidebarCard>

                {/* Pricing */}
                <SidebarCard title="Harga">
                    <div className="flex flex-col gap-4">
                        <FormInput
                            label="Harga Normal (Rp)"
                            type="number"
                            value={formData.price}
                            onChange={(val) => handleFieldChange('price', val)}
                            error={errors.price}
                        />
                        <FormInput
                            label="Diskon (%)"
                            type="number"
                            value={formData.discount}
                            onChange={(val) =>
                                handleFieldChange('discount', val)
                            }
                            error={errors.discount}
                        />

                        <div className="flex items-center justify-between border-t border-[#f0f5f2] pt-4">
                            <span className="text-sm text-[#5e6a62]">
                                Harga Akhir
                            </span>
                            <div className="text-right">
                                {discountPercent > 0 && (
                                    <span className="mr-2 text-sm text-[#a0b3a9] line-through">
                                        {'Rp '}
                                        {normalPrice.toLocaleString('id-ID')}
                                    </span>
                                )}
                                <span className="text-xl font-bold text-primary">
                                    {'Rp '}
                                    {finalPrice.toLocaleString('id-ID')}
                                </span>
                            </div>
                        </div>
                    </div>
                </SidebarCard>

                {/* Status */}
                <SidebarCard title="Status Publikasi">
                    <FormSelect
                        label=""
                        placeholder="Pilih status"
                        options={[
                            { value: 'draft', label: 'Draft' },
                            { value: 'published', label: 'Published' },
                        ]}
                        value={formData.status}
                        onChange={(val) => handleFieldChange('status', val)}
                    />
                    <p className="mt-2 text-xs text-slate-500">
                        {formData.status === 'published'
                            ? 'Kelas sudah dipublikasikan dan dapat diakses oleh pengguna.'
                            : 'Kelas masih dalam mode draft dan belum bisa diakses oleh pengguna.'}
                    </p>
                </SidebarCard>
            </div>
        </div>
    );
}
