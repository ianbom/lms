import {
    Certificate,
    CertificateFilterOption,
    CertificateSortOption,
    CertificateStats,
} from '@/types/certificate';
import { useMemo, useState } from 'react';

interface UseCertificateFiltersReturn {
    // State
    sortBy: CertificateSortOption;
    filterBy: CertificateFilterOption;
    searchQuery: string;

    // Setters
    setSortBy: (value: CertificateSortOption) => void;
    setFilterBy: (value: CertificateFilterOption) => void;
    setSearchQuery: (value: string) => void;

    // Computed
    filteredCertificates: Certificate[];
    stats: CertificateStats;
}

export function useCertificateFilters(
    certificates: Certificate[],
): UseCertificateFiltersReturn {
    const [sortBy, setSortBy] = useState<CertificateSortOption>('newest');
    const [filterBy, setFilterBy] = useState<CertificateFilterOption>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCertificates = useMemo(() => {
        let result = [...certificates];

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter((cert) =>
                cert.class.title.toLowerCase().includes(query),
            );
        }

        // Sort
        result.sort((a, b) => {
            switch (sortBy) {
                case 'newest':
                    return (
                        new Date(b.issued_at).getTime() -
                        new Date(a.issued_at).getTime()
                    );
                case 'oldest':
                    return (
                        new Date(a.issued_at).getTime() -
                        new Date(b.issued_at).getTime()
                    );
                case 'alphabetical':
                    return a.class.title.localeCompare(b.class.title);
                default:
                    return 0;
            }
        });

        return result;
    }, [certificates, sortBy, filterBy, searchQuery]);

    const stats = useMemo<CertificateStats>(() => {
        return {
            total: certificates.length,
        };
    }, [certificates]);

    return {
        sortBy,
        filterBy,
        searchQuery,
        setSortBy,
        setFilterBy,
        setSearchQuery,
        filteredCertificates,
        stats,
    };
}
