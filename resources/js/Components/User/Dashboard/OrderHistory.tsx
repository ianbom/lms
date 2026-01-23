export default function OrderHistory() {
    return (
        <div className="flex h-full flex-col rounded-xl border border-border-light bg-white shadow-card">
            <div className="border-b border-border-light px-6 py-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">
                        Order & Pembayaran
                    </h3>
                    <a
                        href="#"
                        className="text-sm font-semibold text-primary hover:text-primary-hover"
                    >
                        Lihat Semua
                    </a>
                </div>
            </div>
            <div className="flex-1 overflow-x-auto p-0">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-slate-500">
                        <tr>
                            <th className="px-6 py-3 font-medium">Order ID</th>
                            <th className="px-6 py-3 font-medium">Nama Kelas</th>
                            <th className="px-6 py-3 font-medium">Tanggal</th>
                            <th className="px-6 py-3 font-medium">Status</th>
                            <th className="px-6 py-3 text-right font-medium">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border-light">
                        {/* Row 1 */}
                        <tr>
                            <td className="px-6 py-4 font-medium text-slate-900">
                                #ORD-2023-001
                            </td>
                            <td className="px-6 py-4 text-slate-900">
                                Advanced Excel for Business
                            </td>
                            <td className="px-6 py-4 text-slate-500">
                                24 Okt 2023
                            </td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20">
                                    Pending
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-sm font-semibold text-primary hover:text-primary-hover hover:underline">
                                    Upload Ulang Bukti
                                </button>
                            </td>
                        </tr>
                        {/* Row 2 */}
                        <tr>
                            <td className="px-6 py-4 font-medium text-slate-900">
                                #ORD-2023-002
                            </td>
                            <td className="px-6 py-4 text-slate-900">
                                React JS Fundamentals
                            </td>
                            <td className="px-6 py-4 text-slate-500">
                                22 Okt 2023
                            </td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                    Approved
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-sm font-semibold text-slate-500 hover:text-slate-900">
                                    Invoice
                                </button>
                            </td>
                        </tr>
                        {/* Row 3 */}
                        <tr>
                            <td className="px-6 py-4 font-medium text-slate-900">
                                #ORD-2023-003
                            </td>
                            <td className="px-6 py-4 text-slate-900">
                                Copywriting 101
                            </td>
                            <td className="px-6 py-4 text-slate-500">
                                20 Okt 2023
                            </td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
                                    Rejected
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-sm font-semibold text-slate-500 hover:text-slate-900">
                                    Detail
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
