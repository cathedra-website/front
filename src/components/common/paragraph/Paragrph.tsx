import { ReactNode } from "react";

export const Paragraph = (props: {children: ReactNode}) => {
    return <p className="w-full font-light text-2xl leading-7 mb-5">{props.children}</p>
}