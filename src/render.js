import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom'
import { addPost, updateNewPostText } from './Redux/state'


export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter >
            <App state={ state }  addPost={ addPost } updateNewPostText={ updateNewPostText }/>
        </BrowserRouter>, document.getElementById('root'));
} 


