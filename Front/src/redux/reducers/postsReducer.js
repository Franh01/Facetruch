import { GET_POSTS, DELETE_POST, GET_POSTS_BY_PARAMS } from "../actions/actionTypes/actionTypes";

const initialState = {    
    posts: [],
    searchedPosts: []
};

const postsReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload
            }
        case DELETE_POST:
            return {
                ...state
            }
        case GET_POSTS_BY_PARAMS:
            return {
                ...state,
                searchedPosts: payload
            }
        default:
            return state;
    }
}

export default postsReducer;