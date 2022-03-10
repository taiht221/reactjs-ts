import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import StarIcon from '@mui/icons-material/Star'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import { Button, Chip, Stack } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import './index.css'
type BigDiscountCardProps = {
  discount_rate: string
  name: string
  categories: number
  price_usd: number
  imageUrl: string
  slug: string
}
export function BigDiscountCard({
  discount_rate,
  name,
  categories,
  price_usd,
  imageUrl,
  slug,
}: BigDiscountCardProps) {
  return (
    <Card>
      <Chip label={`${discount_rate} %OFF`} color="error" sx={{ margin: '1rem' }} />
      <Link to={`/${slug}`}>
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={name}
          sx={{ objectFit: 'none' }}
          className="swiper-lazy"
        />
      </Link>
      <CardContent>
        <Typography
          variant="body2"
          color="secondary.light"
          component="h3"
          fontWeight="bold"
          mt={2}
          className="truncate"
        >
          {name}
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
            {price_usd} $
          </Box>
          <Button>
            <AddBoxOutlinedIcon color="primary"></AddBoxOutlinedIcon>
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
