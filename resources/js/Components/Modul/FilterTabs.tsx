import { FilterTab } from '@/types/module';

interface FilterTabsProps {
    activeTab: FilterTab;
    onTabChange: (tab: FilterTab) => void;
}

const tabs: { key: FilterTab; label: string }[] = [
    { key: 'all', label: 'Semua' },
    { key: 'free', label: 'Gratis' },
    { key: 'paid', label: 'Berbayar' },
];

export default function FilterTabs({
    activeTab,
    onTabChange,
}: FilterTabsProps) {
    return (
        <div className="flex items-center gap-1 rounded-xl bg-gray-50 p-1">
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    onClick={() => onTabChange(tab.key)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                        activeTab === tab.key
                            ? 'border border-gray-100 bg-white font-semibold text-primary shadow-sm'
                            : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}
