import React from 'react'
import style from './PostItem.module.css'

const PostItem = (post) => {
    return (
        
        <div className={style.postItem}>
            <div className={style.postHeader}>
                <div className={style.user}>
                    <div className={style.avaPeople}>
                        <a href="/"><img src='images/Rick.jpg' alt="Ava" /></a>
                    </div>
                    <div className={style.nameUser}>
                        <a href="/">Roma Vakulenko</a>
                    </div>
                </div>
                <div className={style.dateAndBasket}>
                    <p>{post.date}</p>
                    <img src="images/svg/basket.svg" alt="basket" className={style.basket} />
                </div>
            </div>
            <div className={style.postContent}>
                <p>{post.text}</p>
            </div>
            <div className={style.postFooter}>
                <div className={style.likesComments}>
                    <div className={style.likes}>
                        <img src="images/svg/like.svg" alt="like" />
                        <p>Likes: {post.likes}</p>
                    </div>
                    <div className={style.comments}>
                        <img src="images/comment.png" alt="comment" />
                        <p>Comments: {post.comments}</p>
                    </div>
                </div>
                <div className={style.share}>
                    <img src="images/svg/share-2.svg" alt="share" />
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default PostItem