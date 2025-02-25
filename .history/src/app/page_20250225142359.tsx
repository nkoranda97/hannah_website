"use client";
import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,

} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "About Me", href: "#", current: false },
  { name: "CV", href: "#", current: false },
  { name: "Contact Me", href: "#", current: false },
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
              {/* Left side (logo) */}
              <div className="flex items-center">
                <div className="shrink-0">
                  {/* ...your logo here... */}
                </div>
              </div>

              {/* Right side (navigation + mobile button) */}
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {/* Nav links on the right */}
                  <div className="flex items-baseline space-x-4">
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

                  {/* Mobile menu button */}
                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button
                      className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 
                     text-gray-400 hover:bg-gray-700 hover:text-white 
                     focus:ring-2 focus:ring-white focus:ring-offset-2
                     focus:ring-offset-gray-800 focus:outline-none"
                    >
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon
                        className="block h-6 w-6 group-data-[headlessui-state=open]:hidden"
                        aria-hidden="true"
                      />
                      <XMarkIcon
                        className="hidden h-6 w-6 group-data-[headlessui-state=open]:block"
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                  </div>
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

            </DisclosurePanel>
          </div>
        </Disclosure>

        {/* Example: header + main (optional)*/}
        <header className="bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              About Me
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