import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import * as React from 'react'
import './style.css'
export interface ProductProps {
  product: {
    name: string
  }
}

export function Product({ product }: ProductProps) {
  return (
    <Box padding={1}>
      {
        <Typography component="h3" variant="body1" className="truncate">
          {product.name.toLowerCase()}
        </Typography>
      }
    </Box>
  )
}
