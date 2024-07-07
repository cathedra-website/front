import { StrapiResponse } from "@/types/strapi-response"
import { axiosInstance } from "../instance"
import { File } from "@/types/file"
import { GetPositionsResponse } from "./getPositions"
import { Enumeration } from "@/types/enumeration"
import { getMediaURL } from "@/utils/getMediaURL"

export type GetEmployeeResponse = StrapiResponse<{
    id: number
    attributes: {
        first_name: string
        last_name: string
        middle_name?: string
        ranks?: Enumeration
        position: {
            data: GetPositionsResponse['data'][number]
        }
        image: File
        email?: string
        links?: Record<string, string>
        career: string
        study_interests: Enumeration
        chosen_publications: Enumeration
        diploma_work_topics?: Enumeration 
    }
}>

export const getEmployee = async (slug: string) => {
    const emp = (await axiosInstance.get(`/api/employees/${slug}?populate=*`)).data as GetEmployeeResponse
    emp.data.attributes.image.data.attributes.url = getMediaURL(emp.data.attributes.image.data.attributes.url)
    return emp
}

