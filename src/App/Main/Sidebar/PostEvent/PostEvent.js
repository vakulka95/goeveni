import React from 'react'
import style from './PostEvent.module.css'

const PostEvent = () => {
    return (
        <div className={style.postEvent}>
            <div className={style.eventTitle}>
                <h2>Want to Post Your Event</h2>
            </div>
            <div className={style.eventText}>
                <p>
                    Post your event on Goeveni for
                    free. Just make an account and
                    add it through the simple form.
                    As simple as that.
					</p>
            </div>
            <div className={style.addEvent}>
                <button>Post It Now</button>
            </div>
        </div>
    )
}

export default PostEvent