import Navbar from '@/Components/User/Dashboard/Navbar';
import Sidebar from '@/Components/User/Dashboard/Sidebar';
import { PropsWithChildren, ReactNode } from 'react';

interface UserDashboardLayoutProps extends PropsWithChildren {
    rightSidebar?: ReactNode;
}

export default function UserDashboardLayout({
    children,
    rightSidebar,
}: UserDashboardLayoutProps) {
    return (
        <div className="flex h-screen overflow-hidden bg-background-light font-sans text-slate-900">
            {/* Left Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <main className="relative flex h-full flex-1 flex-col overflow-hidden">
                {/* Top Navbar */}
                {/* <Navbar /> */}

                {/* Content Wrapper */}
                <div className="relative flex flex-1 overflow-hidden">
                    {/* Scrollable Page Content */}
                    <div className="custom-scrollbar flex-1 overflow-y-auto px-8 pb-10">
                        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
                            {children}
                        </div>
                    </div>

                    {/* Right Sidebar (Optional) */}
                    {rightSidebar}
                </div>
            </main>
        </div>
    );
}
