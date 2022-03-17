import { Box, Button, Divider, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'

export interface FilterByPriceProps {
  onChange: (value: any) => void
}

export default function FilterByPrice({ onChange }: FilterByPriceProps) {
  const [value, setValue] = useState({
    min: 0,
    max: 0,
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }
  const handleSubmit = () => {
    if (onChange) onChange(value)
  }
  const resetPrice = () => {
    setValue({
      min: 0,
      max: 0,
    })
  }
  return (
    <Box padding={2}>
      <Typography variant="h6" component="h2" color="secondary">
        Price Range
      </Typography>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        <TextField
          name="min"
          value={value.min > 0 ? value.min : ''}
          onChange={handleChange}
          type="number"
          variant="standard"
          placeholder="0"
        />
        <span>-</span>
        <TextField
          name="max"
          value={value.max > 0 ? value.max : ''}
          onChange={handleChange}
          type="number"
          variant="standard"
          placeholder="250"
        />
      </Stack>
      <Stack direction="row" spacing={1} pt={1}>
        <Button variant="outlined" color="primary" size="small" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="outlined" color="primary" size="small" onClick={resetPrice}>
          Reset
        </Button>
      </Stack>
    </Box>
  )
}
