import Icon from '@/Components/Icon';
import FileItem, { UploadedFile } from './FileItem';
import FileUploadZone from './FileUploadZone';
import FormInput from './FormInput';
import ReadonlyInput from './ReadonlyInput';
import RichTextEditor from './RichTextEditor';
import UrlInput from './UrlInput';
import VideoPreview from './VideoPreview';

export interface VideoEntry {
    id: number;
    title: string;
    youtubeUrl: string;
    duration: string;
    description: string;
    thumbnailUrl?: string;
    files: UploadedFile[];
}

interface VideoEntryCardProps {
    video: VideoEntry;
    index: number;
    isFirst?: boolean;
    onChange: (
        id: number,
        field: keyof Omit<VideoEntry, 'files'>,
        value: string,
    ) => void;
    onRemove: (id: number) => void;
    onCheckUrl?: (id: number) => void;
    onFilesSelected?: (id: number, files: FileList) => void;
    onRemoveFile?: (videoId: number, fileId: number) => void;
}

export default function VideoEntryCard({
    video,
    index,
    isFirst = false,
    onChange,
    onRemove,
    onCheckUrl,
    onFilesSelected,
    onRemoveFile,
}: VideoEntryCardProps) {
    return (
        <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 md:p-8">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between border-b border-[#e5e7eb] pb-4">
                <div className="flex items-center gap-2 text-[#101814]">
                    <Icon
                        name="play_circle"
                        size={20}
                        className="text-primary"
                    />
                    <h2 className="text-base font-bold">Video {index + 1}</h2>
                </div>
                {!isFirst && (
                    <button
                        type="button"
                        onClick={() => onRemove(video.id)}
                        className="flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-red-500 transition-colors hover:bg-red-50"
                    >
                        <Icon name="delete" size={18} />
                        Remove
                    </button>
                )}
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Left - Form Fields */}
                <div className="flex flex-col gap-6 lg:col-span-2">
                    <FormInput
                        label="Video Title"
                        required
                        placeholder="e.g. Introduction to Neural Networks"
                        value={video.title}
                        onChange={(value) => onChange(video.id, 'title', value)}
                    />

                    {/* URL & Duration Row */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <UrlInput
                                label="YouTube URL"
                                placeholder="youtube.com/watch?v=..."
                                value={video.youtubeUrl}
                                onChange={(value) =>
                                    onChange(video.id, 'youtubeUrl', value)
                                }
                                onCheck={() => onCheckUrl?.(video.id)}
                                helpText="Supports YouTube, Vimeo, and Wistia links."
                            />
                        </div>
                        <ReadonlyInput
                            label="Duration"
                            value={video.duration || '--:--'}
                            icon="schedule"
                        />
                    </div>

                    <RichTextEditor
                        label="Description"
                        value={video.description}
                        onChange={(value) =>
                            onChange(video.id, 'description', value)
                        }
                        placeholder="Add a brief summary about what students will learn..."
                        maxLength={1000}
                    />

                    {/* Supporting Materials */}
                    <div className="rounded-lg border border-[#f0f5f2] bg-[#f9fafb] p-4">
                        <div className="mb-3 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-[#101814]">
                                <Icon
                                    name="folder_open"
                                    size={18}
                                    className="text-primary"
                                />
                                <span className="text-sm font-semibold">
                                    Supporting Materials
                                </span>
                            </div>
                            <span className="rounded bg-[#e5e7eb] px-2 py-0.5 text-[10px] font-medium text-[#5e6a62]">
                                Optional
                            </span>
                        </div>

                        <FileUploadZone
                            onFilesSelected={(files) =>
                                onFilesSelected?.(video.id, files)
                            }
                            className="bg-white"
                        />

                        {/* File List */}
                        {video.files.length > 0 && (
                            <div className="mt-3 space-y-2">
                                {video.files.map((file) => (
                                    <FileItem
                                        key={file.id}
                                        file={file}
                                        onRemove={() =>
                                            onRemoveFile?.(video.id, file.id)
                                        }
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right - Live Preview */}
                <div className="lg:col-span-1">
                    <div className="sticky top-4">
                        <VideoPreview
                            title={video.title || 'Untitled Video'}
                            thumbnailUrl={video.thumbnailUrl}
                            className="shadow-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
