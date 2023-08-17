import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export default function Profile(){
    // console.log()
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout(null)
        navigate('/', {replace : true})
    }


    return(
        <div>
            Your Username : 
            {auth.user && <button onClick={handleLogout}>Logout</button>}
        </div>

    )
}