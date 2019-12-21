import React from 'react'
import style from './Dialogues.module.css'
import DialoguesList from './DialoguesList/DialoguesList'
// import DialogueWindow from './DialogueWindow/DialogueWindow'
import CheckMes from './CheckMes/CheckMes'
// import { Route } from 'react-router-dom'
import ChatVsDmitri from './ChatVsDmitri/ChatVsDmitri'



const Dialogues = (props) => {
    return (
        <main>
            <div className={style.container}>
                <div className={style.content}>
                    <DialoguesList dialogues={props.dialogues}/>
                    {/* <DialogueWindow /> */}
                    <ChatVsDmitri />
                    <CheckMes />
			</div>
		</div>  
	</main>
            )
        }
        
export default Dialogues