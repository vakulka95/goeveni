import React from 'react'
import style from './RightsAndLogo.module.css'

const RightsAndLogo = () => {
    return (
        <div className={style.rightsAndLogo}>
            <div className={style.logoFooter}>
                <img src="images/FooterLogo.png" alt="logo" />
            </div>
            <div className={style.rights}>
                &copy;2018 Goeveni by <a href="/">Gambol</a>. All Rights Reserved
			</div>
        </div>
    )
}

export default RightsAndLogo