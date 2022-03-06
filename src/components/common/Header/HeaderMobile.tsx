import HomeIcon from '@mui/icons-material/Home'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import MenuIcon from '@mui/icons-material/Menu'
import WorkIcon from '@mui/icons-material/Work'
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

// type Anchor = 'top' | 'left' | 'bottom' | 'right'

// export function HeaderMobile(anchor: Anchor) {
//   const router = useRouter()
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   })
//   const toggleDrawer =
//     (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
//       if (
//         event.type === 'keydown' &&
//         ((event as React.KeyboardEvent).key === 'Tab' ||
//           (event as React.KeyboardEvent).key === 'Shift')
//       ) {
//         return
//       }

//       setState({ ...state, [anchor]: open })
//     }
//   const iconList = [
//     <HomeIcon key="first" />,
//     <WorkIcon key="third" />,
//     <MenuBookIcon key="second" />,
//   ]
//   const list = (anchor: Anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List></List>
//     </Box>
//   )
//   return (
//     <>
//       <Stack direction="row" justifyContent="flex-end" display={{ xs: 'flex', md: 'none' }}>
//         <IconButton
//           edge="start"
//           color="inherit"
//           aria-label="menu"
//           sx={{ ml: 'auto' }}
//           onClick={toggleDrawer('right', true)}
//         >
//           <MenuIcon />
//         </IconButton>
//       </Stack>
//       <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
//         {list(anchor)}
//       </Drawer>
//     </>
//   )
// }
export function HeaderMobile() {
  return (
    <Box display={{ xs: 'block', md: 'none' }} py={3}>
      <Container>
        <Stack direction="row" justifyContent="flex-end"></Stack>
      </Container>
    </Box>
  )
}
