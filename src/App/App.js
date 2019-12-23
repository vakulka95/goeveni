import React from 'react'
import Header from './Header/Header'
import './reset.css'
import './App.css'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import { Route } from 'react-router-dom'
import Dialogues from './Dialogues/Dialogues'


const App = (props) => {

  return (
    <body>
      <Header />
      <Route path='/' exact render={() =>
        <Main
          friends={props.state.friends}
          posts={props.state.posts}
          addPost={props.addPost}
          newPostText={props.state.newPostText}
          updateNewPostText={props.updateNewPostText}
           />} />
      <Route path='/Dialogues' exact render={() => <Dialogues dialogues={props.state.dialogues} />} />
      <Footer />
    </body>


  )
}

export default App