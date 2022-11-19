import React, { useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Head } from '@inertiajs/inertia-react';


export default function Authenticated({ auth, header, children, head}) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", resources: "Chart_fill", url: "dashboard"},
        { title: "Projects", resources: "Chat", url: "projects.index"},
        { title: "Organization", resources: "User", url: "organization"},
        //{ title: "Schedule ", resources: "Calendar" },
        //{ title: "Search", resources: "Search" },
        //{ title: "Analytics", resources: "Chart" },
        //{ title: "Files ", resources: "Folder", gap: true },
        //{ title: "Setting", resources: "Setting" },
    ];


    return (
        <div className="min-h-screen bg-gray-100 flex">
            <Head title={head} />
            <div
            className={` ${
            open ? "w-72" : "w-20 "
            } bg-slate-800 h-screen p-5 pt-8 top-0 sticky duration-300 hidden lg:block`
            }
        >
            <img
            src="/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
            border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
            <img
                src="/logo192.png"
                className={`w-16 cursor-pointer duration-500 ${
                /*open && "rotate-[360deg]"*/""
                }`}
            />
            <h1
                className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
                }`}
            >
                Arise KMS
            </h1>
            </div>
            <hr className="mt-6"/>
            <ul className="pt-6">
            {Menus.map((Menu, index) => (
                <a key={index} href={route(`${Menu.url? Menu.url: 'dashboard'}`)}>
                <li
                    className={`flex  rounded-md p-2 cursor-pointer hover:bg-gray-400 text-gray-300 text-sm items-center gap-x-4 
                    ${/*Menu.gap ? "mt-9" : "mt-2"*/''} ${
                    index === 0 && "bg-light-white"
                    } `}
                >
                    <img src={`/assets/${Menu.resources}.png`} />
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                    {Menu.title}
                    </span>
                </li>
                </a>
            ))}
            </ul>
        </div>
        <div className="min-h-screen bg-gray-100 flex-1">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                        {header && (
                            <header>
                                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                            </header>
                        )}
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        {Menus.map((Menu, index) => (
                        <ResponsiveNavLink 
                            key={index}
                            href={route(`${Menu.url? Menu.url: 'dashboard'}`)} 
                            active={route().current(`${Menu.url? Menu.url: 'dashboard'}`)}
                            >
                            {Menu.title}
                        </ResponsiveNavLink>))}
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {auth.user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">{auth.user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>
            </div>
        </div>
    );
}
