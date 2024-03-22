import { Input } from '../Input'
import { useState } from 'react'
import { Layout } from '../../Layout'

export function Login() {
  const [query, setQuery] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setQuery((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log({ query })
    setQuery({ username: '', email: '', password: '' })
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <h3>Enter your credentials</h3>
        <div>
          <label>Username</label>
          <Input
            type="text"
            name="username"
            placeholder="username"
            value={query.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <Input
            type="email"
            name="email"
            placeholder="email"
            value={query.email}
            onChange={handleChange}
          />
        </div>
        <div>
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
    </Layout>
  )
}
