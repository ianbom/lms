import ContactSection from '@/Components/Corporate/ContactSection';
import HeroSection from '@/Components/Corporate/HeroSection';
import LogoGrid from '@/Components/Corporate/LogoGrid';
import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';

export default function CorporateTraining() {
    return (
        <UserLayout fullWidth>
            <Head title="Impact Academy - Contact" />

            <div className="flex min-h-screen w-full flex-col bg-[#f6f8f7] text-[#111814]">
                <main className="flex w-full flex-grow flex-col items-center">
                    <HeroSection />
                    <ContactSection />
                    <LogoGrid />
                </main>
            </div>
        </UserLayout>
    );
}
