import React from 'react'
import style from './DialogueWindow.module.css'

 
const DialogueWindow = () => {
    return (
        <div className={style.dialogue}>
            <div className={style.dialogueBackground}>
                <h2>Get started a dialogue with someone...</h2>
            </div>
        </div>
    )
}

export default DialogueWindow