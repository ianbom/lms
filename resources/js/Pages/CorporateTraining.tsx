import ContactSection from '@/Components/Corporate/ContactSection';
import HeroSection from '@/Components/Corporate/HeroSection';
import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';

interface Category {
    id: number;
    name: string;
}

interface Props {
    categories: Category[];
}

export default function CorporateTraining({ categories }: Props) {
    return (
        <UserLayout fullWidth>
            <Head title="Impact Academy - Kontak" />

            <div className="flex min-h-screen w-full flex-col bg-[#f6f8f7] text-[#111814]">
                <main className="flex w-full flex-grow flex-col items-center">
                    <HeroSection />
                    <ContactSection categories={categories} />
                </main>
            </div>
        </UserLayout>
    );
}
