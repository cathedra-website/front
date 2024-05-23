import { Route } from "@/routes/library"
import { Book } from "./Book"
import { BookType } from "@/api/library/getBookTypes"
import { useNavigate } from "@tanstack/react-router"

const ALL_BOOKS: BookType = {
    name: 'Усі книги',
    slug: null
}

export const LibraryPage = () => {
    const navigate = useNavigate()
    const typeFilter = new URL(window.location.href).searchParams.get('type')
    const { books, types } = Route.useLoaderData()
    types.unshift(ALL_BOOKS)

    return <>
        <h2 className="font-bold text-5xl">Електронна бібліотека</h2>
        <div className="flex gap-8">
            {
                types.map(type => {
                    const highlighted = type.slug === typeFilter ? 'text-[#12A1DD]' : ''
                    return <p 
                        className={`text-3xl font-light cursor-pointer hover:text-[#12A1DD] ${highlighted}`}
                        onClick={() => {
                            const search: Record<string, unknown> = { page: 1 }
                            if(type.slug){
                                search.type = type.slug
                            }
                            navigate({to: '/library', search })
                        }}
                    >{type.name}
                    </p>
                })
            }
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-14">
            {
                books.results.map(book => <Book {...book} />)
            }
        </div>
    </>
}