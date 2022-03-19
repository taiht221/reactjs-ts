import * as React from 'react'
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import { Box, Stack, Typography } from '@mui/material'
export interface SupportTicketsProps {}

export default function SupportTickets(props: SupportTicketsProps) {
  return (
    <Box>
      <Stack direction="row" sx={{ alignItems: 'center' }}>
        <HeadphonesOutlinedIcon
          color="primary"
          sx={{ marginRight: '0.5rem' }}
        ></HeadphonesOutlinedIcon>
        <Typography component="h2" variant="h4" fontWeight="700">
          SupportTickets
        </Typography>
      </Stack>
    </Box>
  )
}
