import Icon from '@/Components/Icon';
import Avatar from './Avatar';

interface Mentor {
    id: number;
    name: string;
    role: string;
    avatar?: string;
}

interface MentorSelectorProps {
    label?: string;
    selectedMentors: Mentor[];
    onAddMentor?: () => void;
    onRemoveMentor?: (id: number) => void;
    onSearchChange?: (value: string) => void;
    searchPlaceholder?: string;
    className?: string;
}

export default function MentorSelector({
    label = 'Instructors & Mentors',
    selectedMentors,
    onAddMentor,
    onRemoveMentor,
    onSearchChange,
    searchPlaceholder = 'Search mentors by name...',
    className = '',
}: MentorSelectorProps) {
    return (
        <div
            className={`rounded-xl border border-[#e5e7eb] bg-white p-6 ${className}`}
        >
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Icon name="group" size={20} className="text-primary" />
                    <h3 className="text-base font-semibold text-[#101814]">
                        {label}
                    </h3>
                </div>
                <button
                    type="button"
                    onClick={onAddMentor}
                    className="text-sm font-medium text-primary transition-colors hover:text-[#00622e]"
                >
                    Add New
                </button>
            </div>

            {/* Search Input */}
            <div className="relative mb-4">
                <Icon
                    name="search"
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a0b3a9]"
                />
                <input
                    type="text"
                    placeholder={searchPlaceholder}
                    onChange={(e) => onSearchChange?.(e.target.value)}
                    className="h-11 w-full rounded-lg border border-[#dae7e0] bg-white pl-10 pr-4 text-sm text-[#101814] placeholder-[#a0b3a9] transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
            </div>

            {/* Selected Mentors */}
            <div className="flex flex-wrap items-center gap-2">
                {selectedMentors.map((mentor) => (
                    <div
                        key={mentor.id}
                        className="flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-[#f9fafb] py-1.5 pl-1.5 pr-3"
                    >
                        <Avatar
                            src={mentor.avatar}
                            initials={mentor.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            size="sm"
                            color="bg-primary/10 text-primary"
                        />
                        <div className="flex flex-col">
                            <span className="text-xs font-medium text-[#101814]">
                                {mentor.name}
                            </span>
                            <span className="text-[10px] text-[#a0b3a9]">
                                {mentor.role}
                            </span>
                        </div>
                        <button
                            type="button"
                            onClick={() => onRemoveMentor?.(mentor.id)}
                            className="ml-1 text-[#a0b3a9] transition-colors hover:text-red-500"
                        >
                            <Icon name="close" size={16} />
                        </button>
                    </div>
                ))}

                {/* Add More Button */}
                <button
                    type="button"
                    onClick={onAddMentor}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-[#dae7e0] text-[#a0b3a9] transition-colors hover:border-primary hover:text-primary"
                >
                    <Icon name="add" size={18} />
                </button>
            </div>
        </div>
    );
}
