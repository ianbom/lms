import { Category, ClassModule, Mentor, Video } from './class';

// Video Progress type
export interface VideoProgress {
    id: number;
    user_id: number;
    video_id: number;
    last_time_sec: number;
    is_completed: boolean;
    completed_at: string | null;
    progress_percent?: number;
}

// Video Note type
export interface VideoNote {
    id: number;
    user_id: number;
    video_id: number;
    content: string;
    created_at: string;
    updated_at: string;
}

// Video Resource type
export interface VideoResource {
    id: number;
    video_id: number;
    title: string;
    file_url: string;
    file_type: string;
    mime_type?: string;
    file_size: number;
    formatted_size?: string;
    icon?: string;
}

// Extended Video with progress
export interface VideoWithProgress extends Video {
    progress?: VideoProgress[];
    youtube_id?: string;
    formatted_duration?: string;
}

// Quiz item in module list (simplified for study sidebar)
export interface ModuleQuizItem {
    id: number;
    title: string;
    questions_count?: number;
    attempts?: QuizAttempt[];
}

// Quiz attempt for certificate eligibility check
export interface QuizAttempt {
    id: number;
    user_id: number;
    quiz_id: number;
    score: number;
    passed: boolean;
    completed_at: string | null;
    created_at: string;
}

// Certificate eligibility status
export interface CertificateStatus {
    is_eligible: boolean;
    all_videos_completed: boolean;
    all_quizzes_passed: boolean;
    total_videos: number;
    completed_videos: number;
    total_quizzes: number;
    passed_quizzes: number;
    min_quiz_score: number;
}

// Extended Module with videos that have progress
export interface ModuleWithProgress extends Omit<ClassModule, 'videos' | 'quizzes'> {
    videos: VideoWithProgress[];
    quizzes?: ModuleQuizItem[];
}

// Class data for study page
export interface StudyClassData {
    id: number;
    title: string;
    slug: string;
    description?: string;
    thumbnail_url?: string;
    category: Category;
    mentors: Mentor[];
    modules: ModuleWithProgress[];
}

// Current video data for study page
export interface CurrentVideoData {
    video: VideoWithProgress & {
        module: {
            id: number;
            title: string;
            class: {
                id: number;
                title: string;
            };
        };
        resources: VideoResource[];
    };
    progress: VideoProgress | null;
    notes: VideoNote[];
    resources: VideoResource[];
}

// Progress stats for study page
export interface ProgressStats {
    total_videos: number;
    completed_videos: number;
    progress_percent: number;
    total_duration: number;
    watched_duration: number;
}

// Navigation data for study page
export interface VideoNavigation {
    previous: {
        id: number;
        title: string;
        module_title: string;
        duration_sec: number;
    } | null;
    next: {
        id: number;
        title: string;
        module_title: string;
        duration_sec: number;
    } | null;
    current_index: number | null;
    total_videos: number;
}

// Props for WatchVideo page
export interface WatchVideoProps {
    classData: StudyClassData;
    currentVideo: CurrentVideoData;
    progressStats: ProgressStats;
    navigation: VideoNavigation;
    certificateStatus: CertificateStatus;
}

// Helper function to format seconds to mm:ss or hh:mm:ss
export const formatTime = (seconds: number): string => {
    if (!seconds || seconds <= 0) return '0:00';

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hours > 0) {
        return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    return `${minutes}:${secs.toString().padStart(2, '0')}`;
};

// Helper to get resource icon based on file type
export const getResourceIcon = (fileType: string): string => {
    switch (fileType?.toLowerCase()) {
        case 'pdf':
            return 'picture_as_pdf';
        case 'doc':
        case 'docx':
            return 'description';
        case 'ppt':
        case 'pptx':
            return 'slideshow';
        case 'xls':
        case 'xlsx':
            return 'table_chart';
        case 'zip':
        case 'rar':
            return 'folder_zip';
        case 'mp4':
        case 'mov':
        case 'avi':
            return 'videocam';
        case 'mp3':
        case 'wav':
            return 'audiotrack';
        case 'jpg':
        case 'jpeg':
        case 'png':
        case 'gif':
            return 'image';
        default:
            return 'insert_drive_file';
    }
};

// Helper to get resource color based on file type
export const getResourceColor = (fileType: string): { bg: string; text: string } => {
    switch (fileType?.toLowerCase()) {
        case 'pdf':
            return { bg: 'bg-red-100', text: 'text-red-500' };
        case 'doc':
        case 'docx':
            return { bg: 'bg-blue-100', text: 'text-blue-500' };
        case 'ppt':
        case 'pptx':
            return { bg: 'bg-orange-100', text: 'text-orange-500' };
        case 'xls':
        case 'xlsx':
            return { bg: 'bg-green-100', text: 'text-green-500' };
        case 'zip':
        case 'rar':
            return { bg: 'bg-purple-100', text: 'text-purple-500' };
        default:
            return { bg: 'bg-slate-100', text: 'text-slate-500' };
    }
};

// ============ QUIZ TYPES ============

// Quiz Option type
export interface QuizOption {
    id: number;
    question_id: number;
    label: string;
    is_correct?: boolean;
    sort_order: number;
}

// Quiz Question type
export interface QuizQuestion {
    id: number;
    quiz_id: number;
    question: string;
    points: number;
    sort_order: number;
    options: QuizOption[];
}

// Quiz type
export interface Quiz {
    id: number;
    module_id: number;
    title: string;
    sort_order: number;
    is_pretest: boolean;
    questions: QuizQuestion[];
    questions_count?: number;
    total_points?: number;
    module?: {
        id: number;
        title: string;
        class_id: number;
        class?: {
            id: number;
            title: string;
        };
    };
}

// Quiz Attempt type
export interface QuizAttempt {
    id: number;
    user_id: number;
    quiz_id: number;
    started_at: string | null;
    submitted_at: string | null;
    score: number;
    is_passed: boolean;
    answers?: QuizAnswer[];
}

// Quiz Answer type
export interface QuizAnswer {
    id: number;
    attempt_id: number;
    question_id: number;
    option_id: number;
    is_correct: boolean | null;
}

// User's answer state (for frontend)
export interface UserAnswer {
    questionId: number;
    optionId: number | null;
}

// Props for TakeQuiz page
export interface TakeQuizProps {
    classData: StudyClassData;
    quiz: Quiz;
    attempt: QuizAttempt | null;
    previousAttempts: QuizAttempt[];
    progressStats: ProgressStats;
}

// Quiz result after submission
export interface QuizResult {
    attempt: QuizAttempt;
    correctAnswers: number;
    totalQuestions: number;
    score: number;
    isPassed: boolean;
    answers: {
        questionId: number;
        selectedOptionId: number;
        correctOptionId: number;
        isCorrect: boolean;
    }[];
}
