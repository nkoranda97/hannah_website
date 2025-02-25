"use client";
import React from "react";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
    { name: "Reports", href: "#", current: false },
];

function classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(" ");
}
export default function DashboardNavbar() {
    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            {/* Left side: logo + nav links */}
                            <div className="flex items-center">
                                <div className="shrink-0">

                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                aria-current={item.current ? "page" : undefined}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-900 text-white"
                                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                    "rounded-md px-3 py-2 text-sm font-medium"
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Right side: notifications + profile menu */}
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">
                                    {/* Notifications */}
                                    <button
                                        type="button"
                                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white 
                           focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800
                           focus:outline-none"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>



                            {/* Mobile menu button */}
                            <div className="-mr-2 flex md:hidden">
                                <DisclosureButton
                                    className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 
                         text-gray-400 hover:bg-gray-700 hover:text-white 
                         focus:ring-2 focus:ring-white focus:ring-offset-2
                         focus:ring-offset-gray-800 focus:outline-none"
                                >
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon
                                        className="block h-6 w-6 group-data-[headlessui-state=open]:hidden"
                                        aria-hidden="true"
                                    />
                                    <XMarkIcon
                                        className="hidden h-6 w-6 group-data-[headlessui-state=open]:block"
                                        aria-hidden="true"
                                    />
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <DisclosurePanel className="md:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    aria-current={item.current ? "page" : undefined}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block rounded-md px-3 py-2 text-base font-medium"
                                    )}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                        <div className="border-t border-gray-700 pt-4 pb-3">
                            <div className="flex items-center px-5">
                                <div className="shrink-0">
                                    <img
                                        alt={user.name}
                                        src={user.imageUrl}
                                        className="h-10 w-10 rounded-full"
                                    />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium leading-none text-white">
                                        {user.name}
                                    </div>
                                    <div className="text-sm font-medium leading-none text-gray-400">
                                        {user.email}
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white
                         focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800
                         focus:outline-none"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                        </div>
                    </DisclosurePanel>
                    </div>
                </Disclosure>

                {/* Example: header + main (optional)*/}
                <header className="bg-white shadow-sm">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            Dashboard
                        </h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {/* Add your custom content here */}
                    </div>
                </main>
            </div>
        </>
    );
}