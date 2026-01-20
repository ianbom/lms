import ClassTable from '@/Components/Admin/ClassTable';
import FilterToolbar from '@/Components/Admin/FilterToolbar';
import Pagination from '@/Components/Admin/Pagination';
import Icon from '@/Components/Icon';
import AdminLayout from '@/Layouts/AdminLayout';
import { ClassItem } from '@/types/admin';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

// Sample data - in production, this would come from props
const sampleClasses: ClassItem[] = [
    {
        id: 1,
        title: 'Advanced UX Principles',
        category: 'Design Category',
        price: 49.0,
        modules: 12,
        status: 'published',
        thumbnail:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBN5FsqjJWP7uryyaBQ1LIuSrnz4p1t-3fWvqZ_11EAtOuHuhHSjX-AOYBWd0NpYsiERM4rrHrLP1TEEN_r7L_LfQncUOwajhEoktcx5nhvF7v-HY6Z1ypI9EmZfhN4Wubiu9Pd4LzrmpDHCxgBPQwRyhYfcDol8T58bU0gU0cLriyQ4pJ1Gh9doW2sjPNm9_L6xQQAg-FHx2vbBtUX6jtKoTwuKo3UdIVnEOHR7VlKwxqDvzKGP5bSUq-zyrhOH7qpekK2JDv6gdwJ',
    },
    {
        id: 2,
        title: 'Python for Data Science',
        category: 'Development',
        price: 89.0,
        originalPrice: 120.0,
        modules: 24,
        status: 'draft',
        thumbnail:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDdkCigARtJvMwvqZHjjcOu8F1srF9LCUFc-Luv0S-AmQXFQ1XasqvjuuN1ZwG8cvqR3UzpcG3usshldMr5FM9Tihy9zSu-NP1RpIiskCJAArhmm7jSQ7N5BqnogILiIDTIii9dxhS25JBkvCC5ZACYinjJ8NWZvUylb--sAJFho-w8QVAZTwZ_br2WWZvL1GQ4CQJ_AoMlymYeDiK4TZXSqjeqlz1dGIe9PDFP4xs9Yo9d3nMT7vAOA214e-V3JwWAB4LyBWmnkNwo',
    },
    {
        id: 3,
        title: 'Corporate Leadership 101',
        category: 'Business',
        price: 0,
        isFree: true,
        modules: 8,
        status: 'published',
        thumbnail:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuA4mosCRNlqbFAJjwQvXzqs2Gxtm9Pr1VgKr_oIaAQtpdGdbQi2U0al2MXp8mbVOmOoVgZhqa3QYl1vHf2eBsjzvJPrvlan3BbbQAm4wVtuOw3YDzMvPDFU5nZWjNSPIJFyRX2cSTkXWxEBLINnxen77pgjdh_puLYM2nmTZ3FJhrIsSNDaacwBf0vIxhtXhR5Ok_0LPbF9PKvlSWAoOro7gkS9MjcE3ekgfNzuqHLFiI-UQ9_r27wz0Y-rvYKqgl4FuepJJ_UALk15',
    },
    {
        id: 4,
        title: 'Photography Masterclass',
        category: 'Creative Arts',
        price: 149.0,
        modules: 42,
        status: 'reviewing',
        thumbnail:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAu33ooNHjXJ63SxnpoXwvOKeRWxU-gQDdTln5FyMiJ2No2b3XbjqRLHvUivVXqvO6tXw5-Rw7UiF6IE_nNO4e0iaRHXk5jbpgTqhx9Dj0omRj9wqUFoPTIY9RgnMRj5EbCj60KQI71HECnDTAexWF9wiJNqkGoKbLCesih5YzuFV68qn9qJLFN6kEsOnFzhqDTO8-HYc29QB9cm2XAMetDHlTRNttvyQJrIx6qz7D9mcXVglUK5FB9XyMvXZ6zgW8goSDdUKanhN26',
    },
    {
        id: 5,
        title: 'Digital Marketing 2024',
        category: 'Marketing',
        price: 199.0,
        modules: 18,
        status: 'draft',
        thumbnail:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCrGRSlYrE7lIswuqdlUOFVfrGAhqnx8k_3paxvzChpGgsJuTouOaSwhSmGuSXVyNvHMVmSjErhgMqTffy4XtVebJ7-SGrPos4S00U-qYyC10Wqj_nPej9jYZUk7BLORwkBEq_GKD9QyFsFA2XqZcjnLa-iazAkYZ6qxhqppGyOsbLBdhbyrH7zBkBZtGhAqTZXr-Rm2kBjPz1CxOsiOjrYa1MnZArcuxbknFur8kvMo2JI6BZDT4N5JvwChPsj4QU-WMjuswFmfwG2',
    },
];

export default function ClassManagement() {
    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const handleMenuClick = (id: number) => {
        console.log('Menu clicked for class:', id);
    };

    return (
        <AdminLayout breadcrumbs={[{ label: 'Classes' }]}>
            <Head title="Class Management" />

            {/* Page Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-[#101814]">
                        Class Management
                    </h1>
                </div>
                <div className="flex items-center gap-3">
                    <button className="relative hidden h-10 w-10 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#5e6a62] transition-colors hover:bg-[#f0f5f2] md:flex">
                        <Icon name="notifications" size={20} />
                        <span className="absolute right-2.5 top-2 h-2 w-2 rounded-full border border-white bg-red-500" />
                    </button>
                    <Link
                        href={route('admin.classes.create')}
                        className="flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-[#00622e]"
                    >
                        <Icon name="add" size={20} />
                        <span className="truncate">Create New Class</span>
                    </Link>
                </div>
            </div>

            {/* Filters Toolbar */}
            <FilterToolbar
                searchValue={searchValue}
                onSearchChange={setSearchValue}
            />

            {/* Data Table */}
            <div className="flex flex-col overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm">
                <ClassTable
                    classes={sampleClasses}
                    onMenuClick={handleMenuClick}
                />

                {/* Pagination */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={8}
                    totalItems={42}
                    itemsPerPage={5}
                    onPageChange={setCurrentPage}
                />
            </div>

            {/* Footer Copyright */}
            <div className="mt-auto py-6 text-center">
                <p className="text-xs text-[#9aabb1]">
                    © {new Date().getFullYear()} EduManage System. All rights
                    reserved.
                </p>
            </div>
        </AdminLayout>
    );
}
