import React from 'react'
import style from './Footer.module.css'
import FooterItem from './FooterItem/FooterItem'

const Footer = () => {
    return(
    <footer>
        <div className={style.container}>
            <FooterItem />
        </div>
    </footer>
    )
}

export default Footer