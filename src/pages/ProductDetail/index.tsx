import { Box, Container } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import detailsApi from '../../api/detailsApi'
import Breadcrumbs from '../../layout/Breadcrumbs'
import Loading from '../../layout/Loading'
import { ListReponse } from '../../models/common'
import { truncateText } from '../../utils'
import NotFound from '../NotFound'
import ProductDescription from './components/ProductDescription'
import ProductInformation from './components/ProductInformation'
import RelatedProducts from './components/RelatedProducts'
import { addToCart } from '../Cart/cartSlice'
export default function ProductDetail() {
  let { slug } = useParams()
  //   const router = useRoutes()
  const [productDetail, setProductDetail] = useState<Array<any>>()
  const fetchProductsDetail = async () => {
    const { data }: ListReponse<any> = await detailsApi.getAll(slug)
    setProductDetail(data)
  }
  const dispatch = useDispatch()
  useEffect(() => {
    try {
      fetchProductsDetail()
    } catch (error) {
      console.log(error)
    }
  }, [slug])

  if (!productDetail) {
    return <Loading />
  }
  if (productDetail[0] === undefined) {
    return <NotFound />
  }
  document.title = productDetail[0]?.name
  const handleCartSubmit = ({ quantity }: any) => {
    dispatch(
      addToCart({
        id: productDetail[0].id,
        payload: productDetail[0],
        quantity,
      })
    )
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
            { title: truncateText(productDetail[0]?.name, 50).toLowerCase() },
          ]}
        />
        <ProductInformation data={productDetail[0]} onSubmit={handleCartSubmit} />
        <ProductDescription data={productDetail[0]} />
        <RelatedProducts data={productDetail[0]} />
      </Container>
    </Box>
  )
}
