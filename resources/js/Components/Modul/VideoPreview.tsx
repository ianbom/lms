import Icon from '@/Components/Icon';

interface VideoPreviewProps {
    thumbnailUrl: string;
    videoUrl?: string;
    onPlay?: () => void;
}

export default function VideoPreview({
    thumbnailUrl,
    videoUrl,
    onPlay,
}: VideoPreviewProps) {
    const getYoutubeId = (url: string) => {
        const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };

    const youtubeId = videoUrl ? getYoutubeId(videoUrl) : null;

    if (youtubeId) {
        return (
            <div className="group relative aspect-video overflow-hidden rounded-2xl bg-gray-900 shadow-lg">
                <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        );
    }

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
                <button className="flex items-center gap-2 rounded-md bg-black/70 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/80">
                    <Icon name="visibility" size={18} />
                    Preview Trailer
                </button>
            </div>
        </div>
    );
}
