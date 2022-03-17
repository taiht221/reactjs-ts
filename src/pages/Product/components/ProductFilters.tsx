import React from 'react'
import PropTypes from 'prop-types'
import FilterByCategory from './Filters/FilterByCategory'
import FilterByPrice from './Filters/FilterByPrice'
import { Divider } from '@mui/material'
import FilterByRating from './Filters/FilterByRating'
import FilterByStatus from './Filters/FilterBySatus'
// import FilterByPrice from './Filters/FilterByPrice'
// import FilterByService from './Filters/FilterByService'
// import FilterByRating from './Filters/FilterByRating'

interface ProductFiltersprops {
  filters: Object
  onChange: (value: any) => void
  setCategoryName: (value: string) => void
}

function ProductFilters({ filters, onChange, setCategoryName }: ProductFiltersprops) {
  const handleCategoryChange = (newCategoryId: any) => {
    if (!onChange) return
    const newFilters = {
      categories: newCategoryId.match(/\d+/)[0],
    }
    setCategoryName(newCategoryId.replace(/[0-9]/g, '').split('-id').join('').split('-').join(' '))
    onChange(newFilters)
  }
  const handlePriceChange = (newPrice: any) => {
    if (onChange) onChange(newPrice)
  }
  const handleRatingChange = (newRating: any) => {
    if (onChange) onChange(newRating)
  }
  const handleStatusChange = (newStatus: any) => {
    if (onChange) onChange(newStatus)
  }
  return (
    <>
      <FilterByCategory onChange={handleCategoryChange} />
      <Divider />
      <FilterByPrice onChange={handlePriceChange} />
      <Divider />
      <FilterByRating onChange={handleRatingChange} filters={filters} />
      <Divider />
      <FilterByStatus onChange={handleStatusChange} filters={filters} />
    </>
  )
}

export default ProductFilters
