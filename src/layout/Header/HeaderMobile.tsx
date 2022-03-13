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
export function HeaderMobile() {
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
                <ListItemIcon sx={{ minWidth: 'unset' }}>{iconList[index]}</ListItemIcon>
                <NavLink key={route.path} to={route?.path} className="header-link">
                  {route.label}
                </NavLink>
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
      >
        <DialogContent>
          <Register closeDialog={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
