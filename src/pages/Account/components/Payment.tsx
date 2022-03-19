import * as React from 'react'
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import { Box, Stack, Typography } from '@mui/material'
export interface PaymentProps {}

export default function Payment(props: PaymentProps) {
  return (
    <Box>
      <Stack direction="row" sx={{ alignItems: 'center' }}>
        <CreditCardOutlinedIcon
          color="primary"
          sx={{ marginRight: '0.5rem' }}
        ></CreditCardOutlinedIcon>
        <Typography component="h2" variant="h4" fontWeight="700">
          Payment
        </Typography>
      </Stack>
    </Box>
  )
}
