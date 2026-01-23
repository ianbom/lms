import Icon from '@/Components/Icon';
import { ClassItem } from '@/types/admin';
import { Link } from '@inertiajs/react';
import StatusBadge from './StatusBadge';

interface ClassTableRowProps {
    classItem: ClassItem;
}

export default function ClassTableRow({ classItem }: ClassTableRowProps) {
    const formatPrice = () => {
        if (classItem.isFree) {
            return (
                <span className="text-sm font-bold text-primary">Gratis</span>
            );
        }

        return (
            <div className="flex flex-col">
                <span className="text-sm font-bold text-[#101814]">
                    Rp {classItem.price.toLocaleString('id-ID')}
                </span>
                {classItem.originalPrice && (
                    <span className="text-[10px] text-[#5e6a62] line-through">
                        Rp {classItem.originalPrice.toLocaleString('id-ID')}
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
                        {classItem.modules} Modul
                    </span>
                </div>
            </td>
            <td className="px-6 py-4 align-middle">
                <StatusBadge status={classItem.status} />
            </td>
            <td className="px-6 py-4 align-middle">
                <div className="flex items-center justify-end gap-2">
                    <Link
                        href={route('admin.classes.show', classItem.id)}
                        className="flex h-8 items-center gap-1.5 rounded-md border border-[#e5e7eb] bg-white px-3 text-xs font-medium text-[#5e6a62] transition-colors hover:border-primary hover:text-primary"
                        title="Detail"
                    >
                        <Icon name="visibility" size={14} />
                        Detail
                    </Link>
                    <Link
                        href={route('admin.module.create', classItem.id)}
                        className="flex h-8 items-center gap-1.5 rounded-md border border-[#e5e7eb] bg-white px-3 text-xs font-medium text-[#5e6a62] transition-colors hover:border-blue-500 hover:text-blue-500"
                        title="Buat Modul"
                    >
                        <Icon name="library_add" size={14} />
                        Modul
                    </Link>
                    <Link
                        href={route('admin.quiz.create', classItem.id)}
                        className="flex h-8 items-center gap-1.5 rounded-md border border-[#e5e7eb] bg-white px-3 text-xs font-medium text-[#5e6a62] transition-colors hover:border-amber-500 hover:text-amber-500"
                        title="Buat Kuis"
                    >
                        <Icon name="quiz" size={14} />
                        Kuis
                    </Link>
                </div>
            </td>
        </tr>
    );
}
