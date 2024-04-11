import { GreetingPage } from '@/pages/Greeting/Greeting'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/cathedra/greeting')({
  component: GreetingPage,
})