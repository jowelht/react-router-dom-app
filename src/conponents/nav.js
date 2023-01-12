import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../hook/useAuth'

const Nav = () => {
    const auth = useAuth()
    return (
      <ul className="nav-menu">
          <li><NavLink className={(nav)=> nav.isActive ? "active" : ''} to="/" >Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          { auth ? 
              <li><NavLink to="deshboard">Deshboard</NavLink></li> 
              : 
              <li><NavLink to="login">Login</NavLink></li> 
          }
          
      </ul>
    )
}

export default Nav