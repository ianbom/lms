import Checkbox from '@/Components/Checkbox';
import Icon from '@/Components/Icon';
import TextInput from '@/Components/TextInput';
import { Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function LoginForm({
    canResetPassword,
    status,
}: {
    canResetPassword: boolean;
    status?: string;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="flex flex-1 flex-col items-center justify-center overflow-y-auto bg-white p-8 sm:p-16 lg:p-24">
            <div className="w-full max-w-[420px] space-y-8">
                <div className="mb-8 flex items-center gap-2 lg:hidden">
                    <Icon name="school" className="text-3xl text-primary" />
                    <span className="text-xl font-bold text-gray-900">
                        EduPro
                    </span>
                </div>
                <div className="space-y-2 text-left">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        Login
                    </h2>
                    <p className="text-gray-500">
                        Masuk ke dashboard pembelajaran anda.
                    </p>
                </div>

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="mt-8 space-y-6">
                    <div className="space-y-5">
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
                                    className="input-field shadow-input block w-full rounded-lg border-gray-300 py-3.5 pl-4 text-gray-900 transition-all duration-200 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 sm:text-sm sm:leading-6"
                                    placeholder="nama@perusahaan.com"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                />
                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="group">
                            <div className="mb-1.5 flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-gray-700"
                                >
                                    Password
                                </label>
                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="hover:text-primary-hover text-sm font-semibold text-primary transition-colors"
                                    >
                                        Lupa Password?
                                    </Link>
                                )}
                            </div>
                            <div className="relative">
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="input-field shadow-input block w-full rounded-lg border-gray-300 py-3.5 pl-4 text-gray-900 transition-all duration-200 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 sm:text-sm sm:leading-6"
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData('password', e.target.value)
                                    }
                                />
                                {errors.password && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {errors.password}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="block">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData('remember', e.target.checked)
                                    }
                                />
                                <span className="ms-2 text-sm text-gray-600">
                                    Remember me
                                </span>
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="btn-primary hover:bg-primary-hover group flex w-full justify-center rounded-lg bg-primary px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        <span>Login</span>
                        <Icon
                            name="arrow_forward"
                            className="ml-2 text-[18px] transition-transform group-hover:translate-x-1"
                        />
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Belum punya akun?{' '}
                    <a
                        href={route('register')}
                        className="hover:text-primary-hover font-semibold text-primary transition-colors"
                    >
                        Daftar gratis
                    </a>
                </p>
            </div>
        </div>
    );
}
