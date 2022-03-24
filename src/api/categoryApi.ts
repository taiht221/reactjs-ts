import category from '../models/caterogy'
import axiosClient from './axiosClient'

const categoryApi = {
  getAll(): Promise<Array<category>> {
    const url = '/categories'
    return axiosClient.get(url)
  },
}

export default categoryApi
