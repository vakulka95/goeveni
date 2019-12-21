import React from 'react'
import style from './NewsList.module.css'
import articles from './articles'
import NewsItems from './NewsItems'

const NewsList = () => {
    return (
        <div className={style.newsList}>
            <h2>News</h2>
            {
                articles.map(({
                    id,
                    icon,
                    title,
                    category
                }) => (
                        <NewsItems
                            id={id}
                            icon={icon}
                            title={title}
                            category={category}
                        />
                    ))
            }



        </div>
    )
}

export default NewsList