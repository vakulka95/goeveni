import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = () => {
    return (
        <div className='logo'>
            <NavLink to='/'><img src="images/Logo.png" alt="Logo" /></NavLink>
        </div>
    )
}

export default Logo