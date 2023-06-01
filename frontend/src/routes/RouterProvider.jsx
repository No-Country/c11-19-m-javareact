import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

import { InfoUser } from '../components/InfoUser'

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/component' element={<InfoUser />} />
      </Routes>
    </BrowserRouter>
  )
}
