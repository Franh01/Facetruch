//Actions
import { GET_POSTS, DELETE_POST, NEW_POST } from "./actionTypes/actionTypes";
import axios from 'axios';

export const getPosts = () => {
    return (dispatch) => {
        axios.get('http://localhost:1337/posts')
            .then(r => r.data)
            .then(data => {
                dispatch({
                    type: GET_POSTS,
                    payload: data
                })
            })
    }
}

export const deletePost = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:1337/posts/${id}`)
            .then(r => r.data)
            .then(data => {
                dispatch({
                    type: DELETE_POST
                })
            })
            .then(() => {
                axios.get('http://localhost:1337/posts')
            })
    }
}

export const newPost = ({name, title, url, content}) => {
    return (dispatch) => {
        // console.log({name, title, url, content})
        axios.post('http://localhost:1337/posts', {name, title, url, content})
            .then(() => {
                console.log('IN',{name, title, url, content})
                dispatch({
                    type: NEW_POST
                })
            })
            .then(() => {
                axios.get('http://localhost:1337/posts')
            })
    }
}

