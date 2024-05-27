import { axiosInstance } from "../instance"

export type GetDegreeResponse = {
    description: string
    name: string
    slug: string
    study_plans: Array<{
        file: string
        name: string
    }>
    detailed_info: Array<{
        file: string
        name: string
    }>
    qualification_works: Array<{
        slug: string
        year: string
    }>
    disciplines_programs: Array<{
        slug: string
        year: string
    }>
}

export const getDegreeInfo = async (slug: string) => {
    return (await axiosInstance.get(`/educational_degrees/${slug}/`)).data as GetDegreeResponse
}

