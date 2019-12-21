import React from 'react'
import style from './Sidebar.module.css'
import PostEvent from './PostEvent/PostEvent'
import ExploreEvent from './ExploreEvent/ExploreEvent'
import NewsList from './NewsList/NewsList'

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <PostEvent />
            <ExploreEvent />
            <NewsList />
            
        </div>
    )
}

export default Sidebar