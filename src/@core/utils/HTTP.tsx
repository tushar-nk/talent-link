import axios from 'axios'

export const BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL || ''

export const POST = async (url, data) => {
  const token = localStorage.getItem('token') || '{}'
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    return await axios
      .post(url, data, config)
      .then(result => {
        if (result) {
          throw result
        } else {
          return result
        }
      })
      .catch(error => {
        return error
      })
  } catch (error) {
    return error
  }
}

export const AUTH = async (url, data) => {
  try {
    return await axios
      .post(url, data)
      .then(result => {
        if (result && result.data && result.data.token) {
          const token = result.data.token
          localStorage.setItem('token', token)
          return result
        } else {
          throw result
        }
      })
      .catch(error => {
        return error
      })
  } catch (error) {
    return error
  }
}
