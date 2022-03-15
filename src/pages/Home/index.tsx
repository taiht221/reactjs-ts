import { Box } from '@mui/material'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
import homeProductApi from '../../api/homeProductApi'
import Loading from '../../layout/Loading'
import { Benefit } from './Benefit'
import { BigDiscount } from './BigDiscount'
import { Carousel } from './Carousel'
import { TopCategories } from './TopCategories'

type HomeProps = {
  hot: any[]
  discount: any[]
}

export default function Home() {
  const { enqueueSnackbar } = useSnackbar()

  const [homeProduct, sethomeProduct] = useState<HomeProps>()

  const fetchProducts = async () => {
    const productList: HomeProps = await homeProductApi.getAll()
    sethomeProduct(productList)
  }

  useEffect(() => {
    try {
      fetchProducts()
    } catch (error:any) {
      if (error) {
        enqueueSnackbar(error?.message, { variant: 'error' })
      }
    }
  }, [])

  if (!homeProduct) {
    return <Loading />
  }
  document.title = 'Home'
  return (
    <Box>
      <Carousel />
      <TopCategories data={homeProduct.hot} />
      <BigDiscount data={homeProduct.discount} />
      <Benefit />
    </Box>
  )
}
