import React from 'react'
import style from './Categories.module.css'

const Categories = () => {
    return (
        <div className={style.categories}>
            <h2>Categories</h2>
            <ul>
                <li>
                    <a href="/" >
                        <img src="images/SVG/public.svg" alt="icon" className={style.categoriesIcon} />
                        Community
						</a>
                </li>
                <li>
                    <a href="/" >
                        <img src="images/SVG/mousic.svg" alt="icon" className={style.categoriesIcon} />
                        Music
						</a>
                </li>
                <li>
                    <a href="/" >
                        <img src="images/SVG/photo.svg" alt="icon" className={style.categoriesIcon} />
                        Photo
						</a>
                </li>
                <li>
                    <a href="/" >
                        <img src="images/SVG/video.svg" alt="icon" className={style.categoriesIcon} />
                        Video
						</a>
                </li>
                <li>
                    <a href="/" >
                        <img src="images/SVG/calender.svg" alt="icon" className={style.categoriesIcon} />
                        Event
						</a>
                </li>
                <li>
                    <a href="/" >
                        <img src="images/SVG/sound.svg" alt="icon" className={style.categoriesIcon} />
                        Podcasts
						</a>
                </li>
                <li>
                    <a href="/" >Other</a>
                </li>
            </ul>
        </div>
    )
}

export default Categories