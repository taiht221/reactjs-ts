import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined'
import { Box, Container, Stack, Typography } from '@mui/material'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { BigDiscountCard } from './BigDiscountCard'
import './index.css'

export interface TopCategoriesProps {
  data: Array<any>
}

export function TopCategories({ data }: TopCategoriesProps) {
  console.log(data)
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
            <StarsOutlinedIcon sx={{ color: '#faaf00' }} />
            <Typography variant="h5" fontWeight="700" color="secondary.light">
              Top Ratings
            </Typography>
          </Stack>
          <Box sx={{ display: { xs: 'none', md: 'inline' } }} color="secondary.light">
            <Link to="/category" className="flexbox">
              View all
              <ArrowRightOutlinedIcon />
            </Link>
          </Box>
        </Stack>
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          lazy={true}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
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
          {data.map((card: any, index) => (
            <SwiperSlide key={index}>
              <BigDiscountCard
                discount_rate={card.discount_rate}
                name={card.name}
                imageUrl={card.images[0].thumbnail_url}
                price_usd={card.price_usd}
                categories={card.categories}
                slug={card.slug}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  )
}
