import React from 'react'
import style from './NewPost.module.css'

const NewPost = (props) => {
    console.log(NewPost);
    let newPostElement = React.createRef();

    let addPost = () =>{

        let text = newPostElement.current.value
        props.addPost(text);

    }

    return (
        <div className={style.newPost}>
            <h2>Add Post</h2>
            <form>
                <div>
                    <textarea ref={ newPostElement }></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add</button>
                </div>
            </form>
        </div>
    )
}

export default NewPost