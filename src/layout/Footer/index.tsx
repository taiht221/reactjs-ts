import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Box, Container, Stack, Typography } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

export default function Footer() {
  return (
    <Box component="footer" bgcolor="secondary.main" pb={4} pt={3}>
      <Container>
        <Stack direction="row" flexWrap="wrap">
          <Box sx={{ width: { md: '30%', xs: '100%' } }}>
            <nav aria-label="text">
              <List>
                <ListItem disablePadding>
                  <ListItemText
                    primary="Built with all the love in the world by Tai "
                    sx={{ color: 'white' }}
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary="Currently v1.0.0." sx={{ color: 'white' }} />
                </ListItem>
              </List>
            </nav>
          </Box>
          <Box sx={{ width: { md: '40%', xs: '100%' } }}>
            <Typography variant="h6" component="h5" color="white" fontWeight="700">
              Author
            </Typography>
            <nav aria-label="text">
              <List>
                <ListItem disablePadding>
                  <ListItemText primary="Huỳnh Tiến Tài" sx={{ color: 'white' }} />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="/" sx={{ padding: '0' }}>
                    <ListItemIcon sx={{ color: 'white', minWidth: 'unset', marginRight: '0.5rem' }}>
                      <EmailOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Email: taiht221@gmail.com" sx={{ color: 'white' }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    component="a"
                    href="https://www.linkedin.com/in/tien-tai-dev/"
                    sx={{ padding: '0' }}
                  >
                    <ListItemIcon sx={{ color: 'white', minWidth: 'unset', marginRight: '0.5rem' }}>
                      <LinkedInIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="https://www.linkedin.com/in/tien-tai-dev/"
                      sx={{ color: 'white' }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
          <Box sx={{ width: { md: '30%', xs: '100%' } }}>
            <Typography variant="h6" component="h5" color="white" fontWeight="700">
              Other Projects
            </Typography>
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    component="a"
                    href="https://htshop.vercel.app/"
                    sx={{ padding: '0' }}
                  >
                    <ListItemText primary="HTShop" sx={{ color: 'white' }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    component="a"
                    href="https://post-ui-six.vercel.app"
                    sx={{ padding: '0' }}
                  >
                    <ListItemText primary="PostUI" sx={{ color: 'white' }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    component="a"
                    href="https://gbox-nu.vercel.app/"
                    sx={{ padding: '0' }}
                  >
                    <ListItemText primary="Gbox" sx={{ color: 'white' }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    component="a"
                    href="https://hd-bank.vercel.app/"
                    sx={{ padding: '0' }}
                  >
                    <ListItemText primary="HD Bank" sx={{ color: 'white' }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    component="a"
                    href="https://camry.vercel.app/"
                    sx={{ padding: '0' }}
                  >
                    <ListItemText primary="Toyota" sx={{ color: 'white' }} />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
