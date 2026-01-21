import Icon from '@/Components/Icon';
import { useCallback, useEffect, useRef, useState } from 'react';
import YouTube, { YouTubeEvent, YouTubePlayer } from 'react-youtube';

interface VideoPlayerProps {
    videoId: string;
    onPlay?: () => void;
    onPause?: () => void;
    onEnd?: () => void;
    onProgress?: (progress: number) => void;
}

// All possible YouTube quality levels
type QualityLevel =
    | 'auto'
    | 'highres'
    | 'hd2160'
    | 'hd1440'
    | 'hd1080'
    | 'hd720'
    | 'large'
    | 'medium'
    | 'small'
    | 'tiny'
    | 'default';

const QUALITY_LABELS: Record<string, string> = {
    auto: 'Auto',
    highres: '4K+',
    hd2160: '2160p (4K)',
    hd1440: '1440p',
    hd1080: '1080p',
    hd720: '720p',
    large: '480p',
    medium: '360p',
    small: '240p',
    tiny: '144p',
    default: 'Default',
};

export default function VideoPlayer({
    videoId,
    onPlay,
    onPause,
    onEnd,
    onProgress,
}: VideoPlayerProps) {
    const playerRef = useRef<YouTubePlayer | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showQualityMenu, setShowQualityMenu] = useState(false);
    const [availableQualities, setAvailableQualities] = useState<
        QualityLevel[]
    >([]);
    const [currentQuality, setCurrentQuality] = useState<QualityLevel>('auto');
    const progressIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
        null,
    );

    // YouTube player options
    const opts = {
        width: '100%',
        height: '100%',
        playerVars: {
            autoplay: 0,
            controls: 0, // Hide YouTube native controls (we use custom)
            disablekb: 0,
            fs: 0, // Disable YouTube fullscreen (we use custom)
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            playsinline: 1,
            origin: window.location.origin,
            enablejsapi: 1,
        },
    };

    // Format time (seconds to MM:SS)
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Handle fullscreen change
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener(
                'fullscreenchange',
                handleFullscreenChange,
            );
        };
    }, []);

    // Handle player ready
    const handleReady = (event: YouTubeEvent) => {
        playerRef.current = event.target;
        setDuration(event.target.getDuration());
        setIsReady(true);

        // Get available quality levels
        const qualities = event.target.getAvailableQualityLevels();
        if (qualities && qualities.length > 0) {
            setAvailableQualities(qualities as QualityLevel[]);
            setCurrentQuality(event.target.getPlaybackQuality());
        }
    };

    // Update progress tracking
    const startProgressTracking = useCallback(() => {
        if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
        }
        progressIntervalRef.current = setInterval(() => {
            if (playerRef.current) {
                const current = playerRef.current.getCurrentTime();
                const total = playerRef.current.getDuration();
                setCurrentTime(current);
                const prog = (current / total) * 100;
                setProgress(prog);
                onProgress?.(prog);
            }
        }, 500);
    }, [onProgress]);

    const stopProgressTracking = () => {
        if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
            progressIntervalRef.current = null;
        }
    };

    // Handle state change
    const handleStateChange = (event: YouTubeEvent) => {
        const state = event.data;
        if (state === 1) {
            // Playing - get available quality levels now (YouTube provides them after playback starts)
            setIsPlaying(true);
            startProgressTracking();
            onPlay?.();

            // Fetch available qualities when video starts playing
            if (playerRef.current) {
                const qualities = playerRef.current.getAvailableQualityLevels();
                if (qualities && qualities.length > 0) {
                    setAvailableQualities(qualities as QualityLevel[]);
                    const currentQ = playerRef.current.getPlaybackQuality();
                    if (currentQ) {
                        setCurrentQuality(currentQ as QualityLevel);
                    }
                }
            }
        } else if (state === 2) {
            setIsPlaying(false);
            stopProgressTracking();
            onPause?.();
        } else if (state === 0) {
            setIsPlaying(false);
            stopProgressTracking();
            onEnd?.();
        }
    };

    // Custom controls
    const togglePlayPause = () => {
        if (playerRef.current) {
            if (isPlaying) {
                playerRef.current.pauseVideo();
            } else {
                playerRef.current.playVideo();
            }
        }
    };

    const skipForward = () => {
        if (playerRef.current) {
            const current = playerRef.current.getCurrentTime();
            playerRef.current.seekTo(current + 10, true);
        }
    };

    const skipBackward = () => {
        if (playerRef.current) {
            const current = playerRef.current.getCurrentTime();
            playerRef.current.seekTo(Math.max(0, current - 10), true);
        }
    };

    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        if (playerRef.current && duration > 0) {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const percentage = clickX / rect.width;
            const seekTime = percentage * duration;
            playerRef.current.seekTo(seekTime, true);
            setCurrentTime(seekTime);
            setProgress(percentage * 100);
        }
    };

    const toggleFullscreen = async () => {
        if (!containerRef.current) return;

        try {
            if (!document.fullscreenElement) {
                await containerRef.current.requestFullscreen();
            } else {
                await document.exitFullscreen();
            }
        } catch (err) {
            console.error('Error attempting to toggle fullscreen:', err);
        }
    };

    const changeQuality = (quality: QualityLevel) => {
        if (playerRef.current) {
            if (quality === 'auto') {
                // For auto, use the highest available quality
                const qualities = playerRef.current.getAvailableQualityLevels();
                if (qualities && qualities.length > 0) {
                    playerRef.current.setPlaybackQuality(qualities[0]);
                }
            } else {
                playerRef.current.setPlaybackQuality(quality);
            }
            setCurrentQuality(quality);
            setShowQualityMenu(false);
        }
    };

    const getCurrentQualityLabel = () => {
        if (currentQuality === 'auto') {
            // Get actual playing quality
            if (playerRef.current) {
                const actualQuality = playerRef.current.getPlaybackQuality();
                return QUALITY_LABELS[actualQuality as QualityLevel] || 'Auto';
            }
            return 'Auto';
        }
        return QUALITY_LABELS[currentQuality] || 'Auto';
    };

    // Prevent right-click context menu on video
    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        return false;
    };

    return (
        <div
            ref={containerRef}
            className={`video-player-container group relative aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black shadow-2xl shadow-primary/10 ring-1 ring-white/10 ${isFullscreen ? 'rounded-none' : ''
                }`}
            onContextMenu={handleContextMenu}
            style={{ userSelect: 'none' }}
        >
            {/* YouTube Player */}
            <div
                className="absolute inset-0"
                style={{ pointerEvents: isReady ? 'auto' : 'none' }}
            >
                <YouTube
                    videoId={videoId}
                    opts={opts}
                    onReady={handleReady}
                    onStateChange={handleStateChange}
                    className="absolute inset-0 h-full w-full"
                    iframeClassName="absolute inset-0 h-full w-full"
                />
            </div>

            {/* Loading overlay */}
            {!isReady && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                    <div className="flex flex-col items-center gap-3">
                        <div className="size-12 animate-spin rounded-full border-4 border-primary/30 border-t-primary" />
                        <span className="text-sm font-medium text-white/70">
                            Memuat video...
                        </span>
                    </div>
                </div>
            )}

            {/* Custom Controls Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {/* Center controls - hidden in fullscreen mode */}
                {!isFullscreen && (
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center gap-6">
                        <button
                            onClick={skipBackward}
                            className="pointer-events-auto flex size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20"
                            title="Mundur 10 detik"
                        >
                            <Icon name="replay_10" size={28} />
                        </button>

                        <button
                            onClick={togglePlayPause}
                            className="pointer-events-auto flex size-16 items-center justify-center rounded-full bg-primary/90 text-white shadow-lg shadow-primary/30 transition-all hover:scale-110 hover:bg-primary"
                            title={isPlaying ? 'Pause' : 'Play'}
                        >
                            <Icon
                                name={isPlaying ? 'pause' : 'play_arrow'}
                                size={36}
                            />
                        </button>

                        <button
                            onClick={skipForward}
                            className="pointer-events-auto flex size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/20"
                            title="Maju 10 detik"
                        >
                            <Icon name="forward_10" size={28} />
                        </button>
                    </div>
                )}

                {/* Bottom controls - relative positioning with z-index */}
                <div className="relative z-10 flex flex-col gap-3 px-4 pb-4 pt-8 sm:px-6">
                    {/* Progress Bar */}
                    <div
                        className="group/progress relative h-1.5 w-full cursor-pointer overflow-hidden rounded-full bg-white/20 transition-all hover:h-2.5"
                        onClick={handleSeek}
                    >
                        <div className="absolute h-full w-full bg-white/10" />
                        <div
                            className="absolute h-full rounded-full bg-primary/50 blur-sm"
                            style={{ width: `${progress}%` }}
                        />
                        <div
                            className="relative h-full rounded-full bg-gradient-to-r from-primary via-primary to-emerald-400 transition-all"
                            style={{ width: `${progress}%` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                        </div>
                        <div
                            className="absolute top-1/2 size-4 -translate-y-1/2 rounded-full border-2 border-white bg-primary opacity-0 shadow-lg transition-opacity group-hover/progress:opacity-100"
                            style={{ left: `calc(${progress}% - 8px)` }}
                        />
                    </div>

                    {/* Controls Row */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={togglePlayPause}
                                className="flex size-9 items-center justify-center rounded-lg text-white transition-all hover:bg-white/10"
                            >
                                <Icon
                                    name={isPlaying ? 'pause' : 'play_arrow'}
                                    size={24}
                                />
                            </button>

                            <button
                                onClick={skipBackward}
                                className="hidden size-9 items-center justify-center rounded-lg text-white/80 transition-all hover:bg-white/10 hover:text-white sm:flex"
                            >
                                <Icon name="replay_10" size={20} />
                            </button>
                            <button
                                onClick={skipForward}
                                className="hidden size-9 items-center justify-center rounded-lg text-white/80 transition-all hover:bg-white/10 hover:text-white sm:flex"
                            >
                                <Icon name="forward_10" size={20} />
                            </button>

                            <span className="text-sm font-medium text-white">
                                <span className="text-primary">
                                    {formatTime(currentTime)}
                                </span>
                                <span className="mx-1.5 text-white/50">/</span>
                                <span className="text-white/70">
                                    {formatTime(duration)}
                                </span>
                            </span>
                        </div>

                        {/* Right controls */}
                        <div className="flex items-center gap-1">
                            {/* Quality selector */}
                            <div className="relative">
                                <button
                                    onClick={() =>
                                        setShowQualityMenu(!showQualityMenu)
                                    }
                                    className="flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1.5 text-xs font-bold text-white transition-all hover:bg-white/20"
                                    title="Kualitas Video"
                                >
                                    <Icon name="hd" size={16} />
                                    <span>{getCurrentQualityLabel()}</span>
                                    <Icon
                                        name={
                                            showQualityMenu
                                                ? 'expand_less'
                                                : 'expand_more'
                                        }
                                        size={16}
                                    />
                                </button>

                                {/* Quality menu */}
                                {showQualityMenu && (
                                    <div className="absolute bottom-full right-0 mb-2 min-w-[120px] overflow-hidden rounded-lg border border-white/10 bg-gray-900/95 shadow-xl backdrop-blur-sm">
                                        <div className="px-3 py-2 text-xs font-semibold text-white/60">
                                            Kualitas
                                        </div>
                                        <div className="max-h-64 overflow-y-auto">
                                            <button
                                                onClick={() =>
                                                    changeQuality('auto')
                                                }
                                                className={`flex w-full items-center justify-between px-3 py-2 text-sm transition-colors hover:bg-white/10 ${currentQuality === 'auto'
                                                        ? 'bg-primary/20 font-semibold text-primary'
                                                        : 'text-white'
                                                    }`}
                                            >
                                                <span>Auto</span>
                                                {currentQuality === 'auto' && (
                                                    <Icon
                                                        name="check"
                                                        size={16}
                                                    />
                                                )}
                                            </button>
                                            {availableQualities
                                                .filter((q) => q !== 'auto')
                                                .map((quality) => (
                                                    <button
                                                        key={quality}
                                                        onClick={() =>
                                                            changeQuality(
                                                                quality,
                                                            )
                                                        }
                                                        className={`flex w-full items-center justify-between px-3 py-2 text-sm transition-colors hover:bg-white/10 ${currentQuality ===
                                                                quality
                                                                ? 'bg-primary/20 font-semibold text-primary'
                                                                : 'text-white'
                                                            }`}
                                                    >
                                                        <span>
                                                            {QUALITY_LABELS[
                                                                quality
                                                            ] || quality}
                                                        </span>
                                                        {currentQuality ===
                                                            quality && (
                                                                <Icon
                                                                    name="check"
                                                                    size={16}
                                                                />
                                                            )}
                                                    </button>
                                                ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Fullscreen */}
                            <button
                                onClick={toggleFullscreen}
                                className="flex size-9 items-center justify-center rounded-lg text-white/80 transition-all hover:bg-white/10 hover:text-primary"
                                title={
                                    isFullscreen
                                        ? 'Keluar Fullscreen'
                                        : 'Fullscreen'
                                }
                            >
                                <Icon
                                    name={
                                        isFullscreen
                                            ? 'fullscreen_exit'
                                            : 'fullscreen'
                                    }
                                    size={24}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Security overlay */}
            <div
                className="pointer-events-none absolute inset-0 select-none"
                onContextMenu={handleContextMenu}
            />
        </div>
    );
}
