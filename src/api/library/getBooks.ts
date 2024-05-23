import { axiosInstance } from "../instance"
import { BookType } from "./getBookTypes"

export type BookAuthor = {
    short_name: string
    slug: string
}

export type Book = {
    coworkers: Array<string>
    description: string
    file: string | null
    id: number | string
    image: string
    isbn: string | null
    language: string
    name: string
    publishing_house: string
    size: number
    type: BookType
    workers: Array<BookAuthor>
}

export type BookResponse = {
    current_page: number
    next: string | null
    previous: string | null
    results: Array<Book>
    total_items: number
    total_pages: number
}

export type BookRequestParams = {
    page: number
    name?: string
    type?: string
}

export const getBooks = async (params: BookRequestParams) => {
    let path = `/library/scientificworks/?limit=9&page=${params.page}`
    if(params.name){
        path = `${path}&name=${params.name}`
    }
    if(params.type){
        path = `${path}&type=${params.type}`
    }
    return (await axiosInstance.get(path)).data as BookResponse
}

