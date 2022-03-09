import HomeIcon from '@mui/icons-material/Home'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import MenuIcon from '@mui/icons-material/Menu'
import {
  Box,
  Container,
  Drawer,
  IconButton,
  Link as MuiLink,
  List,
  ListItem,
  ListItemIcon,
  Stack,
} from '@mui/material'
import clsx from 'clsx'


export function HeaderMobile() {
  return (
    <Box display={{ xs: 'block', md: 'none' }} py={3}>
      <Container>
        <Stack direction="row" justifyContent="flex-end"></Stack>
      </Container>
    </Box>
  )
}
