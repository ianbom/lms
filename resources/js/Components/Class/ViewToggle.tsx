import Icon from '@/Components/Icon';
import { ViewMode } from '@/types/class';

interface ViewToggleProps {
    viewMode: ViewMode;
    onViewChange: (mode: ViewMode) => void;
}

export default function ViewToggle({
    viewMode,
    onViewChange,
}: ViewToggleProps) {
    return (
        <div className="flex items-center rounded-md border border-slate-200 bg-white p-1">
            <button
                onClick={() => onViewChange('grid')}
                className={`rounded p-1.5 transition-colors ${
                    viewMode === 'grid'
                        ? 'bg-slate-100 text-slate-900'
                        : 'text-slate-400 hover:text-slate-600'
                }`}
            >
                <Icon name="grid_view" size={20} />
            </button>
            <button
                onClick={() => onViewChange('list')}
                className={`rounded p-1.5 transition-colors ${
                    viewMode === 'list'
                        ? 'bg-slate-100 text-slate-900'
                        : 'text-slate-400 hover:text-slate-600'
                }`}
            >
                <Icon name="view_list" size={20} />
            </button>
        </div>
    );
}
