import { List, ListItemButton, Skeleton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import categoryApi from '../../../../api/categoryApi'

interface FilterByCategoryprops {
  onChange: (value: any) => void
}

function FilterByCategory({ onChange }: FilterByCategoryprops) {
  const [categoryList, setCategoryList] = useState<any>([])
  const [loading, setLoading] = useState<Boolean>(true)
  useEffect(() => {
    ;(async () => {
      try {
        const { data }: any = await categoryApi.getAll()
        setCategoryList(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    })()

    return () => {}
  }, [])
  const handelCategoryClick = (category: any) => {
    if (onChange) {
      onChange(category.slug)
      console.log(category.slug)
    }
  }
  return (
    <>
      <Box padding={2}>
        <Typography variant="h6" component="h2" color="secondary">
          Categories
        </Typography>
        <List>
          {loading && <CategoryLoading />}
          {categoryList.map((category: any, i: any) => (
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

export function CategoryLoading() {
  return (
    <>
      {Array.from(new Array(15)).map((x, index) => (
        <Skeleton animation="wave" style={{ padding: '0.5rem 0' }} key={index}></Skeleton>
      ))}
    </>
  )
}

export default FilterByCategory
