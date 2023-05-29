import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import CardCatalog from '../components/CardCatalog'

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/component' element={<CardCatalog />} />
      </Routes>
    </BrowserRouter>
  )
}
