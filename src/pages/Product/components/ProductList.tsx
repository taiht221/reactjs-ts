import { Box, Grid } from '@mui/material'
import * as React from 'react'
import { ProductCard } from '../../../layout/ProductCard'
export interface ProductListProps<T> {
  data?: T[]
}

export function ProductList({ data = [] }: ProductListProps<any>) {
  return (
    <Box>
      <Grid container spacing={2}>
        {data.map((product: any) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
