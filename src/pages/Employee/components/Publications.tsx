import { AdditionalSection } from "@/pages/history/Section/AdditionalSection"

type Props = {
    chosen_publications: Array<string>
} 

export const Publications = (props: Props) => { 
    const split = Math.floor(props.chosen_publications.length / 4)
    const visible = props.chosen_publications.slice(0, split)
    const hidden = props.chosen_publications.slice(split, props.chosen_publications.length)
    return <div>
        <h3 className="font-semibold text-3xl mb-4">Вибрані публікації:</h3>
        <ul>
        {
            visible.map(item => <li className="list-decimal list-inside font-light text-2xl mb-2">{item}</li>)
        }
        <AdditionalSection className="block">
        {
            hidden.map(item => <li className="list-decimal list-inside font-light text-2xl mb-2">{item}</li>)
        }
        </AdditionalSection>
        </ul>
    </div>
}