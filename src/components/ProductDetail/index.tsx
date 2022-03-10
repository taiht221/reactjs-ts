import { ListReponse } from '../../models/common'
import detailsApi from '../../api/detailsApi'
import { useEffect, useState } from 'react'
import { useLocation, useRoutes, useParams } from 'react-router-dom'
import { Loading } from '../Loading'
import { Box } from '@mui/material'

export default function ProductDetail() {
  let { slug } = useParams()
  //   const router = useRoutes()
  const [productDetail, setProductDetail] = useState<Array<any>>()

  const fetchProducts = async () => {
    const { data, pagination }: ListReponse<any> = await detailsApi.getAll(slug)
    setProductDetail(data)
  }

  useEffect(() => {
    try {
      fetchProducts()
    } catch (error) {
      console.log(error)
    }
  }, [])

  if (!productDetail) {
    return <Loading />
  }
  return <Box py={5}>{productDetail.map((detail) => detail.name)}</Box>
}
