import React from 'react'
import { RouterProvider } from './routes/RouterProvider'
import { UserProvider } from './context/user/UserProvider'
import { GlobalStyles } from './styled-components/base/GlobalStyles'

function App() {
  return (
    <UserProvider>
      <GlobalStyles />
      <RouterProvider />
    </UserProvider>
  )
}

export default App
