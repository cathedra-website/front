import { ReactNode } from "react"

export const SectionHeader = (props: {children: ReactNode}) => {
    return <h3 className="h-[2.4rem] w-full block font-medium text-3xl">{props.children}</h3>
}