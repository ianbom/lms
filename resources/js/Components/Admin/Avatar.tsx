interface AvatarProps {
    src?: string;
    alt?: string;
    initials?: string;
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    className?: string;
}

const sizeStyles = {
    sm: 'size-6 text-[10px]',
    md: 'size-10 text-sm',
    lg: 'size-12 text-base',
};

export default function Avatar({
    src,
    alt = '',
    initials,
    size = 'md',
    color = 'bg-primary-light',
    className = '',
}: AvatarProps) {
    if (src) {
        return (
            <div
                className={`shrink-0 rounded-full bg-cover bg-center bg-no-repeat ${sizeStyles[size]} ${className}`}
                style={{ backgroundImage: `url("${src}")` }}
                aria-label={alt}
            />
        );
    }

    return (
        <div
            className={`flex shrink-0 items-center justify-center rounded-full font-bold ${sizeStyles[size]} ${color} ${className}`}
        >
            {initials}
        </div>
    );
}
