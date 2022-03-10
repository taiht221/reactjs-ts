import Box from '@mui/material/Box'
import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import Account from './components/pages/Account'
import Cart from './components/pages/Cart'
import Caterogy from './components/pages/Category'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import ProductDetail from './components/pages/ProductDetail'
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
