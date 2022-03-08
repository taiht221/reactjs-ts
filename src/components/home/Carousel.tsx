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

export function Carousel() {
  return (
    <Box component="section" pt={{ md: 18, xs: 4 }} pb={{ md: 9, xs: 7 }}>
      <Container>
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
          draggable
        >
          <SwiperSlide>
            <Stack flexGrow={1} direction="row">
              <Box>
                <Typography component="h1" variant="h3" fontWeight="bold" mb={{ md: 5, xs: 3 }}>
                  Hi, I am John, <br /> Creative Tecnologist
                </Typography>
                <Typography mb={{ md: 5, xs: 3 }}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                  officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
                  nostrud amet.
                </Typography>
                <Button variant="contained" sx={{ color: 'white' }} size="large">
                  Download Resum
                </Button>
              </Box>
              <Box
                sx={{
                  minWidth: '240px',
                  boxShadow: '-5px 13px ',
                  color: 'secondary.light',
                  borderRadius: '50%',
                }}
              >
                <Image alt="avatar" layout="responsive" />
              </Box>
              <Box></Box>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  )
}
