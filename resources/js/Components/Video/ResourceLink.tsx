import Icon from '@/Components/Icon';
import { VideoResource } from '@/types/video';

interface ResourceLinkProps {
    resource: VideoResource;
}

export default function ResourceLink({ resource }: ResourceLinkProps) {
    const getStyles = () => {
        switch (resource.type) {
            case 'pdf':
                return {
                    icon: 'picture_as_pdf',
                    containerClass:
                        'border-red-100 bg-gradient-to-r from-red-50 to-white hover:border-red-200 hover:shadow-red-100/50',
                    iconClass: 'text-red-500',
                    textClass: 'text-red-700 group-hover:text-red-800',
                };
            case 'link':
                return {
                    icon: 'link',
                    containerClass:
                        'border-blue-100 bg-gradient-to-r from-blue-50 to-white hover:border-blue-200 hover:shadow-blue-100/50',
                    iconClass: 'text-blue-500',
                    textClass: 'text-blue-700 group-hover:text-blue-800',
                };
            default:
                return {
                    icon: 'description',
                    containerClass:
                        'border-gray-100 bg-gradient-to-r from-gray-50 to-white hover:border-gray-200 hover:shadow-gray-100/50',
                    iconClass: 'text-gray-500',
                    textClass: 'text-gray-700 group-hover:text-gray-800',
                };
        }
    };

    const styles = getStyles();

    return (
        <a
            href={resource.url}
            className={`group flex items-center gap-3 rounded-xl border px-4 py-3 shadow-sm transition-all hover:shadow-md ${styles.containerClass}`}
        >
            <div
                className={`flex size-9 items-center justify-center rounded-md bg-white shadow-sm ${styles.iconClass}`}
            >
                <Icon name={styles.icon} size={20} />
            </div>
            <div className="flex flex-col">
                <span
                    className={`text-sm font-semibold transition-colors ${styles.textClass}`}
                >
                    {resource.title}
                </span>
                <span className="text-xs text-gray-400">
                    {resource.type === 'pdf' ? 'PDF Document' : 'External Link'}
                </span>
            </div>
            <Icon
                name="download"
                size={18}
                className="ml-auto text-gray-300 transition-all group-hover:text-gray-500"
            />
        </a>
    );
}
