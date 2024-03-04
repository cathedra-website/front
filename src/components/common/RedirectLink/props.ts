import { MouseEventHandler, ReactNode } from "react"

export type RedirectLinkProps = {
    children: ReactNode
    size: string
    onClick?: MouseEventHandler<HTMLAnchorElement>
}