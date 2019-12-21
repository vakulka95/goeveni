import React from 'react'
import style from './IconsItem.module.css'
import { NavLink } from 'react-router-dom'

const IconsItem = () => {
    return(
        <div className={style.iconsItem}>
            <div className={style.icon}>
              <img src="images/Search.png" alt="Search" />
            </div>
            <div className={style.icon}>
           <img src="images/Friends.png" alt="Friends" />
              <div className={style.circle}></div>
            </div>
            <div className={style.icon}>
              <NavLink to="/Dialogues"><img src="images/Message.png" alt="Message" /></NavLink>
              <div className={style.circle}></div>
            </div>
            <div className={style.icon}>
              <img src="images/Bell.png" alt="Bell" />
              <div className={style.circle}></div>
            </div>
          </div>
    )
}

export default IconsItem