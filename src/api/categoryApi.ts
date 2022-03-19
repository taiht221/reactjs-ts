import axiosClient from './axiosClient'

const categoryApi = {
  getAll(): Promise<Array<any>> {
    const url = '/categories'
    return axiosClient.get(url)
  },
}

export default categoryApi
