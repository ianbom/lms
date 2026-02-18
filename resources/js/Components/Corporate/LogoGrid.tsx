const logos = [
    '1.Pertamina.png',
    '2.Pln.png',
    '3.Pelindo.png',
    '11.Bri.png',
    '5.Pegadaian.png',
    '6.Astra.png',
    '7.Biofarma.png',
    '8.Hutamakarya.png',
    '9.Jasamarga.png',
    '10.Danareksa.png',
];

export default function LogoGrid() {
    return (
        <section className="w-full border-t border-[#f0f4f2] bg-white py-16">
            <h3 className="mb-10 text-center text-sm font-bold uppercase tracking-widest text-gray-400">
                Mitra Kami
            </h3>

            <div className="relative w-full overflow-hidden">
                {/* Fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

                {/* Marquee track */}
                <div className="flex w-max animate-marquee">
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="mx-8 flex h-12 flex-shrink-0 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
                        >
                            <img
                                src={`/LogoMitra/${logo}`}
                                alt={logo.split('.')[1]}
                                className="h-full w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
