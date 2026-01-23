import TestimonialCard from './TestimonialCard';

interface Testimonial {
    rating: number;
    title: string;
    content: string;
    user: {
        name: string;
        role: string;
        image: string;
    };
}

interface TestimonialsSectionProps {
    title?: string;
    description?: string;
    testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
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

export default function TestimonialsSection({
    title = 'Apa Kata Alumni Kami',
    description = 'Ribuan alumni telah berhasil mengembangkan karir mereka bersama kami',
    testimonials = defaultTestimonials,
}: TestimonialsSectionProps) {
    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                        {description}
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            rating={testimonial.rating}
                            title={testimonial.title}
                            content={testimonial.content}
                            user={testimonial.user}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
