import Icon from '@/Components/Icon';
import { router } from '@inertiajs/react';
import { debounce } from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';

interface FilterOption {
    value: string | null;
    label: string;
}

interface SortOption {
    value: string;
    direction: 'asc' | 'desc';
    label: string;
}

interface TableToolbarProps {
    filters: Record<string, string | undefined>;
    routeName: string;
    searchPlaceholder?: string;
    filterOptions?: FilterOption[];
    filterKey?: string;
    sortOptions?: SortOption[];
    showSort?: boolean;
    showFilter?: boolean;
}

const DEFAULT_SORT_OPTIONS: SortOption[] = [
    { value: 'created_at', direction: 'desc', label: 'Terbaru' },
    { value: 'created_at', direction: 'asc', label: 'Terlama' },
    { value: 'amount', direction: 'desc', label: 'Harga Tertinggi' },
    { value: 'amount', direction: 'asc', label: 'Harga Terendah' },
    { value: 'title', direction: 'asc', label: 'A-Z' },
    { value: 'title', direction: 'desc', label: 'Z-A' },
];

export default function TableToolbar({
    filters,
    routeName,
    searchPlaceholder = 'Cari...',
    filterOptions = [],
    filterKey = 'status',
    sortOptions = DEFAULT_SORT_OPTIONS,
    showSort = true,
    showFilter = true,
}: TableToolbarProps) {
    const [search, setSearch] = useState(filters.search || '');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const filterRef = useRef<HTMLDivElement>(null);
    const sortRef = useRef<HTMLDivElement>(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                filterRef.current &&
                !filterRef.current.contains(event.target as Node)
            ) {
                setIsFilterOpen(false);
            }
            if (
                sortRef.current &&
                !sortRef.current.contains(event.target as Node)
            ) {
                setIsSortOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = useCallback(
        debounce((query: string) => {
            router.get(
                route(routeName),
                { ...filters, search: query },
                { preserveState: true, replace: true },
            );
        }, 300),
        [filters, routeName],
    );

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
    };

    const handleFilter = (value: string | null) => {
        const newFilters = { ...filters, [filterKey]: value || undefined };
        router.get(
            route(routeName),
            newFilters as unknown as Record<string, string>,
            { preserveState: true, replace: true },
        );
        setIsFilterOpen(false);
    };

    const handleSort = (sortOption: SortOption) => {
        router.get(
            route(routeName),
            {
                ...filters,
                sort: sortOption.value,
                direction: sortOption.direction,
            },
            { preserveState: true, replace: true },
        );
        setIsSortOpen(false);
    };

    // Get current filter label
    const currentFilterLabel =
        filterOptions.find(
            (opt) =>
                opt.value === filters[filterKey] ||
                (!filters[filterKey] && opt.value === null),
        )?.label || 'Filter';

    // Get current sort label
    const currentSortLabel =
        sortOptions.find(
            (opt) =>
                opt.value === filters.sort &&
                opt.direction === filters.direction,
        )?.label || 'Urutkan';

    const isFilterActive = filters[filterKey] !== undefined;
    const isSortActive =
        filters.sort !== undefined && filters.direction !== undefined;

    return (
        <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Filter & Sort Dropdowns */}
            <div className="flex gap-2">
                {/* Filter Dropdown */}
                {showFilter && filterOptions.length > 0 && (
                    <div ref={filterRef} className="relative">
                        <button
                            onClick={() => {
                                setIsFilterOpen(!isFilterOpen);
                                setIsSortOpen(false);
                            }}
                            className={`flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                                isFilterActive
                                    ? 'border-primary bg-primary/5 text-primary'
                                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                            }`}
                        >
                            <Icon name="filter_list" size={20} />
                            <span>{currentFilterLabel}</span>
                            <Icon
                                name="expand_more"
                                size={18}
                                className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {isFilterOpen && (
                            <div className="absolute left-0 top-full z-10 mt-1 min-w-[160px] overflow-hidden rounded-md border border-slate-200 bg-white py-1 shadow-lg">
                                {filterOptions.map((option) => (
                                    <button
                                        key={option.value ?? 'all'}
                                        onClick={() =>
                                            handleFilter(option.value)
                                        }
                                        className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm transition-colors ${
                                            filters[filterKey] ===
                                                option.value ||
                                            (!filters[filterKey] &&
                                                option.value === null)
                                                ? 'bg-primary/10 font-medium text-primary'
                                                : 'text-slate-700 hover:bg-slate-50'
                                        }`}
                                    >
                                        {(filters[filterKey] === option.value ||
                                            (!filters[filterKey] &&
                                                option.value === null)) && (
                                            <Icon name="check" size={16} />
                                        )}
                                        <span
                                            className={
                                                filters[filterKey] ===
                                                    option.value ||
                                                (!filters[filterKey] &&
                                                    option.value === null)
                                                    ? ''
                                                    : 'pl-6'
                                            }
                                        >
                                            {option.label}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Sort Dropdown */}
                {showSort && (
                    <div ref={sortRef} className="relative">
                        <button
                            onClick={() => {
                                setIsSortOpen(!isSortOpen);
                                setIsFilterOpen(false);
                            }}
                            className={`flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                                isSortActive
                                    ? 'border-primary bg-primary/5 text-primary'
                                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                            }`}
                        >
                            <Icon name="sort" size={20} />
                            <span>{currentSortLabel}</span>
                            <Icon
                                name="expand_more"
                                size={18}
                                className={`transition-transform ${isSortOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {isSortOpen && (
                            <div className="absolute left-0 top-full z-10 mt-1 min-w-[180px] overflow-hidden rounded-md border border-slate-200 bg-white py-1 shadow-lg">
                                {sortOptions.map((option, index) => (
                                    <button
                                        key={`${option.value}-${option.direction}`}
                                        onClick={() => handleSort(option)}
                                        className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm transition-colors ${
                                            filters.sort === option.value &&
                                            filters.direction ===
                                                option.direction
                                                ? 'bg-primary/10 font-medium text-primary'
                                                : 'text-slate-700 hover:bg-slate-50'
                                        }`}
                                    >
                                        {filters.sort === option.value &&
                                            filters.direction ===
                                                option.direction && (
                                                <Icon name="check" size={16} />
                                            )}
                                        <span
                                            className={
                                                filters.sort === option.value &&
                                                filters.direction ===
                                                    option.direction
                                                    ? ''
                                                    : 'pl-6'
                                            }
                                        >
                                            {option.label}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Search */}
            <div className="flex flex-1 items-center gap-3 lg:justify-end">
                <div className="relative w-full max-w-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <Icon name="search" size={20} />
                    </div>
                    <input
                        className="block w-full rounded-md border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-primary focus:bg-white focus:ring-primary"
                        placeholder={searchPlaceholder}
                        type="text"
                        value={search}
                        onChange={onSearchChange}
                    />
                </div>
            </div>
        </div>
    );
}
