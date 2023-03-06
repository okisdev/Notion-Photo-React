import { Fragment } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Menu, Transition } from '@headlessui/react';

import { useTheme } from 'next-themes';

import { BsTranslate, BsSunFill, BsMoonFill } from 'react-icons/bs';

import siteConfig from '@/config/site.config';

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

const NavBar = () => {
    const { asPath } = useRouter();

    const { theme, setTheme } = useTheme();

    return (
        <div id='notion-photo-navbar' className='sticky top-0 z-50'>
            <div className='bg-white dark:bg-[#1A1B26]'>
                <div className='flex justify-center py-3'>
                    <nav className='flex w-9/12 justify-between md:w-5/12'>
                        <div id='notion-photo-navbar-start' className='flex items-center justify-center space-x-5'>
                            {siteConfig.global.site.nav
                                .filter((item) => item.position == 'left')
                                .map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <Link href={item.url} aria-label='website' target={item.external ? '_blank' : '_self'}>
                                                {item.name}
                                            </Link>
                                        </div>
                                    );
                                })}
                        </div>
                        <div id='notion-photo-navbar-end' className='flex items-center justify-center space-x-5'>
                            {siteConfig.global.site.nav
                                .filter((item) => item.position == 'right')
                                .map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <Link href={item.url} aria-label='website' target={item.external ? '_blank' : '_self'}>
                                                {item.name}
                                            </Link>
                                        </div>
                                    );
                                })}
                            <Menu as='div' className='relative'>
                                <div>
                                    <Menu.Button className='flex rounded-md text-sm'>
                                        <span className='sr-only'>Open language menu</span>
                                        <BsTranslate className='h-6 w-6' aria-hidden='true' />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter='transition ease-out duration-100'
                                    enterFrom='transform opacity-0 scale-95'
                                    enterTo='transform opacity-100 scale-100'
                                    leave='transition ease-in duration-75'
                                    leaveFrom='transform opacity-100 scale-100'
                                    leaveTo='transform opacity-0 scale-95'
                                >
                                    <Menu.Items className='absolute right-0 mt-2 w-28 origin-top-right rounded-md bg-white py-1 ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-zinc-200'>
                                        {siteConfig.global.site.language.map((item, index) => {
                                            return (
                                                <Menu.Item key={index}>
                                                    {({ active }) => (
                                                        <Link
                                                            href={item.code}
                                                            as={asPath}
                                                            locale={item.code}
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            aria-label={item.name}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            );
                                        })}
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            <div id='notion-photo-theme-switcher' className='flex'>
                                {theme === 'dark' ? (
                                    <button onClick={() => setTheme('light')} aria-label='light mode'>
                                        <BsSunFill className='h-5 w-5' />
                                    </button>
                                ) : (
                                    <button onClick={() => setTheme('dark')} aria-label='dark mode'>
                                        <BsMoonFill className='h-5 w-5' />
                                    </button>
                                )}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
