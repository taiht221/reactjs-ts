import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://course.spacedev.vn/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
})

export default axiosClient
/// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const { config, status, data } = error.response

    const URLS = [
      'https://api.ezfrontend.com/auth/local/register',
      'https://api.ezfrontend.com/auth/local',
    ]
    if (URLS.includes(config.url) && status === 400) {
      const errorList = data.data || []
      const firstError = errorList.length > 0 ? errorList[0] : {}
      const messageList = firstError.messages || []
      const firstMessage = messageList.length > 0 ? messageList[0] : {}
      throw new Error(firstMessage.message)
    }
    // Do something with response error
    return Promise.reject(error)
  }
)
