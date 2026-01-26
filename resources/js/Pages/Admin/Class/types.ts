import {
    Category,
    Mentor as MentorOption,
} from '@/Components/Admin/Class/ClassForm';

export interface VideoResource {
    id: number;
    title: string;
    file_url: string;
    file_type: string;
    file_size: number;
}

export interface Video {
    id: number;
    title: string;
    description: string;
    youtube_url: string;
    duration_sec: number;
    is_preview: boolean;
    resources?: VideoResource[];
}

export interface QuizOption {
    id: number;
    label: string;
    is_correct: boolean;
    sort_order: number;
}

export interface QuizQuestion {
    id: number;
    question: string;
    points: number;
    sort_order: number;
    options: QuizOption[];
}

export interface Quiz {
    id: number;
    title: string;
    is_pretest: boolean;
    questions_count: number;
    questions?: QuizQuestion[];
}

export interface Module {
    id: number;
    title: string;
    description: string;
    videos: Video[];
    quizzes: Quiz[];
}

export interface Mentor {
    id: number;
    name: string;
    avatar_url: string;
}

export interface ClassData {
    id: number;
    title: string;
    description: string;
    price: number;
    discount: number;
    price_final: number;
    thumbnail_url: string;
    status: 'draft' | 'published';
    published_at: string | null;
    category: Category;
    mentors: Mentor[];
    modules: Module[];
}

export interface ClassStats {
    total_modules: number;
    total_videos: number;
    total_quizzes: number;
    total_duration_seconds: number;
}

export interface DetailClassProps {
    classData: ClassData;
    stats: ClassStats;
    categories: Category[];
    mentors: MentorOption[];
}

// Helper functions
export const extractYouTubeVideoId = (url: string): string | null => {
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([^&\n?#]+)/,
        /youtube\.com\/shorts\/([^&\n?#]+)/,
    ];
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1]) {
            return match[1];
        }
    }
    return null;
};

export const formatVideoDuration = (seconds: number): string => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    if (hrs > 0) {
        return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const formatDuration = (seconds: number): string => {
    if (!seconds) return '0m';
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    if (h > 0) return `${h}j ${m}m`;
    return `${m}m ${s}d`;
};
