import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Dashboard } from '../pages/Dashboard'
import { ProtectedRoutes } from './ProtectedRoutes'
import { LoginPage } from '../pages/Login'
import { AppLayout } from '../components/Layout/AppLayout/AppLayout'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppLayout>
        <Home />
      </AppLayout>
    ),
  },
  {
    path: '/about',
    element: (
      <AppLayout>
        <About />
      </AppLayout>
    ),
  },
  {
    path: '/login',
    element: (
      <AppLayout>
        <LoginPage />
      </AppLayout>
    ),
  },
  {
    path: '/',
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/dashboard',
        element: (
          <AppLayout>
            <Dashboard />
          </AppLayout>
        ),
      },
    ],
  },
])
