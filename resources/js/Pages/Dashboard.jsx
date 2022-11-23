import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            head="Dashboard"
        >

            <div>
                <div className="flex-grow text-gray-800">
                <main className="p-6 sm:p-10 space-y-6">
                    <section className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center p-8 bg-white shadow rounded-lg">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        </div>
                        <div>
                        <span className="block text-2xl font-bold">{props.userCount}</span>
                        <span className="block text-gray-500">Members to Date</span>
                        </div>
                    </div>
                    <div className="flex items-center p-8 bg-white shadow rounded-lg">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        </div>
                        <div>
                        <span className="block text-2xl font-bold">{props.organizationCount}</span>
                        <span className="block text-gray-500">Organizations to Date</span>
                        </div>
                    </div>
                    <div className="flex items-center p-8 bg-white shadow rounded-lg">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        </div>
                        <div>
                        <span className="inline-block text-2xl font-bold">{props.projectCount}</span>
                        <span className="block text-gray-500">Projects to Date</span>
                        </div>
                    </div>
                    <div className="flex items-center p-8 bg-white shadow rounded-lg">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        </div>
                        <div>
                        <span className="block text-2xl font-bold">{props.reportCount}</span>
                        <span className="block text-gray-500">Reports to Date</span>
                        </div>
                    </div>
                    </section>
                    <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
                    <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
                        <div className="px-6 py-5 font-semibold border-b border-gray-100">IMPORTANT Announcement</div>
                        <div className="p-4 flex-grow">
                        <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">Announcements</div>
                        </div>
                    </div>
                    <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
                        <div className="px-6 py-5 font-semibold border-b border-gray-100">Membership by Sector</div>
                        <div className="p-4 flex-grow">
                        <div className="flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">Chart</div>
                        </div>
                    </div>
                    <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
                        <div className="px-6 py-5 font-semibold border-b border-gray-100">Membership Growth Tracker</div>
                        <div className="p-4 flex-grow">
                        <div className="flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">Chart</div>
                        </div>
                    </div>
                    </section>
                </main>
                </div>
            </div>         
        </AuthenticatedLayout>
    );
}
