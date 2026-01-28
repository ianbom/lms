import Icon from '@/Components/Icon';

export default function AboutSection() {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative overflow-hidden rounded-2xl shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&h=1000&fit=crop"
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
                            Katalisator bagi Profesional <br />
                            <span className="text-primary">
                                di Bidang Keberlanjutan
                            </span>
                        </h2>

                        <div className="space-y-6 text-lg leading-relaxed text-slate-600">
                            <p>
                                <span className="font-semibold text-gray-900">
                                    Impact Academy
                                </span>{' '}
                                merupakan sebuah program unggulan yang kami
                                rancang secara khusus untuk menjadi katalisator
                                bagi para profesional yang berdedikasi pada
                                bidang keberlanjutan. Kami memahami bahwa
                                lanskap keberlanjutan global terus berkembang,
                                menuntut individu dan organisasi untuk tidak
                                hanya adaptif, tetapi juga proaktif dalam
                                menciptakan dampak yang bermakna.
                            </p>
                            <p>
                                Impact Academy hadir sebagai platform
                                pembelajaran transformatif yang berfokus pada
                                pelatihan berbasis dampak. Kami tidak hanya
                                membekali peserta dengan teori, melainkan juga
                                dengan pengetahuan praktis dan strategi
                                implementatif yang telah teruji dalam domain{' '}
                                <span className="font-medium text-primary">
                                    Corporate Social Responsibility (CSR)
                                </span>{' '}
                                dan{' '}
                                <span className="font-medium text-primary">
                                    Environmental, Social, and Governance (ESG)
                                </span>
                                . Kurikulum kami dirancang dengan pendekatan
                                terkini dan berpegang teguh pada praktik terbaik
                                industri.
                            </p>
                            <p>
                                Melalui program ini, peserta akan dibimbing
                                untuk tidak hanya memahami konsep keberlanjutan
                                secara mendalam, tetapi juga untuk
                                mengidentifikasi, merancang, dan
                                mengimplementasikan inisiatif yang menghasilkan
                                perubahan positif yang terukur. Kami percaya
                                bahwa dampak sejati tidak hanya diukur dari niat
                                baik, tetapi dari hasil nyata yang dapat
                                dievaluasi dan dipertanggungjawabkan.
                            </p>
                            <p>
                                Kami berkomitmen untuk mendukung setiap peserta
                                dalam perjalanan mereka untuk menjadi agen
                                perubahan yang efektif, siap untuk memimpin dan
                                mewujudkan masa depan yang lebih baik.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
