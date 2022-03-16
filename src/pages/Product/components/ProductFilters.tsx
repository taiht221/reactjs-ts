import React from 'react'
import PropTypes from 'prop-types'
import FilterByCategory from './Filters/FilterByCategory'
// import FilterByPrice from './Filters/FilterByPrice'
// import FilterByService from './Filters/FilterByService'
// import FilterByRating from './Filters/FilterByRating'

interface ProductFiltersprops {
  filters: Object
  onChange: (value: any) => void
}

function ProductFilters({ filters, onChange }: ProductFiltersprops) {
  const handleCategoryChange = (newCategoryId: any) => {
    if (!onChange) return
    const newFilters = {
      categories: newCategoryId,
    }
    onChange(newFilters)
  }
  const handlePriceChange = (newPrice: any) => {
    if (onChange) onChange(newPrice)
  }
  const handleServiceChange = (newService: any) => {
    if (onChange) onChange(newService)
  }
  const handleRatingChange = (newRating: any) => {
    if (!onChange) return
    const newFilters = {
      rating_average: newRating,
    }
    onChange(newFilters)
  }
  return (
    <>
      <FilterByCategory onChange={handleCategoryChange} />
      {/* <FilterByRating onChange={handleRatingChange} filters={filters} />
      <FilterByPrice onChange={handlePriceChange} filters={filters} />
      <FilterByService onChange={handleServiceChange} filters={filters} /> */}
    </>
  )
}

export default ProductFilters
