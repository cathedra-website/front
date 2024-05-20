import { getEmployee } from '@/api/employees/getEmployee'
import { EmployeePage } from '@/pages/Employee/EmployeePage'
import { createFileRoute, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/cathedra/employees/$slug')({
  component: EmployeePage,
   loader: async ({ params }) => {
    try{
      const employee = await getEmployee(params.slug)
      return employee
    } catch {
      throw notFound()
    }
   }
})