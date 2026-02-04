import Icon from '@/Components/Icon';

interface Feature {
    icon: string;
    title: string;
    description: string;
}

interface WhyChooseUsSectionProps {
    title?: string;
    description?: string;
    benefits?: string[];
    features?: Feature[];
}

const defaultBenefits: string[] = [];

const defaultFeatures: Feature[] = [
    {
        icon: 'work',
        title: 'Kurikulum Praktis Berbasis Kebutuhan Industri',
        description:
            'Disusun langsung oleh praktisi agar skill yang Anda pelajari siap diterapkan di dunia kerja.',
    },
    {
        icon: 'update',
        title: 'Akses Materi Fleksibel Kapan Saja',
        description:
            'Belajar tanpa batas waktu, ulang materi sesuai ritme Anda.',
    },
    {
        icon: 'verified',
        title: 'Sertifikasi Resmi Penunjang Karier',
        description:
            'Tingkatkan kredibilitas profesional dengan sertifikat yang diakui industri.',
    },
    {
        icon: 'groups',
        title: 'Komunitas Eksklusif untuk Networking & Kolaborasi',
        description:
            'Terhubung dengan sesama profesional, trainer, dan pelaku dampak sosial.',
    },
];

export default function WhyChooseUsSection({
    title = 'Kenapa Impact Academy Jadi Pilihan untuk Upgrade Pengetahuan dan Keahlian?',
    description = 'Platform pembelajaran digital dengan sistem terstruktur, trainer praktisi, dan sertifikasi terpercaya untuk membantu Anda berkembang lebih cepat dan lebih berdampak.',
    benefits = defaultBenefits,
    features = defaultFeatures,
}: WhyChooseUsSectionProps) {
    return (
        <section className="relative mx-4 overflow-hidden rounded-3xl py-20 md:mx-8">
            {/* Decorative Elements */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-primary/10 to-teal-500/5 blur-3xl"></div>
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-primary/10 to-teal-500/5 blur-3xl"></div>

            <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-4 sm:px-6 lg:flex-row lg:px-8">
                {/* Left Content */}
                <div className="w-full lg:w-1/3">
                    {/* <span className="inline-block rounded-full bg-gradient-to-r from-primary to-teal-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                        Kenapa Memilih Kami
                    </span> */}
                    <h2 className="mb-6 mt-2 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-3xl font-extrabold leading-tight text-transparent md:text-4xl">
                        {title}
                    </h2>
                    <p className="mb-8 text-lg leading-relaxed text-slate-600">
                        {description}
                    </p>
                    {benefits.length > 0 && (
                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    <Icon
                                        name="check_circle"
                                        size={24}
                                        className="mt-1 text-primary"
                                    />
                                    <span className="text-slate-700">
                                        {benefit}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Right Content - Features Grid */}
                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:w-2/3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl"
                        >
                            {/* Gradient Overlay on Hover */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-teal-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                            {/* Content */}
                            <div className="relative">
                                {/* Icon with animated background */}
                                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-teal-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                                    <Icon name={feature.icon} size={28} />
                                </div>

                                {/* Checkmark prefix */}
                                <div className="mb-3 flex items-start gap-2">
                                    <h3 className="flex-1 text-lg font-bold leading-tight text-slate-900">
                                        {feature.title}
                                    </h3>
                                </div>

                                <p className="text-sm leading-relaxed text-slate-600">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-teal-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
