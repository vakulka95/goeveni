import React from 'react'
import style from './ExploreEvent.module.css'

const ExploreEvent = () => {
    return (
        <div className={style.exploreEvents}>
            <div>
                <h2>Explore Events</h2>
            </div>
            <div className={style.events}>
                <div className={style.event}>
                    <a href="/"><img src="images/Today.png" alt="2" /></a>
                </div>
                <div className={style.event}>
                    <a href="/"><img src="images/Tomorrow.png" alt="2" /></a>
                </div>
                <div className={style.event}>
                    <a href="/"><img src="images/ThisWeek.png" alt="2" /></a>
                </div>
                <div className={style.event}>
                    <a href="/"><img src="images/ChooseDate.png" alt="2" /></a>
                </div>
            </div>

        </div>
    )
}

export default ExploreEvent