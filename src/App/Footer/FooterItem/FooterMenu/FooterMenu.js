import React from 'react'
import style from './FooterMenu.module.css'

const FooterMenu = () => {
    return (
        <div className={style.footerMenu}>
            <a href="/">Privacy</a>
            <a href="/">Term and Conditions</a>
            <a href="/">About</a>
            <a href="/">Contact Us</a>
        </div>
    )
}

export default FooterMenu