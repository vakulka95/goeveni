import React from 'react'
import style from './NewsList.module.css'

const NewsItems = ({
    id,
    icon,
    title,
    category
}) => {
    return (
        <div className={style.NewsItem}>
            <div className={style.newsTitle}>
                <img src={icon} alt="news" />
                <p><a href="/">{category}</a></p>
            </div>
            <div className={style.newsText}>
                {title}
                <a href="/">Read more...</a>
            </div>
        </div>
    )
}

export default NewsItems