import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
    return (
        <div className='flex flex-col sm:flex-row bg-neutral-100 min-h-screen'>
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Header />
                <div className="p-4 flex-1 overflow-y-auto">
                    {<Outlet />}
                </div>
            </div>
        </div>
    )
}

