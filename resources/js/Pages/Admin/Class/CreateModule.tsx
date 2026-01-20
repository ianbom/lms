import { UploadedFile } from '@/Components/Admin/FileItem';
import FormCard from '@/Components/Admin/FormCard';
import FormInput from '@/Components/Admin/FormInput';
import ProTipCard from '@/Components/Admin/ProTipCard';
import RichTextEditor from '@/Components/Admin/RichTextEditor';
import VideoEntryCard, { VideoEntry } from '@/Components/Admin/VideoEntryCard';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react'; // Import useForm
import { FormEventHandler, useState } from 'react';

// Initial video entry helper
const createEmptyVideo = (id: number): VideoEntry => ({
    id,
    title: '',
    youtubeUrl: '',
    duration: '',
    description: '',
    thumbnailUrl: undefined,
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
        value: string,
    ) => {
        updateVideos(
            data.videos.map((v) => (v.id === id ? { ...v, [field]: value } : v)),
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

    // Check URL and set thumbnail (Simulation)
    const handleCheckUrl = (id: number) => {
        const video = data.videos.find((v) => v.id === id);
        if (video) {
            console.log('Checking URL for video:', video.youtubeUrl);
            // Simulate getting duration and thumbnail
            updateVideos(
                data.videos.map((v) =>
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

        updateVideos(
            data.videos.map((v) =>
                v.id === videoId
                    ? { ...v, files: [...v.files, ...newFiles] }
                    : v,
            ),
        );

        // Simulate upload completion
        setTimeout(() => {
            updateVideos(
                data.videos.map((v) =>
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
        updateVideos(
            data.videos.map((v) =>
                v.id === videoId
                    ? { ...v, files: v.files.filter((f) => f.id !== fileId) }
                    : v,
            ),
        );
    };

    // Submit handler
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

        transform((data) => ({
            ...data,
            videos: data.videos.map((v) => ({
                ...v,
                youtube_url: v.youtubeUrl,
                is_preview: false,
                duration_sec: 0,
            })),
        }));

        post(route('admin.module.store', classId));
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
                                    onChange={(val) => setData('description', val)}
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
                                <div className="text-sm text-red-500">{errors.videos}</div>
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
                                    {(errors as any)[`videos.${index}.title`] && (
                                        <div className="mt-1 text-sm text-red-500">{(errors as any)[`videos.${index}.title`]}</div>
                                    )}
                                    {(errors as any)[`videos.${index}.youtube_url`] && (
                                        <div className="mt-1 text-sm text-red-500">{(errors as any)[`videos.${index}.youtube_url`]}</div>
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
                                                {data.videos.map((video, index) => (
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
            </form>
        </AdminLayout>
    );
}
