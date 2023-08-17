import React from 'react'
 import './style1.css'
 import { Outlet } from 'react-router-dom'
 import Navbar from './Navbar'

export default function Main() {
  return (
    <div className='main'>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
