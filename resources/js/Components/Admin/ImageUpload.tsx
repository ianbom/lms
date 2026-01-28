import Icon from '@/Components/Icon';
import { useState } from 'react';
import ImageCropper from './ImageCropper';

interface ImageUploadProps {
    label?: string;
    value?: string;
    onChange?: (file: File | null) => void;
    aspectRatio?: string;
    aspectNumber?: number; // Added for cropping
    maxSize?: string;
    accept?: string;
    className?: string;
    error?: string;
}

export default function ImageUpload({
    label,
    value,
    onChange,
    aspectRatio = '16:9 Preview',
    aspectNumber = 16 / 9, // Default aspect ratio for cropping
    maxSize = '2MB',
    accept = '.jpg,.png',
    className = '',
    error,
}: ImageUploadProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isCropperOpen, setIsCropperOpen] = useState(false);

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            processFile(file);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            processFile(file);
        }
        // Reset input value so same file can be selected again
        e.target.value = '';
    };

    const processFile = (file: File) => {
        const reader = new FileReader();
        reader.onload = () => {
            setSelectedImage(reader.result as string);
            setIsCropperOpen(true);
        };
        reader.readAsDataURL(file);
    };

    const handleCropComplete = (croppedBlob: Blob) => {
        const file = new File([croppedBlob], 'cropped-image.jpg', {
            type: 'image/jpeg',
        });
        onChange?.(file);
        setIsCropperOpen(false);
        setSelectedImage(null);
    };

    const handleCancelCrop = () => {
        setIsCropperOpen(false);
        setSelectedImage(null);
    };

    return (
        <>
            <div className={`flex flex-col gap-3 ${className}`}>
                {label && (
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#5e6a62]">
                        {label}
                    </h3>
                )}

                {/* Preview Area */}
                <div
                    className={`flex aspect-video items-center justify-center rounded-xl border border-dashed bg-[#f9fafb] ${
                        error ? 'border-red-500' : 'border-[#dae7e0]'
                    }`}
                >
                    {value ? (
                        <img
                            src={value}
                            alt="Preview"
                            className="h-full w-full rounded-xl object-cover"
                        />
                    ) : (
                        <div className="flex flex-col items-center gap-2">
                            <Icon
                                name="image"
                                size={32}
                                className="text-[#c0d4c8]"
                            />
                            <span className="text-xs text-[#a0b3a9]">
                                {aspectRatio}
                            </span>
                        </div>
                    )}
                </div>

                {/* Upload Area */}
                <label
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className={`flex cursor-pointer flex-col items-center gap-1 rounded-md border border-dashed p-6 transition-colors hover:bg-primary/5 ${
                        error
                            ? 'border-red-500 hover:border-red-500'
                            : 'border-[#dae7e0] hover:border-primary'
                    }`}
                >
                    <input
                        type="file"
                        accept={accept}
                        onChange={handleChange}
                        className="hidden"
                    />
                    <p className="text-sm text-[#5e6a62]">
                        Drag and drop or click to upload
                    </p>
                    <p className="text-xs text-[#a0b3a9]">
                        JPG, PNG up to {maxSize}
                    </p>
                </label>
                {error && <span className="text-sm text-red-500">{error}</span>}
            </div>

            {/* Image Cropper Modal */}
            {isCropperOpen && selectedImage && (
                <ImageCropper
                    image={selectedImage}
                    aspect={aspectNumber}
                    onCropComplete={handleCropComplete}
                    onCancel={handleCancelCrop}
                />
            )}
        </>
    );
}
