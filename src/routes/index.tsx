import { Home } from '@/pages/Home/Home'
import { ProgramsPage } from '@/pages/Programs/ProgramsPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: ProgramsPage,
})