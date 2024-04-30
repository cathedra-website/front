
type Props = {
    study_interests: Array<string>
}

export const Science = (props: Props) => {
    return <div>
        <h3 className="font-normal text-3xl mb-4">Сфера наукових інтересів:</h3>
        <ul>
            {
                props.study_interests.map(item => <li className="list-disc list-inside font-light text-2xl">{item}</li>)
            }
        </ul>
    </div>
}