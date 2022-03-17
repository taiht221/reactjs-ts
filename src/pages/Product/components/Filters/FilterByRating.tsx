import { Box, Checkbox, FormControlLabel, List, ListItem, Rating, Typography } from '@mui/material'

export interface FilterByRatingProps {
  filters: any
  onChange: (values: any) => void
}

export default function FilterByRating({ filters, onChange }: FilterByRatingProps) {
  const handleChange = (e: any) => {
    if (!onChange) return
    const { name, value } = e.target
    onChange({ rating_average: name })
  }
  return (
    <Box padding={2}>
      <Typography variant="h6" component="h2" color="secondary">
        Ratings
      </Typography>
      <List>
        {[
          { rating_average: '5', value: 5 },
          { rating_average: '4', value: 4 },
          { rating_average: '3', value: 3 },
          { rating_average: '2', value: 2 },
          { rating_average: '1', value: 1 },
        ].map((rating) => (
          <ListItem key={rating.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={rating.rating_average === filters.rating_average}
                  onChange={handleChange}
                  name={rating.rating_average}
                  color="secondary"
                  value={rating.rating_average}
                />
              }
              label={<Rating name="read-only" value={rating.value} readOnly />}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
