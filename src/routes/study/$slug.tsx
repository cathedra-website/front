import { getDegreeInfo } from '@/api/degrees/getDegreeInfo'
import { DegreePage } from '@/pages/Degree/DegreePage'
import { createFileRoute, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/study/$slug')({
  component: DegreePage,
  loader: async ({ params }) => {
    try{
      const degreeInfo = await getDegreeInfo(params.slug)
      return degreeInfo
    } catch {
      throw notFound()
    }
   }
})

