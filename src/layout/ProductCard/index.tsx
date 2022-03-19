import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import { Button, Chip, Rating, Stack } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import { THUMBNAIL_PLACEHOLDER } from '../../constant'
import './style.css'
import { useNavigate } from 'react-router-dom'
type ProductCardProps = {
  product: {
    discount_rate: number
    name: string
    categories: number
    price_usd: number
    images: any
    slug: string
    rating_average: any
  }
}
export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate()
  return (
    <Card>
      {product.discount_rate > 0 ? (
        <Chip label={`${product.discount_rate} %OFF`} color="error" sx={{ margin: '1rem' }} />
      ) : (
        <Chip
          label={`${product.discount_rate} %OFF`}
          color="error"
          sx={{ margin: '1rem', visibility: 'hidden' }}
        />
      )}

      <Link to={`/${product.slug}`}>
        <CardMedia
          component="img"
          height="200"
          image={
            product.images[0].thumbnail_url === 'https://salt.tikicdn.com/assets/img/image.svg'
              ? THUMBNAIL_PLACEHOLDER
              : product.images[0].thumbnail_url
          }
          alt={product.name}
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
          {product.name}
        </Typography>
        <Stack direction="row" alignItems="center" mb={2}>
          {product.rating_average === 0 ? (
            <Typography component="span" variant="body2">
              Product dont have any review.
            </Typography>
          ) : (
            <>
              <Rating
                name="half-rating"
                defaultValue={product.rating_average}
                precision={0.5}
                readOnly
              />
            </>
          )}
        </Stack>
        <Stack direction="row" justifyContent="space-between" mt={2} alignItems="center">
          <Box component="span" color="primary.main">
            {product.price_usd} $
          </Box>
          <Button>
            <AddBoxOutlinedIcon
              color="primary"
              onClick={() => navigate(`/${product.slug}`)}
            ></AddBoxOutlinedIcon>
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
