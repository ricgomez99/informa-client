import { useState, useEffect } from 'react'
import useRefreshToken from '../../hooks/useRefreshToken'
import { useAuth } from '../../hooks/useAuth'

export default function PersistLogin({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const refresh = useRefreshToken()
  const { getAccessToken } = useAuth()
  const accessToken = getAccessToken()

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh()
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    !accessToken ? verifyRefreshToken() : setIsLoading(false)
  }, [])

  useEffect(() => {
    console.log(`Loading: ${isLoading}`)
    console.log(`Access Token: ${accessToken}`)
  }, [isLoading])

  return <>{isLoading ? <p>Loading...</p> : children}</>
}
