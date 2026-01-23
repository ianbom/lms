import Icon from '@/Components/Icon';
import FilterDropdown from './FilterDropdown';
import SearchInputWithIcon from './SearchInputWithIcon';

interface FilterToolbarProps {
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    selectedCategory?: string;
    onCategoryChange?: (value: string) => void;
    selectedStatus?: string;
    onStatusChange?: (value: string) => void;
    categories?: { value: string; label: string }[];
    onExportClick?: () => void;
}

export default function FilterToolbar({
    searchValue,
    onSearchChange,
    selectedCategory,
    onCategoryChange,
    selectedStatus,
    onStatusChange,
    categories = [],
    onExportClick,
}: FilterToolbarProps) {
    const statusOptions = [
        { value: '', label: 'Semua Status' },
        { value: 'published', label: 'Dipublikasi' },
        { value: 'draft', label: 'Draft' },
    ];

    const categoryOptions = [
        { value: '', label: 'Semua Kategori' },
        ...categories,
    ];

    return (
        <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-sm lg:flex-row lg:items-center">
            {/* Search */}
            <SearchInputWithIcon
                placeholder="Cari kelas, instruktur..."
                value={searchValue}
                onChange={onSearchChange}
                className="w-full lg:w-96"
            />

            {/* Filter Dropdowns */}
            <div className="flex w-full flex-wrap items-center gap-3 lg:w-auto">
                <FilterDropdown
                    icon="category"
                    label={
                        categoryOptions.find(
                            (c) => c.value === selectedCategory,
                        )?.label || 'Semua Kategori'
                    }
                    options={categoryOptions}
                    value={selectedCategory}
                    onChange={onCategoryChange}
                />
                <FilterDropdown
                    icon="filter_list"
                    label={
                        statusOptions.find((s) => s.value === selectedStatus)
                            ?.label || 'Semua Status'
                    }
                    options={statusOptions}
                    value={selectedStatus}
                    onChange={onStatusChange}
                />

                <div className="hidden h-6 w-px bg-[#e5e7eb] sm:block" />

                <button
                    onClick={onExportClick}
                    title="Ekspor Data"
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-[#dae7e0] bg-white text-[#5e6a62] transition-colors hover:text-primary"
                >
                    <Icon name="download" size={20} />
                </button>
            </div>
        </div>
    );
}
