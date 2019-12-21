import React from 'react'
import style from './DialoguesList.module.css'
import { NavLink } from 'react-router-dom'


const DialoguesListItem = (dialogue) => {
    return (
        <div className={style.chat}>
             <NavLink to='/Dialogues/ChatVsDmitri'>
                <figure className={style.linkWrap}>
                    <div className={style.userMessage}>
                        <div className={style.avaChat}>
                            <img src={dialogue.avaChat} alt="ava" />
                        </div>
                        <div className={style.nameMessage}>
                            <div className={style.nameChat}>
                                <p>{dialogue.nameChat}</p>
                            </div>
                            <div className={style.message}>
                                <p>{dialogue.textChat}</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.time}>
                        <p>{dialogue.time}</p>
                    </div>
                </figure>
            </NavLink>
        </div>
    )
}

export default DialoguesListItem