import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import { Box, Stack, Typography } from '@mui/material'
import * as React from 'react'
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
