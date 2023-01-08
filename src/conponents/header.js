import React from 'react'
import Nav from './nav'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="nav-menu-area">
                <div className="logo">
                    <a href="/">Logo</a>
                </div>
                <Nav/>
            </div>
        </div>
    </header>
  )
}

export default Header