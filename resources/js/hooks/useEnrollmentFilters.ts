import {
    Enrollment,
    EnrollmentStats,
    FilterOption,
    SortOption,
} from '@/types/enrollment';
import { useMemo, useState } from 'react';

interface UseEnrollmentFiltersReturn {
    // State
    sortBy: SortOption;
    filterBy: FilterOption;
    searchQuery: string;

    // Setters
    setSortBy: (value: SortOption) => void;
    setFilterBy: (value: FilterOption) => void;
    setSearchQuery: (value: string) => void;

    // Computed
    filteredEnrollments: Enrollment[];
    stats: EnrollmentStats;
}

export function useEnrollmentFilters(
    enrollments: Enrollment[],
): UseEnrollmentFiltersReturn {
    const [sortBy, setSortBy] = useState<SortOption>('newest');
    const [filterBy, setFilterBy] = useState<FilterOption>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredEnrollments = useMemo(() => {
        let result = [...enrollments];

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter((enrollment) =>
                enrollment.class.title.toLowerCase().includes(query),
            );
        }

        // Filter by status
        if (filterBy !== 'all') {
            result = result.filter(
                (enrollment) => enrollment.status === filterBy,
            );
        }

        // Sort
        result.sort((a, b) => {
            switch (sortBy) {
                case 'newest':
                    return (
                        new Date(b.created_at).getTime() -
                        new Date(a.created_at).getTime()
                    );
                case 'oldest':
                    return (
                        new Date(a.created_at).getTime() -
                        new Date(b.created_at).getTime()
                    );
                case 'progress-high':
                    return b.progress - a.progress;
                case 'progress-low':
                    return a.progress - b.progress;
                case 'alphabetical':
                    return a.class.title.localeCompare(b.class.title);
                default:
                    return 0;
            }
        });

        return result;
    }, [enrollments, sortBy, filterBy, searchQuery]);

    const stats = useMemo<EnrollmentStats>(() => {
        return {
            total: enrollments.length,
            active: enrollments.filter((e) => e.status === 'active').length,
            completed: enrollments.filter((e) => e.status === 'completed')
                .length,
        };
    }, [enrollments]);

    return {
        sortBy,
        filterBy,
        searchQuery,
        setSortBy,
        setFilterBy,
        setSearchQuery,
        filteredEnrollments,
        stats,
    };
}
