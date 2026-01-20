import Icon from '@/Components/Icon';
import FilterDropdown from './FilterDropdown';
import SearchInputWithIcon from './SearchInputWithIcon';

interface FilterToolbarProps {
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    onCategoryClick?: () => void;
    onStatusClick?: () => void;
    onExportClick?: () => void;
}

export default function FilterToolbar({
    searchValue,
    onSearchChange,
    onCategoryClick,
    onStatusClick,
    onExportClick,
}: FilterToolbarProps) {
    return (
        <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-sm lg:flex-row lg:items-center">
            {/* Search */}
            <SearchInputWithIcon
                placeholder="Search classes, instructors..."
                value={searchValue}
                onChange={onSearchChange}
                className="w-full lg:w-96"
            />

            {/* Filter Dropdowns */}
            <div className="flex w-full flex-wrap items-center gap-3 lg:w-auto">
                <FilterDropdown
                    icon="category"
                    label="All Categories"
                    onClick={onCategoryClick}
                />
                <FilterDropdown
                    icon="filter_list"
                    label="Status: All"
                    onClick={onStatusClick}
                />

                <div className="hidden h-6 w-px bg-[#e5e7eb] sm:block" />

                <button
                    onClick={onExportClick}
                    title="Export Data"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#dae7e0] bg-white text-[#5e6a62] transition-colors hover:text-primary"
                >
                    <Icon name="download" size={20} />
                </button>
            </div>
        </div>
    );
}
