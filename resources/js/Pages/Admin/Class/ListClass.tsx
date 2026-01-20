import ClassTable from '@/Components/Admin/ClassTable';
import FilterToolbar from '@/Components/Admin/FilterToolbar';
import Pagination from '@/Components/Admin/Pagination';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { ClassItem } from '@/types/admin';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

// Define the structure of the data coming from the backend
interface BackendClass {
    id: number;
    title: string;
    description: string;
    price: number;
    price_final: number;
    discount: number;
    thumbnail_url: string;
    status: 'published' | 'draft';
    modules_count: number;
    category: {
        id: number;
        name: string;
    } | null;
}

interface Props {
    classes: BackendClass[];
}

export default function ClassManagement({ classes }: Props) {
    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // Map backend data to frontend ClassItem structure
    const classItems: ClassItem[] = classes.map((item) => ({
        id: item.id,
        title: item.title,
        category: item.category?.name || 'Uncategorized',
        price: item.price_final,
        originalPrice: item.discount > 0 ? item.price : undefined,
        modules: item.modules_count,
        status: item.status,
        thumbnail: item.thumbnail_url || '',
        isFree: item.price_final === 0,
    }));



    return (
        <AdminLayout breadcrumbs={[{ label: 'Classes' }]}>
            <Head title="Class Management" />

            {/* Page Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-[#101814]">
                        Class Management
                    </h1>
                </div>
                <div className="flex items-center gap-3">
                    <button className="relative hidden h-10 w-10 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#5e6a62] transition-colors hover:bg-[#f0f5f2] md:flex">
                        <Icon name="notifications" size={20} />
                        <span className="absolute right-2.5 top-2 h-2 w-2 rounded-full border border-white bg-red-500" />
                    </button>
                    <Link
                        href={route('admin.classes.create')}
                        className="flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-[#00622e]"
                    >
                        <Icon name="add" size={20} />
                        <span className="truncate">Create New Class</span>
                    </Link>
                </div>
            </div>

            {/* Filters Toolbar */}
            <FilterToolbar
                searchValue={searchValue}
                onSearchChange={setSearchValue}
            />

            {/* Data Table */}
            <div className="flex flex-col overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm">
                <ClassTable
                    classes={classItems}
                />

                {/* Pagination */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={8}
                    totalItems={42}
                    itemsPerPage={5}
                    onPageChange={setCurrentPage}
                />
            </div>

            {/* Footer Copyright */}
            <div className="mt-auto py-6 text-center">
                <p className="text-xs text-[#9aabb1]">
                    © {new Date().getFullYear()} EduManage System. All rights
                    reserved.
                </p>
            </div>
        </AdminLayout>
    );
}
