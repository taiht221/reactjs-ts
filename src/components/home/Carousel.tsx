import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'
import { Button, Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Image } from '@mui/icons-material'
import './index.css'
import { useNavigate } from 'react-router-dom'

export function Carousel() {
  const navigate = useNavigate()

  return (
    <Box component="section" pt={{ md: 8, xs: 4 }} pb={{ md: 9, xs: 7 }}>
      <Container>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
          draggable
          slidesPerView={1}
        >
          <SwiperSlide>
            <Stack flexGrow={1} direction="row" flexDirection={{ xs: 'column', md: 'row' }}>
              <Box maxWidth={{ lg: '50%', xs: '100%' }}>
                <Typography
                  component="h1"
                  variant="h3"
                  fontWeight="bold"
                  mb={{ md: 5, xs: 3 }}
                  textAlign={{ xs: 'center', md: 'left' }}
                >
                  50% Off For Your <br /> First Shopping,
                </Typography>
                <Typography mb={{ md: 5, xs: 3 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat
                  eu, quam etiam at quis ut convalliss.
                </Typography>
                <Button
                  variant="contained"
                  sx={{ color: 'white', display: 'block' }}
                  size="large"
                  onClick={() => {
                    navigate('/category')
                  }}
                >
                  Shop Now
                </Button>
              </Box>
              <Box
                sx={{
                  minWidth: '240px',
                }}
              >
                <img
                  src="https://bazar-react.vercel.app/assets/images/products/nike-black.png"
                  alt="nike"
                  loading="lazy"
                  className="imageCarousel"
                />
              </Box>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack flexGrow={1} direction="row" flexDirection={{ xs: 'column', md: 'row' }}>
              <Box maxWidth={{ lg: '50%', xs: '100%' }}>
                <Typography
                  component="h1"
                  variant="h3"
                  fontWeight="bold"
                  mb={{ md: 5, xs: 3 }}
                  textAlign={{ xs: 'center', md: 'left' }}
                >
                  50% Off For Your <br /> First Shopping,
                </Typography>
                <Typography mb={{ md: 5, xs: 3 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat
                  eu, quam etiam at quis ut convalliss.
                </Typography>
                <Button
                  variant="contained"
                  sx={{ color: 'white', display: 'block' }}
                  size="large"
                  onClick={() => {
                    navigate('/category')
                  }}
                >
                  Shop Now
                </Button>
              </Box>
              <Box
                sx={{
                  minWidth: '240px',
                }}
              >
                <img
                  src="https://bazar-react.vercel.app/assets/images/products/nike-black.png"
                  alt="nike"
                  loading="lazy"
                  className="imageCarousel"
                />
              </Box>
            </Stack>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  )
}
