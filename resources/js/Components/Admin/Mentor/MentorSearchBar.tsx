import Icon from '@/Components/Icon';

interface MentorSearchBarProps {
    searchValue: string;
    onSearchChange: (value: string) => void;
    onFilter?: () => void;
    onExport?: () => void;
}

export default function MentorSearchBar({
    searchValue,
    onSearchChange,
    onFilter,
    onExport,
}: MentorSearchBarProps) {
    return (
        <div className="flex w-full flex-col gap-4 md:flex-row">
            {/* Search Input */}
            <div className="group relative flex-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Icon
                        name="search"
                        size={20}
                        className="text-slate-400 transition-colors group-focus-within:text-primary"
                    />
                </div>
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="block w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-[#101815] placeholder-slate-400 shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Cari mentor berdasarkan nama atau email..."
                />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
                {onFilter && (
                    <button
                        onClick={onFilter}
                        className="flex items-center gap-2 whitespace-nowrap rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#101815] shadow-sm transition-all hover:bg-slate-50"
                    >
                        <Icon name="filter_list" size={20} />
                        <span>Filter</span>
                    </button>
                )}
                {onExport && (
                    <button
                        onClick={onExport}
                        className="flex items-center gap-2 whitespace-nowrap rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#101815] shadow-sm transition-all hover:bg-slate-50"
                    >
                        <Icon name="ios_share" size={20} />
                        <span>Ekspor</span>
                    </button>
                )}
            </div>
        </div>
    );
}
