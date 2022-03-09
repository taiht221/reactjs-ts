import { Box } from '@mui/material'
import { Carousel } from './Carousel'
import { BigDiscount } from './BigDiscount'
import { TopCategories } from './TopCategories'
import { useEffect, useState } from 'react'
import { Loading } from '../Loading'
import homeProductApi from '../../api/homeProductApi'

export interface HomeProps {
  data: {}
}

export default function Home({ data }: HomeProps) {
  const [homeProduct, sethomeProduct] = useState(null)

  const fetchProducts = async () => {
    const productList: any = await homeProductApi.getAll()
    sethomeProduct(productList)
  }
  useEffect(() => {
    try {
      fetchProducts()
    } catch (error) {
      console.log(error)
    }
  }, [])

  if (!homeProduct) {
    return <Loading />
  }

  return (
    <Box sx={{ minHeight: 1000 }}>
      <Carousel />
      <TopCategories data={homeProduct} />
      <BigDiscount />
    </Box>
  )
}
