export default function HeroSection() {
    return (
        <section className="w-full max-w-[1440px] px-4 pb-16 pt-10 md:px-10">
            <div className="mb-10 flex flex-col gap-6 text-center md:text-left">
                <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-[#111814] md:text-6xl">
                    Perkuat Kapasitas Tim Anda Bersama{' '}
                    <span className="text-primary">Impact Academy</span> <br />
                </h1>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 md:h-[500px] md:grid-cols-4">
                {/* Tall Image Left */}
                <div className="group relative h-64 overflow-hidden rounded-2xl md:col-span-1 md:h-full">
                    <div
                        className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{
                            backgroundImage:
                                "url('/ImpactCompressed/fotonew.jpeg')",
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent"></div>
                </div>
                {/* Wide Image Top Middle */}
                <div className="flex h-64 flex-col gap-4 md:col-span-2 md:h-full">
                    <div className="group relative h-1/2 w-full overflow-hidden rounded-2xl">
                        <div
                            className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{
                                backgroundImage:
                                    "url('/ImpactCompressed/CSR, ESG and Sustainability Training.jpg')",
                            }}
                        ></div>
                    </div>
                    <div className="flex h-1/2 w-full gap-4">
                        <div className="group relative h-full w-1/2 overflow-hidden rounded-2xl">
                            <div
                                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        "url('/ImpactCompressed/DSC00288.jpg')",
                                }}
                            ></div>
                        </div>
                        <div className="group relative h-full w-1/2 overflow-hidden rounded-2xl">
                            <div
                                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        "url('/ImpactCompressed/DSC03612.jpg')",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
                {/* Tall Image Right */}
                <div className="group relative h-64 overflow-hidden rounded-2xl md:col-span-1 md:h-full">
                    <div
                        className="h-full w-full bg-cover bg-right transition-transform duration-700 group-hover:scale-105"
                        style={{
                            backgroundImage:
                                "url('/ImpactCompressed/DSC00350.jpg')",
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent"></div>
                </div>
            </div>
        </section>
    );
}
