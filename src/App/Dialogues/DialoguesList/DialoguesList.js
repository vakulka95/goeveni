import React from 'react'
import style from './DialoguesList.module.css'
import DialoguesListItem from './DialoguesListItem'


const DialoguesList = (props) => {

   
    return (
        <div className={style.dialogues}>
            <div className={style.dialoguesTitle}>
                <h2>Dialogues</h2>
            </div>
            {
                props.dialogues.map((dialogue) => (<DialoguesListItem 
                    id={dialogue.id} 
                    avaChat={dialogue.avaChat} 
                    nameChat={dialogue.nameChat}
                    textChat={dialogue.textChat}
                    time={dialogue.time}/>))
            }
        </div>
    )
}

export default DialoguesList