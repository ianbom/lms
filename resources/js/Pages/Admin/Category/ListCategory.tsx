import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';

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

export default function ListCategory({ categories }: ListCategoryProps) {
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
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={4}
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
        </AdminLayout>
    );
}
