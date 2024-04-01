import { useAuth } from './useAuth'
import { requestNewToken } from '../lib/helpers'

export default function useRefreshToken() {
  const { getRefreshToken, refreshAccessToken } = useAuth()

  const checkAuth = async () => {
    try {
      const refreshToken = getRefreshToken()
      const newToken = await requestNewToken(refreshToken.toString())
      if (newToken) {
        const { accessToken } = newToken
        refreshAccessToken(accessToken)

        return accessToken
      }

      return null
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }

  return checkAuth
}
