import { CathedraLogo } from '../common/cathedra-logo/CathedraLogo'
import { Button, Menu } from '@mantine/core';
import { navbar } from './navbar';
import { MenuIcon, XIcon } from 'lucide-react';
import { LinkPNG } from '../common/RedirectLink/LinkPNG';
import { useState } from 'react';

export const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex gap-4 px-8 md:px-24 h-20 relative left-0 top-0 justify-between md:justify-start items-center' style={{
            boxShadow: "0px 4px 77px -26px rgba(0,0,0,0.25)",
        }}>
            <a href='/'><CathedraLogo height={35} width={105}/></a>
            <div className='hidden md:flex h-full text-center items-center justify-center flex-nowrap grow'>
                {
                    navbar.map(nav => <Menu loop={false} trigger='hover' withinPortal={false}
                    trapFocus={false}>
                        <Menu.Target>
                            <Button component='a' href={nav.link} variant="transparent" color="rgba(0, 0, 0, 1)">{nav.target}</Button>
                        </Menu.Target>
                        {
                            nav.content &&
                            <Menu.Dropdown className=''>
                                {nav.content.map(cont => <Menu.Item component='a' href={cont.link}>{cont.item}</Menu.Item>)}
                            </Menu.Dropdown>
                        }
                    </Menu>)
                }
            </div>
            <div className='md:hidden'>
                <MenuIcon className='' onClick={() => setTimeout(() => setOpen(true), 300)}/>
                <div className={!open ? 'hidden' : ''}>
                    <div className='w-screen h-screen bg-gray-500 opacity-40 z-10 absolute top-0 right-0'></div>
                    <div className='bg-white p-10 w-3/4 h-screen absolute top-0 z-20' style={{
                            right: open ? '0' : '-100%',
                            transitionProperty: 'right',
                            transitionDuration: '10s',
                    }}>
                        <XIcon className='relative top-0 left-0' onClick={() => setOpen(false)}/>
                        <div className='mt-6 mx-2 text-2xl flex flex-col gap-4 justify-start items-start'>
                        {
                            navbar.map(nav => <button>
                                <span><LinkPNG size='25'/> {nav.target}</span>
                            </button>)
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
