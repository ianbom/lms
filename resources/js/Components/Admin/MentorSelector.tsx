import Icon from '@/Components/Icon';
import React from 'react';
import Avatar from './Avatar';

interface Mentor {
    id: number;
    name: string;
    role?: string;
    avatar?: string;
}

interface MentorSelectorProps {
    label?: string;
    selectedMentors: Mentor[];
    availableMentors: Mentor[];
    onAddMentor?: (mentor: Mentor) => void;
    onRemoveMentor?: (id: number) => void;
    onSearchChange?: (value: string) => void;
    searchPlaceholder?: string;
    className?: string;
}

export default function MentorSelector({
    label = 'Instructors & Mentors',
    selectedMentors,
    availableMentors = [],
    onAddMentor,
    onRemoveMentor,
    onSearchChange,
    searchPlaceholder = 'Search mentors by name...',
    className = '',
}: MentorSelectorProps) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [isFocused, setIsFocused] = React.useState(false);

    // Filter available mentors that are NOT already selected
    const filteredMentors = availableMentors
        .filter((m) => !selectedMentors.find((sm) => sm.id === m.id))
        .filter((m) =>
            m.name.toLowerCase().includes(searchQuery.toLowerCase()),
        );

    const handleSearch = (val: string) => {
        setSearchQuery(val);
        onSearchChange?.(val);
    };

    const handleSelect = (mentor: Mentor) => {
        onAddMentor?.(mentor);
        setSearchQuery('');
    };

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
            </div>

            {/* Search Input with Dropdown */}
            <div className="relative z-10 mb-4">
                <Icon
                    name="search"
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a0b3a9]"
                />
                <input
                    type="text"
                    placeholder={searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    // Delay blur to allow clicking on dropdown items
                    onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                    className="h-11 w-full rounded-md border border-[#dae7e0] bg-white pl-10 pr-4 text-sm text-[#101814] placeholder-[#a0b3a9] transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />

                {/* Dropdown Results */}
                {isFocused &&
                    (searchQuery.length > 0 || filteredMentors.length > 0) && (
                        <div className="absolute left-0 right-0 top-full mt-1 max-h-60 overflow-y-auto rounded-md border border-[#e5e7eb] bg-white shadow-lg">
                            {filteredMentors.length > 0 ? (
                                filteredMentors.map((mentor) => (
                                    <button
                                        key={mentor.id}
                                        type="button"
                                        onClick={() => handleSelect(mentor)}
                                        className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-[#f9fafb]"
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
                                            <span className="text-sm font-medium text-[#101814]">
                                                {mentor.name}
                                            </span>
                                            {mentor.role && (
                                                <span className="text-xs text-[#a0b3a9]">
                                                    {mentor.role}
                                                </span>
                                            )}
                                        </div>
                                        <Icon
                                            name="add"
                                            size={16}
                                            className="ml-auto text-[#a0b3a9]"
                                        />
                                    </button>
                                ))
                            ) : (
                                <div className="px-4 py-3 text-sm text-[#a0b3a9]">
                                    No mentors found.
                                </div>
                            )}
                        </div>
                    )}
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
            </div>
        </div>
    );
}
