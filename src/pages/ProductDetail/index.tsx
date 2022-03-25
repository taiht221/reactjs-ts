import { Box, Container } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import detailsApi from '../../api/detailsApi'
import { useAppDispatch } from '../../app/hook'
import Breadcrumbs from '../../layout/Breadcrumbs'
import Loading from '../../layout/Loading'
import { Detail } from '../../models'
import { ListReponse } from '../../models/common'
import { truncateText } from '../../utils'
import { addToCart, showMiniCart } from '../Cart/cartSlice'
import NotFound from '../NotFound'
import ProductDescription from './components/ProductDescription'
import ProductInformation from './components/ProductInformation'
import RelatedProducts from './components/RelatedProducts'
export default function ProductDetail() {
  let { slug } = useParams()
  //   const router = useRoutes()
  const [productDetail, setProductDetail] = useState<Detail>()
  const fetchProductsDetail = async () => {
    const { data } = await detailsApi.getAll(slug)
    setProductDetail(data[0])
  }
  const dispatch = useAppDispatch()
  useEffect(() => {
    try {
      fetchProductsDetail()
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  if (!productDetail) {
    return <Loading />
  }
  if (productDetail === undefined) {
    return <NotFound />
  }
  document.title = productDetail.name
  const handleCartSubmit = ({ quantity }: any) => {
    dispatch(
      addToCart({
        id: productDetail.id,
        payload: productDetail,
        quantity,
      })
    )
    dispatch(showMiniCart())
  }

  return (
    <Box
      component="main"
      pt={{ md: 8, xs: 4 }}
      pb={{ md: 9, xs: 7 }}
      sx={{ background: '#f6f9fc' }}
    >
      <Container>
        <Breadcrumbs
          links={[
            { title: 'Home', link: '/' },
            { title: truncateText(productDetail.name, 50).toLowerCase() },
          ]}
        />
        <ProductInformation data={productDetail} onSubmit={handleCartSubmit} />
        <ProductDescription data={productDetail} />
        <RelatedProducts data={productDetail} />
      </Container>
    </Box>
  )
}
