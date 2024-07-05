import { axiosInstance } from "../instance"
import { StrapiManyResponse } from "@/types/strapi-many-response"

export type GetPositionsResponse = StrapiManyResponse<{
    id: number
    attributes: {
        name: string
    }
}>

export const getPositions = async () => {
    return (await axiosInstance.get('/api/positions')).data as GetPositionsResponse
}