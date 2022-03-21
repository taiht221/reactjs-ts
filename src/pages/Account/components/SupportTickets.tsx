import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined'
import { Box, Stack, Typography } from '@mui/material'
import * as React from 'react'
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
