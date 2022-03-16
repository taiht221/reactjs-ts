import { Box } from '@mui/material'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
import homeProductApi from '../../api/homeProductApi'
import Loading from '../../layout/Loading'
import { Benefit } from './Benefit'
import { BigDiscount } from './BigDiscount'
import { Carousel } from './Carousel'
import { TopCategories } from './TopCategories'

type HomeProps<T> = {
  hot: T[]
  discount: T[]
}

export default function Home() {
  const { enqueueSnackbar } = useSnackbar()

  const [homeProduct, sethomeProduct] = useState<HomeProps<any>>()
  const [loading, setLoading] = useState<Boolean>(true)

  const fetchProducts = async () => {
    const productList: {
      hot: any[]
      discount: any[]
    } = await homeProductApi.getAll()
    sethomeProduct(productList)
  }

  useEffect(() => {
    try {
      fetchProducts()
      document.title = 'Home'
    } catch (error: any) {
      enqueueSnackbar('Something went wrong! Please reload page again', { variant: 'error' })
    }
    setLoading(false)
  }, [])

  if (!homeProduct) {
    return <Loading />
  }
  return (
    <Box>
      <Carousel />
      <TopCategories data={homeProduct?.hot} loading={loading} />
      <BigDiscount data={homeProduct?.discount} loading={loading} />
      <Benefit />
    </Box>
  )
}
