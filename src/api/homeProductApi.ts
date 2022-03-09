import axiosClient from './axiosClient'
const homeProductApi = {
  getAll() {
    const url = '/home/product'
    return axiosClient.get(url)
  },
}

export default homeProductApi
