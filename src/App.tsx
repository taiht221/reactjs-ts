import Box from '@mui/material/Box'
import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Account from './pages/Account'
import Cart from './pages/Cart'
import Caterogy from './pages/Category'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
export default function App() {
  return (
    <Box>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Caterogy />} />
        <Route path="/profile" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:slug" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Box>
  )
}
