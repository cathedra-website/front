
type Props = {
    diploma_work_topics: Array<string>
}

export const DiplomeThemes = (props: Props) => {
    return <div>
        <h3 className="font-semibold text-3xl mb-4">Теми курсових та дипломних робіт:</h3>
        <ul>
            {
                props.diploma_work_topics.map(item => <li className="list-decimal list-inside font-light text-2xl mb-2">{item}</li>)
            }
        </ul>
    </div>
}