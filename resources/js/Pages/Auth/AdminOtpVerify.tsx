import AuthBanner from '@/Components/Auth/AuthBanner';
import Icon from '@/Components/Icon';
import TextInput from '@/Components/TextInput';
import { Head, router } from '@inertiajs/react';
import { FormEventHandler, useRef, useState } from 'react';

interface AdminOtpVerifyProps {
    email: string;
    status?: string;
}

export default function AdminOtpVerify({ email, status }: AdminOtpVerifyProps) {
    const [otpDigits, setOtpDigits] = useState<string[]>([
        '',
        '',
        '',
        '',
        '',
        '',
    ]);
    const [processing, setProcessing] = useState(false);
    const [resending, setResending] = useState(false);
    const [error, setError] = useState('');
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleDigitChange = (index: number, value: string) => {
        // Only allow single digit
        const digit = value.replace(/\D/g, '').slice(-1);
        const newDigits = [...otpDigits];
        newDigits[index] = digit;
        setOtpDigits(newDigits);
        setError('');

        // Auto-focus next input
        if (digit && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        index: number,
        e: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pasted = e.clipboardData
            .getData('text')
            .replace(/\D/g, '')
            .slice(0, 6);
        if (pasted.length === 6) {
            const digits = pasted.split('');
            setOtpDigits(digits);
            inputRefs.current[5]?.focus();
        }
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        const code = otpDigits.join('');
        if (code.length !== 6) {
            setError('Masukkan 6 digit kode OTP');
            return;
        }

        setProcessing(true);
        router.post(
            route('admin.otp.verify'),
            { otp_code: code },
            {
                onError: (errors) => {
                    setError(
                        errors.otp_code || 'Kode OTP tidak valid.',
                    );
                    setOtpDigits(['', '', '', '', '', '']);
                    inputRefs.current[0]?.focus();
                },
                onFinish: () => setProcessing(false),
            },
        );
    };

    const resendOtp = () => {
        setResending(true);
        router.post(route('admin.otp.resend'), {}, {
            onFinish: () => setResending(false),
            preserveScroll: true,
        });
    };

    return (
        <div className="flex h-screen w-full flex-row overflow-hidden bg-gray-50 text-gray-900 selection:bg-primary/20 selection:text-primary">
            <Head title="Verifikasi OTP - ImpactAcademy" />

            <AuthBanner />

            <div className="flex flex-1 flex-col items-center justify-center overflow-y-auto bg-white p-8 sm:p-16 lg:p-24">
                <div className="w-full max-w-[420px] space-y-8">
                    {/* Mobile Logo */}
                    <div className="mb-8 flex items-center gap-2 lg:hidden">
                        <Icon
                            name="school"
                            className="text-3xl text-primary"
                        />
                        <span className="text-xl font-bold text-gray-900">
                            ImpactAcademy
                        </span>
                    </div>

                    {/* Header */}
                    <div className="space-y-2 text-left">
                        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                            <Icon
                                name="lock"
                                className="text-3xl text-primary"
                            />
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                            Verifikasi OTP
                        </h2>
                        <p className="text-gray-500">
                            Masukkan kode 6 digit yang telah dikirim ke{' '}
                            <span className="font-semibold text-gray-700">
                                {email}
                            </span>
                        </p>
                    </div>

                    {/* Status Message */}
                    {status && (
                        <div className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                            <Icon name="check_circle" className="text-lg" />
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="mt-8 space-y-6">
                        {/* OTP Input */}
                        <div>
                            <label className="mb-3 block text-sm font-medium text-gray-700">
                                Kode OTP
                            </label>
                            <div
                                className="flex justify-between gap-3"
                                onPaste={handlePaste}
                            >
                                {otpDigits.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={(el) => {
                                            inputRefs.current[index] = el;
                                        }}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) =>
                                            handleDigitChange(
                                                index,
                                                e.target.value,
                                            )
                                        }
                                        onKeyDown={(e) =>
                                            handleKeyDown(index, e)
                                        }
                                        autoFocus={index === 0}
                                        className={`h-14 w-14 rounded-xl border-2 text-center text-2xl font-bold transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 ${error
                                                ? 'border-red-300 bg-red-50'
                                                : digit
                                                    ? 'border-primary/30 bg-primary/5'
                                                    : 'border-gray-200 bg-gray-50'
                                            }`}
                                    />
                                ))}
                            </div>
                            {error && (
                                <p className="mt-3 flex items-center gap-1 text-sm text-red-600">
                                    <Icon name="error" className="text-base" />
                                    {error}
                                </p>
                            )}
                        </div>

                        {/* Timer & Resend */}
                        <div className="text-center">
                            <p className="text-sm text-gray-500">
                                Tidak menerima kode?{' '}
                                <button
                                    type="button"
                                    onClick={resendOtp}
                                    disabled={resending}
                                    className="font-semibold text-primary transition-colors hover:text-primary/80 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {resending
                                        ? 'Mengirim...'
                                        : 'Kirim Ulang'}
                                </button>
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={
                                processing || otpDigits.join('').length !== 6
                            }
                            className="btn-primary hover:bg-primary-hover group flex w-full justify-center rounded-lg bg-primary px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {processing ? (
                                <span>Memverifikasi...</span>
                            ) : (
                                <>
                                    <span>Verifikasi</span>
                                    <Icon
                                        name="verified"
                                        className="ml-2 text-[18px] transition-transform group-hover:scale-110"
                                    />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Back to Login */}
                    <p className="mt-6 text-center text-sm text-gray-600">
                        <a
                            href={route('login')}
                            className="inline-flex items-center gap-1 font-semibold text-primary transition-colors hover:text-primary/80"
                        >
                            <Icon name="arrow_back" className="text-base" />
                            Kembali ke Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
