import ClassTable from '@/Components/Admin/ClassTable';
import FilterToolbar from '@/Components/Admin/FilterToolbar';
import Pagination from '@/Components/Admin/Pagination';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { ClassItem } from '@/types/admin';
import { Head, Link } from '@inertiajs/react';
import { useMemo, useState } from 'react';

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

const ITEMS_PER_PAGE = 10;

export default function ClassManagement({ classes }: Props) {
    const [searchValue, setSearchValue] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // Map backend data to frontend ClassItem structure
    const classItems: ClassItem[] = classes.map((item) => ({
        id: item.id,
        title: item.title,
        category: item.category?.name || 'Tanpa Kategori',
        categoryId: item.category?.id?.toString() || '',
        price: item.price_final,
        originalPrice: item.discount > 0 ? item.price : undefined,
        modules: item.modules_count,
        status: item.status,
        thumbnail: item.thumbnail_url || '',
        isFree: item.price_final === 0,
    }));

    // Get unique categories for filter
    const categories = useMemo(() => {
        const uniqueCategories = new Map<string, string>();
        classes.forEach((item) => {
            if (item.category) {
                uniqueCategories.set(
                    item.category.id.toString(),
                    item.category.name,
                );
            }
        });
        return Array.from(uniqueCategories).map(([value, label]) => ({
            value,
            label,
        }));
    }, [classes]);

    // Filter and search logic
    const filteredClasses = useMemo(() => {
        return classItems.filter((item) => {
            // Search filter
            const searchLower = searchValue.toLowerCase();
            const matchesSearch =
                searchValue === '' ||
                item.title.toLowerCase().includes(searchLower) ||
                item.category.toLowerCase().includes(searchLower);

            // Category filter
            const matchesCategory =
                selectedCategory === '' ||
                item.categoryId === selectedCategory;

            // Status filter
            const matchesStatus =
                selectedStatus === '' || item.status === selectedStatus;

            return matchesSearch && matchesCategory && matchesStatus;
        });
    }, [classItems, searchValue, selectedCategory, selectedStatus]);

    // Pagination logic
    const totalPages = Math.ceil(filteredClasses.length / ITEMS_PER_PAGE);
    const paginatedClasses = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredClasses.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredClasses, currentPage]);

    // Reset to page 1 when filters change
    const handleSearchChange = (value: string) => {
        setSearchValue(value);
        setCurrentPage(1);
    };

    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value);
        setCurrentPage(1);
    };

    const handleStatusChange = (value: string) => {
        setSelectedStatus(value);
        setCurrentPage(1);
    };

    return (
        <AdminLayout breadcrumbs={[{ label: 'Kelas' }]}>
            <Head title="Manajemen Kelas" />

            {/* Page Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-[#101814]">
                        Manajemen Kelas
                    </h1>
                    <p className="mt-1 text-sm text-[#5e6a62]">
                        Kelola semua kelas dan konten pembelajaran Anda.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href={route('admin.classes.create')}
                        className="flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-[#00622e]"
                    >
                        <Icon name="add" size={20} />
                        <span className="truncate">Buat Kelas Baru</span>
                    </Link>
                </div>
            </div>

            {/* Filters Toolbar */}
            <FilterToolbar
                searchValue={searchValue}
                onSearchChange={handleSearchChange}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                selectedStatus={selectedStatus}
                onStatusChange={handleStatusChange}
                categories={categories}
            />

            {/* Summary Stats */}
            <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm">
                    <span className="text-sm text-[#5e6a62]">Total:</span>
                    <span className="text-sm font-bold text-[#101814]">
                        {classes.length} Kelas
                    </span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm">
                    <span className="text-sm text-[#5e6a62]">Dipublikasi:</span>
                    <span className="text-sm font-bold text-primary">
                        {
                            classes.filter((c) => c.status === 'published')
                                .length
                        }
                    </span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm">
                    <span className="text-sm text-[#5e6a62]">Draft:</span>
                    <span className="text-sm font-bold text-amber-600">
                        {classes.filter((c) => c.status === 'draft').length}
                    </span>
                </div>
                {filteredClasses.length !== classes.length && (
                    <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 shadow-sm">
                        <span className="text-sm text-blue-600">
                            Menampilkan {filteredClasses.length} dari{' '}
                            {classes.length} kelas
                        </span>
                    </div>
                )}
            </div>

            {/* Data Table */}
            <div className="flex flex-col overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm">
                <ClassTable classes={paginatedClasses} />

                {/* Pagination */}
                {filteredClasses.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        totalItems={filteredClasses.length}
                        itemsPerPage={ITEMS_PER_PAGE}
                        onPageChange={setCurrentPage}
                    />
                )}
            </div>

            {/* Footer Copyright */}
            <div className="mt-auto py-6 text-center">
                <p className="text-xs text-[#9aabb1]">
                    © {new Date().getFullYear()} EduManage System. Hak cipta
                    dilindungi.
                </p>
            </div>
        </AdminLayout>
    );
}
