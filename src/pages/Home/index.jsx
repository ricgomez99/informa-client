import { LinkButton } from './../../components/LinkButton/index'
import styles from './Home.module.css'

export function Home() {
  return (
    <>
      <section className={styles.home_container}>
        <div className={styles.home_main_text}>
          <h1>Welcome to Tasks Manager!</h1>
          <h3>It is time to organize your stuff</h3>
          <p>Create, Delete, and Update your tasks in just minutes.</p>
        </div>
        <aside className={styles.home_getstarted}>
          <h2>Where to start?</h2>
          <p>Start by signing into your account, or go ahead and cread one:</p>
          <LinkButton route={'/login'} text={'Login'} />
        </aside>
      </section>
    </>
  )
}
