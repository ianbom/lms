import Icon from '@/Components/Icon';

export default function Recommendations() {
    return (
        <div className="h-full rounded-xl border border-border-light bg-white p-6 shadow-card">
            <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900">Rekomendasi</h3>
                <p className="text-sm text-slate-500">
                    Kursus yang mungkin anda suka
                </p>
            </div>
            <div className="flex flex-col gap-4">
                {/* Rec Card 1 */}
                <div className="group flex cursor-pointer items-center gap-3">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                        <img
                            alt="Business Strategy"
                            className="h-full w-full object-cover transition-transform group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYbiwcJ828vnrpc-fJSv_Yh_Fmj6TBBKWcSg4wsMz5EIgiQ1oIIlE6BXCn69QCritVF0t1xtrPGXk5J-nSJrhKVJ0AVVH9-BXbx5DsN-KBra7vRVSiylUSyGaolyjUuOMVAXp5a4rNlOG6tD6Az5AzuFv0cg8skDjIIeAkSR6XIHM-YB-W_nzk5zl6J3fZxCntL4577Ai4IgpPfhZnrm1xJLs6a-a8BH4y153hq3xy3UKIGHOm-yO6hE7Bx5KdpBjYtU8QGYSY1r6I"
                        />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-bold text-slate-900 group-hover:text-primary">
                            Strategic Management
                        </h4>
                        <p className="truncate text-xs text-slate-500">
                            Bisnis & Strategi
                        </p>
                        <div className="mt-1 flex items-center gap-1">
                            <Icon name="star" className="text-xs text-amber-500 text-fill-amber-500" />
                            <span className="text-xs font-semibold">4.8</span>
                        </div>
                    </div>
                </div>

                {/* Rec Card 2 */}
                <div className="group flex cursor-pointer items-center gap-3">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                        <img
                            alt="Photography"
                            className="h-full w-full object-cover transition-transform group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMGB1IyCcErtI7sjrQnLEMmAL-jGE8olMQS6CRZF3taNriWZ1QvMjpX5FuYOWxE6dsZFCdGVliURn1LYyshjxHILRyH1cySxxaulPSVZaktKh8zjQTb_JlUSuXEDJoIm5ITP99cAG9Cc9qfj9R9JLYG5pabBOwjCpAcjweqPVw-k06tPm2-p7wGL8AwJ0rbtYj5-IhIYNt4kr8Ehx3MWox3AeE9UMsWuR3PGnP5mkI0IZP3OMkA_tWeQhqi4h1gycci0C30R3TyTwf"
                        />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-bold text-slate-900 group-hover:text-primary">
                            Commercial Photography
                        </h4>
                        <p className="truncate text-xs text-slate-500">
                            Seni & Design
                        </p>
                        <div className="mt-1 flex items-center gap-1">
                            <Icon name="star" className="text-xs text-amber-500 text-fill-amber-500" />
                            <span className="text-xs font-semibold">4.9</span>
                        </div>
                    </div>
                </div>

                {/* Rec Card 3 */}
                <div className="group flex cursor-pointer items-center gap-3">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                        <img
                            alt="Advanced Coding"
                            className="h-full w-full object-cover transition-transform group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ4ffjM-HocaNONJhlZo6j9Zyg0sbZqBPank0v0w5Or3wZRe3pU9wog6eaoLmr5N4-eJTu6X8Q2SsW7J9bCu7kFJvy3ZaoTzJSRrYiJcrzjahsSPpzUgEDpyQNfSG0TcYMazyby37znS_ennECbcP0vQlpLNKam7pPPWHo2c1iTZaQz0LXJifGRYNSJXsWWMIZFDr6zu0u3-AZHFyoJZV2YRpTkxCz35QuDH98TXdMS_SaDwlpcPQUpFT-rft-6U0XZrJteJG9WmVc"
                        />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-bold text-slate-900 group-hover:text-primary">
                            Advanced JavaScript
                        </h4>
                        <p className="truncate text-xs text-slate-500">
                            Development
                        </p>
                        <div className="mt-1 flex items-center gap-1">
                            <Icon name="star" className="text-xs text-amber-500 text-fill-amber-500" />
                            <span className="text-xs font-semibold">4.7</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
