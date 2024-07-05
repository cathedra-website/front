import { axiosInstance } from "../instance"
import { StrapiManyResponse } from "@/types/strapi-many-response"
import { GetPositionsResponse } from "./getPositions"
import { Image } from "@/types/image"

export type GetEmployeesResponse = StrapiManyResponse<{
    id: number
    attributes: {
        first_name: string
        last_name: string
        middle_name?: string
        ranks?: Array<{
            name: string
        }> 
        position: {
            data: GetPositionsResponse['data'][number]
        }
        image: Image
    }
}>

export const getEmployees = async () => {
    return (await axiosInstance.get('/api/employees?populate=*')).data as GetEmployeesResponse
}