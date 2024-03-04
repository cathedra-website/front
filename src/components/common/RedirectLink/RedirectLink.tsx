import { LinkPNG } from "./LinkPNG"
import { RedirectLinkProps } from "./props"

export const RedirectLink = ({children, ...rest} : RedirectLinkProps) => {
    return <a onClick={rest.onClick}>
        <p className="font-medium inline mr-1 cursor-pointer" style={{fontSize: rest.size}}>{children}</p>
        <LinkPNG size={rest.size}/>
    </a>
}