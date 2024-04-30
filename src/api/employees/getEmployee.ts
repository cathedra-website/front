import { axiosInstance } from "../instance"

export type GetEmployeeResponse = {
    awards: Array<string>
    chosen_publications: Array<string>
    degree_history: string
    diploma_work_topics: Array<string>
    email: string
    first_name: string
    last_name: string
    links: Record<string, string>
    middle_name: string
    position: {
        name: string
    }
    ranks: Array<string>
    slug: string
    study_interests: Array<string>
    teach_disciplines: Array<{
        name: string
        description: string
    }>
}

export const getEmployee = async (slug: string) => {
    return (await axiosInstance.get(`/employees/${slug}/`)).data as GetEmployeeResponse
}

