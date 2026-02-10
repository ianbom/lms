import Icon from '@/Components/Icon';

export default function AboutSection() {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative overflow-hidden rounded-2xl shadow-xl">
                            <img
                                src="/ImpactCompressed/presentasi.jpeg"
                                alt="Team collaboration"
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent mix-blend-multiply transition-opacity hover:opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <div className="flex items-center gap-2 text-white">
                                    <Icon
                                        name="verified"
                                        className="h-6 w-6 text-yellow-400"
                                    />
                                    <span className="font-bold tracking-wide">
                                        Impact Academy
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 flex flex-col justify-center lg:order-2">
                        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
                            <Icon name="groups" className="text-[20px]" />
                            Tentang Kami
                        </div>

                        <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                            Platform Pembelajaran <br /> Berbasis Dampak
                            <span className="text-primary">
                                <br /> di Bidang Keberlanjutan
                            </span>
                        </h2>

                        <div className="space-y-6 text-lg text-sm leading-relaxed text-slate-600">
                            <p>
                                <span className="font-semibold text-gray-900">
                                    Impact Academy
                                </span>{' '}
                                adalah program unggulan yang dirancang sebagai
                                mitra strategis dalam pengembangan kapasitas
                                profesional di bidang keberlanjutan. Melalui
                                pembelajaran berbasis dampak yang menggabungkan
                                pemahaman konseptual dan praktik implementatif,
                                Anda akan dibekali keterampilan aplikatif serta
                                strategi teruji di bidang Sustainability, ESG,
                                dan CSR. Kurikulum disusun selaras dengan
                                kebutuhan industri, regulasi, dan tantangan
                                global, sehingga peserta mampu merancang serta
                                mengimplementasikan inisiatif keberlanjutan yang
                                relevan, terukur, dan berorientasi pada
                                perubahan positif.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
