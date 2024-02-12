import { CathedraLogo } from '../common/cathedra-logo/CathedraLogo'
import { LinkList } from './link-list/LinkList'

export const Header = () => {
    return (
        <div className='flex justify-center items-center gap-16 px-36 h-20 w-full shadow-lg'>
            <CathedraLogo height={35} width={105}/>
            <LinkList />
        </div>
    )
        
}