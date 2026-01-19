import Icon from '@/Components/Icon';

interface VideoPreviewProps {
    thumbnailUrl: string;
    onPlay?: () => void;
}

export default function VideoPreview({
    thumbnailUrl,
    onPlay,
}: VideoPreviewProps) {
    return (
        <div className="group relative aspect-video overflow-hidden rounded-2xl bg-gray-900 shadow-lg">
            {/* Thumbnail */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${thumbnailUrl}')` }}
            />

            {/* Play Button Overlay */}
            <button
                onClick={onPlay}
                className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40"
            >
                <div className="transform rounded-full bg-primary p-4 shadow-lg transition-transform hover:scale-110">
                    <Icon name="play_arrow" size={40} className="text-white" />
                </div>
            </button>

            {/* Preview Badge */}
            <div className="absolute bottom-4 right-4">
                <button className="flex items-center gap-2 rounded-lg bg-black/70 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/80">
                    <Icon name="visibility" size={18} />
                    Preview Trailer
                </button>
            </div>
        </div>
    );
}
