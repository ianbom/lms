import Icon from '@/Components/Icon';

export default function PaymentInstructionCard() {
    const handleCopy = () => {
        navigator.clipboard.writeText('0700012656372');
    };

    return (
        <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white px-6 py-4">
                <div className="flex size-10 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                    <Icon name="account_balance" size={20} />
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                    Transfer Bank Manual
                </h3>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Bank Info */}
                <div className="rounded-md border border-gray-200 bg-gradient-to-br from-gray-50/50 to-white p-6">
                    {/* Bank Header */}
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            {/* Mandiri Logo */}
                            <div className="flex h-10 w-16 items-center justify-center overflow-hidden rounded-md border border-gray-200 bg-white">
                                <svg
                                    viewBox="0 0 100 32"
                                    className="h-5 w-full"
                                    fill="none"
                                >
                                    <rect
                                        width="100"
                                        height="32"
                                        fill="#003D79"
                                        rx="2"
                                    />
                                    <path
                                        d="M22 10.5C29 6.5 40 6.5 47 10.5"
                                        stroke="#F5B335"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M22 14C29 10 40 10 47 14"
                                        stroke="#F5B335"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M22 17.5C29 13.5 40 13.5 47 17.5"
                                        stroke="#F5B335"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                    />
                                    <text
                                        x="68"
                                        y="22"
                                        fill="white"
                                        fontFamily="Arial, sans-serif"
                                        fontSize="13"
                                        fontWeight="900"
                                        textAnchor="middle"
                                    >
                                        mandiri
                                    </text>
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">
                                    Bank Mandiri
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Account Number */}
                    <div className="mb-5">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                            Nomor Rekening
                        </p>
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-2xl font-bold tracking-wide text-gray-900">
                                0700012656372
                            </span>
                            <button
                                onClick={handleCopy}
                                className="flex size-9 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-600 transition-all hover:border-primary hover:bg-primary-light hover:text-primary"
                                title="Salin Nomor Rekening"
                            >
                                <Icon name="content_copy" size={18} />
                            </button>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                            a.n. PT Dampak Sosial Indonesia
                        </p>
                    </div>

                    {/* Warning */}
                    {/* <div className="flex gap-3 rounded-md border border-amber-200/60 bg-amber-50/50 p-4">
                        <Icon
                            name="info"
                            size={20}
                            className="mt-0.5 shrink-0 text-amber-600"
                        />
                        <div className="text-sm leading-relaxed text-amber-900">
                            <p className="font-semibold">Penting:</p>
                            <p className="text-amber-800">
                                Mohon transfer tepat sampai 3 digit terakhir
                                untuk mempercepat proses verifikasi otomatis.
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}
