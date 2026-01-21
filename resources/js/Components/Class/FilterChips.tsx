import { FILTER_TAB_LABELS, FilterTab } from '@/types/class';

interface FilterChipsProps {
    activeTab: FilterTab;
    onTabChange: (tab: FilterTab) => void;
}

const TABS: FilterTab[] = ['all', 'free', 'paid'];

export default function FilterChips({
    activeTab,
    onTabChange,
}: FilterChipsProps) {
    return (
        <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-1">
            {TABS.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onTabChange(tab)}
                    className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                        activeTab === tab
                            ? 'bg-primary/10 text-primary'
                            : 'text-slate-600 hover:bg-slate-50'
                    }`}
                >
                    {FILTER_TAB_LABELS[tab]}
                </button>
            ))}
        </div>
    );
}
