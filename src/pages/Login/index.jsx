import { Login } from '../../components/Forms/Login'
import styles from './Login.module.css'

export function LoginPage() {
  return (
    <article className={styles.login_page}>
      <Login />
    </article>
  )
}
