import { useCallback, useEffect, useRef, useState } from 'react';

const images = [
    '/HeroImg/1.png',
    '/HeroImg/3.png',
    '/HeroImg/4.png',
    '/HeroImg/5.png',
    '/HeroImg/6.png',
];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const totalSlides = images.length;

    const goToSlide = useCallback(
        (index: number) => {
            if (isTransitioning) return;
            setIsTransitioning(true);
            setCurrentIndex(index);
            setTimeout(() => setIsTransitioning(false), 700);
        },
        [isTransitioning],
    );

    const nextSlide = useCallback(() => {
        goToSlide((currentIndex + 1) % totalSlides);
    }, [currentIndex, totalSlides, goToSlide]);

    const prevSlide = useCallback(() => {
        goToSlide((currentIndex - 1 + totalSlides) % totalSlides);
    }, [currentIndex, totalSlides, goToSlide]);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [nextSlide]);

    const handleDotClick = (index: number) => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        goToSlide(index);
    };

    return (
        <section className="w-full max-w-[1440px] px-4 pb-16 pt-10 md:px-10">
            {/* Slider Container */}
            <div className="group/slider relative w-full overflow-hidden rounded-2xl md:h-[500px]">
                {/* Slides */}
                <div
                    className="flex h-full transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="relative h-64 w-full flex-shrink-0 md:h-full"
                        >
                            <div
                                className="h-full w-full bg-cover bg-center"
                                style={{ backgroundImage: `url('${src}')` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                    ))}
                </div>

                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#111814] opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white group-hover/slider:opacity-100"
                    aria-label="Previous slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#111814] opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white group-hover/slider:opacity-100"
                    aria-label="Next slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`h-2.5 rounded-full transition-all duration-500 ${
                                index === currentIndex
                                    ? 'w-8 bg-white'
                                    : 'w-2.5 bg-white/50 hover:bg-white/80'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
