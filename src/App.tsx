import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Footer, Header } from './components/common'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import { Caterogy } from './components/Category'
import { Account } from './components/Account'
import { Cart } from './components/Cart'
import { NotFound } from './components/NotFound'
import ProductDetail from './components/ProductDetail'
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
