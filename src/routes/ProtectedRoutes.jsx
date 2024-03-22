import { useAuth } from '../hooks/useAuth'
import { Outlet, Navigate } from 'react-router'

export function ProtectedRoutes() {
  // eslint-disable-next-line no-unused-vars
  const auth = useAuth()

  return auth.isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
