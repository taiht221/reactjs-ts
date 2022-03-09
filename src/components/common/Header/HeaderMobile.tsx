import HomeIcon from '@mui/icons-material/Home'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import MenuIcon from '@mui/icons-material/Menu'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined'
import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Paper,
  Stack,
} from '@mui/material'
import clsx from 'clsx'
import { ROUTE_LIST } from './router'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import { Link, useParams, useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './index.css'
export function HeaderMobile() {
  const iconList = [
    <HomeIcon key="first" />,
    <FilterListOutlinedIcon key="second" />,
    <LocalMallOutlinedIcon key="third" />,
    <PersonOutlineIcon key="four" />,
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
                key={route.path}
                sx={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <ListItemIcon sx={{ minWidth: 'unset' }}>{iconList[index]}</ListItemIcon>
                <NavLink key={route.path} to={route.path} className="header-link">
                  {route.label}
                </NavLink>
              </ListItem>
            ))}
          </Stack>
        </Container>
      </Paper>
    </Box>
  )
}
