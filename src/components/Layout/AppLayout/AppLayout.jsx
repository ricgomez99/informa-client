import styles from './AppLayout.module.css'

export function AppLayout({ children }) {
  return <main className={styles.app_layout}>{children}</main>
}
