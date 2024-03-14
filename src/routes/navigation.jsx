import { Home } from '../pages/Home/index.jsx'
import { About } from '../pages/About/index.jsx'
import { LoginPage } from '../pages/Login/index'

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]
