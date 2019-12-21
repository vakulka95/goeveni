import React from 'react'
import style from './Friend.module.css'

const Friend = (friend) => {
    return (
        <li>
            <div className={style.profileUser}>
                <div className={style.avaPeople}>
                    <a href="/" >
                        <img src={friend.image} alt="ava" />
                    </a>
                </div>
                <div className={style.userName}>
                    <a href="/">
                        {friend.name}
                    </a>
                </div>
            </div>
            <div className={style.addFriend}>
                <img src="images/svg/user-add.svg" alt="addFriend" />
            </div>
        </li>
    )
}

export default Friend