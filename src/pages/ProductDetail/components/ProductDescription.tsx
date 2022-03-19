import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material'
import DOMPurify from 'dompurify'
import React, { useState } from 'react'
import './style.css'

export interface ProductDescriptionProps {
  data: any
}

function ProductDescription({ data }: ProductDescriptionProps) {
  const safeDes = DOMPurify.sanitize(data.description)
  const [hide, setHide] = useState(true)
  return (
    <Box component="section" sx={{ background: '#f6f9fc' }}>
      <Box>
        <Typography variant="h4" component="h2" mb={2}>
          Specification
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              {data?.specifications[0]?.attributes.map((e: any, i: any) => (
                <TableRow key={i}>
                  <TableCell>{e.name}</TableCell>
                  <TableCell>{e.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box className="description-wrap">
        <Typography variant="h4" component="h2" mb={2} mt={2}>
          Description
        </Typography>
        {safeDes ? (
          <Paper elevation={3} sx={{ padding: '2rem' }}>
            <div
              dangerouslySetInnerHTML={{ __html: safeDes }}
              className={hide ? 'hide-infor' : ''}
            ></div>
            {hide ? (
              <Button
                variant="contained"
                color="secondary"
                className="show-more"
                onClick={() => setHide(false)}
                sx={{ marginTop: '1rem', transform: 'translateX(30%)' }}
              >
                Show more
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                className="show-more"
                onClick={() => setHide(true)}
                sx={{ marginTop: '1rem', transform: 'translateX(30%)' }}
              >
                hide
              </Button>
            )}
          </Paper>
        ) : (
          <Paper sx={{ minHeight: '300px' }} />
        )}
      </Box>
    </Box>
  )
}

export default ProductDescription
