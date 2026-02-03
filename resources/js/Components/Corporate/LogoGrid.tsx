import Icon from '@/Components/Icon';

export default function LogoGrid() {
    return (
        <section className="w-full border-t border-[#f0f4f2] bg-white py-16">
            <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
                <h3 className="mb-10 text-center text-sm font-bold uppercase tracking-widest text-gray-400">
                    Mitra Kami
                </h3>
                <div className="grid grid-cols-2 items-center justify-items-center gap-8 opacity-70 md:grid-cols-5 md:gap-16">
                    {/* Logo Mitra */}
                    {[
                        '1.pertaminaGas.png',
                        '1.Pertamina.png',
                        '2.Pln.png',
                        '3.Pelindo.png',
                        '4.Taspen.png',
                        '11.Bri.png',
                        '5.Pegadaian.png',
                        '6.Astra.png',
                        '7.Biofarma.png',
                        '8.Hutamakarya.png',
                        '9.Jasamarga.png',
                        '10.Danareksa.png',
                    ].map((logo, index) => (
                        <div
                            key={index}
                            className="flex h-12 w-auto items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
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
        </section>
    );
}
