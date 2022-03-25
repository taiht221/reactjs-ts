import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import { Box, Button, Chip, Rating, Stack, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import React from 'react'
import { Link } from 'react-router-dom'
import { Detail } from '../../../models'
import './style.css'
export interface IRelatedProductsProps {
  data: Detail
}

export default function RelatedProducts({ data }: IRelatedProductsProps) {
  return (
    <Box component="section">
      <Typography variant="h5" component="h2" mb={2} mt={2}>
        Realted Products
      </Typography>
      <Stack direction={{ md: 'row', xs: 'column' }} spacing={2}>
        {Array.from(new Array(4)).map((x, index) => (
          <Card sx={{ minWitdh: 'unset' }} key={index}>
            <Chip label={`${data.discount_rate} %OFF`} color="error" sx={{ margin: '1rem' }} />
            <Link to={`/${data.slug}`}>
              <CardMedia
                component="img"
                height="200"
                image={data?.thumbnail_url}
                alt={data.name}
                sx={{ objectFit: 'contain' }}
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
                {data.name}
              </Typography>
              <Stack direction="row" alignItems="center" mb={2}>
                {data.rating_average === 0 ? (
                  <Typography component="span" variant="body2">
                    Product dont have any review.
                  </Typography>
                ) : (
                  <>
                    <Rating
                      name="half-rating"
                      defaultValue={data.rating_average}
                      precision={0.5}
                      readOnly
                    />
                  </>
                )}
              </Stack>
              <Stack direction="row" justifyContent="space-between" mt={2} alignItems="center">
                <Box component="span" color="primary.main">
                  {data.price_usd} $
                </Box>
                <Button>
                  <AddBoxOutlinedIcon color="primary"></AddBoxOutlinedIcon>
                </Button>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}
