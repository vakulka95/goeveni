import React from 'react'
import style from './ChatVsDmitri.module.css'

const ChatVsDmitri = () => {
	let createNewMessage = React.createRef()
	let sendMessage = () => {
		let text = createNewMessage.current.value
		alert(text)
	}

    return(
        <div className={style.dialogue}>
					<div className={style.dialogueBackground}>
						<div className={style.dialogueHeader}>
							<div className={style.dialogueUser}>	
								<a href="/"><img src="images/Dmitri.png" alt="2" /></a>
								<p><a href="/">Dmitri</a></p>
							</div> 
							<div className={style.dialogueSearch}>
								<textarea name="search" placeholder="Search"></textarea>
								<button ><img src="images/svg/search.svg" /></button>
							</div> 
						</div> 
						<div className={style.dialogueMain}>
								<div className={style.dialogueCompanionMessage}>
									<p>Hello!</p>
								</div>
								<div className={style.dialogueYourMessage}>
									<p>Hello, man =)</p>
								</div>
								<div className={style.dialogueCompanionMessage}>
									<p>How are you??!</p>
								</div>
								<div className={style.dialogueYourMessage}>
									<p>I'm fine, and you?</p>
								</div>
								<div className={style.dialogueCompanionMessage}>
									<p>Thank you, me too)))</p>
								</div>
								<div className={style.dialogueCompanionMessage}>
									<p>What are you going to do?</p>
								</div>
								<div className={style.dialogueYourMessage}>
									<p>I don't no((</p>
								</div>
						</div>
						<div className={style.dialogueFooter}>
							<textarea ref={ createNewMessage } name="search" placeholder="Write message" ></textarea>
							<button onClick={ sendMessage } >Send</button>							
						</div>
					</div> 
				</div> 
    )
}

export default ChatVsDmitri