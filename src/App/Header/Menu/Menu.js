import React from 'react'
import style from './Menu.module.css'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return(
    <nav className={style.menu}>
        <NavLink to='/'>Home</NavLink>
        <a href="/">Discussion</a>
        <a href="/">Weather</a>
        <a href="/">Pages</a>
        <a href="/">Blog</a>
    </nav>
    )
}

export default Menu