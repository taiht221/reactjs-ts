import { Box, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Detail } from '../../../models'
import AddToCartForm from '../../Auth/AddToCartForm'

export interface IProductInformationProps {
  data: Detail
  onSubmit: (values: any) => void
}
export default function ProductInformation({ data, onSubmit }: IProductInformationProps) {
  const handleCartSubmit = (values: any) => {
    if (onSubmit) onSubmit(values)
  }

  return (
    <Box component="section" pt={{ md: 8, xs: 4 }} pb={{ md: 9, xs: 7 }} pl={{ md: 3, xs: 0 }}>
      <Stack direction={{ md: 'row', xs: 'column' }} spacing={2}>
        <Box sx={{ flex: '30%' }}>
          <Carousel dynamicHeight={false} swipeable={true} emulateTouch infiniteLoop>
            <div>
              <img alt={data?.name} src={data?.images[0]?.base_url} />
              <p className="legend">{data?.name}</p>
            </div>
            <div>
              <img alt={data?.name} src={data?.thumbnail_url} />
              <p className="legend">{data?.name}</p>
            </div>
            <div>
              <img alt={data?.name} src={data?.images[1]?.base_url || data?.images[0].base_url} />
              <p className="legend">{data?.name}</p>
            </div>
          </Carousel>
        </Box>
        <Box sx={{ flex: '60%' }} pl={{ md: 5, xs: 0 }}>
          <Stack direction="column">
            <Typography
              variant="h6"
              component="h1"
              sx={{ textTransform: 'capitalize', fontWeight: '700' }}
              mb={2}
            >
              {data?.name.toLowerCase()}
            </Typography>
            <Typography component="span" variant="body2" mb={2}>
              Brand: Xiaomi
            </Typography>
            <Stack direction="row" alignItems="center" mb={2}>
              {data.rating_average === 0 ? (
                <Typography component="span" variant="body2" mb={2}>
                  Product dont have any review yet.
                </Typography>
              ) : (
                <>
                  <Rating
                    name="half-rating"
                    defaultValue={data.rating_average}
                    precision={0.5}
                    readOnly
                  />
                  <Typography component="span" variant="body2">
                    ({data.review_count})
                  </Typography>
                </>
              )}
            </Stack>

            <Typography component="span" variant="h5" mb={2} color="primary">
              {Math.round(data.price_usd)} $
            </Typography>
            <Typography component="span" variant="body2">
              Stock {data.inventory_status}
            </Typography>
            <AddToCartForm onSubmit={handleCartSubmit} />
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
