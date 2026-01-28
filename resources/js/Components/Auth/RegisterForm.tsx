import Icon from '@/Components/Icon';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function RegisterForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="flex flex-1 flex-col items-center justify-center overflow-y-auto bg-white p-8 sm:p-16 lg:p-24">
            <div className="w-full max-w-[420px] space-y-8">
                <div className="mb-8 flex items-center gap-2 lg:hidden">
                    <Icon name="school" className="text-3xl text-primary" />
                    <span className="text-xl font-bold text-gray-900">
                        ImpactAcademy
                    </span>
                </div>
                <div className="space-y-2 text-left">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        Daftar Akun
                    </h2>
                    <p className="text-gray-500">
                        Mulai perjalanan belajar anda hari ini.
                    </p>
                </div>

                <form onSubmit={submit} className="mt-8 space-y-6">
                    <div className="space-y-5">
                        <div className="group">
                            <label
                                htmlFor="name"
                                className="mb-1.5 block text-sm font-medium leading-6 text-gray-700"
                            >
                                Nama Lengkap
                            </label>
                            <div className="relative">
                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="block w-full rounded-lg border-gray-300 py-3.5 pl-4 text-gray-900 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all duration-200 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 sm:text-sm sm:leading-6"
                                    placeholder="Nama Anda"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    required
                                />
                                {errors.name && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="group">
                            <label
                                htmlFor="email"
                                className="mb-1.5 block text-sm font-medium leading-6 text-gray-700"
                            >
                                Email
                            </label>
                            <div className="relative">
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="block w-full rounded-lg border-gray-300 py-3.5 pl-4 text-gray-900 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all duration-200 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 sm:text-sm sm:leading-6"
                                    placeholder="nama@perusahaan.com"
                                    autoComplete="username"
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                    required
                                />
                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="group">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-700"
                            >
                                Password
                            </label>
                            <div className="relative mt-1.5">
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="block w-full rounded-lg border-gray-300 py-3.5 pl-4 text-gray-900 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all duration-200 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 sm:text-sm sm:leading-6"
                                    placeholder="••••••••"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData('password', e.target.value)
                                    }
                                    required
                                />
                                {errors.password && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {errors.password}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="group">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium leading-6 text-gray-700"
                            >
                                Konfirmasi Password
                            </label>
                            <div className="relative mt-1.5">
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="block w-full rounded-lg border-gray-300 py-3.5 pl-4 text-gray-900 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all duration-200 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 sm:text-sm sm:leading-6"
                                    placeholder="••••••••"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData(
                                            'password_confirmation',
                                            e.target.value,
                                        )
                                    }
                                    required
                                />
                                {errors.password_confirmation && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {errors.password_confirmation}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="hover:bg-primary-hover group flex w-full justify-center rounded-lg bg-primary px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        <span>Daftar Sekarang</span>
                        <Icon
                            name="arrow_forward"
                            className="ml-2 text-[18px] transition-transform group-hover:translate-x-1"
                        />
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Sudah punya akun?{' '}
                    <a
                        href={route('login')}
                        className="hover:text-primary-hover font-semibold text-primary transition-colors"
                    >
                        Login disini
                    </a>
                </p>
            </div>
        </div>
    );
}
