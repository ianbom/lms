import Icon from '@/Components/Icon';
import { ClassItem } from '@/types/admin';
import { Link, router } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import StatusBadge from './StatusBadge';

interface ClassTableRowProps {
    classItem: ClassItem;
}

export default function ClassTableRow({ classItem }: ClassTableRowProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

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

    const handleDelete = () => {
        if (classItem.status !== 'draft') {
            alert('Hanya kelas dengan status draft yang dapat dihapus.');
            return;
        }

        if (
            confirm(
                `Yakin ingin menghapus kelas "${classItem.title}"? Semua data yang terkait akan ikut terhapus.`,
            )
        ) {
            router.delete(route('admin.classes.delete', classItem.id), {
                preserveScroll: true,
            });
        }
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
                <span className="text-sm font-bold text-[#101814]">
                    Rp {classItem.totalRevenue.toLocaleString('id-ID')}
                </span>
            </td>
            <td className="px-6 py-4 align-middle">
                <StatusBadge status={classItem.status} />
            </td>
            <td className="px-6 py-4 align-middle">
                <div className="flex items-center justify-end" ref={dropdownRef}>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex h-8 w-8 items-center justify-center rounded-md border border-[#e5e7eb] bg-white text-[#5e6a62] transition-colors hover:border-primary hover:text-primary"
                    >
                        <Icon name="more_vert" size={18} />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-8 z-20 mt-1 w-44 overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
                            <Link
                                href={route('admin.classes.show', classItem.id)}
                                className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-slate-700 transition-colors hover:bg-slate-50"
                            >
                                <Icon name="visibility" size={16} className="text-primary" />
                                Detail
                            </Link>
                            <Link
                                href={route('admin.module.create', classItem.id)}
                                className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-slate-700 transition-colors hover:bg-slate-50"
                            >
                                <Icon name="library_add" size={16} className="text-blue-500" />
                                Buat Modul
                            </Link>
                            <Link
                                href={route('admin.quiz.create', classItem.id)}
                                className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-slate-700 transition-colors hover:bg-slate-50"
                            >
                                <Icon name="quiz" size={16} className="text-amber-500" />
                                Buat Kuis
                            </Link>
                            <Link
                                href={route('admin.classes.review', classItem.id)}
                                className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-slate-700 transition-colors hover:bg-slate-50"
                            >
                                <Icon name="reviews" size={16} className="text-purple-500" />
                                Review
                            </Link>
                            <Link
                                href={route('admin.classes.users', classItem.id)}
                                className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-slate-700 transition-colors hover:bg-slate-50"
                            >
                                <Icon name="group" size={16} className="text-teal-500" />
                                Peserta
                            </Link>
                            {classItem.status === 'draft' && (
                                <>
                                    <div className="my-1 border-t border-slate-100" />
                                    <button
                                        onClick={handleDelete}
                                        className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-red-600 transition-colors hover:bg-red-50"
                                    >
                                        <Icon name="delete" size={16} />
                                        Hapus
                                    </button>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </td>
        </tr>
    );
}
