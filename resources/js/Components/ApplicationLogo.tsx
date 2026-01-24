import { ImgHTMLAttributes } from 'react';

interface ApplicationLogoProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
}

export default function ApplicationLogo({ className = '', ...props }: ApplicationLogoProps) {
    return (
        <img
            src="/ImpactAcademy.png"
            alt="ImpactAcademy Logo"
            className={className}
            {...props}
        />
    );
}
