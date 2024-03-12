import { About } from '@/pages/About/About'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/cathedra/')({
  component: About,
})