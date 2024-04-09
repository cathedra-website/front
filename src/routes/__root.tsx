import { Layout } from '@/components/Layout/Layout'
import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core'

export const Route = createRootRoute({
  component: () => (
    <>
      <MantineProvider>
        <Header />
          <Layout>
            <Outlet />
          </Layout>
        <Footer />
      </MantineProvider>
      <TanStackRouterDevtools />
    </>
  ),
})