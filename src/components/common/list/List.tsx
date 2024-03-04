import { ReactNode } from "react";

export const List = (props: {list: ReactNode[]}) => {
    return <ul className="ml-10 list-disc">
        {
            props.list.map(item => <li className="font-light text-2xl leading-7">{item}</li>)
        }
    </ul>
}