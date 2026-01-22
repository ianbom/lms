import Icon from '@/Components/Icon';
import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

interface Column<T> {
    key: string;
    header: string;
    render: (item: T) => ReactNode;
    className?: string;
    headerClassName?: string;
}

interface EmptyStateProps {
    icon: string;
    title: string;
    description: string;
    action?: {
        label: string;
        href: string;
        icon?: string;
    };
}

interface DataTableProps<T> {
    columns: Column<T>[];
    data: T[];
    keyExtractor: (item: T) => string | number;
    emptyState?: EmptyStateProps;
    className?: string;
}

export default function DataTable<T>({
    columns,
    data,
    keyExtractor,
    emptyState,
    className = '',
}: DataTableProps<T>) {
    return (
        <div className={`overflow-x-auto ${className}`}>
            <table className="w-full border-collapse text-left">
                <thead>
                    <tr className="border-b border-slate-100 bg-slate-50/50 text-xs uppercase tracking-wider text-slate-500">
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
                <tbody className="divide-y divide-slate-100 bg-white">
                    {data.length > 0 ? (
                        data.map((item) => (
                            <tr
                                key={keyExtractor(item)}
                                className="group transition-colors hover:bg-slate-50"
                            >
                                {columns.map((col) => (
                                    <td
                                        key={col.key}
                                        className={`px-6 py-4 ${col.className || ''}`}
                                    >
                                        {col.render(item)}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className="px-6 py-12 text-center"
                            >
                                {emptyState ? (
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                                            <Icon
                                                name={emptyState.icon}
                                                size={32}
                                            />
                                        </div>
                                        <h3 className="mb-2 text-lg font-semibold text-slate-900">
                                            {emptyState.title}
                                        </h3>
                                        <p className="mb-6 text-sm text-slate-500">
                                            {emptyState.description}
                                        </p>
                                        {emptyState.action && (
                                            <Link
                                                href={emptyState.action.href}
                                                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                                            >
                                                {emptyState.action.icon && (
                                                    <Icon
                                                        name={
                                                            emptyState.action
                                                                .icon
                                                        }
                                                        size={18}
                                                    />
                                                )}
                                                {emptyState.action.label}
                                            </Link>
                                        )}
                                    </div>
                                ) : (
                                    <span className="text-slate-500">
                                        Tidak ada data
                                    </span>
                                )}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
