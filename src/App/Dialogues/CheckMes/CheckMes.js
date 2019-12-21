import React from 'react'
import style from './CheckMes.module.css'

const CheckMes = () => {
    return (
        <div className={style.checkMes}>
            <ul>
                <li className={style.allMes}><p>All Messages</p></li>
                <li><p>Importants</p></li>
                <li><p>Unread Messages</p></li>
            </ul>
        </div>
    )
}

export default CheckMes