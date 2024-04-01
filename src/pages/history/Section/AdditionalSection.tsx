import { RedirectLink } from "@/components/common/RedirectLink/RedirectLink";
import { ReactNode, useState } from "react";

export const AdditionalSection = (props: {children: ReactNode}) => {
    const [additional, setAdditional] = useState<string>('Детальніше')

    return <div>
        <div style={{
            display: additional === 'Детальніше' ? 'none' : 'block',
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