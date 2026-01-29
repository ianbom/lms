export interface Certificate {
    id: number;
    user_id: number;
    class_id: number;
    issued_code: string;
    issued_at: string;
    file_url: string | null;
    class: {
        id: number;
        title: string;
        thumbnail_url: string;
    };
    user: {
        id: number;
        name: string;
    };
}

export interface CertificateStats {
    total: number;
}

export type CertificateSortOption = 'newest' | 'oldest' | 'alphabetical';
export type CertificateFilterOption = 'all';
