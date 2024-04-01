import axios, { AxiosError } from 'axios'

const url = import.meta.env.VITE_BASE_URL
export const logInUser = async ({ query }) => {
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

export const requestNewToken = async (refreshToken) => {
  try {
    const { data } = await axios.post(
      `${url}/token`,
      { token: refreshToken },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer`,
        },
      }
    )
    return data
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}
