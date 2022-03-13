import { RegisterFormInputs } from './../models/common'
import { RegisterReponse } from '../models/common'
import axiosClient from './axiosClient'

const userApi = {
  register(params: RegisterFormInputs): Promise<any> {
    return axiosClient.post('https://api.ezfrontend.com/auth/local/register', params)
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
