import { RedirectLink } from "@/components/common/RedirectLink/RedirectLink"
import { ProgrammProps } from "./programm-props"
import { Paragraph } from "@/components/styled/Paragrph"

export const Programm = (props: ProgrammProps) => {
    return (
        <div className="grid grid-cols-3 h-[9.6rem]">
            <div>
                <h3 className="font-medium text-[32px]">{props.degree}</h3>
                {'// do some with this'}
                <p className="font-light text-2xl text-[#00000080] leading-8">{props.fullName}</p>
            </div>
            <div className="col-span-2">
                <Paragraph>{props.description}</Paragraph>
                <RedirectLink size="29px">Детальніше</RedirectLink>
            </div>
        </div>
    )
}