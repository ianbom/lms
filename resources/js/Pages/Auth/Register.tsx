import AuthBanner from '@/Components/Auth/AuthBanner';
import RegisterForm from '@/Components/Auth/RegisterForm';
import { Head } from '@inertiajs/react';

export default function Register() {
    return (
        <div className="flex h-screen w-full flex-row overflow-hidden bg-gray-50 text-gray-900 selection:bg-primary/20 selection:text-primary">
            <Head title="Register - ImpactAcademy" />

            <AuthBanner />
            <RegisterForm />
        </div>
    );
}
