import React from 'react'
import style from './Main.module.css'
import Navbar from './Navbar/Navbar'
import Tape from './Tape/Tape'
import Sidebar from './Sidebar/Sidebar'


const Main = (props) => {
  return (
    <main>
      <div className={style.container}>
        <div className={style.content}>
          <Navbar friends={props.friends}/>
          <Tape posts={props.posts} addPost={props.addPost}/>
          <Sidebar />
        </div>
      </div>
    </main>
  )
}

export default Main