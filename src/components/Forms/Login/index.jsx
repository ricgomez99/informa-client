import { Input } from '../Input'
import { useState } from 'react'
import { ComponentLayout } from '../../Layout/ComponentLayot'
import styles from '../Forms.module.css'
import { useAuth } from '../../../hooks/useAuth'
import { Navigate } from 'react-router'
import { logInUser } from '../../../lib/helpers'

export function Login() {
  const [query, setQuery] = useState({
    username: '',
    email: '',
    password: '',
  })

  const { isAuthenticated } = useAuth()

  const handleChange = (event) => {
    const { name, value } = event.target
    setQuery((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await logInUser({ query })
      if (response) {
        console.log(`User logged-in succesfully`)
        console.table(response)
      }
    } catch (error) {
      console.log(error, 'Something went wrong')
    }
    setQuery({ username: '', email: '', password: '' })
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />
  }
  return (
    <ComponentLayout>
      <form className={styles.login_form} onSubmit={handleSubmit}>
        <h5 className={styles.login_form_title}>Sign In</h5>
        <div className={styles.login_form_input_container}>
          <label>Username</label>
          <Input
            type="text"
            name="username"
            placeholder="username"
            value={query.username}
            onChange={handleChange}
          />
        </div>
        <div className={styles.login_form_input_container}>
          <label>Email</label>
          <Input
            type="email"
            name="email"
            placeholder="email"
            value={query.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.login_form_input_container}>
          <label>Password</label>
          <Input
            type="password"
            name="password"
            placeholder="password"
            value={query.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </ComponentLayout>
  )
}
