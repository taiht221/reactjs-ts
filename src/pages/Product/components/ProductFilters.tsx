import { Divider } from '@mui/material'
import React from 'react'
import FilterByCategory from './Filters/FilterByCategory'
import FilterByPrice from './Filters/FilterByPrice'
import FilterByRating from './Filters/FilterByRating'
import FilterByStatus from './Filters/FilterBySatus'

interface ProductFiltersprops {
  filters: any
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
    filters.categories == newCategoryId.match(/\d+/)[0] ? null : onChange(newFilters)
  }
  const handlePriceChange = (newPrice: any) => {
    if (!onChange) return
    filters.max == newPrice.max ? null : onChange(newPrice)
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
