import { FilterTab } from '@/types/module';
import FilterDropdown from './FilterDropdown';
import FilterTabs from './FilterTabs';

interface FilterToolbarProps {
    activeTab: FilterTab;
    onTabChange: (tab: FilterTab) => void;
    onCategoryClick?: () => void;
    onSortClick?: () => void;
}

export default function FilterToolbar({
    activeTab,
    onTabChange,
    onCategoryClick,
    onSortClick,
}: FilterToolbarProps) {
    return (
        <div className="sticky top-20 z-40 mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm transition-shadow hover:shadow-md">
            {/* Tabs */}
            <FilterTabs activeTab={activeTab} onTabChange={onTabChange} />

            {/* Divider */}
            <div className="hidden h-6 w-px bg-gray-200 sm:block" />

            {/* Dropdowns */}
            <div className="flex flex-1 items-center gap-3 overflow-x-auto pb-1 sm:flex-none sm:pb-0">
                <FilterDropdown
                    icon="category"
                    label="Kategori"
                    onClick={onCategoryClick}
                />
                <FilterDropdown
                    icon="sort"
                    label="Urutkan"
                    onClick={onSortClick}
                />
            </div>
        </div>
    );
}
