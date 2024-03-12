import { HistoryPage } from '@/pages/history/HistoryPage'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/cathedra/history')({
  component: HistoryPage,
})