import { Box } from '@mui/material'
import * as React from 'react'
import { Carousel } from './Carousel'

export interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <Box sx={{ minHeight: 1000 }}>
      <Carousel />
    </Box>
  )
}
