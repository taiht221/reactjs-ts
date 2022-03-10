import { HomeProductReponse, ListReponse } from './../models/common'
import category from '@/models/caterogy'
import axiosClient from './axiosClient'

const detailsApi = {
  getAll(params?: string): Promise<ListReponse<any>> {
    const url = `/product?slug=${params}`
    return axiosClient.get(url)
  },
}

export default detailsApi
