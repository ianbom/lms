import Icon from '@/Components/Icon';

export default function LogoGrid() {
    return (
        <section className="w-full border-t border-[#f0f4f2] bg-white py-16">
            <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
                <h3 className="mb-10 text-center text-sm font-bold uppercase tracking-widest text-gray-400">
                    Dipercaya oleh
                </h3>
                <div className="grid grid-cols-2 items-center justify-items-center gap-8 opacity-70 md:grid-cols-4 md:gap-16">
                    {/* Logo 1: Google Style */}
                    <div className="flex h-8 w-auto items-center justify-center grayscale transition-all duration-300 hover:grayscale-0">
                        <div className="flex items-center gap-2">
                            <span className="text-3xl text-gray-700">
                                <Icon name="cloud_circle" size={32} />
                            </span>
                            <span className="font-sans text-xl font-bold text-gray-700">
                                CloudCorp
                            </span>
                        </div>
                    </div>
                    {/* Logo 2: Microsoft Style */}
                    <div className="flex h-8 w-auto items-center justify-center grayscale transition-all duration-300 hover:grayscale-0">
                        <div className="flex items-center gap-2">
                            <span className="text-3xl text-gray-700">
                                <Icon name="grid_view" size={32} />
                            </span>
                            <span className="font-sans text-xl font-bold text-gray-700">
                                Nexus
                            </span>
                        </div>
                    </div>
                    {/* Logo 3: Spotify Style */}
                    <div className="flex h-8 w-auto items-center justify-center grayscale transition-all duration-300 hover:grayscale-0">
                        <div className="flex items-center gap-2">
                            <span className="text-3xl text-gray-700">
                                <Icon name="graphic_eq" size={32} />
                            </span>
                            <span className="font-sans text-xl font-bold text-gray-700">
                                AudioStream
                            </span>
                        </div>
                    </div>
                    {/* Logo 4: Airbnb Style */}
                    <div className="flex h-8 w-auto items-center justify-center grayscale transition-all duration-300 hover:grayscale-0">
                        <div className="flex items-center gap-2">
                            <span className="text-3xl text-gray-700">
                                <Icon name="travel_explore" size={32} />
                            </span>
                            <span className="font-sans text-xl font-bold text-gray-700">
                                Destiny
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
