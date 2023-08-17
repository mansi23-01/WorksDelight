import React from 'react'
import { Link } from 'react-router-dom';
 import './style1.css'
 import { useAuth } from './Auth'

export default function Main() {
  const auth = useAuth()
  console.log(!auth.user)

  return (

    <div className='main'>
      
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          {
            !auth.user && <Link to="/login"> Login</Link>

          }
    </div>
  )
}
