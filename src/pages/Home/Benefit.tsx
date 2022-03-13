import { Container, Stack, Button, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined'
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined'
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'
export function Benefit() {
  return (
    <Box component="section" bgcolor="#f6f9fc" pb={6} pt={3}>
      <Container>
        <Stack direction={{ md: 'row', xs: 'column' }} spacing={2}>
          <Paper
            elevation={2}
            sx={{ '&:hover': { boxShadow: '0px 8px 45px rgb(3 0 71 / 9%)' }, minWidth: 'unset' }}
          >
            <Stack sx={{ justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
              <Button
                color="inherit"
                sx={{
                  marginBottom: '1rem',
                  borderRadius: '50%',
                  minWidth: 'unset',
                }}
                size="large"
              >
                <LocalShippingOutlinedIcon
                  sx={{ fontSize: '3rem' }}
                  color="secondary"
                ></LocalShippingOutlinedIcon>
              </Button>
              <Typography variant="h6" component="h3" mb={2}>
                Worldwide Delivery
              </Typography>
              <Typography component="p" color="#cecece" textAlign="center">
                We offer competitive prices on our 100 million plus product any range.
              </Typography>
            </Stack>
          </Paper>
          <Paper
            elevation={2}
            sx={{ '&:hover': { boxShadow: '0px 8px 45px rgb(3 0 71 / 9%)' }, minWidth: 'unset' }}
          >
            <Stack sx={{ justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
              <Button
                color="inherit"
                sx={{ marginBottom: '1rem', borderRadius: '50%', minWidth: 'unset' }}
                size="large"
              >
                <CreditScoreOutlinedIcon
                  color="secondary"
                  sx={{ fontSize: '3rem' }}
                ></CreditScoreOutlinedIcon>
              </Button>
              <Typography variant="h6" component="h3" mb={2}>
                Safe Payment
              </Typography>
              <Typography component="p" color="#cecece">
                We offer competitive prices on our 100 million plus product any range.
              </Typography>
            </Stack>
          </Paper>
          <Paper
            elevation={2}
            sx={{ '&:hover': { boxShadow: '0px 8px 45px rgb(3 0 71 / 9%)' }, minWidth: 'unset' }}
          >
            <Stack sx={{ justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
              <Button
                color="inherit"
                sx={{ marginBottom: '1rem', borderRadius: '50%', minWidth: 'unset' }}
                size="large"
              >
                <HealthAndSafetyOutlinedIcon
                  sx={{ fontSize: '3rem' }}
                  color="secondary"
                ></HealthAndSafetyOutlinedIcon>
              </Button>
              <Typography variant="h6" component="h3" mb={2}>
                Shop With Confidence
              </Typography>
              <Typography component="p" color="#cecece">
                We offer competitive prices on our 100 million plus product any range.
              </Typography>
            </Stack>
          </Paper>
          <Paper
            elevation={2}
            sx={{ '&:hover': { boxShadow: '0px 8px 45px rgb(3 0 71 / 9%)' }, minWidth: 'unset' }}
          >
            <Stack sx={{ justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
              <Button
                color="inherit"
                sx={{ marginBottom: '1rem', borderRadius: '50%', minWidth: 'unset' }}
                size="large"
              >
                <SupportAgentOutlinedIcon
                  color="secondary"
                  sx={{ fontSize: '3rem' }}
                ></SupportAgentOutlinedIcon>
              </Button>
              <Typography variant="h6" component="h3" mb={2}>
                W24/7 Support
              </Typography>
              <Typography component="p" color="#cecece" fontWeight="500">
                We offer competitive prices on our 100 million plus product any range.
              </Typography>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  )
}
