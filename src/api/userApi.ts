import { LoginFormInputs, RegisterFormInputs } from './../models/common'
import { RegisterReponse } from '../models/common'
import axiosClient from './axiosClient'

const userApi = {
  register(params: RegisterFormInputs): Promise<any> {
    return axiosClient.post('https://merkle-sever.herokuapp.com/api/auth/register', params)
  },
  login(params: LoginFormInputs): Promise<any> {
    return axiosClient.post('https://merkle-sever.herokuapp.com/api/auth/login', params)
  },
  change(data: any) {
    const url = '/elearning/v4/login'

    return axiosClient.put(url, data)
  },
}

export default userApi
