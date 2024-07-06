import type { Books as BookType } from "@/api/library/getBooks"
import { useNavigate } from "@tanstack/react-router"

export const Book = (props: BookType['data'][number]) => {
    const navigate = useNavigate()

    return <div className="flex flex-col gap-4">
        <div className="w-[50%] h-[236px] rounded-xl" style={{backgroundImage: `url(${props.attributes.image.data.attributes.url})`, backgroundSize: 'cover'}}></div>
        <div>
            <h3 className="font-medium text-3xl">{props.attributes.name}</h3>
            <p className="font-light text-2xl">{props.attributes.employees.data.map(worker => <span className="text-[#12A1DD] cursor-pointer" onClick={() => navigate({to: '/cathedra/employees/$slug', params: {slug: worker.id.toString()}})}>{worker.attributes.last_name}, </span>)} {props.attributes.coworkers && props.attributes.coworkers.map(i => i.name).join(', ')}</p>
        </div>
        <div>
            <p className="font-light text-2xl"><b>Видавництво:</b> {props.attributes.publishing_house}</p>
            <p className="font-light text-2xl"><b>Обсяг:</b> {props.attributes.size} c.</p>
            <p className="font-light text-2xl"><b>Мова:</b> {props.attributes.language}</p>
            {props.attributes.isbn && <p className="font-light text-2xl"><b>ISBN:</b> {props.attributes.isbn}</p>}
        </div>
    </div>
}