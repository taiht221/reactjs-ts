import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined'
import { Box, Stack, Typography } from '@mui/material'
import * as React from 'react'
export interface AddressProps {}

export default function Address(props: AddressProps) {
  return (
    <Box>
      <Stack direction="row" sx={{ alignItems: 'center' }}>
        <AddLocationOutlinedIcon
          color="primary"
          sx={{ marginRight: '0.5rem' }}
        ></AddLocationOutlinedIcon>
        <Typography component="h2" variant="h4" fontWeight="700">
          Address
        </Typography>
      </Stack>
    </Box>
  )
}
