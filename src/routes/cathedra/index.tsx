import { About } from '@/pages/About/About'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cathedra/')({
  component: About,
})