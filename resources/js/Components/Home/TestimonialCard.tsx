import Icon from '@/Components/Icon';

interface User {
    name: string;
    role: string;
    image: string;
}

interface TestimonialCardProps {
    rating: number;
    title: string;
    content: string;
    user: User;
}

export default function TestimonialCard({
    rating,
    title,
    content,
    user,
}: TestimonialCardProps) {
    return (
        <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            {/* Quote Icon & Content */}
            <div className="mb-4 flex-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon name="format_quote" size={20} />
                </div>
                <p className="leading-relaxed text-gray-600">{content}</p>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                <img
                    alt={user.name}
                    className="h-12 w-12 rounded-full object-cover"
                    src={user.image}
                />
                <div>
                    <p className="font-semibold text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.role}</p>
                </div>
                {/* Rating */}
                <div className="ml-auto flex items-center gap-1">
                    <Icon
                        name="star"
                        size={18}
                        className="text-yellow-400"
                        filled
                    />
                    <span className="font-medium text-gray-700">{rating}</span>
                </div>
            </div>
        </div>
    );
}
