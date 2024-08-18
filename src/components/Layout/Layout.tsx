import { ReactNode } from "react"

type Props = {
    children: ReactNode
}
export const Layout = ({children}: Props) => {
    return <div className="layout mx-auto flex flex-col gap-[4rem] my-12 max-w-screen-2xl px-8 md:px-24">
        {children}
    </div>
}