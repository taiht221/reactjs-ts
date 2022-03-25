import { Box, Grid } from '@mui/material'
import * as React from 'react'
import { ProductCard } from '../../../layout/ProductCard'
import { Detail } from '../../../models'

export interface ProductListProps<T> {
  data?: T[]
}

export function ProductList({ data = [] }: ProductListProps<Detail>) {
  return (
    <Box>
      <Grid container spacing={2}>
        {data.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
