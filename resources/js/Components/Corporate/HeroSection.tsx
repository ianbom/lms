const video = {
    id: 'IEnrnXTUn88',
    title: 'Corporate Hero Video',
};

export default function HeroSection() {
    return (
        <section className="w-full max-w-[1440px] px-4 pb-16 pt-10 md:px-10">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
                <iframe
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&playsinline=1&rel=0&controls=0&modestbranding=1&showinfo=0&fs=0&disablekb=1&iv_load_policy=3&cc_load_policy=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    tabIndex={-1}
                />
                <div className="pointer-events-none absolute inset-0 bg-black/10" />
            </div>
        </section>
    );
}
