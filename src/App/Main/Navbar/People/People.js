import React from 'react'
import style from './People.module.css'
import Friend from './Friend/Friend'


const People = (props) => {
 
    return (
        <div>
            <h2>People</h2>
            <div className={style.people}>
                <ul>
                    {
                        props.friends.map((friend) => (
                            <div>
                                <Friend id={friend.id} name={friend.name} image={friend.image} />
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default People