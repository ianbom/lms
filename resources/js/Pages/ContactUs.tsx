import ContactForm from '@/Components/Contact/ContactForm';
import ContactHero from '@/Components/Contact/ContactHero';
import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';

export default function ContactUs() {
    return (
        <UserLayout>
            <Head title="Contact Us" />

            <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
                <div className="flex min-h-[600px] w-full flex-col gap-8 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl lg:flex-row lg:gap-0">
                    <ContactHero />
                    <ContactForm />
                </div>
            </div>
        </UserLayout>
    );
}
