import { Box, Button } from '@mui/material'
import * as React from 'react'
import { useNavigate } from 'react-router'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        minHeight: '80vh',
        padding: '0 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        justifyContent: 'center',
        '>img': {
          display: 'block',
          maxWidth: '320px',
          width: '100%',
          margin: '0 auto',
          marginBottom: '1.5rem',
        },
      }}
    >
      <img src="	https://bazar-react.vercel.app/assets/images/illustrations/404.svg"></img>
      <Button
        size="large"
        variant="contained"
        sx={{ maxWidth: '200px', margin: '0 auto' }}
        onClick={() => navigate('/')}
      >
        Go To Home
      </Button>
    </Box>
  )
}
