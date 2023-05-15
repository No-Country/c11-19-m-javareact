import React from 'react'
import { Outlet } from 'react-router-dom'

function Header() {
  return (
    <>
    <div>Header</div>
    <Outlet/>
    </>
  )
}

export default Header
