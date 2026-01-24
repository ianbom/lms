import Icon from '@/Components/Icon';

interface PricingSidebarProps {
    price: number | null;
    originalPrice?: number;
    discount?: number;
    videoCount: number;
    duration: string;
    moduleCount: number;
    quizCount: number;
    onBuy?: () => void;
    onAddWishlist?: () => void;
}

export default function PricingSidebar({
    price,
    originalPrice,
    discount,
    videoCount,
    duration,
    moduleCount,
    quizCount,
    onBuy,
    onAddWishlist,
}: PricingSidebarProps) {
    const formatPrice = (amount: number) => {
        return `Rp ${amount.toLocaleString('id-ID')}`;
    };

    return (
        <div className="rounded-md border border-gray-200 bg-white p-6 shadow-sm">
            {/* Price Section */}
            <div className="mb-6">
                <p className="mb-1 text-sm font-medium text-gray-600">
                    Harga Spesial
                </p>
                <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-gray-900">
                        {price === null ? 'GRATIS' : formatPrice(price)}
                    </span>
                    {originalPrice && (
                        <span className="text-lg text-gray-400 line-through decoration-gray-400 decoration-1">
                            {formatPrice(originalPrice)}
                        </span>
                    )}
                </div>
                {discount && (
                    <div className="mt-2 inline-flex items-center gap-1 rounded bg-red-50 px-2 py-1 text-xs font-bold text-red-600">
                        <Icon name="local_fire_department" size={14} />
                        HEMAT {discount}% HARI INI
                    </div>
                )}
            </div>

            {/* Stats Grid */}
            <div className="mb-6 grid grid-cols-2 gap-x-2 gap-y-4">
                <div className="flex items-center gap-2.5 text-sm">
                    <Icon
                        name="play_circle"
                        size={20}
                        className="text-primary"
                    />
                    <span className="font-medium text-gray-700">
                        {videoCount} Video
                    </span>
                </div>
                <div className="flex items-center gap-2.5 text-sm">
                    <Icon name="schedule" size={20} className="text-primary" />
                    <span className="font-medium text-gray-700">
                        {duration}
                    </span>
                </div>
                <div className="flex items-center gap-2.5 text-sm">
                    <Icon
                        name="view_module"
                        size={20}
                        className="text-primary"
                    />
                    <span className="font-medium text-gray-700">
                        {moduleCount} Modul
                    </span>
                </div>
                <div className="flex items-center gap-2.5 text-sm">
                    <Icon name="quiz" size={20} className="text-primary" />
                    <span className="font-medium text-gray-700">
                        {quizCount} Kuis
                    </span>
                </div>
            </div>

            {/* Buttons */}
            <div className="py-2">
                <button
                    onClick={onBuy}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-primary/40"
                >
                    Beli Modul Sekarang
                    <Icon name="arrow_forward" size={20} />
                </button>
            </div>

            {/* Guarantee */}
            {/* <div className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-gray-400">
                <Icon
                    name="verified_user"
                    size={16}
                    className="text-gray-400"
                />
                Garansi 30 hari uang kembali
            </div> */}
        </div>
    );
}
