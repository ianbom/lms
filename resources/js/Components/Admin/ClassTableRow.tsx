import Icon from '@/Components/Icon';
import { ClassItem } from '@/types/admin';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import StatusBadge from './StatusBadge';

interface ClassTableRowProps {
    classItem: ClassItem;
}

export default function ClassTableRow({ classItem }: ClassTableRowProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const formatPrice = () => {
        if (classItem.isFree) {
            return <span className="text-sm font-bold text-primary">Free</span>;
        }

        return (
            <div className="flex flex-col">
                <span className="text-sm font-bold text-[#101814]">
                    ${classItem.price.toFixed(2)}
                </span>
                {classItem.originalPrice && (
                    <span className="text-[10px] text-[#5e6a62] line-through">
                        ${classItem.originalPrice.toFixed(2)}
                    </span>
                )}
            </div>
        );
    };

    return (
        <tr className="group transition-colors hover:bg-[#f0f5f2]">
            <td className="px-6 py-4 align-middle">
                <div
                    className="relative h-12 w-20 overflow-hidden rounded-md bg-cover bg-center shadow-sm transition-shadow group-hover:shadow-md"
                    style={{ backgroundImage: `url('${classItem.thumbnail}')` }}
                >
                    <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
            </td>
            <td className="px-6 py-4 align-middle">
                <div className="flex flex-col gap-0.5">
                    <span className="line-clamp-1 text-sm font-bold text-[#101814] transition-colors group-hover:text-primary">
                        {classItem.title}
                    </span>
                    <span className="text-xs text-[#5e8d74]">
                        {classItem.category}
                    </span>
                </div>
            </td>
            <td className="px-6 py-4 align-middle">{formatPrice()}</td>
            <td className="px-6 py-4 align-middle">
                <div className="flex items-center gap-1.5">
                    <Icon
                        name="grid_view"
                        size={16}
                        className="text-[#5e8d74]"
                    />
                    <span className="text-sm text-[#5e6a62]">
                        {classItem.modules} Modules
                    </span>
                </div>
            </td>
            <td className="px-6 py-4 align-middle">
                <StatusBadge status={classItem.status} />
            </td>
            <td className="px-6 py-4 text-right align-middle">
                <div className="relative inline-block text-left">
                    <button
                        onClick={toggleMenu}
                        onBlur={() =>
                            setTimeout(() => setIsMenuOpen(false), 200)
                        }
                        className="rounded-lg p-1.5 text-[#5e6a62] transition-colors hover:bg-white hover:text-primary focus:outline-none"
                    >
                        <Icon name="more_vert" size={20} />
                    </button>

                    {isMenuOpen && (
                        <div className="absolute right-0 top-full z-10 mt-2 w-48 origin-top-right rounded-lg border border-[#e5e7eb] bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Link
                                    href={route(
                                        'admin.classes.show',
                                        classItem.id,
                                    )}
                                    className="flex w-full items-center gap-2 px-4 py-2 text-sm text-[#5e6a62] hover:bg-[#f9fafb] hover:text-[#101814]"
                                >
                                    <Icon name="visibility" size={16} />
                                    Detail
                                </Link>
                                <Link
                                    href={route(
                                        'admin.classes.modules.create',
                                        classItem.id,
                                    )}
                                    className="flex w-full items-center gap-2 px-4 py-2 text-sm text-[#5e6a62] hover:bg-[#f9fafb] hover:text-[#101814]"
                                >
                                    <Icon name="library_add" size={16} />
                                    Create Modul
                                </Link>
                                <Link
                                    href={route(
                                        'admin.classes.quiz.create',
                                        classItem.id,
                                    )}
                                    className="flex w-full items-center gap-2 px-4 py-2 text-sm text-[#5e6a62] hover:bg-[#f9fafb] hover:text-[#101814]"
                                >
                                    <Icon name="quiz" size={16} />
                                    Create Quiz
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </td>
        </tr>
    );
}
