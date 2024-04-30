import { RedirectLink } from "@/components/common/RedirectLink/RedirectLink";
import { ComponentProps, ReactNode, useState } from "react";

export const AdditionalSection = (props: {children: ReactNode, className?: ComponentProps<'div'>['className']}) => {
    const [additional, setAdditional] = useState<string>('Детальніше')

    return <div className={props.className}>
        <div className="flex-col gap-6" style={{
            display: additional === 'Детальніше' ? 'none' : props.className ? props.className : 'flex',
        }}>
            {props.children}
        </div>
        <RedirectLink size={'32px'} onClick={() => {
            if (additional === 'Детальніше'){
                setAdditional('Згорнути')
            } else {
                setAdditional('Детальніше')
            }
        }}>{additional}</RedirectLink>
    </div>
}