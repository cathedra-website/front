import { axiosInstance } from "../instance"
import { StrapiArrayResponse } from "@/types/strapi-response"
import { GetPositionsResponse } from "./getPositions"
import { File } from "@/types/file"
import { getMediaURL } from "@/utils/getMediaURL"

export type GetEmployeesResponse = StrapiArrayResponse<{
    id: number
    attributes: {
        first_name: string
        last_name: string
        middle_name?: string
        active: boolean
        ranks?: Array<{
            name: string
        }> 
        position: {
            data: GetPositionsResponse['data'][number]
        }
        image: File
    }
}>

export const getEmployees = async () => {
    const emps = (await axiosInstance.get('/api/employees?populate=*')).data as GetEmployeesResponse
    for (const emp of emps.data) {
        emp.attributes.image.data.attributes.url = getMediaURL(emp.attributes.image.data.attributes.url) 
    }
    return emps
}