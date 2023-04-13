import category from '../models/caterogy'
import axiosClient from './axiosClient'

const categoryApi = {
  getAll(): Promise<Array<category>> {
    const url = '/product/categories'
    return axiosClient.get(url)
  },
}

export default categoryApi
