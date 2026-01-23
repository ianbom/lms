import Icon from '@/Components/Icon';

interface CourseCardProps {
    title: string;
    mentor: string;
    mentorImage: string;
    thumbnail: string;
    progress: number;
    completed?: boolean;
    color?: string; // For progress bar color if different
    status: 'Active' | 'Completed';
    statusColor: string;
}

function CourseCard({
    title,
    mentor,
    mentorImage,
    thumbnail,
    progress,
    completed = false,
    status,
    statusColor,
}: CourseCardProps) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-xl border border-border-light bg-white shadow-card transition-all hover:shadow-card-hover">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={thumbnail}
                />
                <div
                    className={`absolute right-3 top-3 rounded-full px-2 py-1 text-xs font-semibold backdrop-blur-sm ${statusColor}`}
                >
                    {status}
                </div>
            </div>
            <div className="flex flex-1 flex-col p-4">
                <h4 className="mb-1 text-base font-bold text-slate-900 line-clamp-2">
                    {title}
                </h4>
                <div className="mb-4 flex items-center gap-2">
                    <div className="h-5 w-5 overflow-hidden rounded-full bg-gray-200">
                        <img alt={mentor} className="h-full w-full" src={mentorImage} />
                    </div>
                    <span className="text-xs font-medium text-slate-500">
                        {mentor}
                    </span>
                </div>
                <div className="mt-auto">
                    <div className="mb-1 flex justify-between text-xs font-medium text-slate-500">
                        <span>Progress</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-100">
                        <div
                            className={`h-1.5 rounded-full ${completed ? 'bg-green-600' : 'bg-primary'}`}
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function MyClasses() {
    return (
        <div className="col-span-12">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">Kelas Saya</h3>
                <a
                    href="#"
                    className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                    Lihat Semua Kelas
                    <Icon name="arrow_forward" size={16} />
                </a>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <CourseCard
                    title="Full-Stack Web Development"
                    mentor="Budi Santoso"
                    mentorImage="https://lh3.googleusercontent.com/aida-public/AB6AXuDqQMeBGT7wri-8EwaTgJekLg-GVSO1EakvmVXIR8N4uIq32WicvK8XnwLjxgCyHwxIqWiUjsH8qTtc1mRs3llTlrIfYh86l_LNoG8Hf3TbOF6ALNVA-8R3tgSKSHNnkCD4fp0AyA9KGuQMmrYLgvtUeRu39oFtmfk3GB0zDvNZqS8Ef64wUy6rSrRQAQn-a-7ThLgIZPt-avkDJtBRiliSZsMgNGREGovVd7_d93RbjslWlC--cLfndiThMK4mGNu42cVZhjEbhhpk"
                    thumbnail="https://lh3.googleusercontent.com/aida-public/AB6AXuC2eWgz9b3nf5xsIp5BSsP1K1LQN9va7gYaNqb-jRl6WyL1lv0Z5UN4m77xV6CsKGvKbCLq0QEQTg_s_e7pL9S8geW9oNSM8gySaWNYhOBSNIkufu_mpyEpZX4px64MOsThVU37I0JUTtZslScE6vghCRW4qHGIVaXnbwN7JvWB6622F03Qq6BHMkBn6eVp61rnKgrNQD8fTUs5Eh9GZuEihn8LWxNh7N82461NJrZvqocJp-f9QI3r2MZU9YuwTSWC1GhRGYxDHOeO"
                    progress={60}
                    status="Active"
                    statusColor="bg-white/90 text-primary"
                />
                <CourseCard
                    title="UI/UX Design Fundamentals"
                    mentor="Sarah Wijaya"
                    mentorImage="https://lh3.googleusercontent.com/aida-public/AB6AXuC791-YQTy3wniukrmIkdonM3w0cli6wCYKTfA6VgYVh9VxbQ5zHgFZIt-RujuJFu-qb-ZLJIEHDt670-KxWhrw5xD5H7l2wtamLk8c2K9-f5qSaEKcye2SI6Hyvx30mS8sHjy9eIRm0fLt-TLI-g_AJEMsdxXDUH4pcqOLBgn0U6YYlnA5cnUWHhhmkesVcMl06Plh9j8rVj377hkE_uEFzN4br_FY5LxdWSYff784JCtHz_LI4SpfhXqDR8k91TxoKERH_RLsENaI"
                    thumbnail="https://lh3.googleusercontent.com/aida-public/AB6AXuDH-EMJAbTHq5brJRzeVNAPNmfzLiAq0lswwUgHkbtljvkkGDJIDwdOfU_PSMait7ZqSwvByDrUIoZ7ZWz5UAnI8LCSNDWTijS1I2TvKF3OeW32NeBiNDAVq83JI71L5n6gX8Hd0HL3PagTZF2Ib6xNKwzPpCdZSCkcdGJ0k0WnK5Yha30eAsgJ6-NlkumnZxx_gRTr1Usg7CBXnmqA3MD4CNOrIqiRr3uRdW9xusuLTDZdVMkFA328atMnebsfOZIMHWe-aVgAlFYY"
                    progress={100}
                    completed={true}
                    status="Completed"
                    statusColor="bg-green-100 text-green-700"
                />
                <CourseCard
                    title="Python for Data Science"
                    mentor="David Chen"
                    mentorImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAz5xGzs11zSjWfqq_4VwF2IoV00pA-bSpLusOS73SPBibBmoxFtDGLK5NpTwbn8tkUoMLYus-0eF1QNLq6ip2xngwY5C-cIaUf5WWsd1JmYbZRHnXmamU2SKj1gymt-oJBM6JAUSuPdIliHamQ1-mMQqnZQ8N2CS3cX2cdVtKGxMtaY1SnynKL4epji-gHUgd3x7Ug4V1XELwEtGQ3MHwL2Uyb93PutnLNjB8UKZka8FR1RGP_Eqtpt5wBAs8FfPZPUyfS4Qa4l4Ew"
                    thumbnail="https://lh3.googleusercontent.com/aida-public/AB6AXuDuJGGCTQ9KfdGEnd-1yUBI7gEcacYjFs6AN5xqs7LU-qdJwmazk7TqpN-zj7TWv92iKXhtpcPkY94SUm8mRdRH6-VBxpdfOL8shUggK960XrtgeO3BFadDJn11XbZJgf48JCTWE2L4BAKAOKaC__-wn8Rw2SZ7qZ_elzpDUhOMyP41Ye0Pd4MYWkXCtjS7Uk__UPuEu3yJUCZmFNlhQwgnOLHukPL5ksbnM69HybR1PwN9sRFLR4-loLFf7Do2PLTjDJJbgHvKNegD"
                    progress={25}
                    status="Active"
                    statusColor="bg-white/90 text-primary"
                />
                <CourseCard
                    title="Creative Writing Masterclass"
                    mentor="Jessica Lee"
                    mentorImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAcIkugxqSU7S9RPovI191O-itx4ddS-JpneokMc1yqfFm2joiTqZsqxhRfVXBMSkpmmM8CmMbr4JlxOs0ekwznhSgOSTm5GsYu74emhpeKi87qYPgJfJHG-bhWDRT0RBiVPsfjFkjUdAvAnaTRuZ6VhRFNiK-_3o2CWzpPGO1PBRB8haMVIM36ywgxRW1GuopEg5_H-kVeKINYXQt9bCYX9jpLCtUUe1NdQ66oMiC2kXAvjeHeFttgSsJRaiXWWVr9M2tPGuuVCm7k"
                    thumbnail="https://lh3.googleusercontent.com/aida-public/AB6AXuDHqG-X138q5h-ywSD-nwp4-7SqYglMJH14YIeHccsUDTh4ItBz_7K9-Ef2rExa4fo_YE2U6CfwlcIkS0NRl8c0g9eDcn86Yb8djpfZVk7CoJaEEsnseDIMfbjXdw78m9Mpf5pWH11GCs28gR9nMWUjhs7trBp6MFx_cBxCEqDRnjh8WA45mHRyelW7OnBxbdNwxh8FPZDwGYPhfGDdeeu4N1Zjz5RbkIOThTWUxzIUE6Ljc9mCE7cJQdFjBEVWVIEL1jXvc6YKIKlg"
                    progress={10}
                    status="Active"
                    statusColor="bg-white/90 text-primary"
                />
            </div>
        </div>
    );
}
