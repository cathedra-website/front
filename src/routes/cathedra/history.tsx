import { HistoryPage } from '@/pages/history/HistoryPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cathedra/history')({
  component: HistoryPage,
})