import Icon from '@/Components/Icon';

interface Order {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    initials?: string;
    avatarBg?: string; // Tailwind class
    avatarTextClass?: string;
    class: string;
    amount: string;
    status: 'Pending' | 'Approved' | 'Rejected';
    bank: string;
    bankColor?: string; // Tailwind class
    accountNumber: string;
    date: string;
    proofIcon: string;
    verifiedBy?: string;
}

export default function OrderTable() {
    const orders: Order[] = [
        {
            id: '#ORD-7392',
            name: 'Budi Santoso',
            email: 'budi.s@example.com',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQpqYBX4n2CT2gzrmrVvARzS5FHVAG4v9U1hoQbrKOEyNmlfhCVlK10a81hwCrpUDkq0G6j8jIzyxYHtKM_tqpqjTKzQMHoQ9pyOeQb2_KauVCGPKLD3vIYCKkl4_niyexZbntRKZBsj2u5xfZJHejSNp43yfemNtz-I-ONi-OsNa7LvhNRpIVX9eh_mqveoODxScTHnbaCTGZk_wFejOz1LAtQuvFTza5QuwQwJCVD1Ay_bLrO-Uiw0tO2QoFo1CWjIP1TqMnmdGH',
            class: 'Intro to Python Programming',
            amount: 'Rp 150.000',
            status: 'Pending',
            bank: 'BCA',
            bankColor: 'text-blue-800',
            accountNumber: '8832',
            date: '24 Oct 2023, 10:30 AM',
            proofIcon: 'receipt_long',
        },
        {
            id: '#ORD-7391',
            name: 'Sarah Wijaya',
            email: 'sarah.w@example.com',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHMAU4lZJR73B_MRk6hhiMn4sQMrICAFkKYR7JKSuQKVm-duql5jIhkewX2rX5aU8-P8ceOGlzWlNITAaQIoj1I7fflitP5JLV1mi0p0CMHbzuvxJhHE8NtHGToGJJdB6yBJ_Lutyh_xsHqhkItmVmyqtIoei6Z_Ie4NEqAQqA9Lz-CFGG9AQFh71ZidedAM1QUTwa3j7oWKVVIScCFFjU1RzP1VSx16OWffJLChn6c1LFQis88oJOTHmwtuBd46QDFqggBd3Uhsw2',
            class: 'UX Design Masterclass',
            amount: 'Rp 300.000',
            status: 'Pending',
            bank: 'Mandiri',
            bankColor: 'text-yellow-700',
            accountNumber: '1120',
            date: '24 Oct 2023, 09:15 AM',
            proofIcon: 'image',
        },
        {
            id: '#ORD-7389',
            name: 'Andi Rahmat',
            email: 'andirahmat@gmail.com',
            initials: 'AR',
            avatarBg: 'bg-purple-100',
            avatarTextClass: 'text-purple-700 font-bold text-xs',
            class: 'Digital Marketing 101',
            amount: 'Rp 125.000',
            status: 'Approved',
            bank: 'BCA',
            bankColor: 'text-blue-800',
            accountNumber: '5512',
            date: '23 Oct 2023, 04:45 PM',
            proofIcon: 'receipt_long',
            verifiedBy: 'Verified by Admin',
        },
        {
            id: '#ORD-7380',
            name: 'Eko Prasetyo',
            email: 'ekopraz@example.com',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc7i0tyNcnYM2ynH2JXRE3P-3hKM1tgP6OB9MSZgeEIR4bJ0c2d1xCM0IPyFRZD2kC-WnI3lxEPK93zBxva1GmKxhREJEqRuEBVIsGWNVUe2PMja9buAemcCLmZLcax2zfkEs914J0VFaH0erNfNDLXcnKcPs5ODfE6k4mHnQTROoD6rRD2_agtEMcebaHTnSv6CNG_nEtzSx5ZchgR6zHXLstE_sBG-P6xEf6jUVbqVD-QipiVEoV6KF0xv_tcbAgrRalLz6k0UG2',
            class: 'Advanced React Patterns',
            amount: 'Rp 450.000',
            status: 'Rejected',
            bank: 'BRI',
            bankColor: 'text-slate-800',
            accountNumber: '0091',
            date: '22 Oct 2023, 11:20 AM',
            proofIcon: 'broken_image',
            verifiedBy: 'Invalid Proof',
        },
        {
            id: '#ORD-7375',
            name: 'Maya Nabila',
            email: 'mnabila@gmail.com',
            initials: 'MN',
            avatarBg: 'bg-teal-100',
            avatarTextClass: 'text-teal-700 font-bold text-xs',
            class: 'Data Science Bootcamp',
            amount: 'Rp 2.500.000',
            status: 'Approved',
            bank: 'BCA',
            bankColor: 'text-blue-800',
            accountNumber: '1234',
            date: '22 Oct 2023, 08:00 AM',
            proofIcon: 'receipt_long',
            verifiedBy: 'Verified by System',
        },
    ];

    return (
        <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            {/* Toolbar */}
            <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
                {/* Filters */}
                <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2 lg:pb-0">
                    <button className="whitespace-nowrap rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-200">
                        All Orders
                    </button>
                    <button className="whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white ring-2 ring-primary ring-offset-1">
                        Pending{' '}
                        <span className="ml-1 rounded-full bg-white/20 px-1.5 py-0.5 text-[10px] font-bold">
                            12
                        </span>
                    </button>
                    <button className="whitespace-nowrap rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-200">
                        Approved
                    </button>
                    <button className="whitespace-nowrap rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-200">
                        Rejected
                    </button>
                </div>
                {/* Search & Actions */}
                <div className="flex flex-1 items-center gap-3 lg:justify-end">
                    <div className="relative w-full max-w-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                            <Icon name="search" size={20} />
                        </div>
                        <input
                            className="block w-full rounded-lg border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-primary focus:bg-white focus:ring-primary"
                            placeholder="Search by Order ID, User..."
                            type="text"
                        />
                    </div>
                    <div className="relative">
                        <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                            <Icon name="sort" size={20} />
                            <span className="hidden sm:inline">Sort</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Data Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                    <thead>
                        <tr className="border-b border-slate-100 bg-slate-50/50 text-xs uppercase tracking-wider text-slate-500">
                            <th className="px-6 py-4 font-semibold">Order ID</th>
                            <th className="px-6 py-4 font-semibold">User</th>
                            <th className="px-6 py-4 font-semibold">Kelas</th>
                            <th className="px-6 py-4 font-semibold text-right">
                                Amount
                            </th>
                            <th className="px-6 py-4 font-semibold">Status</th>
                            <th className="px-6 py-4 font-semibold">
                                Target Bank
                            </th>
                            <th className="px-6 py-4 font-semibold">
                                Transfer Date
                            </th>
                            <th className="px-6 py-4 font-semibold text-center">
                                Proof
                            </th>
                            <th className="px-6 py-4 font-semibold text-right">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                        {orders.map((order) => (
                            <tr
                                key={order.id}
                                className="group transition-colors hover:bg-slate-50"
                            >
                                <td className="px-6 py-4 text-sm font-medium text-slate-900">
                                    {order.id}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`flex h-9 w-9 items-center justify-center rounded-full bg-cover bg-center ${order.avatarBg || 'bg-slate-200'} ${order.avatarTextClass || ''}`}
                                            style={
                                                order.avatar
                                                    ? {
                                                        backgroundImage: `url('${order.avatar}')`,
                                                    }
                                                    : {}
                                            }
                                        >
                                            {!order.avatar && order.initials}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-semibold text-slate-900">
                                                {order.name}
                                            </span>
                                            <span className="text-xs text-slate-500">
                                                {order.email}
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">
                                    {order.class}
                                </td>
                                <td className="px-6 py-4 text-right text-sm font-bold text-slate-900">
                                    {order.amount}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${order.status === 'Pending'
                                            ? 'bg-orange-50 text-orange-700 ring-orange-600/20'
                                            : order.status === 'Approved'
                                                ? 'bg-green-50 text-green-700 ring-green-600/20'
                                                : 'bg-red-50 text-red-700 ring-red-600/20'
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">
                                    <div className="flex items-center gap-2">
                                        <span className={`font-medium ${order.bankColor || 'text-slate-800'}`}>
                                            {order.bank}
                                        </span>
                                        <span className="text-xs text-slate-400">
                                            • {order.accountNumber}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">
                                    {order.date}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button className={`transition-colors ${order.proofIcon === 'broken_image' ? 'text-red-300 hover:text-red-500' : order.proofIcon === 'receipt_long' && order.status === 'Approved' ? 'cursor-not-allowed text-slate-300' : 'text-slate-400 hover:text-primary'}`}>
                                        <Icon name={order.proofIcon} />
                                    </button>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    {order.status === 'Pending' ? (
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                className="flex size-8 items-center justify-center rounded-lg border border-slate-200 text-red-500 transition-colors hover:border-red-200 hover:bg-red-50"
                                                title="Reject"
                                            >
                                                <Icon name="close" size={18} />
                                            </button>
                                            <button
                                                className="flex size-8 items-center justify-center rounded-lg bg-primary text-white shadow-sm transition-colors hover:bg-primary-dark"
                                                title="Approve"
                                            >
                                                <Icon name="check" size={18} />
                                            </button>
                                        </div>
                                    ) : order.status === 'Rejected' ? (
                                        <span className="text-xs font-medium text-red-400">
                                            Invalid Proof
                                        </span>
                                    ) : (
                                        <span className="text-xs font-medium text-slate-400">
                                            {order.verifiedBy}
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-slate-200 bg-white px-6 py-4">
                <p className="text-sm text-slate-500">
                    Showing <span className="font-medium">1</span> to{' '}
                    <span className="font-medium">5</span> of{' '}
                    <span className="font-medium">12</span> pending orders
                </p>
                <div className="flex gap-2">
                    <button className="rounded-lg border border-slate-200 px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50">
                        Previous
                    </button>
                    <button className="rounded-lg border border-slate-200 px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-50">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
