import { ClassItem } from '@/types/admin';
import ClassTableRow from './ClassTableRow';

interface ClassTableProps {
    classes: ClassItem[];
    onMenuClick?: (id: number) => void;
}

export default function ClassTable({ classes, onMenuClick }: ClassTableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
                <thead>
                    <tr className="border-b border-[#e5e7eb] bg-[#f9fafb]">
                        <th className="w-[80px] px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#5e6a62]">
                            Image
                        </th>
                        <th className="min-w-[240px] px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#5e6a62]">
                            Course Info
                        </th>
                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#5e6a62]">
                            Price
                        </th>
                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#5e6a62]">
                            Modules
                        </th>
                        <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#5e6a62]">
                            Status
                        </th>
                        <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-[#5e6a62]">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#f0f5f2]">
                    {classes.map((classItem) => (
                        <ClassTableRow
                            key={classItem.id}
                            classItem={classItem}
                            onMenuClick={onMenuClick}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
