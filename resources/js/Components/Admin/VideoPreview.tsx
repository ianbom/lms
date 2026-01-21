import Icon from '@/Components/Icon';

interface VideoPreviewProps {
    title?: string;
    thumbnailUrl?: string;
    visibility?: string;
    quality?: string;
    subtitles?: string;
    onOpenInYouTube?: () => void;
    className?: string;
}

export default function VideoPreview({
    title = 'Untitled Video',
    thumbnailUrl,
    visibility = 'Public',
    quality = '1080p HD',
    subtitles = 'Auto-generated (EN)',
    onOpenInYouTube,
    className = '',
}: VideoPreviewProps) {
    return (
        <div
            className={`overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-lg shadow-gray-200/50 ${className}`}
        >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#e5e7eb] px-6 py-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#101814]">
                    Live Preview
                </h3>
            </div>

            {/* Video Player Container */}
            <div className="group relative aspect-video cursor-pointer bg-black">
                {thumbnailUrl ? (
                    <img
                        src={thumbnailUrl}
                        alt="Video thumbnail"
                        className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-60"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1a221e] to-[#0f1512]">
                        <Icon
                            name="movie"
                            size={48}
                            className="text-[#5e6a62]"
                        />
                    </div>
                )}

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        <Icon
                            name="play_arrow"
                            size={40}
                            className="ml-1 text-white"
                        />
                    </div>
                </div>

                {/* Title Overlay */}
                <div className="absolute left-4 top-4 max-w-[80%] truncate font-medium text-white drop-shadow-md">
                    {title}
                </div>
            </div>

            {/* Metadata */}
            <div className="space-y-4 p-6">
                {/* Open in YouTube Button */}
                <div className="mt-2 border-t border-[#e5e7eb] pt-4">
                    <button
                        type="button"
                        onClick={onOpenInYouTube}
                        className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#dae7e0] py-2.5 text-sm font-semibold text-[#5e6a62] transition-colors hover:bg-[#f9fafb]"
                    >
                        <Icon name="open_in_new" size={18} />
                        Open in YouTube
                    </button>
                </div>
            </div>
        </div>
    );
}
