import { Home } from '@/pages/Home/Home'
import { QualificationWorksPage } from '@/pages/QulificationWorks/QualificationWorksPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: QualificationWorksPage,
})