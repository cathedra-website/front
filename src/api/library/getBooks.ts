import { StrapiArrayResponse } from "@/types/strapi-response"
import { axiosInstance } from "../instance"
import { Enumeration } from "@/types/enumeration"
import { BookTypes } from "./getBookTypes"
import { Image } from "@/types/image"
import { GetEmployeesResponse } from "../employees/getEmployees"
import { getMediaURL } from "@/utils/getMediaURL"

export type Books = StrapiArrayResponse<{
    id: number
    attributes: {
        name: string
        publishing_house: string
        size: number
        language: string
        isbn: string
        coworkers?: Enumeration
        worktype: BookTypes['data'][number]
        image: Image
        employees: {
            data: GetEmployeesResponse['data']
        }

    }
}>

export type BookRequestParams = {
    page: number
    name?: string
    type?: string
}

export const getBooks = async (params: BookRequestParams) => {
    let path = `/api/works?populate=*&pagination[pageSize]=9&pagination[page]=${params.page}`
    if(params.name){
        path = `${path}&filters[$or][0][name][$containsi]=${params.name}&filters[$or][1][isbn][$eq]=${params.name}`
    }
    if(params.type){
        path = `${path}&filters[worktype][id][$eq]=${params.type}`
    }
    const books = (await axiosInstance.get(path)).data as Books
    for (const book of books.data){
        book.attributes.image.data.attributes.url = getMediaURL(book.attributes.image.data.attributes.url)
    }
    return books
}

