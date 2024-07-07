import { StrapiArrayResponse } from "@/types/strapi-response"
import { axiosInstance } from "../instance"

export type DisciplineTypesResponse = StrapiArrayResponse<{
    id: number
    attributes: {
        short_name: string
        full_name: string
    }
}>

export const getDisciplinesTypes = async (ids: number[]) => {
    return (await axiosInstance.get(`/api/discipline-types?${ids.map((id, pos) => `filters[id][$in][${pos}]=${id}`).join('&')}`)).data as DisciplineTypesResponse
}

