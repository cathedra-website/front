import { EmployeePage } from '@/pages/Employee/EmployeePage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cathedra/employees/$slug')({
  component: EmployeePage,
})