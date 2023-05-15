import React from 'react'
import { Outlet } from 'react-router-dom'

function Footer() {
  return (
    <>
        <div>Footer</div>
        <Outlet/>
    </>
    
  )
}

export default Footer