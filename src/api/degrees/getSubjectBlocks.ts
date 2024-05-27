import { axiosInstance } from "../instance"

export type SubjectBlocksResponse = {
    degree_name: string
    slug: string
    year: string
    subject_blocks: Array<SubjectBlock>
}

export type SubjectBlock = {
    full_name: string
    name: string
}

export const getSubjectBlocks = async (slug: string) => {
    return (await axiosInstance.get(`/educational_degrees/discipline_programs/${slug}/subject-blocks/`)).data as SubjectBlocksResponse
}

