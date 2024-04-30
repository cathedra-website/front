import { Divider } from "@/components/common/divider/Divider"

type Props = {
    name: string
    links?: Record<string, string>
    ranks?: Array<string>
}

export const TopInfo = (props: Props) => {

    let nameToLink
    if(props.links){
        nameToLink = Object.entries(props.links)
    }

    return <div className="flex gap-14">
        <div className="min-w-[236px] h-[355px] bg-blue-500 rounded-xl"></div>
        <div className="flex flex-col gap-8">
            <div className="w-fit">
                <h3 className="font-medium text-5xl mb-3">{props.name}</h3>
                <Divider />
            </div>
            {props.ranks && <p className="font-light text-2xl">{props.ranks.join(', ')}</p>}
            {nameToLink && <p className="font-medium text-2xl"><b>Посилання:</b> {nameToLink.map((link, index) => <a href={link[1]}><p className="inline underline underline-offset-8 font-light text-2xl">{link[0]}</p>{index === nameToLink.length-1 ? '.' : ', '}</a>)}</p>}
        </div>
    </div>
}