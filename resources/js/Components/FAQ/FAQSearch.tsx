import Icon from '@/Components/Icon';

export default function FAQSearch() {
    return (
        <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
                <Icon name="search" className="text-[24px] text-slate-500" />
            </div>
            <input
                type="text"
                className="h-14 w-full rounded-xl border-none bg-gray-50 pl-12 pr-4 text-base text-gray-900 transition-all placeholder:text-slate-500 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                placeholder="Search for answers (e.g. 'refund', 'password')..."
            />
        </div>
    );
}
