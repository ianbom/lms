import Icon from '@/Components/Icon';

interface ReviewSearchFilterProps {
    searchValue: string;
    onSearchChange: (value: string) => void;
    classFilter: string;
    onClassFilterChange: (value: string) => void;
    sortBy: string;
    onSortChange: (value: string) => void;
    classOptions: { value: string; label: string }[];
}

export default function ReviewSearchFilter({
    searchValue,
    onSearchChange,
    classFilter,
    onClassFilterChange,
    sortBy,
    onSortChange,
    classOptions,
}: ReviewSearchFilterProps) {
    return (
        <div className="flex flex-col items-center justify-between gap-4 pt-2 md:flex-row">
            {/* Search */}
            <div className="relative w-full md:w-96">
                <Icon
                    name="search"
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-500"
                />
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search by student, class, or keyword..."
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
            </div>

            {/* Filters */}
            <div className="flex w-full gap-3 md:w-auto">
                <select
                    value={sortBy}
                    onChange={(e) => onSortChange(e.target.value)}
                    className="cursor-pointer rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 transition-colors hover:bg-gray-50 focus:border-primary focus:outline-none"
                >
                    <option value="newest">Terbaru</option>
                    <option value="oldest">Terlama</option>
                    <option value="highest">Rating Tertinggi</option>
                    <option value="lowest">Rating Terendah</option>
                </select>
            </div>
        </div>
    );
}
