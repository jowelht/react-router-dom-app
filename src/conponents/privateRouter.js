import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hook/useAuth'

const PrivateRouter = ({children}) => {
    const auth = useAuth()
    return auth ? children : <Navigate to='/login'/>
}

export default PrivateRouter