import { axiosInstance } from "../instance"
import { SubjectBlock } from "./getSubjectBlocks"

export type DisciplineProgramResponse = {
    degree_name: string
    slug: string
    year: string
    subjects: Record<number, Array<Subject>>
}

export type Subject = {
    name: string
    semester: number
    block: SubjectBlock
}

export const getDisciplinePrograms = async (slug: string) => {
    return (await axiosInstance.get(`/educational_degrees/discipline_programs/${slug}`)).data as DisciplineProgramResponse
}

