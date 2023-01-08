import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../hook/useAuth'

const Nav = () => {
    const auth = useAuth()
    console.log(auth)
  return (
    <ul className="nav-menu">
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="about">About</NavLink></li>
        { auth ? 
            <li><NavLink to="deshboard">Deshboard</NavLink></li> 
            : 
            <li><NavLink to="login">Login</NavLink></li> 
        }
        
    </ul>
  )
}

export default Nav