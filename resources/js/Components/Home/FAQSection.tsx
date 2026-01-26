import Icon from '@/Components/Icon';
import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    title?: string;
    description?: string;
    faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
    {
        question: 'Bagaimana cara memulai belajar di platform ini?',
        answer: 'Daftar akun gratis, pilih kelas yang Anda minati, dan langsung mulai belajar. Anda bisa mengakses materi kapan saja dan di mana saja melalui device apapun.',
    },
    {
        question: 'Apakah saya mendapatkan sertifikat setelah selesai kelas?',
        answer: 'Ya, setelah menyelesaikan semua materi dan quiz dengan nilai minimum, Anda akan mendapatkan sertifikat digital yang bisa didownload dan dibagikan ke LinkedIn atau CV Anda.',
    },
    {
        question: 'Berapa lama akses kelas saya aktif?',
        answer: 'Setelah mendaftar, Anda mendapatkan akses selamanya ke materi kelas yang telah dibeli. Anda bisa belajar sesuai kecepatan Anda sendiri tanpa batas waktu.',
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

export default function FAQSection({
    title = 'Pertanyaan yang Sering Diajukan',
    description = 'Temukan jawaban untuk pertanyaan umum tentang platform pembelajaran kami',
    faqs = defaultFAQs,
}: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-50 py-16 sm:py-20">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">{description}</p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl border border-gray-200 bg-white"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-gray-50"
                            >
                                <span className="pr-4 text-base font-semibold text-gray-900 sm:text-lg">
                                    {faq.question}
                                </span>
                                <span
                                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                                        openIndex === index
                                            ? 'rotate-180 bg-primary text-white'
                                            : 'bg-gray-100 text-gray-600'
                                    }`}
                                >
                                    <Icon name="expand_more" size={20} />
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === index
                                        ? 'max-h-96 opacity-100'
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="border-t border-gray-100 px-6 py-5">
                                    <p className="text-gray-600">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
