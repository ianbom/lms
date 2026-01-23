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
    testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
    {
        rating: 5,
        title: 'LMS Platform helped me switch careers!',
        content:
            "I started as a marketing assistant with no coding experience. Thanks to LMS Platform's beginner-friendly web development courses, I landed my first frontend developer job last month.",
        user: {
            name: 'Aisha R.',
            role: 'Junior Web Developer',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEtEV91LTRrJYkxpBcAgS7WFLEjhKdOeK3svMjzSknB4g2b8swg1ayRWdGB2QiisooEk8yy9DmNHQ4wQkUtZF0pvgn2R380G93XdZewectE69YLAmhin6kQ0zakk1Fj1mfP23dRst1jDM6TNOuGuaM0wTfiSYW_0W5Efvau5zf060wZnV0g9C5FlntoaVHcqAu_2Owu8dhaGtWUhoqtwqI16oqMnY_qXcVRBiocAYLShji191iqDZuzvsc_4Porat0CqoGNfHuOgk',
        },
    },
    {
        rating: 5,
        title: 'Fits perfectly into my busy schedule',
        content:
            "As a full-time nurse, I don't have a lot of spare time. But LMS Platform's short, focused lessons make it easy to learn during breaks. I've completed three courses on personal finance.",
        user: {
            name: 'Carlos M.',
            role: 'Healthcare Professional',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDznBJtVM5hzkIHrerhExFBcKhDOFv40gGd8su-Bp8j9B2ODRKP9TBvxqAtE_jke2PBTTmwgG99qItYHeWW_Mk9nbUw6AzXj19chj01QRltY-UJbvYiyAWwlTyIjnm6A_Bu26MCYvL80jZkEj9x9j0Xary3uNdoaKLZoOeGAhDx20XgOT3I8hH1pwwVzEXMJo9lZopyH2cwKMrBCasXWHaHhDunPh1O3PyFYvh5eVPOBbGvKYb1m0tsARTK7Hl4wMamOVJ43pIiSI',
        },
    },
    {
        rating: 4.5,
        title: 'Leveled up my freelance career',
        content:
            "I've taken many online courses before, but none were as practical and well-structured as LMS Platform's. The UI/UX path was exactly what I needed. My income has doubled!",
        user: {
            name: 'Nadiya P.',
            role: 'Freelance Designer',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW-xFTnNVXkcr4iKSYYy1f2dksPF3PgMp2Rx3r7nSB1rH40YAwjGOehb1zZDycxLvM7JM80A9uMrOCTgWQTZ6rPM6WjgjCDyIJnGlnWg4542ihSTeX3PrdMjeH6wrir177gAoH5DVIXXdDXo0gRkfaKn33b98CShMs5U-K1R0U6aiMGNmfLMArYCzwukNy48itM2-tqOg5UTAMUGfYwnNBu9aHza4O27vBMKScHin8V0wB5bPVkwUTZdqPDn_TRxOjQ28LHwCiEn0',
        },
    },
];

export default function TestimonialsSection({
    title = 'Stories from LMS Platform Learners',
    testimonials = defaultTestimonials,
}: TestimonialsSectionProps) {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
                    {title}
                </h2>

                {/* Testimonials Grid */}
                <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
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
