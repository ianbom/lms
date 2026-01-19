import {
    HeroSection,
    FeaturesSection,
    MotivationSection,
    CommunitySection,
    CoursesSection,
    TestimonialsSection,
    CTASection,
} from '@/Components/Home';
import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';

export default function Home() {
    const heroStats = [
        { value: '2.5k+', label: 'Kursus dari Ahli' },
        { value: '500k+', label: 'Pelajar Aktif' },
        { value: '4.9/5', label: 'Rating Pengguna' },
    ];

    const features = [
        {
            icon: 'psychology',
            iconColor: 'orange' as const,
            title: 'Belajar Lebih Cerdas',
            description: 'Alur belajar berbasis AI yang menyesuaikan dengan kecepatan dan tujuanmu secara otomatis.',
        },
        {
            icon: 'schedule',
            iconColor: 'purple' as const,
            title: 'Jadwal Fleksibel',
            description: 'Belajar kapan saja, di mana saja. Lanjutkan tepat di bagian terakhirmu, bahkan saat offline.',
        },
        {
            icon: 'verified',
            iconColor: 'blue' as const,
            title: 'Belajar dari yang Terbaik',
            description: 'Kursus yang dipandu oleh profesional top dan praktisi yang tahu apa yang berhasil.',
        },
        {
            icon: 'groups',
            iconColor: 'teal' as const,
            title: 'Komunitas',
            description: 'Gabung grup diskusi, ajukan pertanyaan, dan bangun portofolio bersama yang lain.',
        },
    ];

    const motivationBenefits = [
        { text: 'Streak Pembelajaran Cerdas untuk membangun kebiasaan' },
        { text: 'Progress bar dan pencapaian yang digamifikasi' },
        { text: 'Grup diskusi untuk umpan balik' },
        { text: 'Ramah seluler untuk belajar di mana saja' },
    ];

    const courses = [
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ3tDEb2YPa-7HFFK0cHlJ3501Fcl_OpueAqjB995g9hoo-kv1GYhhukLwV1GoSWur4mFNbljHS7V_l9pgiVfHWS7pfBdmYZCtVgpzRpn0ByQ12XZcct_BIoQphlfxqPVw1FqErhCVTCHAcL0uXi5LSFDZElLZ95G691WS0Ta1GbiLYsi_6B2r7KkQnksbbgLo2MwDCrSgE-JncBERKdjuVY05MnU-1ELAqz3Y7aTuZfT2sG__gFNjRkok7ybk-nazGsimb5KnKd0',
            category: 'Development',
            title: 'Kuasai Web Development dengan React & Node.js',
            rating: 4.9,
            reviews: '3,200+ ulasan',
            instructor: {
                name: 'David R.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDamHu7QrMbUUg3ReY0cEpcwT9dPf2_HlHftGBYizm3DkwtbrP7BMs7vMwfiow2GRIz8IBof-3t6C79WhNlBC0EwLxJ0EwDnbESmxhECURnXJSw8pneQURy7luz3TjlkJxZhvYKatyCfkKFkvEbGuHt3G-eXB5EEGLYPpRUsqD2-LOh8B9mWRDHoC04o48TSoO31whknQjQlxiZeafm-WCoxpMwP2xEeaq5tJMN_oGezbulXrsdNjkcZEc_GFGEXQeAIS-yb0A1K_Y',
            },
        },
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_bm8LTui5ls8KR0DO_NYEHCfXSW5IWOniqX_FsF5Os5cQNjvzcLuhdWE1rbohj-_ahhiDZerJGwPoik26Ofcn2yzZwl5Vvw2D9TeliJEdzMzx3ZY9ja6LcYYanu8VJCAOTRxufPxBR-rujTEBGVLCVr-nLfDQLf59DDtHGaEQSDoowW9FT_rhzFwSoydtx4EzuoSjUAhBT5tFjxjSqCZ7SxnjeDnwfhvN1agvEUQrYFmS5m_LIono5TfvwUeHOltRpMjgEBHvUfM',
            category: 'Design',
            title: 'Fundamental UI/UX Design: Bangun Aplikasi Cantik',
            rating: 4.8,
            reviews: '1,800+ ulasan',
            instructor: {
                name: 'Sarah M.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCceXL5i4lMfgml1oczjVwVFe58v9PyxMI2hHyI5RTVNgpoQPc3Qk8L7vYiajHuWpC3ySLrvS20ojngxg_Bfv8-kWBaTONz_cpyVcwkfatZp71VgKoOADRolBNS4hK0UJhjhKMePOka3-3_yqS2RHlSFM5uq_DsC5MpOWdBQDyZeO4JcPM1FaEb-5p1fTy0mDxc8-rAZu-S7aOfqZhVigMtdCA-JDpeRk4n_NYiboDnOoyUOLWRbvKYt_DUQkTnJDjpDHHuaQ2QLwE',
            },
        },
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfD0bNj8-b2SaZHQ6l9S3LEl91bPRbc2XGGzq6qo7hPLfBQZESfIJFdr3Y4Iri_sBR49R3HqqbjC0wA3JHR4TghEEs4uKu5xFjycabwiXPw1OHteY8tjIVgJmQXkyaN0BoXkwwsqLejcdRFc3afBOrsmvkWAVuoNYdTEJaPyHVujQkjLA3AVu0tSz3IEb8YMb_4Yysl6-E5i1v5lw5-y2PHAc0DqyWvE3VxHtH0Gs53eFhF60mg3fO7AgazZGZwfLMV2HBU4Wu1XY',
            category: 'Marketing',
            title: 'Strategi Digital Marketing: SEO, Ads & Lainnya',
            rating: 4.7,
            reviews: '2,100+ ulasan',
            instructor: {
                name: 'James K.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyeCt6E9ae8jlsybr5WsrFTIYI1xVzXw-fDLVNQgoszKHkXGONp8AnZ6CmK7fWKHM04rR_Svju6UGh6rV0UoHw95lPc-sSrzZoHCZXiZ9FKhWyieD1z1N2z1lb1nPBP65j0LzTE5h0X8GRp6D5zsQP7fbWmHLSIC84C26TxzeehXsiuVl7UrUsoO7YcqdPoF9dr9evXpBsP05_x-vaEtJ45E03NIZCtGYftJG1aDBTGpRDsW_vaSt9JiEMq0LI4F0L8gd92aeelng',
            },
        },
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjGd1yIvJVfoVCOqvWaZ5IlaHiyj8DqU1mZhVuLMaqlSdTmeHQAGvHZgxZje8gj1nQjnWUxOrAUL_lZ2b-5wYPTuerbIG9U3sSqlEFUusuGckJfRGzpQr3mir8PLMoC9D220CO2oJdsnAphND-V8fB3g8Baw7HpzLDgilGm4HvH1AnBQq4bapgFu3VGOpmC6jGlFHNWv_-GtvgYgW0i-_V4V2t2XgoRn3BqIzLddledAdcpEjAVJSwD0ZwCVJ_tZ-qr_jXwkFx-JE',
            category: 'Finance',
            title: 'Penguasaan Keuangan Pribadi & Investasi',
            rating: 4.9,
            reviews: '900+ ulasan',
            instructor: {
                name: 'Elena R.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDczeMjQwSd5kc-NzX-gd8DoRWUhw_cWpFZDGYADr0xBjzR5j0Uwl7b0nHzM-y7sY-Ci9MUn_8eSakAKX_EPu2_WjGyXhJc5PPRr8qOqfMm1GtPYB9l_xEzmenci1pxHv-pnxhFncmD8VZ_DDI9cWZn2tds2hFien90nsFP-Cw1CNqzq2Vi3Vdu7D5rNE4XoMuzO9tXSgb_ok4ZlO9BH8pe3mVk7r6l8Mibv3b1QD-OgS-xnszAu0O972pXCm8swRhT8p1lyK2G_uA',
            },
        },
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZgBeDGDrCbUF8nBgeAe5r2D3tItguoG0nX1esvvNzPLu2Uh35MoCyK6bq9QEzHlJTGmFVkoNIdpvxI5pc0ex5XMmW8asiJnBIEFo544539nEjBaqX4W7-zTJ8S0A83l91zmlJ2v_ByF5SdZXfx5XmBtpiwFtyoc_nD8-C8mr2X0ef49KXOJrlzollwbSD_icVSAxb30tVwB2GYp3YOjHdOXfFK1dnJXl5QtAVEqV1DGnA33bEJVz6zzxgI6jm0yJor4FQSbwymP8',
            category: 'Data Science',
            title: 'Python untuk Data Science dan Machine Learning',
            rating: 4.6,
            reviews: '1,500+ ulasan',
            instructor: {
                name: 'Michael T.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMkqqt7Cq_iHGvXAoBWctWije_ocSBSDCmSx9N67OVIad-YcB4UgttkwDlpr7ZycYQ_RdtILfxHOqzX8SEYFa6FyOhIDr0lOol334aubItCiiySIzrsMRUsIh3Mlj5kxYr2Nqr_KQyUn6_7-L7kwfVzSNC8SdcGye5heIBWpITDiVlNsDaCsqqfBFrL4GNkVXYJM-YFxP4zO6JXKjbwat5KnVQ5ZSxPB7Nnxu7pW2-p8ZCgoa4JkQ7ABo2iYlMiPggBwnlA06z-0w',
            },
        },
        {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6sfHeplqXv-eDN8sReXvXoUWx6njmvA8TJuL8d9pIBSjqj4qFIs1pMPXqEh0kWtRR596i0zG-sEHejK9urJscnk9sVWlyBD1ryR7CXrAXonPX10QJftyOlM9z84dq30Mn5cpSZXUhsp-1kpQtUXBGQwn5oJcLioWNtQ7qolFiI5IZJV7_eHXMceEGWZWUWaU0H8yxz_6HJuXUdr4o2EaEmLJGDyVSw3_C-PmBrTR8xOPbyTyOIwreUmOjskyKVBkfqOKxo7dddCs',
            category: 'Business',
            title: 'Produktivitas & Manajemen Waktu untuk Pemimpin',
            rating: 4.8,
            reviews: '1,100+ ulasan',
            instructor: {
                name: 'Linda P.',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnwZkzZunVHNIKYRTWf7KymtKW3qWB3vLGkYr0pF2bx66BfEE1LllTBt7JWk-_ya0pisG538qqFoWX61vzMT_U_WpAIy4gdA_7VHVIIlf5GXdjAjKLIiUFuYsW8wbB92nGfwIDuovCaJgnvKoO7TKRpjMjRNIo7cwH_eLKEx8kmpfM7E35dL0szKOT9zZ3sTUgJHi4lQ7NmNgBGr3W9rBlr1D01P7RbIJ_hLFgGeuBNZyjV-YZhOkwXkhMpb-oAKgWSrccg2wkpl0',
            },
        },
    ];

    const testimonials = [
        {
            rating: 5,
            title: 'LMS Platform membantuku ganti karir!',
            content:
                "Aku mulai sebagai asisten marketing tanpa pengalaman coding. Berkat kursus web development LMS Platform yang ramah pemula, aku dapat pekerjaan frontend developer pertamaku bulan lalu.",
            user: {
                name: 'Aisha R.',
                role: 'Junior Web Developer',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEtEV91LTRrJYkxpBcAgS7WFLEjhKdOeK3svMjzSknB4g2b8swg1ayRWdGB2QiisooEk8yy9DmNHQ4wQkUtZF0pvgn2R380G93XdZewectE69YLAmhin6kQ0zakk1Fj1mfP23dRst1jDM6TNOuGuaM0wTfiSYW_0W5Efvau5zf060wZnV0g9C5FlntoaVHcqAu_2Owu8dhaGtWUhoqtwqI16oqMnY_qXcVRBiocAYLShji191iqDZuzvsc_4Porat0CqoGNfHuOgk',
            },
        },
        {
            rating: 5,
            title: 'Sangat pas dengan jadwal sibukku',
            content:
                "Sebagai perawat penuh waktu, aku tidak punya banyak waktu luang. Tapi pelajaran LMS Platform yang singkat dan fokus membuatnya mudah untuk belajar saat istirahat. Aku sudah menyelesaikan tiga kursus keuangan pribadi.",
            user: {
                name: 'Carlos M.',
                role: 'Tenaga Kesehatan',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDznBJtVM5hzkIHrerhExFBcKhDOFv40gGd8su-Bp8j9B2ODRKP9TBvxqAtE_jke2PBTTmwgG99qItYHeWW_Mk9nbUw6AzXj19chj01QRltY-UJbvYiyAWwlTyIjnm6A_Bu26MCYvL80jZkEj9x9j0Xary3uNdoaKLZoOeGAhDx20XgOT3I8hH1pwwVzEXMJo9lZopyH2cwKMrBCasXWHaHhDunPh1O3PyFYvh5eVPOBbGvKYb1m0tsARTK7Hl4wMamOVJ43pIiSI',
            },
        },
        {
            rating: 4.5,
            title: 'Meningkatkan karir freelance-ku',
            content:
                "Saya sudah mengambil banyak kursus online sebelumnya, tapi tidak ada yang sepraktis dan terstruktur seperti LMS Platform. Jalur UI/UX adalah apa yang saya butuhkan. Penghasilan saya sudah dua kali lipat!",
            user: {
                name: 'Nadiya P.',
                role: 'Freelance Designer',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW-xFTnNVXkcr4iKSYYy1f2dksPF3PgMp2Rx3r7nSB1rH40YAwjGOehb1zZDycxLvM7JM80A9uMrOCTgWQTZ6rPM6WjgjCDyIJnGlnWg4542ihSTeX3PrdMjeH6wrir177gAoH5DVIXXdDXo0gRkfaKn33b98CShMs5U-K1R0U6aiMGNmfLMArYCzwukNy48itM2-tqOg5UTAMUGfYwnNBu9aHza4O27vBMKScHin8V0wB5bPVkwUTZdqPDn_TRxOjQ28LHwCiEn0',
            },
        },
    ];

    return (
        <UserLayout>
            <Head title="Home - LMS Platform" />

            <div className="-mt-8 sm:-mt-12"> {/* Negate UserLayout padding for Hero full width */}
                {/* Hero Section */}
                <HeroSection
                    badge="Kursus Baru Ditambahkan"
                    title={
                        <>
                            Buka Keahlian yang <br />
                            <span className="relative text-primary">
                                Memajukan Anda
                                <svg
                                    className="absolute -bottom-1 left-0 h-3 w-full text-primary opacity-30"
                                    fill="none"
                                    viewBox="0 0 200 9"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.00025 6.99997C2.00025 6.99997 51.5002 1 100.5 1C149.5 1 198 7 198 7"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeWidth="3"
                                    />
                                </svg>
                            </span>
                        </>
                    }
                    description="Kuasai keahlian yang dibutuhkan dari para ahli industri. Belajar sesuai kecepatanmu, pantau pertumbuhanmu dengan alur yang didukung AI, dan tetap unggul."
                    primaryButtonText="Mulai Belajar Gratis"
                    secondaryButtonText="Jelajahi Kursus"
                    stats={heroStats}
                />

                {/* Features Section */}
                <FeaturesSection
                    title="Pembelajaran Cerdas, Hasil Nyata"
                    description="Kami membuat pembelajaran efektif, menyenangkan, dan personal—sehingga Anda tetap termotivasi dan benar-benar menyelesaikan apa yang Anda mulai."
                    features={features}
                />

                {/* Motivation Section */}
                <MotivationSection
                    title="Dibuat untuk Menjagamu Tetap Maju"
                    description="Tetap konsisten dengan streak gamifikasi, pelacakan kemajuan, grup sebaya, dan sertifikasi yang berarti."
                    benefits={motivationBenefits}
                    buttonText="Mulai Belajar Gratis"
                />

                {/* Community Section */}
                <CommunitySection
                    title="Anda Tidak Belajar Sendirian"
                    description="Di LMS Platform, belajar lebih dari sekadar menonton video. Bergabunglah dengan komunitas pembelajar yang bersemangat dari seluruh dunia. Terlibat dalam forum, bergabung dengan grup sebaya, dan hadiri workshop langsung."
                    secondaryDescription="Baik Anda mendalami AI, desain, atau pemasaran, temukan dukungan, kolaborasi, dan motivasi melalui papan peringkat dan tantangan."
                    buttonText="Gabung Komunitas Kami"
                />

                {/* Courses Section */}
                <CoursesSection
                    title="Kursus Paling Dicintai Bulan Ini"
                    description="Sedang tren di kalangan pembelajar kami — lihat apa yang menarik perhatian."
                    courses={courses}
                />

                {/* Testimonials Section */}
                <TestimonialsSection
                    title="Cerita dari Pembelajar LMS Platform"
                    testimonials={testimonials}
                />

                {/* CTA Section */}
                <CTASection
                    title={
                        <>
                            Siap Tumbuh <br /> Bersama LMS Platform?
                        </>
                    }
                    description="Gabung dengan 500.000+ pembelajar yang meningkatkan karir mereka. Belajar lebih cerdas, bergerak lebih cepat, capai lebih banyak."
                    buttonText="Mulai Sekarang"
                />
            </div>
        </UserLayout>
    );
}
