import Icon from '@/Components/Icon';

export default function HeroCard() {
    return (
        <div className="flex flex-col h-full overflow-hidden rounded-xl border border-border-light bg-white shadow-card md:flex-row">
            {/* Thumbnail */}
            <div className="relative aspect-video w-full bg-gray-100 md:aspect-auto md:w-2/5">
                <img
                    alt="Digital Marketing Course Cover"
                    className="h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj-_rpRBoiOmJSH9EzsITJTusW48LxKiM41a4AiyQw1v8w-z5o12JP72FqvF72sNgDbLPxcnAdUAztVr9vlUHL42v3oYt-Autw2YLMUWRxWOClwLZRt-HEyq9ux-S1zz_KGPndzmILyHOO_-uzjTOc11l2hnRi3oOxPJ78VTJu59MyRlOhobdai_tFtk2hP3NCABZwsIpl7uFL5vNJAR0o4vrv_7i-UotR1QiyhbZRcTFqtoWD-OoxbCZwZJh7YwwFhFbH-XHXWMfU"
                />
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    Video Tutorial
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <div className="mb-4">
                    <span className="mb-2 inline-block rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                        Sedang Dipelajari
                    </span>
                    <h3 className="mb-1 text-2xl font-bold text-slate-900">
                        Digital Marketing Mastery
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Icon name="play_circle" className="text-base" />
                        <span>Modul 2 • Video 3</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6 w-full">
                    <div className="mb-2 flex justify-between text-sm font-medium">
                        <span className="text-slate-900">Progress</span>
                        <span className="text-primary">45%</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-gray-100">
                        <div
                            className="h-2.5 rounded-full bg-primary transition-all duration-500"
                            style={{ width: '45%' }}
                        ></div>
                    </div>
                </div>

                <button className="flex w-fit items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover">
                    <span>Lanjutkan Belajar</span>
                    <Icon name="arrow_forward" size={18} />
                </button>
            </div>
        </div>
    );
}
