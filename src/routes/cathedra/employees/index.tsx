import { EmploeesPage } from '@/pages/Employees/EmployeesPage.js'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cathedra/employees/')({
  component: EmploeesPage,
})