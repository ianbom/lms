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

const defaultBenefits: string[] = [
    'Akses selamanya ke materi kelas',
    'Konsultasi karir gratis',
];

const defaultFeatures: Feature[] = [
    {
        icon: 'school',
        title: 'Learning Path Jelas',
        description:
            'Kurikulum disusun sistematis dari level pemula hingga mahir.',
    },
    {
        icon: 'folder_shared',
        title: 'Real Portfolio',
        description:
            'Kerjakan proyek nyata yang bisa kamu pamerkan saat melamar kerja.',
    },
    {
        icon: 'people_alt',
        title: 'Expert Mentor',
        description: 'Belajar dan tanya jawab langsung dengan praktisi senior.',
    },
    {
        icon: 'verified',
        title: 'Sertifikat Resmi',
        description:
            'Validasi kemampuanmu dengan sertifikat kelulusan yang diakui.',
    },
];

export default function WhyChooseUsSection({
    title = 'Investasi Terbaik untuk Masa Depan Karirmu',
    description = 'Kami tidak hanya memberikan materi, tapi juga membimbingmu membangun portofolio yang meyakinkan para recruiter. Metode belajar yang adaptif sesuai kebutuhan industri saat ini.',
    benefits = defaultBenefits,
    features = defaultFeatures,
}: WhyChooseUsSectionProps) {
    return (
        <section className="mx-4 rounded-3xl border border-slate-100 bg-white py-16 shadow-sm md:mx-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-4 sm:px-6 lg:flex-row lg:px-8">
                {/* Left Content */}
                <div className="w-full lg:w-1/3">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        Kenapa Memilih Kami
                    </span>
                    <h2 className="mb-6 mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                        {title}
                    </h2>
                    <p className="mb-8 leading-relaxed text-slate-600">
                        {description}
                    </p>
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
                </div>

                {/* Right Content - Features Grid */}
                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:w-2/3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl bg-slate-50 p-8 transition-colors hover:bg-teal-50"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary shadow-sm transition-transform group-hover:scale-110">
                                <Icon name={feature.icon} size={24} />
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-slate-900">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-slate-500">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
