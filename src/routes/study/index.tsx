import { StudyPage } from '@/pages/Study/Study'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/study/')({
  component: StudyPage,
})