import { Chip, List, ListItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useMemo } from 'react'

export interface FilterViewerProps {
  filters: any
  onChange: (value: any) => void
}

const FILTER_LIST = [
  {
    id: 1,
    getLable: () => 'Available',
    isActive: (filters: any) => filters.inventory_status === 'available',
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters: any) => {
      const newFilters = { ...filters }
      if (newFilters.inventory_status === 'available') {
        delete newFilters.inventory_status
      } else {
        newFilters.inventory_status === 'available'
      }
      return newFilters
    },
  },
  {
    id: 2,
    getLable: () => 'discontinued',
    isActive: () => true,
    isVisible: (filters: any) => filters.inventory_status === 'discontinued',
    isRemovable: true,
    onRemove: (filters: any) => {
      const newFilters = { ...filters }
      delete newFilters.inventory_status
      return newFilters
    },
    // onToggle: (filters: any) => {},
  },
  {
    id: 3,
    getLable: () => 'pre_order',
    isActive: () => true,
    isVisible: (filters: any) => filters.inventory_status === 'pre_order',
    isRemovable: true,
    onRemove: (filters: any) => {
      const newFilters = { ...filters }
      delete newFilters.inventory_status
      return newFilters
    },
    // onToggle: (filters: any) => {},
  },
  {
    id: 4,
    getLable: (filters: any) => `Từ ${filters.min} đến ${filters.max}`,
    isActive: (filters: any) => true,
    isVisible: (filters: any) =>
      Object.keys(filters).includes('min') && Object.keys(filters).includes('max'),
    isRemovable: true,
    onRemove: (filters: any) => {
      const newFilters = { ...filters }
      delete newFilters.min
      delete newFilters.max
      return newFilters
    },
    // onToggle: (filters: any) => {},
  },
  {
    id: 5,
    getLable: (filters: any) => `Từ ${filters.rating_average} sao`,
    isActive: (filters: any) => true,
    isVisible: (filters: any) => Object.keys(filters).includes('rating_average'),
    isRemovable: true,
    onRemove: (filters: any) => {
      console.log(filters)
      const newFilters = { ...filters }
      delete newFilters.rating_average
      console.log(newFilters)
      return newFilters
    },
  },
]

export default function FilterViewer({ filters, onChange }: FilterViewerProps) {
  const visibleFilters = useMemo(() => {
    return FILTER_LIST.filter((e) => e.isVisible(filters))
  }, [filters])

  const handleDelete = (e: any) => {
    console.info('You clicked the delete icon.')
  }
  return (
    <Box>
      <Typography variant="body2">Bộ lọc:</Typography>
      <List>
        {visibleFilters.map((e: any) => (
          <ListItem key={e.id}>
            {e.isRemovable ? (
              <Chip
                size="small"
                label={e.getLable(filters)}
                color={e.isActive(filters) ? 'secondary' : 'default'}
                clickable={!e.isRemovable}
                onDelete={() => {
                  if (!onChange) return
                  const newFilters = e.onRemove(filters)
                  onChange(newFilters)
                }}
              />
            ) : (
              <Chip
                size="small"
                label={e.getLable(filters)}
                color={e.isActive(filters) ? 'secondary' : 'default'}
                clickable={!e.isRemovable}
                onClick={() => {
                  if (!onChange) return
                  const newFilters = e.onToggle(filters)
                  onChange(newFilters)
                }}
              />
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
