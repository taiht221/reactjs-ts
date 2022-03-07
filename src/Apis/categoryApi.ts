import axiosClient from './axiosClient'

const categoryApi = {
  getAll(params: []) {
    const url = '/categories'
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

export default categoryApi
