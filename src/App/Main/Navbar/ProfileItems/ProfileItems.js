import React from 'react'
import style from './ProfileItems.module.css'
import User from './User/User'

const ProfileItems = () => {
    return(
    <div className={style.profileItems}>
        <User />
        <div className={style.subscribersItem}>
            <div className={`${style.subscribers} ${style.sub}`}>
                <p><a href="/" >Followers</a></p>
                <div>155</div>
            </div>
            <div className={style.subscribers}>
                <p><a href="/" >Following</a></p>
                <div>355</div>
            </div>
        </div>
        <div className={style.classProfile}>
            <p><a href="/" >View Profile</a></p>
        </div>
    </div>
    )
}

export default ProfileItems