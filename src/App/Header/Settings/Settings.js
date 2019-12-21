import React from 'react'
import style from './Settings.module.css'


const Settings = () => {
    return (
        <div className={style.settings}>
            <div>
                <a href="/"><img src="images/Rick.jpg" alt="Ava" className={style.ava} /></a>
            </div>
            <div>
                <p>Hi! Roma</p>
            </div>
        </div>
    )
}

export default Settings