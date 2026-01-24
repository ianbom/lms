import Icon from '@/Components/Icon';
import Navbar from '@/Components/User/Dashboard/Navbar';
import Sidebar from '@/Components/User/Dashboard/Sidebar';
import { PropsWithChildren, ReactNode, useState } from 'react';

interface UserDashboardLayoutProps extends PropsWithChildren {
    rightSidebar?: ReactNode;
}

export default function UserDashboardLayout({
    children,
    rightSidebar,
}: UserDashboardLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-background-light font-sans text-slate-900">
            {/* Mobile Overlay */}
            {(sidebarOpen || rightSidebarOpen) && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 lg:hidden"
                    onClick={() => {
                        setSidebarOpen(false);
                        setRightSidebarOpen(false);
                    }}
                />
            )}

            {/* Left Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <Sidebar onClose={() => setSidebarOpen(false)} />
            </div>

            {/* Main Content Area */}
            <main className="relative flex h-full flex-1 flex-col overflow-hidden">
                {/* Mobile Top Bar */}
                <div className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-4 lg:hidden">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="flex size-10 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100"
                    >
                        <Icon name="menu" size={24} />
                    </button>
                    <img
                        src="/ImpactAcademy.png"
                        alt="ImpactAcademy Logo"
                        className="h-8 w-auto"
                    />
                    {rightSidebar ? (
                        <button
                            onClick={() => setRightSidebarOpen(true)}
                            className="flex size-10 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100"
                        >
                            <Icon name="menu_book" size={24} />
                        </button>
                    ) : (
                        <div className="size-10" />
                    )}
                </div>

                {/* Content Wrapper */}
                <div className="relative flex flex-1 overflow-hidden">
                    {/* Scrollable Page Content */}
                    <div className="custom-scrollbar flex-1 overflow-y-auto px-4 pb-10 sm:px-6 lg:px-8">
                        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:gap-6">
                            {children}
                        </div>
                    </div>

                    {/* Right Sidebar (Optional) - Desktop */}
                    <div className="hidden lg:block">
                        {rightSidebar}
                    </div>

                    {/* Right Sidebar (Optional) - Mobile */}
                    {rightSidebar && (
                        <div
                            className={`fixed inset-y-0 right-0 z-40 w-full max-w-[340px] transform transition-transform duration-300 ease-in-out lg:hidden ${
                                rightSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                        >
                            <div className="relative h-full">
                                <button
                                    onClick={() => setRightSidebarOpen(false)}
                                    className="absolute left-4 top-4 z-10 flex size-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 lg:hidden"
                                >
                                    <Icon name="close" size={18} />
                                </button>
                                {rightSidebar}
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
