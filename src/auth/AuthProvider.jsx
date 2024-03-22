import { useState, createContext } from 'react'

export const AuthContext = createContext({
  isAuthenticated: false,
})

export function AuthProvider({ children }) {
  // eslint-disable-next-line no-unused-vars
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
