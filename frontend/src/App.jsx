import React from 'react'
import { RouterProvider } from './routes/RouterProvider'

import { GlobalStyles } from './styled-components/base/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider />
    </>
  )
}

export default App
