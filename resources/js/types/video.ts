export interface VideoLesson {
    id: number;
    title: string;
    duration: string;
    status: 'completed' | 'playing' | 'pending' | 'locked';
}

export interface VideoResource {
    id: number;
    title: string;
    type: 'pdf' | 'link' | 'file';
    url: string;
}

export interface VideoData {
    id: number;
    title: string;
    description: string;
    videoId: string; // YouTube video ID
    thumbnailUrl?: string;
    videoUrl?: string;
    currentTime?: string;
    totalTime?: string;
    progress?: number;
    updatedAt: string;
    views: number;
    learningPoints: string[];
    resources: VideoResource[];
}

export interface ModuleProgress {
    moduleTitle: string;
    progressPercent: number;
    lessons: VideoLesson[];
}
