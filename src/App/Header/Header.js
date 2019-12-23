import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import IconsItem from './IconsItem/IconsItem'

import './Header.css'
import Settings from './Settings/Settings'


const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="headerInner">
          <Logo />
          <Menu />
          <IconsItem />
          <Settings />
        </div>
      </div>
    </header>
  )
}

export default Header