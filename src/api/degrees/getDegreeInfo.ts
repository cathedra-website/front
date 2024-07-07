import { StrapiArrayResponse } from "@/types/strapi-response"
import { axiosInstance } from "../instance"
import { File } from "@/types/file"
import { getMediaURL } from "@/utils/getMediaURL"

const educationalFileTypes = ['detailedInfo', 'studyPlan'] as const 
export type EducationalFileTypes = typeof educationalFileTypes[number]

export type EducationalFiles = StrapiArrayResponse<{
    id: number
    attributes: {
        description: string
        type: EducationalFileTypes
        file: File
    }
}>

export type DisciplineInfo = StrapiArrayResponse<{
    id: number
    attributes: {
        description: string
    }
}>

export type QualificationInfos = {
    id: number
    attributes: {
        description: string
        year: string
    }
}

export type GetDegreeResponse = StrapiArrayResponse<{
    id: number,
    attributes: {
        name: string
        description: string
        slug: string
        educational_files: EducationalFiles
        discipline_infos: DisciplineInfo
        qualification_infos: StrapiArrayResponse<QualificationInfos>
    }
}>

export const getDegreeInfo = async (slug: string) => {
    const res = (await axiosInstance.get(`/api/educational-degrees?populate[discipline_infos]=true&populate[qualification_infos]=true&populate[educational_files][populate]=*&&filters[slug][$eq]=${slug}`)).data as GetDegreeResponse
    if(res.data.length === 0){
        throw new Error('No degree found')
    }
    const degree = res.data[0]
    for (const file of degree.attributes.educational_files.data){
        file.attributes.file.data.attributes.url = getMediaURL(file.attributes.file.data.attributes.url)
    }
    return degree
}

