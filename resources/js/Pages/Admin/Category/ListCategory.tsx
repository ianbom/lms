import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { FormEvent, useEffect, useState } from 'react';

interface Category {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    created_at: string;
    updated_at: string;
}

interface ListCategoryProps {
    categories: Category[];
}

interface EditModalProps {
    isOpen: boolean;
    category: Category | null;
    onClose: () => void;
}

function EditCategoryModal({ isOpen, category, onClose }: EditModalProps) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState<{
        name?: string;
        description?: string;
    }>({});

    useEffect(() => {
        if (category) {
            setName(category.name);
            setDescription(category.description || '');
            setErrors({});
        }
    }, [category]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!category) return;

        setProcessing(true);
        router.put(
            route('admin.categories.update', category.id),
            { name, description },
            {
                preserveScroll: true,
                onSuccess: () => {
                    onClose();
                },
                onError: (errors) => {
                    setErrors(
                        errors as { name?: string; description?: string },
                    );
                },
                onFinish: () => {
                    setProcessing(false);
                },
            },
        );
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4">
            <div className="w-full max-w-md rounded-xl bg-white shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Edit Kategori
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
                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-1.5 block text-sm font-medium text-gray-700"
                            >
                                Nama Kategori{' '}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                                    errors.name
                                        ? 'border-red-300 focus:border-red-500'
                                        : 'border-slate-300 focus:border-primary'
                                }`}
                                placeholder="Masukkan nama kategori"
                            />
                            {errors.name && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* Description Field */}
                        <div>
                            <label
                                htmlFor="description"
                                className="mb-1.5 block text-sm font-medium text-gray-700"
                            >
                                Deskripsi
                            </label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={3}
                                className={`w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                                    errors.description
                                        ? 'border-red-300 focus:border-red-500'
                                        : 'border-slate-300 focus:border-primary'
                                }`}
                                placeholder="Masukkan deskripsi kategori (opsional)"
                            />
                            {errors.description && (
                                <p className="mt-1 text-xs text-red-500">
                                    {errors.description}
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
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default function ListCategory({ categories }: ListCategoryProps) {
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(
        null,
    );
    const { flash } = usePage().props as {
        flash?: { success?: string; error?: string };
    };

    const openEditModal = (category: Category) => {
        setSelectedCategory(category);
        setEditModalOpen(true);
    };

    const closeEditModal = () => {
        setEditModalOpen(false);
        setSelectedCategory(null);
    };

    const handleDelete = (category: Category) => {
        if (confirm(`Yakin ingin menghapus kategori "${category.name}"?`)) {
            router.delete(route('admin.categories.delete', category.id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminLayout
            breadcrumbs={[
                { label: 'Kategori', href: route('admin.categories') },
            ]}
        >
            <Head title="Kategori" />

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            Kategori
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Kelola kategori kelas Anda di sini.
                        </p>
                    </div>
                    <Link
                        href={route('admin.categories.create')}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        <Icon name="add" size={20} />
                        Buat Kategori
                    </Link>
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
                                        Nama
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-[#64748B]"
                                    >
                                        Slug
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-[#64748B]"
                                    >
                                        Deskripsi
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
                                {categories.length > 0 ? (
                                    categories.map((category) => (
                                        <tr
                                            key={category.id}
                                            className="transition-colors hover:bg-slate-50"
                                        >
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <div className="flex items-center">
                                                    <div className="bg-primary-50 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md text-primary">
                                                        <span className="text-lg font-bold">
                                                            {category.name
                                                                .charAt(0)
                                                                .toUpperCase()}
                                                        </span>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-bold text-[#1E293B]">
                                                            {category.name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <code className="rounded border border-slate-200 bg-slate-100 px-2 py-1 font-mono text-xs text-slate-600">
                                                    {category.slug}
                                                </code>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="max-w-xs overflow-hidden text-ellipsis text-sm text-[#64748B]">
                                                    {category.description ||
                                                        '-'}
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-[#64748B]">
                                                {new Date(
                                                    category.created_at,
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
                                                                category,
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
                                                                category,
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
                                                        name="category"
                                                        size={24}
                                                        className="text-slate-400"
                                                    />
                                                </div>
                                                <p className="text-base font-medium text-slate-900">
                                                    Belum ada kategori
                                                </p>
                                                <p className="mt-1 text-sm text-slate-500">
                                                    Mulai dengan menambahkan
                                                    kategori baru.
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

            {/* Edit Modal */}
            <EditCategoryModal
                isOpen={editModalOpen}
                category={selectedCategory}
                onClose={closeEditModal}
            />
        </AdminLayout>
    );
}
