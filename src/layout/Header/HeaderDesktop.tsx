import { Close } from '@mui/icons-material'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import SearchIcon from '@mui/icons-material/Search'
import { Badge, Box, Button, Container, IconButton, Stack } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Toolbar from '@mui/material/Toolbar'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { RootState } from '../../app/store'
import Login from '../../pages/Auth/Login'
import Register from '../../pages/Auth/Register'
import { Search, SearchIconWrapper, StyledInputBase } from './common'
import './index.css'

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
}

export function HeaderDeskTop() {
  const [mode, setMode] = useState(MODE.LOGIN)
  const [open, setOpen] = useState(false)
  const [scrollY, setScrollY] = useState(window.scrollY)
  const cartQuantity = useSelector((state: RootState) => state.cart.cartValue)
  useEffect(() => {
    const onScroll = () => setScrollY(window.pageYOffset)
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ flexGrow: 1 }} component="header">
      <AppBar
        position="static"
        sx={{
          padding: '0.5rem 0',
          backgroundColor: 'white',
          color: '#4a6687',
        }}
        className={clsx({ appbarActive: scrollY >= 200 })}
      >
        <Container>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box
              sx={{
                borderRadius: 'unset',
                '&:hover': { backgroundColor: 'unset' },
              }}
              display={{ xs: 'none', md: 'block' }}
            >
              <Link to="/">
                <img src="https://bazar-react.vercel.app/assets/images/logo2.svg" alt="" />
              </Link>
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Tìm sản phẩm" inputProps={{ 'aria-label': 'search' }} />
            </Search>
            <Stack direction="row" spacing={2} display={{ xs: 'none', md: 'flex' }}>
              <Button
                size="medium"
                color="inherit"
                sx={{ bgcolor: '#F3F5F9', borderRadius: '50%', minWidth: 'unset' }}
                onClick={handleClickOpen}
              >
                <PersonOutlineIcon />
              </Button>
              <Button
                size="medium"
                color="inherit"
                sx={{ bgcolor: '#F3F5F9', borderRadius: '50%', minWidth: 'unset' }}
              >
                <Badge badgeContent={cartQuantity} color="primary" max={99}>
                  <LocalMallOutlinedIcon />
                </Badge>
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableEscapeKeyDown
        onClose={(event, reason) => {
          if (reason === 'backdropClick') {
            return
          }
        }}
        sx={{ '.MuiPaper-root': { minWidth: '30%' } }}
      >
        <DialogContent>
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box component="p" sx={{ margin: '0', textAlign: 'center' }}>
                Don’t have account?
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Register
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box component="p" sx={{ margin: '0', textAlign: 'center' }}>
                Already have account?
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Log In
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
        <IconButton
          sx={{ position: 'absolute', top: '1rem', right: '1rem', color: '#0f3460' }}
          size="large"
          onClick={handleClose}
        >
          <Close />
        </IconButton>
      </Dialog>
    </Box>
  )
}
