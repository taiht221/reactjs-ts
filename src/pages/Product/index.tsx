import * as React from 'react'
import { useMatch, useLocation } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../ProductDetail'
import ListPage from './pages/ListPage'

export interface ProductProps {}

export default function Product(props: ProductProps) {
  const location = useLocation()
  return (
    <>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/:slug" element={<ProductDetail />} />
      </Routes>
    </>
  )
}