import { Link } from 'react-router-dom'
import styles from './Navlink.module.css'

export function Navlink({ path, children }) {
  return (
    <Link className={styles.navlink} to={path}>
      {children}
    </Link>
  )
}
