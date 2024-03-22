import { Header } from '../Header'
import { Navbar } from '../Navbar/navbar'
import styles from './ComponentLayout.module.css'

export function ComponentLayout({ children }) {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <section className={styles.forms_section}>{children}</section>
    </>
  )
}
