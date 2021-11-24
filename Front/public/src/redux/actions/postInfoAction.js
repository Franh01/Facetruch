//Actions
import { AXIOS_GET_POSTS, DELETE_POST } from "./actionTypes/actionTypes";
import axios from 'axios';

export const axiosGetPost = () => {
    return (dispatch) => {
        axios.get('http://localhost:1337/posts')
            .then(r => r.data)
            .then(data => {
                dispatch({
                    type: AXIOS_GET_POSTS,
                    payload: data
                })
            })
    }
}

export const deletePost = (id) => {
    return (dispatch) => {
        console.log(id)
        axios.delete(`http://localhost:1337/posts/${id}`)
            .then(r => r.data)
            .then(data => {
                dispatch({
                    type: DELETE_POST,
                    payload: data
                })
            })
    }
}


