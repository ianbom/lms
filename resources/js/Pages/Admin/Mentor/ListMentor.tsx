import { PageHeader } from '@/Components/Admin';
import {
    MentorCardGrid,
    MentorSearchBar,
} from '@/Components/Admin/Mentor';
import AdminLayout from '@/Layouts/AdminLayout';
import { Mentor } from '@/types/admin';
import { Head } from '@inertiajs/react';
import { useMemo, useState } from 'react';

const MOCK_MENTORS: Mentor[] = [
    {
        id: 1,
        name: 'Dr. Sarah Wijaya',
        email: 'sarah.wijaya@edutech.com',
        avatarUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBbv3KSapv-kz6iN8--loeZP5XiOdrSeiEcbodE2idg5ms9dju4o8fqRIDbqX7kXVVaOxkjOd77wmK5h8nlqISfZkL3_fLpVlldUpi0ZPBvEvwhbfMByjYnLyAbgQzAo27cwZ-Zkd-F_FZWtCCUjSW9nJTR0U-LnEB_zCNXjHmsYvymnBWyZsdoMdAtULCIHGJvAzcUopSOW24gvBtKDD8YpKaOjOkIPWWfhpnyN0-U5FJd35VZeWfpbc2EM1q_06-hY3K8e28RYsDZ',
        isOnline: true,
        stats: {
            classes: 12,
            activeStudents: 450,
            rating: 4.9,
        },
    },
    {
        id: 2,
        name: 'Budi Santoso, M.Kom',
        email: 'budi.santoso@edutech.com',
        avatarUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuABryv--uxMn1jdGSnGGC10imkgi0QYGq3H38syim2qmaeq4h57KxWcRNtNXl6OJ7kmfGgBRH4Fzps20VE-YLFYPUQJzGkXFKMvY-iqrPgvrNYG9Dx2Hd6OvAGTBuIOO-cL3NWW797Zb9BNti_KRV-agO8EAlBG6htZAyu79z2xNo07P67WFkfv4xkfXxDyfJUFIsNaTyygAHrTyej9NM1tLlPBLCK6DrEIiw3O5W2XBFhOCEMFCdA216QIPzqGLPJggOztNqkTyRe0',
        isOnline: false,
        stats: {
            classes: 8,
            activeStudents: 210,
            rating: 4.7,
        },
    },
    {
        id: 3,
        name: 'Jessica Tan, Ph.D',
        email: 'jessica.tan@edutech.com',
        avatarUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCTNEenbjYciOfSzd9POZUvIbiKx9Qr1qv9N7y3y0nDzUaZz-EWEt9sITLX4_C-j0HB5QYBIXOtMco0ftNUA0La0yiiYMGXsbQ9baUazv5FIezwAbeJv2QbjNAafMHtI38EMNk-WlygWeqqyJIOcFZHk98vPSGPvxUkDHaV7E3Z2umNljXaxOJt-KunCwyrsiNHAGjH_MKwfmXHVYwga3zcmZTnTKL1FGtl5TgLeCXZQLKYRHZ_5hVPLWQXCOi3XuYSbOnsnHSORH6_',
        isOnline: true,
        stats: {
            classes: 15,
            activeStudents: 890,
            rating: 5.0,
        },
    },
    {
        id: 4,
        name: 'Andi Pratama',
        email: 'andi.pratama@edutech.com',
        avatarUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuD6xUDe3bqLmpw-oWpnWcgT1D96oTcwddseKAZTqrg9HLC7T-O5hth0h_dZQiZc_o3m1Pp1UABAxfXP2QEfJuZfeeN6unddfOoferXpSRVTGA5lBgMsQ69uwTwOOCyjvSHqaSkdO5jApM4UXFsCfrYz2KLd_iJw5Tx18_Qumr5JvxhfJkZGGno1GwyW2WluA6WzdeNmuAGFCHetHj7b9GZMYBeEItPV97tnhJJ2SnILQk0rhWTkF8oZIAbyM4s_dODE8-pg9hR46YSw',
        isOnline: true,
        stats: {
            classes: 5,
            activeStudents: 120,
            rating: 4.5,
        },
    },
    {
        id: 5,
        name: 'Maya Kusuma, MBA',
        email: 'maya.kusuma@edutech.com',
        avatarUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDHhqvJR36qsktE4EHGF638HeyHziqhPkzAC8kXb1A0bumuAziMi_AmePBhzSz3HW61A_MPFMbnyLT0LLG-Kudu__VsItqN5l_ZF8oRg1-Vu8ZgM09yrUTuNBkbj4kMN7mUQEb6EwLie9IxcV1mFsWgo2nObo__ChDPoYX8M3VJmSUxQ0PW8hIou-EOpI6Y0d-CHZok_GMq1XgFRX2k36jAuHpHuFl3zqwXuUkVdQekip_wM_FN6z3CV66EM1ArPJHyQz28XMF4wcot',
        isOnline: false,
        stats: {
            classes: 10,
            activeStudents: 600,
            rating: 4.8,
        },
    },
    {
        id: 6,
        name: 'Reza Firmansyah',
        email: 'reza.firmansyah@edutech.com',
        avatarUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAN7oUC0SZOBpxQ37_DDwysv-FRsOIZ4ecez6wiHagc1EqHL3RVzY1JKDiwQUOzgNMKZwnJmwxBMwiMzHqABej0m6c7U5L6-R4GHA1nUb6Ze0X6Er5XrRPnrFMKW2a6Wo0xHujU23m6P2CSqGOoihwYK9LR-6YAMH0ApeMLcDXJ8-ZA126cmXN91Wdb3UdEO_9LpVwPL5u13M98vjC6cxNBwrZy8T-IqXiVQhOPKD61Al_5GHdIjxYSaDX55a1K5GvTJGSKaYHuoDJ9',
        isOnline: true,
        stats: {
            classes: 18,
            activeStudents: 920,
            rating: 4.9,
        },
    },
];

export default function ListMentor() {
    const [searchValue, setSearchValue] = useState('');

    const filteredMentors = useMemo(() => {
        const query = searchValue.toLowerCase();
        return MOCK_MENTORS.filter(
            (mentor) =>
                mentor.name.toLowerCase().includes(query) ||
                mentor.email.toLowerCase().includes(query),
        );
    }, [searchValue]);

    return (
        <AdminLayout breadcrumbs={[{ label: 'Direktori Mentor' }]}>
            <Head title="Direktori Mentor" />

            <div className="flex flex-col gap-8">
                {/* Header Section */}
                <PageHeader
                    title="Direktori Mentor"
                    description="Kelola semua mentor dan performa mereka di sini."
                    actionLabel="Tambah Mentor"
                    onAction={() => console.log('Add mentor')}
                />

                {/* Filter & Search Bar */}
                <MentorSearchBar
                    searchValue={searchValue}
                    onSearchChange={setSearchValue}
                    onFilter={() => console.log('Filter clicked')}
                    onExport={() => console.log('Export clicked')}
                />

                {/* Mentor Cards Grid */}
                <MentorCardGrid mentors={filteredMentors} />
            </div>
        </AdminLayout>
    );
}
