import React from "react"
import { useAuth } from "./Auth"
import { Navigate, Outlet, useLocation } from "react-router-dom"

export default function RequireAuth({children}){

    const auth = useAuth()

    const location = useLocation()


    if(!auth.user){
        return <Navigate to='/login' state={{path : location.pathname}}/>
    }

    return <Outlet />

    

}