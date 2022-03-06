import * as React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import App from './App'
import theme from './theme'
import { Footer, Header } from './components/common'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <BrowserRouter>
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
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
