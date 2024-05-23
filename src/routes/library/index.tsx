import { getBooksTypes } from '@/api/library/getBookTypes'
import { BookRequestParams, getBooks } from '@/api/library/getBooks'
import { LibraryPage } from '@/pages/Library/LibraryPage'
import { createFileRoute, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/library/')({
  component: LibraryPage,
  loader: async (params) => {
    const search = params.location.search as BookRequestParams
    try{
      const books = await getBooks(search)
      const types = await getBooksTypes()
      return {
        books, 
        types
      }
    } catch {
      throw notFound()
    }
   }
})