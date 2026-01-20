import Icon from '@/Components/Icon';

interface FileUploadZoneProps {
    onFilesSelected?: (files: FileList) => void;
    accept?: string;
    maxSize?: string;
    className?: string;
}

export default function FileUploadZone({
    onFilesSelected,
    accept = '.pdf,.docx,.zip',
    maxSize = '25MB',
    className = '',
}: FileUploadZoneProps) {
    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (e.dataTransfer.files.length > 0) {
            onFilesSelected?.(e.dataTransfer.files);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            onFilesSelected?.(e.target.files);
        }
    };

    return (
        <label
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className={`group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#dae7e0] p-8 text-center transition-colors hover:border-primary hover:bg-primary/5 ${className}`}
        >
            <input
                type="file"
                accept={accept}
                multiple
                onChange={handleChange}
                className="hidden"
            />
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110">
                <Icon name="cloud_upload" size={24} className="text-primary" />
            </div>
            <p className="text-sm font-semibold text-[#101814]">
                Click to upload or drag and drop
            </p>
            <p className="mt-1 text-xs text-[#a0b3a9]">
                PDF, DOCX, or ZIP (max {maxSize})
            </p>
        </label>
    );
}
