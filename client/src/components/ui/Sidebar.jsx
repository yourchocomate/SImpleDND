import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    CalendarIcon,
  HomeIcon,
  MenuIcon,
  UserIcon,
  XIcon,
} from '@heroicons/react/outline'
import { useAuth } from '../../hooks'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { AUSetting } from '../sections'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Sidebar = ({children}) => {
    const {logout, user} = useAuth();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const location = useLocation()
    const navigation = [
      { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: location.pathname == '/dashboard' ? true : false},
      { name: 'Users', href: '/users', icon: UserIcon, current: location.pathname == '/users' || location.pathname.includes('user') ? true : false },
    ]

    return (
        <>
            <div className="h-screen flex overflow-hidden bg-gray-100">
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative flex-1 flex flex-col max-w-xs w-full card">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button
                                type="button"
                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={() => setSidebarOpen(false)}
                            >
                                <span className="sr-only">Close sidebar</span>
                                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </button>
                            </div>
                        </Transition.Child>
                        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                            <div className="flex-shrink-0 flex items-center flex-row px-4">
                                <span className="text-xl text-[#00c49f] font-bold ml-2">DND</span>
                            </div>
                            <nav className="mt-6 px-2 space-y-1">
                            {navigation.map((item) => (
                                <NavLink
                                key={item.name}
                                to={item.href}
                                className={classNames(
                                    item.current ? 'bg-[#00c49f] text-white' : 'text-gray-600 hover:bg-[#00c49f] hover:text-white',
                                    'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                )}
                                >
                                <item.icon
                                    className={classNames(
                                    item.current ? 'text-white' : 'text-gray-600 group-hover:text-white',
                                    'mr-4 flex-shrink-0 h-6 w-6'
                                    )}
                                    aria-hidden="true"
                                />
                                {item.name}
                                </NavLink>
                            ))}
                            </nav>
                            
                            <nav className="mt-6 flex-1 px-2 space-y-2">
                                <AUSetting />
                            </nav>
                        </div>
                        <div className="flex-shrink-0 flex bg-[#00c49f] card p-4">
                            <a href="#" className="flex-shrink-0 group block">
                            <div className="flex items-center">
                                <div>
                                <img
                                    className="inline-block h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                </div>
                                <div className="ml-3">
                                <p className="text-base font-medium text-white">{user.username}</p>
                                <p className="text-xs font-medium text-white group-hover:text-gray-200" onClick={() => logout().then(() => navigate('/'))}>Logout</p>
                                </div>
                            </div>
                            </a>
                        </div>
                        </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden md:flex md:flex-shrink-0">
                    <div className="flex flex-col w-64">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex-1 flex flex-col min-h-0 py-2 px-2">
                        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <div className="flex flex-row items-center flex-shrink-0 px-4">
                                <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=black"
                                alt="DND"
                                />
                                <span className="text-xl text-[#00c49f] font-bold ml-2">DND</span>
                            </div>
                            <nav className="mt-6 flex-1 px-2 space-y-2">
                                {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    className={classNames(
                                    item.current ? 'bg-[#00c49f] text-white' : 'text-gray-600 hover:bg-[#00c49f] hover:text-white',
                                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                    )}
                                >
                                    <item.icon
                                    className={classNames(
                                        item.current ? 'text-white' : 'text-gray-600 group-hover:text-white',
                                        'mr-3 flex-shrink-0 h-6 w-6'
                                    )}
                                    aria-hidden="true"
                                    />
                                    {item.name}
                                </NavLink>
                                ))}
                            </nav>
                            <nav className="mt-6 flex-1 px-2 space-y-2">
                                <AUSetting />
                            </nav>
                        </div>
                        <div className="flex-shrink-0 flex bg-[#00c49f]  card p-4">
                        <a href="#" className="flex-shrink-0 w-full group block">
                            <div className="flex items-center">
                            <div>
                                <img
                                className="inline-block h-9 w-9 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                                />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-white">{user.username}</p>
                                <p className="text-xs font-medium text-white group-hover:text-gray-200" onClick={() => logout().then(() => navigate('/')) } >Logout</p>
                            </div>
                            </div>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="flex flex-col w-0 flex-1 overflow-hidden">
                    <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
                    <button
                        type="button"
                        className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    </div>
                    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                        <div className="py-6">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Sidebar;