import Icon from '@/Components/Icon';
import { getDummyClassRating } from '@/types/class';

interface PricingSidebarProps {
    classId?: number;
    price: number | null;
    originalPrice?: number;
    discount?: number;
    videoCount: number;
    duration: string;
    moduleCount: number;
    quizCount: number;
    onBuy?: () => void;
    isEnrolled?: boolean;
    type?: string;
    location?: string | null;
    implementationDate?: string | null;
    studentsCount?: number;
}

export default function PricingSidebar({
    classId,
    price,
    originalPrice,
    discount,
    videoCount,
    duration,
    moduleCount,
    quizCount,
    onBuy,
    isEnrolled = false,
    type,
    location,
    implementationDate,
    studentsCount,
}: PricingSidebarProps) {
    const formatPrice = (amount: number) => {
        return `Rp ${amount.toLocaleString('id-ID')}`;
    };
    const dummyRating = getDummyClassRating(classId, studentsCount);

    return (
        <div className="rounded-md border border-gray-200 bg-white p-6 shadow-sm">
            {/* Price Section */}
            <div className="mb-6">
                <p className="mb-1 text-sm font-medium text-gray-600">
                    Harga Spesial
                </p>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="whitespace-nowrap text-2xl font-bold text-gray-900 md:text-3xl">
                        {price === null || price === 0
                            ? 'GRATIS'
                            : formatPrice(price)}
                    </span>
                    {originalPrice && (
                        <span className="whitespace-nowrap text-base text-gray-400 line-through decoration-gray-400 decoration-1 md:text-lg">
                            {formatPrice(originalPrice)}
                        </span>
                    )}
                </div>
                {discount && (
                    <div className="mt-3 inline-flex items-center gap-1 rounded bg-red-50 px-2 py-1 text-xs font-bold text-red-600">
                        <Icon name="local_fire_department" size={14} />
                        HEMAT {discount}% HARI INI
                    </div>
                )}
            </div>

            {/* Stats Grid */}
            <div className="mb-6 grid grid-cols-2 gap-x-2 gap-y-4">
                {type === 'learning-package' ? (
                    <>
                        <div className="col-span-2 text-sm">
                            {studentsCount !== undefined &&
                            studentsCount > 0 ? (
                                <div className="flex flex-col gap-2.5">
                                    {dummyRating && (
                                        <div className="flex items-center gap-2.5">
                                            <Icon
                                                name="star"
                                                size={18}
                                                className="fill-amber-400 text-amber-400"
                                            />
                                            <span className="font-semibold text-gray-700">
                                                {dummyRating}
                                            </span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2.5">
                                        <Icon
                                            name="group"
                                            size={20}
                                            className="text-primary"
                                        />
                                        <span className="font-medium text-gray-700">
                                            {studentsCount} Siswa
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2.5">
                                    <Icon
                                        name="group"
                                        size={20}
                                        className="text-primary"
                                    />
                                    <span className="text-xs font-medium italic text-gray-400">
                                        Coming Soon
                                    </span>
                                </div>
                            )}
                        </div>
                        {location && (
                            <div className="col-span-2 flex items-center gap-2.5 text-sm">
                                <Icon
                                    name="location_on"
                                    size={20}
                                    className="text-primary"
                                />
                                <span className="font-medium text-gray-700">
                                    {location}
                                </span>
                            </div>
                        )}
                        {implementationDate && (
                            <div className="col-span-2 flex items-center gap-2.5 text-sm">
                                <Icon
                                    name="event"
                                    size={20}
                                    className="text-primary"
                                />
                                <span className="font-medium text-gray-700">
                                    {new Date(
                                        implementationDate,
                                    ).toLocaleDateString('id-ID', {
                                        day: '2-digit',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </span>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        {videoCount > 0 && (
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
                        )}
                        {duration && duration !== '0m' && (
                            <div className="flex items-center gap-2.5 text-sm">
                                <Icon
                                    name="schedule"
                                    size={20}
                                    className="text-primary"
                                />
                                <span className="font-medium text-gray-700">
                                    {duration}
                                </span>
                            </div>
                        )}
                        {moduleCount > 0 && (
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
                        )}
                        {quizCount > 0 && (
                            <div className="flex items-center gap-2.5 text-sm">
                                <Icon
                                    name="quiz"
                                    size={20}
                                    className="text-primary"
                                />
                                <span className="font-medium text-gray-700">
                                    {quizCount} Kuis
                                </span>
                            </div>
                        )}
                        {/* Students Count */}
                        <div className="col-span-2 text-sm">
                            {studentsCount !== undefined &&
                            studentsCount > 0 ? (
                                <div className="flex flex-col gap-2.5">
                                    {dummyRating && (
                                        <div className="flex items-center gap-2.5">
                                            <Icon
                                                name="star"
                                                size={18}
                                                className="fill-amber-400 text-amber-400"
                                            />
                                            <span className="font-semibold text-gray-700">
                                                {dummyRating}
                                            </span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2.5">
                                        <Icon
                                            name="group"
                                            size={20}
                                            className="text-primary"
                                        />
                                        <span className="font-medium text-gray-700">
                                            {studentsCount} Siswa
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2.5">
                                    <Icon
                                        name="group"
                                        size={20}
                                        className="text-primary"
                                    />
                                    <span className="text-xs font-medium italic text-gray-400">
                                        Coming Soon
                                    </span>
                                </div>
                            )}
                        </div>
                        {location && (
                            <div className="col-span-2 flex items-center gap-2.5 text-sm">
                                <Icon
                                    name="location_on"
                                    size={20}
                                    className="text-primary"
                                />
                                <span className="font-medium text-gray-700">
                                    {location}
                                </span>
                            </div>
                        )}
                        {implementationDate && (
                            <div className="col-span-2 flex items-center gap-2.5 text-sm">
                                <Icon
                                    name="event"
                                    size={20}
                                    className="text-primary"
                                />
                                <span className="font-medium text-gray-700">
                                    {new Date(
                                        implementationDate,
                                    ).toLocaleDateString('id-ID', {
                                        day: '2-digit',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </span>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Buttons */}
            <div className="py-2">
                <button
                    onClick={onBuy}
                    className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-bold text-white shadow-lg transition-all ${
                        isEnrolled
                            ? 'bg-green-600 shadow-green-600/20 hover:bg-green-700 hover:shadow-green-600/40'
                            : 'bg-primary shadow-primary/20 hover:bg-primary-dark hover:shadow-primary/40'
                    }`}
                >
                    {isEnrolled
                        ? 'Belajar Sekarang'
                        : type === 'learning-package'
                          ? 'Daftar Sekarang'
                          : price === 0
                            ? 'Dapatkan Modul Sekarang'
                            : 'Beli Modul Sekarang'}
                    <Icon
                        name={isEnrolled ? 'play_arrow' : 'arrow_forward'}
                        size={20}
                    />
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
