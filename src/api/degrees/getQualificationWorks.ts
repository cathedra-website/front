import { StrapiArrayResponse, StrapiResponse } from "@/types/strapi-response"
import { axiosInstance } from "../instance"

export type QualWork = StrapiArrayResponse<{
    id: number
    attributes: {
    student: string
    work_name: string | null
    employee: StrapiResponse<{
        id: number
        attributes: {
            first_name: string
            last_name: string
            middle_name?: string
            active: boolean
        }
    } | null> 

    }
}>

export type QualificationWorksResponse = StrapiResponse<{
    id: number
    attributes: {
        description: string
        year: string
        qualifications: QualWork
    }
}>

export const getQulificationWorks = async (slug: string) => {
    return (await axiosInstance.get(`/api/qualification-infos/${slug}?populate[qualifications][populate][employee][fields][0]=first_name&populate[qualifications][populate][employee][fields][1]=last_name&populate[qualifications][populate][employee][fields][2]=middle_name&populate[qualifications][populate][employee][fields][3]=active`)).data as QualificationWorksResponse
}

