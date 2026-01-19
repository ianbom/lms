export interface Instructor {
    name: string;
    avatarUrl: string;
}

export interface Module {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    categoryIcon: string;
    categoryColor: string;
    price: number | null; // null means free
    duration: string;
    videoCount?: number;
    instructor: Instructor;
}

export type FilterTab = 'all' | 'free' | 'paid';

export interface PaginationInfo {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}
