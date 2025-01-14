'use client'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const user = {
    name: 'Authenticated user',
    email: 'User email',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    // { name: 'Why Talentyard', href: '/why', current: false },
    // { name: 'About us', href: '/about', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '/' },
    { name: 'Settings', href: '/' },
    { name: 'Sign out', href: '/' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar({ authenticated }) {
    return (
        <Disclosure as="nav" className="bg-neutral snap-proximity snap-y relative">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 snap-center">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="-ml-2 mr-2 flex items-center md:hidden">
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-shrink-0 items-center">
                                    <Link href='/'>
                                        <Image
                                            width={150}
                                            height={120}
                                            src={"/logo_small.png"}
                                            alt="Talentyard"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-black font-light text-base hover:border-b-2 hover:border-accent hover:text-black',
                                                'rounded-md px-3 py-2 text-sm'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center space-x-6">
                                <div className="flex-shrink-0 ">
                                    <Link
                                        href={"/onboard"}
                                        className="relative inline-flex items-center gap-x-1.5 rounded-md px-3 py-2 text-base text-black font-normal hover:underline hover:text-accentSecondary hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-none"
                                    >

                                        Apply as Talent
                                    </Link>
                                </div>
                                <div className="flex-shrink-0 hidden md:flex">
                                    <Link
                                        href={"/hire"}
                                        className="relative inline-flex items-center gap-x-1.5 rounded-md bg-primary px-3 py-2 text-base font-normal text-white shadow-sm hover:bg-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        Hire from Talentyard
                                    </Link>
                                </div>
                                <div className="flex-shrink-0 hidden md:flex">
                                    <button
                                        type="button"
                                        className="relative inline-flex items-center gap-x-1.5 rounded-md bg-neutral px-3 py-2 text-base font-normal text-black border-accent border-2 hover:bg-accentSecondary/75 hover:border-accentSecondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral"
                                    >
                                        Schedule Call
                                    </button>
                                </div>
                                {authenticated && <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                                    <button
                                        type="button"
                                        className="relative rounded-full  p-1 text-black hover:text-gray-400 focus:outline-none focus:ring-none focus:ring-none focus:ring-none focus:ring-none"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">Open user menu</span>
                                                <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {userNavigation.map((item) => (
                                                    <Menu.Item key={item.name}>
                                                        {({ active }) => (
                                                            <a
                                                                href={item.href}
                                                                className={classNames(
                                                                    active ? 'bg-gray-100' : '',
                                                                    'block px-4 py-2 text-sm text-gray-700'
                                                                )}
                                                            >
                                                                {item.name}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-black hover:border-b-2 hover:border-accentSecondary hover:text-black',
                                        'block rounded-md px-3 py-2 text-base font-light'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                        {authenticated && <div className="border-t border-gray-700 pb-3 pt-4">
                            <div className="flex items-center px-5 sm:px-6">
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-black">{user.name}</div>
                                    <div className="text-sm font-light text-black">{user.email}</div>
                                </div>
                                <button
                                    type="button"
                                    className="relative ml-auto rounded-full  p-1 text-black hover:text-gray-400 focus:outline-none focus:ring-none focus:ring-none focus:ring-none focus:ring-none"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-3 space-y-1 px-2 sm:px-3">
                                {userNavigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block rounded-md px-3 py-2 text-base font-light text-black hover:border-b-2 hover:border-accentSecondary hover:text-black"
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </div>}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
