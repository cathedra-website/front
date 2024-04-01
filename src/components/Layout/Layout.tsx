import { ReactNode } from "react"

type Props = {
    children: ReactNode
}
export const Layout = ({children}: Props) => {
    return <div className="layout px-36 flex flex-col gap-[5.5rem] my-12">
        {children}
    </div>
}