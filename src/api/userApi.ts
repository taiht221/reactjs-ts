import axiosClient from './axiosClient'

const userApi = {
  register(data: any) {
    const url = '/elearning/v4/register'

    return axiosClient.post(url, data)
  },
  login(data: any) {
    const url = '/elearning/v4/login'

    return axiosClient.post(url, data)
  },
  change(data: any) {
    const url = '/elearning/v4/login'

    return axiosClient.put(url, data)
  },
}

export default userApi
