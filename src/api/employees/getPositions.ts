import { axiosInstance } from "../instance"
import { StrapiArrayResponse } from "@/types/strapi-response"

export type GetPositionsResponse = StrapiArrayResponse<{
    id: number
    attributes: {
        name: string
    }
}>

export const getPositions = async () => {
    return (await axiosInstance.get('/api/positions')).data as GetPositionsResponse
}