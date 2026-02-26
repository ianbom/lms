import ImageCropper from '@/Components/Admin/ImageCropper';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router } from '@inertiajs/react';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';

interface Testimony {
    id: number;
    content: string;
    rating: number;
    person_name: string;
    person_position: string;
    person_photo_url: string | null;
    created_at: string;
    updated_at: string;
}

interface ListTestimonyProps {
    testimonies: Testimony[];
}

interface ModalProps {
    isOpen: boolean;
    testimony: Testimony | null;
    onClose: () => void;
}

interface FormErrors {
    content?: string;
    rating?: string;
    person_name?: string;
    person_position?: string;
    person_photo_url?: string;
}

function TestimonyModal({ isOpen, testimony, onClose }: ModalProps) {
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(5);
    const [personName, setPersonName] = useState('');
    const [personPosition, setPersonPosition] = useState('');
    const [photoFile, setPhotoFile] = useState<File | null>(null);
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Crop state
    const [cropImage, setCropImage] = useState<string | null>(null);
    const [showCropper, setShowCropper] = useState(false);

    const isEditing = testimony !== null;

    useEffect(() => {
        if (isOpen) {
            if (testimony) {
                setContent(testimony.content);
                setRating(testimony.rating);
                setPersonName(testimony.person_name);
                setPersonPosition(testimony.person_position);
                setPhotoPreview(testimony.person_photo_url);
            } else {
                setContent('');
                setRating(5);
                setPersonName('');
                setPersonPosition('');
                setPhotoPreview(null);
            }
            setPhotoFile(null);
            setCropImage(null);
            setShowCropper(false);
            setErrors({});
        }
    }, [isOpen, testimony]);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            // Validate file type and size on client side
            const validTypes = [
                'image/jpeg',
                'image/png',
                'image/webp',
                'image/jpg',
            ];
            if (!validTypes.includes(file.type)) {
                setErrors((prev) => ({
                    ...prev,
                    person_photo_url: 'Format file harus JPG, PNG, atau WebP.',
                }));
                return;
            }
            if (file.size > 2 * 1024 * 1024) {
                setErrors((prev) => ({
                    ...prev,
                    person_photo_url: 'Ukuran file maksimal 2MB.',
                }));
                return;
            }

            // Clear photo error if valid
            setErrors((prev) => {
                const next = { ...prev };
                delete next.person_photo_url;
                return next;
            });

            const reader = new FileReader();
            reader.onload = (ev) => {
                setCropImage(ev.target?.result as string);
                setShowCropper(true);
            };
            reader.readAsDataURL(file);
        }
        // Reset the input so the same file can be re-selected
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleCropComplete = (croppedBlob: Blob) => {
        const croppedFile = new File([croppedBlob], 'testimony-photo.jpg', {
            type: 'image/jpeg',
        });
        setPhotoFile(croppedFile);
        setPhotoPreview(URL.createObjectURL(croppedBlob));
        setShowCropper(false);
        setCropImage(null);
    };

    const handleCropCancel = () => {
        setShowCropper(false);
        setCropImage(null);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Client-side validation
        const newErrors: FormErrors = {};
        if (!personName.trim()) {
            newErrors.person_name = 'Nama wajib diisi.';
        }
        if (!personPosition.trim()) {
            newErrors.person_position = 'Jabatan wajib diisi.';
        }
        if (!content.trim()) {
            newErrors.content = 'Konten testimoni wajib diisi.';
        } else if (content.trim().length < 10) {
            newErrors.content = 'Konten testimoni minimal 10 karakter.';
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setProcessing(true);

        const formData = new FormData();
        formData.append('content', content);
        formData.append('rating', String(rating));
        formData.append('person_name', personName);
        formData.append('person_position', personPosition);
        if (photoFile) {
            formData.append('person_photo_url', photoFile);
        }

        if (isEditing) {
            formData.append('_method', 'PUT');
            router.post(
                route('admin.testimonies.update', testimony.id),
                formData,
                {
                    preserveScroll: true,
                    onSuccess: () => onClose(),
                    onError: (err) => setErrors(err as FormErrors),
                    onFinish: () => setProcessing(false),
                },
            );
        } else {
            router.post(route('admin.testimonies.store'), formData, {
                preserveScroll: true,
                onSuccess: () => onClose(),
                onError: (err) => setErrors(err as FormErrors),
                onFinish: () => setProcessing(false),
            });
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4">
                <div className="w-full max-w-lg rounded-xl bg-white shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                            {isEditing ? 'Edit Testimoni' : 'Tambah Testimoni'}
                        </h3>
                        <button
                            onClick={onClose}
                            className="rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                        >
                            <Icon name="close" size={20} />
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6">
                        <div className="space-y-4">
                            {/* Person Photo */}
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                    Foto
                                </label>
                                <div className="flex items-center gap-4">
                                    {photoPreview ? (
                                        <img
                                            src={photoPreview}
                                            alt="Preview"
                                            className="h-16 w-16 rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                                            <Icon name="person" size={28} />
                                        </div>
                                    )}
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                fileInputRef.current?.click()
                                            }
                                            className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50"
                                        >
                                            Pilih Foto
                                        </button>
                                        <p className="mt-1 text-xs text-slate-400">
                                            JPG, PNG, WebP. Maks 2MB.
                                        </p>
                                    </div>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/jpeg,image/png,image/webp"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                </div>
                                {errors.person_photo_url && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.person_photo_url}
                                    </p>
                                )}
                            </div>

                            {/* Person Name */}
                            <div>
                                <label
                                    htmlFor="person_name"
                                    className="mb-1.5 block text-sm font-medium text-gray-700"
                                >
                                    Nama <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="person_name"
                                    type="text"
                                    value={personName}
                                    onChange={(e) =>
                                        setPersonName(e.target.value)
                                    }
                                    className={`w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                                        errors.person_name
                                            ? 'border-red-300 focus:border-red-500'
                                            : 'border-slate-300 focus:border-primary'
                                    }`}
                                    placeholder="Masukkan nama orang"
                                />
                                {errors.person_name && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.person_name}
                                    </p>
                                )}
                            </div>

                            {/* Person Position */}
                            <div>
                                <label
                                    htmlFor="person_position"
                                    className="mb-1.5 block text-sm font-medium text-gray-700"
                                >
                                    Jabatan{' '}
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="person_position"
                                    type="text"
                                    value={personPosition}
                                    onChange={(e) =>
                                        setPersonPosition(e.target.value)
                                    }
                                    className={`w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                                        errors.person_position
                                            ? 'border-red-300 focus:border-red-500'
                                            : 'border-slate-300 focus:border-primary'
                                    }`}
                                    placeholder="Masukkan jabatan"
                                />
                                {errors.person_position && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.person_position}
                                    </p>
                                )}
                            </div>

                            {/* Content Field */}
                            <div>
                                <label
                                    htmlFor="content"
                                    className="mb-1.5 block text-sm font-medium text-gray-700"
                                >
                                    Konten Testimoni{' '}
                                    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    rows={4}
                                    className={`w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                                        errors.content
                                            ? 'border-red-300 focus:border-red-500'
                                            : 'border-slate-300 focus:border-primary'
                                    }`}
                                    placeholder="Masukkan konten testimoni..."
                                />
                                {errors.content && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.content}
                                    </p>
                                )}
                            </div>

                            {/* Rating Field */}
                            <div>
                                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                    Rating{' '}
                                    <span className="text-red-500">*</span>
                                </label>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setRating(star)}
                                            className="transition-transform hover:scale-110"
                                        >
                                            <Icon
                                                name="star"
                                                size={28}
                                                className={
                                                    star <= rating
                                                        ? 'fill-yellow-400 text-yellow-400'
                                                        : 'text-slate-300'
                                                }
                                            />
                                        </button>
                                    ))}
                                    <span className="ml-2 text-sm text-slate-500">
                                        {rating}/5
                                    </span>
                                </div>
                                {errors.rating && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.rating}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={onClose}
                                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                            >
                                Batal
                            </button>
                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark disabled:opacity-50"
                            >
                                {processing && (
                                    <Icon
                                        name="progress_activity"
                                        size={16}
                                        className="animate-spin"
                                    />
                                )}
                                {isEditing ? 'Simpan' : 'Tambah'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Image Cropper Modal */}
            {showCropper && cropImage && (
                <ImageCropper
                    image={cropImage}
                    aspect={1}
                    onCropComplete={handleCropComplete}
                    onCancel={handleCropCancel}
                />
            )}
        </>
    );
}

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <Icon
                    key={star}
                    name="star"
                    size={16}
                    className={
                        star <= rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-slate-300'
                    }
                />
            ))}
        </div>
    );
}

export default function ListTestimony({ testimonies }: ListTestimonyProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTestimony, setSelectedTestimony] =
        useState<Testimony | null>(null);

    const openCreateModal = () => {
        setSelectedTestimony(null);
        setModalOpen(true);
    };

    const openEditModal = (testimony: Testimony) => {
        setSelectedTestimony(testimony);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedTestimony(null);
    };

    const handleDelete = (testimony: Testimony) => {
        if (confirm('Yakin ingin menghapus testimoni ini?')) {
            router.delete(route('admin.testimonies.delete', testimony.id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminLayout
            breadcrumbs={[
                { label: 'Testimoni', href: route('admin.testimonies') },
            ]}
        >
            <Head title="Testimoni" />

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            Testimoni
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Kelola testimoni yang ditampilkan di halaman utama.
                        </p>
                    </div>
                    <button
                        onClick={openCreateModal}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        <Icon name="add" size={20} />
                        Tambah Testimoni
                    </button>
                </div>

                <div className="overflow-hidden border border-slate-200 bg-white shadow-sm sm:rounded-md">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-[#F8FAFC]">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-[#64748B]"
                                    >
                                        Orang
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-[#64748B]"
                                    >
                                        Konten
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-[#64748B]"
                                    >
                                        Rating
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-[#64748B]"
                                    >
                                        Tanggal Dibuat
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider text-[#64748B]"
                                    >
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 bg-white">
                                {testimonies.length > 0 ? (
                                    testimonies.map((testimony) => (
                                        <tr
                                            key={testimony.id}
                                            className="transition-colors hover:bg-slate-50"
                                        >
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    {testimony.person_photo_url ? (
                                                        <img
                                                            src={
                                                                testimony.person_photo_url
                                                            }
                                                            alt={
                                                                testimony.person_name
                                                            }
                                                            className="h-10 w-10 rounded-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                            <span className="text-sm font-bold">
                                                                {testimony.person_name
                                                                    .charAt(0)
                                                                    .toUpperCase()}
                                                            </span>
                                                        </div>
                                                    )}
                                                    <div>
                                                        <div className="text-sm font-semibold text-[#1E293B]">
                                                            {
                                                                testimony.person_name
                                                            }
                                                        </div>
                                                        <div className="text-xs text-[#64748B]">
                                                            {
                                                                testimony.person_position
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="max-w-xs text-sm text-[#1E293B]">
                                                    <p className="line-clamp-2">
                                                        {testimony.content}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <StarRating
                                                    rating={testimony.rating}
                                                />
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-[#64748B]">
                                                {new Date(
                                                    testimony.created_at,
                                                ).toLocaleDateString('id-ID', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                })}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        onClick={() =>
                                                            openEditModal(
                                                                testimony,
                                                            )
                                                        }
                                                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-primary hover:text-primary"
                                                        title="Edit"
                                                    >
                                                        <Icon
                                                            name="edit"
                                                            size={14}
                                                        />
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                testimony,
                                                            )
                                                        }
                                                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-red-500 hover:text-red-500"
                                                        title="Hapus"
                                                    >
                                                        <Icon
                                                            name="delete"
                                                            size={14}
                                                        />
                                                        Hapus
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={5}
                                            className="px-6 py-12 text-center"
                                        >
                                            <div className="flex flex-col items-center justify-center text-slate-500">
                                                <div className="mb-2 rounded-full bg-slate-100 p-3">
                                                    <Icon
                                                        name="format_quote"
                                                        size={24}
                                                        className="text-slate-400"
                                                    />
                                                </div>
                                                <p className="text-base font-medium text-slate-900">
                                                    Belum ada testimoni
                                                </p>
                                                <p className="mt-1 text-sm text-slate-500">
                                                    Mulai dengan menambahkan
                                                    testimoni baru.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Create/Edit Modal */}
            <TestimonyModal
                isOpen={modalOpen}
                testimony={selectedTestimony}
                onClose={closeModal}
            />
        </AdminLayout>
    );
}
