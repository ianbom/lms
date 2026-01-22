export interface Mentor {
    id: number;
    name: string;
    profile_picture_url: string | null;
}

export interface ClassData {
    id: number;
    title: string;
    slug: string;
    thumbnail_url: string | null;
    mentors: Mentor[];
    first_video_id: number | null;
}

export interface Enrollment {
    id: number;
    status: 'pending' | 'active' | 'completed';
    activated_at: string | null;
    completed_at: string | null;
    created_at: string;
    progress: number;
    class: ClassData;
}

export type SortOption =
    | 'newest'
    | 'oldest'
    | 'progress-high'
    | 'progress-low'
    | 'alphabetical';

export type FilterOption = 'all' | 'active' | 'completed';

export interface EnrollmentStats {
    total: number;
    active: number;
    completed: number;
}
