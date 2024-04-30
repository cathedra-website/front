
type Props = {
    teach_disciplines: Array<{
        name: string;
        description: string;
    }>
}

export const Disciplines = (props: Props) => {
    return <div>
        <h3 className="font-semibold text-3xl mb-4">Викладацька діяльність:</h3>
        <ul className="">
            {
                props.teach_disciplines.map(item => <li className="list-decimal list-inside font-light text-2xl mb-2 marker:font-medium"><span className="font-medium">{item.name}</span> — {item.description}</li>)
            }
        </ul>
    </div>
}