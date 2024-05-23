import { axiosInstance } from "../instance"

export type BookType = {
    name: string
    slug: string | null
}

export const getBooksTypes = async () => {
    return (await axiosInstance.get(`/library/scientificworktypes/`)).data as Array<BookType>
}

