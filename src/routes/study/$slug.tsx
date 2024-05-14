import { DegreePage } from '@/pages/Bachelor/BachelorPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/study/$slug')({
  component: DegreePage,
})