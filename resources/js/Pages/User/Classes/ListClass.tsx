import {
    ClassCard,
    EmptyState,
    FilterChips,
    FilterDropdown,
    Pagination,
    SearchInput,
    SortDropdown,
} from '@/Components/Class';
import UserLayout from '@/Layouts/UserLayout';
import {
    Category,
    ClassData,
    FilterTab,
    Mentor,
    SortOption,
} from '@/types/class';
import { Head } from '@inertiajs/react';
import { useMemo, useState } from 'react';

interface ListClassProps {
    classes: ClassData[];
    mentors: Mentor[];
    categories: Category[];
}

const ITEMS_PER_PAGE = 12;

export default function ListClass({
    classes = [],
    mentors = [],
    categories = [],
}: ListClassProps) {
    // State
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState<FilterTab>('all');
    const [selectedCategory, setSelectedCategory] = useState<number | null>(
        null,
    );
    const [selectedMentor, setSelectedMentor] = useState<number | null>(null);
    const [sortOption, setSortOption] = useState<SortOption>('newest');
    const [page, setPage] = useState(1);

    // Dropdown visibility states
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [showMentorDropdown, setShowMentorDropdown] = useState(false);
    const [showSortDropdown, setShowSortDropdown] = useState(false);

    // Filter and Sort Logic
    const filteredClasses = useMemo(() => {
        let result = classes.filter((c) => c.status === 'published');

        // Filter by Tab (Free/Paid)
        if (activeTab === 'free') {
            result = result.filter((c) => c.price_final === 0);
        } else if (activeTab === 'paid') {
            result = result.filter((c) => c.price_final > 0);
        }

        // Filter by Category
        if (selectedCategory !== null) {
            result = result.filter((c) => c.category_id === selectedCategory);
        }

        // Filter by Mentor
        if (selectedMentor !== null) {
            result = result.filter((c) =>
                c.mentors.some((m) => m.id === selectedMentor),
            );
        }

        // Filter by Search
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter(
                (c) =>
                    c.title.toLowerCase().includes(query) ||
                    (c.description &&
                        c.description.toLowerCase().includes(query)) ||
                    (c.category &&
                        c.category.name.toLowerCase().includes(query)) ||
                    c.mentors.some((m) => m.name.toLowerCase().includes(query)),
            );
        }

        // Sort
        switch (sortOption) {
            case 'title_asc':
                result.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'title_desc':
                result.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'price_asc':
                result.sort((a, b) => a.price_final - b.price_final);
                break;
            case 'price_desc':
                result.sort((a, b) => b.price_final - a.price_final);
                break;
            case 'newest':
                result.sort((a, b) => b.id - a.id);
                break;
            case 'oldest':
                result.sort((a, b) => a.id - b.id);
                break;
        }

        return result;
    }, [
        classes,
        activeTab,
        selectedCategory,
        selectedMentor,
        searchQuery,
        sortOption,
    ]);

    // Pagination Logic
    const totalPages = Math.ceil(filteredClasses.length / ITEMS_PER_PAGE);
    const paginatedClasses = useMemo(() => {
        const start = (page - 1) * ITEMS_PER_PAGE;
        return filteredClasses.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredClasses, page]);

    // Handlers
    const handleReset = () => {
        setSearchQuery('');
        setActiveTab('all');
        setSelectedCategory(null);
        setSelectedMentor(null);
        setSortOption('newest');
        setPage(1);
    };

    const closeAllDropdowns = () => {
        setShowCategoryDropdown(false);
        setShowMentorDropdown(false);
        setShowSortDropdown(false);
    };

    const handleSearchChange = (value: string) => {
        setSearchQuery(value);
        setPage(1);
    };

    const handleTabChange = (tab: FilterTab) => {
        setActiveTab(tab);
        setPage(1);
    };

    const handleCategoryChange = (value: number | null) => {
        setSelectedCategory(value);
        setShowCategoryDropdown(false);
        setPage(1);
    };

    const handleMentorChange = (value: number | null) => {
        setSelectedMentor(value);
        setShowMentorDropdown(false);
        setPage(1);
    };

    const handleSortChange = (value: SortOption) => {
        setSortOption(value);
        setShowSortDropdown(false);
    };

    const hasActiveFilters =
        searchQuery ||
        selectedCategory ||
        selectedMentor ||
        activeTab !== 'all';

    return (
        <UserLayout>
            <Head title="Eksplorasi Kelas" />

            {/* Click outside handler for dropdowns */}
            {(showCategoryDropdown ||
                showMentorDropdown ||
                showSortDropdown) && (
                <div
                    className="fixed inset-0 z-30"
                    onClick={closeAllDropdowns}
                />
            )}

            <div className="space-y-8 ">
                {/* Hero Section */}
                <div className="space-y-2 text-center sm:space-y-4 sm:text-left">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                        Eksplorasi Modul Pembelajaran
                    </h1>
                    <p className="mx-auto max-w-2xl text-sm text-slate-500 sm:mx-0 sm:text-base md:text-lg">
                        Tingkatkan keahlian Anda dengan kurikulum terstruktur
                        dari mentor berpengalaman.
                    </p>
                </div>

                {/* Toolbar Section */}
                <div className="flex flex-col gap-4">
                    {/* Top Row: Search & Filters */}
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <SearchInput
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />

                        {/* Filter Group */}
                        <div className="flex flex-wrap items-center gap-3">
                            <FilterChips
                                activeTab={activeTab}
                                onTabChange={handleTabChange}
                            />

                            <div className="hidden h-8 w-px bg-slate-200 sm:block" />

                            {/* Dropdowns */}
                            <div className="flex items-center gap-2">
                                <FilterDropdown
                                    label="Kategori"
                                    options={categories.map((c) => ({
                                        id: c.id,
                                        name: c.name,
                                    }))}
                                    selectedValue={selectedCategory}
                                    onSelect={handleCategoryChange}
                                    isOpen={showCategoryDropdown}
                                    onToggle={() => {
                                        setShowCategoryDropdown(
                                            !showCategoryDropdown,
                                        );
                                        setShowMentorDropdown(false);
                                        setShowSortDropdown(false);
                                    }}
                                    allLabel="Semua Kategori"
                                />

                                <FilterDropdown
                                    label="Mentor"
                                    options={mentors.map((m) => ({
                                        id: m.id,
                                        name: m.name,
                                    }))}
                                    selectedValue={selectedMentor}
                                    onSelect={handleMentorChange}
                                    isOpen={showMentorDropdown}
                                    onToggle={() => {
                                        setShowMentorDropdown(
                                            !showMentorDropdown,
                                        );
                                        setShowCategoryDropdown(false);
                                        setShowSortDropdown(false);
                                    }}
                                    allLabel="Semua Mentor"
                                />

                                {/* Reset Button */}
                                {hasActiveFilters && (
                                    <button
                                        onClick={handleReset}
                                        className="ml-2 text-sm font-medium text-red-600 hover:text-red-700"
                                    >
                                        Reset
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Results & Sort */}
                    <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                        <p className="text-sm text-slate-500">
                            Menampilkan{' '}
                            <span className="font-semibold text-slate-900">
                                {paginatedClasses.length}
                            </span>{' '}
                            dari{' '}
                            <span className="font-semibold text-slate-900">
                                {filteredClasses.length}
                            </span>{' '}
                            kelas
                        </p>

                        <div className="flex items-center gap-3">
                            <SortDropdown
                                value={sortOption}
                                onChange={handleSortChange}
                                isOpen={showSortDropdown}
                                onToggle={() => {
                                    setShowSortDropdown(!showSortDropdown);
                                    setShowCategoryDropdown(false);
                                    setShowMentorDropdown(false);
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                {paginatedClasses.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {paginatedClasses.map((item) => (
                            <ClassCard key={item.id} item={item} />
                        ))}
                    </div>
                ) : (
                    <EmptyState onReset={handleReset} />
                )}

                {/* Pagination */}
                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={setPage}
                />
            </div>
        </UserLayout>
    );
}
