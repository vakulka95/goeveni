import { rerenderEntireTree } from './../render';

const state = {
    friends: [
        {
            id: 1,
            image: "images/Dmitri.png",
            name: "Dmitri"
        },
        {
            id: 2,
            image: "images/Natalia.jpg",
            name: "Natalia"
        },
        {
            id: 3,
            image: "images/Vladimir.png",
            name: "Vladimir"
        },
        {
            id: 4,
            image: "images/Oleg.png",
            name: "Oleg"
        },
        {
            id: 5,
            image: "images/Olga.png",
            name: "Olga"
        }
    ],
    posts: [
        {
            id: 1,
            date: 17.122019,
            text: "My first post",
            likes: 57,
            comments: 3,
        },
        {
            id: 2,
            date: 17.122019,
            text: "It's my dream",
            likes: 57,
            comments: 3,
        },
      
      ],
    newPostText: 'Hello, World',
    dialogues:[
        {
            id: 1,
            avaChat: 'images/Dmitri.png',
            nameChat: 'Dmitri',
            textChat: 'Lorem ipsum',
            time: 11.23 
        },
        {
            id: 2,
            avaChat: 'images/Natalia.jpg',
            nameChat: 'Natalia',
            textChat: 'Lorem ipsum',
            time: 11.23 
        },
        {
            id: 3,
            avaChat: 'images/Vladimir.png',
            nameChat: 'Vladimir',
            textChat: 'Lorem ipsum',
            time: 11.23 
        },
        {
            id: 4,
            avaChat: 'images/Olga.png',
            nameChat: 'Olga',
            textChat: 'Lorem ipsum',
            time: 11.23 
        },
        {
            id: 5,
            avaChat: 'images/Oleg.png',
            nameChat: 'Oleg',
            textChat: 'Lorem ipsum',
            time: 11.23 
        }
    ],
}

export let addPost = () =>{

    let newPost = {
        id: 3,
        date: 21.12,
        text: state.newPostText,
        likes: 40,
        comments: 2,    
    };
    state.posts.push(newPost);
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) =>{
    state.newPostText = newText;
    rerenderEntireTree(state)
}


export default state