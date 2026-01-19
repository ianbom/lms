export interface Instructor {
    name: string;
    avatarUrl: string;
    title?: string;
    company?: string;
}

export interface Lesson {
    id: number;
    title: string;
    duration: string;
    type: 'video' | 'quiz' | 'article';
    isPreview?: boolean;
    isLocked?: boolean;
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

export interface ModuleDetail extends Module {
    originalPrice?: number;
    discount?: number;
    level: 'beginner' | 'intermediate' | 'advanced';
    accessType: 'lifetime' | 'limited';
    tags: string[];
    longDescription: string;
    learningPoints: string[];
    lessons: Lesson[];
    previewVideoUrl?: string;
}

export type FilterTab = 'all' | 'free' | 'paid';

export interface PaginationInfo {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}
