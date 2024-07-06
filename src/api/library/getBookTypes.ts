import { StrapiArrayResponse } from "@/types/strapi-response"
import { axiosInstance } from "../instance"

export type BookTypes = StrapiArrayResponse<{
    id: number | null
    attributes: {
        name: string
    }
}>

export const getBooksTypes = async () => {
    return (await axiosInstance.get(`/api/worktypes`)).data as BookTypes
}

