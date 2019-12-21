import React from 'react'
import style from './Navbar.module.css'
import ProfileItems from './ProfileItems/ProfileItems'
import Categories from './Categories/Categories'
import People from './People/People'

const Navbar = (props) => {
    return (
        <div className={style.navbar}>
            <ProfileItems />
            <Categories />            
            <People friends={props.friends}/>                
        </div>
    )
}

export default Navbar