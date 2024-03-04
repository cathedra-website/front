import { RedirectLink } from "@/components/common/RedirectLink/RedirectLink";
import { ReactNode, useState } from "react";

export const AdditionalSection = (props: {children: ReactNode}) => {
    const [additional, setAdditional] = useState<string>('Детальніше')

    return <div>
        <div style={{
            height: additional === 'Детальніше' ? 0 : 'auto',
            visibility: additional === 'Детальніше' ? 'hidden' : 'visible',
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