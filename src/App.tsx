import Box from '@mui/material/Box'
import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Loading from './layout/Loading'
import Account from './pages/Account'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
export default function App() {
  return (
    <Box>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/*" element={<Product />} />
          <Route path="/profile/*" element={<Account />} />
          <Route path="/:slug" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </Box>
  )
}
