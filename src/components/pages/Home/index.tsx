import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import homeProductApi from '../../../api/homeProductApi'
import Loading from '../../common/Loading'
import { Benefit } from './Benefit'
import { BigDiscount } from './BigDiscount'
import { Carousel } from './Carousel'
import { TopCategories } from './TopCategories'

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
