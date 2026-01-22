import {
    CourseGrid,
    EmptyState,
    FilterBar,
    StatsCards,
} from '@/Components/User/Dashboard/MyClass';
import { useEnrollmentFilters } from '@/hooks/useEnrollmentFilters';
import UserDashboardLayout from '@/Layouts/UserDashboardLayout';
import { Enrollment } from '@/types/enrollment';
import { Head } from '@inertiajs/react';

interface Props {
    enrollments: Enrollment[];
}

function PageHeader() {
    return (
        <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Kelas Saya
            </h2>
            <p className="text-slate-500">
                Kelola dan lanjutkan kelas yang telah kamu ikuti.
            </p>
        </div>
    );
}


export default function MyClass({ enrollments = [] }: Props) {
    const {
        sortBy,
        filterBy,
        searchQuery,
        setSortBy,
        setFilterBy,
        setSearchQuery,
        filteredEnrollments,
        stats,
    } = useEnrollmentFilters(enrollments);

    const hasFilters = searchQuery.trim() !== '' || filterBy !== 'all';

    return (
        <UserDashboardLayout>
            <Head title="Kelas Saya" />

            {/* Header */}
            <PageHeader />

            {/* Stats */}
            <StatsCards stats={stats} />

            {/* Filters */}
            <FilterBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                filterBy={filterBy}
                onFilterChange={setFilterBy}
                sortBy={sortBy}
                onSortChange={setSortBy}
            />

            {/* Content */}
            {filteredEnrollments.length > 0 ? (
                <CourseGrid enrollments={filteredEnrollments} />
            ) : (
                <EmptyState hasFilters={hasFilters} />
            )}
        </UserDashboardLayout>
    );
}

