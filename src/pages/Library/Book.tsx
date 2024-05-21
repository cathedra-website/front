import { Divider } from "@/components/common/divider/Divider"

export type Book = {
    photo: string
    name: string
    authors: Array<string>
    vyd: string
    size: string
    lang: string
    isbn: string
}

export const Book = (props: Book) => {
    return <div className="flex flex-col gap-4">
        <div className="w-[50%] h-[236px] rounded-xl" style={{backgroundImage: `url(${props.photo})`, backgroundSize: 'cover'}}></div>
        <div>
            <h3 className="font-medium text-3xl">{props.name}</h3>
            <p className="font-light text-2xl">{props.authors.join(', ')}</p>
        </div>
        <div>
            <p className="font-light text-2xl"><b>Видавництво:</b> {props.vyd}</p>
            <p className="font-light text-2xl"><b>Обсяг:</b> {props.size}</p>
            <p className="font-light text-2xl"><b>Мова:</b> {props.lang}</p>
            <p className="font-light text-2xl"><b>ISBN:</b> {props.isbn}</p>
        </div>
        <Divider />
    </div>
}