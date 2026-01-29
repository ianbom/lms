import {
    CertificateGrid,
    EmptyState,
    FilterBar,
    StatsCards,
} from '@/Components/User/Dashboard/MyCertificate';
import { useCertificateFilters } from '@/hooks/useCertificateFilters';
import UserDashboardLayout from '@/Layouts/UserDashboardLayout';
import { Certificate } from '@/types/certificate';
import { Head } from '@inertiajs/react';

interface Props {
    certificates: Certificate[];
}

function PageHeader() {
    return (
        <div className="mt-6 flex flex-col gap-1 lg:mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Sertifikat Saya
            </h2>
            <p className="text-sm text-slate-500 sm:text-base">
                Lihat dan unduh sertifikat kompetensi yang telah Anda raih.
            </p>
        </div>
    );
}

export default function MyCertificate({ certificates = [] }: Props) {
    const {
        sortBy,
        filterBy,
        searchQuery,
        setSortBy,
        setFilterBy,
        setSearchQuery,
        filteredCertificates,
        stats,
    } = useCertificateFilters(certificates);

    const hasFilters = searchQuery.trim() !== '';

    return (
        <UserDashboardLayout>
            <Head title="Sertifikat Saya" />

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
            {filteredCertificates.length > 0 ? (
                <CertificateGrid certificates={filteredCertificates} />
            ) : (
                <EmptyState hasFilters={hasFilters} />
            )}
        </UserDashboardLayout>
    );
}
