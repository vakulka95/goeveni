import React from 'react'
import style from './NewPost.module.css'

const NewPost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () =>{
        let text = newPostElement.current.value
        props.addPost(text)
    }

    let updateNewPost = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    

    return (
        <div className={style.newPost}>
            <h2>Add Post</h2>
            <div>
                <div className={style.form}>
                    <textarea ref={ newPostElement } onChange={ updateNewPost } value={ props.newPostText } />
                </div>
                <div>
                    <button onClick={ addPost }>Add</button>
                </div>
            </div>
        </div>
    )
}

export default NewPost