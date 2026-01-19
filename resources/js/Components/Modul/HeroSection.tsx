import SearchBar from './SearchBar';

interface HeroSectionProps {
    searchValue: string;
    onSearchChange: (value: string) => void;
}

export default function HeroSection({
    searchValue,
    onSearchChange,
}: HeroSectionProps) {
    return (
        <div className="mb-10 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div className="max-w-2xl flex-1">
                <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
                    Eksplorasi <span className="text-primary">Modul</span>{' '}
                    Pembelajaran
                </h1>
                <p className="mb-6 text-lg text-gray-600">
                    Tingkatkan keahlianmu dengan kurikulum terstruktur dan
                    mentor ahli.
                </p>

                <SearchBar value={searchValue} onChange={onSearchChange} />
            </div>

            {/* Abstract Decoration */}
            <div className="relative hidden h-32 w-32 lg:block">
                <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                <div className="absolute bottom-8 right-8 h-16 w-16 rounded-full bg-blue-500/10 blur-xl" />
            </div>
        </div>
    );
}
