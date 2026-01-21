import { UploadedFile } from '@/Components/Admin/FileItem';
import FormCard from '@/Components/Admin/FormCard';
import FormInput from '@/Components/Admin/FormInput';
import ProTipCard from '@/Components/Admin/ProTipCard';
import RichTextEditor from '@/Components/Admin/RichTextEditor';
import VideoEntryCard, { VideoEntry } from '@/Components/Admin/VideoEntryCard';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

// Declare YouTube API types
declare global {
    interface Window {
        YT: {
            Player: new (
                elementId: string,
                config: {
                    videoId: string;
                    events?: {
                        onReady?: (event: { target: YTPlayer }) => void;
                    };
                },
            ) => YTPlayer;
        };
        onYouTubeIframeAPIReady?: () => void;
    }
}

interface YTPlayer {
    getDuration: () => number;
    destroy: () => void;
}

// Initial video entry helper
const createEmptyVideo = (id: number): VideoEntry => ({
    id,
    title: '',
    youtubeUrl: '',
    duration: '',
    durationSec: 0,
    description: '',
    thumbnailUrl: undefined,
    isPreview: false,
    files: [],
});

interface CreateModuleProps {
    classId: number;
}

export default function CreateModule({ classId }: CreateModuleProps) {
    // 1. Setup useForm
    const { data, setData, post, processing, errors, transform } = useForm({
        title: '',
        description: '',
        videos: [createEmptyVideo(1)],
    });

    // 2. Helper to update video list in form data
    const updateVideos = (newVideos: VideoEntry[]) => {
        setData('videos', newVideos);
    };

    // Handle video field change
    const handleVideoChange = (
        id: number,
        field: keyof Omit<VideoEntry, 'files'>,
        value: string | boolean,
    ) => {
        updateVideos(
            data.videos.map((v) =>
                v.id === id ? { ...v, [field]: value } : v,
            ),
        );
    };

    // Add new video
    const handleAddVideo = () => {
        const newId = Math.max(...data.videos.map((v) => v.id)) + 1;
        updateVideos([...data.videos, createEmptyVideo(newId)]);
    };

    // Remove video
    const handleRemoveVideo = (id: number) => {
        if (data.videos.length > 1) {
            updateVideos(data.videos.filter((v) => v.id !== id));
        }
    };

    // Extract YouTube video ID from URL
    const extractYouTubeVideoId = (url: string): string | null => {
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

    // Format seconds to MM:SS or HH:MM:SS
    const formatDuration = (seconds: number): string => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        if (hrs > 0) {
            return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // Check URL and set thumbnail from YouTube, fetch duration using IFrame API
    const handleCheckUrl = (id: number) => {
        const video = data.videos.find((v) => v.id === id);
        if (video && video.youtubeUrl) {
            const videoId = extractYouTubeVideoId(video.youtubeUrl);

            if (videoId) {
                // Use YouTube thumbnail URLs (maxresdefault for best quality)
                const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                const youtubeWatchUrl = `https://www.youtube.com/watch?v=${videoId}`;

                // Update with thumbnail first, show loading for duration
                updateVideos(
                    data.videos.map((v) =>
                        v.id === id
                            ? {
                                ...v,
                                thumbnailUrl,
                                youtubeUrl: youtubeWatchUrl,
                                duration: 'Loading...',
                            }
                            : v,
                    ),
                );

                // Load YouTube IFrame API if not already loaded
                const loadYouTubeAPI = (): Promise<void> => {
                    return new Promise((resolve) => {
                        if (window.YT && window.YT.Player) {
                            resolve();
                            return;
                        }
                        const tag = document.createElement('script');
                        tag.src = 'https://www.youtube.com/iframe_api';
                        const firstScriptTag = document.getElementsByTagName('script')[0];
                        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
                        window.onYouTubeIframeAPIReady = () => resolve();
                    });
                };

                // Get duration using YouTube IFrame API
                loadYouTubeAPI().then(() => {
                    // Create a hidden container for the player
                    const containerId = `yt-player-${id}-${Date.now()}`;
                    const container = document.createElement('div');
                    container.id = containerId;
                    container.style.display = 'none';
                    document.body.appendChild(container);

                    new window.YT.Player(containerId, {
                        videoId: videoId,
                        events: {
                            onReady: (event) => {
                                const duration = Math.floor(event.target.getDuration());
                                const formattedDuration = formatDuration(duration);

                                // Use functional update to avoid stale closure
                                setData((prevData) => ({
                                    ...prevData,
                                    videos: prevData.videos.map((v) =>
                                        v.id === id
                                            ? {
                                                ...v,
                                                thumbnailUrl,
                                                youtubeUrl: youtubeWatchUrl,
                                                duration: formattedDuration,
                                                durationSec: duration,
                                            }
                                            : v,
                                    ),
                                }));

                                // Cleanup
                                event.target.destroy();
                                container.remove();
                            },
                        },
                    });
                });
            } else {
                // Invalid URL - clear thumbnail
                updateVideos(
                    data.videos.map((v) =>
                        v.id === id
                            ? {
                                ...v,
                                thumbnailUrl: undefined,
                                duration: 'Invalid URL',
                                durationSec: 0,
                            }
                            : v,
                    ),
                );
            }
        }
    };

    // Handle files selected for a specific video
    const handleFilesSelected = (videoId: number, fileList: FileList) => {
        const newFiles: UploadedFile[] = Array.from(fileList).map(
            (file, index) => ({
                id: Date.now() + index,
                name: file.name,
                size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
                type: file.name.endsWith('.pdf')
                    ? 'pdf'
                    : file.name.endsWith('.docx') || file.name.endsWith('.doc')
                        ? 'doc'
                        : file.name.endsWith('.zip')
                            ? 'zip'
                            : 'other',
                progress: 100,
                isUploading: false,
                uploadedAt: 'Ready to submit',
                file: file, // Store actual File object
            }),
        );

        const updatedVideos = data.videos.map((v) =>
            v.id === videoId ? { ...v, files: [...v.files, ...newFiles] } : v,
        );
        setData('videos', updatedVideos);
    };

    // Remove file from a specific video
    const handleRemoveFile = (videoId: number, fileId: number) => {
        const updatedVideos = data.videos.map((v) =>
            v.id === videoId
                ? { ...v, files: v.files.filter((f) => f.id !== fileId) }
                : v,
        );
        setData('videos', updatedVideos);
    };

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        // Transform data before sending to match backend expectations
        transform((formData) => ({
            title: formData.title,
            description: formData.description,
            videos: formData.videos.map((v) => ({
                title: v.title,
                description: v.description,
                youtube_url: v.youtubeUrl,
                is_preview: v.isPreview,
                duration_sec: v.durationSec,
                resources: v.files.map((f) => ({
                    title: f.name,
                    file: f.file, // Include actual File object
                    file_type: f.type,
                })),
            })),
        }));

        post(route('admin.module.store', classId), {
            forceFormData: true, // Required for file uploads
        });
    };

    // Calculate totals
    const totalFiles = data.videos.reduce((acc, v) => acc + v.files.length, 0);

    return (
        <AdminLayout
            breadcrumbs={[
                { label: 'Classes', href: route('admin.classes') },
                { label: 'Create Module' },
            ]}
        >
            <Head title="Create Module" />

            <form onSubmit={handleSubmit}>
                {/* Page Header */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-[#101814]">
                            Create New Module
                        </h1>
                        <p className="mt-1 text-[#5e6a62]">
                            Add module details and video content
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link
                            href={route('admin.classes')}
                            className="rounded-lg border border-[#dae7e0] bg-white px-5 py-2.5 text-sm font-semibold text-[#5e6a62] transition-colors hover:bg-[#f9fafb]"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={processing}
                            className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:bg-[#00622e] disabled:opacity-50"
                        >
                            <Icon name="save" size={20} />
                            {processing ? 'Saving...' : 'Save Module'}
                        </button>
                    </div>
                </div>

                {/* Two Column Layout */}
                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-4">
                    {/* Left Column - Forms */}
                    <div className="flex flex-col gap-6 lg:col-span-3">
                        {/* Module Information Card */}
                        <FormCard icon="folder" title="Module Information">
                            <div className="flex flex-col gap-6">
                                <FormInput
                                    label="Module Title"
                                    required
                                    placeholder="e.g. Advanced Marketing Strategies"
                                    value={data.title}
                                    onChange={(val) => setData('title', val)}
                                    error={errors.title}
                                />

                                <RichTextEditor
                                    label="Module Description"
                                    value={data.description}
                                    onChange={(val) =>
                                        setData('description', val)
                                    }
                                    placeholder="Describe what students will learn in this module..."
                                    maxLength={500}
                                    error={errors.description}
                                />
                            </div>
                        </FormCard>

                        {/* Video Entries */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-bold text-[#101814]">
                                    Videos ({data.videos.length})
                                </h2>
                            </div>

                            {/* Validation error for videos array */}
                            {errors.videos && (
                                <div className="text-sm text-red-500">
                                    {errors.videos}
                                </div>
                            )}

                            {data.videos.map((video, index) => (
                                <div key={video.id}>
                                    <VideoEntryCard
                                        video={video}
                                        index={index}
                                        isFirst={index === 0}
                                        onChange={handleVideoChange}
                                        onRemove={handleRemoveVideo}
                                        onCheckUrl={handleCheckUrl}
                                        onFilesSelected={handleFilesSelected}
                                        onRemoveFile={handleRemoveFile}
                                    />
                                    {/* Display nested validation errors for this video */}
                                    {/* Note: Inertia keys for array errors often look like 'videos.0.title' */}
                                    {(errors as any)[
                                        `videos.${index}.title`
                                    ] && (
                                            <div className="mt-1 text-sm text-red-500">
                                                {
                                                    (errors as any)[
                                                    `videos.${index}.title`
                                                    ]
                                                }
                                            </div>
                                        )}
                                    {(errors as any)[
                                        `videos.${index}.youtube_url`
                                    ] && (
                                            <div className="mt-1 text-sm text-red-500">
                                                {
                                                    (errors as any)[
                                                    `videos.${index}.youtube_url`
                                                    ]
                                                }
                                            </div>
                                        )}
                                </div>
                            ))}

                            {/* Add New Video Button */}
                            <button
                                type="button"
                                onClick={handleAddVideo}
                                className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#dae7e0] bg-white py-4 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary/5"
                            >
                                <Icon name="add_circle" size={20} />
                                Add New Video
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Summary */}
                    <div className="flex flex-col gap-6 lg:col-span-1">
                        <div className="sticky top-6 space-y-6">
                            {/* Module Summary Card */}
                            <div className="overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-lg shadow-gray-200/50">
                                <div className="border-b border-[#e5e7eb] px-6 py-4">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#101814]">
                                        Module Summary
                                    </h3>
                                </div>
                                <div className="space-y-4 p-6">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#5e6a62]">
                                            Module Title
                                        </span>
                                        <span className="max-w-[120px] truncate font-medium text-[#101814]">
                                            {data.title || 'Untitled'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#5e6a62]">
                                            Total Videos
                                        </span>
                                        <span className="font-medium text-[#101814]">
                                            {data.videos.length}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#5e6a62]">
                                            Total Files
                                        </span>
                                        <span className="font-medium text-[#101814]">
                                            {totalFiles}
                                        </span>
                                    </div>

                                    {/* Video List */}
                                    {data.videos.length > 0 && (
                                        <div className="mt-4 border-t border-[#e5e7eb] pt-4">
                                            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#5e6a62]">
                                                Videos
                                            </p>
                                            <div className="space-y-2">
                                                {data.videos.map(
                                                    (video, index) => (
                                                        <div
                                                            key={video.id}
                                                            className="flex items-center gap-2 text-sm"
                                                        >
                                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-primary/10 text-xs font-medium text-primary">
                                                                {index + 1}
                                                            </span>
                                                            <span className="flex-1 truncate text-[#101814]">
                                                                {video.title ||
                                                                    'Untitled'}
                                                            </span>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <ProTipCard message="Each video can have its own supporting materials like PDFs, slides, or resources." />
                        </div>
                    </div>
                </div>
            </form>
        </AdminLayout>
    );
}
