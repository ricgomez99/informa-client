import styles from './header.module.css'

export function Header({ children }) {
  return <header className={styles.header}>{children}</header>
}
