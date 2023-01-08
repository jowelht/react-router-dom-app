import React from 'react'
import { NavLink } from 'react-router-dom'

const Deshboard = ({title}) => {
    return (
        <div>
            <h1>{title}</h1>
            <NavLink to="/services">Serices</NavLink>
        </div>
    )
}

export default Deshboard
