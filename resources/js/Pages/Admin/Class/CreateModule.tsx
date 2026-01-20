import { UploadedFile } from '@/Components/Admin/FileItem';
import FormCard from '@/Components/Admin/FormCard';
import FormInput from '@/Components/Admin/FormInput';
import ProTipCard from '@/Components/Admin/ProTipCard';
import RichTextEditor from '@/Components/Admin/RichTextEditor';
import VideoEntryCard, { VideoEntry } from '@/Components/Admin/VideoEntryCard';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

// Initial video entry
const createEmptyVideo = (id: number): VideoEntry => ({
    id,
    title: '',
    youtubeUrl: '',
    duration: '',
    description: '',
    thumbnailUrl: undefined,
    files: [],
});

export default function CreateModule() {
    // Module state
    const [moduleTitle, setModuleTitle] = useState('');
    const [moduleDescription, setModuleDescription] = useState('');

    // Videos state
    const [videos, setVideos] = useState<VideoEntry[]>([createEmptyVideo(1)]);

    // Handle video field change
    const handleVideoChange = (
        id: number,
        field: keyof Omit<VideoEntry, 'files'>,
        value: string,
    ) => {
        setVideos(
            videos.map((v) => (v.id === id ? { ...v, [field]: value } : v)),
        );
    };

    // Add new video
    const handleAddVideo = () => {
        const newId = Math.max(...videos.map((v) => v.id)) + 1;
        setVideos([...videos, createEmptyVideo(newId)]);
    };

    // Remove video
    const handleRemoveVideo = (id: number) => {
        if (videos.length > 1) {
            setVideos(videos.filter((v) => v.id !== id));
        }
    };

    // Check URL and set thumbnail
    const handleCheckUrl = (id: number) => {
        const video = videos.find((v) => v.id === id);
        if (video) {
            console.log('Checking URL for video:', video.youtubeUrl);
            // Simulate getting duration and thumbnail
            setVideos(
                videos.map((v) =>
                    v.id === id
                        ? {
                              ...v,
                              duration: '14:20',
                              thumbnailUrl:
                                  'https://lh3.googleusercontent.com/aida-public/AB6AXuCRdrr0DlIBoElr9siVP_raMljRjhIcO1FePdwA_6rXExzg9w6wJGmDsnCqyXL8vTvfKWQIV-rxXtylBZxXr3Js12NhP47PhzVuajRYuaZUm2HkFTSsl7FA12JQ3HncHRp5M-ccJDuINHl1y15qxKp28uMa8Bhi6gF_6_Z848XBhlGFMa98zIscgFxcF4tyHeMFdNOYC2_rk3ncMXqcvDDagGv4zI7D3RmbJiQob73NVFEyPbWib6ZG_qED5Swyq_PTKUihrFvZC4-X',
                          }
                        : v,
                ),
            );
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
                    : file.name.endsWith('.docx')
                      ? 'doc'
                      : file.name.endsWith('.zip')
                        ? 'zip'
                        : 'other',
                progress: 0,
                isUploading: true,
            }),
        );

        setVideos(
            videos.map((v) =>
                v.id === videoId
                    ? { ...v, files: [...v.files, ...newFiles] }
                    : v,
            ),
        );

        // Simulate upload completion
        setTimeout(() => {
            setVideos((prev) =>
                prev.map((v) =>
                    v.id === videoId
                        ? {
                              ...v,
                              files: v.files.map((f) =>
                                  newFiles.some((nf) => nf.id === f.id)
                                      ? {
                                            ...f,
                                            isUploading: false,
                                            uploadedAt: 'Uploaded just now',
                                        }
                                      : f,
                              ),
                          }
                        : v,
                ),
            );
        }, 2000);
    };

    // Remove file from a specific video
    const handleRemoveFile = (videoId: number, fileId: number) => {
        setVideos(
            videos.map((v) =>
                v.id === videoId
                    ? { ...v, files: v.files.filter((f) => f.id !== fileId) }
                    : v,
            ),
        );
    };

    // Calculate totals
    const totalFiles = videos.reduce((acc, v) => acc + v.files.length, 0);

    return (
        <AdminLayout
            breadcrumbs={[
                { label: 'Classes', href: route('admin.classes') },
                { label: 'Create Module' },
            ]}
        >
            <Head title="Create Module" />

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
                        type="button"
                        className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:bg-[#00622e]"
                    >
                        <Icon name="save" size={20} />
                        Save Module
                    </button>
                </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                {/* Left Column - Forms */}
                <div className="flex flex-col gap-6 lg:col-span-3">
                    {/* Module Information Card */}
                    <FormCard icon="folder" title="Module Information">
                        <div className="flex flex-col gap-6">
                            <FormInput
                                label="Module Title"
                                required
                                placeholder="e.g. Advanced Marketing Strategies"
                                value={moduleTitle}
                                onChange={setModuleTitle}
                            />

                            <RichTextEditor
                                label="Module Description"
                                value={moduleDescription}
                                onChange={setModuleDescription}
                                placeholder="Describe what students will learn in this module..."
                                maxLength={500}
                            />
                        </div>
                    </FormCard>

                    {/* Video Entries */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-bold text-[#101814]">
                                Videos ({videos.length})
                            </h2>
                        </div>

                        {videos.map((video, index) => (
                            <VideoEntryCard
                                key={video.id}
                                video={video}
                                index={index}
                                isFirst={index === 0}
                                onChange={handleVideoChange}
                                onRemove={handleRemoveVideo}
                                onCheckUrl={handleCheckUrl}
                                onFilesSelected={handleFilesSelected}
                                onRemoveFile={handleRemoveFile}
                            />
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
                                        {moduleTitle || 'Untitled'}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-[#5e6a62]">
                                        Total Videos
                                    </span>
                                    <span className="font-medium text-[#101814]">
                                        {videos.length}
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
                                {videos.length > 0 && (
                                    <div className="mt-4 border-t border-[#e5e7eb] pt-4">
                                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#5e6a62]">
                                            Videos
                                        </p>
                                        <div className="space-y-2">
                                            {videos.map((video, index) => (
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
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <ProTipCard message="Each video can have its own supporting materials like PDFs, slides, or resources." />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
