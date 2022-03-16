import { Box, Grid } from '@mui/material'
import * as React from 'react'
import Skeleton from '@mui/material/Skeleton'
export interface ProductCardLoadingProps {
  length: number
}

export function ProductCardLoading({ length = 15 }: ProductCardLoadingProps) {
  return (
    <Box>
      <Grid container spacing={2}>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Box padding={1}>
              <Skeleton width="30%" style={{ paddingBottom: '2rem' }}></Skeleton>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={200}
                animation="wave"
                style={{ marginBottom: '2rem' }}
              />
              <Skeleton animation="wave" style={{ paddingBottom: '2rem' }}></Skeleton>
              <Skeleton animation="wave" style={{ marginBottom: '2rem' }}></Skeleton>
              <Skeleton width="60%" style={{ marginBottom: '2rem' }}></Skeleton>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
