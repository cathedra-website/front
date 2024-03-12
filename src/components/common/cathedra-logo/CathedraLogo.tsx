import { WidthHeight } from "../../../types/width-height";
import { Logo } from "../logo/Logo";

export const CathedraLogo = (props: WidthHeight) => {
    //! better way to get images
    const img = '/src/static/img/cathedra-logo.png'
    return <Logo {...props} background={img}/>
} 