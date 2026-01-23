import Icon from '@/Components/Icon';
import { FilterOption, SortOption } from '@/types/enrollment';

interface FilterBarProps {
    searchQuery: string;
    onSearchChange: (value: string) => void;
    filterBy: FilterOption;
    onFilterChange: (value: FilterOption) => void;
    sortBy: SortOption;
    onSortChange: (value: SortOption) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
    { value: 'newest', label: 'Terbaru' },
    { value: 'oldest', label: 'Terlama' },
    { value: 'progress-high', label: 'Progress Tertinggi' },
    { value: 'progress-low', label: 'Progress Terendah' },
    { value: 'alphabetical', label: 'A-Z' },
];

const FILTER_OPTIONS: { value: FilterOption; label: string }[] = [
    { value: 'all', label: 'Semua Kelas' },
    { value: 'active', label: 'Sedang Berjalan' },
    { value: 'completed', label: 'Selesai' },
];

export default function FilterBar({
    searchQuery,
    onSearchChange,
    filterBy,
    onFilterChange,
    sortBy,
    onSortChange,
}: FilterBarProps) {
    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <SearchInput value={searchQuery} onChange={onSearchChange} />

            {/* Filter and Sort */}
            <div className="flex flex-wrap items-center gap-3">
                <SelectDropdown
                    value={filterBy}
                    onChange={(value) => onFilterChange(value as FilterOption)}
                    options={FILTER_OPTIONS}
                    icon="expand_more"
                />
                <SelectDropdown
                    value={sortBy}
                    onChange={(value) => onSortChange(value as SortOption)}
                    options={SORT_OPTIONS}
                    icon="sort"
                />
            </div>
        </div>
    );
}

// Sub-components
function SearchInput({
    value,
    onChange,
}: {
    value: string;
    onChange: (value: string) => void;
}) {
    return (
        <div className="relative flex-1 sm:max-w-xs">
            <Icon
                name="search"
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
                type="text"
                placeholder="Cari kelas..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-md border border-slate-200 bg-white py-2 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
        </div>
    );
}

interface SelectDropdownProps {
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
    icon: string;
}

function SelectDropdown({
    value,
    onChange,
    options,
    icon,
}: SelectDropdownProps) {
    return (
        <div className="relative">
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="appearance-none rounded-md border border-slate-200 bg-white py-2 pl-3 pr-10 text-sm font-medium text-slate-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <Icon
                name={icon}
                size={20}
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
            />
        </div>
    );
}
