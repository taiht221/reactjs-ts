import { Box, Checkbox, FormControlLabel, List, ListItem } from '@mui/material'
import * as React from 'react'

export interface FilterByStatusProps {
  filters: any
  onChange: (values: any) => void
}

export default function FilterByStatus({ filters, onChange }: FilterByStatusProps) {
  const handleChange = (e: any) => {
    if (!onChange) return
    const { name, value } = e.target
    filters.inventory_status == name ? null : onChange({ inventory_status: name })
  }
  return (
    <Box padding={2}>
      <List>
        {['discontinued', 'pre_order', 'available'].map((status, index) => (
          <ListItem key={status}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={status === filters.inventory_status}
                  onChange={handleChange}
                  name={status}
                  color="secondary"
                  value={status}
                />
              }
              label={status}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
