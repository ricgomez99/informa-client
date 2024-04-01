import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Dashboard } from '../pages/Dashboard'
import { ProtectedRoutes } from './ProtectedRoutes'
import { LoginPage } from '../pages/Login'
import { AppLayout } from '../components/Layout/AppLayout/AppLayout'
import PersistLogin from '../components/PersistLogin'

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
    element: (
      <PersistLogin>
        <ProtectedRoutes />
      </PersistLogin>
    ),
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
