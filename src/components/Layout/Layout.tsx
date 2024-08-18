import { ReactNode } from "react"

type Props = {
    children: ReactNode
}
export const Layout = ({children}: Props) => {
    return <div className="layout mx-auto flex flex-col gap-[4rem] my-12 max-w-screen-2xl px-6">
        {children}
    </div>
}