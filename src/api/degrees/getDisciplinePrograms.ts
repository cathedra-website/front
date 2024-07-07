import { StrapiArrayResponse, StrapiResponse } from "@/types/strapi-response"
import { axiosInstance } from "../instance"

export type DisciplineType = StrapiResponse<{
    id: number
    attributes: {
        short_name: string
        full_name: string
    }
}>

export type Disciplines = StrapiArrayResponse<{
    id: number
    attributes: {
        name: string
        semester: number
        discipline_type: DisciplineType
    }
}>

export type DisciplineProgramResponse = StrapiResponse<{
    id: number
    attributes: {
        description: string
        disciplines: Disciplines
    }
}>


export const getDisciplinePrograms = async (slug: string) => {
    return (await axiosInstance.get(`/api/discipline-infos/${slug}?populate[disciplines][populate]=*`)).data as DisciplineProgramResponse
}

