import { LoginFormInputs, RegisterFormInputs } from './../models/common'
import { RegisterReponse } from '../models/common'
import axiosClient from './axiosClient'

const userApi = {
  register(params: RegisterFormInputs): Promise<any> {
    return axiosClient.post('https://api.ezfrontend.com/auth/local/register', params)
  },
  login(params: LoginFormInputs): Promise<any> {
    return axiosClient.post('https://api.ezfrontend.com/auth/local', params)
  },
  change(data: any) {
    const url = '/elearning/v4/login'

    return axiosClient.put(url, data)
  },
}

export default userApi
