// Types for Class/Course data
export interface Category {
    id: number;
    name: string;
    slug: string;
    icon?: string;
}

export interface Mentor {
    id: number;
    name: string;
    photo_url?: string;
}

export interface ClassData {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    discount: number;
    price_final: number;
    thumbnail_url: string;
    status: 'draft' | 'published';
    category_id: number;
    modules_count: number;
    category: Category | null;
    mentors: Mentor[];
}

export type SortOption =
    | 'title_asc'
    | 'title_desc'
    | 'price_asc'
    | 'price_desc'
    | 'newest'
    | 'oldest';

export type ViewMode = 'grid' | 'list';

export type FilterTab = 'all' | 'free' | 'paid';

// Sort option labels
export const SORT_LABELS: Record<SortOption, string> = {
    newest: 'Terbaru',
    oldest: 'Terlama',
    title_asc: 'Judul A-Z',
    title_desc: 'Judul Z-A',
    price_asc: 'Harga Terendah',
    price_desc: 'Harga Tertinggi',
};

// Filter tab labels
export const FILTER_TAB_LABELS: Record<FilterTab, string> = {
    all: 'Semua',
    free: 'Gratis',
    paid: 'Berbayar',
};

// Format price helper
export const formatPrice = (price: number): string => {
    if (price === 0) return 'Gratis';
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);
};
