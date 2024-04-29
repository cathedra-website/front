import { EmploeesPage } from '@/pages/Employees/EmployeesPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cathedra/employees')({
  component: EmploeesPage,
})