import CourseCard from './CourseCard';

interface Course {
    image: string;
    category: string;
    title: string;
    rating: number;
    reviews: string;
    instructor: {
        name: string;
        image: string;
    };
}

interface CoursesSectionProps {
    title?: string;
    description?: string;
    courses?: Course[];
}

const defaultCourses: Course[] = [
    {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ3tDEb2YPa-7HFFK0cHlJ3501Fcl_OpueAqjB995g9hoo-kv1GYhhukLwV1GoSWur4mFNbljHS7V_l9pgiVfHWS7pfBdmYZCtVgpzRpn0ByQ12XZcct_BIoQphlfxqPVw1FqErhCVTCHAcL0uXi5LSFDZElLZ95G691WS0Ta1GbiLYsi_6B2r7KkQnksbbgLo2MwDCrSgE-JncBERKdjuVY05MnU-1ELAqz3Y7aTuZfT2sG__gFNjRkok7ybk-nazGsimb5KnKd0',
        category: 'Development',
        title: 'Master Web Development with React & Node.js',
        rating: 4.9,
        reviews: '3,200+ reviews',
        instructor: {
            name: 'David R.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDamHu7QrMbUUg3ReY0cEpcwT9dPf2_HlHftGBYizm3DkwtbrP7BMs7vMwfiow2GRIz8IBof-3t6C79WhNlBC0EwLxJ0EwDnbESmxhECURnXJSw8pneQURy7luz3TjlkJxZhvYKatyCfkKFkvEbGuHt3G-eXB5EEGLYPpRUsqD2-LOh8B9mWRDHoC04o48TSoO31whknQjQlxiZeafm-WCoxpMwP2xEeaq5tJMN_oGezbulXrsdNjkcZEc_GFGEXQeAIS-yb0A1K_Y',
        },
    },
    {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_bm8LTui5ls8KR0DO_NYEHCfXSW5IWOniqX_FsF5Os5cQNjvzcLuhdWE1rbohj-_ahhiDZerJGwPoik26Ofcn2yzZwl5Vvw2D9TeliJEdzMzx3ZY9ja6LcYYanu8VJCAOTRxufPxBR-rujTEBGVLCVr-nLfDQLf59DDtHGaEQSDoowW9FT_rhzFwSoydtx4EzuoSjUAhBT5tFjxjSqCZ7SxnjeDnwfhvN1agvEUQrYFmS5m_LIono5TfvwUeHOltRpMjgEBHvUfM',
        category: 'Design',
        title: 'UI/UX Design Fundamentals: Build Beautiful Apps',
        rating: 4.8,
        reviews: '1,800+ reviews',
        instructor: {
            name: 'Sarah M.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCceXL5i4lMfgml1oczjVwVFe58v9PyxMI2hHyI5RTVNgpoQPc3Qk8L7vYiajHuWpC3ySLrvS20ojngxg_Bfv8-kWBaTONz_cpyVcwkfatZp71VgKoOADRolBNS4hK0UJhjhKMePOka3-3_yqS2RHlSFM5uq_DsC5MpOWdBQDyZeO4JcPM1FaEb-5p1fTy0mDxc8-rAZu-S7aOfqZhVigMtdCA-JDpeRk4n_NYiboDnOoyUOLWRbvKYt_DUQkTnJDjpDHHuaQ2QLwE',
        },
    },
    {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfD0bNj8-b2SaZHQ6l9S3LEl91bPRbc2XGGzq6qo7hPLfBQZESfIJFdr3Y4Iri_sBR49R3HqqbjC0wA3JHR4TghEEs4uKu5xFjycabwiXPw1OHteY8tjIVgJmQXkyaN0BoXkwwsqLejcdRFc3afBOrsmvkWAVuoNYdTEJaPyHVujQkjLA3AVu0tSz3IEb8YMb_4Yysl6-E5i1v5lw5-y2PHAc0DqyWvE3VxHtH0Gs53eFhF60mg3fO7AgazZGZwfLMV2HBU4Wu1XY',
        category: 'Marketing',
        title: 'Digital Marketing Strategy: SEO, Ads & More',
        rating: 4.7,
        reviews: '2,100+ reviews',
        instructor: {
            name: 'James K.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyeCt6E9ae8jlsybr5WsrFTIYI1xVzXw-fDLVNQgoszKHkXGONp8AnZ6CmK7fWKHM04rR_Svju6UGh6rV0UoHw95lPc-sSrzZoHCZXiZ9FKhWyieD1z1N2z1lb1nPBP65j0LzTE5h0X8GRp6D5zsQP7fbWmHLSIC84C26TxzeehXsiuVl7UrUsoO7YcqdPoF9dr9evXpBsP05_x-vaEtJ45E03NIZCtGYftJG1aDBTGpRDsW_vaSt9JiEMq0LI4F0L8gd92aeelng',
        },
    },
    {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjGd1yIvJVfoVCOqvWaZ5IlaHiyj8DqU1mZhVuLMaqlSdTmeHQAGvHZgxZje8gj1nQjnWUxOrAUL_lZ2b-5wYPTuerbIG9U3sSqlEFUusuGckJfRGzpQr3mir8PLMoC9D220CO2oJdsnAphND-V8fB3g8Baw7HpzLDgilGm4HvH1AnBQq4bapgFu3VGOpmC6jGlFHNWv_-GtvgYgW0i-_V4V2t2XgoRn3BqIzLddledAdcpEjAVJSwD0ZwCVJ_tZ-qr_jXwkFx-JE',
        category: 'Finance',
        title: 'Personal Finance Mastery & Investing',
        rating: 4.9,
        reviews: '900+ reviews',
        instructor: {
            name: 'Elena R.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDczeMjQwSd5kc-NzX-gd8DoRWUhw_cWpFZDGYADr0xBjzR5j0Uwl7b0nHzM-y7sY-Ci9MUn_8eSakAKX_EPu2_WjGyXhJc5PPRr8qOqfMm1GtPYB9l_xEzmenci1pxHv-pnxhFncmD8VZ_DDI9cWZn2tds2hFien90nsFP-Cw1CNqzq2Vi3Vdu7D5rNE4XoMuzO9tXSgb_ok4ZlO9BH8pe3mVk7r6l8Mibv3b1QD-OgS-xnszAu0O972pXCm8swRhT8p1lyK2G_uA',
        },
    },
    {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZgBeDGDrCbUF8nBgeAe5r2D3tItguoG0nX1esvvNzPLu2Uh35MoCyK6bq9QEzHlJTGmFVkoNIdpvxI5pc0ex5XMmW8asiJnBIEFo544539nEjBaqX4W7-zTJ8S0A83l91zmlJ2v_ByF5SdZXfx5XmBtpiwFtyoc_nD8-C8mr2X0ef49KXOJrlzollwbSD_icVSAxb30tVwB2GYp3YOjHdOXfFK1dnJXl5QtAVEqV1DGnA33bEJVz6zzxgI6jm0yJor4FQSbwymP8',
        category: 'Data Science',
        title: 'Python for Data Science and Machine Learning',
        rating: 4.6,
        reviews: '1,500+ reviews',
        instructor: {
            name: 'Michael T.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMkqqt7Cq_iHGvXAoBWctWije_ocSBSDCmSx9N67OVIad-YcB4UgttkwDlpr7ZycYQ_RdtILfxHOqzX8SEYFa6FyOhIDr0lOol334aubItCiiySIzrsMRUsIh3Mlj5kxYr2Nqr_KQyUn6_7-L7kwfVzSNC8SdcGye5heIBWpITDiVlNsDaCsqqfBFrL4GNkVXYJM-YFxP4zO6JXKjbwat5KnVQ5ZSxPB7Nnxu7pW2-p8ZCgoa4JkQ7ABo2iYlMiPggBwnlA06z-0w',
        },
    },
    {
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6sfHeplqXv-eDN8sReXvXoUWx6njmvA8TJuL8d9pIBSjqj4qFIs1pMPXqEh0kWtRR596i0zG-sEHejK9urJscnk9sVWlyBD1ryR7CXrAXonPX10QJftyOlM9z84dq30Mn5cpSZXUhsp-1kpQtUXBGQwn5oJcLioWNtQ7qolFiI5IZJV7_eHXMceEGWZWUWaU0H8yxz_6HJuXUdr4o2EaEmLJGDyVSw3_C-PmBrTR8xOPbyTyOIwreUmOjskyKVBkfqOKxo7dddCs',
        category: 'Business',
        title: 'Productivity & Time Management for Leaders',
        rating: 4.8,
        reviews: '1,100+ reviews',
        instructor: {
            name: 'Linda P.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnwZkzZunVHNIKYRTWf7KymtKW3qWB3vLGkYr0pF2bx66BfEE1LllTBt7JWk-_ya0pisG538qqFoWX61vzMT_U_WpAIy4gdA_7VHVIIlf5GXdjAjKLIiUFuYsW8wbB92nGfwIDuovCaJgnvKoO7TKRpjMjRNIo7cwH_eLKEx8kmpfM7E35dL0szKOT9zZ3sTUgJHi4lQ7NmNgBGr3W9rBlr1D01P7RbIJ_hLFgGeuBNZyjV-YZhOkwXkhMpb-oAKgWSrccg2wkpl0',
        },
    },
];

export default function CoursesSection({
    title = "This Month's Most-Loved Courses",
    description = "Trending with our learners — take a look at what's capturing attention.",
    courses = defaultCourses,
}: CoursesSectionProps) {
    return (
        <section className="bg-background-light py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                </div>

                {/* Courses Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course, index) => (
                        <CourseCard
                            key={index}
                            image={course.image}
                            category={course.category}
                            title={course.title}
                            rating={course.rating}
                            reviews={course.reviews}
                            instructor={course.instructor}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
