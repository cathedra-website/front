import { getEmployees } from '@/api/employees/getEmployees'
import { getPositions } from '@/api/employees/getPositions'
import { EmploeesPage } from '@/pages/Employees/EmployeesPage.js'
import { createFileRoute, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/cathedra/employees/')({
  component: EmploeesPage,
  loader: async () => {
    try{
      const employees = await getEmployees()
      const positions = await getPositions()
      return {
        employees: employees.data,
        positions: positions.data
      }
    } catch {
      throw notFound()
    }
   }
})