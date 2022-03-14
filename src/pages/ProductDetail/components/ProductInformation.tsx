import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import PropTypes from 'prop-types'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Box, Rating, Stack, Typography } from '@mui/material'
import { AddToCart } from '../../Auth/AddToCart'

export interface IProductInformationProps {
  data: any
}
// image={productDetail[0]?.images}
//           title={productDetail[0]?.name}
//           thumbnail={productDetail[0]?.thumbnail_url}
export default function ProductInformation({ data }: IProductInformationProps) {
  console.log(data)
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

            <Typography component="span" variant="h5" mb={2}>
              {data.price_usd} $$
            </Typography>
            <Typography component="span" variant="body2">
              Stock {data.inventory_status}
            </Typography>
            <AddToCart />
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
