import AuthBanner from '@/Components/Auth/AuthBanner';
import LoginForm from '@/Components/Auth/LoginForm';
import { Head } from '@inertiajs/react';

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    return (
        <div className="flex h-screen w-full flex-row overflow-hidden bg-gray-50 text-gray-900 selection:bg-primary/20 selection:text-primary">
            <Head title="Login - ImpactAcademy" />

            <AuthBanner />
            <LoginForm canResetPassword={canResetPassword} status={status} />
        </div>
    );
}
