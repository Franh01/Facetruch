import { GET_POSTS, DELETE_POST } from "../actions/actionTypes/actionTypes";

const initialState = {
    posts: []
};

const postsReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case GET_POSTS:
            return {
                posts: payload
            }
        case DELETE_POST:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default postsReducer;