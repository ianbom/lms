interface IconProps {
    name: string;
    size?: number;
    className?: string;
    filled?: boolean;
}

export default function Icon({
    name,
    size = 24,
    className = '',
    filled = false,
}: IconProps) {
    return (
        <span
            className={`${filled ? 'material-symbols-rounded' : 'material-symbols-outlined'} ${className}`}
            style={{
                fontSize: `${size}px`,
                fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
            }}
        >
            {name}
        </span>
    );
}
