import { Divider, List, ListItem, ListItemButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import categoryApi from '../../../../api/categoryApi'

interface FilterByCategoryprops {
  onChange: (value: any) => void
}

function FilterByCategory({ onChange }: FilterByCategoryprops) {
  const [categoryList, setCategoryList] = useState<Array<any>>([])

  useEffect(() => {
    ;(async () => {
      try {
        const response = await categoryApi.getAll()
        setCategoryList(response)
      } catch (error) {
        console.log(error)
      }
    })()

    return () => {}
  }, [])

  const handelCategoryClick = (category: any) => {
    if (onChange) {
      onChange(category.id)
    }
  }
  return (
    <>
      <Box padding={2}>
        <Typography variant="h6" component="h2" color="secondary">
          Categories
        </Typography>
        <List>
          {categoryList.map((category, i) => (
            <ListItemButton
              key={category.id}
              sx={{ textTransform: 'capitalize', padding: '0.5rem 0' }}
              onClick={() => {
                handelCategoryClick(category)
              }}
            >
              {category.title.toLowerCase()}
            </ListItemButton>
          ))}
        </List>
      </Box>
    </>
  )
}

export default FilterByCategory
