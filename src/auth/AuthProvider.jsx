import { useState, createContext } from 'react'

export const AuthContext = createContext({
  isAuthenticated: false,
  getAccessToken: () => {},
  getRefreshToken: () => {},
  saveTokens: ({ accessCode, refreshCode }) => {},
  refreshAccessToken: (newAccessToken) => {},
})

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [accessToken, setAccessToken] = useState('')

  const getAccessToken = () => accessToken.accessToken

  const getRefreshToken = () => {
    const tokenData = localStorage.getItem('token')
    if (!tokenData) {
      return null
    }
    return tokenData
  }

  const saveTokens = ({ accessCode, refreshCode }) => {
    setAccessToken(accessCode)

    localStorage.setItem('token', refreshCode)
    setIsAuthenticated(true)
  }

  const refreshAccessToken = (newAccessToken) => {
    setAccessToken((prevValues) => ({
      ...prevValues,
      accessToken: newAccessToken,
    }))
    setIsAuthenticated(true)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        getAccessToken,
        getRefreshToken,
        saveTokens,
        refreshAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
