import { Box, Container, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import productApi from '../../../api/productApi'
import { ListReponse } from '../../../models/common'

type productListProps<T> = {}

export default function ListPage() {
  const [productList, setProductList] = useState<productListProps<any>>()
  const [loading, setLoading] = useState<Boolean>(true)
  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await productApi.getAll()
        setProductList(data)
      } catch (error) {
        console.log(error || 'something went wrong')
      }
      //   setLoading(false)
    })()
    return () => {}
  }, [])
  console.log(productList)
  return (
    <Box sx={{ background: '#f6f9fc' }} pt={3}>
      <Container>
        <Grid container>
          <Grid item lg={3}>
            Left
            <Paper>fas</Paper>
          </Grid>
          <Grid item lg={9}>
            Right
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
