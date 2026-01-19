import FilterToolbar from '@/Components/Modul/FilterToolbar';
import HeroSection from '@/Components/Modul/HeroSection';
import ModuleGrid from '@/Components/Modul/ModuleGrid';
import Pagination from '@/Components/Modul/Pagination';
import UserLayout from '@/Layouts/UserLayout';
import { FilterTab, Module } from '@/types/module';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

// Sample data - replace with actual data from props
const sampleModules: Module[] = [
    {
        id: 1,
        title: 'Fundamentals of Project Management',
        description:
            'Pelajari dasar-dasar manajemen proyek dari inisiasi hingga penutupan.',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCsmxyTL37OOusvuejaONfcusz0aHqcE0VjtYY2IcVpWyWbT3AIeMet96kaEbpV_z2Ts-38ktXSfQR0oYrJ6WVWZ2uwBKYiyf0m1k2ypocZj1aY_iDAh7uweYNk5ezdVs6QlJ_bY6CIqoVpaGJyDOBeDVJk5XK57Uqw9IGd_PcHmnoMAoIsYPAlXaCdyTih0vGsouxdoQT6b46weF6j61mUKlMLswmejVewMBhSy4z3f_fYw77M2LrkItSgx_tNzYz7nXD0S4mf6rY',
        category: 'Bisnis',
        categoryIcon: 'verified',
        categoryColor: 'text-primary',
        price: null,
        duration: '2j 15m',
        instructor: {
            name: 'Dr. Albert',
            avatarUrl:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuA75vezFImka05Cub4JmK0bNk4o2LgEp0iAXZ_YftOyl4fVU1t1798FzmrgqSTt5dWCkCCsZGRO6cWbkYDmSauROY0z1Zuk1LOy82UoMZWT4uwgNDknlTSak09rfQmf8U3WN7UV4jfcLLvZhTnaUZBWka3feBZKWNIxIUOJgg2YmwsuXkhR5xTWBWlz0hudqqOQ7naP11oU6rccsta7LrAAR6yxeqpuvI6Q77VC9BPimcBT_mtvQ4xD3kHhci-7qH6gMyOGEkf0_Zk',
        },
    },
    {
        id: 2,
        title: 'Full-Stack Web Development Bootcamp',
        description:
            'Master HTML, CSS, JS, dan React dalam satu kursus intensif.',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDKwPjFMkjpF2knyV-QrS8R9oTNqUA2ob3cqkzGFBpQXeS4YLRnhXg_XRXaLzYcAaoMAzGcsvWC_GIDN3w8FdEw50V2ZrCG9COdEwMgBSpqRaS_vMqgIU0gJcS0S2HfQRV0hcpstEuFNtmOYDOlJSBOLVMe9Pn50zUN54pCaLVUJ1LrngXguNkoTKPqVunkfrd7DHbokCH_jENN7H2y5sD1iAxJB1Cfn2gl-IjFWB8PHaVka5PRPck0YMlMc8AUKgg2CaR7-IEJREU',
        category: 'Technology',
        categoryIcon: 'code',
        categoryColor: 'text-blue-500',
        price: 250000,
        duration: '12j',
        videoCount: 12,
        instructor: {
            name: 'Sarah K.',
            avatarUrl:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuC9hoBHBL1AcCqoW8H3KO7ujlJ_K9c9birFyDGOIyUoL4Q1-RyuxYGZtTkK6K3Ter-452_pB0DczkASddxszOD9P7OL_TunQtRlL9GHXe4nm9KJLx49OrOhsv29FiFXSDCbiuZorb_tgJ76bNk6E8RV6PcGqvuC5TMo16fHUHEraNhjmQCx__7smF-slyj0glfBAcJdQDx6ll5X2IYZH-7rBJch7BQzbT4sHZ59x5tEH-B3DgocZJ_s1YZVeyFRMGOtVno6DBasg_8',
        },
    },
    {
        id: 3,
        title: 'UI/UX Design Principles for Beginners',
        description:
            'Pahami prinsip dasar desain antarmuka yang user-friendly.',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAUvnvFX5gCg_yFzDAy5oReP_ZZySMLBcGVjQvft1enY9bNLBK02CQO_wQxr7hjtq-6Ar454Ed476Xg0fDqhIE2crnr7EJt9DbleoS1UxF1Cfx9S4rNz-YjJZcnLBatNZhO3zzBMGZ5yb5aDfJvQ7R9WYkFNlLUFe5Mah0TbBFYSwxbEXnEd8N8KCxGMelmbJdh25s8ApdO5wGJVUdd3XFUmMdJp_Wrfxl6rgBSSJR_868VBAlUPnWavadG4vCakfpK7T6YIDyCbuM',
        category: 'Desain',
        categoryIcon: 'palette',
        categoryColor: 'text-orange-500',
        price: null,
        duration: '45m',
        instructor: {
            name: 'Linda M.',
            avatarUrl:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDxXpOMootOQtdfMo5YYUl3p8YtfxZFMeteobKuu5dtZWrY3Jx7qfdFPTVVqiG95JKv9hhq-9bleWdycDsGJbrsrqFPktFUzNTagYqjxpqyZkJ08GgSOIkFHjlau8h7ltmCd9kiSXTBS8DM3TBq90KDxzTcLUe7lVoh2hixb8uap8wqwBioFZkZ9AaVgIkdTLako8f-GenfNW5NK8dZurHnkedzvdrhcpBj3Tl9V5SjVDb-6xnif25rxuzC4qEL6g3fxjU2UrvN2yI',
        },
    },
    {
        id: 4,
        title: 'Digital Marketing 101: SEO & SEM',
        description: 'Tingkatkan traffic website dan konversi penjualan Anda.',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB_xb0tVofrHc73pfmaJrdUJJhy_3tHCKZZQfEAV2f1f9mNCtjdXwypsd_24IeAQc6A2i7hzSdoI9ASxKTOuOfdaTf4Z_Bpg70Usn-y4dAFM8xJ-0FRy4l-TrCDzfYD4Udg7cNLOMIq8czhXCdWl8wh-aH3IsNnBV6joaLdm-Ti7SpOoQjEojydcmFTxN4bROlSMo0gciSNGrFuOlLJNutjDmOjKRIsRT_tHNj10KWZcw81cvwEMYn7vjouWjGc4HdbwweWnURx6jI',
        category: 'Marketing',
        categoryIcon: 'campaign',
        categoryColor: 'text-purple-500',
        price: 150000,
        duration: '5j',
        videoCount: 8,
        instructor: {
            name: 'David R.',
            avatarUrl:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuD2i7IXQXDVURq_ix82so5webR_aDcz2FOdd9d5lbT7bI3RC0C_HpAvdhUuzYqnI7AZ_lLUjT70_zQNDon2nw_g_lR_uitJcTws_-mhyCup5AJqxxankPE8X9hkvJ0Rmm_hRECeJF1nAzzocJSSWbNCvPmNv_OBCE74z3rNHtUeR_ULWmHajqDgWvFUBRoHAIMUy9zUlfmvWdq_ofn4Muadm9dH8vE2WfmXNju96G7EKYB0gthGDoL6Zbvj4eJlnLomGZOUh5tT8ow',
        },
    },
    {
        id: 5,
        title: 'Emotional Intelligence at Work',
        description:
            'Mengelola emosi diri dan orang lain untuk lingkungan kerja positif.',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDUYU4s5BX_x3tWbDFkUMBIB8BnGiayLQp9gEAJKMGzckecPM_Z5Du0WqbLliUr8PJ6XYYMdWkWgZOTPparYyx8Q7zXtuS18tUWcM5GvgQ1EG1_234txGnEv7Tz8iTaGjB2gixlHimL-DMazPQnGrGgZKYlHjcWt00tTEbW_svCKcShSBVq3dPvoHy2-o6ZdxK3vk0Huys0TRnMrZS2AO7ZI6Bbb6MwDgRFu2TsLK8EM_2as4CJhKypSA1ACgPyMt7_FUedRRJJQ0g',
        category: 'Soft Skill',
        categoryIcon: 'psychology',
        categoryColor: 'text-green-600',
        price: null,
        duration: '1j 30m',
        instructor: {
            name: 'Maya S.',
            avatarUrl:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDa9J33e4HyrydghRMxv6dWMGBLkEH54SIzVbY3Cyp5IkJMfnM-nj9R0Rc4zQKWmUSftjEH8kXtdQXiJziRtH2H0pXGbEYmYWZ_6qFhPkX6JD7BbvaxBzyofnqOnSNmFy74UycjN33GdUW_q1bwjhjYXKJUUse4Oewyx1OrLNP9-YUq3kpXc0T6r6EMMAjYNMlP5IBw8VgMgEde6T_8ljZEXDavYWXtcaCTbcd_1k58icnenEMUD0F9XQE5kqBbM1vbyVyemU1WlTs',
        },
    },
    {
        id: 6,
        title: 'Advanced Corporate Finance',
        description:
            'Analisis laporan keuangan dan strategi investasi perusahaan.',
        imageUrl:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAM21VnGRP6wwvl_VM7MzTHnQ7EVaT8DPnBoIaoXPQ7zy-nWOY6J9n5XpRcCf1hvtPaUDHYqZx8-yyhmBmCAXrXIPsctYTr3fc4YhqrjK2Lyq1a_TLQaCgHjD4qBByIy-OI2DvwcgXgqJDwViLDBiM6KJ3RqFLTy5WViro-6ivINAgxM4-lBvuy0h3qJZM5tTN1h0eMSvd8jGqHwFGm1UA8ctef-ZCqQ0nQv3Y_9zNFccaPMv0SV8y07YIE-MeObp7921CFMEpgY-c',
        category: 'Finance',
        categoryIcon: 'trending_up',
        categoryColor: 'text-red-500',
        price: 500000,
        duration: '15j',
        videoCount: 20,
        instructor: {
            name: 'Robert T.',
            avatarUrl:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCLni8Cf5LWTFz1LhlA6MzSwWshD-vWIHi1AZ9v3HeGhgou9RYk04RmXMBOiWEit0RbzGZiE2lLOs7lxPqz5ZYT9cA3o6qbxzxMRW_JJJu0RgmLnClKoTAoIMAD37TThPAha8NwwzIKw59HGlNEe1eD4OSXruxHC_hSVgsTy2Y3WK8cGAdxLQu34x4C7MG6XmE60XxtTgy6weGYjCLl3JNHGzx4igGb8t9WBgQwACI4O2F4kSt3sFuFGB5xtTAVQtIMRoG9VwpoEGk',
        },
    },
];

interface ListModulProps {
    modules?: Module[];
    currentPage?: number;
    totalPages?: number;
}

export default function ListModul({
    modules = sampleModules,
    currentPage = 1,
    totalPages = 12,
}: ListModulProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState<FilterTab>('all');
    const [page, setPage] = useState(currentPage);

    // Filter modules based on active tab and search
    const filteredModules = modules.filter((module) => {
        // Filter by tab
        if (activeTab === 'free' && module.price !== null) return false;
        if (activeTab === 'paid' && module.price === null) return false;

        // Filter by search
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            return (
                module.title.toLowerCase().includes(query) ||
                module.description.toLowerCase().includes(query) ||
                module.instructor.name.toLowerCase().includes(query) ||
                module.category.toLowerCase().includes(query)
            );
        }

        return true;
    });

    const handleModuleClick = (module: Module) => {
        // Navigate to module detail
        // console.log('Navigating to module:', module.id);
        // route.visit('/modul/1');
    };

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        // In real app, fetch new data or use Inertia navigation
        // router.visit(route('user.modul.index', { page: newPage }));
    };

    return (
        <UserLayout>
            <Head title="Modul Saya - LMS Platform" />

            {/* Hero Section */}
            <HeroSection
                searchValue={searchQuery}
                onSearchChange={setSearchQuery}
            />

            {/* Filter Toolbar */}
            <FilterToolbar
                activeTab={activeTab}
                onTabChange={setActiveTab}
                onCategoryClick={() => console.log('Category dropdown clicked')}
                onSortClick={() => console.log('Sort dropdown clicked')}
            />

            {/* Module Grid */}
            <ModuleGrid
                modules={filteredModules}
                onModuleClick={handleModuleClick}
            />

            {/* Pagination */}
            <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </UserLayout>
    );
}
