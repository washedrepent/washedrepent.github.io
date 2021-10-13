import React, { useState, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ThemeContext } from "./ThemeContext";
import logolight from "../img/logo-normal.svg";
import logodark from "../img/logo-dark.svg";
import ModeToggle from './ModeToggle';

const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'About', href: '#section-about', current: false },
  { name: 'Skills', href: '#section-skills', current: false },
  { name: 'Portfolio', href: '#section-portfolio', current: false },
  { name: 'Contact', href: '#section-contact', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <Disclosure as="nav" className="bg-secondary">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-between sm:items-stretch">
                <div className="flex-1 flex items-center justify-between sm:items-stretch">
                  <div className="flex-shrink-0 flex items-center">
                    <img className="block dark:hidden h-16 w-auto" src={logolight} alt="Hans-Eric Lippke's Logo Plan, Build, Achieve"/>
                    <img className="hidden dark:block h-16 w-auto" src={logodark} alt="Hans-Eric Lippke's Logo Plan, Build, Achieve"/>     
                  </div>
                  <div className="hidden sm:flex sm:ml-6">
                    <div className="flex items-center space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-menuactive text-menuactive' : 'text-primary hover:bg-menuactive hover:text-menuactive',
                            'px-3 py-2 rounded-sm text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      
                      ))}
                    </div>
                  </div>
                </div>
                <ModeToggle/>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-menuactive text-menuactive' : 'text-primary hover:bg-menuactive hover:text-menuactive',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;