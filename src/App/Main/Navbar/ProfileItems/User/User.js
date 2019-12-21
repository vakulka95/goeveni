import React from 'react'
import style from "./User.module.css"
import LocationSVG from './LocationSVG'

const User = () => {
    return (
        <div>
            <div>
                <img src="./images/trip.jpg" alt="Profile" className={style.background} />
            </div>
            <div>
                <a href="/" ><img src="./images/Rick.jpg" alt="Ava" className={style.avaProfile} /></a>
            </div>
            <div className={style.name}>
                <p>Roma Vakulenko</p>
            </div>
            <div className={style.location}>
                <a href="/" >
                    <LocationSVG />
                </a>
                <p><span>Ukraine</span></p>
            </div>
        </div>
    )
}

export default User