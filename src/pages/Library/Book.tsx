import type { Book as BookType } from "@/api/library/getBooks"
import { useNavigate } from "@tanstack/react-router"

export const Book = (props: BookType) => {
    const navigate = useNavigate()

    return <div className="flex flex-col gap-4">
        <div className="w-[50%] h-[236px] rounded-xl" style={{backgroundImage: `url(${props.image})`, backgroundSize: 'cover'}}></div>
        <div>
            <h3 className="font-medium text-3xl">{props.name}</h3>
            <p className="font-light text-2xl">{props.workers.map(worker => <span className="text-[#12A1DD] cursor-pointer" onClick={() => navigate({to: '/cathedra/employees/$slug', params: {slug: worker.slug}})}>{worker.short_name}, </span>)} {props.coworkers.join(', ')}</p>
        </div>
        <div>
            <p className="font-light text-2xl"><b>Видавництво:</b> {props.publishing_house}</p>
            <p className="font-light text-2xl"><b>Обсяг:</b> {props.size} c.</p>
            <p className="font-light text-2xl"><b>Мова:</b> {props.language}</p>
            {props.isbn && <p className="font-light text-2xl"><b>ISBN:</b> {props.isbn}</p>}
        </div>
    </div>
}