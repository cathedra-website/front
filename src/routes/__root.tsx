import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
        <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
})