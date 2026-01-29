import { Certificate } from '@/types/certificate';
import CertificateCard from './CertificateCard';

interface CertificateGridProps {
    certificates: Certificate[];
}

export default function CertificateGrid({
    certificates,
}: CertificateGridProps) {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {certificates.map((cert) => (
                <CertificateCard key={cert.id} certificate={cert} />
            ))}
        </div>
    );
}
