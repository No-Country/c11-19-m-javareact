import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './routes/Layout'

import { GlobalStyles } from './styled-components/base/GlobalStyles'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Layout />
      </BrowserRouter>
  )</>
}

export default App
