import { Navlink } from './Navlink'
import { navRoutes } from './../../utils/navRoutes'
import styles from './navbar.module.css'

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_items}>
        {navRoutes &&
          navRoutes.map((item) => (
            <li className={styles.navbar_items_links} key={item.id}>
              <Navlink path={item.path}>{<span>{item.name}</span>}</Navlink>
            </li>
          ))}
      </ul>
    </nav>
  )
}
