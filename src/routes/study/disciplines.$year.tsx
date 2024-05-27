import { getDisciplinePrograms } from '@/api/degrees/getDisciplinePrograms'
import { getSubjectBlocks } from '@/api/degrees/getSubjectBlocks'
import { ProgramsPage } from '@/pages/Programs/ProgramsPage'
import { createFileRoute, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/study/disciplines/$year')({
  component: ProgramsPage,
  loader: async ({params}) => {
    try{
        const disciplines = await getDisciplinePrograms(params.year)
        const blocks = await getSubjectBlocks(params.year)
        return {
          disciplines,
          blocks,
        }
      } catch {
        throw notFound()
      }
  } 
})