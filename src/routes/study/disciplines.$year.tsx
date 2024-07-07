import { getDisciplinePrograms } from '@/api/degrees/getDisciplinePrograms'
import { getDisciplinesTypes } from '@/api/degrees/getDisciplineTypes'
import { ProgramsPage } from '@/pages/Disciplines/DisciplinesPage'
import { createFileRoute, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/study/disciplines/$year')({
  component: ProgramsPage,
  loader: async ({params}) => {
    try{
        const disciplines = await getDisciplinePrograms(params.year)
        const typeIds = disciplines.data.attributes.disciplines.data.map(disc => disc.attributes.discipline_type.data.id)
        const types = await getDisciplinesTypes(typeIds)
        return {
          disciplines,
          types
        }
      } catch {
        throw notFound()
      }
  } 
})