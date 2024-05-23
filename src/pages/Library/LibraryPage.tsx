import { Route } from "@/routes/library"
import { Book } from "./Book"
import { BookType } from "@/api/library/getBookTypes"
import { useNavigate } from "@tanstack/react-router"
import { Input, Pagination } from "@mantine/core"
import { SearchIcon } from "lucide-react"
import * as _ from 'lodash'
import { ChangeEvent } from "react"

const ALL_BOOKS: BookType = {
    name: 'Усі книги',
    slug: null
}

export const LibraryPage = () => {
    const navigate = useNavigate()
    const typeFilter = new URL(window.location.href).searchParams.get('type')
    const nameFilter = new URL(window.location.href).searchParams.get('name') ?? ''
    const currentPage = Number(new URL(window.location.href).searchParams.get('page')) ?? 1
    const { books, types } = Route.useLoaderData()
    types.unshift(ALL_BOOKS)

    const filterHandler = _.debounce((event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const name = event.target.value
        const search: Record<string, unknown> = { page: 1 }
        if(name){
            search.name = name
        }
        navigate({to: '/library', search })
    }, 300)

    return <>
        <h2 className="font-bold text-5xl">Електронна бібліотека</h2>
        <div>
            <div className="flex gap-8 mb-8">
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
            <Input 
                className="min-w-16 w-[40%]"
                placeholder="Знайти книгу" 
                radius='md'
                leftSection={<SearchIcon size={16} color="black"/>}
                defaultValue={nameFilter}
                onChange={filterHandler}/>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-14">
            {
                books.results.map(book => <Book {...book} />)
            }
        </div>
        <Pagination className="m-auto" radius='xl' size='lg' total={books.total_pages} defaultValue={currentPage}
        onNextPage={() => {
            const search: Record<string, unknown> = { page: currentPage + 1 }
            if(typeFilter){
                search.type = typeFilter
            }
            if(nameFilter){
                search.name = nameFilter
            }
            navigate({ to: '/library', search})
        }}
        onPreviousPage={() => {
            const search: Record<string, unknown> = { page: currentPage - 1 }
            if(typeFilter){
                search.type = typeFilter
            }
            if(nameFilter){
                search.name = nameFilter
            }
            navigate({ to: '/library', search})
        }}
        onChange={(page) => {
            const search: Record<string, unknown> = { page }
            if(typeFilter){
                search.type = typeFilter
            }
            if(nameFilter){
                search.name = nameFilter
            }
            navigate({ to: '/library', search})
        }}
        />
    </>
}