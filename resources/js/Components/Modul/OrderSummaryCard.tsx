import Icon from '@/Components/Icon';

interface OrderSummaryCardProps {
    moduleTitle?: string;
    instructorName?: string;
    thumbnailUrl?: string;
    price?: number;
    discount?: number;
}

export default function OrderSummaryCard({
    moduleTitle = 'Advanced Project Management: Mastering Agile',
    instructorName = 'Dr. Budi Santoso',
    thumbnailUrl = 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&q=80',
    price = 1000000,
    discount = 250000,
}: OrderSummaryCardProps) {
    const formatPrice = (amount: number) => {
        return `Rp ${amount.toLocaleString('id-ID')}`;
    };

    const total = price - (discount || 0);

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            {/* Header */}
            <div className="border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white px-6 py-4">
                <h3 className="text-base font-semibold text-gray-900">
                    Ringkasan Pesanan
                </h3>
            </div>

            {/* Module Info */}
            <div className="p-6">
                <div className="flex gap-4">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-gray-100">
                        <img
                            src={thumbnailUrl}
                            alt={moduleTitle}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h4 className="line-clamp-2 text-sm font-semibold leading-tight text-gray-900">
                            {moduleTitle}
                        </h4>
                        <p className="mt-1.5 text-xs text-gray-500">
                            oleh {instructorName}
                        </p>
                    </div>
                </div>
            </div>

            {/* Price Breakdown */}
            <div className="border-t border-gray-100 bg-gray-50/30 px-6 py-5">
                <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Harga Normal</span>
                        <span className="text-gray-400 line-through">
                            {formatPrice(price)}
                        </span>
                    </div>
                    {discount > 0 && (
                        <div className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-1.5 font-medium text-green-600">
                                <Icon name="local_offer" size={16} />
                                Diskon
                            </span>
                            <span className="font-semibold text-green-600">
                                -{formatPrice(discount)}
                            </span>
                        </div>
                    )}
                </div>

                {/* Total */}
                <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-5">
                    <span className="text-sm font-semibold text-gray-900">
                        Total Pembayaran
                    </span>
                    <span className="text-2xl font-bold text-primary">
                        {formatPrice(total)}
                    </span>
                </div>
            </div>

            {/* Trust Footer */}
            <div className="border-t border-gray-100 bg-green-50 px-6 py-3.5">
                <div className="flex items-center justify-center gap-2 text-xs font-medium text-green-700">
                    <Icon name="verified_user" size={16} />
                    <span>Garansi 30 Hari Uang Kembali</span>
                </div>
            </div>
        </div>
    );
}
