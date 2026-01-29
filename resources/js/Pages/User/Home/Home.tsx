import {
    AboutSection,
    CoursesSection,
    CTASection,
    FAQSection,
    HeroSection,
    TestimonialsSection,
    WhyChooseUsSection,
} from '@/Components/Home';
import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';


interface HomeProps {
    classes: any[];
}

export default function Home({ classes }: HomeProps) {
    // Map controller data to Course interface structure if necessary
    const courses = classes.map(cls => ({
        image: cls.thumbnail_url ? `${cls.thumbnail_url}` : 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
        title: cls.name,
        description: cls.description,
        duration: '40 Jam', // Placeholder or add field to DB
        videoCount: 120, // Placeholder or add field to DB
        price: cls.price,
        originalPrice: cls.price * 1.5, // Placeholder logic
        isPopular: true,
        category: 'web', // Placeholder or add field to DB
        href: route('user.classes.show', cls.id),
    }));

    const testimonials = [
        {
            rating: 5,
            title: 'Kursus yang sangat membantu!',
            content:
                'Saya berhasil mendapatkan pekerjaan sebagai web developer setelah menyelesaikan kursus di sini. Materinya sangat praktis dan mentornya sangat helpful!',
            user: {
                name: 'Andi Pratama',
                role: 'Web Developer di TechCorp',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop',
            },
        },
        {
            rating: 5,
            title: 'Fleksibel dan berkualitas',
            content:
                'Sebagai ibu rumah tangga, saya bisa belajar di waktu luang. Kursus UI/UX di sini membuat saya bisa memulai karir freelance dengan percaya diri.',
            user: {
                name: 'Siti Nurhaliza',
                role: 'Freelance UI/UX Designer',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop',
            },
        },
        {
            rating: 4.8,
            title: 'Worth every penny!',
            content:
                'Investasi terbaik untuk pengembangan diri. Materi selalu update mengikuti trend industri dan ada komunitas yang sangat supportive.',
            user: {
                name: 'Budi Santoso',
                role: 'Data Analyst di StartupXYZ',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop',
            },
        },
    ];

    const faqs = [
        {
            question: 'Bagaimana cara memulai belajar di platform ini?',
            answer: 'Daftar akun gratis, pilih kelas yang Anda minati, dan langsung mulai belajar. Anda bisa mengakses materi kapan saja dan di mana saja melalui device apapun.',
        },
        {
            question:
                'Apakah saya mendapatkan sertifikat setelah selesai kelas?',
            answer: 'Ya, setelah menyelesaikan semua materi dan quiz dengan nilai minimum, Anda akan mendapatkan sertifikat digital yang bisa didownload dan dibagikan ke LinkedIn atau CV Anda.',
        },
        {
            question: 'Berapa lama akses kelas saya aktif?',
            answer: 'Ya, Anda akan mendapatkan akses selamanya ke materi kelas yang telah dibeli. Anda bisa belajar sesuai kecepatan Anda sendiri tanpa batas waktu.',
        },
        {
            question:
                'Apakah ada mentor yang bisa membantu jika saya mengalami kesulitan?',
            answer: 'Ya, setiap kelas memiliki mentor berpengalaman yang siap membantu menjawab pertanyaan Anda melalui forum diskusi dan sesi live Q&A.',
        },
        {
            question: 'Metode pembayaran apa saja yang tersedia?',
            answer: 'Kami menerima berbagai metode pembayaran termasuk transfer bank, kartu kredit/debit, e-wallet (GoPay, OVO, DANA), dan pembayaran melalui minimarket.',
        },
    ];

    return (
        <UserLayout fullWidth>
            <Head title="Home - ImpactAcademy" />

            <div>
                {/* Hero Section */}
                <HeroSection
                    badge="🚀 Diskon 50% untuk Kelas Baru!"
                    title={
                        <>
                            Belajar Berdampak
                            <br />
                            <span className="text-green-500">
                                Tumbuh Bersama Impact Academy
                            </span>
                        </>
                    }
                    description="Kurikulum terstruktur, mentor praktisi berpengalaman, sertifikasi untuk membangun kompetensi yang relevan dan menciptakan dampak sosial berkelanjutan."
                    buttons={[
                        {
                            text: 'Mulai Belajar',
                            href: '#courses',
                            variant: 'primary',
                        },
                        {
                            text: 'Lihat Kelas',
                            href: '#courses',
                            variant: 'secondary',
                        },
                    ]}
                    heroImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&h=600&fit=crop"
                    users={[
                        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&fit=crop',
                        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&fit=crop',
                        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&fit=crop',
                    ]}
                    userCount="10,000+"
                    rating={4.9}
                />

                {/* Courses Section */}
                <div id="courses">
                    <CoursesSection
                        title="Kelas Populer"
                        description="Pilih kelas yang sesuai dengan kebutuhan karir Anda"
                        courses={courses}
                    />
                </div>

                {/* About Section */}
                <AboutSection />

                {/* Why Choose Us Section */}
                <WhyChooseUsSection
                    title="Mengapa Belajar di ImpactAcademy?"
                    description="Kami berkomitmen memberikan pengalaman belajar terbaik untuk Anda"
                    benefits={[
                        'Kurikulum disusun oleh praktisi industri',
                        'Akses materi selamanya tanpa batas waktu',
                        'Sertifikat yang diakui perusahaan',
                        'Komunitas aktif untuk networking',
                    ]}
                    features={[
                        {
                            icon: 'route',
                            title: 'Learning Path',
                            description:
                                'Jalur belajar terstruktur dari dasar hingga mahir',
                        },
                        {
                            icon: 'work',
                            title: 'Real Portfolio',
                            description:
                                'Bangun portfolio dengan project nyata',
                        },
                        {
                            icon: 'support_agent',
                            title: 'Expert Mentor',
                            description:
                                'Dibimbing langsung oleh praktisi industri',
                        },
                        {
                            icon: 'workspace_premium',
                            title: 'Sertifikat Resmi',
                            description:
                                'Dapatkan sertifikat yang diakui industri',
                        },
                    ]}
                />

                {/* Testimonials Section */}
                <TestimonialsSection
                    title="Apa Kata Alumni Kami"
                    description="Ribuan alumni telah berhasil mengembangkan karir mereka bersama kami"
                    testimonials={testimonials}
                />

                {/* FAQ Section */}
                <FAQSection
                    title="Pertanyaan yang Sering Diajukan"
                    description="Temukan jawaban untuk pertanyaan umum tentang platform pembelajaran kami"
                    faqs={faqs}
                />

                {/* CTA Section */}
                <CTASection

                />

                {/* Footer */}
                {/* <Footer /> */}
            </div>
        </UserLayout>
    );
}
