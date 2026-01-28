import Icon from '@/Components/Icon';
import ProfileInput from '@/Components/User/Dashboard/Profile/ProfileInput';
import ProfileSection from '@/Components/User/Dashboard/Profile/ProfileSection';
import UserDashboardLayout from '@/Layouts/UserDashboardLayout';
import { PageProps } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

interface ProfileForm {
    name: string;
    email: string;
    phone: string;
    company: string;
    position: string;
}

export default function Profile({ auth }: PageProps) {
    const user = auth.user;

    const { data, setData, patch, processing, errors, reset } =
        useForm<ProfileForm>({
            name: user.name,
            email: user.email,
            phone: user.phone || '',
            company: user.company || '',
            position: user.position || '',
        });

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route('user.profile.update'));
    };

    return (
        <UserDashboardLayout>
            <Head title="Edit Profile" />

            <div className="mb-4 py-6 flex flex-col gap-2">
                <h1 className="text-3xl font-black tracking-tight text-[#111814] md:text-4xl">
                    Edit Profile
                </h1>
                <p className="text-lg text-[#618975]">
                    Manage your account settings and preferences.
                </p>
            </div>

            <form onSubmit={submit} className="flex flex-col gap-8 pb-32">
                {/* General Info Section */}
                <ProfileSection title="General Info" className="bg-white">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
                        <ProfileInput
                            label="Full Name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            error={errors.name}
                            placeholder="John Doe"
                        />
                        <ProfileInput
                            label="Email Address"
                            type="email"
                            icon="mail"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            error={errors.email}
                            placeholder="john.doe@company.com"
                        />
                        <ProfileInput
                            label="Phone Number"
                            type="tel"
                            value={data.phone}
                            onChange={(e) => setData('phone', e.target.value)}
                            placeholder="+1 (555) 123-4567"
                        />
                        <ProfileInput
                            label="Company Name"
                            value={data.company}
                            onChange={(e) => setData('company', e.target.value)}
                            placeholder="TechFlow Solutions"
                        />
                        <div className="md:col-span-2">
                            <ProfileInput
                                label="Role / Position"
                                value={data.position}
                                onChange={(e) =>
                                    setData('position', e.target.value)
                                }
                                placeholder="Senior Administrator"
                            />
                        </div>
                    </div>
                </ProfileSection>

                {/* Security Settings Section - Styled differently as requested */}
                <ProfileSection
                    title="Security Settings"
                    description="Update your password to keep your account secure."
                    className="relative rounded-l-md border-l-[6px] !border-gray-100 border-l-primary bg-[#E6F4EF]"
                    icon={
                        <span className="material-symbols-outlined text-primary">
                            lock
                        </span>
                    }
                >
                    {/* Background texture for visual interest */}
                    <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl"></div>

                    <div className="relative z-10 grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
                        <div className="relative">
                            <ProfileInput
                                label="New Password"
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder="••••••••"
                                autoComplete="new-password"
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    setPasswordVisible(!passwordVisible)
                                }
                                className="absolute right-3 top-[38px] text-gray-400 transition-colors hover:text-gray-600"
                            >
                                <Icon
                                    name={
                                        passwordVisible
                                            ? 'visibility'
                                            : 'visibility_off'
                                    }
                                    size={20}
                                />
                            </button>
                        </div>
                        <div className="relative">
                            <ProfileInput
                                label="Confirm Password"
                                type={
                                    confirmPasswordVisible ? 'text' : 'password'
                                }
                                placeholder="••••••••"
                                autoComplete="new-password"
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    setConfirmPasswordVisible(
                                        !confirmPasswordVisible,
                                    )
                                }
                                className="absolute right-3 top-[38px] text-gray-400 transition-colors hover:text-gray-600"
                            >
                                <Icon
                                    name={
                                        confirmPasswordVisible
                                            ? 'visibility'
                                            : 'visibility_off'
                                    }
                                    size={20}
                                />
                            </button>
                        </div>
                    </div>
                </ProfileSection>

                {/* Action Bar */}
                <div className="flex w-full justify-end gap-3 pt-6">
                    <button
                        type="button"
                        onClick={() => reset()}
                        className="h-12 rounded-xl border-2 border-gray-200 bg-white px-6 font-bold text-gray-700 transition-all hover:bg-gray-50 focus:ring-2 focus:ring-gray-200"
                    >
                        Batal
                    </button>
                    <button
                        type="submit"
                        disabled={processing}
                        className="h-12 rounded-xl bg-primary px-6 font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-primary/40 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        {processing ? 'Saving...' : 'Simpan Perubahan'}
                    </button>
                </div>
            </form>
        </UserDashboardLayout>
    );
}
