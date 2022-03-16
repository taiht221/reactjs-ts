import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Paper, Stack } from '@mui/material'
export interface ProductSortProps {
  currentSort?: string
  onChange: (newValue?: any) => void
  result?: number
}

export default function ProductSort({ currentSort, onChange, result }: ProductSortProps) {
  const handleSortChange = (e: any, newValue: any) => {
    if (onChange) onChange(newValue)
  }
  return (
    <>
      <Paper>
        <Stack margin={2} padding={2} direction="row" justifyContent="space-between">
          <Stack>
            <Typography variant="body1">Searching for “ mobile phone ”</Typography>
            <Typography variant="body2" fontWeight="400">
              {result} results found
            </Typography>
          </Stack>
          <Box>
            <Tabs
              onChange={handleSortChange}
              value={currentSort}
              indicatorColor="secondary"
              textColor="inherit"
              aria-label="disabled tabs example"
            >
              <Tab label="Big Sales" value="discount_rate.-1" />
              <Tab label="Trending Products" value="sort_item.qty.-1" />
              <Tab label="Price Low to High" value="real_price.-1" />
              <Tab label="Price High to Low" value="real_price.1" />
            </Tabs>
          </Box>
        </Stack>
      </Paper>
    </>
  )
}
