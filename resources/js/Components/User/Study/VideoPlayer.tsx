import Icon from '@/Components/Icon';
import { useCallback, useEffect, useRef, useState } from 'react';
import YouTube, { YouTubeEvent, YouTubePlayer } from 'react-youtube';

interface VideoPlayerProps {
    videoId: string;
    initialTime?: number;
    onPlay?: () => void;
    onPause?: () => void;
    onEnd?: () => void;
    onProgress?: (progressPercent: number, currentTime: number) => void;
}

export default function VideoPlayer({
    videoId,
    initialTime = 0,
    onPlay,
    onPause,
    onEnd,
    onProgress,
}: VideoPlayerProps) {
    const playerRef = useRef<YouTubePlayer | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(initialTime);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Volume state
    const [volume, setVolume] = useState(100);
    const [isMuted, setIsMuted] = useState(false);

    const hasSeekToInitial = useRef(false);
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

    // Cleanup intervals on unmount
    useEffect(() => {
        return () => {
            if (progressIntervalRef.current) {
                clearInterval(progressIntervalRef.current);
            }
        };
    }, []);

    // Handle player ready
    const handleReady = (event: YouTubeEvent) => {
        playerRef.current = event.target;
        setDuration(event.target.getDuration());
        setIsReady(true);

        // Ensure volume is set correctly
        if (event.target.isMuted()) {
            setIsMuted(true);
            setVolume(0);
        } else {
            setVolume(event.target.getVolume());
        }

        // Seek to initial time if provided
        if (initialTime > 0 && !hasSeekToInitial.current) {
            event.target.seekTo(initialTime, true);
            hasSeekToInitial.current = true;
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
                onProgress?.(prog, current);
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
            // Playing
            setIsPlaying(true);
            startProgressTracking();
            onPlay?.();
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

    // Volume controls
    const toggleMute = () => {
        if (playerRef.current) {
            if (isMuted) {
                playerRef.current.unMute();
                setIsMuted(false);
                setVolume(playerRef.current.getVolume());
            } else {
                playerRef.current.mute();
                setIsMuted(true);
                setVolume(0);
            }
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseInt(e.target.value);
        setVolume(newVolume);

        if (playerRef.current) {
            playerRef.current.setVolume(newVolume);
            if (newVolume === 0) {
                playerRef.current.mute();
                setIsMuted(true);
            } else if (isMuted) {
                playerRef.current.unMute();
                setIsMuted(false);
            }
        }
    };

    // Prevent right-click context menu on video
    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        return false;
    };

    return (
        <div
            ref={containerRef}
            className={`video-player-container group relative aspect-video w-full overflow-hidden rounded-md bg-gradient-to-br from-gray-900 to-black shadow-2xl shadow-primary/10 ring-1 ring-white/10 ${
                isFullscreen ? 'rounded-none' : ''
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
                                className="flex size-9 items-center justify-center rounded-md text-white transition-all hover:bg-white/10"
                            >
                                <Icon
                                    name={isPlaying ? 'pause' : 'play_arrow'}
                                    size={24}
                                />
                            </button>

                            <button
                                onClick={skipBackward}
                                className="hidden size-9 items-center justify-center rounded-md text-white/80 transition-all hover:bg-white/10 hover:text-white sm:flex"
                            >
                                <Icon name="replay_10" size={20} />
                            </button>
                            <button
                                onClick={skipForward}
                                className="hidden size-9 items-center justify-center rounded-md text-white/80 transition-all hover:bg-white/10 hover:text-white sm:flex"
                            >
                                <Icon name="forward_10" size={20} />
                            </button>

                            {/* Volume Control */}
                            <div className="group/volume flex items-center">
                                <button
                                    onClick={toggleMute}
                                    className="flex size-9 items-center justify-center rounded-md text-white/80 transition-all hover:bg-white/10 hover:text-white"
                                >
                                    <Icon
                                        name={
                                            isMuted || volume === 0
                                                ? 'volume_off'
                                                : volume < 50
                                                  ? 'volume_down'
                                                  : 'volume_up'
                                        }
                                        size={22}
                                    />
                                </button>
                                <div className="w-0 overflow-hidden px-0 transition-all duration-300 ease-out group-hover/volume:w-32 group-hover/volume:px-3">
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={volume}
                                        onChange={handleVolumeChange}
                                        className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-white/30 accent-white"
                                    />
                                </div>
                            </div>

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
                            {/* Fullscreen */}
                            <button
                                onClick={toggleFullscreen}
                                className="flex size-9 items-center justify-center rounded-md text-white/80 transition-all hover:bg-white/10 hover:text-primary"
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
