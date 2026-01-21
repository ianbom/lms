// Category type
export interface Category {
    id: number;
    name: string;
    slug: string;
    description?: string;
}

// Mentor type
export interface Mentor {
    id: number;
    name: string;
    headline: string;
    bio?: string;
    avatar_url?: string;
    photo_url?: string; // Alias for avatar_url used in some components
}

// Video type
export interface Video {
    id: number;
    module_id: number;
    title: string;
    description?: string;
    youtube_url?: string;
    duration_sec: number;
    sort_order: number;
    is_preview: boolean;
}

// Quiz type
export interface Quiz {
    id: number;
    module_id: number;
    title: string;
    description?: string;
    sort_order: number;
    questions_count?: number;
}

// Module type
export interface ClassModule {
    id: number;
    class_id: number;
    title: string;
    description?: string;
    sort_order: number;
    is_active: boolean;
    videos: Video[];
    quizzes: Quiz[];
}

// Class detail type (from detailClassPage controller)
export interface ClassDetail {
    id: number;
    created_by: number;
    category_id: number;
    title: string;
    slug: string;
    description?: string;
    price: number;
    discount: number;
    price_final: number;
    thumbnail_url?: string;
    status: 'draft' | 'published';
    published_at?: string;
    created_at: string;
    updated_at: string;
    category: Category;
    creator?: {
        id: number;
        name: string;
    };
    mentors: Mentor[];
    modules: ClassModule[];
}

// Helper function to format price in IDR
export const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);
};

// Helper function to format duration from seconds to readable format
export const formatDuration = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    if (hours > 0) {
        return `${hours}j ${minutes}m`;
    }
    return `${minutes}m`;
};

// Helper function to format video duration (mm:ss or hh:mm:ss)
export const formatVideoDuration = (seconds: number): string => {
    if (!seconds) return '0:00';

    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
        return `${hours}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${mins}:${String(secs).padStart(2, '0')}`;
};

// Calculate total duration from modules
export const calculateTotalDuration = (modules: ClassModule[]): number => {
    return modules.reduce((total, module) => {
        const moduleDuration = module.videos.reduce(
            (sum, video) => sum + (video.duration_sec || 0),
            0,
        );
        return total + moduleDuration;
    }, 0);
};

// Calculate total video count from modules
export const calculateTotalVideos = (modules: ClassModule[]): number => {
    return modules.reduce((total, module) => total + module.videos.length, 0);
};

// Calculate total quiz count from modules
export const calculateTotalQuizzes = (modules: ClassModule[]): number => {
    return modules.reduce((total, module) => total + module.quizzes.length, 0);
};

// =====================
// Types for ListClass.tsx
// =====================

// ClassData for list view (simplified version of ClassDetail)
export interface ClassData {
    id: number;
    category_id: number;
    title: string;
    slug: string;
    description?: string;
    price: number;
    discount: number;
    price_final: number;
    thumbnail_url?: string;
    status: 'draft' | 'published';
    published_at?: string;
    created_at: string;
    updated_at: string;
    category?: Category;
    mentors: Mentor[];
    modules_count?: number; // Count of modules in the class
}

// Filter tab type
export type FilterTab = 'all' | 'free' | 'paid';

// Sort options type
export type SortOption =
    | 'newest'
    | 'oldest'
    | 'title_asc'
    | 'title_desc'
    | 'price_asc'
    | 'price_desc';

// View mode type
export type ViewMode = 'grid' | 'list';

// Filter tab labels
export const FILTER_TAB_LABELS: Record<FilterTab, string> = {
    all: 'Semua',
    free: 'Gratis',
    paid: 'Berbayar',
};

// Sort labels
export const SORT_LABELS: Record<SortOption, string> = {
    newest: 'Terbaru',
    oldest: 'Terlama',
    title_asc: 'Nama (A-Z)',
    title_desc: 'Nama (Z-A)',
    price_asc: 'Harga Terendah',
    price_desc: 'Harga Tertinggi',
};
