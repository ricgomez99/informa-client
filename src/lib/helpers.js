import axios, { AxiosError } from 'axios'

export const logInUser = async ({ query }) => {
  const url = import.meta.env.VITE_BASE_URL
  try {
    const { data } = await axios.post(`${url}/auth/login`, query, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return data
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.message
    }
  }
}
