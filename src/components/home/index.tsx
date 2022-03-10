import { Box } from '@mui/material'
import { Carousel } from './Carousel'
import { BigDiscount } from './BigDiscount'
import { TopCategories } from './TopCategories'
import { useEffect, useState } from 'react'
import { Loading } from '../Loading'
import homeProductApi from '../../api/homeProductApi'
import { Benefit } from './Benefit'

type HomeProps = {
  hot: any[]
  discount: any[]
}

export default function Home() {
  const [homeProduct, sethomeProduct] = useState<HomeProps>()

  const fetchProducts = async () => {
    const productList: HomeProps = await homeProductApi.getAll()
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
      <TopCategories data={homeProduct.hot} />
      <BigDiscount data={homeProduct.discount} />
      <Benefit />
    </Box>
  )
}
