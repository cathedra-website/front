import { Home } from '@/pages/Home/Home'
import { LibraryPage } from '@/pages/Library/LibraryPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: LibraryPage,
})