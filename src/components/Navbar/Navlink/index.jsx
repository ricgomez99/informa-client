import { Link } from 'react-router-dom'

export function Navlink({ path, children }) {
  return <Link to={path}>{children}</Link>
}
