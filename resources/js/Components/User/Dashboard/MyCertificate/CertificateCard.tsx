import Icon from '@/Components/Icon';
import { Certificate } from '@/types/certificate';

interface CertificateCardProps {
    certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
    // Format date
    const formattedDate = new Date(certificate.issued_at).toLocaleDateString(
        'id-ID',
        {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        },
    );

    return (
        <div className="border-border-light shadow-card hover:shadow-card-hover group flex flex-col overflow-hidden rounded-xl border bg-white transition-all">
            {/* Thumbnail */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img
                    alt={certificate.class.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={
                        certificate.class.thumbnail_url ||
                        '/images/placeholder-class.jpg'
                    }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-4">
                <div className="mb-2 flex items-center gap-2">
                    <Icon
                        name="verified"
                        size={16}
                        className="text-green-500"
                    />
                    <span className="text-xs font-medium text-green-600">
                        Terverifikasi
                    </span>
                </div>

                <h4 className="mb-1 line-clamp-2 text-base font-bold text-slate-900">
                    {certificate.class.title}
                </h4>

                <div className="mb-4 text-xs text-slate-500">
                    Diterbitkan: {formattedDate}
                </div>

                <div className="mt-auto grid grid-cols-2 gap-2">
                    <a
                        href={route('user.certificates.view', certificate.id)}
                        target="_blank"
                        className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
                        rel="noreferrer"
                    >
                        <Icon name="visibility" size={16} />
                        Lihat
                    </a>
                    <a
                        href={route(
                            'user.certificates.download',
                            certificate.id,
                        )}
                        className="flex items-center justify-center gap-2 rounded-lg bg-primary py-2 text-xs font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-md"
                    >
                        <Icon name="download" size={16} />
                        Unduh
                    </a>
                </div>
            </div>
        </div>
    );
}
