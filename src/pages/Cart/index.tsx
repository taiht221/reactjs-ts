import { Close } from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../app/store'
import Breadcrumbs from '../../layout/Breadcrumbs'
import { removeFromCart, setQuantity } from './cartSlice'
import { cartItemsCountSelector, cartTotalSelector } from './selector'
export default function Cart() {
  const navigate = useNavigate()
  const cartItemsCount = useSelector(cartItemsCountSelector)
  const cartTotal = useSelector(cartTotalSelector)
  const cartItemsSelector = useSelector((state: RootState) => state.cart.cartItems)
  const dispatch = useDispatch()
  const handleAddToCart = (values: any) => {
    console.log(values)
  }
  if (cartItemsCount === 0) {
    return (
      <Box component="main" bgcolor="#f6f9fc">
        <Container>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              md={12}
              sx={{ marginBottom: '2rem', alignItems: 'center', justifyContent: 'center' }}
            >
              <Typography
                variant="h5"
                component="h1"
                color="primary"
                pt={2}
                pb={2}
                textAlign="center"
              >
                Cart
              </Typography>
              <Box sx={{ '.MuiBreadcrumbs-ol': { justifyContent: 'center' } }}>
                <Breadcrumbs links={[{ title: 'Home', link: '/' }, { title: 'Cart' }]} />
              </Box>
              <Box
                sx={{ justifyContent: 'center', display: 'flex', '>img': { maxHeight: '250px' } }}
              >
                <img src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" alt="" />
              </Box>
              <Typography textAlign="center" component="h3" fontWeight="bold" color="secondary">
                Your Cart is Currently Empty!
              </Typography>
              <Box sx={{ justifyContent: 'center', display: 'flex', padding: '0.5rem 0' }}>
                <Button onClick={() => navigate('/product')} size="large" variant="contained">
                  Shop Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    )
  }
  return (
    <Box component="main" bgcolor="#f6f9fc">
      <Container>
        <Breadcrumbs links={[{ title: 'Home', link: '/' }, { title: 'Cart' }]} />
        <Typography variant="h5" component="h1" color="primary" pt={2} pb={2}>
          Cart: {cartItemsCount} products
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} md={8} sx={{ marginBottom: '2rem' }}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">Subtotal</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                {cartItemsSelector.map((cartItem: any) => (
                  <TableBody key={cartItem.id}>
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          maxWidth: 200,
                          maxHeight: 200,
                          '>img': { width: '100%', height: '100%', objectFit: 'containt' },
                        }}
                      >
                        <img src={cartItem.payload.thumbnail_url} alt={cartItem.payload.name} />
                      </TableCell>
                      <TableCell align="right">{cartItem.payload.price_usd}$</TableCell>
                      <TableCell align="right">{cartItem.quantity}</TableCell>
                      <TableCell align="right">
                        <Stack direction="row" sx={{ display: 'flex', alignItem: 'center' }}>
                          <Button
                            variant="outlined"
                            aria-label="reduce"
                            size="small"
                            onClick={() => {
                              dispatch(
                                setQuantity({
                                  quantity: cartItem.quantity - 1,
                                  id: cartItem.id,
                                })
                              )
                            }}
                          >
                            <RemoveIcon fontSize="small" />
                          </Button>
                          <TextField
                            name="max"
                            value={cartItem.quantity}
                            // onChange={handleChange}
                            variant="outlined"
                            size="small"
                            color="secondary"
                            sx={{ height: '100%', width: '30%' }}
                          />
                          <Button
                            size="small"
                            variant="outlined"
                            aria-label="increase"
                            onClick={() => {
                              dispatch(
                                setQuantity({
                                  quantity: cartItem.quantity + 1,
                                  id: cartItem.id,
                                })
                              )
                            }}
                          >
                            <AddIcon fontSize="small" />
                          </Button>
                        </Stack>
                      </TableCell>
                      <TableCell align="right">
                        {Math.round(cartItem.payload.price_usd * cartItem.quantity * 100) / 100}$
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          size="large"
                          onClick={() => {
                            dispatch(removeFromCart(cartItem.id))
                          }}
                        >
                          <Close />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                ))}
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} md={4}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Cart Totals</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{ display: 'flex', alignItem: 'center', justifyContent: 'space-between' }}
                    >
                      <Typography variant="body2">Subtotal</Typography>{' '}
                      {Math.round(cartTotal * 100) / 100}$
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{ display: 'flex', alignItem: 'center', justifyContent: 'space-between' }}
                    >
                      <Typography variant="body2">Total</Typography>
                      {Math.round(cartTotal * 100) / 100}$
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            {/* <Typography variant="h3">{cartTotal}$</Typography> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
