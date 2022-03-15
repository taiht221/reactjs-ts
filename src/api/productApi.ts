import { ListReponse } from './../models/common'
import axiosClient from './axiosClient'

const productApi = {
  getAll(params?: any): Promise<ListReponse<any>> {
    const url = '/product'
    return axiosClient.get(url, { params })
  },

  get(id: string) {
    const url = `/categories?id=${id}`
    return axiosClient.get(url)
  },

  add(data: {}) {
    const url = `/categories`
    return axiosClient.post(url, data)
  },

  update(data: any) {
    const url = `/categories/${data.id}`
    return axiosClient.patch(url, data)
  },

  remove(data: any) {
    const url = `/categories/${data.id}`
    return axiosClient.delete(url, data)
  },
}

export default productApi
