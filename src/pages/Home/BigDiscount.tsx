import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined'
import { Box, Container, Stack, Typography } from '@mui/material'
import * as React from 'react'
import { Link } from 'react-router-dom'
// import required modules
import { Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductCard } from '../../layout/ProductCard'
import { ProductCardLoading } from '../../layout/ProductCardLoading'
import './index.css'

export interface BigDiscountProps {
  data?: Array<any>
  loading: Boolean
}

export function BigDiscount({ data = [], loading }: BigDiscountProps) {
  return (
    <Box component="section" bgcolor="#f6f9fc" pb={4} pt={2}>
      <Container>
        <Stack
          direction="row"
          mb={2}
          justifyContent={{ md: 'space-between', xs: 'center' }}
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <RedeemOutlinedIcon color="primary" />
            <Typography variant="h5" fontWeight="700" color="secondary.light">
              Big Discounts
            </Typography>
          </Stack>
          <Box sx={{ display: { xs: 'none', md: 'inline' } }} color="secondary.light">
            <Link to="/product" className="flexbox">
              View all
              <ArrowRightOutlinedIcon />
            </Link>
          </Box>
        </Stack>
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          lazy={true}
          freeMode
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          breakpoints={{
            320: {
              width: 300,
              slidesPerView: 1,
            },
            414: {
              width: 400,
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 3,
            },
            1170: {
              width: 1170,
              slidesPerView: 4,
            },
          }}
        >
          {data.map((product, index) => (
            <SwiperSlide key={index}>
              {loading ? (
                <ProductCardLoading length={product.length} />
              ) : (
                <ProductCard product={product} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  )
}
