import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, Head } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import React, { PropsWithChildren, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import ApplicationMark from '@/Components/ApplicationMark';
import Banner from '@/Components/Banner';
import Dropdown from '@/Components/Dropdown';
import DropdownLink from '@/Components/DropdownLink';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
interface Props {
  title: string;
  renderHeader?(): JSX.Element;
}

export default function AppLayoutNew({
  title,
  renderHeader,
  children,
}: PropsWithChildren<Props>) {
  const page = useTypedPage();
  const route = useRoute();
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  function logout(e: React.FormEvent) {
    e.preventDefault();
    Inertia.post(route('logout'));
  }

  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", resources: "Chart_fill", url: "dashboard"},
    { title: "Projects", resources: "Chat", url: "projects.index"},
    { title: "Accounts", resources: "User"},
    //{ title: "Schedule ", resources: "Calendar" },
    //{ title: "Search", resources: "Search" },
    //{ title: "Analytics", resources: "Chart" },
    //{ title: "Files ", resources: "Folder", gap: true },
    //{ title: "Setting", resources: "Setting" },
  ];

  return (
    <div className="min-h-full flex">
      <Head title={title} />
      
      <Banner />


      {/*Sidebar*/}
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-blue-900 h-screen p-5  pt-8 relative duration-300 hidden lg:block`}
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
              open && "rotate-[360deg]"
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
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${/*Menu.gap ? "mt-9" : "mt-2"*/''} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`/assets/${Menu.resources}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                <InertiaLink href={route(`${Menu.url? Menu.url: 'dashboard'}`)}>{Menu.title}</InertiaLink>
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      {/*Navbar*/}
      <div className="min-h-screen bg-gray-100 flex-1">
        <nav className="bg-white border-b border-gray-100">
          {/* <!-- Primary Navigation Menu --> */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                
                {/* <!-- Page Heading --> */}
                {renderHeader ? (
                    <div className="max-w-7xl ml-auto py-6 px-4 sm:px-6 lg:px-8">
                      {renderHeader()}
                    </div>
                ) : null}

                {/*Use components*/}
                <div className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#">
                      <i className="fas fa-bars"/>
                    </a>
                  </div>
              </div>

              <div className="hidden sm:flex sm:items-center sm:ml-6">
                

                {/* <!-- Settings Dropdown --> */}
                <div className="ml-3 relative">
                  <Dropdown
                    align="right"
                    width="48"
                    renderTrigger={() =>
                      page.props.jetstream.managesProfilePhotos ? (
                        <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                          <img
                            className="h-8 w-8 rounded-full object-cover"
                            src={page.props.user.profile_photo_url}
                            alt={page.props.user.name}
                          />
                        </button>
                      ) : (
                        <span className="inline-flex rounded-md">
                          <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"
                          >
                            {page.props.user.name}

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
                      )
                    }
                  >
                    {/* <!-- Account Management --> */}
                    <div className="block px-4 py-2 text-xs text-gray-400">
                      Manage Account
                    </div>

                    <DropdownLink href={route('profile.show')}>
                      Profile
                    </DropdownLink>

                    {page.props.jetstream.hasApiFeatures ? (
                      <DropdownLink href={route('api-tokens.index')}>
                        API Tokens
                      </DropdownLink>
                    ) : null}

                    <div className="border-t border-gray-100"></div>

                    {/* <!-- Authentication --> */}
                    <form onSubmit={logout}>
                      <DropdownLink as="button">Log Out</DropdownLink>
                    </form>
                  </Dropdown>
                </div>
              </div>

              {/* <!-- Hamburger --> */}
              <div className="-mr-2 flex items-center sm:hidden">
                <button
                  onClick={() =>
                    setShowingNavigationDropdown(!showingNavigationDropdown)
                  }
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className={classNames({
                        hidden: showingNavigationDropdown,
                        'inline-flex': !showingNavigationDropdown,
                      })}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                    <path
                      className={classNames({
                        hidden: !showingNavigationDropdown,
                        'inline-flex': showingNavigationDropdown,
                      })}
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

          {/* <!-- Responsive Navigation Menu --> */}
          <div
            className={classNames('sm:hidden', {
              block: showingNavigationDropdown,
              hidden: !showingNavigationDropdown,
            })}
          >
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

            {/* <!-- Responsive Settings Options --> */}
            <div className="pt-4 pb-1 border-t border-gray-200">
              <div className="flex items-center px-4">
                {page.props.jetstream.managesProfilePhotos ? (
                  <div className="flex-shrink-0 mr-3">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={page.props.user.profile_photo_url}
                      alt={page.props.user.name}
                    />
                  </div>
                ) : null}

                <div>
                  <div className="font-medium text-base text-gray-800">
                    {page.props.user.name}
                  </div>
                  <div className="font-medium text-sm text-gray-500">
                    {page.props.user.email}
                  </div>
                </div>
              </div>

              <div className="mt-3 space-y-1">
                <ResponsiveNavLink
                  href={route('profile.show')}
                  active={route().current('profile.show')}
                >
                  Profile
                </ResponsiveNavLink>

                {page.props.jetstream.hasApiFeatures ? (
                  <ResponsiveNavLink
                    href={route('api-tokens.index')}
                    active={route().current('api-tokens.index')}
                  >
                    API Tokens
                  </ResponsiveNavLink>
                ) : null}

                {/* <!-- Authentication --> */}
                <form method="POST" onSubmit={logout}>
                  <ResponsiveNavLink as="button">
                    Log Out
                  </ResponsiveNavLink>
                </form>

                
              </div>
            </div>
          </div>
        </nav>

        

        {/* <!-- Page Content --> */}
        <main>{children}</main>
      </div>
      
    </div>
  );
}
