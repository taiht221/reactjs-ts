import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import { Avatar, Box, Grid, Paper, Stack, Typography } from '@mui/material'
import * as React from 'react'
export interface ProfileInfoProps {
  info: {
    email: string
    username: string
    id: number
  }
}

export default function ProfileInfo({ info }: ProfileInfoProps) {
  return (
    <Box>
      <Stack direction="row" sx={{ alignItems: 'center' }} pb={2}>
        <PermIdentityOutlinedIcon
          color="primary"
          sx={{ marginRight: '0.5rem' }}
        ></PermIdentityOutlinedIcon>
        <Typography component="h2" variant="h4" fontWeight="700">
          Profile Info
        </Typography>
      </Stack>
      <Grid container spacing={1} sx={{ alignItems: 'strech' }}>
        <Grid item lg={6} xs={12}>
          <Paper
            sx={{
              display: 'flex',
              borderRadius: '8px',
              padding: '1rem 1rem',
              alignItems: 'center',
            }}
          >
            <Avatar
              alt=""
              src="https://nextjs-bay-ten-52.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.c0b567c2.png&w=1920&q=75"
              sx={{
                width: '6rem',
                height: '6rem',
                '>img': {
                  width: '100%',
                  height: '100%',
                  textAlign: 'center',
                  objectFit: 'cover',
                  color: 'transparent',
                  textIndent: '10000px',
                },
              }}
            ></Avatar>
            <Box sx={{ flex: '1 1 0px', marginLeft: '1rem' }}>
              <Stack
                direction="row"
                sx={{
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <Typography variant="h6" component="h5">
                    {info.username}
                  </Typography>
                  <Stack
                    sx={{
                      alignItems: 'center',
                    }}
                    direction="row"
                  >
                    <Typography variant="body2">{info.email}</Typography>
                  </Stack>
                </div>
                <Typography variant="body2">SILVER USER</Typography>
              </Stack>
            </Box>
          </Paper>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Grid container spacing={2}>
            <Grid item md={3} xs={6}>
              <Paper
                sx={{
                  display: 'flex',
                  borderRadius: '8px',
                  padding: '1rem 1rem',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <h3>16</h3>
                <Typography
                  sx={{
                    fontSize: '12px',
                    lineHeight: '1.5',
                    color: 'rgb(125, 135, 156)',
                    textAlign: 'center',
                    textTransform: 'none',
                    whiteSpace: 'normal',
                  }}
                >
                  All Orders
                </Typography>
              </Paper>
            </Grid>
            <Grid item md={3} xs={6}>
              <Paper
                sx={{
                  display: 'flex',
                  borderRadius: '8px',
                  padding: '1rem 1rem',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <h3>02</h3>
                <Typography
                  sx={{
                    fontSize: '12px',
                    lineHeight: '1.5',
                    color: 'rgb(125, 135, 156)',
                    textAlign: 'center',
                    textTransform: 'none',
                    whiteSpace: 'normal',
                  }}
                >
                  Awaiting Payments
                </Typography>
              </Paper>
            </Grid>
            <Grid item md={3} xs={6}>
              <Paper
                sx={{
                  display: 'flex',
                  borderRadius: '8px',
                  padding: '1rem 1rem',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <h3>00</h3>
                <Typography
                  sx={{
                    fontSize: '12px',
                    lineHeight: '1.5',
                    color: 'rgb(125, 135, 156)',
                    textAlign: 'center',
                    textTransform: 'none',
                    whiteSpace: 'normal',
                  }}
                >
                  Awaiting Shipment
                </Typography>
              </Paper>
            </Grid>
            <Grid item md={3} xs={6}>
              <Paper
                sx={{
                  display: 'flex',
                  borderRadius: '8px',
                  padding: '1rem 1rem',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <h3>01</h3>
                <Typography
                  sx={{
                    fontSize: '12px',
                    lineHeight: '1.5',
                    color: 'rgb(125, 135, 156)',
                    textAlign: 'center',
                    textTransform: 'none',
                    whiteSpace: 'normal',
                  }}
                >
                  Awaiting Delivery
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
