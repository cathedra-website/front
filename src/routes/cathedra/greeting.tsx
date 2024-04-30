import { GreetingPage } from '@/pages/Greeting/Greeting'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cathedra/greeting')({
  component: GreetingPage,
})