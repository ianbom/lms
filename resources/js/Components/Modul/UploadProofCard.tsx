import Icon from '@/Components/Icon';
import { useState } from 'react';

interface UploadProofCardProps {
    onFileSelect: (file: File) => void;
    error?: string;
}

export default function UploadProofCard({
    onFileSelect,
    error,
}: UploadProofCardProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [fileName, setFileName] = useState<string | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleFile = (file: File) => {
        setFileName(file.name);
        onFileSelect(file);

        if (file.type.startsWith('image/')) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        } else {
            setPreviewUrl(null);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) handleFile(file);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) handleFile(file);
    };

    return (
        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-gray-100 bg-gray-50/50 px-6 py-4">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary-light text-primary">
                    <Icon name="upload_file" size={22} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                    Upload Bukti Pembayaran
                </h3>
            </div>

            {/* Content */}
            <div className="p-6">
                <label
                    className={`group flex min-h-[180px] w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed transition-all ${
                        isDragging
                            ? 'border-primary bg-primary-light'
                            : fileName
                              ? 'border-green-400 bg-green-50'
                              : 'border-gray-300 bg-gray-50 hover:border-primary hover:bg-primary-light/30'
                    }`}
                    htmlFor="file-upload"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <div className="flex flex-col items-center justify-center p-6">
                        {previewUrl ? (
                            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                                <img
                                    src={previewUrl}
                                    alt="Preview"
                                    className="h-full w-full object-contain"
                                />
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setPreviewUrl(null);
                                        setFileName(null);
                                        // Reset input logic (handled by parent typically, but UI reset here)
                                    }}
                                    className="absolute right-2 top-2 rounded-full bg-white/80 p-1 text-gray-600 hover:bg-white hover:text-red-500"
                                >
                                    <Icon name="close" size={20} />
                                </button>
                            </div>
                        ) : fileName ? (
                            <>
                                <div className="mb-3 flex size-14 items-center justify-center rounded-full bg-green-100">
                                    <Icon
                                        name="check_circle"
                                        size={32}
                                        className="text-green-600"
                                    />
                                </div>
                                <p className="mb-1 text-sm font-semibold text-green-700">
                                    File berhasil dipilih
                                </p>
                                <p className="max-w-[200px] truncate text-xs text-gray-500">
                                    {fileName}
                                </p>
                            </>
                        ) : (
                            <>
                                <div className="mb-3 flex size-14 items-center justify-center rounded-full bg-white shadow-sm transition-transform group-hover:scale-110">
                                    <Icon
                                        name="cloud_upload"
                                        size={28}
                                        className="text-gray-400 group-hover:text-primary"
                                    />
                                </div>
                                <p className="mb-1 text-sm text-gray-600">
                                    <span className="font-semibold text-primary">
                                        Klik untuk upload
                                    </span>{' '}
                                    atau geser file ke sini
                                </p>
                                <p className="text-xs text-gray-400">
                                    JPG, PNG atau PDF (MAX. 2MB)
                                </p>
                            </>
                        )}
                    </div>
                    <input
                        id="file-upload"
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </label>
                {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            </div>
        </section>
    );
}
