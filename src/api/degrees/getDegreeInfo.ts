import { axiosInstance } from "../instance"

export type GetDegreeResponse = {
    description: string
    name: string
    slug: string
    study_plans: Array<{
        file: string
        name: string
    }>
    study_programs_desc: Array<{
        file: string
        name: string
    }>
}

export const getDegreeInfo = async (slug: string) => {
    return (await axiosInstance.get(`/educational_degrees/${slug}/`)).data as GetDegreeResponse
}

