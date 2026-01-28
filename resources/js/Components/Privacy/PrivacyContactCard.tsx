import Icon from '@/Components/Icon';

export default function PrivacyContactCard() {
    return (
        <section className="not-prose mt-16 scroll-mt-28" id="contact">
            <div className="group relative flex flex-col items-center gap-8 overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-lg md:flex-row">
                {/* Background Decoration */}
                <div className="absolute right-0 top-0 -mr-8 -mt-8 h-32 w-32 rounded-bl-full bg-primary/10 transition-transform group-hover:scale-110"></div>

                <div className="relative flex-shrink-0">
                    <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                        <Icon name="mail" className="text-3xl" />
                    </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                        Kontak Kami
                    </h3>
                    <p className="mb-4 max-w-md text-slate-600">
                        Have questions about this Privacy Policy? Our legal team
                        is here to help clarify any concerns you may have.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                        <a
                            className="inline-flex items-center gap-2 font-bold text-primary hover:underline"
                            href="mailto:privacy@saasplatform.com"
                        >
                            privacy@saasplatform.com
                            <Icon name="arrow_outward" className="text-sm" />
                        </a>
                        <span className="text-gray-300">|</span>
                        <a
                            className="text-sm font-medium text-slate-500 hover:text-primary"
                            href="#"
                        >
                            Visit Support Center
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
