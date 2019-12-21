import React from 'react'
import style from './FooterItem.module.css'
import RightsAndLogo from './RightsAndLogo/RightsAndLogo'
import FooterMenu from './FooterMenu/FooterMenu'

const FooterItem = () => {
    return (
        <div className={style.footerItem}>
            <RightsAndLogo />
            <FooterMenu />
        </div>
    )
}

export default FooterItem