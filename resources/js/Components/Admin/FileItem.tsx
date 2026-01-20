import Icon from '@/Components/Icon';

export interface UploadedFile {
    id: number;
    name: string;
    size: string;
    type: 'pdf' | 'doc' | 'zip' | 'other';
    uploadedAt?: string;
    progress?: number;
    isUploading?: boolean;
}

interface FileItemProps {
    file: UploadedFile;
    onRemove?: (id: number) => void;
}

const iconConfig: Record<
    UploadedFile['type'],
    { icon: string; bgColor: string; iconColor: string }
> = {
    pdf: {
        icon: 'picture_as_pdf',
        bgColor: 'bg-red-50',
        iconColor: 'text-red-500',
    },
    doc: {
        icon: 'description',
        bgColor: 'bg-blue-50',
        iconColor: 'text-blue-500',
    },
    zip: {
        icon: 'folder_zip',
        bgColor: 'bg-yellow-50',
        iconColor: 'text-yellow-600',
    },
    other: {
        icon: 'insert_drive_file',
        bgColor: 'bg-gray-50',
        iconColor: 'text-gray-500',
    },
};

export default function FileItem({ file, onRemove }: FileItemProps) {
    const config = iconConfig[file.type];

    return (
        <div className="group relative flex items-center overflow-hidden rounded-lg border border-[#e5e7eb] bg-white p-3">
            {/* Progress bar for uploading */}
            {file.isUploading && (
                <div className="absolute bottom-0 left-0 h-1 w-full bg-[#f0f5f2]">
                    <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${file.progress || 0}%` }}
                    />
                </div>
            )}

            {/* File Icon */}
            <div
                className={`mr-4 flex h-10 w-10 items-center justify-center rounded-lg ${config.bgColor}`}
            >
                <Icon
                    name={config.icon}
                    size={24}
                    className={config.iconColor}
                />
            </div>

            {/* File Info */}
            <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-[#101814]">
                    {file.name}
                </p>
                {file.isUploading ? (
                    <p className="flex items-center gap-1 text-xs text-[#5e6a62]">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                        Uploading... {file.progress}%
                    </p>
                ) : (
                    <p className="text-xs text-[#a0b3a9]">
                        {file.size}
                        {file.uploadedAt && ` • ${file.uploadedAt}`}
                    </p>
                )}
            </div>

            {/* Remove Button */}
            <button
                type="button"
                onClick={() => onRemove?.(file.id)}
                className={`rounded-lg p-2 transition-colors ${
                    file.isUploading
                        ? 'text-[#a0b3a9] hover:text-[#5e6a62]'
                        : 'text-[#a0b3a9] opacity-0 hover:bg-red-50 hover:text-red-500 group-hover:opacity-100'
                }`}
            >
                <Icon name={file.isUploading ? 'close' : 'delete'} size={20} />
            </button>
        </div>
    );
}
