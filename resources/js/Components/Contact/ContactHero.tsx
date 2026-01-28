import Icon from '@/Components/Icon';

export default function ContactHero() {
    return (
        <div className="relative hidden w-1/2 flex-col justify-end overflow-hidden bg-primary p-12 lg:flex">
            <div className="absolute inset-0 z-0">
                <img
                    alt="Corporate Training Session"
                    className="h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaGg3mi1RpXhtVHF1MXQuTdeqZNluGfSG__FBzF2wgw7WnFfxRhKf-kdfX5cffzbdQNMHgIzsojAMR9nCKzVibr1sqW-aar4814-GzGZ_0Ov_Tp6--B-47E4xUVqJTfsbUFTggZOUG5z-w2bmngmmFMXzUf-d29yva6Q37M5HZY5ipa0oSbHh-QGcKlRiUBBmZ_-BNGsqPx4C1BOQJnKoWVtXk2CpyoOH6v7tleBn7IXdEQiTB04yTkrBzs4sMuM_UJVDfRW7WrMCK"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <div className="relative z-10 text-white">
                <h2 className="mb-8 text-3xl font-bold leading-snug">
                    Empowering Teams,
                    <br />
                    Transforming Leaders.
                </h2>

                <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md">
                    <div className="mb-3 flex gap-1 text-yellow-400">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Icon
                                key={star}
                                name="star"
                                className="fill-current text-[20px]"
                                // style={{ fontVariationSettings: "'FILL' 1" }}
                            />
                        ))}
                    </div>
                    <p className="mb-4 text-sm font-medium italic leading-relaxed text-white/90">
                        "The leadership program from Impact Academy completely
                        revitalized our management structure. The practical
                        approach and expert guidance were invaluable for our
                        company's growth."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                            JS
                        </div>
                        <div>
                            <p className="text-sm font-bold text-white">
                                Jessica Setiawan
                            </p>
                            <p className="text-xs text-white/70">
                                HR Director, Tech Nusantara
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
