import { getQulificationWorks } from '@/api/degrees/getQualificationWorks'
import { QualificationWorksPage } from '@/pages/QulificationWorks/QualificationWorksPage'
import { createFileRoute, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/study/theses/$year')({
  component: QualificationWorksPage,
  loader: async ({params}) => {
    try{
        const works = await getQulificationWorks(params.year)
        return works
      } catch {
        throw notFound()
      }
  } 
})