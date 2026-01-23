import { PageHeader } from '@/Components/Admin';
import { MentorCardGrid, MentorSearchBar } from '@/Components/Admin/Mentor';
import AdminLayout from '@/Layouts/AdminLayout';
import { Mentor } from '@/types/admin';
import { Head } from '@inertiajs/react';
import { useMemo, useState } from 'react';

// Define the shape of data coming from the backend
interface BackendMentor {
    id: number;
    name: string;
    headline: string;
    description: string;
    avatar_url?: string;
}

interface ListMentorProps {
    mentors: BackendMentor[];
}

export default function ListMentor({ mentors }: ListMentorProps) {
    const [searchValue, setSearchValue] = useState('');

    // Transform backend data to match the MentorCard component expectation
    const formattedMentors: Mentor[] = useMemo(() => {
        return mentors.map((item) => ({
            id: item.id,
            name: item.name,
            // Fallback for email since it's not in the DB model for mentors yet
            email: item.headline || 'No headline',
            avatarUrl: item.avatar_url,
            isOnline: false, // Default
            stats: {
                classes: 0, // Default
                activeStudents: 0, // Default
                rating: 0, // Default
            },
        }));
    }, [mentors]);

    const filteredMentors = useMemo(() => {
        const query = searchValue.toLowerCase();
        return formattedMentors.filter(
            (mentor) =>
                mentor.name.toLowerCase().includes(query) ||
                mentor.email.toLowerCase().includes(query),
        );
    }, [searchValue, formattedMentors]);

    return (
        <AdminLayout breadcrumbs={[{ label: 'Direktori Mentor' }]}>
            <Head title="Direktori Mentor" />

            <div className="flex flex-col gap-8">
                {/* Header Section */}
                <PageHeader
                    title="Direktori Mentor"
                    description="Kelola semua mentor dan performa mereka di sini."
                    actionLabel="Tambah Mentor"
                    onAction={() =>
                        (window.location.href = route('admin.mentors.create'))
                    }
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
