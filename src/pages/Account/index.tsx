import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import { Container, Grid, Link, Paper, Typography } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import { Box } from '@mui/system'
import { useSnackbar } from 'notistack'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams, NavLink, Routes, Route } from 'react-router-dom'
import { RootState } from '../../app/store'
import Address from './components/Address'
import Orders from './components/Orders'
import Payment from './components/Payment'
import ProfileInfo from './components/ProfileInfo'
import SupportTickets from './components/SupportTickets'
import WishList from './components/WishList'
export interface AccountProps {}

export default function Account(props: AccountProps) {
  const loggedInUser = useSelector((state: RootState) => state.user.current)
  const isLoggedIn = !!loggedInUser.id
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const { url } = useParams()
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/')
      enqueueSnackbar("You've to login first", { variant: 'error' })
    }
    return () => {}
  }, [isLoggedIn])

  return (
    <Box
      component="main"
      pt={{ md: 8, xs: 4 }}
      pb={{ md: 9, xs: 7 }}
      sx={{ background: '#f6f9fc' }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <Box
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', padding: '1rem' }}
            >
              <Typography variant="body2" color="rgb(125, 135, 156)">
                DASHBOARD
              </Typography>
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <Link
                      component={NavLink}
                      to="/profile/orders"
                      sx={{
                        width: '100%',
                        '.MuiLink-root&.active': {
                          '.MuiListItemIcon-root': { color: '#FF6464' },
                        },
                        '.MuiLink-root&:hover': {
                          '.MuiListItemIcon-root': { color: '#FF6464' },
                        },
                        color: 'black',
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <LocalMallOutlinedIcon />
                        </ListItemIcon>
                        Orders
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link
                      component={NavLink}
                      to="/profile/wishlist"
                      sx={{
                        width: '100%',
                        '.MuiLink-root&.active': {
                          '.MuiListItemIcon-root': { color: '#FF6464' },
                        },
                        '.MuiLink-root&:hover': {
                          '.MuiListItemIcon-root': { color: '#FF6464' },
                        },
                        color: 'black',
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <FavoriteBorderOutlinedIcon />
                        </ListItemIcon>
                        Wishlist
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link
                      component={NavLink}
                      to="/profile/support-tickets"
                      sx={{
                        width: '100%',
                        '.MuiLink-root&.active': {
                          '.MuiListItemIcon-root': { color: '#FF6464' },
                        },
                        '.MuiLink-root&:hover': {
                          '.MuiListItemIcon-root': { color: '#FF6464' },
                        },
                        color: 'black',
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <HeadphonesOutlinedIcon />
                        </ListItemIcon>
                        Support Tickets
                      </ListItemButton>
                    </Link>
                  </ListItem>
                </List>
              </nav>
              <Typography variant="body2" color="rgb(125, 135, 156)">
                ACCOUNT SETTINGS
              </Typography>
              <nav aria-label="secondary mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <Link
                      component={NavLink}
                      to="/profile"
                      end
                      sx={{
                        width: '100%',
                        '.MuiLink-root&.active': {
                          '.MuiListItemIcon-root': { color: '#FF6464' },
                        },
                        '.MuiLink-root&:hover': {
                          '.MuiListItemIcon-root': { color: '#FF6464' },
                        },
                        color: 'black',
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <PermIdentityOutlinedIcon />
                        </ListItemIcon>
                        Profile Info
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link
                      component={NavLink}
                      to="/profile/addresses"
                      sx={{
                        width: '100%',
                        '.MuiLink-root&.active': {
                          '.MuiListItemIcon-root': { color: '#FF6464' },
                        },
                        '.MuiLink-root&:hover': {
                          '.MuiListItemIcon-root': { color: '#FF6464' },
                        },
                        color: 'black',
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <AddLocationOutlinedIcon />
                        </ListItemIcon>
                        Addresses
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link
                      component={NavLink}
                      to="/profile/payment-methods"
                      sx={{
                        width: '100%',
                        '.MuiLink-root&.active': {
                          '.MuiListItemIcon-root': { color: '#FF6464' },
                        },
                        '.MuiLink-root&:hover': {
                          '.MuiListItemIcon-root': { color: '#FF6464' },
                        },
                        color: 'black',
                      }}
                    >
                      <ListItemButton href="/profile/path">
                        <ListItemIcon>
                          <CreditCardOutlinedIcon />
                        </ListItemIcon>
                        Payment Methods
                      </ListItemButton>
                    </Link>
                  </ListItem>
                </List>
              </nav>
            </Box>
          </Grid>
          <Grid item md={9} xs={12}>
            <Routes>
              <Route path="/" element={<ProfileInfo />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/addresses" element={<Address />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/support-tickets" element={<SupportTickets />} />
              <Route path="/payment-methods" element={<Payment />} />
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
