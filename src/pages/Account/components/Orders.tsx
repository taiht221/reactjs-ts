import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import { Box, Stack, Typography } from '@mui/material'
import * as React from 'react'
export interface OrdersProps {}

export default function Orders(props: OrdersProps) {
  return (
    <Box>
      <Stack direction="row" sx={{ alignItems: 'center' }}>
        <LocalMallOutlinedIcon
          color="primary"
          sx={{ marginRight: '0.5rem' }}
        ></LocalMallOutlinedIcon>
        <Typography component="h2" variant="h4" fontWeight="700">
          Orders
        </Typography>
      </Stack>
    </Box>
  )
}
