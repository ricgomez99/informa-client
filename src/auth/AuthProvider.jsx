import { useState, createContext } from 'react'

export const AuthContext = createContext({
  isAuthenticated: false,
  getAccessToken: () => {},
  saveTokens: ({ accessCode, refreshCode }) => {},
})

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [tokens, setTokens] = useState({
    accessToken: '',
    refreshToken: '',
  })

  const getAccessToken = () => tokens.accessToken
  const saveTokens = ({ accessCode, refreshCode }) => {
    // TODO: state is not saving the tokens - check it out
    setTokens({
      accessToken: accessCode,
      refreshToken: refreshCode,
    })

    console.log({ tokens })

    localStorage.setItem('token', refreshCode)
    setIsAuthenticated(true)
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, getAccessToken, saveTokens }}
    >
      {children}
    </AuthContext.Provider>
  )
}
