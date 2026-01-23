import { ClassItem } from '@/types/admin';
import ClassTableRow from './ClassTableRow';

interface ClassTableProps {
    classes: ClassItem[];
}

export default function ClassTable({ classes }: ClassTableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
                <thead>
                    <tr className="border-b border-[#e5e7eb] bg-[#f9fafb]">
                        <th className="w-[80px] px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#5e6a62]">
                            Gambar
                        </th>
                        <th className="min-w-[240px] px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#5e6a62]">
                            Info Kelas
                        </th>
                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#5e6a62]">
                            Harga
                        </th>
                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#5e6a62]">
                            Modul
                        </th>
                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#5e6a62]">
                            Status
                        </th>
                        <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-[#5e6a62]">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#f0f5f2]">
                    {classes.length === 0 ? (
                        <tr>
                            <td
                                colSpan={6}
                                className="px-6 py-12 text-center text-sm text-[#5e6a62]"
                            >
                                Tidak ada data kelas ditemukan.
                            </td>
                        </tr>
                    ) : (
                        classes.map((classItem) => (
                            <ClassTableRow
                                key={classItem.id}
                                classItem={classItem}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
