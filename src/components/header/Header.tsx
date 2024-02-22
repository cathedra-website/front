import { CathedraLogo } from '../common/cathedra-logo/CathedraLogo'
import { LinkList } from './link-list/LinkList'

export const Header = () => {
    return (
        <div className='flex justify-center items-center gap-16 px-36 h-20 w-full shadow-md relative left-0 top-0 mb-20'>
            <CathedraLogo height={35} width={105}/>
            <LinkList />
        </div>
    )
        
}