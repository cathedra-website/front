import { LinkPNG } from "./LinkPNG"
import { RedirectLinkProps } from "./props"

export const RedirectLink = ({children, ...rest} : RedirectLinkProps) => {
    return <a>
        <p className="font-medium inline mr-1" style={{fontSize: rest.size}}>{children}</p>
        <LinkPNG size={rest.size}/>
    </a>
}