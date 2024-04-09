import { CathedraLogo } from '../common/cathedra-logo/CathedraLogo'
import { Button, Group, Menu } from '@mantine/core';
import { navbar } from './navbar';

export const Header = () => {
    return (
        <div className='flex justify-center items-center gap-16 px-36 h-20 w-full relative left-0 top-0' style={{
            boxShadow: "0px 4px 77px -26px rgba(0,0,0,0.25)",
        }}>
            <CathedraLogo height={35} width={105}/>
            <Group>
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
            </Group>
        </div>
    )

}
