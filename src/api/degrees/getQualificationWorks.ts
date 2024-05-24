import { axiosInstance } from "../instance"

export type QualificationWorksResponse = {
    year: string
    slug: string
    qualification_work: Array<QualificationWork>
}

export type QualificationWork = {
    full_name: string
    topic_of_work: string
    scientific_supervisor: {
        short_name_with_position: string
        slug: string
        is_active: boolean
    } | null
}

export const getQulificationWorks = async (slug: string) => {
    return (await axiosInstance.get(`/educational_degrees/qualification_work/${slug}`)).data as QualificationWorksResponse
}

