import { Detail, ListReponse } from './../models'
import axiosClient from './axiosClient'

const detailsApi = {
  getAll(params?: string): Promise<ListReponse<Detail>> {
    const url = `/product?slug=${params}`
    return axiosClient.get(url)
  },
}

export default detailsApi
