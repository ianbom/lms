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

export default function TestimonialCard({ rating, title, content, user }: TestimonialCardProps) {
    return (
        <div className="rounded-3xl bg-background-light p-8">
            {/* Stars */}
            <div className="mb-4 flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Icon
                        key={index}
                        name={index < Math.floor(rating) ? 'star' : index < rating ? 'star_half' : 'star_outline'}
                        size={20}
                    />
                ))}
            </div>

            {/* Title */}
            <h3 className="mb-3 text-lg font-bold text-gray-900">{title}</h3>

            {/* Content */}
            <p className="mb-6 text-sm leading-relaxed text-gray-600">{content}</p>

            {/* User */}
            <div className="flex items-center gap-3">
                <img alt={user.name} className="size-10 rounded-full" src={user.image} />
                <div>
                    <p className="text-sm font-bold text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.role}</p>
                </div>
            </div>
        </div>
    );
}
