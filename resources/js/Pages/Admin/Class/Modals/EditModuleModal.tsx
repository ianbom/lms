import ModuleForm, {
    createEmptyVideo,
    ModuleFormData,
    ModuleFormErrors,
} from '@/Components/Admin/Module/ModuleForm';
import { VideoEntry } from '@/Components/Admin/VideoEntryCard';
import Icon from '@/Components/Icon';
import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import {
    extractYouTubeVideoId,
    formatVideoDuration,
    Module,
} from '../types';

interface EditModuleModalProps {
    isOpen: boolean;
    onClose: () => void;
    moduleId: number | null;
    modules: Module[];
}

export default function EditModuleModal({
    isOpen,
    onClose,
    moduleId,
    modules,
}: EditModuleModalProps) {
    const [processing, setProcessing] = useState(false);
    const [errors, setErrors] = useState<ModuleFormErrors>({});
    const [formData, setFormData] = useState<ModuleFormData>({
        title: '',
        description: '',
        videos: [createEmptyVideo(1)],
    });

    // Transform module data when modal opens
    useEffect(() => {
        if (isOpen && moduleId) {
            const moduleToEdit = modules.find((m) => m.id === moduleId);
            if (!moduleToEdit) return;

            const videos: VideoEntry[] = moduleToEdit.videos.map((v, index) => {
                const videoId = extractYouTubeVideoId(v.youtube_url);
                const thumbnailUrl = videoId
                    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                    : undefined;

                return {
                    id: index + 1,
                    title: v.title,
                    youtubeUrl: v.youtube_url,
                    duration: formatVideoDuration(v.duration_sec),
                    durationSec: v.duration_sec,
                    description: v.description || '',
                    thumbnailUrl,
                    isPreview: v.is_preview,
                    files: (v.resources || []).map((r, rIndex) => ({
                        id: rIndex + 1,
                        name: r.title,
                        size: r.file_size
                            ? `${(r.file_size / 1024 / 1024).toFixed(1)} MB`
                            : '0 MB',
                        type: r.file_type as 'pdf' | 'doc' | 'zip' | 'other',
                        progress: 100,
                        isUploading: false,
                        uploadedAt: 'Uploaded',
                        existingUrl: r.file_url,
                    })),
                };
            });

            setFormData({
                title: moduleToEdit.title,
                description: moduleToEdit.description || '',
                videos: videos.length > 0 ? videos : [createEmptyVideo(1)],
            });
            setErrors({});
        }
    }, [isOpen, moduleId, modules]);

    const handleClose = () => {
        setFormData({
            title: '',
            description: '',
            videos: [createEmptyVideo(1)],
        });
        setErrors({});
        onClose();
    };

    const handleFormChange = (
        newData: ModuleFormData | ((prev: ModuleFormData) => ModuleFormData)
    ) => {
        if (typeof newData === 'function') {
            setFormData(newData);
        } else {
            setFormData(newData);
        }
    };

    const handleSubmit = () => {
        if (!moduleId) return;

        setProcessing(true);
        setErrors({});

        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('_method', 'PUT');

        formData.videos.forEach((v, index) => {
            data.append(`videos[${index}][title]`, v.title);
            data.append(`videos[${index}][description]`, v.description);
            data.append(`videos[${index}][youtube_url]`, v.youtubeUrl);
            data.append(`videos[${index}][is_preview]`, v.isPreview ? '1' : '0');
            data.append(`videos[${index}][duration_sec]`, v.durationSec.toString());

            v.files.forEach((f, fIndex) => {
                data.append(
                    `videos[${index}][resources][${fIndex}][title]`,
                    f.name
                );
                data.append(
                    `videos[${index}][resources][${fIndex}][file_type]`,
                    f.type
                );
                if (f.file) {
                    data.append(
                        `videos[${index}][resources][${fIndex}][file]`,
                        f.file
                    );
                }
                if ((f as any).existingUrl) {
                    data.append(
                        `videos[${index}][resources][${fIndex}][existing_url]`,
                        (f as any).existingUrl
                    );
                }
            });
        });

        router.post(route('admin.module.update', moduleId), data, {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                handleClose();
            },
            onError: (errors) => {
                setErrors(errors as ModuleFormErrors);
            },
            onFinish: () => {
                setProcessing(false);
            },
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 transition-opacity"
                onClick={() => !processing && handleClose()}
            />
            {/* Modal Content */}
            <div className="relative z-10 my-8 w-full max-w-5xl rounded-xl bg-slate-100 p-6 shadow-xl">
                {/* Modal Header */}
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-slate-900">Edit Modul</h2>
                    <button
                        onClick={handleClose}
                        disabled={processing}
                        className="rounded-md p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-600 disabled:opacity-50"
                    >
                        <Icon name="close" size={24} />
                    </button>
                </div>

                {/* Modal Body - Module Form */}
                <div className="max-h-[calc(100vh-200px)] overflow-y-auto rounded-lg bg-white p-6">
                    <ModuleForm
                        data={formData}
                        errors={errors}
                        onDataChange={handleFormChange}
                        isCompact
                    />
                </div>

                {/* Modal Footer */}
                <div className="mt-6 flex items-center justify-end gap-3 border-t border-slate-200 pt-6">
                    <button
                        type="button"
                        onClick={handleClose}
                        disabled={processing}
                        className="rounded-md px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-200 disabled:opacity-50"
                    >
                        Batal
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={processing}
                        className="flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-[#00622e] disabled:opacity-50"
                    >
                        <Icon name="save" size={18} />
                        {processing ? 'Menyimpan...' : 'Simpan Perubahan'}
                    </button>
                </div>
            </div>
        </div>
    );
}
