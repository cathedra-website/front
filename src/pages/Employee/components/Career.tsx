import { AdditionalSection } from "@/pages/history/Section/AdditionalSection"

type Props = {
    degree_history: string
}

export const Career = (props: Props) => {
    const paragrphs = props.degree_history.split('\n')
    const split = Math.floor(paragrphs.length / 4)
    const visible = paragrphs.slice(0, split)
    const hidden = paragrphs.slice(split, paragrphs.length)
    return <div className="flex flex-col gap-6">
        <h3 className="font-medium text-5xl">Освіта та кар’єра:</h3>
        {
            visible.map(item => <p className="font-light text-2xl">{item}</p>)
        }
        <AdditionalSection className="">
            <>
            {
                hidden.map(item => <p className="font-light text-2xl">{item}</p>)
            }
            </>
        </AdditionalSection>
    </div>
}