import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import CardCatalog from '../components/CardCatalog'
import { EcoSupplierProfile } from '../pages/EcoSupplierProfile'
import { Register } from '../pages/Register'
import { Login } from '../pages/Login'

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/component' element={<CardCatalog />} />
        <Route path='/supplier-profile' element={<EcoSupplierProfile />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
