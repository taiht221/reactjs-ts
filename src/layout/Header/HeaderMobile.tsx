import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined'
import HomeIcon from '@mui/icons-material/Home'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  ListItem,
  ListItemIcon,
  Paper,
  Stack,
} from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Register from '../../pages/Auth/Register'
import './index.css'
import { ROUTE_LIST } from './router'
import { RootState } from '../../app/store'
import { useDispatch, useSelector } from 'react-redux'
import { Close } from '@mui/icons-material'
import Login from '../../pages/Auth/Login'

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
}
export function HeaderMobile() {
  const [mode, setMode] = useState(MODE.LOGIN)
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const iconList = [
    <HomeIcon key="first" />,
    <FilterListOutlinedIcon key="second" />,
    <LocalMallOutlinedIcon key="third" />,
    <PersonOutlineIcon key="four" onClick={handleClickOpen} />,
  ]
  const loggedInUser = useSelector((state: RootState) => state.user.current)
  const isLoggedIn = !!loggedInUser.id
  return (
    <Box
      display={{ xs: 'block', md: 'none' }}
      sx={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        right: 0,
        zIndex: 999,
      }}
    >
      <Paper elevation={3}>
        <Container>
          <Stack direction="row" justifyContent="flex-start">
            {ROUTE_LIST.map((route, index) => (
              <ListItem
                button
                key={index}
                sx={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                {route.label === 'Account' ? (
                  <>
                    {isLoggedIn ? (
                      <>
                        <ListItemIcon sx={{ minWidth: 'unset' }}>{iconList[index]}</ListItemIcon>
                        <Button
                          className="header-link"
                          onClick={() => setOpen(true)}
                          size="small"
                          color="secondary"
                        >
                          {route.label}
                        </Button>
                      </>
                    ) : (
                      <>
                        <ListItemIcon sx={{ minWidth: 'unset' }}>{iconList[index]}</ListItemIcon>
                        <NavLink key={route.path} to={route?.path} className="header-link">
                          {route.label}
                        </NavLink>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <ListItemIcon sx={{ minWidth: 'unset' }}>{iconList[index]}</ListItemIcon>
                    <NavLink key={route.path} to={route?.path} className="header-link">
                      {route.label}
                    </NavLink>
                  </>
                )}
              </ListItem>
            ))}
          </Stack>
        </Container>
      </Paper>

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
          sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem', color: '#0f3460' }}
          size="large"
          onClick={handleClose}
        >
          <Close />
        </IconButton>
      </Dialog>
    </Box>
  )
}
