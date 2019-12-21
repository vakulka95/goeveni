import React from 'react'
import style from './Tape.module.css'
import NewPost from './NewPost/NewPost'
import PostItem from './PostItem/PostItem'



const Tape = (props) => {

    const postsElements =
    props.posts.map((post)=>(
        <PostItem 
            id={post.id}
            text={post.text}
            date={post.date}
            likes={post.likes}
            comments={post.comments}
        />
    ))
    return (
        <div className={style.tape}>
            
            <NewPost />
            <div>
                { postsElements }
            </div>
            
           

        </div>
    )
}

export default Tape