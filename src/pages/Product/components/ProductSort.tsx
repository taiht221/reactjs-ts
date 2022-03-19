import { Paper, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import * as React from 'react'
export interface ProductSortProps {
  currentSort?: string
  onChange: (newValue?: any) => void
  result?: number
  categoryName: string
}

export default function ProductSort({
  currentSort,
  onChange,
  result,
  categoryName = 'All Product',
}: ProductSortProps) {
  const handleSortChange = (e: any, newValue: any) => {
    if (onChange) onChange(newValue)
  }
  document.title = categoryName.toUpperCase()
  return (
    <>
      <Paper>
        <Stack
          margin={2}
          padding={2}
          direction={{ md: 'row', xs: 'column' }}
          justifyContent="space-between"
        >
          <Stack>
            <Typography
              variant="body1"
              sx={{ textTransform: 'capitalize' }}
            >{`Searching for "${categoryName}"`}</Typography>
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
              aria-label="products sort"
              scrollButtons="auto"
              variant="scrollable"
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
