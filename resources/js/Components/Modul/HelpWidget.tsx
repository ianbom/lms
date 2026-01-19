import Icon from '@/Components/Icon';
import { Link } from '@inertiajs/react';

export default function HelpWidget() {
    return (
        <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Icon name="support_agent" size={20} />
            </div>
            <div>
                <p className="text-sm font-bold text-gray-900">
                    Butuh bantuan?
                </p>
                <Link href="#" className="text-xs text-primary hover:underline">
                    Hubungi CS kami di WhatsApp
                </Link>
            </div>
        </div>
    );
}
