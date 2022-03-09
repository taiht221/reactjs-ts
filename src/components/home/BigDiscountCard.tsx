import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import StarIcon from '@mui/icons-material/Star'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import { Button, Chip, Stack } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import * as React from 'react'

export function BigDiscountCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Chip label="20% off" color="error" sx={{ margin: '1rem' }} />
      <CardMedia
        component="img"
        height="200"
        image="https://bazar-react.vercel.app/assets/images/products/nike-black.png"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary" component="h3" fontWeight="bold" mt={2}>
          Nike Air Force 1
        </Typography>
        <Stack direction="row">
          <StarIcon sx={{ color: '#faaf00' }}></StarIcon>
          <StarIcon sx={{ color: '#faaf00' }}></StarIcon>
          <StarIcon sx={{ color: '#faaf00' }}></StarIcon>
          <StarIcon sx={{ color: '#faaf00' }}></StarIcon>
          <StarOutlineIcon sx={{ color: '#cecece' }}></StarOutlineIcon>
        </Stack>
        <Stack direction="row" justifyContent="space-between" mt={2} alignItems="center">
          <Box component="span" color="primary.main">
            $$20
          </Box>
          <Button>
            <AddBoxOutlinedIcon color="primary"></AddBoxOutlinedIcon>
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
