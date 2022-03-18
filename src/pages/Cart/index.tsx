import {
  Box,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import CartItems from './components/CartItems'
import CartTotal from './components/CartTotal'
import { cartItemsCountSelector, cartTotalSelector } from './selector'

export interface CartProps {}

export default function Cart(props: CartProps) {
  const cartItemsCount = useSelector(cartItemsCountSelector)
  const cartTotal = useSelector(cartTotalSelector)
  const cartItemsSelector = useSelector((state: RootState) => state.cart.cartItems)
  const handleAddToCart = (values: any) => {
    console.log(values)
  }
  if (cartItemsCount === 0) {
    return <Typography>empty Cart</Typography>
  }
  return (
    <Box component="main" bgcolor="#f6f9fc">
      <Container>
        <Typography variant="h6" component="h1">
          Cart {cartItemsCount} products
        </Typography>
        <Paper>
          <Stack direction={{ xs: 'column', md: 'row' }}>
            <Box>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Product</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Subtotal</TableCell>
                    </TableRow>
                  </TableHead>
                  {cartItemsSelector.map((cartItem: any) => (
                    <TableBody key={cartItem.id}>
                      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{
                            maxWidth: 200,
                            maxHeight: 200,
                            '>img': { width: '100%', height: '100%', objectFit: 'containt' },
                          }}
                        >
                          <img src={cartItem.payload.thumbnail_url} alt="" />
                        </TableCell>
                        <TableCell align="right">{cartItem.payload.price_usd}$</TableCell>
                        <TableCell align="right">{cartItem.quantity}</TableCell>
                        <TableCell align="right">
                          {cartItem.payload.price_usd * cartItem.quantity}$
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  ))}
                </Table>
              </TableContainer>
            </Box>
            <Box>
              <Typography variant="h3">{cartTotal}$</Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}
