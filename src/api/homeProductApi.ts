import { HomeProductReponse, ListReponse } from './../models/common'
import category from '@/models/caterogy'
import axiosClient from './axiosClient'

const homeProductApi = {
  getAll(params?: any): Promise<HomeProductReponse<any>> {
    const url = '/home/product'
    return axiosClient.get(url, { params })
  },
}

export default homeProductApi
