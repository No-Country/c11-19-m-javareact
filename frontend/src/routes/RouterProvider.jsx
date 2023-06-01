import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import { EcoSupplierProfile } from '../pages/EcoSupplierProfile'
import { Register } from '../pages/Register'
import { Login } from '../pages/Login'
import { InfoUser } from '../pages/InfoUser'

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/supplier-profile' element={<EcoSupplierProfile />} />
        <Route path='/creator-profile' element={<InfoUser />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
