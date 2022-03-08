import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Footer, Header } from './components/common'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'
export default function App() {
  return (
    <Box>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/thanh-toan" element={Checkout} />
  <Route path="/search" element={ProductFeature} />
  <Route path="/thong-tin" element={UserDetails} />
  <Route path="/cart" element={CartPage} />
  <Route path="/:slug?" element={ProductDetail} />

  <Route element={Page404} /> */}
      </Routes>
      <Footer />
    </Box>
  )
}
