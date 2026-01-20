import { ReactNode } from 'react';

interface Column<T> {
    key: string;
    header: string;
    render: (item: T) => ReactNode;
    className?: string;
    headerClassName?: string;
}

interface DataTableProps<T> {
    columns: Column<T>[];
    data: T[];
    keyExtractor: (item: T) => string | number;
    className?: string;
}

export default function DataTable<T>({
    columns,
    data,
    keyExtractor,
    className = '',
}: DataTableProps<T>) {
    return (
        <div className={`overflow-x-auto ${className}`}>
            <table className="w-full min-w-[600px] border-collapse text-left">
                <thead>
                    <tr className="text-text-muted bg-background-light text-xs uppercase tracking-wide">
                        {columns.map((col) => (
                            <th
                                key={col.key}
                                className={`px-6 py-4 font-semibold ${col.headerClassName || ''}`}
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-border divide-y">
                    {data.map((item) => (
                        <tr
                            key={keyExtractor(item)}
                            className="group transition-colors hover:bg-background-light"
                        >
                            {columns.map((col) => (
                                <td
                                    key={col.key}
                                    className={`px-6 py-4 text-sm ${col.className || ''}`}
                                >
                                    {col.render(item)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
