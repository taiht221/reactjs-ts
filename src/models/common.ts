export interface PaginationParams {
  currentPage: number
  totalPage: number
  count: number
  perPage: number
  nextPage: number
}

export interface ListReponse<T> {
  data: T[]
  paginate: PaginationParams
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
export interface Query {
  page?: any
  sort?: any
  free_ship_badge?: any
  is_best_price_guaranteed?: any
  support_p2h_delivery?: any
  categories?: any
  min: number
  max: number
}
