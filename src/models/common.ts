export interface PaginationParams {
  _limit: number
  _page: number
  _totalRows: number
}

export interface ListReponse<T> {
  data: T[]
  pagination: PaginationParams
}

export interface ListParams {
  _page?: number
  _limit?: number
  _sort?: string
  _order?: 'asc' | 'desc'
  [key: string]: any
}

export interface HomeProductReponse<T> {
  hot: T[]
  discount: T[]
}

export interface RegisterReponse {
  jwt: 'string'
  user: any
}

export interface RegisterFormInputs {
  fullName: string
  email: string
  password: string
  retypePassword: string
  username?: string
}
export interface LoginFormInputs {
  email: string
  password: string
}
export interface userState {
  loading: boolean
  current: any
  setting: any
}
