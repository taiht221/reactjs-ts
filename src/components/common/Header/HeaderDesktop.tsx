import { Box, Container, Stack, Link as MuiLink } from '@mui/material'
import * as React from 'react'
import clsx from 'clsx'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from '@/components/home'

export function HeaderDeskTop() {
  return (
    <Box py={3}>
      <Container>
        <Stack direction="row" alignItems="center">
          <MuiLink component={Link} to="/me">
            fdafas
          </MuiLink>
        </Stack>
      </Container>
    </Box>
  )
}
