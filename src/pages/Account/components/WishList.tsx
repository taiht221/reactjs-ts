import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import { Box, Stack, Typography } from '@mui/material'
import * as React from 'react'
export interface WishListProps {}

export default function WishList(props: WishListProps) {
  return (
    <Box>
      <Stack direction="row" sx={{ alignItems: 'center' }}>
        <FavoriteBorderOutlinedIcon
          color="primary"
          sx={{ marginRight: '0.5rem' }}
        ></FavoriteBorderOutlinedIcon>
        <Typography component="h2" variant="h4" fontWeight="700">
          WishList
        </Typography>
      </Stack>
    </Box>
  )
}
